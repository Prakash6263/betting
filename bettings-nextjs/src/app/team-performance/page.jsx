import Script from 'next/script';
import UserMenu from '../../components/profile/UserMenu';
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
        <div className={"shared-header-title"}>TEAM PERFORMANCE</div>

        
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
        <Link href={"/team-performance"} className={"nav-link active"}>
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

         
      <div className={"d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2"}>
        <div className={"d-flex align-items-center gap-2"}>
          <div className={"form-check form-switch m-0"}>
            <input className={"form-check-input"} type={"checkbox"} id={"compareToggle"} defaultChecked />
            <label className={"form-check-label fw-semibold"} htmlFor={"compareToggle"}>Compare teams</label>
          </div>
        </div>

        <div className={"d-flex align-items-center gap-2"}>
          <div className={"filter-box"}>
            <i className={"bi bi-clock-history text-muted"}></i>
            <div>
              <div style={{fontSize: "8px", color: "var(--text-muted)"}}>Data freshness</div>
              <strong style={{color: "var(--accent-yellow)"}}>1 hour ago</strong>
            </div>
          </div>
          <button className={"btn btn-sm text-light border-0"} style={{background: "var(--input-bg)", fontSize: "11px"}}>
            <i className={"bi bi-download me-1"}></i> Export
          </button>
        </div>
      </div>

      
      <div className={"row g-2 mb-2"}>
        <div className={"col-md-4"}>
          <div className={"dashboard-card mb-3 d-flex align-items-center justify-content-between p-2"}>
            <div className={"d-flex align-items-center gap-2 w-45"}>
              <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} className={"team-logo-sm"} alt={"Arsenal"} />
              <strong>Arsenal</strong>
            </div>
            <span className={"text-muted"}>vs</span>
            <div className={"d-flex align-items-center gap-2 justify-content-end w-45"}>
              <strong>Chelsea</strong>
              <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} className={"team-logo-sm"} alt={"Chelsea"} />
            </div>
          </div>
        </div>

        <div className={"col-md-8"}>
          <div className={"d-flex gap-2 h-100 align-items-center"}>
            <div className={"filter-box flex-grow-1"}>
              <i className={"bi bi-calendar3 text-muted"}></i>
              <div className={"w-100"}>
                <div style={{fontSize: "8px", color: "var(--text-muted)"}}>Date range</div>
                <select><option>Last 20 matches</option></select>
              </div>
            </div>
            <div className={"filter-box flex-grow-1"}>
              <i className={"bi bi-trophy text-muted"}></i>
              <div className={"w-100"}>
                <div style={{fontSize: "8px", color: "var(--text-muted)"}}>Competition</div>
                <select><option>All competitions</option></select>
              </div>
            </div>
            <div className={"filter-box flex-grow-1"}>
              <i className={"bi bi-geo-alt text-muted"}></i>
              <div className={"w-100"}>
                <div style={{fontSize: "8px", color: "var(--text-muted)"}}>Venue</div>
                <select><option>All (Home & Away)</option></select>
              </div>
            </div>
            <div className={"filter-box flex-grow-1"}>
              <i className={"bi bi-bar-chart text-muted"}></i>
              <div className={"w-100"}>
                <div style={{fontSize: "8px", color: "var(--text-muted)"}}>Opponent strength</div>
                <select><option>All</option></select>
              </div>
            </div>
            <button className={"btn btn-sm text-light"} style={{background: "var(--input-bg)", border: "1px solid var(--card-border)", fontSize: "10.5px"}}>
              <i className={"bi bi-sliders me-1"}></i> Advanced filters
            </button>
          </div>
        </div>
      </div>

      
      <div className={"dashboard-card mb-3 mb-2 p-2"}>
        <div className={"table-responsive"}>
          <table className={"sports-analytics-table"}>
            <thead>
              <tr>
                <th className={"text-start"}>Team</th>
                <th>Points per match</th>
                <th>Goals per match</th>
                <th>xG per match</th>
                <th>xGA per match</th>
                <th>Goal difference</th>
                <th>Form (last 5)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"text-start"}>
                  <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} className={"team-logo-sm me-1"} alt={""} />
                  <strong>Arsenal</strong> <span className={"text-muted"} style={{fontSize: "9px"}}>Last 20 matches</span>
                </td>
                <td><span className={"fw-bold fs-6"}>2.10</span> <span className={"rank-tag rank-1st"}>1st</span></td>
                <td><span className={"fw-bold fs-6"}>2.05</span> <span className={"rank-tag rank-1st"}>1st</span></td>
                <td><span className={"fw-bold fs-6"}>1.98</span> <span className={"rank-tag rank-2nd"}>2nd</span></td>
                <td><span className={"fw-bold fs-6"}>0.92</span> <span className={"rank-tag rank-2nd"}>2nd</span></td>
                <td className={"text-success fw-bold fs-6"}>+22</td>
                <td>
                  <div className={"d-flex justify-content-center gap-1"}>
                    <span className={"form-badge form-w"}>W</span>
                    <span className={"form-badge form-w"}>W</span>
                    <span className={"form-badge form-w"}>W</span>
                    <span className={"form-badge form-d"}>D</span>
                    <span className={"form-badge form-w"}>W</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={"text-start"}>
                  <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} className={"team-logo-sm me-1"} alt={""} />
                  <strong>Chelsea</strong> <span className={"text-muted"} style={{fontSize: "9px"}}>Last 20 matches</span>
                </td>
                <td><span className={"fw-bold fs-6"}>1.50</span> <span className={"rank-tag text-muted"}>6th</span></td>
                <td><span className={"fw-bold fs-6"}>1.40</span> <span className={"rank-tag text-muted"}>8th</span></td>
                <td><span className={"fw-bold fs-6"}>1.48</span> <span className={"rank-tag text-muted"}>7th</span></td>
                <td><span className={"fw-bold fs-6"}>1.26</span> <span className={"rank-tag text-muted"}>7th</span></td>
                <td className={"text-success fw-bold fs-6"}>+3</td>
                <td>
                  <div className={"d-flex justify-content-center gap-1"}>
                    <span className={"form-badge form-w"}>W</span>
                    <span className={"form-badge form-l"}>L</span>
                    <span className={"form-badge form-d"}>D</span>
                    <span className={"form-badge form-l"}>L</span>
                    <span className={"form-badge form-w"}>W</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className={"row g-2 mb-3"}>
        
         <div className={"col-md-4"}>
          <div className={"dashboard-card h-100"}>
            <div className={"card-title-sm"}>Performance trend <span className={"text-muted fw-normal"}>(last 20 matches)</span></div>
            <div style={{height: "155px", position: "relative"}}>
              <canvas id={"trendChart"}></canvas>
            </div>
          </div>
        </div>

        
         <div className={"col-md-4"}>
          <div className={"dashboard-card  h-100"}>
            <div className={"card-title-sm"}>Home vs Away performance</div>
            <div className={"table-responsive"}>
              <table className={"sports-analytics-table"}>
                <thead>
                  <tr>
                    <th className={"text-start"}>Metric</th>
                    <th colspan={"3"}>Arsenal</th>
                    <th colspan={"3"}>Chelsea</th>
                  </tr>
                  <tr style={{fontSize: "8px", color: "var(--text-muted)"}}>
                    <th></th>
                    <th>Home</th><th>Away</th><th>Diff</th>
                    <th>Home</th><th>Away</th><th>Diff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={"text-start text-muted"}>Points per match</td>
                    <td>2.25</td><td>1.94</td><td className={"diff-pos"}>+0.31</td>
                    <td>1.80</td><td>1.20</td><td className={"diff-pos"}>+0.60</td>
                  </tr>
                  <tr>
                    <td className={"text-start text-muted"}>Goals per match</td>
                    <td>2.25</td><td>1.84</td><td className={"diff-pos"}>+0.41</td>
                    <td>1.60</td><td>1.20</td><td className={"diff-pos"}>+0.40</td>
                  </tr>
                  <tr>
                    <td className={"text-start text-muted"}>xG per match</td>
                    <td>2.12</td><td>1.83</td><td className={"diff-pos"}>+0.29</td>
                    <td>1.62</td><td>1.33</td><td className={"diff-pos"}>+0.29</td>
                  </tr>
                  <tr>
                    <td className={"text-start text-muted"}>xGA per match</td>
                    <td>0.78</td><td>1.08</td><td className={"diff-neg"}>-0.30</td>
                    <td>1.04</td><td>1.52</td><td className={"diff-neg"}>-0.48</td>
                  </tr>
                  <tr>
                    <td className={"text-start text-muted"}>Clean sheet %</td>
                    <td>50%</td><td>44%</td><td className={"diff-pos"}>+6pp</td>
                    <td>40%</td><td>24%</td><td className={"diff-pos"}>+16pp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
       <div className={"col-md-4"}>
          <div className={"dashboard-card h-100"}>
            <div className={"card-title-sm"}>Schedule strength <span className={"text-muted fw-normal"}>(next 6 matches)</span></div>
            <div className={"table-responsive"}>
              <table className={"sports-analytics-table"}>
                <thead>
                  <tr>
                    <th className={"text-start"}>Team</th>
                    <th>Avg. Opp. Rating <i className={"bi bi-info-circle"}></i></th>
                    <th>Home</th>
                    <th>Away</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={"text-start"}>
                      <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} className={"team-logo-sm me-1"} alt={""} /> Arsenal
                    </td>
                    <td><strong>3.2</strong> <span className={"text-warning"} style={{fontSize: "10px"}}>(Moderate)</span></td>
                    <td>3 <span className={"dot-indicator bg-warning"}></span></td>
                    <td>3 <span className={"dot-indicator bg-warning"}></span><span className={"dot-indicator bg-warning"}></span></td>
                  </tr>
                  <tr>
                    <td className={"text-start"}>
                      <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} className={"team-logo-sm me-1"} alt={""} /> Chelsea
                    </td>
                    <td><strong>4.1</strong> <span className={"text-danger"} style={{fontSize: "10px"}}>(Challenging)</span></td>
                    <td>2 <span className={"dot-indicator bg-success"}></span></td>
                    <td>4 <span className={"dot-indicator bg-danger"}></span><span className={"dot-indicator bg-danger"}></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
      <div className={"row g-2 mb-3"}>
        
        <div className={"col-md-3"}>
          <div className={"dashboard-card h-100"}>
            <div className={"card-title-sm"}>Injuries & suspensions</div>
            
            <div className={"d-flex gap-2 mb-2"}>
              <button className={"btn btn-sm btn-outline-danger active w-50 py-0"} style={{fontSize: "9.5px"}}>Arsenal</button>
              <button className={"btn btn-sm btn-outline-secondary w-50 py-0"} style={{fontSize: "9.5px"}}>Chelsea</button>
            </div>

            <div className={"d-flex flex-column gap-2"}>
              <div className={"d-flex justify-content-between align-items-center"}>
                <div>
                  <strong>Bukayo Saka</strong>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Winger</div>
                </div>
                <div className={"text-end"}>
                  <span className={"badge bg-danger"} style={{fontSize: "7.5px"}}>Out</span>
                  <div className={"text-muted"} style={{fontSize: "8px"}}>May 20, 2025</div>
                </div>
              </div>
              <div className={"d-flex justify-content-between align-items-center"}>
                <div>
                  <strong>Takehiro Tomiyasu</strong>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Defender</div>
                </div>
                <div className={"text-end"}>
                  <span className={"badge bg-danger"} style={{fontSize: "7.5px"}}>Out</span>
                  <div className={"text-muted"} style={{fontSize: "8px"}}>May 25, 2025</div>
                </div>
              </div>
              <div className={"d-flex justify-content-between align-items-center"}>
                <div>
                  <strong>Mohammed Elneny</strong>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Midfielder</div>
                </div>
                <div className={"text-end"}>
                  <span className={"badge bg-warning text-dark"} style={{fontSize: "7.5px"}}>Doubtful</span>
                  <div className={"text-muted"} style={{fontSize: "8px"}}>May 15, 2025</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <div className={"col-md-3"}>
          <div className={"dashboard-card  h-100"}>
            <div className={"card-title-sm"}>Lineup continuity <span className={"text-muted fw-normal"}>(last 20 matches)</span></div>
            
            <div className={"text-muted mb-1"} style={{fontSize: "10px"}}>Avg. starting XI changes</div>
            <div className={"d-flex justify-content-between mb-2"}>
              <div><strong className={"fs-6"}>2.4</strong> <span className={"text-success"} style={{fontSize: "10px"}}>Low</span></div>
              <div><strong className={"fs-6"}>3.6</strong> <span className={"text-warning"} style={{fontSize: "10px"}}>Moderate</span></div>
            </div>

            <div className={"text-muted mb-1"} style={{fontSize: "10px"}}>Most used formation</div>
            <div className={"d-flex justify-content-between mb-2"}>
              <div><strong>4-3-3</strong> <span className={"text-muted"}>70%</span></div>
              <div><strong>4-2-3-1</strong> <span className={"text-muted"}>45%</span></div>
            </div>

            <div className={"text-muted mb-1"} style={{fontSize: "10px"}}>Lineup stability</div>
            <div className={"d-flex justify-content-between align-items-center"}>
              <div>
                <span className={"dot-indicator bg-success me-1"}></span>
                <span className={"dot-indicator bg-success me-1"}></span>
                <span className={"dot-indicator bg-success me-1"}></span>
                <span className={"dot-indicator bg-success"}></span>
              </div>
              <div>
                <span className={"dot-indicator bg-warning me-1"}></span>
                <span className={"dot-indicator bg-warning me-1"}></span>
                <span className={"dot-indicator bg-warning me-1"}></span>
                <span className={"dot-indicator bg-secondary"}></span>
              </div>
            </div>
          </div>
        </div>

        
       <div className={"col-md-3"}>
          <div className={"dashboard-card h-100"}>
            <div className={"card-title-sm"}>Formation usage <span className={"text-muted fw-normal"}>(last 20 matches)</span></div>
            
            <div className={"d-flex flex-column gap-2"}>
              <div>
                <div className={"d-flex justify-content-between text-muted"} style={{fontSize: "10px"}}>
                  <span>4-3-3</span>
                  <span>70% (14) &nbsp;|&nbsp; 25% (5)</span>
                </div>
                <div className={"progress-custom d-flex mt-1"}>
                  <div className={"bg-danger"} style={{width: "70%"}}></div>
                  <div className={"bg-primary ms-auto"} style={{width: "25%"}}></div>
                </div>
              </div>

              <div>
                <div className={"d-flex justify-content-between text-muted"} style={{fontSize: "10px"}}>
                  <span>4-2-3-1</span>
                  <span>15% (3) &nbsp;|&nbsp; 45% (9)</span>
                </div>
                <div className={"progress-custom d-flex mt-1"}>
                  <div className={"bg-danger"} style={{width: "15%"}}></div>
                  <div className={"bg-primary ms-auto"} style={{width: "45%"}}></div>
                </div>
              </div>

              <div>
                <div className={"d-flex justify-content-between text-muted"} style={{fontSize: "10px"}}>
                  <span>3-4-3</span>
                  <span>10% (2) &nbsp;|&nbsp; 15% (3)</span>
                </div>
                <div className={"progress-custom d-flex mt-1"}>
                  <div className={"bg-danger"} style={{width: "10%"}}></div>
                  <div className={"bg-primary ms-auto"} style={{width: "15%"}}></div>
                </div>
              </div>

              <div>
                <div className={"d-flex justify-content-between text-muted"} style={{fontSize: "10px"}}>
                  <span>Other</span>
                  <span>5% (1) &nbsp;|&nbsp; 15% (3)</span>
                </div>
                <div className={"progress-custom d-flex mt-1"}>
                  <div className={"bg-danger"} style={{width: "5%"}}></div>
                  <div className={"bg-primary ms-auto"} style={{width: "15%"}}></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <div className={"col-md-3"}>
          <div className={"dashboard-card text-center h-100"}>
            <div className={"card-title-sm text-start"}>Head-to-head <span className={"text-muted fw-normal"}>(last 10 meetings)</span></div>
            
            <div className={"d-flex justify-content-center gap-1 mb-2"}>
              <span className={"badge bg-secondary"} style={{fontSize: "8px"}}>All</span>
              <span className={"badge text-muted"} style={{fontSize: "8px"}}>Home (Arsenal)</span>
              <span className={"badge text-muted"} style={{fontSize: "8px"}}>Home (Chelsea)</span>
            </div>

            <div className={"d-flex align-items-center justify-content-around mb-2"}>
              <div>
                <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} className={"team-logo-sm mb-1"} alt={""} /><br />
                <strong className={"fs-5 text-success"}>4</strong><br />
                <span className={"text-muted"} style={{fontSize: "10px"}}>Wins</span>
              </div>
              <div>
                <strong className={"fs-5 text-light"}>2</strong><br />
                <span className={"text-muted"} style={{fontSize: "10px"}}>Draws</span>
              </div>
              <div>
                <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} className={"team-logo-sm mb-1"} alt={""} /><br />
                <strong className={"fs-5 text-primary"}>4</strong><br />
                <span className={"text-muted"} style={{fontSize: "10px"}}>Wins</span>
              </div>
            </div>

            <div className={"progress-custom d-flex"}>
              <div className={"bg-danger"} style={{width: "40%"}}></div>
              <div className={"bg-secondary"} style={{width: "20%"}}></div>
              <div className={"bg-primary"} style={{width: "40%"}}></div>
            </div>
            <div className={"d-flex justify-content-between text-muted mt-1"} style={{fontSize: "10px"}}>
              <span>16</span>
              <span>16</span>
            </div>

          </div>
        </div>
      </div>

      
      <div className={"warning-banner"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-5 d-flex align-items-center gap-2"}>
            <i className={"bi bi-exclamation-triangle text-warning fs-5"}></i>
            <div>
              <strong className={"text-warning"} style={{fontSize: "11px"}}>Sample size warning</strong>
              <div className={"text-muted"} style={{fontSize: "9.5px"}}>The selected date range includes a limited number of matches for one or both teams. Interpret trends with caution.</div>
            </div>
          </div>
          <div className={"col-md-3 border-start border-secondary px-3"}>
            <div className={"d-flex justify-content-between"}>
              <span>Arsenal: <strong>20 matches</strong></span>
              <span>Chelsea: <strong>20 matches</strong></span>
            </div>
            <div className={"text-muted"} style={{fontSize: "10px"}}>Recommended: 20+ matches</div>
          </div>
          <div className={"col-md-4 border-start border-secondary px-3"}>
            <div className={"text-muted"} style={{fontSize: "10px"}}><i className={"bi bi-clock me-1"}></i> Data freshness: <span className={"text-success"}>1 hour ago</span></div>
            <div className={"text-muted"} style={{fontSize: "10px"}}><i className={"bi bi-arrow-repeat me-1"}></i> Next update: <span className={"text-warning"}>In 59 minutes</span></div>
          </div>
        </div>
      </div>


    </main>













<Script src={"/assets/next/team-performance-boot.js"} strategy="afterInteractive" />
    </>
  );
}
