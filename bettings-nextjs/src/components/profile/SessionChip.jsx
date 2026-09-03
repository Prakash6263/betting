'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { initialsOf } from '../../lib/api';
import { loadProfile } from '../../lib/profile-store';
import { useT } from '../../lib/i18n';

export default function SessionChip() {
  const router = useRouter();
  const { t } = useT();
  const [name, setName] = useState('John Doe');
  useEffect(() => {
    loadProfile().then((r) => {
      if (r.ok && r.data && r.data.user) setName(r.data.user.name || 'John Doe');
      else if (r.status === 401) router.replace('/login');
    });
  }, [router]);

  return (
    <div className={"notranslate d-flex align-items-center gap-2 cursor-pointer"} data-bs-toggle={"dropdown"}>
      <div className={"bg-success  border border-success text-success fw-bold rounded-circle"} style={{width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px"}}>{initialsOf(name)}</div>
      <div className={"d-none d-sm-block"}>
        <div className={"fw-bold lh-1 "} style={{fontSize: "12px"}}>{name}</div>
        <small className={"text-success"} style={{fontSize: "10px"}}>{t('Elite Member')}</small>
      </div>
      <i className={"fa-solid fa-chevron-down  ms-1"} style={{fontSize: "10px"}}></i>
    </div>
  );
}
