'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { apiFetch, readDevOtp, clearDevOtp } from '../../lib/api';
import { useT } from '../../lib/i18n';

export default function VerifyScreen() {
  const router = useRouter();
  const params = useSearchParams();
  const { t } = useT();
  const email = params.get('email') || '';
  const purpose = params.get('purpose') || 'email_verify';
  const devOtp = readDevOtp();

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendWait, setResendWait] = useState(0);

  useEffect(() => {
    if (resendWait <= 0) return;
    const timer = setTimeout(() => setResendWait((w) => w - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendWait]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) { setError('Missing email. Please start again from sign up or login.'); return; }
    setError('');
    setInfo('');
    setLoading(true);
    const res = await apiFetch('/api/auth/verify-otp', { method: 'POST', body: { email, otp, purpose } });
    setLoading(false);
    if (res.ok) {
      clearDevOtp();
      setDone(true);
      if (purpose === 'reset_password') {
        setInfo('Code verified. Taking you to create a new password...');
        setTimeout(() => router.push(`/reset-password?email=${encodeURIComponent(email)}`), 1200);
      } else {
        setInfo(t('Email verified successfully! Redirecting to login...'));
        setTimeout(() => router.push('/login?verified=1'), 1500);
      }
      return;
    }
    setError((res.data && res.data.message) || 'Verification failed. Please try again.');
  }

  async function handleResend() {
    setError('');
    setInfo('');
    setLoading(true);
    const res = await apiFetch('/api/auth/resend-otp', { method: 'POST', body: { email, purpose } });
    setLoading(false);
    if (res.ok) {
      if (res.data && res.data.devOtp) window.sessionStorage.setItem('myodin_dev_otp', res.data.devOtp);
      setInfo(t('A new code has been emailed to you.'));
      return;
    }
    if (res.status === 429 && res.data && res.data.retryAfterSec) {
      setResendWait(Number(res.data.retryAfterSec));
    }
    setError((res.data && res.data.message) || t('Could not resend code.'));
  }

  return (
    <div className={"notranslate"}>
      {!email && <div className={"alert alert-warning py-2 small"} style={{fontSize: "12px"}}>{t('Missing email. Please start again from sign up or login.')}</div>}
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
            <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('VERIFICATION CODE')}</label>
            <i className={"bi bi-shield-lock input-group-text-custom"}></i>
            <input type={"text"} inputMode={"numeric"} maxLength={6} className={"form-control"} placeholder={"000000"} required
              value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} />
          </div>
          {devOtp && (
            <div className={"small text-warning mb-2"} style={{fontSize: "11px"}}>
              {t('DEV MODE code')}: <strong>{devOtp}</strong> (development)
            </div>
          )}
          {error && <div className={"alert alert-danger py-2 small"} style={{fontSize: "12px"}}>{error}</div>}
          {info && <div className={"alert alert-success py-2 small"} style={{fontSize: "12px"}}>{info}</div>}
          <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"} disabled={loading || !email}>
            {loading ? t('Verifying...') : t('Verify Code')} <i className={"bi bi-arrow-right ms-2"}></i>
          </button>
          <div className={"text-center text-secondary small"} style={{fontSize: "12px"}}>
            {t('Did not receive it?')}{' '}
            <button type={"button"} className={"btn btn-link text-success p-0 align-baseline"} style={{fontSize: "12px"}} disabled={loading || resendWait > 0} onClick={handleResend}>
              {resendWait > 0 ? 'Resend code (' + resendWait + 's)' : t('Resend code')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
