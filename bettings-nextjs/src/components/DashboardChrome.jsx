'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserMenu from './profile/UserMenu';

const NAV = [
  {
    heading: 'MAIN MENU',
    items: [
      { href: '/dashboard', icon: 'fa-solid fa-chart-pie', label: 'Dashboard' },
      { href: '/matches', icon: 'fa-solid fa-circle-dot text-danger', label: 'Matches' },
      { href: '/match-schedule', icon: 'fa-solid fa-calendar-days', label: 'Match Schedule' },
      { href: '/ai-predictions', icon: 'fa-solid fa-robot text-success', label: 'AI Predictions' },
      { href: '/value-bets', icon: 'fa-solid fa-gem text-warning', activeIcon: 'fa-solid fa-gem text-success', label: 'Value Bets (+EV)' },
      { href: '/market-analysis', icon: 'fa-solid fa-arrow-trend-up', label: 'Market Analytics' },
    ],
  },
  {
    heading: 'DEEP INTELLIGENCE',
    items: [
      { href: '/team-performance', icon: 'fa-solid fa-people-group', label: 'Team Performance' },
      { href: '/player-analytics', icon: 'fa-solid fa-user-gear', label: 'Player Analytics' },
      { href: '/advanced-stats', icon: 'fa-solid fa-chart-simple', label: 'Advanced Stats' },
      { href: '/match-reports', icon: 'fa-solid fa-file-invoice', label: 'Match Reports' },
      { href: '/watchlist', icon: 'fa-solid fa-star', label: 'Watchlist' },
    ],
  },
  {
    standalone: [
      { href: '/news', icon: 'fa-solid fa-newspaper text-success', label: 'Sports News' },
    ],
  },
  {
    heading: 'SPORTS',
    items: [
      { href: '/sports-coverage', icon: 'fa-solid fa-futbol', label: 'Sports Coverage' },
    ],
  },
  {
    heading: 'PREFERENCES',
    items: [
      { href: '/settings', icon: 'fa-solid fa-gear', label: 'Settings' },
      { href: '/help-support', icon: 'fa-solid fa-circle-question', label: 'Help & Support' },
    ],
  },
];

const HEADER_CFG = {
  '/dashboard': { cls: 'dashboard-header-title', text: 'DASHBOARD', white: false, font: 18 },
  '/matches': { cls: 'shared-header-title', text: 'MATCHES', white: true, font: 18 },
  '/match-schedule': { cls: 'shared-header-title', text: 'MATCH SCHEDULE', white: true, font: 18 },
  '/ai-predictions': { cls: 'shared-header-title', text: 'AI PREDICTIONS', white: true, font: 18 },
  '/value-bets': { cls: 'shared-header-title', text: 'VALUE BETS', white: true, font: 18 },
  '/market-analysis': { cls: 'shared-header-title', text: 'MARKET ANALYSIS', white: true, font: 18 },
  '/team-performance': { cls: 'shared-header-title', text: 'TEAM PERFORMANCE', white: true, font: 18 },
  '/player-analytics': { cls: 'shared-header-title', text: 'PLAYER ANALYSIS', white: true, font: 19 },
  '/advanced-stats': { cls: 'shared-header-title', text: 'ADVANCED STATISTICS', white: false, font: 18 },
  '/match-reports': { cls: 'shared-header-title', text: 'MATCH REPORTS', white: false, font: 18 },
  '/watchlist': { cls: 'shared-header-title', text: 'WATCHLIST', white: false, font: 18 },
  '/news': { cls: 'shared-header-title', text: 'SPORTS NEWS', white: false, font: 18 },
  '/sports-coverage': { cls: 'dashboard-header-title', text: 'DASHBOARD', white: false, font: 18 },
  '/match-analysis': { cls: 'dashboard-header-title', text: 'DASHBOARD', white: false, font: 18 },
  '/help-support': null,
  '/profile': null,
  '/settings': null,
};

// Original HTML kept these second-tier links inert ("#") on the light/white
// header pages; only the deep/pages group exposed real links everywhere.
const DEAD_LINK_PAGES = new Set([
  '/matches',
  '/match-schedule',
  '/ai-predictions',
  '/value-bets',
  '/market-analysis',
  '/team-performance',
  '/player-analytics',
]);
const DEAD_LINK_HREFS = new Set(['/advanced-stats', '/match-reports', '/watchlist', '/settings', '/help-support']);

