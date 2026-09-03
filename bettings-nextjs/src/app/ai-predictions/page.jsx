import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />



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
