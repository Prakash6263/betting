import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />



<main className={"main-content"} id={"mainContent"}>
    <div className={"schedule-preview"}>
      <div className={"schedule-toolbar"}><div className={"view-switch"}><button data-view={"day"}>Day</button><button className={"active"} data-view={"week"}>Week</button><button data-view={"month"}>Month</button><button data-view={"agenda"}>Agenda</button></div><select className={"timezone-select"}><option>◎ Europe/Brussels</option><option>◎ Asia/Calcutta</option><option>◎ UTC</option></select></div>
      <div className={"schedule-filters"}><select><option>⚽ Football</option><option>🏀 Basketball</option><option>🎾 Tennis</option></select><select><option>♛ Premier League</option><option>UEFA Champions League</option><option>LaLiga</option></select><select><option>🔴 Arsenal</option><option>Chelsea</option><option>Manchester City</option></select><select><option>All statuses</option><option>Upcoming</option><option>Live</option><option>Finished</option></select></div>
      <div className={"schedule-datebar"}><button id={"schedulePrev"}>‹</button><button id={"scheduleToday"}>Today</button><button id={"scheduleNext"}>›</button><b id={"scheduleDate"}>▣　May 12 – 18, 2025　</b><span>🔗 Sync URL　<span className={"sync-dot"}>●</span></span></div>
      <div className={"schedule-columns"}><section><div className={"schedule-grid"} id={"scheduleGrid"}></div><div className={"schedule-legend"}><span className={"live-dot"}>●</span> Live <span className={"upcoming-dot"}>●</span> Upcoming <span className={"finished-dot"}>●</span> Finished <span className={"postponed-dot"}>●</span> Postponed <span className={"event-dot"}>●</span> Team event</div><small className={"schedule-foot"}>All times in Europe/Brussels　　● Data automatically synced</small></section><aside className={"schedule-detail"}><em>UPCOMING</em><div className={"fixture-teams"}><span>🔴<b>Arsenal</b></span><strong>VS</strong><span>🔵<b>Chelsea</b></span></div><p>♛　Premier League</p><p>▣　Thursday, May 15, 2025</p><p>◷　21:00 (Europe/Brussels)</p><p>▤　Emirates Stadium, London</p><p>☀　12°C · Partly cloudy</p><hr /><small>COMPETITION</small><p>Premier League · Matchday 37</p><small>STATUS</small><p className={"status-upcoming"}>● Upcoming</p><small>NOTES</small><p>—</p><div className={"detail-actions"}><button>▣　Add to calendar　</button><button>♧　Reminder　　2 hours before　</button></div><Link className={"analysis-link"} href={"/match-analysis/arsenal-vs-chelsea"}>Myodin Analysis &#8250;</Link></aside></div>
    </div>
    
        
        <div className={"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4"}>
            <div>
                <span className={"page-badge"}>MATCH SCHEDULE</span>
        <h1 className={"page-title"}>Global Match Calendar</h1>
        <p className={"page-subtitle"}>Track schedules, broadcast channels, referee data, and venue weather conditions.</p>
                
            </div>
            <div className={"d-flex align-items-center gap-2 bg-dark p-2 rounded-3 border border-secondary"}>
                <button className={"btn btn-sm btn-outline-light"} id={"prevMonthBtn"}><i className={"bi bi-chevron-left"}></i></button>
                <span className={"fw-bold fs-6 px-3"} id={"currentMonthYear"}>JULY 2026</span>
                <button className={"btn btn-sm btn-outline-light"} id={"nextMonthBtn"}><i className={"bi bi-chevron-right"}></i></button>
            </div>
        </div>

        
        <div className={"calendar-container mb-4"} id={"calendarStrip"}>
            
        </div>

        
        <div className={"panel-card mb-4 py-3"}>
            <div className={"row g-3 align-items-center"}>
                <div className={"col-md-3"}>
                    <select className={"form-select form-select-custom"}>
                        <option selected>All Competitions</option>
                        <option>UEFA Champions League</option>
                        <option>Premier League</option>
                        <option>La Liga</option>
                        <option>Serie A</option>
                    </select>
                </div>
                <div className={"col-md-3"}>
                    <select className={"form-select form-select-custom"}>
                        <option selected>All Statuses</option>
                        <option>Scheduled / Upcoming</option>
                        <option>Live Now</option>
                        <option>Finished</option>
                    </select>
                </div>
                <div className={"col-md-3"}>
                    <select className={"form-select form-select-custom"}>
                        <option selected>Sort by Kick-off Time</option>
                        <option>Sort by High xG Potential</option>
                        <option>Sort by AI Confidence</option>
                    </select>
                </div>
                <div className={"col-md-3 text-md-end"}>
                    <button className={"btn btn-sm btn-outline-success"}><i className={"bi bi-funnel me-1"}></i> Advanced Filters</button>
                </div>
            </div>
        </div>

        
        <div className={"row"}>
            <div className={"col-12"}>

                
                <div className={"match-detail-card"} style={{borderLeft: "4px solid #ef4444"}}>
                    <div className={"league-header"}>
                        <div className={"league-title"}>
                            <i className={"bi bi-trophy-fill text-warning"}></i> Europe • UEFA Champions League
                        </div>
                        <span className={"badge badge-live px-3 py-2 fs-7 fw-bold"}><i className={"bi bi-broadcast me-1"}></i> LIVE 68'</span>
                    </div>

                    <div className={"row align-items-center mb-3"}>
                        <div className={"col-md-4 text-center text-md-start mb-3 mb-md-0"}>
                            <div className={"d-flex align-items-center gap-3"}>
                                <div className={"bg-dark p-2 rounded border border-secondary text-center"} style={{width: "42px", height: "42px"}}>
                                    <i className={"bi bi-shield-shaded fs-5 text-info"}></i>
                                </div>
                                <div>
                                    <div className={"team-title"}>Manchester City</div>
                                    <div className={"d-flex gap-1 mt-1"}>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-d"}>D</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-w"}>W</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col-md-4 text-center my-2 my-md-0"}>
                            <div className={"display-6 fw-bold text-white"}>2 - 1</div>
                            <small className={"text-danger fw-bold fs-7"}>Second Half • 68'</small>
                        </div>

                        <div className={"col-md-4 text-center text-md-end"}>
                            <div className={"d-flex align-items-center justify-content-md-end gap-3"}>
                                <div className={"text-md-end"}>
                                    <div className={"team-title"}>Inter Milan</div>
                                    <div className={"d-flex gap-1 justify-content-md-end mt-1"}>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-l"}>L</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-d"}>D</span>
                                    </div>
                                </div>
                                <div className={"bg-dark p-2 rounded border border-secondary text-center"} style={{width: "42px", height: "42px"}}>
                                    <i className={"bi bi-shield-fill-x fs-5 text-primary"}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row g-2 pt-3 border-top border-secondary"}>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-geo-alt text-success"}></i> Venue: <strong>Etihad Stadium</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-person-badge text-info"}></i> Referee: <strong>S. Marciniak</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-cloud-rain text-primary"}></i> Weather: <strong>17°C Light Rain</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-tv text-warning"}></i> Broadcast: <strong>TNT Sports 1</strong></div>
                        </div>
                    </div>
                </div>

                
                <div className={"match-detail-card"}>
                    <div className={"league-header"}>
                        <div className={"league-title"}>
                            <i className={"bi bi-trophy text-secondary"}></i> Spain • La Liga
                        </div>
                        <span className={"badge bg-dark text-success border border-success px-3 py-2 fs-7 fw-bold"}>TODAY • 21:00 CEST</span>
                    </div>

                    <div className={"row align-items-center mb-3"}>
                        <div className={"col-md-4 text-center text-md-start mb-3 mb-md-0"}>
                            <div className={"d-flex align-items-center gap-3"}>
                                <div className={"bg-dark p-2 rounded border border-secondary text-center"} style={{width: "42px", height: "42px"}}>
                                    <i className={"bi bi-shield-fill text-warning fs-5"}></i>
                                </div>
                                <div>
                                    <div className={"team-title"}>Real Madrid</div>
                                    <div className={"d-flex gap-1 mt-1"}>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-l"}>L</span>
                                        <span className={"form-badge form-w"}>W</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col-md-4 text-center my-2 my-md-0"}>
                            <div className={"fs-4 fw-bold text-success"}>VS</div>
                            <small className={"text-secondary"}>Expected Value (+EV): <strong className={"text-white"}>+14.2%</strong></small>
                        </div>

                        <div className={"col-md-4 text-center text-md-end"}>
                            <div className={"d-flex align-items-center justify-content-md-end gap-3"}>
                                <div className={"text-md-end"}>
                                    <div className={"team-title"}>Villarreal</div>
                                    <div className={"d-flex gap-1 justify-content-md-end mt-1"}>
                                        <span className={"form-badge form-d"}>D</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-l"}>L</span>
                                        <span className={"form-badge form-w"}>W</span>
                                        <span className={"form-badge form-d"}>D</span>
                                    </div>
                                </div>
                                <div className={"bg-dark p-2 rounded border border-secondary text-center"} style={{width: "42px", height: "42px"}}>
                                    <i className={"bi bi-shield-slash text-warning fs-5"}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row g-2 pt-3 border-top border-secondary"}>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-geo-alt text-success"}></i> Venue: <strong>Santiago Bernabéu</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-person-badge text-info"}></i> Referee: <strong>J. Munuera</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-sun text-warning"}></i> Weather: <strong>24°C Clear Sky</strong></div>
                        </div>
                        <div className={"col-md-3 col-6"}>
                            <div className={"info-pill"}><i className={"bi bi-bandaid text-danger"}></i> Key Injuries: <strong>3 Players Out</strong></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
    











<Script src={"/assets/next/match-schedule-boot.js"} strategy="afterInteractive" />
    </>
  );
}
