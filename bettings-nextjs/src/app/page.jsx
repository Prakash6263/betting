import Script from 'next/script';
import AuthNav from '../components/AuthNav';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    


    
    <nav className={"navbar navbar-expand-lg fixed-top"}>
        <div className={"container"}>
            <a className={"navbar-brand"} href={"#"}>
            
            <div className={"brand-text"}>
                <img src={"/images/logo.png"} style={{width: "250px"}} />
            </div></a> <button className={"navbar-toggler bg-dark"} data-bs-target={"#nav"} data-bs-toggle={"collapse"}><i className={"bi bi-list text-white"}></i></button>
            <div className={"collapse navbar-collapse"} id={"nav"}>
                <ul className={"navbar-nav mx-auto"}>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} href={"/"}>Home</Link>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"#"}>About Us</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"#"}>Pricing</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"#"}>Contact Us</a>
                    </li>
                </ul>
                <div className={"d-flex gap-2"}>
                    
<div className={"dropdown ms-2"} style={{display:"inline-block"}}>
  <button className={"theme-toggle-btn"} data-bs-toggle={"dropdown"} id={"langDropdownBtn"} type={"button"} aria-expanded={"false"} style={{display:"inline-flex",alignItems:"center",gap:"8px",border:"1px solid rgba(255,255,255,.18)",background:"rgba(255,255,255,.05)",color:"#fff",borderRadius:"8px",padding:"8px 12px",fontSize:"12px"}}>
    <i className={"bi bi-translate text-success"}></i>
    <span className={"fw-semibold"} id={"selectedLangText"}>FR</span>
    <i className={"bi bi-chevron-down"} style={{fontSize:"9px"}}></i>
  </button>
  <ul className={"dropdown-menu dropdown-menu-end bg-dark border-secondary shadow-lg"}>
    <li><a className={"dropdown-item small d-flex justify-content-between py-2 language-option"} data-language={"en"} href={"#"}><span>English</span><span className={"badge bg-success ms-2"}>EN</span></a></li>
    <li><hr className={"dropdown-divider border-secondary my-1"} /></li>
    <li><a className={"dropdown-item small d-flex justify-content-between py-2 language-option"} data-language={"fr"} href={"#"}><span>Français (French)</span><span className={"badge bg-success ms-2"}>FR</span></a></li>
  </ul>
