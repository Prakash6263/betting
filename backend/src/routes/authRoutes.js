const express = require('express');
const rateLimit = require('express-rate-limit');
const ctrl = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Tighten rate limits on sensitive auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 100),
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 100),
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many OTP requests. Please try again later.' },
});

router.post('/signup', authLimiter, ctrl.signup);
router.post('/login', authLimiter, ctrl.login);
router.post('/send-otp', otpLimiter, ctrl.sendOtp);
router.post('/resend-otp', otpLimiter, ctrl.resendOtp);
router.post('/verify-otp', otpLimiter, ctrl.verifyOtp);
router.post('/forgot-password', otpLimiter, ctrl.forgotPassword);
router.post('/reset-password', otpLimiter, ctrl.resetPassword);
router.post('/logout', protect, ctrl.logout);

module.exports = router;
