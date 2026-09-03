import Script from 'next/script';
import UserMenu from '../../../components/profile/UserMenu';
import Link from 'next/link';

export const metadata = { title: 'Myodin Analysis - Arsenal vs Chelsea | Football Intelligence' };

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
        <Link href={"/dashboard"} className={"nav-link"}>
            <i className={"fa-solid fa-chart-pie"}></i>
            <span className={"sidebar-text"}>Dashboard</span>
        </Link>
        <Link href={"/matches"} className={"nav-link active"}>
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
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Myodin Match Analysis</h1><small>Event EVT-FOOT-20458 &nbsp;&bull;&nbsp; Arsenal vs Chelsea &nbsp;&bull;&nbsp; Premier League</small></div>
          <a href={"/matches"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Matches</a>
        </div>
        <div className={"myo-hero"}>
          <div className={"myo-teams"}>
            <div className={"myo-team"}><img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} alt={"Arsenal"} /><div className={"myo-team-name"}>Arsenal</div><div className={"myo-team-sub"}>4th &bull; 64 pts &bull; Home</div></div>
            <div className={"myo-mid"}><span className={"myo-live"}>&#9679; LIVE</span><div className={"myo-score"}>1 - 1</div><div className={"myo-clock"}>61:24 &nbsp;&bull;&nbsp; 22&apos; Saka, 45+2&apos; Palmer</div></div>
            <div className={"myo-team"}><img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} alt={"Chelsea"} /><div className={"myo-team-name"}>Chelsea</div><div className={"myo-team-sub"}>6th &bull; 60 pts &bull; Away</div></div>
          </div>
          <div className={"myo-meta"}>Premier League &bull; Matchday 36 &bull; Market: 1X2 (Full Time)</div>
        </div>
                <div className={"myo-sections"}>
          <a className={"myo-sec active"} href={"#decision"}>Overview</a>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}>Team Power</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}>Form &amp; Momentum</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}>Performance Quality</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}>Match Context</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}>Tactical Matchup</Link>
          <span style={{width:1,height:18,background:"#243247",margin:"0 4px"}}></span>
          <a className={"myo-sec"} href={"#ai"}>AI Explanation</a>
          <a className={"myo-sec"} href={"#probability"}>Probability</a>
          <a className={"myo-sec"} href={"#value"}>Value Analysis</a>
          <a className={"myo-sec"} href={"#risk"}>Risk Analysis</a>
          <a className={"myo-sec"} href={"#market"}>Market Intelligence</a>
          <a className={"myo-sec"} href={"#factors"}>Key Factors</a>
          <div className={"myo-note"}>Probability, Value, Risk, Market &amp; AI explanation live on this Overview page. Team Power, Form &amp; Momentum, Performance Quality, Match Context and Tactical Matchup have their own pages.</div>
        </div>
