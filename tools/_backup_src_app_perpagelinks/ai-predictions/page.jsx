import Script from 'next/script';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    <link href={"/assets/css/bootstrap.min.css"} rel={"stylesheet"} />
    
    <link href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"} rel={"stylesheet"} />
    <link href={"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"} rel={"stylesheet"} />
    
    <link href={"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"} rel={"stylesheet"} />
    
    
    <link href={"/assets/css/styles.css?v=3"} rel={"stylesheet"} /> 




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
        <div className={"shared-header-title"}>AI PREDICTIONS</div>

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute text-secondary"} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>
        <div className={"shared-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Valid until 12/31/2025</small></span></div>

        
        <div className={"dropdown"}>
            <button className={"theme-toggle-btn gap-2"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"}>
                <i className={"fa-solid fa-globe text-success"}></i>
                <span className={"fw-semibold"} id={"selectedLangText"} style={{fontSize: "12px"}}>FR</span>
                <i className={"fa-solid fa-chevron-down text-secondary"} style={{fontSize: "9px"}}></i>
            </button>
            <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary shadow-lg"}>
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
            <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary"}>
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
        <Link href={"/ai-predictions"} className={"nav-link active"}>
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
    
      <div className={"d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3"}>
        <div className={"d-flex flex-wrap gap-2 align-items-center"}>
          
          <select className={"filter-select"}>
            <option value={"all"}>🏆 All competitions</option>
            <option value={"epl"}>Premier League</option>
            <option value={"laliga"}>La Liga</option>
            <option value={"seriea"}>Serie A</option>
            <option value={"bundesliga"}>Bundesliga</option>
            <option value={"ligue1"}>Ligue 1</option>
          </select>

          <select className={"filter-select"}>
            <option value={"all"}>🎯 All markets</option>
            <option value={"1x2"}>1X2 (Full Time)</option>
            <option value={"over_under"}>Over/Under 2.5</option>
            <option value={"btts"}>Both Teams To Score</option>
          </select>

          <select className={"filter-select"}>
            <option value={"all"}>🛡️ All confidence</option>
            <option value={"high"}>High (≥ 70%)</option>
            <option value={"medium"}>Medium (40-69%)</option>
            <option value={"low"}>Low (&lt; 40%)</option>
          </select>

          <select className={"filter-select"}>
            <option value={"7d"}>📅 Next 7 days</option>
            <option value={"today"}>Today</option>
            <option value={"tomorrow"}>Tomorrow</option>
            <option value={"30d"}>Next 30 days</option>
          </select>

          <button className={"btn btn-sm btn-outline-success"}><i className={"bi bi-funnel me-1"}></i> More filters</button>
        </div>

        <div className={"d-flex align-items-center gap-3"}>
          <div className={"d-flex align-items-center gap-2"}>
            <span className={"text-muted-custom"} style={{fontSize: "12px"}}>Sort by</span>
            <select className={"filter-select"}>
              <option value={"highest_edge"}>Highest edge</option>
              <option value={"highest_prob"}>Highest probability</option>
              <option value={"confidence"}>Model confidence</option>
            </select>
          </div>
          <button className={"btn btn-sm btn-outline-success"}><i className={"bi bi-arrow-clockwise me-1"}></i> Refresh predictions</button>
        </div>
      </div>

      
      <div className={"row g-3 mb-3"}>
        <div className={"col-lg-8"}>
          <div className={"dashboard-card py-3"}>
            <div className={"row g-2"}>
              <div className={"col-md"}>
                <div className={"metric-label"}>Total predictions</div>
                <div className={"metric-value"}>128</div>
                <div className={"text-green"} style={{}}><i className={"bi bi-arrow-up-short"}></i>+12 vs yesterday</div>
              </div>
              <div className={"col-md border-start border-secondary border-opacity-25 ps-md-3"}>
                <div className={"metric-label"}>Avg. model confidence</div>
                <div className={"metric-value"}>71%</div>
                <div className={"text-green"} style={{}}>High</div>
              </div>
              <div className={"col-md border-start border-secondary border-opacity-25 ps-md-3"}>
                <div className={"metric-label"}>Avg. probability</div>
                <div className={"metric-value"}>63%</div>
                <div className={"text-muted-custom"} style={{}}>–</div>
              </div>
              <div className={"col-md border-start border-secondary border-opacity-25 ps-md-3"}>
                <div className={"metric-label"}>Avg. edge</div>
                <div className={"metric-value text-green"}>+8.7%</div>
              </div>
              <div className={"col-md border-start border-secondary border-opacity-25 ps-md-3"}>
                <div className={"metric-label"}>Profitable predictions</div>
                <div className={"metric-value"}>58%</div>
                <div className={"text-green"} style={{}}>+6 pp</div>
              </div>
            </div>
          </div>
        </div>

        <div className={"col-lg-4"}>
          <div className={"dashboard-card py-3 d-flex justify-content-between"}>
            <div>
              <div className={"metric-label"}>Model version</div>
              <div className={"fw-bold"}>MS-Football v2.7.3</div>
              <div className={"text-green"} style={{}}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "8px"}}></i>Live</div>
            </div>
            <div className={"text-end"}>
              <div className={"metric-label"}>Executed on</div>
              <div className={"fw-bold"}>May 11, 2025 • 4:20:31 PM</div>
              <div className={"text-muted-custom"} style={{}}>Updated 2 min ago</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className={"row g-3 mb-3"}>
        
        <div className={"col-lg-8"}>
          <div className={"dashboard-card"}>
            <div className={"fw-bold text-uppercase mb-3"} style={{letterSpacing: "0.5px", fontSize: "12px"}}>PREDICTION LIST</div>
            <div className={"table-scroll"}>
              <table className={"table custom-table"}>
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Market</th>
                    <th>Prediction</th>
                    <th>Confidence</th>
                    <th>Probability</th>
                    <th>Fair Odds</th>
                    <th>Edge</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                      <div className={"d-flex align-items-center gap-2"}>
                        <span className={"league-icon"}><i className={"bi bi-shield-fill"}></i></span>
                        <div>
                          <div className={"fw-bold"}>Man City vs Arsenal</div>
                          <div className={"text-muted-custom"} style={{}}>May 12 • 8:00 PM</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={"fw-bold"}>1X2</span><br /><span className={"text-muted-custom"} style={{fontSize: "10px"}}>Full Time</span></td>
                    <td><span className={"badge-blue"}>Man City</span></td>
                    <td><span className={"badge-confidence-high"}>High 78%</span></td>
                    <td className={"fw-bold"}>68%</td>
                    <td>1.85</td>
                    <td className={"badge-green"}>+12.4%</td>
                    <td className={"text-muted-custom"}><i className={"bi bi-chevron-right"}></i></td>
                  </tr>

                  
                  <tr>
                    <td>
                      <div className={"d-flex align-items-center gap-2"}>
                        <span className={"league-icon"} style={{color: "#ffb300"}}><i className={"bi bi-trophy-fill"}></i></span>
                        <div>
                          <div className={"fw-bold"}>Real Madrid vs Barcelona</div>
                          <div className={"text-muted-custom"} style={{}}>May 11 • 9:00 PM</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={"fw-bold"}>Over 2.5</span><br /><span className={"text-muted-custom"} style={{fontSize: "10px"}}>Total Goals</span></td>
                    <td><span className={"badge-green"}>Over 2.5</span></td>
                    <td><span className={"badge-confidence-med"}>Medium 56%</span></td>
                    <td className={"fw-bold"}>59%</td>
                    <td>1.75</td>
                    <td className={"badge-green"}>+6.3%</td>
                    <td className={"text-muted-custom"}><i className={"bi bi-chevron-right"}></i></td>
                  </tr>

                  
                  <tr>
                    <td>
                      <div className={"d-flex align-items-center gap-2"}>
                        <span className={"league-icon"} style={{color: "#00e676"}}><i className={"bi bi-star-fill"}></i></span>
                        <div>
                          <div className={"fw-bold"}>Inter vs AC Milan</div>
                          <div className={"text-muted-custom"} style={{}}>May 11 • 6:00 PM</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={"fw-bold"}>BTTS</span><br /><span className={"text-muted-custom"} style={{fontSize: "10px"}}>Both Teams to Score</span></td>
                    <td><span className={"badge-green"}>Yes</span></td>
                    <td><span className={"badge-confidence-med"}>Medium 54%</span></td>
                    <td className={"fw-bold"}>57%</td>
                    <td>1.70</td>
                    <td className={"badge-green"}>+4.2%</td>
                    <td className={"text-muted-custom"}><i className={"bi bi-chevron-right"}></i></td>
                  </tr>

                  
                  <tr>
                    <td>
                      <div className={"d-flex align-items-center gap-2"}>
                        <span className={"league-icon"} style={{color: "#ff5252"}}><i className={"bi bi-hexagon-fill"}></i></span>
                        <div>
                          <div className={"fw-bold"}>Bayern vs Dortmund</div>
                          <div className={"text-muted-custom"} style={{}}>May 10 • 6:30 PM</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={"fw-bold"}>1X2</span><br /><span className={"text-muted-custom"} style={{fontSize: "10px"}}>Full Time</span></td>
                    <td><span className={"badge-blue"}>Bayern</span></td>
                    <td><span className={"badge-confidence-high"}>High 72%</span></td>
                    <td className={"fw-bold"}>65%</td>
                    <td>1.62</td>
                    <td className={"badge-green"}>+8.1%</td>
                    <td className={"text-muted-custom"}><i className={"bi bi-chevron-right"}></i></td>
                  </tr>

                  
                  <tr>
                    <td>
                      <div className={"d-flex align-items-center gap-2"}>
                        <span className={"league-icon"} style={{color: "#ab47bc"}}><i className={"bi bi-lightning-fill"}></i></span>
                        <div>
                          <div className={"fw-bold"}>PSG vs Lyon</div>
                          <div className={"text-muted-custom"} style={{}}>May 10 • 9:00 PM</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={"fw-bold"}>Over 2.5</span><br /><span className={"text-muted-custom"} style={{fontSize: "10px"}}>Total Goals</span></td>
                    <td><span className={"badge-green"}>Over 2.5</span></td>
                    <td><span className={"badge-confidence-low"}>Low 38%</span></td>
                    <td className={"fw-bold"}>44%</td>
                    <td>1.90</td>
                    <td className={"badge-red"}>-1.8%</td>
                    <td className={"text-muted-custom"}><i className={"bi bi-chevron-right"}></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={"mt-3"}>
              <a href={"#"} className={"action-link fw-semibold"}>View all predictions <i className={"bi bi-arrow-right"}></i></a>
            </div>
          </div>
        </div>

        
        <div className={"col-lg-4"}>
          <div className={"dashboard-card"}>
            <div className={"d-flex justify-content-between align-items-center mb-2"}>
              <div className={"fw-bold text-uppercase"} style={{fontSize: "12px"}}>
                CALIBRATION <span className={"text-muted-custom fw-normal"}>(Reliability Diagram)</span> <i className={"bi bi-question-circle ms-1"}></i>
              </div>
            </div>
            
            <div style={{height: "220px", position: "relative"}}>
              <canvas id={"calibrationChart"}></canvas>
            </div>

            <div className={"d-flex justify-content-between mt-3 pt-2 border-top border-secondary border-opacity-25"} style={{}}>
              <div>Brier score (All): <span className={"text-green fw-bold"}>0.112</span></div>
              <div>Brier score (30d): <span className={"text-green fw-bold"}>0.104</span></div>
            </div>
          </div>
        </div>
      </div>

      
      <div className={"row g-3"}>
        
        <div className={"col-lg-3 col-md-6"}>
          <div className={"dashboard-card"}>
            <div className={"fw-bold text-uppercase mb-1"} style={{}}>
              CONFIDENCE VS PROBABILITY <i className={"bi bi-question-circle ms-1 text-muted-custom"}></i>
            </div>
            <div className={"text-muted-custom mb-3"} style={{fontSize: "10px"}}>Distribution of predictions by confidence level</div>
            
            <div className={"d-flex align-items-center justify-content-between gap-3 mb-2"}>
              <span className={"badge-confidence-high"}>High (≥ 70%)</span>
              <span className={"fw-bold"}>48 <span className={"text-muted-custom fw-normal"}>(38%)</span></span>
              <span className={"fw-bold"}>69%</span>
              <div style={{width: "50px"}}>
                <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-green"} style={{width: "70%"}}></div></div>
              </div>
            </div>

            <div className={"d-flex align-items-center justify-content-between gap-3 mb-2"}>
              <span className={"badge-confidence-med"}>Medium (40–69%)</span>
              <span className={"fw-bold"}>61 <span className={"text-muted-custom fw-normal"}>(48%)</span></span>
              <span className={"fw-bold"}>59%</span>
              <div style={{width: "50px"}}>
                <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-yellow"} style={{width: "50%"}}></div></div>
              </div>
            </div>

            <div className={"d-flex align-items-center justify-content-between gap-3 mb-3"}>
              <span className={"badge-confidence-low"}>Low (&lt; 40%)</span>
              <span className={"fw-bold"}>19 <span className={"text-muted-custom fw-normal"}>(14%)</span></span>
              <span className={"fw-bold"}>45%</span>
              <div style={{width: "50px"}}>
                <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-red"} style={{width: "30%"}}></div></div>
              </div>
            </div>

            <div className={"p-2 rounded bg-dark border border-secondary border-opacity-25"} style={{fontSize: "10px", color: "#8493a8"}}>
              Confidence reflects the model's certainty.<br />Probability reflects the estimated chance of the outcome.
            </div>
          </div>
        </div>

        
        <div className={"col-lg-3 col-md-6"}>
          <div className={"dashboard-card table-responsive"}>
            <div className={"fw-bold text-uppercase mb-3"} style={{}}>
              DATA FRESHNESS & SOURCE HEALTH <i className={"bi bi-question-circle ms-1 text-muted-custom"}></i>
            </div>

            <table className={"table custom-table mb-2"}>
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Freshness</th>
                  <th>Health</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"fw-semibold"}>Opta Feed</td>
                  <td className={"text-muted-custom"}>2 min ago</td>
                  <td className={"text-green"}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "7px"}}></i>Excellent</td>
                </tr>
                <tr>
                  <td className={"fw-semibold"}>Opta Lineups</td>
                  <td className={"text-muted-custom"}>3 min ago</td>
                  <td className={"text-green"}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "7px"}}></i>Excellent</td>
                </tr>
                <tr>
                  <td className={"fw-semibold"}>Myodin DB</td>
                  <td className={"text-muted-custom"}>5 min ago</td>
                  <td className={"text-warning"}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "7px"}}></i>Good</td>
                </tr>
                <tr>
                  <td className={"fw-semibold"}>Market Feed</td>
                  <td className={"text-muted-custom"}>12 min ago</td>
                  <td className={"text-warning"}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "7px"}}></i>Fair</td>
                </tr>
                <tr>
                  <td className={"fw-semibold"}>MétéoLive</td>
                  <td className={"text-muted-custom"}>9 min ago</td>
                  <td className={"text-warning"}><i className={"bi bi-circle-fill me-1"} style={{fontSize: "7px"}}></i>Good</td>
                </tr>
              </tbody>
            </table>

            <a href={"#"} className={"action-link fw-semibold"}>View details <i className={"bi bi-arrow-right"}></i></a>
          </div>
        </div>

        
        <div className={"col-lg-3 col-md-6"}>
          <div className={"dashboard-card"}>
            <div className={"fw-bold text-uppercase mb-1"} style={{}}>
              EXPLAINABILITY <span className={"text-muted-custom fw-normal"}>(Top factors)</span> <i className={"bi bi-question-circle ms-1"}></i>
            </div>
            <div className={"text-muted-custom mb-3"} style={{fontSize: "10px"}}>Impact on prediction (Man City vs Arsenal – 1X2)</div>

            <div className={"mb-2"}>
              <div className={"d-flex justify-content-between mb-2"} style={{}}>
                <span>Home advantage</span>
                <span className={"text-green fw-bold"}>+18%</span>
              </div>
              <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-green"} style={{width: "65%"}}></div></div>
            </div>

            <div className={"mb-2"}>
              <div className={"d-flex justify-content-between mb-2"} style={{}}>
                <span>Team form (last 5)</span>
                <span className={"text-green fw-bold"}>+12%</span>
              </div>
              <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-green"} style={{width: "48%"}}></div></div>
            </div>

            <div className={"mb-2"}>
              <div className={"d-flex justify-content-between mb-2"} style={{}}>
                <span>xG difference</span>
                <span className={"text-green fw-bold"}>+10%</span>
              </div>
              <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-green"} style={{width: "40%"}}></div></div>
            </div>

            <div className={"mb-2"}>
              <div className={"d-flex justify-content-between mb-2"} style={{}}>
                <span>Injuries & suspensions</span>
                <span className={"text-red fw-bold"}>-7%</span>
              </div>
              <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-red"} style={{width: "30%"}}></div></div>
            </div>

            <div className={"mb-3"}>
              <div className={"d-flex justify-content-between mb-2"} style={{}}>
                <span>Market movement</span>
                <span className={"text-red fw-bold"}>-5%</span>
              </div>
              <div className={"progress progress-custom"}><div className={"progress-bar progress-bar-red"} style={{width: "20%"}}></div></div>
            </div>

            <a href={"#"} className={"action-link fw-semibold"}>View full explanation <i className={"bi bi-arrow-right"}></i></a>
          </div>
        </div>

        
        <div className={"col-lg-3 col-md-6"}>
          <div className={"d-flex flex-column gap-2 h-100"}>
            
            <div className={"alert-card-warning"}>
              <div className={"d-flex align-items-center gap-2 text-warning fw-bold mb-1"} style={{}}>
                <i className={"bi bi-exclamation-triangle"}></i> LOW SAMPLE WARNING <i className={"bi bi-question-circle ms-auto text-muted-custom"}></i>
              </div>
              <div className={"fw-semibold text-light mb-1"} style={{}}>Ligue 1 – BTTS market</div>
              <div className={"text-muted-custom"} style={{fontSize: "10px"}}>Only 18 historical matches available. Model confidence may be unreliable.</div>
            </div>

            <div className={"alert-card-info"}>
              <div className={"d-flex align-items-center gap-2 text-blue fw-bold mb-1"} style={{}}>
                <i className={"bi bi-info-circle"}></i> NO PREDICTION <i className={"bi bi-question-circle ms-auto text-muted-custom"}></i>
              </div>
              <div className={"text-muted-custom"} style={{fontSize: "10px"}}>EID: 1054420</div>
              <div className={"text-muted-custom"} style={{fontSize: "10px"}}>Ligue 2 – Player props</div>
              <div className={"text-muted-custom mt-1"} style={{fontSize: "10px"}}>Insufficient historical data for this market. No prediction generated.</div>
            </div>

            <div className={"alert-card-danger"}>
              <div className={"d-flex align-items-center gap-2 text-red fw-bold mb-1"} style={{}}>
                <i className={"bi bi-slash-circle"}></i> MODEL UNAVAILABLE <i className={"bi bi-question-circle ms-auto text-muted-custom"}></i>
              </div>
              <div className={"text-muted-custom mb-2"} style={{fontSize: "10px"}}>Live snapshot temporarily unavailable. Please try again in a few moments.</div>
              <button className={"btn btn-sm btn-outline-secondary text-light w-100 py-1"} style={{borderColor: "rgba(255,255,255,0.2)"}}>
                <i className={"bi bi-arrow-clockwise me-1"}></i> Retry now
              </button>
            </div>

          </div>
        </div>

      </div>


    </main>














<Script src={"/assets/next/ai-predictions-boot.js"} strategy="afterInteractive" />
    </>
  );
}
