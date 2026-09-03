import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    
     




<DashboardChrome />





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
