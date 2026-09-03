const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Otp = require('../models/Otp');
const { sendOtpEmail } = require('../utils/emailService');

const OTP_EXPIRY_MS = (Number(process.env.OTP_EXPIRY_MINUTES) || 10) * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;
const MAX_VERIFY_ATTEMPTS = 5;

function devOtpPayload(code) {
  return process.env.NODE_ENV === 'development' ? { devOtp: code } : {};
}

function signToken(user) {
  return jwt.sign({ id: user._id.toString(), ver: user.tokenVersion || 0 }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function issueAndSendOtp(email, purpose, name) {
  // Invalidate any previous code for this email + purpose
  await Otp.deleteMany({ email, purpose });
  const code = Otp.generateCode();
  await Otp.create({
    email,
    purpose,
    codeHash: Otp.hashCode(code),
    expiresAt: new Date(Date.now() + OTP_EXPIRY_MS),
    lastResentAt: new Date(),
  });
  console.log(`[OTP] ${purpose} code for ${email}: ${code}`);
  try {
    await sendOtpEmail({ to: email, name, otp: code, purpose });
  } catch (err) {
    // Never fail signup/resend when the mail server is unreachable.
    console.warn(`[OTP] Email delivery failed for ${email}: ${err.message || err}`);
  }
  return code;
}

// 1) SIGNUP
async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body || {};
    const cleanEmail = normalizeEmail(email);

    if (!name || !String(name).trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'A valid email is required.' });
    }
    if (!password || String(password).length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
    }

    const existing = await User.findOne({ email: cleanEmail });
    if (existing) {
      if (existing.emailVerified) {
        return res.status(409).json({ success: false, message: 'Email is already registered. Please log in.' });
      }
      existing.name = String(name).trim();
      existing.password = String(password);
      await existing.save();
      const code = await issueAndSendOtp(cleanEmail, 'email_verify', existing.name);
      return res.status(200).json({
        success: true,
        requiresOtp: true,
        message: 'Account already exists but is not verified. A new verification code has been emailed to you.',
        ...devOtpPayload(code),
      });
    }

    await User.create({ name: String(name).trim(), email: cleanEmail, password: String(password) });
    const code = await issueAndSendOtp(cleanEmail, 'email_verify', String(name).trim());

    res.status(201).json({
      success: true,
      requiresOtp: true,
      message: 'Account created. Enter the verification code we emailed you to activate your account.',
      ...devOtpPayload(code),
    });
  } catch (err) {
    next(err);
  }
}

// 2) LOGIN
async function login(req, res, next) {
  try {
    const { email, password } = req.body || {};
    const cleanEmail = normalizeEmail(email);
    if (!isValidEmail(cleanEmail) || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email: cleanEmail }).select('+password');
    if (!user || !(await user.comparePassword(String(password)))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
    if (!user.emailVerified) {
      return res.status(403).json({
        success: false,
        code: 'EMAIL_NOT_VERIFIED',
        message: 'Please verify your email before logging in.',
      });
    }

    res.json({ success: true, token: signToken(user), user: user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

async function getOtpDocument(email, purpose) {
  return Otp.findOne({ email, purpose, consumed: false }).sort({ createdAt: -1 });
}

async function sendOtpCommon(req, res, next, isResend) {
  try {
    const { email, purpose } = req.body || {};
    const cleanEmail = normalizeEmail(email);
    const cleanPurpose = purpose === 'reset_password' ? 'reset_password' : 'email_verify';

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'A valid email is required.' });
    }

    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }
    if (cleanPurpose === 'email_verify' && user.emailVerified) {
      return res.status(400).json({ success: false, message: 'This email is already verified. Please log in.' });
    }

    if (isResend) {
      const existing = await getOtpDocument(cleanEmail, cleanPurpose);
      if (existing && existing.lastResentAt) {
        const elapsed = Date.now() - new Date(existing.lastResentAt).getTime();
        if (elapsed < RESEND_COOLDOWN_MS) {
          const waitSec = Math.ceil((RESEND_COOLDOWN_MS - elapsed) / 1000);
          return res.status(429).json({
            success: false,
            message: `Please wait ${waitSec} seconds before requesting a new code.`,
            retryAfterSec: waitSec,
          });
        }
      }
    }

    const code = await issueAndSendOtp(cleanEmail, cleanPurpose, user.name);
    res.json({ success: true, message: 'Verification code sent to your email.', ...devOtpPayload(code) });
  } catch (err) {
    next(err);
  }
}

