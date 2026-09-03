import Script from 'next/script';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<header className={"top-navbar d-flex justify-content-between align-items-center"}>
    <div className={"d-flex align-items-center gap-3"}>
        
        <button className={"btn btn-link text-white p-0 me-2"} id={"sidebarToggle"} style={{fontSize: "18px"}}>
            <i className={"fa-solid fa-bars-staggered text-success"}></i>
        </button>

        
       <div className={"d-flex align-items-center gap-2 logo"}>
           <div className={"brand-text"}>
<img src={"/assets/images/logo.png"} style={{width: "250px"}} />
</div>
        </div>
        <div className={"shared-header-title"}>VALUE BETS</div>

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute text-secondary"} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>
        <div className={"shared-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Until 12/31/2025</small></span></div>

        
        <div className={"dropdown"}>
            <button className={"theme-toggle-btn gap-2"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"}>
                <i className={"fa-solid fa-globe text-success"}></i>
                <span className={"fw-semibold"} id={"selectedLangText"} style={{fontSize: "12px"}}>FR</span>
                <i className={"fa-solid fa-chevron-down text-secondary"} style={{fontSize: "9px"}}></i>
            </button>
            <ul className={"dropdown-menu dropdown-menu-end  border-secondary shadow-lg"}>
                <li>
                    <a className={"dropdown-item text-white small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"en"} href={"#"}>
                        <span>English</span>
                        <span className={"badge bg-success ms-2"}>EN</span>
                    </a>
                </li>
                <li><hr className={"dropdown-divider border-secondary my-1"} /></li>
                <li>
                    <a className={"dropdown-item text-white small d-flex align-items-center justify-content-between py-2 language-option"} data-language={"fr"} href={"#"}>
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
                <div className={"bg-success bg-opacity-25 border border-success text-success fw-bold rounded-circle"} style={{width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px"}}>JD</div>
                <div className={"d-none d-sm-block"}>
                    <div className={"fw-bold lh-1 text-white"} style={{fontSize: "12px"}}>John Doe</div>
                    <small className={"text-success"} style={{fontSize: "10px"}}>Elite Member</small>
                </div>
                <i className={"fa-solid fa-chevron-down text-secondary ms-1"} style={{fontSize: "10px"}}></i>
            </div>
            <ul className={"dropdown-menu dropdown-menu-end  border-secondary"}>
                <li><a className={"dropdown-item text-white small"} href={"#"}><i className={"fa-solid fa-user me-2 text-success"}></i> Profile</a></li>
                <li><a className={"dropdown-item text-white small"} href={"#"}><i className={"fa-solid fa-sliders me-2 text-success"}></i> Settings</a></li>
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
        <Link href={"/value-bets"} className={"nav-link active"}>
            <i className={"fa-solid fa-gem text-success"}></i>
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
        <a href={"#"} className={"nav-link"}>
            <i className={"fa-solid fa-chart-simple"}></i>
            <span className={"sidebar-text"}>Advanced Stats</span>
        </a>
        <a href={"#"} className={"nav-link"}>
            <i className={"fa-solid fa-file-invoice"}></i>
            <span className={"sidebar-text"}>Match Reports</span>
        </a>
        <a href={"#"} className={"nav-link"}>
            <i className={"fa-solid fa-star"}></i>
            <span className={"sidebar-text"}>Watchlist</span>
        </a>
    </div>

    <div className={"nav-menu"}><Link href={"/news"} className={"nav-link"}><i className={"fa-solid fa-newspaper text-success"}></i><span className={"sidebar-text"}>Sports News</span></Link></div>

    <div className={"sidebar-heading"}>SPORTS</div>
    <div className={"nav-menu"}>
        <Link href={"/sports-coverage"} className={"nav-link"}><i className={"fa-solid fa-futbol"}></i><span className={"sidebar-text"}>Sports Coverage</span></Link>
       
    </div>
    <div className={"sidebar-heading"}>PREFERENCES</div>
    <div className={"nav-menu"}>
        <a href={"#"} className={"nav-link"}>
            <i className={"fa-solid fa-gear"}></i>
            <span className={"sidebar-text"}>Settings</span>
        </a>
        <a href={"#"} className={"nav-link"}>
            <i className={"fa-solid fa-circle-question"}></i>
            <span className={"sidebar-text"}>Help & Support</span>
        </a>
    </div>

    
</aside>


<main className={"main-content"} id={"mainContent"}>
    
  
    <ul className={"nav nav-tabs nav-tabs-custom"} id={"dashboardTabs"} role={"tablist"}>
      <li className={"nav-item"} role={"presentation"}>
        <button className={"nav-link"} type={"button"} role={"tab"}>Pre-match</button>
      </li>
      <li className={"nav-item"} role={"presentation"}>
        <button className={"nav-link"} type={"button"} role={"tab"}>Live</button>
      </li>
      <li className={"nav-item"} role={"presentation"}>
        <button className={"nav-link"} type={"button"} role={"tab"}>Post-match</button>
      </li>
      <li className={"nav-item"} role={"presentation"}>
        <button className={"nav-link active"} id={"value-bets-tab"} data-bs-toggle={"tab"} data-bs-target={"#value-bets"} type={"button"} role={"tab"}>Value Bets (+EV)</button>
      </li>
    </ul>

    
    <div className={"tab-content"} id={"dashboardTabsContent"}>

    

      
      
      <div className={"tab-pane fade show active"} id={"value-bets"} role={"tabpanel"}>
        <div className={"row g-3"}>
            <div className={"col-lg-12"}>
                  
            <div className={"dashboard-card py-2"}>
              <div className={"row g-2 align-items-center"}>
                <div className={"col"}>
                  <div className={"filter-label"}>Sport</div>
                  <select className={"form-select"}><option>Football</option></select>
                </div>
                <div className={"col"}>
                  <div className={"filter-label"}>League</div>
                  <select className={"form-select"}><option>All leagues</option></select>
                </div>
                <div className={"col"}>
                  <div className={"filter-label"}>Market</div>
                  <select className={"form-select"}><option>1X2</option></select>
                </div>
                <div className={"col"}>
                  <div className={"filter-label"}>Min. EV</div>
                  <select className={"form-select"}><option>3%</option></select>
                </div>
                <div className={"col"}>
                  <div className={"filter-label"}>Min. Confidence</div>
                  <select className={"form-select"}><option>70%</option></select>
                </div>
                <div className={"col"}>
                  <div className={"filter-label"}>Show only</div>
                  <select className={"form-select"}><option>Value bets</option></select>
                </div>
                <div className={"col-auto align-self-end"}>
                  <button className={"btn-custom-outline"}>
                    More filters <i className={"bi bi-sliders ms-1"}></i>
                  </button>
                </div>
              </div>
            </div>
            </div>
          
          
          <div className={"col-lg-8"}>
            
          

            
            <div className={"dashboard-card"}>
              <div className={"d-flex justify-content-between align-items-center mb-3"}>
                <div>
                  <span className={"fw-bold text-uppercase"} style={{fontSize: "12px", letterSpacing: "0.5px"}}>VALUE BET OPPORTUNITIES</span>
                  <i className={"bi bi-info-circle ms-1 text-muted"}></i>
                  <div className={"text-muted"} style={{fontSize: "11px"}}>6 opportunities</div>
                </div>
                <a href={"#"} className={"text-green text-decoration-none"} style={{fontSize: "12px"}}>Learn about EV <i className={"bi bi-box-arrow-up-right ms-1"}></i></a>
              </div>

              <div className={"table-responsive"}>
                <table className={"table custom-table"}>
                  <thead>
                    <tr>
                      <th>Event ID</th>
                      <th>Match</th>
                      <th>Market</th>
                      <th>Bookmaker Odds</th>
                      <th>Fair Odds (Model)</th>
                      <th>Expected Value (+EV)</th>
                      <th>Confidence</th>
                      <th>Freshness</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20458</td>
                    <td>
                      <div className={"fw-semibold"}>Arsenal vs Chelsea</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Premier League</div>
                    </td>
                    <td>1</td>
                    <td>2.16 <span className={"indicator-circle indicator-red"}><i className={"bi bi-dash"}></i></span></td>
                    <td>2.48</td>
                    <td>
                      <div className={"text-green fw-bold"}>+14.8%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(2.16 / 2.48 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>78%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>Just now</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>

                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20459</td>
                    <td>
                      <div className={"fw-semibold"}>Man City vs Aston Villa</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Premier League</div>
                    </td>
                    <td>1</td>
                    <td>1.78 <span className={"indicator-circle indicator-yellow"}><i className={"bi bi-dash"}></i></span></td>
                    <td>2.05</td>
                    <td>
                      <div className={"text-green fw-bold"}>+15.2%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(1.78 / 2.05 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>76%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>1 min ago</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>

                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20460</td>
                    <td>
                      <div className={"fw-semibold"}>Liverpool vs Tottenham</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Premier League</div>
                    </td>
                    <td>1</td>
                    <td>1.64 <span className={"indicator-circle indicator-green"}><i className={"bi bi-plus"}></i></span></td>
                    <td>1.95</td>
                    <td>
                      <div className={"text-green fw-bold"}>+18.9%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(1.64 / 1.95 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>82%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>2 min ago</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>

                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20461</td>
                    <td>
                      <div className={"fw-semibold"}>Newcastle vs Brighton</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Premier League</div>
                    </td>
                    <td>X</td>
                    <td>3.40 <span className={"indicator-circle indicator-red"}><i className={"bi bi-dash"}></i></span></td>
                    <td>3.95</td>
                    <td>
                      <div className={"text-green fw-bold"}>+16.2%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(3.40 / 3.95 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>73%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>Just now</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>

                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20462</td>
                    <td>
                      <div className={"fw-semibold"}>AC Milan vs Napoli</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Serie A</div>
                    </td>
                    <td>2</td>
                    <td>2.42 <span className={"indicator-circle indicator-yellow"}><i className={"bi bi-dash"}></i></span></td>
                    <td>2.80</td>
                    <td>
                      <div className={"text-green fw-bold"}>+15.7%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(2.42 / 2.80 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>75%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>3 min ago</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>

                  <tr>
                    <td className={"text-muted"}>EVT-FOOT-20463</td>
                    <td>
                      <div className={"fw-semibold"}>PSG vs Marseille</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>Ligue 1</div>
                    </td>
                    <td>1</td>
                    <td>1.60 <span className={"indicator-circle indicator-green"}><i className={"bi bi-plus"}></i></span></td>
                    <td>1.88</td>
                    <td>
                      <div className={"text-green fw-bold"}>+17.5%</div>
                      <div className={"text-muted"} style={{fontSize: "10px"}}>(1.60 / 1.88 - 1)</div>
                    </td>
                    <td>
                      <span className={"text-green fw-semibold"}>81%</span>
                      <span className={"confidence-meter"}>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                        <span className={"confidence-dot active"}></span>
                      </span>
                    </td>
                    <td className={"text-muted"}>1 min ago</td>
                    <td><span className={"badge-status-new"}>New</span></td>
                  </tr>
                </tbody>
                </table>
              </div>

              
              <div className={"scanning-box"}>
                <div className={"radar-icon"}><i className={"bi bi-radar"}></i></div>
                <div>
                  <div className={"fw-bold"}>No value bets right now</div>
                  <div className={"text-muted"} style={{fontSize: "11px"}}>We're scanning the markets. New opportunities will appear here.</div>
                </div>
              </div>
            </div>

            
            <div className={"dashboard-card"}>
              <div className={"d-flex justify-content-between align-items-center mb-3"}>
                <div>
                  <span className={"fw-bold text-uppercase"} style={{fontSize: "12px", letterSpacing: "0.5px"}}>VALUE BET HISTORY</span>
                  <i className={"bi bi-info-circle ms-1 text-muted"}></i>
                </div>
                <button className={"btn-custom-outline"}><i className={"bi bi-download"}></i> Export CSV</button>
              </div>

              <div className={"table-responsive"}>
                <table className={"table custom-table"}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Event ID</th>
                      <th>Match</th>
                      <th>Market</th>
                      <th>Bookmaker Odds</th>
                      <th>Fair Odds (Model)</th>
                      <th>EV</th>
                      <th>Stake</th>
                      <th>Result</th>
                      <th>PnL</th>
                      <th>ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={"text-muted"}>May 11, 2025<br />16:20</td>
                      <td className={"text-muted"}>EVT-FOOT-20455</td>
                      <td>
                        <div className={"fw-semibold"}>Arsenal vs Chelsea</div>
                        <div className={"text-muted"} style={{fontSize: "10px"}}>Premier League</div>
                      </td>
                      <td>1</td>
                      <td>2.16</td>
                      <td>2.48</td>
                      <td className={"text-green fw-bold"}>+14.8%</td>
                      <td>€8.20</td>
                      <td><span className={"badge-won"}>Won</span></td>
                      <td className={"text-green fw-bold"}>+€9.65</td>
                      <td className={"text-green fw-bold"}>+19.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          
          <div className={"col-lg-4"}>
            
            
            <div className={"dashboard-card"}>
              <div className={"fw-bold text-uppercase mb-3"} style={{fontSize: "11px", letterSpacing: "0.5px"}}>
                STAKE CALCULATOR <i className={"bi bi-info-circle ms-1 text-muted"}></i>
              </div>

              <div className={"mb-2 row align-items-center"}>
                <label className={"col-6 text-muted"} style={{fontSize: "12px"}}>Bankroll</label>
                <div className={"col-6"}><input type={"text"} className={"form-input-custom text-end fw-semibold"} defaultValue={"€1,000.00"} /></div>
              </div>

              <div className={"mb-2 row align-items-center"}>
                <label className={"col-6 text-muted"} style={{fontSize: "12px"}}>Risk per bet</label>
                <div className={"col-6"}><select className={"filter-select text-end fw-semibold"}><option>1.0 %</option></select></div>
              </div>

              <div className={"mb-3 row align-items-center"}>
                <label className={"col-6 text-muted"} style={{fontSize: "12px"}}>Max stake</label>
                <div className={"col-6"}><input type={"text"} className={"form-input-custom text-end fw-semibold"} defaultValue={"€10.00"} /></div>
              </div>

              <div className={"d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 mb-3"}>
                <span className={"text-muted"} style={{fontSize: "12px"}}>Recommended stake</span>
                <span className={"text-green fs-5 fw-bold"}>€8.20</span>
              </div>

              <button className={"btn-primary-action"}>Apply to selected bets</button>
            </div>

            
            <div className={"dashboard-card"}>
              <div className={"d-flex justify-content-between align-items-center mb-3"}>
                <div className={"fw-bold text-uppercase"} style={{fontSize: "11px", letterSpacing: "0.5px"}}>
                  VIRTUAL PORTFOLIO <i className={"bi bi-info-circle ms-1 text-muted"}></i>
                </div>
                <select className={"filter-select py-0 px-2"} style={{width: "auto", fontSize: "11px"}}><option>This month</option></select>
              </div>

              <div className={"row text-center mb-3"}>
                <div className={"col-4"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Total staked</div>
                  <div className={"fw-bold"} style={{fontSize: "13px"}}>€186.40</div>
                </div>
                <div className={"col-4 border-start border-end border-secondary border-opacity-25"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>ROI</div>
                  <div className={"text-green fw-bold"} style={{fontSize: "13px"}}>+12.4%</div>
                </div>
                <div className={"col-4"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>PnL</div>
                  <div className={"text-green fw-bold"} style={{fontSize: "13px"}}>+€23.12</div>
                </div>
              </div>

              <a href={"#"} className={"text-blue text-decoration-none"} style={{fontSize: "11px"}}>View portfolio <i className={"bi bi-arrow-right"}></i></a>
            </div>

            
            <div className={"dashboard-card"}>
              <div className={"d-flex justify-content-between align-items-center mb-3"}>
                <div className={"fw-bold text-uppercase"} style={{fontSize: "11px", letterSpacing: "0.5px"}}>
                  BET LIFECYCLE <i className={"bi bi-info-circle ms-1 text-muted"}></i>
                </div>
                <select className={"filter-select py-0 px-2"} style={{width: "auto", fontSize: "11px"}}><option>This month</option></select>
              </div>

              <div className={"row align-items-center"}>
                <div className={"col-6"} style={{fontSize: "12px"}}>
                  <div className={"d-flex align-items-center gap-2 mb-2"}>
                    <span style={{width: "8px", height: "8px", backgroundColor: "#ffb300", borderRadius: "50%"}}></span>
                    <span className={"text-muted"}>Pending</span>
                    <span className={"ms-auto fw-bold"}>7</span>
                  </div>
                  <div className={"d-flex align-items-center gap-2 mb-2"}>
                    <span style={{width: "8px", height: "8px", backgroundColor: "#00e676", borderRadius: "50%"}}></span>
                    <span className={"text-muted"}>Won</span>
                    <span className={"ms-auto fw-bold"}>7</span>
                  </div>
                  <div className={"d-flex align-items-center gap-2 mb-2"}>
                    <span style={{width: "8px", height: "8px", backgroundColor: "#ff5252", borderRadius: "50%"}}></span>
                    <span className={"text-muted"}>Lost</span>
                    <span className={"ms-auto fw-bold"}>5</span>
                  </div>
                  <div className={"d-flex align-items-center gap-2"}>
                    <span style={{width: "8px", height: "8px", backgroundColor: "#8493a8", borderRadius: "50%"}}></span>
                    <span className={"text-muted"}>Void</span>
                    <span className={"ms-auto fw-bold"}>1</span>
                  </div>
                </div>

                <div className={"col-6 d-flex justify-content-center"}>
                  <div style={{width: "100px", height: "100px", position: "relative"}}>
                    <canvas id={"lifecycleChart"}></canvas>
                    <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center"}}>
                      <div className={"fw-bold fs-5"} style={{lineHeight: 1}}>20</div>
                      <div className={"text-muted"} style={{fontSize: "9px"}}>Bets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className={"dashboard-card"}>
              <div className={"d-flex justify-content-between align-items-center mb-3"}>
                <div className={"fw-bold text-uppercase"} style={{fontSize: "11px", letterSpacing: "0.5px"}}>
                  PERFORMANCE & EDGE <i className={"bi bi-info-circle ms-1 text-muted"}></i>
                </div>
                <select className={"filter-select py-0 px-2"} style={{width: "auto", fontSize: "11px"}}><option>This month</option></select>
              </div>

              <div className={"row text-center mb-3"}>
                <div className={"col-4"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>ROI</div>
                  <div className={"text-green fw-bold fs-6"}>+12.4%</div>
                </div>
                <div className={"col-4 border-start border-end border-secondary border-opacity-25"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Max drawdown</div>
                  <div className={"text-red fw-bold fs-6"}>-6.3%</div>
                </div>
                <div className={"col-4"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Closing Line Value</div>
                  <div className={"text-green fw-bold fs-6"}>+8.7%</div>
                </div>
              </div>

              <a href={"#"} className={"text-blue text-decoration-none"} style={{fontSize: "11px"}}>View analytics <i className={"bi bi-arrow-right"}></i></a>
            </div>

          </div>

        </div>
      </div>

    </div>
    </main>






  
  






<Script src={"/assets/next/value-bets-boot.js"} strategy="afterInteractive" />
    </>
  );
}