function effectiveHrefFor(pathname, href) {
  if (DEAD_LINK_PAGES.has(pathname) && DEAD_LINK_HREFS.has(href)) return '#';
  return href;
}

function headerCfgFor(pathname) {
  if (pathname.startsWith('/match-analysis')) {
    return { cls: 'dashboard-header-title', text: 'DASHBOARD', white: false, font: 18 };
  }
  return HEADER_CFG[pathname] || null;
}

function activeSetFor(pathname) {
  if (pathname.startsWith('/match-analysis')) return new Set(['/matches']);
  if (pathname === '/help-support') return new Set(['/dashboard', '/help-support']);
  if (pathname === '/profile') return new Set(['/dashboard']);
  return new Set([pathname]);
}

function NavItem({ item, active }) {
  const iconCls = active && item.activeIcon ? item.activeIcon : item.icon;
  if (item.href === '#') {
    return (
      <a href="#" className={"nav-link" + (active ? ' active' : '')}>
        <i className={iconCls}></i>
        <span className={"sidebar-text"}>{item.label}</span>
      </a>
    );
  }
  return (
    <Link href={item.href} className={"nav-link" + (active ? ' active' : '')}>
      <i className={iconCls}></i>
      <span className={"sidebar-text"}>{item.label}</span>
    </Link>
  );
}

export default function DashboardChrome() {
  const pathname = usePathname() || '/';
  const cfg = headerCfgFor(pathname);
  const activeSet = activeSetFor(pathname);

  return (
    <>
      <header className={"top-navbar d-flex justify-content-between align-items-center"}>
        <div className={"d-flex align-items-center gap-3"}>
          <button className={"btn btn-link" + (cfg && cfg.white ? ' text-white' : '') + " p-0 me-2"} id={"sidebarToggle"} style={{ fontSize: (cfg && cfg.font) || '18px' }}>
            <i className={"fa-solid fa-bars-staggered text-success"}></i>
          </button>
          <div className={"d-flex align-items-center gap-2 logo"}>
            <div className={"brand-text"}>
              <img src={"/assets/images/logo.png"} style={{ width: "250px" }} />
            </div>
          </div>
          {cfg && cfg.text && (
            <div className={cfg.cls}>{cfg.text}</div>
          )}
          <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute "} style={{ left: "12px", top: "11px" }}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
          </div>
        </div>
        <div className={"d-flex align-items-center gap-2 gap-md-3"}>
          {cfg && <div className={"dashboard-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Until Dec 31, 2025</small></span></div>}
          <div className={"dropdown"}>
            <button className={"theme-toggle-btn gap-2"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"}>
              <i className={"fa-solid fa-globe text-success"}></i>
              <span className={"fw-semibold"} id={"selectedLangText"} style={{ fontSize: "12px" }}>FR</span>
              <i className={"fa-solid fa-chevron-down "} style={{ fontSize: "9px" }}></i>
            </button>
            <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary shadow-lg"}>
              <li>
                <a className={"dropdown-item  small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"en"} href={"#"}>
                  <span>English</span><span className={"badge bg-success ms-2"}>EN</span>
                </a>
              </li>
              <li><hr className={"dropdown-divider border-secondary my-1"} /></li>
              <li>
                <a className={"dropdown-item  small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"fr"} href={"#"}>
                  <span>Français (French)</span><span className={"badge bg-success ms-2"}>FR</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={"position-relative cursor-pointer"}>
            <div className={"theme-toggle-btn px-3"}>
              <i className={"fa-solid fa-bell"}></i>
            </div>
            <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"} style={{ fontSize: "9px" }}>4</span>
          </div>
          <UserMenu />
        </div>
      </header>
      <aside className={"sidebar-wrapper"} id={"sidebar"}>
        {NAV.map((section, si) => (
          <div key={si}>
            {section.standalone ? (
              <div className={"nav-menu"}>
                {section.standalone.map((item, i2) => (
                  <NavItem key={i2} item={{ ...item, href: effectiveHrefFor(pathname, item.href) }} active={activeSet.has(item.href)} />
                ))}
              </div>
            ) : (
              <>
                <div className={"sidebar-heading"}>{section.heading}</div>
                <div className={"nav-menu"}>
                  {section.items.map((item, i2) => (
                    <NavItem key={i2} item={{ ...item, href: effectiveHrefFor(pathname, item.href) }} active={activeSet.has(item.href)} />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </aside>
    </>
  );
}
