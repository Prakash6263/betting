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
        <div className={"shared-header-title"}>WATCHLIST</div>

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute "} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>
        <div className={"shared-status plan d-none d-xl-flex"}><i className={"fa-solid fa-crown"}></i><span><b>Pro Plan</b><small>Until 31/12/2025</small></span></div>

        
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
        <Link href={"/match-reports"} className={"nav-link"}>
            <i className={"fa-solid fa-file-invoice"}></i>
            <span className={"sidebar-text"}>Match Reports</span>
        </Link>
        <Link href={"/watchlist"} className={"nav-link active"}>
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
        
    <div className={"d-flex align-items-center justify-content-between mb-3"}>
      
      
      <div className={"wl-top-tabs"} id={"mainTabGroup"}>
        <button className={"wl-top-tab-btn active"} data-o-onclick={"switchMainTab('matches', this)"}>Saved Matches</button>
        <button className={"wl-top-tab-btn"} data-o-onclick={"switchMainTab('teams', this)"}>Teams</button>
        <button className={"wl-top-tab-btn"} data-o-onclick={"switchMainTab('players', this)"}>Players</button>
      </div>

      
      <div className={"d-flex align-items-center gap-2"}>
        <div className={"wl-search-input"}>
          <i className={"bi bi-search text-muted"} style={{fontSize: "10px"}}></i>
          <input type={"text"} placeholder={"Search watchlist..."} />
          <i className={"bi bi-sliders text-muted"} style={{fontSize: "10px"}}></i>
        </div>
        <button className={"wl-btn-filter"}>
          <i className={"bi bi-funnel"}></i> Filters
        </button>
      </div>

    </div>

    
    <div className={"row g-3"}>

      
      <div className={"col-lg-2"}>
        <div className={"wl-card h-100"}>
          
          <div className={"d-flex align-items-center justify-content-between mb-2"}>
            <span className={"fw-semibold text-white"} style={{fontSize: "10.5px"}}>Folders & Tags</span>
            <a href={"#"} className={"text-success text-decoration-none fw-medium"} style={{fontSize: "9.5px"}}>+ New Folder</a>
          </div>

          <div className={"d-flex flex-column gap-1 mb-4"}>
            <div className={"wl-sidebar-item active"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-person-workspace text-muted"}></i> All Items
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>24</span>
            </div>

            <div className={"wl-sidebar-item"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-star text-warning"}></i> Favorites
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>6</span>
            </div>

            <div className={"wl-sidebar-item"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-trophy text-muted"}></i> Premier League
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>8</span>
            </div>

            <div className={"wl-sidebar-item"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-dribbble text-muted"}></i> Champions League
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>5</span>
            </div>

            <div className={"wl-sidebar-item"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-shield-exclamation text-muted"}></i> Relegation Watch
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>3</span>
            </div>

            <div className={"wl-sidebar-item"}>
              <span className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-plus-circle text-muted"}></i> Injury Watch
              </span>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>2</span>
            </div>
          </div>

          
          <div className={"d-flex align-items-center justify-content-between mb-2"}>
            <span className={"text-muted"} style={{fontSize: "10px"}}>Tags</span>
            <a href={"#"} className={"text-success text-decoration-none"} style={{fontSize: "9.5px"}}>Manage</a>
          </div>

          <div className={"d-flex flex-wrap gap-1"}>
            <div className={"wl-tag-pill"}>Top 5 Leagues <span className={"wl-tag-count"}>12</span></div>
            <div className={"wl-tag-pill"}>Derbies <span className={"wl-tag-count"}>4</span></div>
            <div className={"wl-tag-pill"}>Value Bets <span className={"wl-tag-count"}>6</span></div>
            <div className={"wl-tag-pill"}>High Model Edge <span className={"wl-tag-count"}>7</span></div>
            <div className={"wl-tag-pill"}>Injuries <span className={"wl-tag-count"}>3</span></div>
            <div className={"wl-tag-pill"}>Lineup Sensitive <span className={"wl-tag-count"}>5</span></div>
          </div>

        </div>
      </div>

      
      <div className={"col-lg-6"}>
        <div className={"wl-card mb-3"}>
          
          
          <div className={"wl-action-bar mb-3"}>
            <input type={"checkbox"} className={"wl-check"} />
            <span className={"text-muted"} style={{fontSize: "10px"}}>0 selected</span>

            <div className={"d-flex align-items-center gap-2 ms-auto"}>
              <button className={"wl-btn-action"}><i className={"bi bi-folder-symlink"}></i> Move</button>
              <button className={"wl-btn-action"}><i className={"bi bi-trash"}></i> Delete</button>
              <button className={"wl-btn-action"}><i className={"bi bi-arrow-counterclockwise"}></i> Undo (3)</button>
            </div>
          </div>

          
          <div id={"tabContentMatches"} className={"main-tab-content"}>
            
            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Arsenal vs Chelsea</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Premier League</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Top 5 Leagues</span>
                  <span className={"wl-tag-blue"}>High Model Edge</span>
                </div>
              </div>
              <div className={"text-center px-2"} style={{width: "130px"}}>
                <span className={"wl-status-badge wl-status-live"}>Live</span>
                <div className={"fw-bold text-white fs-6 mt-1"}>1 - 1</div>
                <div className={"text-success"} style={{fontSize: "8.5px"}}>61:24</div>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Today, 16:45</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Price change alert</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/50.png"} alt={"Man City"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Man City vs Liverpool</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Premier League</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Top 5 Leagues</span>
                  <span className={"wl-tag-blue"}>Value Bets</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-scheduled"}>Scheduled</span>
                <div className={"text-muted mt-1"} style={{fontSize: "9px"}}>Sun, May 12</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>17:30</div>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Kickoff</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 1 day</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/157.png"} alt={"Bayern"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Bayern Munich vs Dortmund</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Bundesliga</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>High Model Edge</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-scheduled"}>Scheduled</span>
                <div className={"text-muted mt-1"} style={{fontSize: "9px"}}>Sat, May 11</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>15:30</div>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Lineup</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 22 hours</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/529.png"} alt={"Barcelona"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Barcelona vs Real Madrid</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>La Liga</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Derbies</span>
                  <span className={"wl-tag-blue"}>Value Bets</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-scheduled"}>Scheduled</span>
                <div className={"text-muted mt-1"} style={{fontSize: "9px"}}>Sun, May 12</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>21:00</div>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Odds drop</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 1 day</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

          </div>

          
          <div id={"tabContentTeams"} className={"main-tab-content d-none"}>
            
            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/42.png"} alt={"Arsenal"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Arsenal FC</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Premier League • England</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Top 5 Leagues</span>
                  <span className={"wl-tag-blue"}>Title Race</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-monitoring"}>Monitoring</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next Match</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>vs Chelsea</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Today, 16:45</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/541.png"} alt={"Real Madrid"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Real Madrid</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>La Liga • Spain</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Champions League</span>
                  <span className={"wl-tag-blue"}>High Odds</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-monitoring"}>Monitoring</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next Match</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>vs Barcelona</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 1 day</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/teams/157.png"} alt={"Bayern"} className={"wl-team-logo"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Bayern Munich</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Bundesliga • Germany</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Top 5 Leagues</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-monitoring"}>Monitoring</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next Match</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>vs Dortmund</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 22 hours</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

          </div>

          
          <div id={"tabContentPlayers"} className={"main-tab-content d-none"}>
            
            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/players/278.png"} alt={"Mbappe"} className={"wl-team-logo rounded-circle"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Kylian Mbappé</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Player • Real Madrid</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Injury Watch</span>
                  <span className={"wl-tag-blue"}>Top Scorer</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-monitoring"}>Monitoring</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Injury update</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 3 days</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/players/1100.png"} alt={"Haaland"} className={"wl-team-logo rounded-circle"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Erling Haaland</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Player • Manchester</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Lineup Sensitive</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-monitoring"}>Monitoring</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Lineup news</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>In 1 day</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

            <div className={"wl-match-row"}>
              <input type={"checkbox"} className={"wl-check"} />
              <div className={"d-flex align-items-center gap-2"}>
                <img src={"https://media.api-sports.io/football/players/1459.png"} alt={"Saka"} className={"wl-team-logo rounded-circle"} />
              </div>
              <div className={"flex-grow-1"}>
                <div className={"fw-semibold text-white"}>Bukayo Saka</div>
                <div className={"text-muted"} style={{fontSize: "9px"}}>Player • Arsenal</div>
                <div className={"d-flex gap-1 mt-1"}>
                  <span className={"wl-tag-blue"}>Goalscorer Odds</span>
                </div>
              </div>
              <div className={"text-center px-2"}>
                <span className={"wl-status-badge wl-status-live"}>Active</span>
              </div>
              <div className={"text-end ps-3 border-start border-secondary border-opacity-25"} style={{minWidth: "110px"}}>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Next event</div>
                <div className={"fw-medium text-white"} style={{fontSize: "9.5px"}}>Goal Alert</div>
                <div className={"text-muted"} style={{fontSize: "8.5px"}}>Live now</div>
              </div>
              <i className={"bi bi-three-dots-vertical text-muted ms-2"} style={{cursor: "pointer"}}></i>
            </div>

          </div>

        </div>

        
        <div className={"wl-empty-box"}>
          <i className={"bi bi-star text-muted display-6 mb-2 d-block"}></i>
          <div className={"fw-semibold text-white mb-1"} style={{fontSize: "13px"}}>Your watchlist is empty</div>
          <div className={"text-muted mb-3"} style={{fontSize: "9.5px"}}>Save matches, teams or players to monitor key events</div>
          <button className={"wl-btn-green"}>Explore Matches</button>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"d-flex flex-column gap-3"}>
          
          
          <div className={"wl-card"}>
            <div className={"fw-semibold text-white mb-0"} style={{fontSize: "11px"}}>Alert Rules</div>
            <div className={"text-muted mb-3"} style={{fontSize: "8.5px"}}>Create rules to get notified about important events</div>

            <div className={"d-flex flex-column gap-2 mb-3"}>
              <div className={"d-flex align-items-center justify-content-between"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-clock text-muted"}></i> Odds
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>Decimal odds &lt;= 2.20</span>
                  <div className={"form-check form-switch m-0 p-0"}>
                    <input className={"form-check-input ms-0"} type={"checkbox"} defaultChecked />
                  </div>
                </div>
              </div>

              <div className={"d-flex align-items-center justify-content-between"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-clock-history text-muted"}></i> Kickoff
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>24 hours before kickoff</span>
                  <div className={"form-check form-switch m-0 p-0"}>
                    <input className={"form-check-input ms-0"} type={"checkbox"} defaultChecked />
                  </div>
                </div>
              </div>

              <div className={"d-flex align-items-center justify-content-between"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-people text-muted"}></i> Lineup
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>Starting lineup out</span>
                  <div className={"form-check form-switch m-0 p-0"}>
                    <input className={"form-check-input ms-0"} type={"checkbox"} defaultChecked />
                  </div>
                </div>
              </div>

              <div className={"d-flex align-items-center justify-content-between"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-plus-lg text-muted"}></i> Injury
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>Any injury update</span>
                  <div className={"form-check form-switch m-0 p-0"}>
                    <input className={"form-check-input ms-0"} type={"checkbox"} defaultChecked />
                  </div>
                </div>
              </div>

              <div className={"d-flex align-items-center justify-content-between"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-cloud text-muted"}></i> Model Probability
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "8.5px"}}>Win probability change &gt;= 10%</span>
                  <div className={"form-check form-switch m-0 p-0"}>
                    <input className={"form-check-input ms-0"} type={"checkbox"} defaultChecked />
                  </div>
                </div>
              </div>
            </div>

            <a href={"#"} className={"text-success text-decoration-none fw-medium"} style={{fontSize: "10px"}}>+ Add Rule</a>
          </div>

          
          <div className={"wl-card"}>
            <div className={"fw-semibold text-white mb-0"} style={{fontSize: "11px"}}>Notification Preferences</div>
            <div className={"text-muted mb-3"} style={{fontSize: "8.5px"}}>Where and when you want to be notified</div>

            <div className={"d-flex flex-column gap-2"}>
              <div className={"d-flex align-items-center justify-content-between"} style={{cursor: "pointer"}}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-clock text-muted"}></i> Channels
                </span>
                <div className={"d-flex align-items-center gap-2 text-muted"}>
                  <i className={"bi bi-bell"}></i>
                  <i className={"bi bi-envelope"}></i>
                  <i className={"bi bi-phone"}></i>
                  <i className={"bi bi-slack"}></i>
                  <i className={"bi bi-chevron-right ms-1"} style={{fontSize: "9px"}}></i>
                </div>
              </div>

              <div className={"d-flex align-items-center justify-content-between pt-1"} style={{cursor: "pointer"}}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-moon text-muted"}></i> Quiet Hours
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>23:00 - 07:00</span>
                  <span className={"text-muted"} style={{fontSize: "9px"}}>Daily</span>
                  <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "9px"}}></i>
                </div>
              </div>
            </div>
          </div>

          
          <div className={"wl-card"}>
            <div className={"fw-semibold text-white mb-2"} style={{fontSize: "11px"}}>Alert History & Deduplication</div>

            <div className={"d-flex flex-column gap-2"}>
              <div className={"d-flex align-items-center justify-content-between"} style={{cursor: "pointer"}}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-clock text-muted"}></i>
                  <span>
                    <div>Alert History</div>
                    <div className={"text-muted"} style={{fontSize: "8px"}}>View recent alerts and activity</div>
                  </span>
                </span>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "9px"}}></i>
              </div>

              <div className={"d-flex align-items-center justify-content-between pt-1"} style={{cursor: "pointer"}}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-sliders text-muted"}></i>
                  <span>
                    <div>Deduplication</div>
                    <div className={"text-muted"} style={{fontSize: "8px"}}>Smart grouping of similar alerts</div>
                  </span>
                </span>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"text-success fw-medium"} style={{fontSize: "9px"}}>On</span>
                  <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "9px"}}></i>
                </div>
              </div>
            </div>
          </div>

          
          <div className={"wl-card"}>
            <div className={"fw-semibold text-white mb-0"} style={{fontSize: "11px"}}>Expired Items</div>
            <div className={"text-muted mb-2"} style={{fontSize: "8.5px"}}>Auto-remove watched events</div>

            <div className={"d-flex align-items-center justify-content-between pt-1"} style={{cursor: "pointer"}}>
              <span className={"text-white"} style={{fontSize: "10px"}}>Remove expired items</span>
              <div className={"d-flex align-items-center gap-2"}>
                <span className={"text-success"} style={{fontSize: "9px"}}>After 7 days</span>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "9px"}}></i>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    </main>
    
    
    
    
   

    




<Script src={"/assets/next/watchlist-boot.js"} strategy="afterInteractive" />
    </>
  );
}
