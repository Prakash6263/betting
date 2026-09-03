'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch, stashDevOtp } from '../../lib/api';
import { useT } from '../../lib/i18n';

export default function ForgotPasswordCard() {
  const router = useRouter();
  const { t } = useT();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);
    const res = await apiFetch('/api/auth/forgot-password', { method: 'POST', body: { email } });
    setLoading(false);
    if (res.ok) {
      if (res.data && res.data.devOtp) stashDevOtp(res.data.devOtp);
      setInfo('Reset code sent. Redirecting you to create a new password...');
      setTimeout(() => router.push(`/reset-password?email=${encodeURIComponent(email)}`), 1000);
      return;
    }
    setError((res.data && res.data.message) || 'Something went wrong. Please try again.');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={"notranslate"}>
      <div className={"mb-3 position-relative"}>
        <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('EMAIL ADDRESS')}</label>
        <i className={"bi bi-envelope input-group-text-custom"}></i>
        <input type={"email"} className={"form-control"} placeholder={"user@mail.com"} required value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      {error && <div className={"alert alert-danger py-2 small"} style={{fontSize: "12px"}}>{error}</div>}
      {info && <div className={"alert alert-success py-2 small"} style={{fontSize: "12px"}}>{info}</div>}
      <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"} disabled={loading}>
        {loading ? t('Sending code...') : t('Send Reset Code')} <i className={"bi bi-arrow-right ms-2"}></i>
      </button>
    </form>
  );
}
