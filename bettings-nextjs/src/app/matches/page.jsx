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
        <div className={"shared-header-title"}>MATCHES</div>

        
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

    <div className={"matches-redesign"}>
      <div className={"matches-toolbar"}>
        <label className={"match-search"}><i className={"fa-solid fa-magnifying-glass"}></i><input type={"search"} placeholder={"Search for a team, player, competition..."} /></label>
        <button className={"saved-view"}><i className={"fa-regular fa-star"}></i><span>Saved views<br /><b>Default view</b></span><i className={"fa-solid fa-chevron-down"}></i></button>
      </div>
      <div className={"match-filters"}>
        <label>⚽ Sport<select><option>Football</option><option>Basketball</option><option>Tennis</option></select></label>
        <label>◉ Country<select><option>All</option><option>England</option><option>Spain</option><option>Germany</option></select></label>
        <label>♧ League<select><option>All</option><option>Premier League</option><option>LaLiga</option><option>Bundesliga</option></select></label>
        <label>▣ Date<select><option>04/24/2025 – 04/30/2025</option><option>Today</option><option>Next 7 days</option></select></label>
        <label>◉ Status<select><option>All</option><option>Live</option><option>Upcoming</option><option>Finished</option></select></label>
        <label>♧ Market<select><option>All</option><option>1X2</option><option>Over/Under</option><option>BTTS</option></select></label>
        <button className={"filter-more"}><i className={"fa-solid fa-filter"}></i> More filters</button>
      </div>
      <div className={"matches-layout"}>
        <section className={"matches-table-card"}>
          <div className={"match-tabs"}><button className={"active"}>Live (5)</button><button>Upcoming (42)</button><button>Finished (128)</button></div>
          <div className={"table-scroll"}><table><thead><tr><th>☆</th><th>Event ID</th><th>Match</th><th>Competition</th><th>Venue</th><th>Start (Local)</th><th>Status</th><th>Score</th><th>Markets</th><th>Source</th><th>Action</th></tr></thead><tbody>
          <tr><td>☆</td><td>EFT-20250428-001</td><td><b>🔴 Arsenal</b><br /><b>🔵 Chelsea</b></td><td>♛ Premier League<br /><small>Matchday 34</small></td><td>▣ Emirates Stadium<br /><small>London, ENG</small></td><td>Apr 28, 2025<br />21:00</td><td><em className={"live"}>LIVE</em><br />61'</td><td><b>1 - 1</b></td><td>▥ 142</td><td><span className={"source"}>●</span> Opta Feed<br /><small>2 min ago</small></td><td><Link className={"analysis-btn"} href={"/match-analysis/arsenal-vs-chelsea"}>Myodin Analysis &#8250;</Link></td></tr>
          <tr><td>☆</td><td>EFT-20250428-002</td><td><b>🔵 Manchester City</b><br /><b>🟡 Aston Villa</b></td><td>♛ Premier League<br /><small>Matchday 34</small></td><td>▣ Etihad Stadium<br /><small>Manchester, ENG</small></td><td>Apr 28, 2025<br />21:00</td><td><em className={"live"}>LIVE</em><br />63'</td><td><b>2 - 0</b></td><td>▥ 138</td><td><span className={"source"}>●</span> Opta Feed<br /><small>1 min ago</small></td><td><button className={"analysis-btn"}>View analysis ›</button></td></tr>
          <tr><td>☆</td><td>EFT-20250428-003</td><td><b>⚪ Real Madrid</b><br /><b>🔵 Real Sociedad</b></td><td>◈ LaLiga<br /><small>Matchday 33</small></td><td>▣ Santiago Bernabéu<br /><small>Madrid, ESP</small></td><td>Apr 28, 2025<br />22:00</td><td><em className={"live"}>LIVE</em><br />15'</td><td><b>0 - 0</b></td><td>▥ 126</td><td><span className={"source"}>●</span> Opta Feed<br /><small>3 min ago</small></td><td><button className={"analysis-btn"}>View analysis ›</button></td></tr>
          <tr><td>☆</td><td>EFT-20250428-004</td><td><b>🔴 Bayern Munich</b><br /><b>🟡 Borussia Dortmund</b></td><td>▣ Bundesliga<br /><small>Matchday 31</small></td><td>▣ Allianz Arena<br /><small>Munich, GER</small></td><td>Apr 28, 2025<br />20:30</td><td><em className={"live"}>LIVE</em><br />HT</td><td><b>1 - 0</b></td><td>▥ 132</td><td><span className={"source"}>●</span> StatsBomb<br /><small>5 min ago</small></td><td><button className={"analysis-btn"}>View analysis ›</button></td></tr>
          <tr><td>☆</td><td>EFT-20250428-005</td><td><b>🔵 Paris Saint-Germain</b><br /><b>🔵 Marseille</b></td><td>◈ Ligue 1<br /><small>Matchday 31</small></td><td>▣ Parc des Princes<br /><small>Paris, FRA</small></td><td>Apr 28, 2025<br />20:45</td><td><em className={"live"}>LIVE</em><br />76'</td><td><b>3 - 1</b></td><td>▥ 120</td><td><span className={"source"}>●</span> Opta Feed<br /><small>2 min ago</small></td><td><button className={"analysis-btn"}>View analysis ›</button></td></tr>
          </tbody></table></div>
          <h3 className={"group-title"}>Upcoming (42)</h3><div className={"upcoming-row"}><b>🔴 Liverpool<br />⚪ Tottenham Hotspur</b><span>Premier League<br /><small>Apr 29, 2025 · 21:00</small></span><em>UPCOMING</em><b>–</b><button className={"analysis-btn"}>View analysis ›</button></div><div className={"upcoming-row"}><b>🔴 AC Milan<br />🔵 Inter Milan</b><span>Serie A<br /><small>Apr 29, 2025 · 20:45</small></span><em>UPCOMING</em><b>–</b><button className={"analysis-btn"}>View analysis ›</button></div>
          <div className={"pagination"}><button>‹</button><button className={"selected"}>1</button><button>2</button><button>3</button><button>4</button><button>5</button><span>…</span><button>15</button><button>›</button><label>Show <select><option>25</option><option>50</option></select> per page</label></div>
        </section>
        <aside className={"states-card"}><h3>STATES &amp; EXAMPLES</h3><b>Loading state</b><div className={"state-box"}><i className={"fa-solid fa-spinner fa-spin"}></i>Loading matches...<small>Please wait</small></div><b>Empty state</b><div className={"state-box"}><i className={"fa-regular fa-folder-open"}></i>No matches found<small>Try adjusting your filters</small><button>Clear filters</button></div><b>API error state</b><div className={"state-box error"}><i className={"fa-solid fa-circle-exclamation"}></i>Unable to load matches<small>Please try again later</small><button>↻ Retry</button></div><b>Offline state</b><div className={"state-box"}><i className={"fa-solid fa-cloud-slash"}></i>You are offline<small>Check your connection</small></div><small>Last successful update<br />Apr 28, 2025 – 20:58</small><span className={"operational"}>● All systems operational</span></aside>
      </div>
    </div>
		
        <span className={"page-badge"}>MARKET DISCOVERY</span>
        <h1 className={"page-title"}>Match explorer</h1>
        <p className={"page-subtitle"}>Follow estimated worldwide betting activity before the line closes.</p>


        
        <div className={"filter-card"}>
            <div className={"row g-2 align-items-center"}>
                <div className={"col-lg-5"}>
                    <div className={"position-relative"}>
                        <i className={"bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"}></i>
                        <input type={"text"} className={"form-control form-control-custom ps-5"} placeholder={"Search club, competition or country"} />
                    </div>
                </div>

                <div className={"col-md-3 col-lg-2"}>
                    <select className={"form-select form-select-custom"}>
                        <option selected>All leagues</option>
                        <option>Champions League</option>
                        <option>Premier League</option>
                        <option>La Liga</option>
                    </select>
                </div>

                <div className={"col-md-3 col-lg-2"}>
                    <select className={"form-select form-select-custom"}>
                        <option selected>Next 7 days</option>
                        <option>Today</option>
                        <option>Tomorrow</option>
                    </select>
                </div>

                <div className={"col-md-6 col-lg-3 d-flex gap-2 justify-content-lg-end"}>
                    <button className={"btn-filter-action"}>
                        <i className={"bi bi-sliders"}></i> Filters
                    </button>
                    <button className={"btn-accent"}>
                        <i className={"bi bi-star-fill"}></i> Saved view
                    </button>
                </div>
            </div>
        </div>


        
        <div className={"row g-4"}>

            
            <div className={"col-lg-9"}>
                <div className={"panel-card"}>
                    <div className={"panel-header"}>
                        <div>
                            <h2 className={"panel-title"}>High-interest fixtures</h2>
                            <div className={"panel-sub"}>Sorted by estimated market volume</div>
                        </div>
                        <span className={"badge-count"} style={{fontSize: "12px", padding: "4px 10px"}}>36 MATCHES</span>
                    </div>

                    <div className={"match-list"}>
                        
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>20:00</div>
                                <div className={"match-day"}>TODAY</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Spain • La Liga</div>
                                <div className={"teams-title"}>Real Madrid <span className={"text-secondary font-weight-normal fs-6"}>vs</span> FC Barcelona</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€188–226M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>88%</div>
                            </div>
                            <div>
                                <a href={"myodin-analysis.html"} className={"action-arrow-btn"} aria-label={"Open Myodin match analysis"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                        
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>21:15</div>
                                <div className={"match-day"}>TODAY</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>England • Premier League</div>
                                <div className={"teams-title"}>Manchester City <span className={"text-secondary font-weight-normal fs-6"}>vs</span> Arsenal</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€142–171M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>84%</div>
                            </div>
                            <div>
                                <a href={"myodin-analysis.html"} className={"action-arrow-btn"} aria-label={"Open Myodin match analysis"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                        
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>18:45</div>
                                <div className={"match-day"}>TOMORROW</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Europe • Champions League</div>
                                <div className={"teams-title"}>Paris Saint-Germain <span className={"text-secondary font-weight-normal fs-6"}>vs</span> Bayern Munich</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€113–139M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>86%</div>
                            </div>
                            <div>
                                <a href={"#"} className={"action-arrow-btn"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                        
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>19:30</div>
                                <div className={"match-day"}>TOMORROW</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Italy • Serie A</div>
                                <div className={"teams-title"}>Inter Milan <span className={"text-secondary font-weight-normal fs-6"}>vs</span> Juventus</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€89–108M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>79%</div>
                            </div>
                            <div>
                                <a href={"#"} className={"action-arrow-btn"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                        
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>16:00</div>
                                <div className={"match-day"}>SAT 02</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Germany • Bundesliga</div>
                                <div className={"teams-title"}>Bayer Leverkusen <span className={"text-secondary font-weight-normal fs-6"}>vs</span> Dortmund</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€64–78M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>76%</div>
                            </div>
                            <div>
                                <a href={"#"} className={"action-arrow-btn"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>
                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>20:00</div>
                                <div className={"match-day"}>TODAY</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Spain • La Liga</div>
                                <div className={"teams-title"}>Real Madrid <span className={"text-secondary font-weight-normal fs-6"}>vs</span> FC Barcelona</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€188–226M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>88%</div>
                            </div>
                            <div>
                                <a href={"#"} className={"action-arrow-btn"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                        <div className={"match-row"}>
                            <div className={"match-time-col"}>
                                <div className={"match-time"}>18:45</div>
                                <div className={"match-day"}>TOMORROW</div>
                            </div>
                            <div className={"match-meta-col"}>
                                <div className={"league-tag"}>Europe • Champions League</div>
                                <div className={"teams-title"}>Paris Saint-Germain <span className={"text-secondary font-weight-normal fs-6"}>vs</span> Bayern Munich</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>ESTIMATED VOLUME</div>
                                <div className={"stat-value"}>€113–139M</div>
                            </div>
                            <div className={"match-stat-col"}>
                                <div className={"stat-label"}>MODEL CONFIDENCE</div>
                                <div className={"stat-value green"}>86%</div>
                            </div>
                            <div>
                                <a href={"#"} className={"action-arrow-btn"}>
                                    <i className={"bi bi-arrow-right"}></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            
            <div className={"col-lg-3"}>
                <div className={"d-flex flex-column gap-4"}>

                    
                    <div className={"panel-card"}>
                        <div className={"panel-header mb-3"}>
                            <div>
                                <h2 className={"panel-title"}>Live signals</h2>
                                <div className={"panel-sub"}>Movements worth watching now</div>
                            </div>
                        </div>

                        <div className={"signal-item"}>
                            <div className={"signal-icon"}>
                                <i className={"bi bi-arrow-down-short fs-5"}></i>
                            </div>
                            <div className={"signal-title"}>El Clásico: demand spike</div>
                            <div className={"signal-desc"}>Social and search signals grew 14% in the last hour.</div>
                        </div>

                        <div className={"signal-item"}>
                            <div className={"signal-icon"} style={{background: "rgba(14, 165, 233, 0.15)", color: "#0ea5e9"}}>
                                <i className={"bi bi-arrow-down-short fs-5"}></i>
                            </div>
                            <div className={"signal-title"}>Arsenal price shortened</div>
                            <div className={"signal-desc"}>Opening odds fell from 3.10 to 2.94 across consensus books.</div>
                        </div>

                        <div className={"signal-item"}>
                            <div className={"signal-icon"} style={{background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6"}}>
                                <i className={"bi bi-droplet"}></i>
                            </div>
                            <div className={"signal-title"}>Liquidity concentration</div>
                            <div className={"signal-desc"}>More than 41% of observable exchange depth sits on home win.</div>
                        </div>
                    </div>


                    
                    <div className={"panel-card"}>
                        <div className={"panel-header mb-1"}>
                            <div>
                                <h2 className={"panel-title"}>Today by the numbers</h2>
                            </div>
                        </div>

                        <div className={"d-flex justify-content-between align-items-end"}>
                            <div>
                                <div className={"big-number"}>€524M</div>
                                <div className={"panel-sub"}>est. total volume</div>
                            </div>
                            <div className={"text-end"}>
                                <span className={"fs-5 fw-bold text-success"}>+16%</span>
                                <div className={"panel-sub"}>vs avg. Tuesday</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
	</main>
	





<Script src={"/assets/next/matches-boot.js"} strategy="afterInteractive" />
    </>
  );
}
