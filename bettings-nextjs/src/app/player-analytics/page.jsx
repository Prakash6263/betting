import Script from 'next/script';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<header className={"top-navbar d-flex justify-content-between align-items-center"}>
    <div className={"d-flex align-items-center gap-3"}>
        
        <button className={"btn btn-link text-white p-0 me-2"} id={"sidebarToggle"} style={{fontSize: "19px"}}>
            <i className={"fa-solid fa-bars-staggered text-success"}></i>
        </button>

        
       <div className={"d-flex align-items-center gap-2 logo"}>
           <div className={"brand-text"}>
<img src={"/assets/images/logo.png"} style={{width: "250px"}} />
</div>
        </div>
        <div className={"shared-header-title"}>PLAYER ANALYSIS</div>

        
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
                <i className={"fa-solid fa-chevron-down text-secondary"} style={{fontSize: "10px"}}></i>
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
            <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"} style={{fontSize: "10px"}}>
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
        <Link href={"/player-analytics"} className={"nav-link active"}>
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
        
    <div className={"top-search-panel"}>
      <div className={"search-box-container"}>
        <div className={"search-input-group"}>
          <i className={"bi bi-search text-muted"}></i>
          <input type={"text"} placeholder={"Search for a player..."} />
        </div>
        <div className={"aliases-text"}>Aliases: Bukayo Saka, B. Saka, Saka7</div>
      </div>

      <div className={"comparison-group-box"}>
        <div className={"selected-player-chip"}>
          <img src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"} className={"player-chip-img"} alt={"Bukayo Saka"} />
          <div>
            <div className={"fw-semibold text-white"} style={{fontSize: "11px"}}>Bukayo Saka</div>
            <div className={"text-muted"} style={{fontSize: "10px"}}>Arsenal • #7</div>
          </div>
          <i className={"bi bi-x text-muted ms-1"} style={{cursor: "pointer", fontSize: "12px"}}></i>
        </div>

        <span className={"vs-text"}>VS</span>

        <div className={"add-player-btn"}>
          <div className={"add-player-icon-box"}><i className={"bi bi-plus"}></i></div>
          <span className={"text-white"} style={{fontSize: "10.5px"}}>Add player</span>
        </div>

        <span className={"vs-text"}>VS</span>

        <div className={"add-player-btn"}>
          <div className={"add-player-icon-box"}><i className={"bi bi-plus"}></i></div>
          <span className={"text-white"} style={{fontSize: "10.5px"}}>Add player</span>
        </div>

        <span className={"vs-text"}>VS</span>

        <div className={"add-player-btn"}>
          <div className={"add-player-icon-box"}><i className={"bi bi-plus"}></i></div>
          <span className={"text-white"} style={{fontSize: "10.5px"}}>Add player</span>
        </div>
      </div>
    </div>

    
    <div className={"dash-card py-2 px-3 mb-2"} style={{height: "auto"}}>
      <div className={"d-flex align-items-center justify-content-between flex-wrap gap-2"}>
        <div className={"d-flex align-items-center gap-2 flex-wrap"}>
          <div>
            <span className={"text-muted d-block"} style={{fontSize: "10px"}}>Season</span>
            <select className={"custom-select-sm"}><option>2024/25</option></select>
          </div>
          <div>
            <span className={"text-muted d-block"} style={{fontSize: "10px"}}>Competition</span>
            <select className={"custom-select-sm"}><option>Premier League</option></select>
          </div>
          <div>
            <span className={"text-muted d-block"} style={{fontSize: "10px"}}>Date range</span>
            <select className={"custom-select-sm"}><option>All matches</option></select>
          </div>
          <div>
            <span className={"text-muted d-block"} style={{fontSize: "10px"}}>Position</span>
            <select className={"custom-select-sm"}><option>All (Role-aware)</option></select>
          </div>
          <div>
            <span className={"text-muted d-block"} style={{fontSize: "10px"}}>Min. minutes</span>
            <select className={"custom-select-sm"}><option>600</option></select>
          </div>
          <button className={"btn btn-sm text-white border-0 mt-3 d-flex align-items-center gap-1"} style={{backgroundColor: "var(--card-inner)", fontSize: "10px", height: "26px"}}>
            <i className={"bi bi-funnel"}></i> More filters
          </button>
        </div>

        <div className={"d-flex align-items-center gap-2"}>
          <button className={"btn btn-sm text-white border-0 d-flex align-items-center gap-1"} style={{backgroundColor: "var(--card-inner)", fontSize: "10px", height: "26px"}}>
            <i className={"bi bi-download"}></i> Export
          </button>
        </div>
      </div>
    </div>

    
    <div className={"row g-2 mb-2"}>
      <div className={"col-lg-8"}>
        <div className={"row g-2"}>
          
          
          <div className={"col-lg-4"}>
            <div className={"dash-card"}>
              <div className={"d-flex align-items-center gap-2 mb-2"}>
                <div className={"player-avatar-circle"}>
                  <img src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"} width={"100%"} alt={"Bukayo Saka"} />
                </div>
                <div>
                  <div className={"fw-bold text-white fs-6"}>Bukayo Saka</div>
                  <div className={"text-muted"} style={{fontSize: "9.5px"}}>Arsenal • #7 • Right Winger</div>
                  <div className={"text-muted mt-1"} style={{fontSize: "9.5px"}}>Age <strong className={"text-white"}>23</strong> (Sep 5, 2001)</div>
                </div>
              </div>

              <div className={"row g-1 text-center border-top pt-3"}>
                <div className={"col-3"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Minutes</div>
                  <div className={"fw-bold text-white mt-1"}>2,143</div>
                </div>
                <div className={"col-3"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Starts</div>
                  <div className={"fw-bold text-white mt-1"}>24</div>
                </div>
                <div className={"col-3"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Avail.</div>
                  <div className={"fw-bold text-success mt-1"}>91%</div>
                </div>
                <div className={"col-3"}>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Matches</div>
                  <div className={"fw-bold text-white mt-1"}>26</div>
                </div>
              </div>
            </div>
          </div>

          
          <div className={"col-lg-8"}>
            <div className={"dash-card"}>
              <div className={"d-flex align-items-center justify-content-between mb-2"}>
                <div className={"dash-card-title mb-0"}>Key Metrics (Per 90)</div>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-white fw-semibold"} style={{fontSize: "9.5px"}}>Per 90</span>
                  <input type={"checkbox"} className={"form-check-input-custom"} defaultChecked />
                  <span className={"text-muted"} style={{fontSize: "9.5px"}}>Total</span>
                </div>
              </div>

              
              <div className={"row g-1 mb-1"}>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Non-Penalty Goals</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>0.34</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>88th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "88%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>npxG</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>0.31</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>85th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "85%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>xAG</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>0.38</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>94th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "94%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Assists</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>0.42</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>96th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "96%"}}></div></div>
                  </div>
                </div>
              </div>

              
              <div className={"row g-1"}>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Shot-Creating Actions</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>5.12</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>92nd percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "92%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Progressive Passes</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>4.85</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>89th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "89%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Successful Take-Ons</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>2.15</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>81st percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "81%"}}></div></div>
                  </div>
                </div>
                <div className={"col-3"}>
                  <div className={"metric-value-box"}>
                    <div className={"text-muted text-truncate"} style={{fontSize: "10px"}}>Touches (Att Pen)</div>
                    <div className={"fw-bold text-white my-0"} style={{fontSize: "13px"}}>7.40</div>
                    <div className={"text-success fw-semibold"} style={{fontSize: "10px"}}>95th percentile</div>
                    <div className={"metric-progress"}><div className={"metric-progress-fill"} style={{width: "95%"}}></div></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Percentile Radar (vs. Wingers)</div>
          <div style={{height: "165px", position: "relative"}}>
            <canvas id={"radarChart"}></canvas>
          </div>
        </div>
      </div>

    </div>

    
    <div className={"row g-2 mb-2"}>
      
      
      <div className={"col-lg-3"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Shot Map <i className={"bi bi-info-circle"}></i></div>
          <div className={"dash-card-subtitle"}>All competitions 2024/25</div>

          <div className={"pitch-shotmap"}>
            <svg width={"100%"} height={"100%"} viewBox={"0 0 200 130"}>
              
              <rect x={"5"} y={"5"} width={"190"} height={"120"} fill={"none"} stroke={"#132338"} strokeWidth={"1"} />
              <rect x={"45"} y={"5"} width={"110"} height={"40"} fill={"none"} stroke={"#132338"} strokeWidth={"1"} />
              <rect x={"75"} y={"5"} width={"50"} height={"15"} fill={"none"} stroke={"#132338"} strokeWidth={"1"} />
              <path d={"M 80,45 A 20,20 0 0,0 120,45"} fill={"none"} stroke={"#132338"} strokeWidth={"1"} />

              
              <path d={"M 100,20 L 102,24 L 106,24 L 103,27 L 104,31 L 100,28 L 96,31 L 97,27 L 94,24 L 98,24 Z"} fill={"#22c55e"} /> 
              
              <path d={"M 120,25 L 121,27 L 124,27 L 122,29 L 123,31 L 120,30 L 117,31 L 118,29 L 116,27 L 119,27 Z"} fill={"#ef4444"} />
              <path d={"M 80,28 L 81,30 L 84,30 L 82,32 L 83,34 L 80,33 L 77,34 L 78,32 L 76,30 L 79,30 Z"} fill={"#ef4444"} />
              <path d={"M 135,32 L 136,34 L 139,34 L 137,36 L 138,38 L 135,37 L 132,38 L 133,36 L 131,34 L 134,34 Z"} fill={"#ef4444"} />
              
              
              <path d={"M 110,40 L 111,42 L 114,42 L 112,44 L 113,46 L 110,45 L 107,46 L 108,44 L 106,42 L 109,42 Z"} fill={"#ffffff"} />

              <circle cx={"95"} cy={"12"} r={"3"} fill={"#ef4444"} />
              <circle cx={"105"} cy={"15"} r={"3.5"} fill={"#ef4444"} />
              <circle cx={"60"} cy={"50"} r={"3"} fill={"#ef4444"} />
              <circle cx={"140"} cy={"55"} r={"3"} fill={"#ef4444"} />
              <circle cx={"70"} cy={"65"} r={"2.5"} fill={"#3b82f6"} />
              <circle cx={"130"} cy={"70"} r={"3"} fill={"#3b82f6"} />
              <circle cx={"50"} cy={"80"} r={"2"} fill={"#3b82f6"} />
              <circle cx={"150"} cy={"85"} r={"2.5"} fill={"#3b82f6"} />
              <circle cx={"90"} cy={"95"} r={"2"} fill={"#3b82f6"} />
              <circle cx={"110"} cy={"90"} r={"2"} fill={"#ef4444"} />
            </svg>
          </div>

          
          <div className={"d-flex align-items-center justify-content-between mt-2 text-muted"} style={{fontSize: "10px"}}>
            <span><i className={"bi bi-gear-fill text-success"} style={{fontSize: "7px"}}></i> Goal</span>
            <span><i className={"bi bi-circle-fill text-primary"} style={{fontSize: "7px"}}></i> On target</span>
            <span><i className={"bi bi-circle-fill text-danger"} style={{fontSize: "7px"}}></i> Off target</span>
            <span><i className={"bi bi-star-fill text-white"} style={{fontSize: "7px"}}></i> Blocked</span>
          </div>
          <div className={"d-flex align-items-center gap-1 mt-1 text-muted"} style={{fontSize: "10px"}}>
            <span>Low xG</span>
            <span className={"d-inline-block rounded-circle bg-secondary"} style={{width: "2px", height: "2px"}}></span>
            <span className={"d-inline-block rounded-circle bg-secondary"} style={{width: "3px", height: "3px"}}></span>
            <span className={"d-inline-block rounded-circle bg-secondary"} style={{width: "4px", height: "4px"}}></span>
            <span className={"d-inline-block rounded-circle bg-secondary"} style={{width: "5px", height: "5px"}}></span>
            <span className={"d-inline-block rounded-circle bg-secondary"} style={{width: "6px", height: "6px"}}></span>
            <span>High xG</span>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-3"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Passing Network <i className={"bi bi-info-circle"}></i></div>
          <div className={"dash-card-subtitle"}>All competitions 2024/25</div>
          <div className={"pitch-shotmap"}>
            <svg width={"100%"} height={"100%"} viewBox={"0 0 200 125"}>
              
              <rect x={"5"} y={"5"} width={"190"} height={"115"} fill={"none"} stroke={"#132338"} strokeWidth={"1"} />
              
              
              <line x1={"35"} y1={"35"} x2={"100"} y2={"22"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"165"} y1={"35"} x2={"100"} y2={"22"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"35"} y1={"35"} x2={"70"} y2={"55"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"165"} y1={"35"} x2={"130"} y2={"55"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"70"} y1={"55"} x2={"130"} y2={"55"} stroke={"#1d3557"} strokeWidth={"3"} />
              <line x1={"45"} y1={"85"} x2={"80"} y2={"95"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"155"} y1={"85"} x2={"120"} y2={"95"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"80"} y1={"95"} x2={"120"} y2={"95"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"80"} y1={"95"} x2={"100"} y2={"110"} stroke={"#1d3557"} strokeWidth={"2"} />
              <line x1={"120"} y1={"95"} x2={"100"} y2={"110"} stroke={"#1d3557"} strokeWidth={"2"} />

              
              <g><circle cx={"35"} cy={"35"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"35"} y={"37"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>LW</text></g>
              <g><circle cx={"100"} cy={"22"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"100"} y={"24"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>ST</text></g>
              <g><circle cx={"165"} cy={"35"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"165"} y={"37"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>RW</text></g>
              
              <g><circle cx={"70"} cy={"55"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"70"} y={"57"} fill={"#22c55e"} fontSize={"4"} fontWeight={"bold"} textAnchor={"middle"}>LCM</text></g>
              <g><circle cx={"130"} cy={"55"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"130"} y={"57"} fill={"#22c55e"} fontSize={"4"} fontWeight={"bold"} textAnchor={"middle"}>RCM</text></g>

              <g><circle cx={"45"} cy={"85"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"45"} y={"87"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>LB</text></g>
              <g><circle cx={"80"} cy={"95"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"80"} y={"97"} fill={"#22c55e"} fontSize={"4"} fontWeight={"bold"} textAnchor={"middle"}>LCB</text></g>
              <g><circle cx={"120"} cy={"95"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"120"} y={"97"} fill={"#22c55e"} fontSize={"4"} fontWeight={"bold"} textAnchor={"middle"}>RCB</text></g>
              <g><circle cx={"155"} cy={"85"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"155"} y={"87"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>RB</text></g>

              <g><circle cx={"100"} cy={"110"} r={"7"} fill={"#060e19"} stroke={"#22c55e"} strokeWidth={"1.5"} /><text x={"100"} y={"112"} fill={"#22c55e"} fontSize={"4.5"} fontWeight={"bold"} textAnchor={"middle"}>GK</text></g>
            </svg>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-3"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Form Trend <span className={"text-muted fw-normal"}>(Last 10 Matches)</span> <i className={"bi bi-info-circle"}></i></div>
          <div className={"d-flex align-items-center gap-2 mb-1 text-muted"} style={{fontSize: "10px"}}>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "10px", height: "2px", background: "#22c55e", display: "inline-block"}}></span> Player Rating</span>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "10px", height: "2px", borderTop: "1px dashed #64748b", display: "inline-block"}}></span> Team Avg</span>
          </div>
          <div style={{height: "125px", position: "relative"}}>
            <canvas id={"formTrendChart"}></canvas>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-3"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Role & Playing Time Evolution <i className={"bi bi-info-circle"}></i></div>
          <div className={"d-flex align-items-center gap-2 mb-1 text-muted"} style={{fontSize: "10px"}}>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "10px", height: "10px", background: "#1d4ed8", display: "inline-block", borderRadius: "1px"}}></span> Minutes</span>
            <span className={"d-flex align-items-center gap-1"}><i className={"bi bi-circle-fill text-white"} style={{fontSize: "5px"}}></i> Primary Role</span>
          </div>
          <div style={{height: "125px", position: "relative"}}>
            <canvas id={"roleEvolutionChart"}></canvas>
          </div>
        </div>
      </div>

    </div>

    
    <div className={"row g-2"}>
      
      
      <div className={"col-lg-3"}>
        <div className={"dash-card d-flex flex-column justify-content-between"}>
          <div>
            <div className={"dash-card-title mb-3"}>Injuries & Suspensions <i className={"bi bi-info-circle"}></i></div>
            
            <div className={"text-muted mb-1"} style={{fontSize: "10px"}}>Injury</div>
            <div className={"d-flex align-items-center justify-content-between mb-3"}>
              <div className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-check-circle text-success fs-6"}></i>
                <span className={"text-white fw-semibold"}>None</span>
              </div>
              <span className={"text-muted"} style={{fontSize: "10px"}}>Fully fit</span>
            </div>

            <div className={"text-muted mb-1"} style={{fontSize: "10px"}}>Suspension</div>
            <div className={"d-flex align-items-center justify-content-between"}>
              <div className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-check-circle text-success fs-6"}></i>
                <span className={"text-white fw-semibold"}>None</span>
              </div>
              <span className={"text-muted"} style={{fontSize: "10px"}}>Available</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-5"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Player Comparison <span className={"text-muted fw-normal"}>(Up to 3 players)</span></div>
          <div className={"text-muted mb-2"} style={{fontSize: "10px"}}>Per 90 • 2024/25 • Premier League</div>
          
          <table className={"w-100 text-white"} style={{fontSize: "10px"}}>
            <thead>
              <tr className={"text-muted"}>
                <th></th>
                <th className={"text-center"}>Bukayo Saka<br /><span className={"fw-normal text-muted"} style={{fontSize: "7.5px"}}>2,143 mins</span></th>
                <th className={"text-center"}>Mohamed Salah<br /><span className={"fw-normal text-muted"} style={{fontSize: "7.5px"}}>2,412 mins</span></th>
                <th className={"text-center"}>Phil Foden<br /><span className={"fw-normal text-muted"} style={{fontSize: "7.5px"}}>1,876 mins</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"py-1 text-muted"}>Goals</td>
                <td className={"text-center"}>0.38 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-green"} style={{width: "60%"}}></span></span></td>
                <td className={"text-center"}>0.68 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "90%"}}></span></span></td>
                <td className={"text-center"}>0.28 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "40%"}}></span></span></td>
              </tr>
              <tr>
                <td className={"py-1 text-muted"}>xA</td>
                <td className={"text-center"}>0.45 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-green"} style={{width: "85%"}}></span></span></td>
                <td className={"text-center"}>0.44 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "80%"}}></span></span></td>
                <td className={"text-center"}>0.37 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "65%"}}></span></span></td>
              </tr>
              <tr>
                <td className={"py-1 text-muted"}>Progressive Passes</td>
                <td className={"text-center"}>6.48 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-green"} style={{width: "90%"}}></span></span></td>
                <td className={"text-center"}>5.91 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "75%"}}></span></span></td>
                <td className={"text-center"}>5.24 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "60%"}}></span></span></td>
              </tr>
              <tr>
                <td className={"py-1 text-muted"}>Dribbles</td>
                <td className={"text-center"}>4.12 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-green"} style={{width: "80%"}}></span></span></td>
                <td className={"text-center"}>3.32 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "65%"}}></span></span></td>
                <td className={"text-center"}>2.89 <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "50%"}}></span></span></td>
              </tr>
              <tr>
                <td className={"py-1 text-muted"}>Successful Dribbles %</td>
                <td className={"text-center"}>62% <span className={"comp-bar-bg"}><span className={"comp-bar-fill-green"} style={{width: "62%"}}></span></span></td>
                <td className={"text-center"}>57% <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "57%"}}></span></span></td>
                <td className={"text-center"}>53% <span className={"comp-bar-bg"}><span className={"comp-bar-fill-blue"} style={{width: "53%"}}></span></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"warning-outer-card"}>
          <div>
            <div className={"d-flex align-items-center gap-2 mb-1"}>
              <i className={"bi bi-exclamation-circle text-danger fs-6"}></i>
              <strong className={"text-danger"} style={{fontSize: "11px"}}>Sample Size Warning</strong>
              <i className={"bi bi-info-circle text-muted"} style={{fontSize: "10px"}}></i>
            </div>
            <div className={"d-flex align-items-start gap-2 mt-2"}>
              <i className={"bi bi-bar-chart-fill text-success mt-1"}></i>
              <div>
                <div className={"text-white"} style={{fontSize: "9.5px"}}>Player has played <strong>2,143 minutes</strong> (23.8 matches).</div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>Metrics are reliable but monitor trends for consistency.</div>
              </div>
            </div>
          </div>

          <div className={"freshness-inner-box d-flex align-items-center justify-content-between mt-3"}>
            <div className={"d-flex align-items-center gap-2"}>
              <i className={"bi bi-info-circle text-success fs-6"}></i>
              <div>
                <div className={"fw-semibold text-white"} style={{fontSize: "10px"}}>Data Freshness <i className={"bi bi-info-circle text-muted"} style={{fontSize: "10px"}}></i></div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>Last updated: May 11, 2025 - 10:20 AM</div>
              </div>
            </div>
            <span className={"status-badge-green"}>Up to date</span>
          </div>
        </div>
      </div>

    </div>

    </main>














<Script src={"/assets/next/player-analytics-boot.js"} strategy="afterInteractive" />
    </>
  );
}
