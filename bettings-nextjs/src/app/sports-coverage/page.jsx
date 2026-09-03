import Script from 'next/script';
import Link from 'next/link';
export const metadata = { title: 'Football Centre | Football Intelligence' };

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

        
        <div className={"dropdown border-start border-secondary ps-2 ps-md-3"}>
            <div className={"d-flex align-items-center gap-2 cursor-pointer"} data-bs-toggle={"dropdown"}>
                <div className={"bg-success  border border-success text-success fw-bold rounded-circle"} style={{width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px"}}>JD</div>
                <div className={"d-none d-sm-block"}>
                    <div className={"fw-bold lh-1 "} style={{fontSize: "12px"}}>John Doe</div>
                    <small className={"text-success"} style={{fontSize: "10px"}}>Elite Member</small>
                </div>
                <i className={"fa-solid fa-chevron-down  ms-1"} style={{fontSize: "10px"}}></i>
            </div>
            <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary"}>
                <li><Link className={"dropdown-item  small"} href={"/profile"}><i className={"fa-solid fa-user me-2 text-success"}></i> Profile</Link></li>
                <li><Link className={"dropdown-item  small"} href={"/settings"}><i className={"fa-solid fa-sliders me-2 text-success"}></i> Settings</Link></li>
                <li><hr className={"dropdown-divider border-secondary"} /></li>
                <li><Link className={"dropdown-item text-danger small"} href={"/login"}><i className={"fa-solid fa-right-from-bracket me-2"}></i> Log Out</Link></li>
            </ul>
        </div>
    </div>
</header>


<aside className={"sidebar-wrapper"} id={"sidebar"}>
    <div className={"sidebar-heading"}>MAIN MENU</div>
    <div className={"nav-menu"}>
        <Link href={"/dashboard"} className={"nav-link"}>
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
        <Link href={"/sports-coverage"} className={"nav-link active"}><i className={"fa-solid fa-futbol"}></i><span className={"sidebar-text"}>Sports Coverage</span></Link>
       
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
		  
    <div className={"row g-2"}>
      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box"}><i className={"bi bi-dribbble"}></i></div>
          <div>
            <div className={"metric-title"}>Sports covered</div>
            <div className={"metric-value"}>9 / 9</div>
            <div className={"metric-sub"}>100%</div>
          </div>
        </div>
      </div>

      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box text-danger"}><i className={"bi bi-broadcast"}></i></div>
          <div>
            <div className={"metric-title"}>Live events</div>
            <div className={"metric-value"}>1,248</div>
            <div className={"metric-sub"}>Across all sports</div>
          </div>
        </div>
      </div>

      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box"}><i className={"bi bi-calendar-event"}></i></div>
          <div>
            <div className={"metric-title"}>Upcoming events</div>
            <div className={"metric-value"}>8,765</div>
            <div className={"metric-sub"}>Next 7 days</div>
          </div>
        </div>
      </div>

      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box"}><i className={"bi bi-bar-chart-line"}></i></div>
          <div>
            <div className={"metric-title"}>Supported markets</div>
            <div className={"metric-value"}>128</div>
            <div className={"metric-sub"}>Average per sport</div>
          </div>
        </div>
      </div>

      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box"}><i className={"bi bi-link-45deg"}></i></div>
          <div>
            <div className={"metric-title"}>Providers</div>
            <div className={"metric-value"}>7</div>
            <div className={"metric-sub"}>Connected</div>
          </div>
        </div>
      </div>

      
      <div className={"col"}>
        <div className={"metric-card"}>
          <div className={"metric-icon-box text-success"}><i className={"bi bi-activity"}></i></div>
          <div>
            <div className={"metric-title"}>Coverage health</div>
            <div className={"metric-value"}>Excellent</div>
            <div className={"metric-sub text-success"}>98.4%</div>
          </div>
        </div>
      </div>
    </div>

    
    <div className={"dashboard-table-card mb-3"}>
      <div className={"table-responsive"}>
        <table className={"replica-table coveragetable"}>
          <thead>
            
            <tr>
              <th rowspan={"2"} style={{width: "14%"}}>Sport & League</th>
              <th colspan={"6"} className={"text-center"} style={{width: "20%"}}>Coverage <i className={"bi bi-info-circle text-muted ms-1"}></i></th>
              <th colspan={"2"} className={"text-center"} style={{width: "10%"}}>Events</th>
              <th rowspan={"2"} style={{width: "16%"}}>Supported Market Families <i className={"bi bi-info-circle text-muted ms-1"}></i></th>
              <th rowspan={"2"} style={{width: "11%"}}>Provider Health<br /><span style={{fontWeight: 400, fontSize: "8px"}}>Last Update</span></th>
              <th rowspan={"2"} className={"text-center"} style={{width: "9%"}}>Mapping<br /><span style={{fontWeight: 400, fontSize: "8px"}}>Completeness</span></th>
              <th rowspan={"2"} style={{width: "10%"}}>Phases & Terminology</th>
              <th rowspan={"2"} style={{width: "6%"}}>Unsupported Markets</th>
              <th rowspan={"2"} className={"text-center"} style={{width: "4%"}}>Quick Links</th>
            </tr>
            
            <tr className={"sub-head-row text-center"}>
              <th>Live</th>
              <th>Schedule</th>
              <th>Results</th>
              <th>Player Data</th>
              <th>Markets</th>
              <th>Predictions</th>
              <th>Live</th>
              <th>Upcoming</th>
            </tr>
          </thead>
          <tbody>
            
            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#1e293b", color: "#fff"}}>⚽</div>
                  <div>
                    <div className={"sport-name"}>Football</div>
                    <div className={"sport-leagues"}>All Leagues</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-live"}>1,042</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>7,123</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3, width: "150px"}}>
                  1X2, O/U, BTTS, DC, AH, Corners, Cards, Goalscorer, HT/FT, Scorecast, Props
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Excellent
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>98.7%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>2 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 98%, #121f33 98% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>98%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2, width: "150px"}}>
                  Pre-match, 1H, 2H, HT, FT, ET, Pens<br />
                  <span className={"text-muted"}>Football-specific mapping</span>
                </div>
              </td>
              <td><span className={"no-coverage-text"}>None</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#84cc16", color: "#0f172a"}}>🎾</div>
                  <div>
                    <div className={"sport-name"}>Tennis</div>
                    <div className={"sport-leagues"}>ATP, WTA, ITF</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-live"}>86</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>612</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  Match Winner, Set Winner, Games O/U, Handicap, Total Games, Props
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Excellent
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>97.9%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>3 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 96%, #121f33 96% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>96%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-match, Live, Set 1, Set 2, Set 3, Match, Tiebreak<br />
                  <span className={"text-muted"}>Tennis-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Point by Point Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#ea580c", color: "#fff"}}>🏀</div>
                  <div>
                    <div className={"sport-name"}>Basketball</div>
                    <div className={"sport-leagues"}>NBA, EuroLeague, FIBA</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-live"}>63</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>482</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  1X2, O/U, Spread, Total Points, Quarters, Player Props, Team Totals
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Excellent
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>97.9%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>5 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 95%, #121f33 95% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>95%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-game, Q1, Q2, Q3, Q4, OT, Final<br />
                  <span className={"text-muted"}>Basketball-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Player Stats (Real-time)</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#334155", color: "#fff"}}>🏒</div>
                  <div>
                    <div className={"sport-name"}>Ice Hockey</div>
                    <div className={"sport-leagues"}>NHL, KHL, Liiga</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-live"}>38</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>251</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  1X2, O/U, Puck Line, Total Goals, Period Markets, Player Props
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Excellent
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>96.8%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>7 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 94%, #121f33 94% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>94%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-game, P1, P2, P3, OT, SO, Final<br />
                  <span className={"text-muted"}>Hockey-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Puck by Puck Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#0284c7", color: "#fff"}}>🤾</div>
                  <div>
                    <div className={"sport-name"}>Handball</div>
                    <div className={"sport-leagues"}>EHF, Champions League</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-live"}>19</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>146</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  1X2, O/U, Handicap, Total Goals, 1st Half, Player Props
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Good
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>95.2%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>9 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 93%, #121f33 93% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>93%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-match, 1H, 2H, FT, OT<br />
                  <span className={"text-muted"}>Handball-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>7m Scorer Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#0d9488", color: "#fff"}}>🏐</div>
                  <div>
                    <div className={"sport-name"}>Volleyball</div>
                    <div className={"sport-leagues"}>FIVB, CEV, VNL</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-num"}>0</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>203</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  Match Winner, Set Winner, Total Sets, Points O/U
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-success fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Good
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>94.7%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>11 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--green) 0% 92%, #121f33 92% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>92%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-match, Set 1, Set 2, Set 3, Set 4, Set 5, Match<br />
                  <span className={"text-muted"}>Volleyball-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Rally by Rally Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#b91c1c", color: "#fff"}}>⚾</div>
                  <div>
                    <div className={"sport-name"}>Baseball</div>
                    <div className={"sport-leagues"}>MLB, NPB</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle orange"}><i className={"bi bi-dash"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-num"}>0</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>312</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  1X2, Run Line, Total Runs, Innings, Team Totals, Player Props
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-warning fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--orange)"}}></span> Warning
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>90.1%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>18 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--orange) 0% 85%, #121f33 85% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>85%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-game, 1st Inning, Middle Innings, Late Innings, Final<br />
                  <span className={"text-muted"}>Baseball-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Pitch by Pitch Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#6d28d9", color: "#fff"}}>🎮</div>
                  <div>
                    <div className={"sport-name"}>Esports</div>
                    <div className={"sport-leagues"}>LoL, CS2, Dota 2</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle orange"}><i className={"bi bi-dash"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle green"}><i className={"bi bi-check"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-num"}>0</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>198</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div style={{fontSize: "9.5px", lineHeight: 1.3}}>
                  Match Winner, Map Winner, Total Maps, Round Markets
                </div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-warning fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--orange)"}}></span> Warning
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>89.3%</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>22 min ago</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--orange) 0% 80%, #121f33 80% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>80%</span>
                  </div>
                </div>
              </td>
              <td>
                <div style={{fontSize: "8.5px", color: "#cbd5e1", lineHeight: 1.2}}>
                  Pre-match, Map 1, Map 2, Map 3, Final<br />
                  <span className={"text-muted"}>Esports-specific mapping</span>
                </div>
              </td>
              <td><span style={{fontSize: "9px", color: "#cbd5e1"}}>Real-time In-game Markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn"}></i>
                <i className={"bi bi-cpu quick-link-btn"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn"}></i>
              </td>
            </tr>

            
            <tr>
              <td>
                <div className={"sport-cell"}>
                  <div className={"sport-icon"} style={{backgroundColor: "#475569", color: "#fff"}}>⚽</div>
                  <div>
                    <div className={"sport-name"}>Other Sports</div>
                    <div className={"sport-leagues"}>Rugby, Cricket, Snooker...</div>
                  </div>
                </div>
              </td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"status-circle red"}><i className={"bi bi-x"}></i></span></td>
              <td className={"text-center"}><span className={"event-count-num"}>0</span><span className={"event-lbl"}>Live</span></td>
              <td className={"text-center"}><span className={"event-count-num"}>0</span><span className={"event-lbl"}>7 days</span></td>
              <td>
                <div className={"no-coverage-text"}>—<br />No coverage</div>
              </td>
              <td>
                <div className={"d-flex align-items-center gap-1 text-danger fw-semibold"} style={{fontSize: "10px"}}>
                  <span className={"dot-indicator"} style={{background: "var(--red)"}}></span> No Data
                </div>
                <div className={"fw-bold text-white"} style={{fontSize: "10.5px"}}>—</div>
                <div className={"text-muted"} style={{fontSize: "8px"}}>Never</div>
              </td>
              <td className={"text-center"}>
                <div className={"d-inline-flex align-items-center justify-content-center"}>
                  <div className={"progress-circle"} style={{background: "conic-gradient(var(--red) 0% 0%, #121f33 0% 100%)"}}>
                    <span style={{background: "#070e1b", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)"}}>0%</span>
                  </div>
                </div>
              </td>
              <td>
                <div className={"no-coverage-text"}>—<br />No coverage</div>
              </td>
              <td><span className={"no-coverage-text"}>All markets</span></td>
              <td className={"text-center"}>
                <i className={"bi bi-trophy quick-link-btn opacity-25"}></i>
                <i className={"bi bi-cpu quick-link-btn opacity-25"}></i>
                <i className={"bi bi-bar-chart-steps quick-link-btn opacity-25"}></i>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      
    </div>
    
      <div className={"dashboard-footer dashboard-card"}>
        <div className={"d-flex align-items-center gap-3"}>
          <div className={"legend-item"}><span className={"dot-indicator"} style={{background: "var(--green)"}}></span> Excellent (≥95%)</div>
          <div className={"legend-item"}><span className={"dot-indicator"} style={{background: "#22c55e"}}></span> Good (90-94%)</div>
          <div className={"legend-item"}><span className={"dot-indicator"} style={{background: "var(--orange)"}}></span> Warning (80-89%)</div>
          <div className={"legend-item"}><span className={"dot-indicator"} style={{background: "var(--red)"}}></span> Poor (&lt;80%)</div>
          <div className={"legend-item"}><span className={"dot-indicator"} style={{background: "#475569"}}></span> No Data</div>
        </div>

        <div className={"d-flex align-items-center gap-3"}>
          <span><i className={"bi bi-info-circle me-1"}></i> Coverage and market availability are updated continuously based on data provider feeds.</span>
          <button className={"btn-refresh-all"}><i className={"bi bi-arrow-clockwise"}></i> Refresh All</button>
          <span>Last updated: 2 min ago</span>
        </div>
      </div>
	</main>
	









<Script src={"/assets/next/sports-coverage-boot.js"} strategy="afterInteractive" />
    </>
  );
}
