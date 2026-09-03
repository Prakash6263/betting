const User = require('../models/User');

const ALLOWED_FIELDS = ['name', 'language', 'preferences', 'email'];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// 6a) GET PROFILE
async function getProfile(req, res, next) {
  try {
    res.json({ success: true, user: req.user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

// 6b) UPDATE PROFILE (name, language, preferences)
async function updateProfile(req, res, next) {
  try {
    const body = req.body || {};
    const updates = {};

    if (body.name !== undefined) {
      if (!String(body.name).trim()) {
        return res.status(400).json({ success: false, message: 'Name cannot be empty.' });
      }
      updates.name = String(body.name).trim();
    }

    if (body.email !== undefined) {
      const newEmail = String(body.email).trim().toLowerCase();
      if (!isValidEmail(newEmail)) {
        return res.status(400).json({ success: false, message: 'A valid email is required.' });
      }
      if (newEmail !== String(req.user.email).toLowerCase()) {
        const currentPassword = body.currentPassword;
        if (!currentPassword) {
          return res.status(400).json({ success: false, message: 'Enter your current password to change your email.' });
        }
        const userFull = await User.findById(req.user._id).select('+password');
        if (!(await userFull.comparePassword(String(currentPassword)))) {
          return res.status(401).json({ success: false, message: 'Current password is incorrect.' });
        }
        const taken = await User.findOne({ email: newEmail, _id: { $ne: req.user._id } });
        if (taken) {
          return res.status(409).json({ success: false, message: 'That email is already registered.' });
        }
        updates.email = newEmail;
        updates.emailVerified = false;
      }
    }

    if (body.language !== undefined) {
      if (!['en', 'fr'].includes(body.language)) {
        return res.status(400).json({ success: false, message: 'Language must be "en" or "fr".' });
      }
      updates.language = body.language;
    }

    if (body.preferences !== undefined) {
      const prefs = req.user.preferences || {};
      const allowedPrefs = ['notifications', 'newsletter', 'theme', 'valueSignals'];
      const nextPrefs = {};
      for (const key of allowedPrefs) {
        if (body.preferences[key] !== undefined) {
          if (key === 'theme') {
            if (!['dark', 'light'].includes(body.preferences[key])) {
              return res.status(400).json({ success: false, message: 'Theme must be "dark" or "light".' });
            }
            nextPrefs[key] = body.preferences[key];
          } else if (typeof body.preferences[key] === 'boolean') {
            nextPrefs[key] = body.preferences[key];
          } else {
            return res.status(400).json({ success: false, message: `Preference "${key}" must be a boolean.` });
          }
        } else {
          nextPrefs[key] = prefs[key];
        }
      }
      updates.preferences = nextPrefs;
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ success: false, message: 'Nothing to update.' });
    }

    Object.assign(req.user, updates);
    await req.user.save();

    res.json({ success: true, message: 'Profile updated.', user: req.user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

// 6c) CHANGE PASSWORD (from profile/settings page)
async function changePassword(req, res, next) {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, message: 'Current and new password are required.' });
    }
    if (String(newPassword).length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters.' });
    }

    const user = await User.findById(req.user._id).select('+password');
    if (!(await user.comparePassword(String(currentPassword)))) {
      return res.status(401).json({ success: false, message: 'Current password is incorrect.' });
    }

    user.password = String(newPassword);
    user.tokenVersion += 1; // log out other sessions
    await user.save();

    res.json({ success: true, message: 'Password changed successfully.' });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProfile, updateProfile, changePassword };
