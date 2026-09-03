import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />



<main className={"main-content"} id={"mainContent"}>
   
    <div className={"dash-card py-2 px-3 mb-2"} style={{height: "auto"}}>
      <div className={"d-flex align-items-center justify-content-between flex-wrap gap-2"}>
        <div className={"d-flex align-items-center gap-2 flex-wrap"}>
          <div>
            <span className={"top-bar-label"}>Dataset & Date Range</span>
            <div className={"d-flex align-items-center gap-1"}>
              <select className={"custom-select-sm"}><option>Premier League</option></select>
              <select className={"custom-select-sm"}><option>2024/25 Season</option></select>
              <div className={"d-flex align-items-center gap-1 custom-input-sm"} style={{padding: "3px 8px"}}>
                <span>08/01/2024 - 12/01/2025</span>
                <i className={"bi bi-calendar text-muted"} style={{fontSize: "10px"}}></i>
              </div>
            </div>
          </div>

          <div className={"ms-2"}>
            <span className={"top-bar-label"}>Comparison Benchmark</span>
            <select className={"custom-select-sm"} style={{minWidth: "180px"}}><option>Premier League Average</option></select>
          </div>
        </div>

        <div className={"d-flex align-items-center gap-3"}>
          <span className={"text-muted"} style={{fontSize: "9.5px"}}>Last updated: 12 min ago <i className={"bi bi-arrow-clockwise ms-1"} style={{cursor: "pointer"}}></i></span>
          <div className={"d-flex align-items-center gap-2"}>
            <div className={"top-btn-outline"}><i className={"bi bi-info-circle"}></i> Metric Glossary</div>
            <div className={"top-btn-outline"}><i className={"bi bi-book"}></i> Methodology</div>
          </div>
        </div>
      </div>
    </div>

    
    <div className={"row g-2 mb-2"}>
      
      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Custom Metric Builder <i className={"bi bi-info-circle"}></i></div>
          
          <div className={"mb-2"}>
            <select className={"custom-select-sm w-100"}><option>Build a custom metric</option></select>
          </div>

          <div className={"d-flex align-items-center gap-1 mb-3 flex-wrap"}>
            <div className={"formula-tag-box"}>
              <span>xG</span>
              <i className={"bi bi-chevron-down text-muted"} style={{fontSize: "8px"}}></i>
            </div>
            <span className={"text-muted"}>×</span>
            <div className={"formula-tag-box"}><span>0.6</span></div>
            <span className={"text-muted"}>+</span>
            <div className={"formula-tag-box"}>
              <span>Progressive Passes</span>
              <i className={"bi bi-chevron-down text-muted"} style={{fontSize: "8px"}}></i>
            </div>
            <span className={"text-muted"}>×</span>
            <div className={"formula-tag-box"}><span>0.4</span></div>
            <i className={"bi bi-trash text-muted ms-1"} style={{cursor: "pointer"}}></i>
          </div>

          <div className={"d-flex align-items-center justify-content-between"}>
            <button className={"top-btn-outline"}><i className={"bi bi-plus"}></i> Add component</button>
            <button className={"btn-green-action"}>Save Metric</button>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Segmentation Filters <i className={"bi bi-info-circle"}></i></div>
          
          <div className={"row g-1 mb-3"}>
            <div className={"col-4"}>
              <span className={"top-bar-label"}>Phase</span>
              <select className={"custom-select-sm w-100"}><option>All Phases</option></select>
            </div>
            <div className={"col-4"}>
              <span className={"top-bar-label"}>Venue</span>
              <select className={"custom-select-sm w-100"}><option>All Venues</option></select>
            </div>
            <div className={"col-4"}>
              <span className={"top-bar-label"}>Opponent Strength</span>
              <select className={"custom-select-sm w-100"}><option>All Strengths</option></select>
            </div>
          </div>

          <div className={"d-flex align-items-center justify-content-between pt-1"}>
            <button className={"top-btn-outline"}><i className={"bi bi-plus"}></i> Add Filter</button>
            <button className={"btn border-0 text-muted p-0 d-flex align-items-center gap-1"} style={{fontSize: "10px"}}>
              <i className={"bi bi-arrow-counterclockwise"}></i> Reset Filters
            </button>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"d-flex align-items-center justify-content-between mb-1"}>
            <div className={"dash-card-title mb-0"}>Saved Analyses <i className={"bi bi-info-circle"}></i></div>
            <a href={"#"} className={"text-success text-decoration-none"} style={{fontSize: "9.5px"}}>View all</a>
          </div>

          <div className={"d-flex flex-column gap-1 mb-2"}>
            <div className={"d-flex align-items-center justify-content-between py-1 border-bottom border-secondary border-opacity-10"}>
              <span className={"text-white"} style={{fontSize: "10px"}}>Home vs Top 6 Analysis</span>
              <span className={"text-muted"} style={{fontSize: "8.5px"}}>Updated 2 days ago</span>
            </div>
            <div className={"d-flex align-items-center justify-content-between py-1 border-bottom border-secondary border-opacity-10"}>
              <span className={"text-white"} style={{fontSize: "10px"}}>Set Piece Impact Deep Dive</span>
              <span className={"text-muted"} style={{fontSize: "8.5px"}}>Updated 5 days ago</span>
            </div>
            <div className={"d-flex align-items-center justify-content-between py-1"}>
              <span className={"text-white"} style={{fontSize: "10px"}}>High Press Effectiveness</span>
              <span className={"text-muted"} style={{fontSize: "8.5px"}}>Updated 1 week ago</span>
            </div>
          </div>

          <span className={"top-bar-label"}>Shareable Link</span>
          <div className={"custom-input-sm d-flex align-items-center justify-content-between py-1"}>
            <span className={"text-muted text-truncate"} style={{fontSize: "9.5px"}}>https://myodinsport.com/analysis/7f3a2b1c</span>
            <i className={"bi bi-copy text-muted ms-2"} style={{cursor: "pointer"}}></i>
          </div>
        </div>
      </div>

    </div>

    
    <div className={"row g-2 mb-2"}>
      
      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Correlation Matrix <i className={"bi bi-info-circle"}></i></div>
          <div className={"table-responsive"}>
          <table className={"matrix-table mt-2"}>
            <thead>
              <tr>
                <th></th>
                <th>xG</th>
                <th>Shots</th>
                <th>Prog. Passes</th>
                <th>Possession</th>
                <th>PPDA</th>
                <th>xGA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"text-muted text-start ps-1"}>xG</td>
                <td className={"c-100"}>1.00</td>
                <td className={"c-078"}>0.78</td>
                <td className={"c-062"}>0.62</td>
                <td className={"c-031"}>0.31</td>
                <td className={"c-neg-41"}>-0.41</td>
                <td className={"c-neg-72"}>-0.72</td>
              </tr>
              <tr>
                <td className={"text-muted text-start ps-1"}>Shots</td>
                <td className={"c-078"}>0.78</td>
                <td className={"c-100"}>1.00</td>
                <td className={"c-055"}>0.55</td>
                <td className={"c-028"}>0.28</td>
                <td className={"c-neg-38"}>-0.38</td>
                <td className={"c-neg-65"}>-0.65</td>
              </tr>
              <tr>
                <td className={"text-muted text-start ps-1"}>Prog. Passes</td>
                <td className={"c-062"}>0.62</td>
                <td className={"c-055"}>0.55</td>
                <td className={"c-100"}>1.00</td>
                <td className={"c-049"}>0.49</td>
                <td className={"c-neg-29"}>-0.29</td>
                <td className={"c-neg-54"}>-0.54</td>
              </tr>
              <tr>
                <td className={"text-muted text-start ps-1"}>Possession</td>
                <td className={"c-031"}>0.31</td>
                <td className={"c-028"}>0.28</td>
                <td className={"c-049"}>0.49</td>
                <td className={"c-100"}>1.00</td>
                <td className={"c-neg-21"}>-0.21</td>
                <td className={"c-neg-33"}>-0.33</td>
              </tr>
              <tr>
                <td className={"text-muted text-start ps-1"}>PPDA</td>
                <td className={"c-neg-41"}>-0.41</td>
                <td className={"c-neg-38"}>-0.38</td>
                <td className={"c-neg-29"}>-0.29</td>
                <td className={"c-neg-21"}>-0.21</td>
                <td className={"c-100"}>1.00</td>
                <td className={"c-049"} style={{backgroundColor: "#1a324b"}}>0.48</td>
              </tr>
              <tr>
                <td className={"text-muted text-start ps-1"}>xGA</td>
                <td className={"c-neg-72"}>-0.72</td>
                <td className={"c-neg-65"}>-0.65</td>
                <td className={"c-neg-54"}>-0.54</td>
                <td className={"c-neg-33"}>-0.33</td>
                <td className={"c-049"} style={{backgroundColor: "#1a324b"}}>0.48</td>
                <td className={"c-100"}>1.00</td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className={"matrix-legend-bar"}></div>
          <div className={"d-flex justify-content-between text-muted mt-1"} style={{fontSize: "8px"}}>
            <span>-1</span>
            <span>Pearson correlation coefficient</span>
            <span>1</span>
          </div>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Metric Distribution: xG per Match <i className={"bi bi-info-circle"}></i></div>
          
          <div className={"d-flex align-items-center gap-3 mb-1 text-muted"} style={{fontSize: "8.5px"}}>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "8px", height: "2px", background: "#22c55e", display: "inline-block"}}></span> Team</span>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "8px", height: "2px", borderTop: "1px dashed #64748b", display: "inline-block"}}></span> League Average</span>
            <span className={"d-flex align-items-center gap-1"}><span style={{width: "8px", height: "8px", background: "#1d4ed8", display: "inline-block", borderRadius: "1px"}}></span> All Teams</span>
          </div>

          <div style={{height: "145px", position: "relative"}}>
            <canvas id={"distributionChart"}></canvas>
          </div>
          <div className={"text-center text-muted mt-1"} style={{fontSize: "8px"}}>Distribution based on 1,520 team matches in Premier League (2024/25)</div>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"dash-card"}>
          <div className={"dash-card-title"}>Sample Size & Uncertainty <i className={"bi bi-info-circle"}></i></div>
          
          <div className={"row g-2 mb-2"}>
            <div className={"col-6"}>
              <span className={"text-muted"} style={{fontSize: "9px"}}>Sample Size (Matches)</span>
              <div className={"fw-bold text-white fs-4"}>24</div>
            </div>
            <div className={"col-6"}>
              <span className={"text-muted"} style={{fontSize: "9px"}}>Uncertainty Interval (95%)</span>
              <div className={"fw-bold text-white fs-4"}>1.84 <span className={"text-success fs-6 fw-normal"}>[1.42 – 2.26]</span></div>
            </div>
          </div>

          <span className={"text-muted"} style={{fontSize: "9px"}}>Metric</span>
          <div className={"text-success fw-semibold mb-3"} style={{fontSize: "11px"}}>xG per Match</div>

          <div className={"row g-2 mb-2"}>
            <div className={"col-6"}>
              <span className={"text-muted"} style={{fontSize: "9px"}}>Standard Deviation</span>
              <div className={"fw-semibold text-white"} style={{fontSize: "11px"}}>0.78</div>
            </div>
            <div className={"col-6"}>
              <span className={"text-muted"} style={{fontSize: "9px"}}>Standard Error</span>
              <div className={"fw-semibold text-white"} style={{fontSize: "11px"}}>0.17</div>
            </div>
          </div>

          
          <div className={"ci-plot-container"}>
            <div className={"ci-line"}></div>
            <div className={"ci-dot"}></div>
            <span className={"position-absolute text-white fw-bold"} style={{left: "55%", top: "-10px", fontSize: "8px", transform: "translateX(-50%)"}}>1.84</span>
          </div>

          <div className={"d-flex justify-content-between text-muted mt-1"} style={{fontSize: "8px", padding: "0 5%"}}>
            <span>1.0</span>
            <span>1.5</span>
            <span>2.0</span>
            <span>2.5</span>
            <span>3.0</span>
          </div>
          <div className={"text-center text-muted mt-1"} style={{fontSize: "8px"}}>95% Confidence Interval</div>
        </div>
      </div>

    </div>

    
    <div className={"row g-2"}>
      
      
      <div className={"col-lg-8"}>
        <div className={"dash-card"}>
          <div className={"d-flex align-items-center justify-content-between mb-2"}>
            <div className={"dash-card-title mb-0"}>Accessible Table View <i className={"bi bi-info-circle"}></i></div>
            <div className={"d-flex align-items-center gap-2"}>
              <span className={"text-muted"} style={{fontSize: "9.5px"}}>Show as table</span>
              <input type={"checkbox"} className={"form-check-input-custom"} defaultChecked />
            </div>
          </div>

          <table className={"accessible-table"}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Team Value</th>
                <th>League Average</th>
                <th>Difference</th>
                <th>Percentile</th>
                <th>Uncertainty (95%)</th>
                <th>Sample Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xG per Match</td>
                <td>1.84</td>
                <td>1.53</td>
                <td className={"tag-diff-plus"}>+0.31</td>
                <td>72nd</td>
                <td className={"text-muted"}>[1.42 – 2.26]</td>
                <td>24</td>
              </tr>
              <tr>
                <td>xGA per Match</td>
                <td>1.12</td>
                <td>1.21</td>
                <td className={"tag-diff-minus"}>-0.09</td>
                <td>48th</td>
                <td className={"text-muted"}>[0.83 – 1.41]</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Shots per Match</td>
                <td>13.6</td>
                <td>1.21</td>
                <td className={"tag-diff-plus"}>+1.5</td>
                <td>66th</td>
                <td className={"text-muted"}>[10.2 – 17.0]</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Possession (%)</td>
                <td>56.2</td>
                <td>53.1</td>
                <td className={"tag-diff-plus"}>+3.1</td>
                <td>68th</td>
                <td className={"text-muted"}>[52.1 – 60.3]</td>
                <td>24</td>
              </tr>
              <tr>
                <td>PPDA</td>
                <td>9.2</td>
                <td>10.4</td>
                <td className={"tag-diff-minus"}>-1.2</td>
                <td>63rd</td>
                <td className={"text-muted"}>[7.6 – 10.8]</td>
                <td>24</td>
              </tr>
            </tbody>
          </table>

          <div className={"text-muted mt-2"} style={{fontSize: "8.5px"}}>Note: Percentiles compare against all teams in the selected competition.</div>
        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"row g-2"}>
          
          
          <div className={"col-12"}>
            <div className={"dash-card py-2"}>
              <div className={"dash-card-title mb-2"}>Export</div>
              <div className={"d-flex align-items-center gap-2"}>
                <button className={"top-btn-outline"}><i className={"bi bi-file-earmark-text"}></i> Export CSV</button>
                <button className={"top-btn-outline"}><i className={"bi bi-file-earmark-image"}></i> Export PNG</button>
              </div>
            </div>
          </div>

          
          <div className={"col-12"}>
            <div className={"card-warning-yellow"}>
              <div className={"d-flex align-items-center gap-2 mb-1"}>
                <i className={"bi bi-exclamation-circle text-warning"}></i>
                <strong className={"text-warning"} style={{fontSize: "11px"}}>Data Status</strong>
              </div>
              <div className={"text-muted"} style={{fontSize: "9px", marginLeft: "20px"}}>
                Some data is delayed.<br />
                Last full update: 12 min ago
              </div>
            </div>
          </div>

          
          <div className={"col-12"}>
            <div className={"card-error-red"}>
              <div className={"d-flex align-items-center gap-2 mb-1"}>
                <i className={"bi bi-x-circle text-danger"}></i>
                <strong className={"text-danger"} style={{fontSize: "11px"}}>Calculation Error</strong>
              </div>
              <div className={"text-muted mb-2"} style={{fontSize: "9px", marginLeft: "20px"}}>
                Could not compute Pressing Intensity.<br />
                Insufficient event data for selected filters.
              </div>
              <button className={"btn btn-sm border-danger text-danger bg-transparent py-0 px-2"} style={{fontSize: "9px", marginLeft: "20px"}}>View Details</button>
            </div>
          </div>

        </div>
      </div>

    </div>
</main>


 









<Script src={"/assets/next/advanced-stats-boot.js"} strategy="afterInteractive" />
    </>
  );
}
