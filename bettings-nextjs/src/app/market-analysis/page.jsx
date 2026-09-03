import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />



<main className={"main-content"} id={"mainContent"}>
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
              <span>Unique event ID<br /><strong className={"text-light"}>EVT-FOOT-20458</strong></span>
              <i className={"bi bi-copy"} style={{cursor: "pointer"}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className={"d-flex dashboard-card justify-content-between align-items-center mb-3"}>
      <div className={"d-flex align-items-center gap-2"}>
        <span className={"sub-header-text"}>Market</span>
        <select className={"filter-select"}><option>1X2</option></select>

        <span className={"sub-header-text ms-2"}>Period</span>
        <select className={"filter-select"}><option>Full Time</option></select>

        <span className={"sub-header-text ms-2"}>Country</span>
        <select className={"filter-select"}><option>All</option></select>

        <span className={"sub-header-text ms-2"}>Odds format</span>
        <select className={"filter-select"}><option>Decimal</option></select>

        <span className={"sub-header-text ms-2"}>Operator</span>
        <select className={"filter-select"}><option>All</option></select>

        <button className={"btn btn-sm btn-outline-success ms-2"}>Reset filters</button>
      </div>

      
    </div>

    
    <div className={"dashboard-card mb-3 d-flex justify-content-between gap-2"}>
        <div className={"d-flex gap-2"}>
            <div className={"d-flex gap-2 border-right"}>
      <i className={"bi bi-exclamation-circle warning-icon"}></i>
      <strong style={{color: "var(--accent-yellow)"}}>Market status: Suspended</strong>
     </div>
      <div>
        
        <div className={"sub-header-text"}>Trading is currently suspended for this market. Odds may be stale or unavailable with some operators.</div>
      </div>
      </div>
      <div className={"d-flex gap-2"}>
        <button className={"btn btn-sm btn-outline-success"}><i className={"bi bi-bell"}></i> Create price alert</button>
        <button className={"btn btn-sm btn-outline-success"}><i className={"bi bi-star"}></i> Add to watchlist</button>
      </div>
    </div>

    
    <div className={"row g-3"}>
      
      
      <div className={"col-lg-8"}>
        
        
        <div className={"dashboard-card"}>
          <div className={"d-flex justify-content-between align-items-center mb-2"}>
            <div className={"fw-bold"}>1X2 - Full Time <span className={"sub-header-text ms-2"}>Best prices highlighted <i className={"bi bi-info-circle"}></i></span></div>
          </div>

          <div className={"table-responsive"}>
            <table className={"table table-custom text-center align-middle"}>
              <thead>
                <tr>
                  <th className={"text-start"}>Operator</th>
                  <th colspan={"2"}>Arsenal (1)</th>
                  <th colspan={"2"}>Draw (X)</th>
                  <th colspan={"2"}>Chelsea (2)</th>
                  <th>Payout <i className={"bi bi-info-circle"}></i></th>
                  <th>Margin</th>
                </tr>
                <tr style={{fontSize: "9px", color: "var(--text-muted)"}}>
                  <th></th>
                  <th>Odds</th><th>Implied %</th>
                  <th>Odds</th><th>Implied %</th>
                  <th>Odds</th><th>Implied %</th>
                  <th></th><th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"text-start"}>
                    <div className={"bookmaker-badge"}>
                      <span className={"bm-icon bg-success text-black"}>b365</span> bet365
                    </div>
                  </td>
                  <td><span className={"best-odds-highlight"}>2.10</span></td>
                  <td className={"text-muted"}>47.62%</td>
                  <td>3.40</td>
                  <td className={"text-muted"}>29.41%</td>
                  <td>3.30</td>
                  <td className={"text-muted"}>23.81%</td>
                  <td>96.84%</td>
                  <td>3.16%</td>
                </tr>
                <tr>
                  <td className={"text-start"}>
                    <div className={"bookmaker-badge"}>
                      <span className={"bm-icon bg-warning text-black"}>P</span> Pinnacle
                    </div>
                  </td>
                  <td>2.08</td>
                  <td className={"text-muted"}>48.08%</td>
                  <td>3.36</td>
                  <td className={"text-muted"}>29.78%</td>
                  <td><span className={"best-odds-highlight"}>3.32</span></td>
                  <td className={"text-muted"}>22.14%</td>
                  <td>98.00%</td>
                  <td>2.00%</td>
                </tr>
                <tr>
                  <td className={"text-start"}>
                    <div className={"bookmaker-badge"}>
                      <span className={"bm-icon bg-warning text-black"}>BF</span> Betfair Exchange
                    </div>
                  </td>
                  <td>2.12</td>
                  <td className={"text-muted"}>47.17%</td>
                  <td>3.44</td>
                  <td className={"text-muted"}>29.07%</td>
                  <td>3.36</td>
                  <td className={"text-muted"}>23.76%</td>
                  <td>99.30%</td>
                  <td>0.70%</td>
                </tr>
                <tr>
                  <td className={"text-start"}>
                    <div className={"bookmaker-badge"}>
                      <span className={"bm-icon bg-success text-white"}>U</span> Unibet
                    </div>
                  </td>
                  <td>2.07</td>
                  <td className={"text-muted"}>48.32%</td>
                  <td>3.35</td>
                  <td className={"text-muted"}>29.87%</td>
                  <td>3.25</td>
                  <td className={"text-muted"}>22.99%</td>
                  <td>97.18%</td>
                  <td>2.82%</td>
                </tr>
                <tr>
                  <td className={"text-start"}>
                    <div className={"bookmaker-badge"}>
                      <span className={"bm-icon bg-primary text-white"}>WH</span> William Hill
                    </div>
                  </td>
                  <td>2.05</td>
                  <td className={"text-muted"}>48.78%</td>
                  <td>3.30</td>
                  <td className={"text-muted"}>30.30%</td>
                  <td>3.20</td>
                  <td className={"text-muted"}>23.22%</td>
                  <td>97.69%</td>
                  <td>2.31%</td>
                </tr>
                
                <tr style={{borderTop: "2px solid var(--card-border)", fontWeight: 600}}>
                  <td className={"text-start"}>Market average</td>
                  <td>2.08</td>
                  <td className={"text-muted"}>47.99%</td>
                  <td>3.37</td>
                  <td className={"text-muted"}>29.69%</td>
                  <td>3.29</td>
                  <td className={"text-muted"}>22.32%</td>
                  <td>97.40%</td>
                  <td>2.60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div className={"dashboard-card"}>
          <div className={"d-flex justify-content-between align-items-center mb-3"}>
            <div className={"fw-bold"}>Odds history (24h) <i className={"bi bi-info-circle ms-1 text-muted"}></i></div>
            <div className={"d-flex gap-3 text-muted"} style={{fontSize: "11px"}}>
              <span><i className={"bi bi-dash-lg"} style={{color: "#ff4d4d"}}></i> Arsenal (1)</span>
              <span><i className={"bi bi-dash-lg"} style={{color: "#a0aec0"}}></i> Draw (X)</span>
              <span><i className={"bi bi-dash-lg"} style={{color: "#29b6f6"}}></i> Chelsea (2)</span>
            </div>
          </div>

          <div className={"chart-container"}>
            <canvas id={"oddsChart"}></canvas>
          </div>
        </div>

      </div>

      
      <div className={"col-lg-4"}>
        
        
        <div className={"dashboard-card"}>
          <div className={"fw-bold mb-3"}>Fair odds vs market consensus <i className={"bi bi-info-circle text-muted"}></i></div>
          <div className={"table-responsive"}>
          <table className={"table table-custom text-center"}>
            <thead>
              <tr>
                <th className={"text-start"}>Outcome</th>
                <th>Fair odds</th>
                <th>Market consensus</th>
                <th>Divergence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"text-start"}>Arsenal (1)</td>
                <td>2.05</td>
                <td>2.08</td>
                <td style={{color: "var(--accent-red)"}}>+1.46%</td>
              </tr>
              <tr>
                <td className={"text-start"}>Draw (X)</td>
                <td>3.45</td>
                <td>3.37</td>
                <td style={{color: "var(--accent-green)"}}>-2.32%</td>
              </tr>
              <tr>
                <td className={"text-start"}>Chelsea (2)</td>
                <td>3.40</td>
                <td>3.29</td>
                <td style={{color: "var(--accent-green)"}}>-3.24%</td>
              </tr>
            </tbody>
          </table>
      </div>
        </div>

        
        <div className={"dashboard-card"}>
          <div className={"fw-bold mb-3"}>Divergence alerts <i className={"bi bi-info-circle text-muted"}></i></div>
          
          <div className={"d-flex align-items-center justify-content-between mb-2"}>
            <div className={"d-flex align-items-center gap-2"}>
              <i className={"bi bi-arrow-up text-danger"}></i>
              <span><strong>Arsenal (1)</strong> <span className={"sub-header-text"}>Market price is 1.46% above fair odds</span></span>
            </div>
            <span className={"badge-alert-high"}>High</span>
          </div>

          <div className={"d-flex align-items-center justify-content-between"}>
            <div className={"d-flex align-items-center gap-2"}>
              <i className={"bi bi-arrow-down text-success"}></i>
              <span><strong>Chelsea (2)</strong> <span className={"sub-header-text"}>Market price is 3.24% below fair odds</span></span>
            </div>
            <span className={"badge-alert-medium"}>Medium</span>
          </div>
        </div>

        
        <div className={"dashboard-card"}>
          <div className={"fw-bold mb-3"}>Source freshness & status <i className={"bi bi-info-circle text-muted"}></i></div>
          <div className={"table-responsive"}>
          <table className={"table table-custom text-center align-middle"}>
            <thead>
              <tr>
                <th className={"text-start"}>Operator</th>
                <th>Last update</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"text-start"}><span className={"bm-icon bg-success text-black me-1"}>b365</span> bet365</td>
                <td className={"text-muted"}>12 sec ago</td>
                <td><span className={"status-dot dot-live me-1"}></span> Live</td>
              </tr>
              <tr>
                <td className={"text-start"}><span className={"bm-icon bg-warning text-black me-1"}>P</span> Pinnacle</td>
                <td className={"text-muted"}>18 sec ago</td>
                <td><span className={"status-dot dot-live me-1"}></span> Live</td>
              </tr>
              <tr>
                <td className={"text-start"}><span className={"bm-icon bg-warning text-black me-1"}>BF</span> Betfair Exchange</td>
                <td className={"text-muted"}>35 sec ago</td>
                <td><span className={"status-dot dot-delayed me-1"}></span> Delayed</td>
              </tr>
              <tr>
                <td className={"text-start"}><span className={"bm-icon bg-success text-white me-1"}>U</span> Unibet</td>
                <td className={"text-muted"}>1 min 12 sec ago</td>
                <td><span className={"status-dot dot-delayed me-1"}></span> Delayed</td>
              </tr>
              <tr>
                <td className={"text-start"}><span className={"bm-icon bg-primary text-white me-1"}>WH</span> William Hill</td>
                <td className={"text-muted"}>2 min 05 sec ago</td>
                <td><span className={"status-dot dot-degraded me-1"}></span> Degraded</td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className={"mt-3 text-start"}>
            <a href={"#"} className={"text-decoration-none"} style={{color: "var(--accent-green)", fontSize: "11px"}}>
              View all sources <i className={"bi bi-arrow-right ms-1"}></i>
            </a>
          </div>
        </div>

      </div>

    </div>

    </main>





 
  






<Script src={"/assets/next/market-analysis-boot.js"} strategy="afterInteractive" />
    </>
  );
}
