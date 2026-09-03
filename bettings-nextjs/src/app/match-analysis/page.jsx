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
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px" }}>
        <Link href={"/match-analysis/arsenal-vs-chelsea"} className={"btn btn-success btn-sm"} style={{ fontWeight: 600 }}>Open Myodin Analysis (Score ? Signal ? Value ? Risk) ?</Link>
      </div>
         <div className={"dashboard-card pb-2 mb-3"}>
      <div className={"sub-header-text mb-3"}>
        <i className={"bi bi-trophy me-1"}></i> Premier League &nbsp;•&nbsp; Matchday 36
      </div>

      <div className={"row align-items-center"}>
        
        <div className={"col-md-4 d-flex align-items-center gap-3"}>
          <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} className={"team-logo"} alt={"Arsenal"} />
          <div>
            <div className={"fs-5 fw-bold"}>Arsenal</div>
            <div className={"sub-header-text"}>4th &nbsp;•&nbsp; 64 pts</div>
          </div>
        </div>

        
        <div className={"col-md-4 text-center"}>
          <span className={"badge-live"}>LIVE</span>
          <div className={"match-score my-1"}>1 - 1</div>
          <div className={"match-timer"}>61:24</div>

          
          <div className={"timeline-container"}>
            <div className={"timeline-progress"}></div>
            
            <div className={"timeline-dot"} style={{left: "25%"}}></div>
            <div className={"timeline-label"} style={{left: "25%"}}>22' <i className={"bi bi-soccer-ball"}></i> Saka</div>
            
            <div className={"timeline-dot"} style={{left: "75%"}}></div>
            <div className={"timeline-label"} style={{left: "75%"}}>45+2' <i className={"bi bi-soccer-ball"}></i> Palmer</div>
          </div>
        </div>

        
        <div className={"col-md-4 d-flex align-items-center justify-content-end gap-3"}>
          <div className={"text-end"}>
            <div className={"fs-5 fw-bold"}>Chelsea</div>
            <div className={"sub-header-text"}>6th &nbsp;•&nbsp; 60 pts</div>
          </div>
          <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} className={"team-logo"} alt={"Chelsea"} />
          
          <div className={"ms-2"}>
            <div className={"event-id-box"}>
              <span>Unique event ID<br /><strong className={"text-light"}>EVT-PL-2024-25-003456</strong></span>
              <i className={"bi bi-copy"} style={{cursor: "pointer"}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
		<div className={"fb-dashboard-wrapper"}>
        <div className={"fb-main-container"}>
            
            

            
            <div className={"fb-content-grid"}>
                
                
                <div className={"fb-col-left"}>
                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Model Outcome Probabilities (live)</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        <div className={"fb-prob-display"}>
                            <div className={"fb-prob-item fb-team-home"}>
                                <span className={"fb-prob-label"}>Arsenal</span>
                                <span className={"fb-prob-value"}>46.8%</span>
                                <div className={"fb-prob-bar-bg"}><div className={"fb-prob-bar-fill"} style={{width: "46.8%"}}></div></div>
                            </div>
                            <div className={"fb-prob-item fb-draw"}>
                                <span className={"fb-prob-label"}>Draw</span>
                                <span className={"fb-prob-value"}>27.1%</span>
                                <div className={"fb-prob-bar-bg"}><div className={"fb-prob-bar-fill"} style={{width: "27.1%"}}></div></div>
                            </div>
                            <div className={"fb-prob-item fb-team-away"}>
                                <span className={"fb-prob-label"}>Chelsea</span>
                                <span className={"fb-prob-value"}>26.1%</span>
                                <div className={"fb-prob-bar-bg"}><div className={"fb-prob-bar-fill"} style={{width: "26.1%"}}></div></div>
                            </div>
                        </div>
                        <p className={"fb-card-footer"}>Normalized probability (sum = 100%)</p>
                    </section>

                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Key Factors Influencing the Model</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        <div className={"fb-factor-table"}>
                            <div className={"fb-ft-header"}>
                                <span>Factor</span>
                                <span>Impact</span>
                                <span>Score</span>
                            </div>
                            <div className={"fb-ft-row"}>
                                <span className={"fb-factor-name"}><i className={"far fa-calendar-alt fb-li-icon"}></i> Recent Form (last 5 matches)</span>
                                <span className={"fb-impact-tag fb-high"}>High</span>
                                <span className={"fb-score-dots fb-score-5"}>•••••</span>
                            </div>
                            <div className={"fb-ft-row"}>
                                <span className={"fb-factor-name"}><i className={"fas fa-home fb-li-icon"}></i> Home Advantage</span>
                                <span className={"fb-impact-tag fb-medium"}>Medium</span>
                                <span className={"fb-score-dots fb-score-4"}>••••</span>
                            </div>
                            <div className={"fb-ft-row"}>
                                <span className={"fb-factor-name"}><i className={"fas fa-user-md fb-li-icon"}></i> Injuries & Suspensions</span>
                                <span className={"fb-impact-tag fb-high"}>High</span>
                                <span className={"fb-score-dots fb-score-5"}>•••••</span>
                            </div>
                            <div className={"fb-ft-row"}>
                                <span className={"fb-factor-name"}><i className={"far fa-lightbulb fb-li-icon"}></i> Upcoming Fixtures (next 7 days)</span>
                                <span className={"fb-impact-tag fb-medium"}>Medium</span>
                                <span className={"fb-score-dots fb-score-3"}>•••</span>
                            </div>
                            <div className={"fb-ft-row"}>
                                <span className={"fb-factor-name"}><i className={"fas fa-cloud-sun fb-li-icon"}></i> Weather Conditions</span>
                                <span className={"fb-impact-tag fb-low"}>Low</span>
                                <span className={"fb-score-dots fb-score-2"}>••</span>
                            </div>
                        </div>
                    </section>
                </div>

                
                <div className={"fb-col-mid"}>
                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Fair Odds vs Market Odds</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        <div className={"fb-odds-table"}>
                            <div className={"fb-ot-header"}>
                                <span>Outcome</span>
                                <span>Fair Odds</span>
                                <span>Market Odds</span>
                                <span>Expected Value (EV)</span>
                            </div>
                            <div className={"fb-ot-row"}>
                                <span className={"fb-outcome-name"}>Arsenal</span>
                                <span>2.14</span>
                                <span>2.35</span>
                                <span className={"fb-ev-positive"}>+9.8%</span>
                            </div>
                            <div className={"fb-ot-row"}>
                                <span className={"fb-outcome-name"}>Draw</span>
                                <span>3.69</span>
                                <span>3.55</span>
                                <span className={"fb-ev-negative"}>-3.9%</span>
                            </div>
                            <div className={"fb-ot-row"}>
                                <span className={"fb-outcome-name"}>Chelsea</span>
                                <span>3.83</span>
                                <span>3.60</span>
                                <span className={"fb-ev-positive"}>+6.4%</span>
                            </div>
                        </div>
                        <p className={"fb-card-footer"}>EV = (Market / Fair Odds - 1) x 100%</p>
                    </section>

                    
                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Live Win Probability Timeline</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        
                        <div className={"fb-legend"}>
                            <span className={"fb-legend-item"}><span className={"fb-dot fb-dot-home"}></span> Arsenal</span>
                            <span className={"fb-legend-item"}><span className={"fb-dot fb-dot-draw"}></span> Draw</span>
                            <span className={"fb-legend-item"}><span className={"fb-dot fb-dot-away"}></span> Chelsea</span>
                        </div>

                        
                        <div className={"fb-chart-container"}>
                            <canvas id={"liveWinProbabilityChart"}></canvas>

                            
                            <div className={"fb-chart-team-badge fb-top-team"}>
                                <img src={"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"} alt={"Arsenal"} />
                                <span>Arsenal</span>
                            </div>
                            
                            <div className={"fb-chart-team-badge fb-bottom-team"}>
                                <img src={"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"} alt={"Chelsea"} />
                                <span>Chelsea</span>
                            </div>
                        </div>

                        <p className={"fb-card-footer"}>Probabilities evolve in real time based on match events.</p>
                    </section>
                </div>

                
                <div className={"fb-col-right"}>
                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Model Information</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                            <span className={"fb-ai-badge"}>AI</span>
                        </div>
                        <div className={"fb-info-list"}>
                            <div className={"fb-info-item"}><span className={"fb-info-label"}>Model Version</span><span className={"fb-info-value"}>MS-Football v2.7.3</span></div>
                            <div className={"fb-info-item"}><span className={"fb-info-label"}>Executed At</span><span className={"fb-info-value"}>May 11, 2025 &bull; 4:20:31 PM</span></div>
                            <div className={"fb-info-item"}><span className={"fb-info-label"}>Prediction Horizon</span><span className={"fb-info-value"}>90 minutes</span></div>
                            <div className={"fb-info-item"}><span className={"fb-info-label"}>Update Frequency</span><span className={"fb-info-value"}>Every 15 minutes</span></div>
                        </div>
                    </section>

                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Data Sources & Freshness</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        <div className={"fb-source-list"}>
                            <div className={"fb-sl-header"}>
                                <span>Source</span>
                                <span>Type</span>
                                <span>Last Update</span>
                            </div>
                            <div className={"fb-sl-row"}>
                                <span className={"fb-source-name"}>Opta Feed</span>
                                <span className={"fb-source-type"}>Official Data</span>
                                <span className={"fb-source-time fb-fresh"}>Just now <span className={"fb-fresh-dot"}></span></span>
                            </div>
                            <div className={"fb-sl-row"}>
                                <span className={"fb-source-name"}>Opta Lineups</span>
                                <span className={"fb-source-type"}>Official Data</span>
                                <span className={"fb-source-time"}>1 min ago <span className={"fb-stale-dot"}></span></span>
                            </div>
                            <div className={"fb-sl-row"}>
                                <span className={"fb-source-name"}>Myodin DB</span>
                                <span className={"fb-source-type"}>In-House Data</span>
                                <span className={"fb-source-time"}>3 min ago <span className={"fb-stale-dot"}></span></span>
                            </div>
                            <div className={"fb-sl-row"}>
                                <span className={"fb-source-name"}>Market Feed</span>
                                <span className={"fb-source-type"}>Market Data</span>
                                <span className={"fb-source-time"}>5 min ago <span className={"fb-stale-dot fb-warning"}></span></span>
                            </div>
                            <div className={"fb-sl-row"}>
                                <span className={"fb-source-name"}>MeteoLive</span>
                                <span className={"fb-source-type"}>Weather Data</span>
                                <span className={"fb-source-time"}>6 min ago <span className={"fb-stale-dot"}></span></span>
                            </div>
                        </div>
                        <button className={"fb-btn-link"}>View all data sources <i className={"fas fa-arrow-right"}></i></button>
                    </section>

                    <section className={"fb-card"}>
                        <div className={"fb-card-header"}>
                            <h2>Model Confidence & Explanation</h2>
                            <i className={"far fa-question-circle fb-help-icon"}></i>
                        </div>
                        <div>
                        <div className={"fb-conf-content mb-3 justify-content-between"}>
                            <div className={"fb-conf-score-area"}>
                                <div className={"fb-conf-label"}>Model Confidence</div>
                                <div className={"fb-conf-score"}>71%</div>
                                <div className={"fb-conf-rating"}>High</div>
                            </div>
                            <div className={"fb-conf-gauge-placeholder"}>
                                <svg className={"fb-gauge"} viewBox={"0 0 36 36"}>
                                    <path className={"fb-gauge-bg"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} />
                                    <path className={"fb-gauge-fill"} strokeDasharray={"71, 100"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} />
                                </svg>
                            </div>
                        </div>
                            <div className={"fb-conf-explanation"}>
                                <div className={"fb-conf-ex-label"}>Explanation (short)</div>
                                <p className={"fb-conf-text"}>Arsenal benefits from home advantage and strong recent form. Chelsea's attack remains threatening, keeping the match balanced.</p>
                            </div>
                        </div>
                        </section>
                    </div>
                    
                </div>
            </div>

            
            <div className={"fb-footer"}>
                <div className={"fb-stale-warning"}>
                    <div className={"fb-sw-icon-box"}><i className={"fas fa-exclamation-circle"}></i></div>
                    <div className={"fb-sw-text"}>
                        <strong>Stale Data Detected</strong>
                        <p>Some data sources are delayed. Predictions may be less reliable.</p>
                    </div>
                    <div className={"fb-sw-meta"}>
                        <div className={"fb-oldest-label"}>Oldest update</div>
                        <div className={"fb-oldest-time"}>12 min ago</div>
                    </div>
                    <button className={"fb-btn-retry"}><i className={"fas fa-sync-alt"}></i> Retry Now</button>
                </div>
            </div>
        </div>
    


	</main>
	











<Script src={"/assets/next/match-analysis-boot.js"} strategy="afterInteractive" />
    </>
  );
}
