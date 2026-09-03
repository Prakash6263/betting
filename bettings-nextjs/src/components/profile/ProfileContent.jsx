'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { initialsOf } from '../../lib/api';
import { loadProfile } from '../../lib/profile-store';
import { useT } from '../../lib/i18n';

export default function ProfileContent() {
  const router = useRouter();
  const { t } = useT();
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile().then((r) => {
      if (r.ok && r.data && r.data.user) {
        setUser(r.data.user);
      } else if (r.status === 401) {
        router.replace('/login');
      }
    });
  }, [router]);

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
            <h2 className={"panel-title mb-2"}>{t('Account details')}</h2>
            <p className={"panel-sub"}>{t('Your account email and personal information. Email cannot be changed.')}</p>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Full name')}</span><strong>{displayName}</strong>
            </div>
            <div className={"mb-3"}>
              <span className={"d-block text-secondary small mb-2"}>{t('Email')}</span>
              <div className={"d-flex align-items-center gap-2"}>
                <strong>{displayEmail}</strong>
                {user && user.emailVerified && <span className={"badge bg-success text-dark"}>{t('Verified')}</span>}
              </div>
              <small className={"text-secondary d-block mt-1"} style={{fontSize: "11px"}}>{t('Email is read-only and cannot be updated from the profile.')}</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
