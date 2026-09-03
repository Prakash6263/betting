'use client';

import { usePathname } from 'next/navigation';

const PUBLIC_PATHS = new Set(['/', '/login', '/register']);

// Public section: original index.html / login.html / register.html
const PUBLIC_CSS = [
  { href: '/css/bootstrap.min.css' },
  { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css' },
  { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
  { href: '/css/style.css' }
];

// Dashboard section: original userdashboard/*.html
const DASHBOARD_CSS = [
  { href: '/assets/css/bootstrap.min.css' },
  { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
  { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css' },
  { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap' },
  { href: '/assets/css/styles.css?v=2' }
];

// A few dashboard pages load bootstrap-icons@1.11.1 after the others.
const DASHBOARD_ICONS_111 = new Set(['/news', '/match-analysis', '/sports-coverage']);

export default function StyleManager() {
  const pathname = usePathname() || '/';
  const isPublic = PUBLIC_PATHS.has(pathname);
  const publicMedia = isPublic ? undefined : 'not all';
  const dashboardMedia = isPublic ? 'not all' : undefined;

  return (
    <>
      {PUBLIC_CSS.map((l) => (
        <link key={'pub-' + l.href} rel="stylesheet" href={l.href} media={publicMedia} />
      ))}
      {DASHBOARD_CSS.map((l) => (
        <link key={'dash-' + l.href} rel="stylesheet" href={l.href} media={dashboardMedia} />
      ))}
      {DASHBOARD_ICONS_111.has(pathname) && !isPublic && (
        <link
          key="dash-icons-111"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          media={undefined}
        />
      )}
    </>
  );
}
