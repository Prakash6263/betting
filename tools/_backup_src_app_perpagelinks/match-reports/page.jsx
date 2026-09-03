import Script from 'next/script';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    <link href={"/assets/css/bootstrap.min.css"} rel={"stylesheet"} />
    
    <link href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"} rel={"stylesheet"} />
    <link href={"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"} rel={"stylesheet"} />
    
    <link href={"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"} rel={"stylesheet"} />
    
    
    <link href={"/assets/css/styles.css?v=2"} rel={"stylesheet"} /> 




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
        <div className={"shared-header-title"}>MATCH REPORTS</div>

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute "} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>
        <div className={"shared-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Until 12/31/2025</small></span></div>

        
        <div className={"dropdown"}>
            <button className={"theme-toggle-btn gap-2"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"}>
                <i className={"fa-solid fa-globe text-success"}></i>
                <span className={"fw-semibold"} id={"selectedLangText"} style={{fontSize: "12px"}}>FR</span>
                <i className={"fa-solid fa-chevron-down "} style={{fontSize: "10px"}}></i>
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
            <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"} style={{fontSize: "10px"}}>
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
                <li><a className={"dropdown-item  small"} href={"#"}><i className={"fa-solid fa-user me-2 text-success"}></i> Profile</a></li>
                <li><a className={"dropdown-item  small"} href={"#"}><i className={"fa-solid fa-sliders me-2 text-success"}></i> Settings</a></li>
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
        <Link href={"/match-reports"} className={"nav-link active"}>
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
  
    <div className={"dash-card py-2 px-3 mb-2"} style={{height: "auto"}}>
      <div className={"d-flex align-items-center justify-content-between mb-1"}>
        <div className={"top-subtext"}>Search, analyze and manage your generated match reports</div>
        <a href={"#"} className={"text-primary text-decoration-none"} style={{fontSize: "10px"}}>Clear filters</a>
      </div>

      <div className={"d-flex align-items-center gap-2 flex-wrap"}>
        <div className={"d-flex align-items-center custom-input"} style={{width: "180px"}}>
          <input type={"text"} className={"bg-transparent border-0 text-white p-0 w-100"} style={{fontSize: "10px", outline: "none"}} placeholder={"Search reports..."} />
          <i className={"bi bi-search text-muted ms-1"} style={{fontSize: "10px"}}></i>
        </div>

        <select className={"custom-select"} style={{minWidth: "110px"}}><option>Football</option></select>
        <select className={"custom-select"} style={{minWidth: "130px"}}><option>Premier League</option></select>
        <select className={"custom-select"} style={{minWidth: "120px"}}><option>All teams</option></select>

        <div className={"d-flex align-items-center justify-content-between custom-input"} style={{minWidth: "170px"}}>
          <span>04/20/2025 - 05/20/2025</span>
          <i className={"bi bi-calendar text-muted"} style={{fontSize: "10px"}}></i>
        </div>

        <select className={"custom-select"} style={{minWidth: "100px"}}><option>All types</option></select>
        <select className={"custom-select"} style={{minWidth: "110px"}}><option>All statuses</option></select>

        <button className={"top-btn-outline ms-auto"}>
          <i className={"bi bi-arrow-clockwise"}></i> Reset filters
        </button>
      </div>
    </div>

    
    <div className={"row g-2"}>

      
      <div className={"col-lg-3"}>
        <div className={"dash-card d-flex flex-column justify-content-between"} style={{minHeight: "520px"}}>
          <div>
            <div className={"d-flex flex-wrap gap-2 align-items-center justify-content-between mb-2"}>
              <span className={"fw-semibold text-white"} style={{fontSize: "10.5px"}}>REPORTS (28)</span>
              <div className={"d-flex align-items-center gap-1"}>
                <select className={"custom-select py-0"} style={{fontSize: "10px", height: "20px"}}>
                  <option>Newest first</option>
                </select>
                <i className={"bi bi-arrow-clockwise text-muted ms-1"} style={{cursor: "pointer"}}></i>
              </div>
            </div>

            
            <div className={"report-item active d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} defaultChecked />
              <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Arsenal vs Chelsea</span>
                  <span className={"fw-bold text-white"}>1 - 1</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/18/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-published"}>Published</span>
                    <span className={"text-muted"}>v2.1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/50.png"} alt={"Man City"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Man City vs Newcastle</span>
                  <span className={"fw-bold text-white"}>2 - 0</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/17/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-published"}>Published</span>
                    <span className={"text-muted"}>v1.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/40.png"} alt={"Liverpool"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Liverpool vs Brighton</span>
                  <span className={"fw-bold text-white"}>2 - 1</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/17/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-published"}>Published</span>
                    <span className={"text-muted"}>v1.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/66.png"} alt={"Aston Villa"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Aston Villa vs Tottenham</span>
                  <span className={"fw-bold text-white"}>0 - 2</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/16/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-draft"}>Draft</span>
                    <span className={"text-muted"}>v0.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/33.png"} alt={"Man United"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Man United vs West Ham</span>
                  <span className={"fw-bold text-white"}>0 - 1</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/16/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-corrected"}>Corrected</span>
                    <span className={"text-muted"}>v1.2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/45.png"} alt={"Everton"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Everton vs Bournemouth</span>
                  <span className={"fw-bold text-white"}>1 - 1</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/15/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-published"}>Published</span>
                    <span className={"text-muted"}>v1.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={"report-item d-flex align-items-center gap-2"}>
              <input type={"checkbox"} className={"custom-check"} />
              <img src={"https://media.api-sports.io/football/teams/39.png"} alt={"Wolves"} className={"team-logo-sm"} />
              <div className={"flex-grow-1"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <span className={"fw-semibold text-white"}>Wolves vs Crystal Palace</span>
                  <span className={"fw-bold text-white"}>0 - 0</span>
                </div>
                <div className={"d-flex align-items-center justify-content-between text-muted mt-1"} style={{fontSize: "8.5px"}}>
                  <span>Premier League • 05/15/2025</span>
                  <div className={"d-flex align-items-center gap-1"}>
                    <span className={"badge-status badge-failed"}>Failed</span>
                    <i className={"bi bi-exclamation-circle text-danger"} style={{fontSize: "10px"}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className={"d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-10 text-muted"} style={{fontSize: "8.5px"}}>
            <span>Showing 1 to 7 of 28 reports</span>
            <div className={"d-flex align-items-center gap-1"}>
              <i className={"bi bi-chevron-left"}></i>
              <div className={"page-box active"}>1</div>
              <div className={"page-box"}>2</div>
              <div className={"page-box"}>3</div>
              <div className={"page-box"}>4</div>
              <i className={"bi bi-chevron-right"}></i>
            </div>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-6"}>
        <div className={"dash-card"}>
          
          
          <div className={"d-flex align-items-center justify-content-between mb-3"}>
            <div className={"d-flex align-items-center gap-3"}>
              <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal Logo"} className={"team-logo-lg"} />
              <div>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"fw-bold fs-6 text-white"}>Arsenal vs Chelsea</span>
                  <span className={"fw-bold fs-5 text-white ms-1"}>1 - 1</span>
                </div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Premier League • 05/18/2025 • Emirates Stadium, London</div>
              </div>
              <img src={"https://media.api-sports.io/football/teams/49.png"} alt={"Chelsea Logo"} className={"team-logo-lg"} />
            </div>

            <div className={"d-flex align-items-center gap-2"}>
              <span className={"badge-status badge-published py-1 px-2"}>Published</span>
              <select className={"custom-select py-0"} style={{height: "22px", fontSize: "10px"}}><option>v2.1</option></select>
            </div>
          </div>

          
          <ul className={"nav custom-nav-tabs mb-3"} id={"matchReportTabs"} role={"tablist"}>
            <li className={"nav-item"} role={"presentation"}>
              <button className={"nav-link active"} id={"summary-tab"} data-bs-toggle={"tab"} data-bs-target={"#summary-tab-pane"} type={"button"} role={"tab"}>Executive Summary</button>
            </li>
            <li className={"nav-item"} role={"presentation"}>
              <button className={"nav-link"} id={"timeline-tab"} data-bs-toggle={"tab"} data-bs-target={"#timeline-tab-pane"} type={"button"} role={"tab"}>Timeline</button>
            </li>
            <li className={"nav-item"} role={"presentation"}>
              <button className={"nav-link"} id={"stats-tab"} data-bs-toggle={"tab"} data-bs-target={"#stats-tab-pane"} type={"button"} role={"tab"}>Key Statistics</button>
            </li>
            <li className={"nav-item"} role={"presentation"}>
              <button className={"nav-link"} id={"sources-tab"} data-bs-toggle={"tab"} data-bs-target={"#sources-tab-pane"} type={"button"} role={"tab"}>Data Sources</button>
            </li>
          </ul>

          
          <div className={"tab-content"} id={"matchReportTabsContent"}>
            
            
            <div className={"tab-pane fade show active"} id={"summary-tab-pane"} role={"tabpanel"} tabindex={"0"}>
              <div className={"row g-2"}>
                <div className={"col-md-7"}>
                  <div className={"fw-semibold text-white mb-2"} style={{fontSize: "11px"}}>Executive Summary</div>
                  <p className={"text-muted"} style={{fontSize: "10px", lineHeight: 1.5}}>
                    Arsenal and Chelsea played to a 1-1 draw in a closely contested match. Arsenal dominated possession (58%) and created more chances, while Chelsea were more efficient on the counter. The result keeps both teams in the top 6 race.
                  </p>
                  <ul className={"text-muted ps-3 mb-0"} style={{fontSize: "10px", lineHeight: 1.6}}>
                    <li>Arsenal opened the scoring in the 22nd minute through Bukayo Saka.</li>
                    <li>Chelsea equalized in the 45+2' via Cole Palmer.</li>
                    <li>Possession advantage for Arsenal (58%) but similar xG (1.48 vs 1.31).</li>
                  </ul>
                </div>

                <div className={"col-md-5"}>
                    <div style={{border: "1px solid #173148", padding: "10px"}}>
                  <div className={"d-flex align-items-center justify-content-between mb-2"}>
                    <span className={"fw-semibold text-white"} style={{fontSize: "10px"}}>Key Statistics</span>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"team-logo-xs"} />
                      <img src={"https://media.api-sports.io/football/teams/49.png"} alt={"Chelsea"} className={"team-logo-xs"} />
                    </div>
                  </div>

                  <table className={"stats-table text-muted"}>
                    <tbody>
                      <tr>
                        <td>Possession</td>
                        <td className={"text-end text-danger fw-semibold"}>58%</td>
                        <td className={"text-end text-primary fw-semibold"}>42%</td>
                      </tr>
                      <tr>
                        <td>Expected Goals (xG)</td>
                        <td className={"text-end text-danger fw-semibold"}>1.48</td>
                        <td className={"text-end text-primary fw-semibold"}>1.31</td>
                      </tr>
                      <tr>
                        <td>Total Shots</td>
                        <td className={"text-end text-danger fw-semibold"}>15</td>
                        <td className={"text-end text-primary fw-semibold"}>9</td>
                      </tr>
                      <tr>
                        <td>Shots on Target</td>
                        <td className={"text-end text-danger fw-semibold"}>5</td>
                        <td className={"text-end text-primary fw-semibold"}>4</td>
                      </tr>
                      <tr>
                        <td>Big Chances</td>
                        <td className={"text-end text-danger fw-semibold"}>3</td>
                        <td className={"text-end text-primary fw-semibold"}>2</td>
                      </tr>
                      <tr>
                        <td>Passes Completed</td>
                        <td className={"text-end text-danger fw-semibold"}>474</td>
                        <td className={"text-end text-primary fw-semibold"}>312</td>
                      </tr>
                      <tr>
                        <td>Tackles Won</td>
                        <td className={"text-end text-danger fw-semibold"}>18</td>
                        <td className={"text-end text-primary fw-semibold"}>16</td>
                      </tr>
                      <tr>
                        <td>Fouls Committed</td>
                        <td className={"text-end text-danger fw-semibold"}>11</td>
                        <td className={"text-end text-primary fw-semibold"}>13</td>
                      </tr>
                      <tr>
                        <td>Corners</td>
                        <td className={"text-end text-danger fw-semibold"}>6</td>
                        <td className={"text-end text-primary fw-semibold"}>3</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
                </div>
              </div>

              
              <div className={"mt-3"}>
                <div className={"d-flex align-items-center justify-content-between mb-2"}>
                  <span className={"fw-semibold text-white"} style={{fontSize: "11px"}}>Timeline</span>
                  <i className={"bi bi-arrows-angle-expand text-muted"} style={{fontSize: "10px", cursor: "pointer"}}></i>
                </div>

                <div className={"mrd-timeline-wrapper"}>
                  
                  <div className={"mrd-timeline-grid"}>
                    
                    <div className={"mrd-timeline-card"}>
                      <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"mrd-timeline-logo"} />
                      <div className={"mrd-timeline-card-info"}>
                        <div className={"mrd-timeline-time"}>22'</div>
                        <div className={"mrd-timeline-type"}>Goal</div>
                        <div className={"mrd-timeline-player"}>B. Saka</div>
                      </div>
                    </div>

                    
                    <div className={"mrd-timeline-card"}>
                      <img src={"https://media.api-sports.io/football/teams/49.png"} alt={"Chelsea"} className={"mrd-timeline-logo"} />
                      <div className={"mrd-timeline-card-info"}>
                        <div className={"mrd-timeline-time"}>45+2'</div>
                        <div className={"mrd-timeline-type"}>Goal</div>
                        <div className={"mrd-timeline-player"}>C. Palmer</div>
                      </div>
                    </div>

                    
                    <div className={"mrd-timeline-card"}>
                      <div className={"mrd-timeline-icon-box mrd-timeline-icon-yellow"}></div>
                      <div className={"mrd-timeline-card-info"}>
                        <div className={"mrd-timeline-time"}>63'</div>
                        <div className={"mrd-timeline-type"}>Yellow Card</div>
                        <div className={"mrd-timeline-player"}>M. Ødegaard</div>
                      </div>
                    </div>

                    
                    <div className={"mrd-timeline-card"}>
                      <div className={"mrd-timeline-sub-arrows"}>
                        <i className={"bi bi-arrow-left text-success"}></i>
                        <i className={"bi bi-arrow-right text-danger"}></i>
                      </div>
                      <div className={"mrd-timeline-card-info"}>
                        <div className={"mrd-timeline-time"}>78'</div>
                        <div className={"mrd-timeline-type"}>Substitution</div>
                        <div className={"mrd-timeline-player"}>R. Sterling</div>
                      </div>
                    </div>

                    
                    <div className={"mrd-timeline-card"}>
                      <div className={"mrd-timeline-icon-box mrd-timeline-icon-yellow"}></div>
                      <div className={"mrd-timeline-card-info"}>
                        <div className={"mrd-timeline-time"}>90+4'</div>
                        <div className={"mrd-timeline-type"}>Yellow Card</div>
                        <div className={"mrd-timeline-player"}>M. Caicedo</div>
                      </div>
                    </div>
                  </div>

                  
                  <div className={"mrd-timeline-axis-line"}>
                    <div className={"mrd-timeline-node"} style={{left: "6%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                    <div className={"mrd-timeline-node"} style={{left: "24%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-green"}></div></div>
                    <div className={"mrd-timeline-node"} style={{left: "40%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                    <div className={"mrd-timeline-node"} style={{left: "42%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                    <div className={"mrd-timeline-node"} style={{left: "59%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-green"}></div></div>
                    <div className={"mrd-timeline-node"} style={{left: "67%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                    <div className={"mrd-timeline-node"} style={{left: "81%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-yellow"}></div></div>
                  </div>

                  
                  <div className={"mrd-timeline-labels-row"}>
                    <span>0'</span>
                    <span>15'</span>
                    <span>30'</span>
                    <span>HT</span>
                    <span>60'</span>
                    <span>75'</span>
                    <span>FT</span>
                  </div>
                </div>
              </div>

              
              <div className={"mt-3"}>
                <div className={"d-flex align-items-center justify-content-between mb-2"}>
                  <span className={"fw-semibold text-white"} style={{fontSize: "11px"}}>Data Sources</span>
                  <a href={"#"} className={"text-primary text-decoration-none"} style={{fontSize: "9.5px"}}>View all sources (8)</a>
                </div>

                <div className={"row g-2"}>
                  <div className={"col-6 col-md-3"}>
                    <div className={"source-card"}>
                      <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Opta Feed</div>
                      <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Match data & events</div>
                      <span className={"badge-status badge-published py-0 px-1"} style={{fontSize: "7.5px"}}>Trusted</span>
                    </div>
                  </div>
                  <div className={"col-6 col-md-3"}>
                    <div className={"source-card"}>
                      <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Opta Lineups</div>
                      <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Starting XI & subs</div>
                      <span className={"badge-status badge-published py-0 px-1"} style={{fontSize: "7.5px"}}>Trusted</span>
                    </div>
                  </div>
                  <div className={"col-6 col-md-3"}>
                    <div className={"source-card"}>
                      <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Myodin DB</div>
                      <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Historical statistics</div>
                      <span className={"badge-status badge-published py-0 px-1"} style={{fontSize: "7.5px"}}>Trusted</span>
                    </div>
                  </div>
                  <div className={"col-6 col-md-3"}>
                    <div className={"source-card"}>
                      <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Market Feed</div>
                      <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Odds & market data</div>
                      <span className={"badge-status badge-corrected py-0 px-1"} style={{fontSize: "7.5px"}}>Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className={"tab-pane fade"} id={"timeline-tab-pane"} role={"tabpanel"} tabindex={"0"}>
              <div className={"d-flex align-items-center justify-content-between mb-2"}>
                <span className={"fw-semibold text-white"} style={{fontSize: "11px"}}>Timeline Detailed View</span>
              </div>
              <div className={"mrd-timeline-wrapper"}>
                <div className={"mrd-timeline-grid"}>
                  <div className={"mrd-timeline-card"}>
                    <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"mrd-timeline-logo"} />
                    <div className={"mrd-timeline-card-info"}>
                      <div className={"mrd-timeline-time"}>22'</div>
                      <div className={"mrd-timeline-type"}>Goal</div>
                      <div className={"mrd-timeline-player"}>B. Saka</div>
                    </div>
                  </div>
                  <div className={"mrd-timeline-card"}>
                    <img src={"https://media.api-sports.io/football/teams/49.png"} alt={"Chelsea"} className={"mrd-timeline-logo"} />
                    <div className={"mrd-timeline-card-info"}>
                      <div className={"mrd-timeline-time"}>45+2'</div>
                      <div className={"mrd-timeline-type"}>Goal</div>
                      <div className={"mrd-timeline-player"}>C. Palmer</div>
                    </div>
                  </div>
                  <div className={"mrd-timeline-card"}>
                    <div className={"mrd-timeline-icon-box mrd-timeline-icon-yellow"}></div>
                    <div className={"mrd-timeline-card-info"}>
                      <div className={"mrd-timeline-time"}>63'</div>
                      <div className={"mrd-timeline-type"}>Yellow Card</div>
                      <div className={"mrd-timeline-player"}>M. Ødegaard</div>
                    </div>
                  </div>
                  <div className={"mrd-timeline-card"}>
                    <div className={"mrd-timeline-sub-arrows"}>
                      <i className={"bi bi-arrow-left text-success"}></i>
                      <i className={"bi bi-arrow-right text-danger"}></i>
                    </div>
                    <div className={"mrd-timeline-card-info"}>
                      <div className={"mrd-timeline-time"}>78'</div>
                      <div className={"mrd-timeline-type"}>Substitution</div>
                      <div className={"mrd-timeline-player"}>R. Sterling</div>
                    </div>
                  </div>
                  <div className={"mrd-timeline-card"}>
                    <div className={"mrd-timeline-icon-box mrd-timeline-icon-yellow"}></div>
                    <div className={"mrd-timeline-card-info"}>
                      <div className={"mrd-timeline-time"}>90+4'</div>
                      <div className={"mrd-timeline-type"}>Yellow Card</div>
                      <div className={"mrd-timeline-player"}>M. Caicedo</div>
                    </div>
                  </div>
                </div>

                <div className={"mrd-timeline-axis-line"}>
                  <div className={"mrd-timeline-node"} style={{left: "6%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                  <div className={"mrd-timeline-node"} style={{left: "24%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-green"}></div></div>
                  <div className={"mrd-timeline-node"} style={{left: "40%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                  <div className={"mrd-timeline-node"} style={{left: "42%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                  <div className={"mrd-timeline-node"} style={{left: "59%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-green"}></div></div>
                  <div className={"mrd-timeline-node"} style={{left: "67%"}}><i className={"bi bi-dribbble mrd-timeline-ball-icon"}></i></div>
                  <div className={"mrd-timeline-node"} style={{left: "81%"}}><div className={"mrd-timeline-sq-node mrd-timeline-sq-yellow"}></div></div>
                </div>

                <div className={"mrd-timeline-labels-row"}>
                  <span>0'</span>
                  <span>15'</span>
                  <span>30'</span>
                  <span>HT</span>
                  <span>60'</span>
                  <span>75'</span>
                  <span>FT</span>
                </div>
              </div>
            </div>

            
            <div className={"tab-pane fade"} id={"stats-tab-pane"} role={"tabpanel"} tabindex={"0"}>
              <div className={"d-flex align-items-center justify-content-between mb-2"}>
                <span className={"fw-semibold text-white"} style={{fontSize: "11px"}}>Detailed Match Statistics</span>
              </div>

              <table className={"stats-table text-muted"}>
                <tbody>
                  <tr>
                    <td>Possession</td>
                    <td className={"text-end text-danger fw-semibold"}>58%</td>
                    <td className={"text-end text-primary fw-semibold"}>42%</td>
                  </tr>
                  <tr>
                    <td>Expected Goals (xG)</td>
                    <td className={"text-end text-danger fw-semibold"}>1.48</td>
                    <td className={"text-end text-primary fw-semibold"}>1.31</td>
                  </tr>
                  <tr>
                    <td>Total Shots</td>
                    <td className={"text-end text-danger fw-semibold"}>15</td>
                    <td className={"text-end text-primary fw-semibold"}>9</td>
                  </tr>
                  <tr>
                    <td>Shots on Target</td>
                    <td className={"text-end text-danger fw-semibold"}>5</td>
                    <td className={"text-end text-primary fw-semibold"}>4</td>
                  </tr>
                  <tr>
                    <td>Big Chances</td>
                    <td className={"text-end text-danger fw-semibold"}>3</td>
                    <td className={"text-end text-primary fw-semibold"}>2</td>
                  </tr>
                  <tr>
                    <td>Passes Completed</td>
                    <td className={"text-end text-danger fw-semibold"}>474</td>
                    <td className={"text-end text-primary fw-semibold"}>312</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
            <div className={"tab-pane fade"} id={"sources-tab-pane"} role={"tabpanel"} tabindex={"0"}>
              <div className={"d-flex align-items-center justify-content-between mb-2"}>
                <span className={"fw-semibold text-white"} style={{fontSize: "10.5px"}}>Integrated Data Sources</span>
              </div>

              <div className={"row g-2"}>
                <div className={"col-6 col-md-3"}>
                  <div className={"source-card"}>
                    <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Opta Feed</div>
                    <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Match data & events</div>
                    <span className={"badge-status badge-published py-0 px-1"} style={{fontSize: "7.5px"}}>Trusted</span>
                  </div>
                </div>
                <div className={"col-6 col-md-3"}>
                  <div className={"source-card"}>
                    <div className={"fw-semibold text-white"} style={{fontSize: "9.5px"}}>Opta Lineups</div>
                    <div className={"text-muted mb-2"} style={{fontSize: "8px"}}>Starting XI & subs</div>
                    <span className={"badge-status badge-published py-0 px-1"} style={{fontSize: "7.5px"}}>Trusted</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      
      <div className={"col-lg-3"}>
        <div className={"d-flex flex-column gap-2"}>
          
          
          <div className={"dash-card"}>
            <div className={"d-flex flex-column gap-1 mb-2 text-muted"} style={{fontSize: "10px"}}>
              <div className={"d-flex align-items-center justify-content-between"}>
                <span>Report ID: REP-PL-20250518-ARS-CHE-V2.1</span>
                <i className={"bi bi-copy text-muted"} style={{cursor: "pointer"}}></i>
              </div>
              <div className={"d-flex align-items-center justify-content-between"}>
                <span>Event ID: EVT-PL-20250518-ARS-CHE</span>
                <i className={"bi bi-copy text-muted"} style={{cursor: "pointer"}}></i>
              </div>
            </div>

            <div className={"d-flex align-items-center justify-content-between gap-1 pt-1 border-top border-secondary border-opacity-10"}>
              <button className={"top-btn-outline py-1 px-2"} style={{fontSize: "10px"}}><i className={"bi bi-share"}></i> Share Link</button>
              <button className={"top-btn-outline py-1 px-2"} style={{fontSize: "10px"}}><i className={"bi bi-file-earmark-pdf"}></i> Export PDF</button>
              <button className={"top-btn-outline py-1 px-2"} style={{fontSize: "10px"}}><i className={"bi bi-file-earmark-excel"}></i> Export CSV</button>
            </div>
          </div>

          
          <div className={"dash-card"}>
            <div className={"fw-semibold text-white mb-2"} style={{fontSize: "10.5px"}}>Version History</div>
            
            <div className={"d-flex flex-column gap-2 mb-2"}>
              <div className={"d-flex align-items-center justify-content-between"} style={{fontSize: "10px"}}>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-success fw-bold"}>v2.1</span>
                  <span className={"badge-status badge-published py-0"}>Corrected</span>
                </div>
                <span className={"text-muted"}>05/19/2025 14:32</span>
                <span className={"text-muted"}>John Doe</span>
              </div>

              <div className={"d-flex align-items-center justify-content-between"} style={{fontSize: "10px"}}>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted fw-bold"}>v2.0</span>
                  <span className={"badge-status badge-published py-0"}>Published</span>
                </div>
                <span className={"text-muted"}>05/18/2025 18:05</span>
                <span className={"text-muted"}>John Doe</span>
              </div>

              <div className={"d-flex align-items-center justify-content-between"} style={{fontSize: "10px"}}>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted fw-bold"}>v1.0</span>
                  <span className={"badge-status badge-published py-0"}>Published</span>
                </div>
                <span className={"text-muted"}>05/18/2025 12:10</span>
                <span className={"text-muted"}>System</span>
              </div>
            </div>

            <a href={"#"} className={"text-primary text-decoration-none"} style={{fontSize: "10px"}}>View all versions</a>
          </div>

          
          <div className={"dash-card"}>
            <div className={"fw-semibold text-white mb-2"} style={{fontSize: "10.5px"}}>Correction Log</div>

            <div className={"d-flex flex-column gap-2 mb-2"}>
              <div>
                <div className={"d-flex align-items-center justify-content-between"} style={{fontSize: "10px"}}>
                  <span className={"text-white d-flex align-items-center gap-1"}><span style={{width: "5px", height: "5px", background: "#22c55e", borderRadius: "50%"}}></span> 05/19/2025 14:32</span>
                  <span className={"text-muted"}>John Doe</span>
                </div>
                <div className={"text-muted ps-2 mt-1"} style={{fontSize: "8.5px"}}>
                  Corrected shot on target count for Chelsea (4 → 4). Updated possession to 58%-42%.
                </div>
              </div>

              <div>
                <div className={"d-flex align-items-center justify-content-between"} style={{fontSize: "10px"}}>
                  <span className={"text-white d-flex align-items-center gap-1"}><span style={{width: "5px", height: "5px", background: "#3b82f6", borderRadius: "50%"}}></span> 05/18/2025 18:05</span>
                  <span className={"text-muted"}>John Doe</span>
                </div>
                <div className={"text-muted ps-2 mt-1"} style={{fontSize: "8.5px"}}>
                  Initial publication.
                </div>
              </div>
            </div>

            <a href={"#"} className={"text-primary text-decoration-none"} style={{fontSize: "10px"}}>View full correction log</a>
          </div>

          
          <div className={"card-error-failed"}>
            <div className={"d-flex align-items-center justify-content-between mb-1"}>
              <strong className={"text-danger"} style={{fontSize: "10.5px"}}>Generation Failed</strong>
              <span className={"text-muted"} style={{fontSize: "8.5px"}}>05/15/2025 11:42</span>
            </div>

            <p className={"text-muted mb-2"} style={{fontSize: "8.5px", lineHeight: 1.4}}>
              The report could not be generated due to insufficient data from one or more sources.
            </p>

            <div className={"text-danger mb-2"} style={{fontSize: "8.5px"}}>
              Reason: Missing lineup data from Opta Feed.
            </div>

            <button className={"btn btn-sm border-secondary text-white py-1 px-2 d-flex align-items-center gap-1"} style={{fontSize: "10px", backgroundColor: "var(--card-inner)"}}>
              <i className={"bi bi-arrow-clockwise"}></i> Retry Generation
            </button>
          </div>

        </div>
      </div>

    </div> 


</main>












<Script src={"/assets/next/match-reports-boot.js"} strategy="afterInteractive" />
    </>
  );
}
