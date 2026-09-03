'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch, initialsOf } from '../../lib/api';
import { loadProfile, invalidateProfile } from '../../lib/profile-store';
import { useT } from '../../lib/i18n';
import PasswordField from '../PasswordField';

export default function ProfileContent() {
  const router = useRouter();
  const { t } = useT();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState(null);
  const [saving, setSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    loadProfile().then((r) => {
      if (r.ok && r.data && r.data.user) {
        setUser(r.data.user);
        setName(r.data.user.name || '');
      } else if (r.status === 401) {
        router.replace('/login');
      }
    });
  }, [router]);

  async function handleSave(e) {
    e.preventDefault();
    setMsg(null);
    if (!name.trim()) { setMsg({ type: 'danger', text: 'Name cannot be empty.' }); return; }
    setSaving(true);
    const okMsgs = [];
    const errors = [];
    const nameRes = await apiFetch('/api/user/profile', { method: 'PUT', auth: true, body: { name: name.trim() } });
    if (nameRes.ok) {
      invalidateProfile();
      const fresh = await loadProfile(true);
      if (fresh.ok && fresh.data && fresh.data.user) {
        setUser(fresh.data.user);
        setName(fresh.data.user.name || '');
      }
      okMsgs.push((nameRes.data && nameRes.data.message) || 'Profile saved.');
    } else {
      errors.push((nameRes.data && nameRes.data.message) || 'Could not save profile.');
    }
    const wantsPw = currentPassword !== '' || newPassword !== '' || confirmPassword !== '';
    if (wantsPw && errors.length === 0) {
      if (!currentPassword) {
        errors.push('Enter your current password to change it.');
      } else if (newPassword.length < 6) {
        errors.push('New password must be at least 6 characters.');
      } else if (newPassword !== confirmPassword) {
        errors.push('New passwords do not match.');
      } else {
        const pwRes = await apiFetch('/api/user/profile/password', { method: 'PUT', auth: true, body: { currentPassword, newPassword } });
        if (pwRes.ok) {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
          okMsgs.push((pwRes.data && pwRes.data.message) || 'Password updated.');
        } else {
          errors.push((pwRes.data && pwRes.data.message) || 'Could not update password.');
        }
      }
    }
    setSaving(false);
    const list = errors.length ? errors : okMsgs;
    setMsg({ type: errors.length ? 'danger' : 'success', text: list.join(' ') });
  }

  const displayName = user && user.name ? user.name : 'John Doe';
  const displayEmail = user && user.email ? user.email : 'john.doe@example.com';
  const memberSince = user && user.createdAt ? new Date(user.createdAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) : t('February 2025');

  return (
    <main className={"notranslate main-content"} id={"mainContent"}>
      <section className={"hero-banner-card mb-4"}>
        <span className={"sport-kicker"}><i className={"fa-solid fa-user"}></i> PROFILE CENTRE</span>
        <h1 className={"page-title mt-2 mb-1"}>{t('Your Profile')}</h1>
        <p className={"mb-0 text-white"}>{t('Review your membership, performance, and account details in one place.')}</p>
      </section>
      <div className={"row g-3"}>
        <div className={"col-lg-7"}>
          <div className={"panel-card"}>
            <h2 className={"panel-title mb-1"}>{t('Personal Snapshot')}</h2>
            <p className={"panel-sub mb-3"}>{t('Your profile highlights and account status.')}</p>
            <div className={"d-flex align-items-center gap-3 mb-4"}>
              <div className={"bg-success rounded-circle d-flex align-items-center justify-content-center"} style={{ width: "72px", height: "72px", fontSize: "24px", color: "#071007" }}>
                {initialsOf(displayName)}
              </div>
              <div>
                <h3 className={"mb-1"}>{displayName}</h3>
                <p className={"text-secondary mb-1"}>{t('Elite Member')} {'\u2022'} {t('Football Intelligence')}</p>
                <span className={"badge bg-success text-dark"}>{t('Pro Intelligence Plan')}</span>
              </div>
            </div>
            <div className={"row g-3"}>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Member since')}</h5>
                  <p className={"text-secondary mb-0"}>{memberSince}</p>
                </div>
              </div>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Total predictions')}</h5>
                  <p className={"text-secondary mb-0"}>1,248</p>
                </div>
              </div>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Success rate')}</h5>
                  <p className={"text-secondary mb-0"}>78.4%</p>
                </div>
              </div>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Active devices')}</h5>
                  <p className={"text-secondary mb-0"}>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-lg-5"}>
          <div className={"panel-card"}>
            <h2 className={"panel-title mb-2"}>{t('Profile overview')}</h2>
            <p className={"panel-sub"}>{t('Manage your personal details and security settings.')}</p>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Full name')}</span>
              <strong>{displayName}</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Email')}</span>
              <span className={"d-flex align-items-center gap-2"}>
                <strong>{displayEmail}</strong>
                {user && user.emailVerified && <span className={"badge bg-success text-dark"}>{t('Verified')}</span>}
              </span>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Phone')}</span>
              <strong>+1 555 123 4567</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Location')}</span>
              <strong>London, UK</strong>
            </div>
            <hr className={"border-secondary my-3"} />
            <h3 className={"panel-title mb-2"}>{t('Security')}</h3>
            <form onSubmit={handleSave} noValidate>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Change display name')}</label>
                <input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Update email')}</label>
                <input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"email"} value={displayEmail} readOnly />
                <small className={"text-secondary d-block mt-1"} style={{ fontSize: "11px" }}>{t('Email is read-only.')}</small>
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Current password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={t('Enter current password')} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('New password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={t('Create new password')} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Confirm password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={t('Confirm new password')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {msg && <div className={"alert alert-" + msg.type + " py-2 small mb-3"} style={{ fontSize: "12px" }}>{msg.text}</div>}
              <button className={"btn btn-success btn-sm w-100"} type={"submit"} disabled={saving}>{saving ? t('Saving...') : t('Save profile')}</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
