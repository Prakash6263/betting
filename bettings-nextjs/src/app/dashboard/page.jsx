import Script from 'next/script';
import UserMenu from '../../components/profile/UserMenu';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    
     




<header className={"top-navbar d-flex justify-content-between align-items-center"}>
    <div className={"d-flex align-items-center gap-3"}>
        
        <button className={"btn btn-link  p-0 me-2"} id={"sidebarToggle"} style={{fontSize: "18px"}}>
            <i className={"fa-solid fa-bars-staggered text-success"}></i>
        </button>

        
       <div className={"d-flex align-items-center gap-2 logo"}>
           <div className={"brand-text"}>
<img src={"/assets/images/logo.png"} style={{width: "250px"}} />
</div>
        </div>
        <div className={"dashboard-header-title"}>DASHBOARD</div>

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute "} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>
       
        <div className={"dashboard-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Until Dec 31, 2025</small></span></div>

        
        <div className={"dropdown"}>
            <button className={"theme-toggle-btn gap-2"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"}>
                <i className={"fa-solid fa-globe text-success"}></i>
                <span className={"fw-semibold"} id={"selectedLangText"} style={{fontSize: "12px"}}>FR</span>
                <i className={"fa-solid fa-chevron-down "} style={{fontSize: "9px"}}></i>
            </button>
            <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary shadow-lg"}>
                <li>
                    <a className={"dropdown-item  small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"en"} href={"#"}>
                        <span>English</span>
                        <span className={"badge bg-success ms-2"}>EN</span>
                    </a>
                </li>
                <li><hr className={"dropdown-divider border-secondary my-1"} /></li>
                <li>
                    <a className={"dropdown-item  small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"fr"} href={"#"}>
                        <span>Français (French)</span>
                        <span className={"badge bg-success ms-2"}>FR</span>
                    </a>
                </li>
            </ul>
        </div>

        
        
        
        <div className={"position-relative cursor-pointer"}>
            <div className={"theme-toggle-btn px-3"}>
                <i className={"fa-solid fa-bell"}></i>
            </div>
            <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"} style={{fontSize: "9px"}}>
                4
            </span>
        </div>

        
        <UserMenu />
    </div>
</header>


<aside className={"sidebar-wrapper"} id={"sidebar"}>
    <div className={"sidebar-heading"}>MAIN MENU</div>
    <div className={"nav-menu"}>
        <Link href={"/dashboard"} className={"nav-link active"}>
            <i className={"fa-solid fa-chart-pie"}></i>
            <span className={"sidebar-text"}>Dashboard</span>
        </Link>
        <Link href={"/matches"} className={"nav-link"}>
            <i className={"fa-solid fa-circle-dot text-danger"}></i>
            <span className={"sidebar-text"}>Matches</span>
        </Link>
         <Link href={"/match-schedule"} className={"nav-link"}>
            <i className={"fa-solid fa-calendar-days"}></i>
            <span className={"sidebar-text"}>Match Schedule</span>
        </Link>
        <Link href={"/ai-predictions"} className={"nav-link"}>
            <i className={"fa-solid fa-robot text-success"}></i>
            <span className={"sidebar-text"}>AI Predictions</span>
        </Link>
        <Link href={"/value-bets"} className={"nav-link"}>
            <i className={"fa-solid fa-gem text-warning"}></i>
            <span className={"sidebar-text"}>Value Bets (+EV)</span>
        </Link>
        <Link href={"/market-analysis"} className={"nav-link"}>
            <i className={"fa-solid fa-arrow-trend-up"}></i>
            <span className={"sidebar-text"}>Market Analytics</span>
        </Link>
    </div>

    <div className={"sidebar-heading"}>DEEP INTELLIGENCE</div>
    <div className={"nav-menu"}>
        <Link href={"/team-performance"} className={"nav-link"}>
            <i className={"fa-solid fa-people-group"}></i>
            <span className={"sidebar-text"}>Team Performance</span>
        </Link>
        <Link href={"/player-analytics"} className={"nav-link"}>
            <i className={"fa-solid fa-user-gear"}></i>
            <span className={"sidebar-text"}>Player Analytics</span>
        </Link>
        <Link href={"/advanced-stats"} className={"nav-link"}>
            <i className={"fa-solid fa-chart-simple"}></i>
            <span className={"sidebar-text"}>Advanced Stats</span>
        </Link>
        <Link href={"/match-reports"} className={"nav-link"}>
            <i className={"fa-solid fa-file-invoice"}></i>
            <span className={"sidebar-text"}>Match Reports</span>
        </Link>
        <Link href={"/watchlist"} className={"nav-link"}>
            <i className={"fa-solid fa-star"}></i>
            <span className={"sidebar-text"}>Watchlist</span>
        </Link>
    </div>

    <div className={"nav-menu"}><Link href={"/news"} className={"nav-link"}><i className={"fa-solid fa-newspaper text-success"}></i><span className={"sidebar-text"}>Sports News</span></Link></div>
    <div className={"sidebar-heading"}>SPORTS</div>
    <div className={"nav-menu"}>
        <Link href={"/sports-coverage"} className={"nav-link"}><i className={"fa-solid fa-futbol"}></i><span className={"sidebar-text"}>Sports Coverage</span></Link>
       
    </div>
    <div className={"sidebar-heading"}>PREFERENCES</div>
    <div className={"nav-menu"}>
        <Link href={"/settings"} className={"nav-link"}>
            <i className={"fa-solid fa-gear"}></i>
            <span className={"sidebar-text"}>Settings</span>
        </Link>
        <Link href={"/help-support"} className={"nav-link"}>
            <i className={"fa-solid fa-circle-question"}></i>
            <span className={"sidebar-text"}>Help & Support</span>
        </Link>
    </div>

    
</aside>




<main className={"main-content"} id={"mainContent"}>
  <div className={"ref-dashboard"}>
    <section className={"topline"}>
      <div><div className={"ref-search"}><i className={"fa-solid fa-magnifying-glass"}></i> Search matches, teams, players or leagues... <kbd><i className={"fa-brands fa-apple"}></i> K</kbd></div><div className={"filter-label"}>Quick Filters</div><div className={"filters"}><span className={"filter"}>Top Leagues　⌄</span><span className={"filter"}><i className={"fa-regular fa-calendar"}></i>　Today</span><span className={"filter green"}><i className={"fa-solid fa-circle dot"}></i> High Confidence</span><span className={"filter"}>＋ +EV Bets</span><span className={"filter"}><i className={"fa-regular fa-circle-dot text-danger"}></i>　Live Now</span><span className={"filter"}>More Filters　<i className={"fa-solid fa-filter"}></i></span></div></div>
      <div className={"personal"}><div className={"card-title"}>Personalization <span className={"link"}>Manage</span></div><div className={"personal-body"}><div>Favorite Leagues<div className={"league-icons"}>⚽　🔴　🇩🇪　🔵</div></div><div className={"vline"}></div><div>Preferred Markets<div className={"market-pills"}><span>1X2</span><span>Over/Under</span><span>BTTS</span><span>+EV Only</span></div></div></div></div>
    </section>
    <section className={"board"}>
      <article className={"ref-card"}><div className={"card-title"}><span><i className={"fa-regular fa-star me-2"}></i> Watchlist</span><span className={"link"}>View all　❯</span></div><div className={"compact-list"}>
        <div className={"match"}><span className={"match-time"}>Today<br />18:30</span><div className={"match-team"}><span className={"bi bi-shield-shaded fs-5 text-info"}></span>Arsenal<span style={{marginLeft: "27px"}}><span className={"bi bi-shield-fill-x fs-5 text-primary"}></span> Chelsea</span><div className={"odds"}><span>1　2.16</span><span>X　3.60</span><span>2　2.70</span></div></div><b className={"positive"}>+25.0%</b></div>
        <div className={"match"}><span className={"match-time"}>Today<br />21:00</span><div className={"match-team"}><span className={"bi bi-shield-fill text-warning fs-5"}></span>Real Madrid<span style={{marginLeft: "27px"}}><span className={"bi bi-shield-slash text-warning fs-5"}></span> Barsalona</span><div className={"odds"}><span>1　2.05</span><span>X　3.40</span><span>2　3.20</span></div></div><b className={"positive"}>+18.3%</b></div>
        <div className={"match"}><span className={"match-time"}>Tomorrow<br />17:00</span><div className={"match-team"}><span className={"bi bi-shield-slash text-danger fs-5"}></span>Inter<span style={{marginLeft: "27px"}}><span className={"bi bi-shield text-secondary fs-5"}></span>Milan</span><div className={"odds"}><span>1　1.91</span><span>X　3.50</span><span>2　3.90</span></div></div><b className={"positive"}>+15.7%</b></div>
      </div></article>
      <article className={"ref-card"}><div className={"card-title"}><span><i className={"fa-regular fa-bell me-2"}></i> Alert Center</span><span className={"link"}>View all　❯</span></div><div className={"compact-list"}><div className={"alert"}><span className={"alert-icon"}>↗</span><span><b>High value bet detected</b><small>Arsenal vs Chelsea　•　Over 2.5 Goals</small></span><b className={"text-success"}>+25.0%</b></div><div className={"alert"}><span className={"alert-icon"}>↗</span><span><b>Line movement</b><small>Real Madrid vs Barcelona　•　1X2</small></span><small>7m ago</small></div><div className={"alert"}><span className={"alert-icon"}>✚</span><span><b>Injury update</b><small>Man City　•　Kevin De Bruyne (Doubtful)</small></span><small>32m ago</small></div><div className={"alert"}><span className={"alert-icon"}>◉</span><span><b>Model recalibrated</b><small>Premier League models updated</small></span><small>1h ago</small></div></div></article>
      <article className={"ref-card health"}><div className={"card-title"}><span><i className={"fa-solid fa-wave-square text-success me-2"}></i> Data Health</span><span className={"link"}>View details　❯</span></div><div className={"health-row head"}><span>Provider</span><span>Status</span><span>Last Update</span><span>Latency</span></div><div className={"health-row"}><span>Opta Feed</span><span><i className={"fa-solid fa-circle status-dot"}></i> Operational</span><span>1 min ago</span><span>1 min</span></div><div className={"health-row"}><span>Opta Lineups</span><span><i className={"fa-solid fa-circle status-dot"}></i> Operational</span><span>2 min ago</span><span>2 min</span></div><div className={"health-row"}><span>Market Feed</span><span><i className={"fa-solid fa-circle status-dot"}></i> Operational</span><span>1 min ago</span><span>&lt;1 min</span></div><div className={"health-row"}><span>MétéoLive</span><span><i className={"fa-solid fa-circle warning"}></i> Delayed</span><span>12 min ago</span><span>12 min</span></div><div className={"health-row"}><span>Betfair Exchange</span><span><i className={"fa-solid fa-circle offline"}></i> Offline</span><span>—</span><span>—</span></div><div className={"health-footer"}><span>Overall Data Health</span><span className={"degraded"}>Degraded　●</span></div></article>
    </section>
    <section className={"mid"}>
      <article className={"ref-card perf"}><div className={"card-title"}><span><i className={"fa-solid fa-arrow-trend-up me-2"}></i> Model Performance</span><span className={"link"}>View report　❯</span></div><div className={"performance"}><div><small className={"subtle"}>Model Accuracy<br />(All Markets)</small><div className={"accuracy"}>71%<small>Good</small></div><div className={"ring"}></div></div><div><div className={"spark"}>Calibration (Brier Score)<strong>0.146</strong><b className={"text-success"}>Good</b>　〰〰〰</div><div className={"spark"}>ROI (Last 30 Days)<strong className={"text-success"}>+11.4%</strong><b className={"text-success"}>Positive</b>　〰〰〰</div></div></div><div className={"subtle border-top pt-2"}>Based on 2,432 settled predictions <span style={{float: "right"}}>Updated 2h ago</span></div></article>
      <article className={"ref-card upcoming"}><div className={"card-title"}><span><i className={"fa-regular fa-clock me-2"}></i> Upcoming Matches</span><span className={"link"}>View all　❯</span></div><div className={"compact-list"}><div className={"match"}><span className={"match-time"}>Today 18:30</span><span className={"match-team"}>🔴　Arsenal</span><span className={"match-team"}>Chelsea</span><b className={"positive"}>+25.0%</b></div><div className={"match"}><span className={"match-time"}>Today 21:00</span><span className={"match-team"}>🔴　Real Madrid</span><span className={"match-team"}>Barcelona</span><b className={"positive"}>+18.3%</b></div><div className={"match"}><span className={"match-time"}>Tomorrow 17:00</span><span className={"match-team"}>⚫　Juventus</span><span className={"match-team"}>Napoli</span><b className={"positive"}>+14.2%</b></div><div className={"match"}><span className={"match-time"}>Tomorrow 20:45</span><span className={"match-team"}>🔴　Bayern München</span><span className={"match-team"}>Borussia Dortmund</span><b className={"positive"}>+12.1%</b></div><div className={"match"}><span className={"match-time"}>Mar 12 21:00</span><span className={"match-team"}>⚪　PSG</span><span className={"match-team"}>Marseille</span><b className={"positive"}>+16.7%</b></div></div></article>
      <div className={"saved"}><article className={"ref-card"}><div className={"card-title"}><span><i className={"fa-regular fa-circle-dot me-2"}></i> Saved Views</span><span className={"link"}>View all　❯</span></div><div className={"saved-item"}><span className={"saved-icon"}>⌁</span><span><b>+EV Opportunities</b><small className={"subtle"}>Last opened 2h ago</small></span><b>•••</b></div><div className={"saved-item"}><span className={"saved-icon"}>⌁</span><span><b>High Confidence Picks</b><small className={"subtle"}>Last opened yesterday</small></span><b>•••</b></div><div className={"saved-item"}><span className={"saved-icon"}>⌁</span><span><b>Premier League Overview</b><small className={"subtle"}>Last opened 3d ago</small></span><b>•••</b></div></article><article className={"ref-card subscription"}><div className={"card-title"}><span><i className={"fa-solid fa-crown text-warning me-2"}></i> Subscription</span><span className={"link"}>Manage</span></div><div className={"subscription-box"}><div><b>Pro Plan</b><small className={"subtle"}>Renews Dec 31, 2025</small><div className={"market-pills"}><span>AI Predictions</span><span>+EV Analysis</span><span>Advanced Stats</span></div></div><b className={"usage"}>342 / 500<br /><small>Predictions<br />used</small></b></div></article></div>
      <article className={"offline-panel"}><i className={"fa-solid fa-cloud-arrow-down"}></i><span><b>No Internet Connection</b><small className={"subtle"}>You are currently offline. Some data may be unavailable or outdated.<br />We’ll automatically sync when your connection is restored.</small></span><span className={"retry"}><i className={"fa-solid fa-rotate-right me-2"}></i> Retry Connection</span></article><div className={"footer-note"}><b>●　Some data is delayed.</b> Predictions may be less accurate.　　Last sync: 12 min ago　↻</div>
    </section>
  </div>
</main>












<Script src={"/assets/next/dashboard-boot.js"} strategy="afterInteractive" />
    </>
  );
}