// 4) SEND OTP
async function sendOtp(req, res, next) {
  sendOtpCommon(req, res, next, false);
}

// 5) RESEND OTP
async function resendOtp(req, res, next) {
  sendOtpCommon(req, res, next, true);
}

// VERIFY OTP (email verification)
async function verifyOtp(req, res, next) {
  try {
    const { email, otp, purpose } = req.body || {};
    const cleanEmail = normalizeEmail(email);
    const cleanPurpose = purpose === 'reset_password' ? 'reset_password' : 'email_verify';

    if (!isValidEmail(cleanEmail) || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP code are required.' });
    }

    const doc = await getOtpDocument(cleanEmail, cleanPurpose);
    if (!doc || new Date(doc.expiresAt).getTime() < Date.now()) {
      return res.status(400).json({ success: false, code: 'OTP_EXPIRED', message: 'Code is invalid or expired. Request a new one.' });
    }

    if (doc.codeHash !== Otp.hashCode(String(otp).trim())) {
      doc.attempts += 1;
      await doc.save();
      if (doc.attempts >= MAX_VERIFY_ATTEMPTS) {
        await Otp.deleteOne({ _id: doc._id });
        return res.status(429).json({ success: false, message: 'Too many incorrect attempts. Please request a new code.' });
      }
      return res.status(400).json({ success: false, message: 'Incorrect code. Please try again.' });
    }

    if (cleanPurpose === 'reset_password') {
      // Do not consume the code here: resetPassword() is the consuming step.
      return res.json({ success: true, message: 'Code verified. You can now reset your password.' });
    }

    doc.consumed = true;
    await doc.save();

    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }
    user.emailVerified = true;
    await user.save();

    res.json({ success: true, message: 'Email verified successfully. You can now log in.' });
  } catch (err) {
    next(err);
  }
}

// 3) FORGOT PASSWORD (sends reset OTP)
async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body || {};
    const cleanEmail = normalizeEmail(email);
    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'A valid email is required.' });
    }
    const user = await User.findOne({ email: cleanEmail });
    let code = null;
    if (user) {
      code = await issueAndSendOtp(cleanEmail, 'reset_password', user.name);
    }
    res.json({ success: true, message: 'If an account exists for this email, a reset code has been sent.', ...(code ? devOtpPayload(code) : {}) });
  } catch (err) {
    next(err);
  }
}

// RESET PASSWORD (final step of forgot flow)
async function resetPassword(req, res, next) {
  try {
    const { email, otp, newPassword } = req.body || {};
    const cleanEmail = normalizeEmail(email);
    if (!isValidEmail(cleanEmail) || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP code are required.' });
    }
    if (!newPassword || String(newPassword).length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters.' });
    }

    const doc = await getOtpDocument(cleanEmail, 'reset_password');
    if (!doc || new Date(doc.expiresAt).getTime() < Date.now()) {
      return res.status(400).json({ success: false, code: 'OTP_EXPIRED', message: 'Code is invalid or expired. Request a new one.' });
    }
    if (doc.codeHash !== Otp.hashCode(String(otp).trim())) {
      doc.attempts += 1;
      await doc.save();
      if (doc.attempts >= MAX_VERIFY_ATTEMPTS) {
        await Otp.deleteOne({ _id: doc._id });
        return res.status(429).json({ success: false, message: 'Too many incorrect attempts. Please request a new code.' });
      }
      return res.status(400).json({ success: false, message: 'Incorrect code. Please try again.' });
    }

    const user = await User.findOne({ email: cleanEmail }).select('+password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }

    user.password = String(newPassword);
    user.tokenVersion += 1; // invalidate existing sessions
    await user.save();
    doc.consumed = true;
    await doc.save();

    res.json({ success: true, message: 'Password updated successfully. Please log in with your new password.' });
  } catch (err) {
    next(err);
  }
}

// 7) LOGOUT
async function logout(req, res, next) {
  try {
    req.user.tokenVersion += 1;
    await req.user.save();
    res.json({ success: true, message: 'Logged out successfully.' });
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login, sendOtp, resendOtp, verifyOtp, forgotPassword, resetPassword, logout, issueAndSendOtp };
