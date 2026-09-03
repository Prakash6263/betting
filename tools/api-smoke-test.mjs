// Myodin backend API smoke test (auth + profile)
// Usage: node tools/api-smoke-test.mjs
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BACKEND = path.join(__dirname, '..', 'backend');
const envFile = fs.readFileSync(path.join(BACKEND, '.env'), 'utf8');
const env = {};
for (const line of envFile.split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)=(.*)$/i);
  if (m) env[m[1]] = m[2].trim();
}

const BASE = process.env.API_BASE || 'http://localhost:5000';
const TEST_EMAIL = 'thegiantwalletapp@gmail.com';

const require = createRequire(import.meta.url);
const mongoose = require(path.join(BACKEND, 'node_modules', 'mongoose'));

let failures = 0;
let otpOf = {};

async function call(pathname, { method = 'GET', body, token, expectError = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(BASE + pathname, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch { /* no body */ }
  const ok = res.status >= 200 && res.status < 300;
  const tag = ok ? 'PASS' : 'FAIL';
  if (!ok && !expectError) failures += 1;
  const msg = data && data.message ? String(data.message).slice(0, 110) : '';
  console.log(`${tag}  ${method.padEnd(4)} ${pathname.padEnd(38)} -> ${res.status}  ${msg}`);
  return { status: res.status, data };
}

function check(cond, label, extra = '') {
  if (cond) { console.log(`PASS  check ${label}`); }
  else { failures += 1; console.log(`FAIL  check ${label} ${extra}`); }
}

// ---- cleanup previous test data ----
await mongoose.connect(env.MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
await mongoose.connection.db.collection('users').deleteMany({ email: TEST_EMAIL });
await mongoose.connection.db.collection('otps').deleteMany({ email: TEST_EMAIL });
await mongoose.disconnect();
console.log('--- cleanup done, starting tests ---\n');

// 0) health
let r = await call('/api/health');

// 1) signup
r = await call('/api/auth/signup', { method: 'POST', body: { name: 'Myodin Test', email: TEST_EMAIL, password: 'Test@12345' } });
check(r.status === 201 && r.data && r.data.requiresOtp === true, 'signup creates unverified account');
check(r.data && r.data.devOtp, 'signup returns devOtp (dev mode)');
if (r.data && r.data.devOtp) otpOf.email_verify = r.data.devOtp;

// duplicate signup while unverified -> 200 resend
r = await call('/api/auth/signup', { method: 'POST', body: { name: 'Myodin Test', email: TEST_EMAIL, password: 'Test@12345' } });
check(r.status === 200, 'repeat signup resends OTP');
if (r.data && r.data.devOtp) otpOf.email_verify = r.data.devOtp;

// 2) verify OTP
r = await call('/api/auth/verify-otp', { method: 'POST', body: { email: TEST_EMAIL, otp: otpOf.email_verify, purpose: 'email_verify' } });
check(r.status === 200, 'verify OTP activates account');

// send-otp after verified -> 400
r = await call('/api/auth/send-otp', { method: 'POST', body: { email: TEST_EMAIL, purpose: 'email_verify' }, expectError: true });
check(r.status === 400, 'send-otp rejected when already verified');

// 3) login: wrong password -> 401
r = await call('/api/auth/login', { method: 'POST', body: { email: TEST_EMAIL, password: 'wrongpass' }, expectError: true });
check(r.status === 401, 'login rejects wrong password');

// login correct
r = await call('/api/auth/login', { method: 'POST', body: { email: TEST_EMAIL, password: 'Test@12345' } });
check(r.status === 200 && r.data && r.data.token, 'login returns token');
check(r.data && r.data.user && r.data.user.email === TEST_EMAIL, 'login returns user object');
const token = r.data && r.data.token;

// 4) profile get
r = await call('/api/user/profile', { token });
check(r.status === 200 && r.data && r.data.user && r.data.user.email === TEST_EMAIL, 'GET profile works');

// 5) profile update
r = await call('/api/user/profile', { method: 'PUT', token, body: { name: 'Myodin Updated', language: 'en', preferences: { newsletter: true } } });
check(r.status === 200 && r.data && r.data.user.name === 'Myodin Updated', 'PUT profile updates name');
check(r.data && r.data.user.language === 'en' && r.data.user.preferences.newsletter === true, 'PUT profile updates language + preferences');

// 6) change password -> old token invalid
r = await call('/api/user/profile/password', { method: 'PUT', token, body: { currentPassword: 'Test@12345', newPassword: 'NewPass@123' } });
check(r.status === 200, 'change password succeeds');
r = await call('/api/user/profile', { token, expectError: true });
check(r.status === 401, 'old token invalid after password change');

// 7) login with new password
r = await call('/api/auth/login', { method: 'POST', body: { email: TEST_EMAIL, password: 'NewPass@123' } });
check(r.status === 200 && r.data.token, 'login works with new password');
const token2 = r.data && r.data.token;

// 8) logout -> token invalid
r = await call('/api/auth/logout', { method: 'POST', token: token2 });
check(r.status === 200, 'logout succeeds');
r = await call('/api/user/profile', { token: token2, expectError: true });
check(r.status === 401, 'token invalid after logout');

// 9) forgot password (sends reset OTP)
r = await call('/api/auth/forgot-password', { method: 'POST', body: { email: TEST_EMAIL } });
check(r.status === 200 && r.data && r.data.devOtp, 'forgot-password sends reset code');
if (r.data && r.data.devOtp) otpOf.reset_password = r.data.devOtp;

// resend within cooldown -> 429
r = await call('/api/auth/resend-otp', { method: 'POST', body: { email: TEST_EMAIL, purpose: 'reset_password' }, expectError: true });
check(r.status === 429, 'resend-otp respects cooldown (429)');

// verify reset otp via verify-otp (reset_password purpose)
r = await call('/api/auth/verify-otp', { method: 'POST', body: { email: TEST_EMAIL, otp: otpOf.reset_password, purpose: 'reset_password' } });
check(r.status === 200, 'verify-otp accepts reset code');

// wrong otp on reset -> 400
r = await call('/api/auth/reset-password', { method: 'POST', body: { email: TEST_EMAIL, otp: '000000', newPassword: 'Reset@123456' }, expectError: true });
check(r.status === 400, 'reset-password rejects wrong otp');

// hmm: wrong attempt consumed? request fresh code
r = await call('/api/auth/forgot-password', { method: 'POST', body: { email: TEST_EMAIL } });
otpOf.reset_password = r.data && r.data.devOtp;

// 10) reset password with correct otp
r = await call('/api/auth/reset-password', { method: 'POST', body: { email: TEST_EMAIL, otp: otpOf.reset_password, newPassword: 'Reset@123456' } });
check(r.status === 200, 'reset-password succeeds');

// 11) login with the reset password
r = await call('/api/auth/login', { method: 'POST', body: { email: TEST_EMAIL, password: 'Reset@123456' } });
check(r.status === 200 && r.data.token, 'login works after password reset');

console.log(`\n==== RESULT: ${failures === 0 ? 'ALL TESTS PASSED' : failures + ' TEST(S) FAILED'} ====`);
process.exit(failures === 0 ? 0 : 1);
