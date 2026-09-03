'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch, clearToken } from '../../lib/api';
import { useT } from '../../lib/i18n';

export default function LogoutLink() {
  const router = useRouter();
  const { t } = useT();
  const [busy, setBusy] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    await apiFetch('/api/auth/logout', { method: 'POST', auth: true });
    clearToken();
    router.push('/login');
  }

  return (
    <a href={"/login"} className={"notranslate dropdown-item text-danger small"} onClick={handleLogout} style={{cursor: "pointer"}}>
      <i className={"fa-solid fa-right-from-bracket me-2"}></i> {busy ? t('Signing out...') : t('Log Out')}
    </a>
  );
}
