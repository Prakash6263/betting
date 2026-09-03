'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { apiFetch, readDevOtp, clearDevOtp } from '../../lib/api';
import { useT } from '../../lib/i18n';

export default function ResetScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const { t } = useT();
  const email = params.get('email') || '';
  const devOtp = readDevOtp();

  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email) { setError('Missing email. Please start again from forgot password.'); return; }
    if (password.length < 6) { setError('New password must be at least 6 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    setLoading(true);
    const res = await apiFetch('/api/auth/reset-password', { method: 'POST', body: { email, otp, newPassword: password } });
    setLoading(false);
    if (res.ok) {
      clearDevOtp();
      setDone(true);
      setInfo('Password updated successfully! Redirecting to login...');
      setTimeout(() => router.push('/login?reset=1'), 1500);
      return;
    }
    setError((res.data && res.data.message) || 'Could not reset password. Please try again.');
  }

  async function handleResend() {
    setError('');
    setInfo('');
    setLoading(true);
    const res = await apiFetch('/api/auth/resend-otp', { method: 'POST', body: { email, purpose: 'reset_password' } });
    setLoading(false);
    if (res.ok) {
      if (res.data && res.data.devOtp) window.sessionStorage.setItem('myodin_dev_otp', res.data.devOtp);
      setInfo(t('A new code has been emailed to you.'));
      return;
    }
    setError((res.data && res.data.message) || t('Could not resend code.'));
  }

  return (
    <div className={"notranslate"}>
      {done ? (
        <div className={"text-center"}>
          <i className={"bi bi-check-circle-fill text-success"} style={{fontSize: "44px"}}></i>
          <p className={"text-secondary small mt-2 mb-0"}>{info}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className={"mb-3 position-relative"}>
            <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('EMAIL ADDRESS')}</label>
            <i className={"bi bi-envelope input-group-text-custom"}></i>
            <input type={"email"} className={"form-control"} value={email} readOnly disabled />
          </div>
          <div className={"mb-3 position-relative"}>
            <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('RESET CODE')}</label>
            <i className={"bi bi-shield-lock input-group-text-custom"}></i>
            <input type={"text"} inputMode={"numeric"} maxLength={6} className={"form-control"} placeholder={"000000"} required
              value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} />
          </div>
          <div className={"row g-3 mb-3"}>
            <div className={"col-md-6 position-relative"}>
              <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('NEW PASSWORD')}</label>
              <i className={"bi bi-lock input-icon"}></i>
              <input type={"password"} className={"form-control"} placeholder={"********"} required value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={"col-md-6 position-relative"}>
              <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('CONFIRM PASSWORD')}</label>
              <i className={"bi bi-shield-check input-icon"}></i>
              <input type={"password"} className={"form-control"} placeholder={"********"} required value={confirm}
                onChange={(e) => setConfirm(e.target.value)} />
            </div>
          </div>
          {devOtp && (
            <div className={"small text-warning mb-2"} style={{fontSize: "11px"}}>
              {t('DEV MODE code')}: <strong>{devOtp}</strong> (development)
            </div>
          )}
          {error && <div className={"alert alert-danger py-2 small"} style={{fontSize: "12px"}}>{error}</div>}
          {info && <div className={"alert alert-success py-2 small"} style={{fontSize: "12px"}}>{info}</div>}
          <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"} disabled={loading || !email}>
            {loading ? t('Updating...') : t('Update Password')} <i className={"bi bi-arrow-right ms-2"}></i>
          </button>
          <div className={"text-center text-secondary small"} style={{fontSize: "12px"}}>
            {t('Did not receive it?')}{' '}
            <button type={"button"} className={"btn btn-link text-success p-0 align-baseline"} style={{fontSize: "12px"}} onClick={handleResend}>
              {t('Resend code')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
