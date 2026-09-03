// Shared client-side cache for the current user profile
import { apiFetch } from './api';

let cached = null;
let inflight = null;

export function loadProfile(force = false) {
  if (force) { cached = null; inflight = null; }
  if (cached) return Promise.resolve(cached);
  if (!inflight) {
    inflight = apiFetch('/api/user/profile', { auth: true })
      .then((r) => { cached = r; return r; })
      .finally(() => { inflight = null; });
  }
  return inflight;
}

export function invalidateProfile() {
  cached = null;
  inflight = null;
}
