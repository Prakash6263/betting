'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getToken, clearToken } from '../lib/api';
import { loadProfile, invalidateProfile } from '../lib/profile-store';
import UserMenu from './profile/UserMenu';

// Public marketing/auth headers switch between sign-in CTA and the user menu
// depending on whether someone is logged in.
export default function AuthNav() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let active = true;
    if (!getToken()) {
      setLoggedIn(false);
      return undefined;
    }
    loadProfile().then((r) => {
      if (!active) return;
      if (r.ok && r.data && r.data.user) {
        setLoggedIn(true);
      } else {
        if (r.status === 401) {
          clearToken();
          invalidateProfile();
        }
        setLoggedIn(false);
      }
    });
    return () => { active = false; };
  }, [pathname]);

  if (loggedIn) {
    return <UserMenu />;
  }
  return (
    <>
      <Link className={"btn-login"} href={"/login"}>Login</Link>
      <Link className={"btn-primary-custom"} href={"/register"}>Get Started</Link>
    </>
  );
}
