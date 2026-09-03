'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { apiFetch, getToken, clearToken } from '../lib/api';

const PUBLIC_PATHS = new Set(['/', '/login', '/register', '/forgot-password', '/verify-otp', '/reset-password']);

let validationPromise = null;

// Validate the stored token once per app session so stale sessions redirect to login
function validateSession() {
  if (!validationPromise) {
    validationPromise = apiFetch('/api/user/profile', { auth: true }).then((r) => {
      if (!r.ok) {
        clearToken();
        return false;
      }
      return true;
    }).finally(() => { validationPromise = null; });
  }
  return validationPromise;
}

export default function AuthGuard({ children }) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  useEffect(() => {
    if (PUBLIC_PATHS.has(pathname)) return;
    const token = getToken();
    if (!token) {
      router.replace('/login');
      return;
    }
    let cancelled = false;
    validateSession().then((ok) => {
      if (!ok && !cancelled && !PUBLIC_PATHS.has(pathname)) router.replace('/login');
    });
    return () => { cancelled = true; };
  }, [pathname, router]);

  return children;
}
