// Myodin API client (browser side)
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const TOKEN_KEY = 'myodin_token';

export function getToken() {
  if (typeof window === 'undefined') return null;
  try { return window.localStorage.getItem(TOKEN_KEY); } catch { return null; }
}

export function setToken(token) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(TOKEN_KEY, token); } catch { /* ignore */ }
}

export function clearToken() {
  if (typeof window === 'undefined') return;
  try { window.localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ }
}

export async function apiFetch(pathname, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  let res;
  try {
    res = await fetch(`${API_URL}${pathname}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    return { ok: false, status: 0, data: { message: `Cannot reach the server (${API_URL}). Please make sure the backend is running.` } };
  }
  let data = null;
  try { data = await res.json(); } catch { data = { message: res.statusText || 'Request failed' }; }
  const ok = res.status >= 200 && res.status < 300;
  if (!ok && res.status === 401 && auth) clearToken();
  return { ok, status: res.status, data };
}

export function initialsOf(name) {
  if (!name) return 'U';
  const parts = String(name).trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0] || '').join('').toUpperCase();
}

// Dev helper: remember OTP code returned by backend in development mode
export function stashDevOtp(code) {
  if (!code) return;
  try { window.sessionStorage.setItem('myodin_dev_otp', String(code)); } catch { /* ignore */ }
}

export function readDevOtp() {
  if (typeof window === 'undefined') return null;
  try { return window.sessionStorage.getItem('myodin_dev_otp'); } catch { return null; }
}

export function clearDevOtp() {
  if (typeof window === 'undefined') return;
  try { window.sessionStorage.removeItem('myodin_dev_otp'); } catch { /* ignore */ }
}
