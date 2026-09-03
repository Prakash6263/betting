'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch, initialsOf } from '../../lib/api';
import { loadProfile, invalidateProfile } from '../../lib/profile-store';
import { useT } from '../../lib/i18n';

export default function ProfileContent() {
  const router = useRouter();
  const { t } = useT();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProfile().then((r) => {
      if (r.ok && r.data && r.data.user) {
        setUser(r.data.user);
        setName(r.data.user.name || '');
        setEmail(r.data.user.email || '');
      } else if (r.status === 401) {
        router.replace('/login');
      }
    });
  }, [router]);

  async function handleSave(e) {
    e.preventDefault();
    setMsg(null);
    if (!name.trim()) { setMsg({ type: 'danger', text: 'Name cannot be empty.' }); return; }
    const emailChanged = email.toLowerCase() !== (user && user.email ? user.email.toLowerCase() : '');
    if (emailChanged && !currentPassword) {
      setMsg({ type: 'danger', text: 'Enter your current password to change your email.' });
      return;
    }
    setSaving(true);
    const body = { name: name.trim() };
    if (emailChanged) { body.email = email.trim(); body.currentPassword = currentPassword; }
    const res = await apiFetch('/api/user/profile', { method: 'PUT', auth: true, body });
    setSaving(false);
    if (res.ok) {
      invalidateProfile();
      const fresh = await loadProfile(true);
      if (fresh.ok && fresh.data && fresh.data.user) {
        setUser(fresh.data.user);
        setName(fresh.data.user.name || '');
        setEmail(fresh.data.user.email || '');
        setCurrentPassword('');
      }
      setMsg({ type: 'success', text: (res.data && res.data.message) || 'Profile saved.' });
    } else {
      setMsg({ type: 'danger', text: (res.data && res.data.message) || 'Could not save profile.' });
    }
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
              <div className={"bg-success rounded-circle d-flex align-items-center justify-content-center"} style={{width: "72px", height: "72px", fontSize: "24px", color: "#071007"}}>
                {initialsOf(displayName)}
              </div>
              <div>
                <h3 className={"mb-1"}>{displayName}</h3>
                <p className={"text-secondary mb-1"}>{t('Elite Member')} ? Football Intelligence</p><span className={"badge bg-success text-dark"}>{t('Pro Intelligence Plan')}</span>
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
                  <h5 className={"mb-1"}>{t('Email status')}</h5>
                  <p className={"text-secondary mb-0"}>{user ? (user.emailVerified ? t('Verified') : t('Pending verification')) : t('Verified')}</p>
                </div>
              </div>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Language')}</h5>
                  <p className={"text-secondary mb-0"}>{user && user.language ? user.language.toUpperCase() : 'FR'}</p>
                </div>
              </div>
              <div className={"col-sm-6"}>
                <div className={"card-panel"}>
                  <h5 className={"mb-1"}>{t('Plan')}</h5>
                  <p className={"text-secondary mb-0"}>{t('Pro Intelligence')}</p>
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
              <span className={"d-block text-secondary small mb-2"}>{t('Full name')}</span><strong>{displayName}</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Email')}</span><strong>{displayEmail}</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>Phone</span><strong>+1 555 123 4567</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>Location</span><strong>London, UK</strong>
            </div>
            <hr className={"border-secondary my-3"} />
            <h3 className={"panel-title mb-2"}>{t('Password & Security')}</h3>
            <form onSubmit={handleSave} noValidate>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Change display name')}</label>
                <input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Update email')}</label>
                <input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={"mb-3"}>
                <label className={"form-label small text-secondary"}>{t('Current password')}</label>
                <input className={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={"Enter current password"} type={"password"} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
              </div>
              {msg && <div className={"alert alert-" + msg.type + " py-2 small mb-3"} style={{fontSize: "12px"}}>{msg.text}</div>}
              <button className={"btn btn-success btn-sm w-100"} type={"submit"} disabled={saving}>{saving ? t('Saving...') : t('Save profile')}</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
