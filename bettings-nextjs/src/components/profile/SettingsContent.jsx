'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../lib/api';
import { loadProfile, invalidateProfile } from '../../lib/profile-store';
import { useT } from '../../lib/i18n';
import PasswordField from '../PasswordField';

export default function SettingsContent() {
  const router = useRouter();
  const { t } = useT();
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState({ notifications: true, valueSignals: true, newsletter: false });
  const [prefMsg, setPrefMsg] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwMsg, setPwMsg] = useState(null);
  const [pwSaving, setPwSaving] = useState(false);

  useEffect(() => {
    loadProfile().then((r) => {
      if (r.ok && r.data && r.data.user) {
        const u = r.data.user;
        setUser(u);
        const p = (u.preferences || {});
        setPrefs({
          notifications: p.notifications !== undefined ? p.notifications : true,
          valueSignals: p.valueSignals !== undefined ? p.valueSignals : true,
          newsletter: p.newsletter !== undefined ? p.newsletter : false,
        });
      } else if (r.status === 401) {
        router.replace('/login');
      }
    });
  }, [router]);

  async function togglePref(key, value) {
    const next = { ...prefs, [key]: value };
    setPrefs(next);
    setPrefMsg(null);
    const res = await apiFetch('/api/user/profile', { method: 'PUT', auth: true, body: { preferences: next } });
    if (res.ok) {
      invalidateProfile();
      setPrefMsg({ type: 'success', text: t('Preference saved.') });
    } else {
      setPrefs({ ...prefs });
      setPrefMsg({ type: 'danger', text: (res.data && res.data.message) || 'Could not save preference.' });
    }
  }

  async function handlePassword(e) {
    e.preventDefault();
    setPwMsg(null);
    if (newPassword.length < 6) { setPwMsg({ type: 'danger', text: 'New password must be at least 6 characters.' }); return; }
    if (newPassword !== confirmPassword) { setPwMsg({ type: 'danger', text: 'New passwords do not match.' }); return; }
    setPwSaving(true);
    const res = await apiFetch('/api/user/profile/password', { method: 'PUT', auth: true, body: { currentPassword, newPassword } });
    setPwSaving(false);
    if (res.ok) {
      setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
      setPwMsg({ type: 'success', text: (res.data && res.data.message) || 'Password updated.' });
    } else {
      setPwMsg({ type: 'danger', text: (res.data && res.data.message) || 'Could not update password.' });
    }
  }

  const displayName = user && user.name ? user.name : 'John Doe';
  const displayEmail = user && user.email ? user.email : 'john.doe@example.com';

  return (
    <main className={"notranslate main-content"} id={"mainContent"}>
      <section className={"hero-banner-card mb-4"}>
        <span className={"sport-kicker"}><i className={"fa-solid fa-gear"}></i> {t('Account Centre')}</span>
        <h1 className={"page-title mt-2 mb-1"}>{t('Settings')}</h1>
        <p className={"mb-0 text-white"}>{t('Manage your intelligence workspace preferences.')}</p>
      </section>
      <div className={"row g-3"}>
        <div className={"col-lg-7"}>
          <div className={"panel-card"}>
            <h2 className={"panel-title mb-1"}>{t('Notification Preferences')}</h2>
            <p className={"panel-sub mb-3"}>{t('Control email and in-app alerts for match updates, market signals, and premium briefings.')}</p>
            <div className={"d-flex justify-content-between align-items-center py-3 border-bottom"}>
              <div>
                <strong>{t('Live match alerts')}</strong><small className={"d-block text-secondary"}>{t('Get notified when a watched match starts.')}</small>
              </div>
              <input className={"form-check-input"} type={"checkbox"} checked={prefs.notifications} onChange={(e) => togglePref('notifications', e.target.checked)} />
            </div>
            <div className={"d-flex justify-content-between align-items-center py-3 border-bottom"}>
              <div>
                <strong>{t('Value bet signals')}</strong><small className={"d-block text-secondary"}>{t('Alert me when the model identifies an opportunity.')}</small>
              </div>
              <input className={"form-check-input"} type={"checkbox"} checked={prefs.valueSignals} onChange={(e) => togglePref('valueSignals', e.target.checked)} />
            </div>
            <div className={"d-flex justify-content-between align-items-center py-3"}>
              <div>
                <strong>{t('Daily market summary')}</strong><small className={"d-block text-secondary"}>{t('Send a daily summary of tracked competitions.')}</small>
              </div>
              <input className={"form-check-input"} type={"checkbox"} checked={prefs.newsletter} onChange={(e) => togglePref('newsletter', e.target.checked)} />
            </div>
            {prefMsg && <div className={"alert alert-" + prefMsg.type + " py-2 small mt-2 mb-0"} style={{fontSize: "12px"}}>{prefMsg.text}</div>}
          </div>
        </div>
        <div className={"col-lg-5"}>
          <div className={"panel-card"}>
            <h2 className={"panel-title mb-2"}>{t('Account details')}</h2>
            <p className={"panel-sub"}>{displayName} ? {t('Elite Member')}</p>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Email')}</span><strong>{displayEmail}</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Subscription')}</span><strong>{t('Pro Intelligence Plan')}</strong>
            </div>
            <hr className={"border-secondary my-3"} />
            <h3 className={"panel-title mb-2"}>{t('Password & Security')}</h3>
            <form onSubmit={handlePassword} noValidate>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Current password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={"Enter current password"} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('New password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={"Create new password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Confirm password')}</label>
                <PasswordField icon={"fa"} dark inputClass={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={"Confirm new password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              {pwMsg && <div className={"alert alert-" + pwMsg.type + " py-2 small mb-3"} style={{fontSize: "12px"}}>{pwMsg.text}</div>}
              <button className={"btn btn-success btn-sm w-100"} type={"submit"} disabled={pwSaving}>{pwSaving ? t('Updating...') : t('Update password')}</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
