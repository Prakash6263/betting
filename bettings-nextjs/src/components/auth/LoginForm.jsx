'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiFetch, setToken } from '../../lib/api';
import { useT } from '../../lib/i18n';
import PasswordField from '../PasswordField';

export default function LoginForm() {
  const router = useRouter();
  const { t } = useT();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get('verified') === '1') {
      setInfo('Your email is verified. Please sign in.');
    } else if (sp.get('reset') === '1') {
      setInfo('Password updated. Please sign in with your new password.');
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);
    const res = await apiFetch('/api/auth/login', { method: 'POST', body: { email, password } });
    setLoading(false);
    if (res.ok && res.data && res.data.token) {
      setToken(res.data.token, remember);
      router.push('/dashboard');
      return;
    }
    if (res.status === 403 && res.data && res.data.code === 'EMAIL_NOT_VERIFIED') {
      setInfo('Your email is not verified yet. Taking you to verification...');
      setTimeout(() => router.push(`/verify-otp?email=${encodeURIComponent(email)}`), 900);
      return;
    }
    setError((res.data && res.data.message) || 'Login failed. Please try again.');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={"notranslate"}>
      <div className={"mb-3 position-relative"}>
        <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('EMAIL ADDRESS')}</label>
        <i className={"bi bi-envelope input-group-text-custom"}></i>
        <input type={"email"} className={"form-control"} placeholder={"user@mail.com"} required value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={"mb-3 position-relative"}>
        <div className={"d-flex justify-content-between align-items-center mb-1"}>
          <label className={"form-label text-secondary small fw-medium mb-0"} style={{fontSize: "11px"}}>{t('PASSWORD')}</label>
          <Link href={"/forgot-password"} className={"text-success text-decoration-none small"} style={{fontSize: "11px"}}>{t('Forgot password?')}</Link>
        </div>
        <i className={"bi bi-lock input-group-text-custom"}></i>
        <PasswordField icon={"bi"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"********"} required />
      </div>
      <div className={"form-check mb-4"}>
        <input className={"form-check-input bg-dark border-secondary"} type={"checkbox"} id={"rememberMe"} checked={remember}
          onChange={(e) => setRemember(e.target.checked)} />
        <label className={"form-check-label text-secondary small"} htmlFor={"rememberMe"} style={{fontSize: "12px"}}>
          {t('Keep me logged in')}
        </label>
      </div>
      {error && <div className={"alert alert-danger py-2 small"} style={{fontSize: "12px"}}>{error}</div>}
      {info && <div className={"alert alert-success py-2 small"} style={{fontSize: "12px"}}>{info}</div>}
      <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"} disabled={loading}>
        {loading ? t('Signing in...') : t('Sign In')} <i className={"bi bi-arrow-right ms-2"}></i>
      </button>
    </form>
  );
}