<div className={"myo-card"} id={"decision"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Decision &mdash; conclusion first</div>
          <div className={"myo-decision"}>
            <div className={"myo-score-box"}><div className={"myo-score-num"}>78</div><div className={"myo-score-of"}>MYODIN SCORE / 100</div><div className={"myo-gauge"}><i></i></div></div>
            <div className={"myo-verdict"}>
              <span className={"myo-signal value"}>VALUE &#10003;</span>
              <p style={{marginTop:"10px"}}>Myodin sees <b style={{color:"#fff"}}>63.4%</b> for Arsenal but the market prices the same outcome at only <b style={{color:"#fff"}}>56.1%</b>. After risk is included this is a <b style={{color:"#34d399"}}>VALUE</b> signal &mdash; not STRONG VALUE because of lineup uncertainty and medium model agreement.</p>
              <div className={"myo-chips"}>
                <span className={"myo-chip"}>Confidence <b className={"g"}>High (78%)</b></span>
                <span className={"myo-chip"}>Probability Edge <b className={"g"}>+7.3%</b></span>
                <span className={"myo-chip"}>Expected Value <b className={"g"}>+14.8%</b></span>
                <span className={"myo-chip"}>Risk <b className={"y"}>Medium</b></span>
              </div>
            </div>
          </div>
        </div>
        <div className={"myo-card"} id={"ai"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> AI Explanation &mdash; why</div>
          <div className={"myo-ai"}>Myodin estimates Arsenal at 63.4%, while the market prices the same outcome at 56.1%. The difference is explained by stronger recent xG performance, better momentum and a tactical advantage. Risk remains Medium because of lineup uncertainty (Saka doubtful).</div>
          <div style={{fontSize:"10.5px",color:"#64748b",marginTop:"8px"}}>The AI only explains the result &mdash; the quantitative models calculate it.</div>
        </div>
        <div className={"myo-card"} id={"probability"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Probability &mdash; Myodin vs Market</div>
          <div className={"myo-prob-row"} style={{gridTemplateColumns:"90px 1fr 1fr 70px",color:"#8ea0b8",fontSize:"10px",textTransform:"uppercase",letterSpacing:".4px"}}><span>Outcome</span><span>Myodin (model)</span><span>Market (observed)</span><span style={{textAlign:"right"}}>Edge</span></div>
          <div className={"myo-prob-row"}><span className={"myo-prob-name"}>Home &mdash; Arsenal</span><span className={"myo-bar myodin"}><i style={{width:"63.4%"}}></i></span><span className={"myo-bar market"}><i style={{width:"56.1%"}}></i></span><span className={"myo-edge"}><b style={{color:"#34d399"}}>+7.3%</b></span></div>
          <div className={"myo-prob-row"}><span className={"myo-prob-name"}>Draw</span><span className={"myo-bar myodin"}><i style={{width:"21.2%"}}></i></span><span className={"myo-bar market"}><i style={{width:"24.7%"}}></i></span><span className={"myo-edge"}><b style={{color:"#f87171"}}>-3.5%</b></span></div>
          <div className={"myo-prob-row"}><span className={"myo-prob-name"}>Away &mdash; Chelsea</span><span className={"myo-bar myodin"}><i style={{width:"15.4%"}}></i></span><span className={"myo-bar market"}><i style={{width:"19.2%"}}></i></span><span className={"myo-edge"}><b style={{color:"#f87171"}}>-3.8%</b></span></div>
          <div className={"myo-legend"}><span><i className={"myo-dot"} style={{background:"#22d3ee"}}></i>Myodin probability (model estimate)</span><span><i className={"myo-dot"} style={{background:"#94a3b8"}}></i>Market probability (bookmaker margin removed)</span></div>
        </div>
        <div className={"myo-card"} id={"value"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Value Analysis</div>
          <div className={"myo-vgrid"}>
            <div className={"myo-vcell"}><div className={"k"}>Myodin Probability</div><div className={"v"}>63.4%</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Market Probability</div><div className={"v"}>56.1%</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Probability Edge</div><div className={"v good"}>+7.3%</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Fair Odds (model)</div><div className={"v"}>1.58</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Market Odds</div><div className={"v"}>1.78</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Expected Value</div><div className={"v good"}>+14.8%</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Value Bet Score</div><div className={"v"}>82 / 100</div></div>
            <div className={"myo-vcell"}><div className={"k"}>Closing Line Value</div><div className={"v good"}>+8.7%</div></div>
          </div>
        </div>
        <div className={"myo-card"} id={"risk"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Risk Analysis</div>
          <div className={"myo-risk"}>
            <div className={"rc"}><div className={"rt"}><span>Prediction Confidence</span><span className={"myo-lv high"}>HIGH</span></div><div className={"rs"}>Model output 78% &mdash; strong internal agreement.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Data Quality</span><span className={"myo-lv high"}>HIGH</span></div><div className={"rs"}>All feeds fresh, no missing lineups.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Model Agreement</span><span className={"myo-lv med"}>MEDIUM</span></div><div className={"rs"}>3 of 5 sub-models agree on home win value.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Match Uncertainty</span><span className={"myo-lv low"}>LOW</span></div><div className={"rs"}>Big match, both teams near full strength.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Upset Risk</span><span className={"myo-lv med"}>MEDIUM</span></div><div className={"rs"}>Derby-type fixture &mdash; Chelsea can raise level.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Red Card Sensitivity</span><span className={"myo-lv low"}>LOW</span></div><div className={"rs"}>Both sides disciplined this season (1 red in 70+ games).</div></div>
            <div className={"rc"}><div className={"rt"}><span>Goal Variance Risk</span><span className={"myo-lv med"}>MEDIUM</span></div><div className={"rs"}>Over/Under 2.5 line is tight; low-scoring outcome possible.</div></div>
            <div className={"rc"}><div className={"rt"}><span>Liquidity Risk</span><span className={"myo-lv low"}>LOW</span></div><div className={"rs"}>&pound;4.2M matched on Betfair &mdash; easy to enter/exit.</div></div>
          </div>
        </div>
        <div className={"myo-card"} id={"market"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Market Intelligence</div>
          <table className={"myo-odds"}><thead><tr><th>Outcome</th><th>Opening</th><th>Current</th><th>Movement</th><th>Market consensus</th></tr></thead><tbody>
            <tr><td>Home &mdash; Arsenal</td><td>2.10</td><td>1.78</td><td className={"down"}>&#9660; -15.2%</td><td>Steady support</td></tr>
            <tr><td>Draw</td><td>3.80</td><td>3.60</td><td className={"down"}>&#9660; -5.3%</td><td>Slight drift out</td></tr>
            <tr><td>Away &mdash; Chelsea</td><td>3.40</td><td>4.20</td><td className={"up"}>&#9650; +23.5%</td><td>Drifting (money on home)</td></tr>
          </tbody></table>
          <div style={{margin:"10px 0 2px",fontSize:"11px",color:"#94a3b8"}}>Sharp vs Public money &mdash; Home (1X2)</div>
          <div className={"myo-split"}><div className={"sharp"} style={{width:"46%"}}></div><div className={"pub"} style={{width:"54%"}}></div></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#94a3b8"}}><span>Sharp money: <b style={{color:"#22d3ee"}}>46% of tickets</b></span><span>Public: <b style={{color:"#cbd5e1"}}>54% of tickets</b></span></div>
          <div style={{fontSize:"11px",color:"#94a3b8",marginTop:"6px"}}>Line moved toward Arsenal despite only 54% public tickets &mdash; <b style={{color:"#22d3ee"}}>reverse line movement</b> signals sharp money on the home side. No steam move detected.</div>
          <div style={{marginTop:"14px",fontSize:"11px",color:"#94a3b8"}}>Real observed data is always separated from Myodin estimates:</div>
          <div className={"myo-src"}>
            <div className={"myo-obs"}><div className={"myo-badge obs"}>OBSERVED DATA</div><div className={"myo-bignum"}>&pound;4.2M</div><div className={"myo-sub"}>Betfair Exchange matched volume on this market (live). Bookmaker consensus from 38 operators. Back/Lay order book depth: 92% / 87%.</div></div>
            <div className={"myo-est"}><div className={"myo-badge est"}>MYODIN ESTIMATE</div><div className={"myo-bignum"}>&euro;180&ndash;230M</div><div className={"myo-sub"}>Estimated global betting volume for this match, combining league popularity, club fanbase, TV audience, odds liquidity, sharp flows and historical comparables. Confidence: 72%.</div></div>
          </div>
        </div>
        <div className={"myo-card"} id={"factors"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Key Factors &amp; Context</div>
          <div className={"myo-factors"}>
            <span className={"myo-fact"}>Form (last 5): <b>Arsenal WWWWD &bull; Chelsea WDWLD</b></span>
            <span className={"myo-fact"}>xG per match: <b>Arsenal 1.98 &bull; Chelsea 1.48</b></span>
            <span className={"myo-fact"}>xGA per match: <b>Arsenal 0.92 &bull; Chelsea 1.43</b></span>
            <span className={"myo-fact"}>Injury: <b>Saka doubtful (Arsenal)</b></span>
            <span className={"myo-fact"}>Rest: <b>Arsenal 6 days &bull; Chelsea 3 days</b></span>
            <span className={"myo-fact"}>Travel: <b>Neutral &mdash; London derby</b></span>
            <span className={"myo-fact"}>Motivation: <b>High both (top-4 + title race)</b></span>
            <span className={"myo-fact"}>Set pieces: <b>Arsenal advantage</b></span>
            <span className={"myo-fact"}>Bench strength: <b>Chelsea edge</b></span>
            <span className={"myo-fact"}>Tactical matchup: <b>Arsenal press vs Chelsea counter</b></span>
          </div>
        </div>
        <div className={"myo-foot"}>Demo build &mdash; values shown are sample data so the UI can be reviewed. The backend will replace them with real model output.</div>
      </div>
    </main>
    <style dangerouslySetInnerHTML={{ __html: ".myo-main{max-width:1180px;margin:0 auto;padding:18px 20px 40px}.myo-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}.myo-top h1{font-size:20px;font-weight:700;margin:0;color:#fff}.myo-top small{display:block;color:#8ea0b8;font-size:11px;margin-top:2px}.myo-hero{background:linear-gradient(135deg,#0d1524,#122036);border:1px solid #1e293b;border-radius:14px;padding:18px 20px;margin-bottom:16px}.myo-teams{display:flex;align-items:center;justify-content:space-between;gap:12px}.myo-team{flex:1;text-align:center}.myo-team img{width:52px;height:52px;object-fit:contain}.myo-team-name{font-weight:700;color:#fff;margin-top:6px;font-size:15px}.myo-team-sub{color:#8ea0b8;font-size:11px}.myo-mid{min-width:170px;text-align:center}.myo-live{display:inline-block;background:rgba(239,68,68,.15);color:#f87171;font-size:10px;font-weight:700;letter-spacing:1px;padding:3px 8px;border-radius:20px;margin-bottom:4px}.myo-score{font-size:34px;font-weight:800;color:#fff;line-height:1}.myo-clock{color:#8ea0b8;font-size:12px;margin-top:3px}.myo-meta{text-align:center;color:#8ea0b8;font-size:11px;margin-top:12px;border-top:1px dashed #1e293b;padding-top:10px}.myo-sections{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}.myo-sec{background:#0f172a;border:1px solid #1e293b;color:#b6c2d4;font-size:11px;font-weight:600;padding:6px 12px;border-radius:20px;text-decoration:none}.myo-sec.active{background:rgba(16,185,129,.12);border-color:#10b981;color:#34d399}.myo-note{color:#64748b;font-size:10.5px;width:100%;margin-top:4px}.myo-card{background:#0f172a;border:1px solid #1e293b;border-radius:12px;padding:16px;margin-bottom:14px}.myo-card-title{font-size:12px;font-weight:700;letter-spacing:.6px;color:#94a3b8;text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:8px}.myo-decision{display:flex;flex-wrap:wrap;gap:18px;align-items:center}.myo-score-box{text-align:center;min-width:150px}.myo-score-num{font-size:52px;font-weight:900;color:#34d399;line-height:1}.myo-score-of{color:#64748b;font-size:13px}.myo-gauge{height:8px;background:#1e293b;border-radius:6px;margin-top:8px;overflow:hidden}.myo-gauge i{display:block;height:100%;width:78%;background:linear-gradient(90deg,#10b981,#34d399);border-radius:6px}.myo-signal{display:inline-block;font-weight:800;letter-spacing:1px;font-size:13px;padding:6px 14px;border-radius:8px}.myo-signal.value{background:rgba(16,185,129,.16);color:#34d399;border:1px solid #10b981}.myo-verdict{flex:1;min-width:260px}.myo-verdict p{margin:0 0 10px;color:#cbd5e1;font-size:13px;line-height:1.55}.myo-chips{display:flex;flex-wrap:wrap;gap:6px}.myo-chip{background:#111c2e;border:1px solid #243247;border-radius:8px;padding:5px 10px;font-size:11px;color:#cbd5e1}.myo-chip b{color:#fff}.myo-chip .g{color:#34d399}.myo-chip .y{color:#fbbf24}.myo-chip .r{color:#f87171}.myo-ai{border-left:3px solid #10b981;background:#0c1424;border-radius:0 10px 10px 0;padding:12px 14px;color:#cbd5e1;font-size:13px;line-height:1.6}.myo-prob-row{display:grid;grid-template-columns:90px 1fr 1fr 70px;gap:8px;align-items:center;margin-bottom:8px;font-size:12px}.myo-prob-name{color:#cbd5e1;font-weight:600}.myo-bar{height:10px;border-radius:6px;overflow:hidden;background:#1e293b}.myo-bar i{display:block;height:100%;border-radius:6px}.myo-bar.myodin i{background:linear-gradient(90deg,#0ea5e9,#22d3ee)}.myo-bar.market i{background:linear-gradient(90deg,#475569,#94a3b8)}.myo-prob-v{font-weight:700;color:#fff;text-align:right}.myo-edge{font-size:11px;text-align:right;white-space:nowrap}.myo-legend{display:flex;gap:14px;font-size:11px;color:#94a3b8;margin-top:6px}.myo-dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:5px;vertical-align:middle}.myo-vgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}.myo-vcell{background:#0c1424;border:1px solid #1e293b;border-radius:9px;padding:10px}.myo-vcell .k{font-size:10px;color:#8ea0b8;text-transform:uppercase;letter-spacing:.4px}.myo-vcell .v{font-size:16px;font-weight:800;color:#fff;margin-top:3px}.myo-vcell .v.good{color:#34d399}.myo-vcell .v.bad{color:#f87171}.myo-risk{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}.myo-risk .rc{background:#0c1424;border:1px solid #1e293b;border-radius:9px;padding:10px 12px}.myo-risk .rt{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#e2e8f0}.myo-risk .rs{font-size:10.5px;color:#8ea0b8;margin-top:4px;line-height:1.4}.myo-lv{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:12px}.myo-lv.low{background:rgba(16,185,129,.15);color:#34d399}.myo-lv.med{background:rgba(245,158,11,.15);color:#fbbf24}.myo-lv.high{background:rgba(239,68,68,.15);color:#f87171}.myo-odds{width:100%;border-collapse:collapse;font-size:12.5px}.myo-odds th{color:#8ea0b8;font-size:10.5px;text-transform:uppercase;letter-spacing:.4px;text-align:left;padding:6px 8px;border-bottom:1px solid #1e293b}.myo-odds td{padding:7px 8px;border-bottom:1px solid #16213a;color:#cbd5e1}.myo-odds .up{color:#34d399}.myo-odds .down{color:#f87171}.myo-split{display:flex;height:14px;border-radius:7px;overflow:hidden;background:#1e293b;margin:8px 0 4px}.myo-split .sharp{background:linear-gradient(90deg,#0ea5e9,#22d3ee)}.myo-split .pub{background:#475569}.myo-src{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}.myo-obs,.myo-est{border-radius:11px;padding:13px 14px;border:1px solid #1e293b}.myo-obs{background:#0c1424}.myo-est{background:linear-gradient(160deg,#0d1a13,#0c1424);border-color:#14532d}.myo-badge{display:inline-block;font-size:9.5px;font-weight:800;letter-spacing:.6px;padding:3px 9px;border-radius:12px;margin-bottom:8px}.myo-badge.obs{background:#334155;color:#cbd5e1}.myo-badge.est{background:rgba(16,185,129,.18);color:#34d399;border:1px solid #10b981}.myo-bignum{font-size:22px;font-weight:800;color:#fff}.myo-sub{font-size:11px;color:#8ea0b8;margin-top:3px;line-height:1.5}.myo-factors{display:flex;flex-wrap:wrap;gap:7px}.myo-fact{background:#111c2e;border:1px solid #243247;border-radius:8px;padding:6px 11px;font-size:11.5px;color:#cbd5e1}.myo-fact b{color:#fff}.myo-foot{color:#64748b;font-size:10.5px;text-align:center;margin-top:18px}@media (max-width:760px){.myo-score{font-size:26px}.myo-prob-row{grid-template-columns:1fr;gap:3px}.myo-decision{gap:12px}}" }} />
    <Script src={"/assets/next/myodin-analysis-boot.js"} strategy="afterInteractive" />
    </>
  );
}
