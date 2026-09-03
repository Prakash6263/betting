const mongoose = require('mongoose');
const crypto = require('crypto');

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    purpose: { type: String, enum: ['email_verify', 'reset_password'], required: true },
    codeHash: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    consumed: { type: Boolean, default: false },
    attempts: { type: Number, default: 0 },
    lastResentAt: { type: Date },
  },
  { timestamps: true }
);

otpSchema.index({ email: 1, purpose: 1 });

otpSchema.statics.hashCode = function (code) {
  return crypto.createHash('sha256').update(String(code)).digest('hex');
};

otpSchema.statics.generateCode = function () {
  return String(Math.floor(100000 + Math.random() * 900000));
};

module.exports = mongoose.model('Otp', otpSchema);