</div>
<AuthNav />
                </div>
            </div>
        </div>
    </nav>
    <section className={"hero pb-5"}>
        <div className={"container"}>
            <div className={"hero-content text-center"}>
                <span className={"badge-green"}><i className={"bi bi-stars"}></i> Next Generation Football Intelligence</span>
                <h1>See the Game.<br />
                <span>Understand the Market.</span><br />
                Predict What's Next.</h1>
                <p className={"hero-description"}>An AI-powered football intelligence platform combining advanced match analytics, predictive models, betting market intelligence and estimated global betting volume.</p>
                <div className={"hero-buttons"}>
                    <Link className={"btn-primary-custom"} href={"/register"}>Start Analyzing Free <i className={"bi bi-arrow-right ms-2"}></i></Link> <a className={"btn-outline-custom"} href={"#matches"}>Explore Live Matches <i className={"bi bi-play-circle ms-2"}></i></a>
                </div>
                <div className={"hero-stats"}>
                    <div className={"hero-stat"}>
                        <h3>500+</h3>
                        <p>Leagues Covered</p>
                    </div>
                    <div className={"hero-stat"}>
                        <h3>1M+</h3>
                        <p>Matches Analyzed</p>
                    </div>
                    <div className={"hero-stat"}>
                        <h3>250K+</h3>
                        <p>Players Tracked</p>
                    </div>
                    <div className={"hero-stat"}>
                        <h3>98.7%</h3>
                        <p>AI Data Accuracy</p>
                    </div>
                </div>
            </div>
            <div className={"hero-visual"}>
                <div className={"hero-visual-content"}>
                    <div>
                        <span className={"badge-green"}><i className={"bi bi-activity"}></i> Live Football Intelligence</span>
                        <h2 className={"mt-4"}>Every Match.<br />
                        Every Signal.<br />
                        One Intelligence Layer.</h2>
                        <p>Analyze matches, understand market movements, detect sharp money and discover hidden betting signals.</p><a className={"btn-primary-custom"} href={"#matches"}>Explore Match Intelligence</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section matches-section"} id={"matches"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}><i className={"bi bi-calendar-event"}></i> Live & Upcoming Fixtures</span>
                <h2 className={"section-title mt-3"}>Never Miss a <span className={"text-green"}>Match Signal</span></h2>
                <p className={"section-subtitle"}>Follow the world's biggest football fixtures with AI predictions, live market movements, betting intelligence and match-level insights.</p>
            </div>
            <div className={"match-toolbar"}>
                <button className={"filter-btn active"}>All Matches</button> <button className={"filter-btn"}>Live Now</button> <button className={"filter-btn"}>Today</button> <button className={"filter-btn"}>Tomorrow</button> <button className={"filter-btn"}>Champions League</button> <button className={"filter-btn"}>Premier League</button> <button className={"filter-btn"}>La Liga</button>
            </div>
            <div className={"row g-4"}>
                
                <div className={"col-lg-7"}>
                    <div className={"featured-match"}>
                        <div className={"featured-top"}>
                            <span className={"league-name"}>UEFA Champions League</span> <span className={"live-badge"}>● LIVE INTELLIGENCE</span>
                        </div>
                        <div className={"featured-content"}>
                            <span className={"league-name"}>Champions League • Today 21:00</span>
                            <div className={"featured-teams"}>
                                <div className={"team-large"}>
                                    <div className={"team-logo-large"}>
                                       <img src={"/images/team-1.png"} style={{width: "45px"}} />
                                    </div>
                                    <h3>Real Madrid</h3>
                                </div>
                                <div className={"vs-large"}>
                                    VS
                                </div>
                                <div className={"team-large"}>
                                    <div className={"team-logo-large"}>
                                       <img src={"/images/team-2.png"} style={{width: "45px"}} />
                                    </div>
                                    <h3>Barcelona</h3>
                                </div>
                            </div>
                            <div className={"featured-meta"}>
                                <span><i className={"bi bi-geo-alt me-1"}></i> Santiago Bernabéu</span> <span><i className={"bi bi-clock me-1"}></i> 21:00</span> <span><i className={"bi bi-calendar3 me-1"}></i> 21 Apr 2026</span>
                            </div>
                            <div className={"intelligence-strip"}>
                                <div className={"intel-pill"}>
                                    AI Prediction <strong>Real Madrid</strong>
                                </div>
                                <div className={"intel-pill"}>
                                    Confidence <strong>82%</strong>
                                </div>
                                <div className={"intel-pill"}>
                                    Volume <strong>$214.6M</strong>
                                </div>
                                <div className={"intel-pill"}>
                                    Sharp Money <strong>Detected</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-5"}>
                    <div className={"d-flex justify-content-between mb-3"}>
                        <h5 className={"mb-0"}>Upcoming Matches</h5><a className={"text-green small"} href={"#"}>View All →</a>
                    </div>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>UEFA Champions League</span> <span>Today 19:30</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-2.png"} style={{width: "45px"}} />
                                </div><small>Man City</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-3.png"} style={{width: "45px"}} />
                                </div><small>Inter</small>
                            </div>
                        </div>
                        <div className={"fixture-bottom"}>
                            <span>AI Confidence <strong>92%</strong></span> <span>Value <strong>+16.2%</strong></span>
                        </div>
                    </div>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>Premier League</span> <span>Today 20:00</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-4.png"} style={{width: "45px"}} />
                                </div><small>Arsenal</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-5.png"} style={{width: "45px"}} />
                                </div><small>Newcastle</small>
                            </div>
                        </div>
                        <div className={"fixture-bottom"}>
                            <span>AI Confidence <strong>87%</strong></span> <span>Value <strong>+19.9%</strong></span>
                        </div>
                    </div>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>La Liga</span> <span>Tomorrow 21:00</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-1.png"} style={{width: "45px"}} />
                                </div><small>Atletico Madrid</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-2.png"} style={{width: "45px"}} />
                                </div><small>Valencia</small>
                            </div>
                        </div>
                        <div className={"fixture-bottom"}>
                            <span>AI Confidence <strong>79%</strong></span> <span>Value <strong>+12.4%</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row mt-5"}>
                <div className={"col-lg-12"}>
                    <div className={"d-flex justify-content-between align-items-center mb-4"}>
                        <div>
                            <span className={"badge-green"}>Next Schedule</span>
                            <h3 className={"mt-3 mb-0"}>Fixtures of All Upcoming Matches</h3>
                        </div><a className={"btn-outline-custom"} href={"#"}>View All Sports <i className={"bi bi-arrow-right ms-2"}></i></a>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>UEFA Champions League</span> <span>21:00</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                   <img src={"/images/team-1.png"} style={{width: "45px"}} />
                                </div><small>Real Madrid</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-2.png"} style={{width: "45px"}} />
                                </div><small>Barcelona</small>
                            </div>
                        </div>
                        <div className={"odds-row"}>
                            <div className={"odds"}>
                                1 <strong>1.59</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>4.35</strong>
                            </div>
                            <div className={"odds"}>
                                2 <strong>7.14</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>9.14</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>Premier League</span> <span>20:30</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                   <img src={"/images/team-4.png"} style={{width: "45px"}} />
                                </div><small>Liverpool</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                    <img src={"/images/team-5.png"} style={{width: "45px"}} />
                                </div><small>Aston Villa</small>
                            </div>
                        </div>
                        <div className={"odds-row"}>
                            <div className={"odds"}>
                                1 <strong>1.48</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>4.20</strong>
                            </div>
                            <div className={"odds"}>
                                2 <strong>6.80</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>8.80</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"fixture-card"}>
                        <div className={"fixture-top"}>
                            <span>Bundesliga</span> <span>19:30</span>
                        </div>
                        <div className={"fixture-teams"}>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                   <img src={"/images/team-3.png"} style={{width: "45px"}} />
                                </div><small>Bayern Munich</small>
                            </div>
                            <div className={"fixture-vs"}>
                                VS
                            </div>
                            <div className={"fixture-team"}>
                                <div className={"fixture-logo"}>
                                   <img src={"/images/team-4.png"} style={{width: "45px"}} />
                                </div><small>Dortmund</small>
                            </div>
                        </div>
                        <div className={"odds-row"}>
                            <div className={"odds"}>
                                1 <strong>1.65</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>4.10</strong>
                            </div>
                            <div className={"odds"}>
                                2 <strong>5.90</strong>
                            </div>
                            <div className={"odds"}>
                                X <strong>7.90</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section bg-bluee"} id={"intelligence"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}>AI Match Intelligence</span>
                <h2 className={"section-title mt-3"}>Understand Every Match <span className={"text-green"}>Before Kick-Off</span></h2>
                <p className={"section-subtitle"}>Our intelligence engine analyzes thousands of data points to transform complex football information into simple insights.</p>
            </div>
            <div className={"row g-4"}>
                <div className={"col-lg-4"}>
                    <div className={"ai-card"}>
                        <div className={"ai-icon"}>
                            <i className={"bi bi-stars"}></i>
                        </div>
                        <h4>AI Predictions</h4>
                        <p>Probability-based predictions powered by team form, player data, tactics, injuries and historical performance.</p>
                        <div className={"ai-stat"}>
                            <span>Home Win</span> <span>63%</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Draw</span> <span>23%</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Away Win</span> <span>14%</span>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-4"}>
                    <div className={"ai-card"}>
                        <div className={"ai-icon"}>
                            <i className={"bi bi-graph-up-arrow"}></i>
                        </div>
                        <h4>Market Intelligence</h4>
                        <p>Track odds movement, market imbalance, money flow, sharp money and steam moves.</p>
                        <div className={"ai-stat"}>
                            <span>Sharp Money</span> <span>Strong</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Steam Move</span> <span>Active</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Market Activity</span> <span>High</span>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-4"}>
                    <div className={"ai-card"}>
                        <div className={"ai-icon"}>
                            <i className={"bi bi-bar-chart-line"}></i>
                        </div>
                        <h4>Football Analytics</h4>
                        <p>Deep team and player intelligence with advanced statistics, xG, form, injuries and tactical analysis.</p>
                        <div className={"ai-stat"}>
                            <span>Team Form</span> <span>86/100</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Home Advantage</span> <span>80/100</span>
                        </div>
                        <div className={"ai-stat"}>
                            <span>Motivation</span> <span>78/100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section"} id={"volume"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}>Market Innovation</span>
                <h2 className={"section-title mt-3"}>Estimate the <span className={"text-green"}>Global Betting Market</span></h2>
                <p className={"section-subtitle"}>Use AI-powered market estimation to understand the potential financial activity surrounding major football matches.</p>
            </div>
            <div className={"volume-card"}>
                <div className={"row align-items-center g-5"}>
                    <div className={"col-lg-6"}>
                        <small className={"text-secondary"}>ESTIMATED GLOBAL BETTING VOLUME</small>
                        <div className={"volume-number"}>
                            $214.6M
                        </div>
                        <div className={"volume-range"}>
                            Estimated range: $180M – $230M
                        </div>
                        <div className={"volume-bar"}></div>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <small className={"text-secondary"}>CONFIDENCE</small>
                                <h5 className={"text-green mt-2"}>82%</h5>
                            </div>
                            <div className={"col-6"}>
                                <small className={"text-secondary"}>MARKET ACTIVITY</small>
                                <h5 className={"text-green mt-2"}>VERY HIGH</h5>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-6"}>
                        <div className={"market-row"}>
                            <span>Real Madrid</span> <span>58% Money Flow</span>
                        </div>
                        <div className={"market-row"}>
                            <span>Draw</span> <span>15% Money Flow</span>
                        </div>
                        <div className={"market-row"}>
                            <span>Barcelona</span> <span>27% Money Flow</span>
                        </div>
                        <div className={"market-row"}>
                            <span>Sharp Money</span> <span>Real Madrid</span>
                        </div>
                        <div className={"market-row"}>
                            <span>Steam Move</span> <span>Active</span>
                        </div>
                        <div className={"market-row"}>
                            <span>Market Liquidity</span> <span>High</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section bg-bluee"} id={"features"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}>Powerful Intelligence</span>
                <h2 className={"section-title mt-3"}>Everything You Need in <span className={"text-green"}>One Platform</span></h2>
            </div>
            <div className={"row g-4"}>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-lightning-charge"}></i>
                        </div>
                        <h4>Sharp Money Detection</h4>
                        <p>Identify unusual money flows by comparing bet percentages, stake distribution and odds movements.</p>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-activity"}></i>
                        </div>
                        <h4>Steam Move Tracking</h4>
                        <p>Monitor rapid odds changes and detect where the betting market is moving in real time.</p>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-people"}></i>
                        </div>
                        <h4>Team & Player Analysis</h4>
                        <p>Explore team form, player performance, injuries, suspensions, tactics and advanced statistics.</p>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-calendar3"}></i>
                        </div>
                        <h4>Match Calendar</h4>
                        <p>Explore upcoming matches across leagues and competitions with AI-powered match intelligence.</p>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-bell"}></i>
                        </div>
                        <h4>Smart Alerts</h4>
                        <p>Receive alerts for value opportunities, odds movement, sharp money and high market activity.</p>
                    </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                    <div className={"feature-card"}>
                        <div className={"feature-icon"}>
                            <i className={"bi bi-file-earmark-bar-graph"}></i>
                        </div>
                        <h4>Professional Reports</h4>
                        <p>Generate comprehensive match, team, player and betting market intelligence reports.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}>How It Works</span>
                <h2 className={"section-title mt-3"}>From Data to <span className={"text-green"}>Intelligence</span></h2>
            </div>
            <div className={"row g-4"}>
                <div className={"col-lg-3 col-md-6"}>
                    <div className={"step-card"}>
                        <div className={"step-number"}>
                            01
                        </div>
                        <h4>Collect</h4>
                        <p>Football data, odds, match statistics and market signals are continuously collected.</p>
                    </div>
                </div>
                <div className={"col-lg-3 col-md-6"}>
                    <div className={"step-card"}>
                        <div className={"step-number"}>
                            02
                        </div>
                        <h4>Analyze</h4>
                        <p>AI models analyze teams, players, form, tactics and market movements.</p>
                    </div>
                </div>
                <div className={"col-lg-3 col-md-6"}>
                    <div className={"step-card"}>
                        <div className={"step-number"}>
                            03
                        </div>
                        <h4>Detect</h4>
                        <p>Identify value, sharp money, steam moves and market imbalances.</p>
                    </div>
                </div>
                <div className={"col-lg-3 col-md-6"}>
                    <div className={"step-card"}>
                        <div className={"step-number"}>
                            04
                        </div>
                        <h4>Decide</h4>
                        <p>Transform complex football data into clear, professional intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={"section bg-bluee"} id={"pricing"}>
        <div className={"container"}>
            <div className={"text-center mb-5"}>
                <span className={"badge-green"}>Simple Pricing</span>
                <h2 className={"section-title mt-3"}>Choose Your <span className={"text-green"}>Intelligence Level</span></h2>
            </div>
            <div className={"row g-4"}>
                <div className={"col-lg-4"}>
                    <div className={"pricing-card"}>
                        <h4>Free</h4>
                        <div className={"price"}>
                            $0 <small>/month</small>
                        </div>
                        <ul>
                            <li><i className={"bi bi-check"}></i> Basic Match Analysis</li>
                            <li><i className={"bi bi-check"}></i> Daily AI Predictions</li>
                            <li><i className={"bi bi-check"}></i> Basic Statistics</li>
                            <li><i className={"bi bi-check"}></i> Limited Match History</li>
                        </ul><button className={"btn-pricing"}>Get Started</button>
                    </div>
                </div>
                <div className={"col-lg-4"}>
                    <div className={"pricing-card featured"}>
                        <span className={"popular"}>MOST POPULAR</span>
                        <h4>Pro</h4>
                        <div className={"price"}>
                            $49 <small>/month</small>
                        </div>
                        <ul>
                            <li><i className={"bi bi-check"}></i> Full AI Predictions</li>
                            <li><i className={"bi bi-check"}></i> Value Bets</li>
                            <li><i className={"bi bi-check"}></i> Odds Comparison</li>
                            <li><i className={"bi bi-check"}></i> Sharp Money Signals</li>
                            <li><i className={"bi bi-check"}></i> Steam Move Tracking</li>
                        </ul><button className={"btn-pricing"}>Start Pro</button>
                    </div>
                </div>
                <div className={"col-lg-4"}>
                    <div className={"pricing-card"}>
                        <h4>Elite</h4>
                        <div className={"price"}>
                            $149 <small>/month</small>
                        </div>
                        <ul>
                            <li><i className={"bi bi-check"}></i> Everything in Pro</li>
                            <li><i className={"bi bi-check"}></i> Global Betting Volume</li>
                            <li><i className={"bi bi-check"}></i> Market Liquidity</li>
                            <li><i className={"bi bi-check"}></i> Advanced Reports</li>
                            <li><i className={"bi bi-check"}></i> Custom Analytics</li>
                        </ul><button className={"btn-pricing"}>Go Elite</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className={"section"}>
        <div className={"container"}>
            <div className={"cta-box"}>
                <span className={"badge-green"}>Start Your Intelligence Journey</span>
                <h2 className={"mt-4"}>See Football <span className={"text-green"}>Differently.</span></h2>
                <p className={"text-secondary mx-auto my-4"} style={{maxWidth: "650px"}}>Turn thousands of football data points and complex betting market signals into one clear intelligence layer.</p><Link className={"btn-primary-custom"} href={"/register"}>Create Your Free Account <i className={"bi bi-arrow-right ms-2"}></i></Link>
            </div>
        </div>
    </section>
    <footer>
        <div className={"container"}>
            <div className={"row g-5"}>
                <div className={"col-lg-4"}>
                    <a className={"navbar-brand"} href={"#"}>
                    <div className={"brand-icon"}>
                        <i className={"bi bi-globe2"}></i>
                    </div>
                    <div className={"brand-text"}>
                        FOOTBALL <span>INTELLIGENCE</span>
                    </div></a>
                    <p className={"footer-description"}>AI-powered football intelligence combining match analytics, predictive models and betting market intelligence.</p>
                </div>
                <div className={"col-6 col-lg-2"}>
                    <h6>PLATFORM</h6>
                    <ul>
                        <li>
                            <a href={"#matches"}>Matches</a>
                        </li>
                        <li>
                            <a href={"#"}>AI Predictions</a>
                        </li>
                        <li>
                            <a href={"#"}>Market Analysis</a>
                        </li>
                        <li>
                            <a href={"#"}>Statistics</a>
                        </li>
                    </ul>
                </div>
                <div className={"col-6 col-lg-2"}>
                    <h6>INTELLIGENCE</h6>
                    <ul>
                        <li>
                            <a href={"#volume"}>Betting Volume</a>
                        </li>
                        <li>
                            <a href={"#"}>Sharp Money</a>
                        </li>
                        <li>
                            <a href={"#"}>Steam Moves</a>
                        </li>
                        <li>
                            <a href={"#"}>Reports</a>
                        </li>
                    </ul>
                </div>
                <div className={"col-6 col-lg-2"}>
                    <h6>COMPANY</h6>
                    <ul>
                        <li>
                            <a href={"#"}>About</a>
                        </li>
                        <li>
                            <a href={"#pricing"}>Pricing</a>
                        </li>
                        <li>
                            <a href={"#"}>Contact</a>
                        </li>
                        <li>
                            <a href={"#"}>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className={"col-6 col-lg-2"}>
                    <h6>LEGAL</h6>
                    <ul>
                        <li>
                            <a href={"#"}>Privacy</a>
                        </li>
                        <li>
                            <a href={"#"}>Terms</a>
                        </li>
                        <li>
                            <a href={"#"}>Security</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"copyright d-flex justify-content-between flex-wrap gap-3"}>
                <span>© 2026 Football Intelligence. All rights reserved.</span> <span>Built for smarter football decisions.</span>
            </div>
        </div>
    </footer>
     
    




<Script src={"/assets/next/index-boot.js"} strategy="afterInteractive" />
    </>
  );
}
