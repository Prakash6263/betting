'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch, stashDevOtp } from '../../lib/api';
import { useT } from '../../lib/i18n';

export default function RegisterForm() {
  const router = useRouter();
  const { t } = useT();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    if (!terms) { setError('Please accept the Terms of Service and Privacy Policy.'); return; }
    setLoading(true);
    const res = await apiFetch('/api/auth/signup', { method: 'POST', body: { name, email, password } });
    setLoading(false);
    if (res.ok) {
      if (res.data && res.data.devOtp) stashDevOtp(res.data.devOtp);
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
      return;
    }
    setError((res.data && res.data.message) || 'Sign up failed. Please try again.');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={"notranslate"}>
      <div className={"mb-3 position-relative"}>
        <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('FULL NAME')}</label>
        <i className={"bi bi-person input-icon"}></i>
        <input type={"text"} className={"form-control"} placeholder={"John Doe"} required value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={"mb-3 position-relative"}>
        <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('EMAIL ADDRESS')}</label>
        <i className={"bi bi-envelope input-icon"}></i>
        <input type={"email"} className={"form-control"} placeholder={"analyst@example.com"} required value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={"row g-3 mb-3"}>
        <div className={"col-md-6 position-relative"}>
          <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>{t('PASSWORD')}</label>
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
      <div className={"form-check mb-4"}>
        <input className={"form-check-input bg-dark border-secondary"} type={"checkbox"} id={"termsCheck"} required checked={terms}
          onChange={(e) => setTerms(e.target.checked)} />
        <label className={"form-check-label text-secondary small"} htmlFor={"termsCheck"} style={{fontSize: "12px"}}>
          {t('I agree to the')} <a href={"#"} className={"text-success text-decoration-none"}>{t('Terms of Service')}</a> and <a href={"#"} className={"text-success text-decoration-none"}>{t('Privacy Policy')}</a>.
        </label>
      </div>
      {error && <div className={"alert alert-danger py-2 small"} style={{fontSize: "12px"}}>{error}</div>}
      <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"} disabled={loading}>
        {loading ? t('Creating account...') : t('Create Free Account')} <i className={"bi bi-arrow-right ms-2"}></i>
      </button>
    </form>
  );
}
