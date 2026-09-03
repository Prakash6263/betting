const express = require('express');
const ctrl = require('../controllers/profileController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', protect, ctrl.getProfile);
router.put('/profile', protect, ctrl.updateProfile);
router.put('/profile/password', protect, ctrl.changePassword);

module.exports = router;
