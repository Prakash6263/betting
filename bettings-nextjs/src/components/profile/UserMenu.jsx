'use client';
import Link from 'next/link';
import SessionChip from './SessionChip';
import LogoutLink from './LogoutLink';

export default function UserMenu() {
  return (
    <div className={"dropdown border-start border-secondary ps-2 ps-md-3"}>
      <SessionChip />
      <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary"}>
        <li><Link className={"dropdown-item small"} href={"/profile"}><i className={"fa-solid fa-user me-2 text-success"}></i> Profile</Link></li>
        <li><Link className={"dropdown-item small"} href={"/settings"}><i className={"fa-solid fa-sliders me-2 text-success"}></i> Settings</Link></li>
        <li><hr className={"dropdown-divider border-secondary"} /></li>
        <li><LogoutLink /></li>
      </ul>
    </div>
  );
}
