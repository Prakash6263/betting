import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';
export const metadata = { title: 'Sports News | Football Intelligence' };

export default function Page() {
  return (
    <>



	
	
	


	<DashboardChrome />

	<main className={"main-content"} id={"mainContent"}>
		
    <div className={"top-header-bar"}>
      
      
      <div className={"search-input-box"}>
        <i className={"bi bi-search"}></i>
        <input type={"text"} placeholder={"Search news, teams, players, leagues..."} />
      </div>

      
      <div className={"filters-group"}>
        
        
        <div className={"filter-card sport-card"}>
          <span className={"filter-lbl"}>Sport</span>
          <div className={"select-wrapper"}>
            <select id={"sportSelect"} className={"custom-select-sm"}>
              <option value={"football"} selected>⚽ Football</option>
              <option value={"basketball"}>🏀 Basketball</option>
              <option value={"tennis"}>🎾 Tennis</option>
              <option value={"cricket"}>🏏 Cricket</option>
            </select>
            
          </div>
        </div>

        
        <div className={"filter-card league-card"}>
          <span className={"filter-lbl"}>League</span>
          <div className={"select-wrapper"}>
            <select id={"leagueSelect"} className={"custom-select-sm"}>
              <option value={"all"} selected>All leagues</option>
              <option value={"premier-league"}>Premier League</option>
              <option value={"la-liga"}>La Liga</option>
              <option value={"bundesliga"}>Bundesliga</option>
              <option value={"serie-a"}>Serie A</option>
            </select>
            
          </div>
        </div>

        
        <div className={"filter-card team-card"}>
          <span className={"filter-lbl"}>Team</span>
          <div className={"select-wrapper"}>
            <select id={"teamSelect"} className={"custom-select-sm"}>
              <option value={"all"} selected>All teams</option>
              <option value={"arsenal"}>Arsenal</option>
              <option value={"man-city"}>Man City</option>
              <option value={"barcelona"}>Barcelona</option>
              <option value={"real-madrid"}>Real Madrid</option>
            </select>
            
          </div>
        </div>

        
        <div className={"filter-card source-card"}>
          <span className={"filter-lbl"}>Source</span>
          <div className={"select-wrapper"}>
            <select id={"sourceSelect"} className={"custom-select-sm"}>
              <option value={"all"} selected>All sources</option>
              <option value={"sky-sports"}>Sky Sports</option>
              <option value={"espn"}>ESPN</option>
              <option value={"bbc"}>BBC Sport</option>
              <option value={"kicker"}>Kicker</option>
            </select>
            
          </div>
        </div>

        
        <div className={"filter-card date-card"}>
          <span className={"filter-lbl"}>Date</span>
          <div className={"select-wrapper"}>
            <select id={"dateSelect"} className={"custom-select-sm"}>
              <option value={"7days"} selected>Last 7 days</option>
              <option value={"24hours"}>Last 24 hours</option>
              <option value={"30days"}>Last 30 days</option>
              <option value={"custom"}>Custom Range</option>
            </select>
            <i className={"bi bi-calendar3 arrow-icon"} style={{fontSize: "11px"}}></i>
          </div>
        </div>

      </div>
    </div>

    
    <div className={"row g-3"}>
      
      
      <div className={"col-lg-8"}>
        <div className={"dashboard-card mb-3"}>
          
          <div className={"section-header"}>FEATURED STORY</div>

          <div className={"row g-3 mb-5"}>
            <div className={"col-md-5"}>
              <div className={"featured-img-container"}>
                <img src={"https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=600&q=80"} alt={"Stadium"} className={"featured-img"} />
              </div>
            </div>
            <div className={"col-md-7 d-flex flex-column justify-content-between"}>
              <div>
                <h5 className={"fw-bold text-white mb-2"} style={{fontSize: "15px", lineHeight: 1.3}}>
                  Arsenal grind out crucial win as Saka delivers again in big moments
                </h5>
                <p className={"text-muted mb-0"} style={{fontSize: "10.5px", lineHeight: 1.5}}>
                  Bukayo Saka scored the decisive goal as Arsenal narrowly defeated Chelsea at the Emirates. The Gunners extend their unbeaten run to 12 matches across all competitions.
                </p>
              </div>

              <div className={"d-flex align-items-center gap-2 mt-3"}>
                <span className={"bg-secondary text-white rounded-1 px-1 fw-bold"} style={{fontSize: "10px"}}>TR</span>
                <span className={"text-white fw-medium"} style={{fontSize: "10px"}}>The Pitch Report</span>
                <span className={"text-muted"} style={{fontSize: "10px"}}>• 1h ago</span>
                <span className={"badge-fresh ms-1"}>FRESH</span>
              </div>
            </div>
          </div>

          
          <div className={"nav-tabs-custom"}>
            <div className={"nav-tab-item active"}>Top Stories</div>
            <div className={"nav-tab-item"}>Latest</div>
            <div className={"nav-tab-item"}>Transfers</div>
            <div className={"nav-tab-item"}>Injuries</div>
            <div className={"nav-tab-item"}>Tactics</div>
            <div className={"nav-tab-item"}>Club News</div>
          </div>

          
          <div className={"d-flex flex-column"}>
            
            
            <div className={"story-row"}>
              <img src={"https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop"} alt={"Match"} className={"story-thumb"} />
              
              <div className={"flex-grow-1 pe-2"}>
                <h6 className={"fw-semibold text-white mb-1"} style={{fontSize: "11.5px"}}>
                  City edge past Spurs as Haaland hits milestone
                </h6>
                <p className={"text-muted mb-0"} style={{fontSize: "10px", lineHeight: 1.4}}>
                  Erling Haaland scored twice to reach 100 Premier League goals faster than any other player.
                </p>
              </div>

              <div style={{width: "110px", flexShrink: 0}}>
                <div className={"text-white fw-medium"} style={{fontSize: "10px"}}>James Walker</div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>Sky Sports</div>
                <div className={"d-flex align-items-center gap-2 mt-2"}>
                  <span className={"text-muted"} style={{fontSize: "10px"}}>2h ago</span>
                  <span className={"badge-fresh"}>FRESH</span>
                </div>
              </div>

              <div className={"related-match-box"}>
                <div>
                  <div className={"filter-lbl"} style={{fontSize: "10px"}}>RELATED MATCH</div>
                  <div className={"d-flex align-items-center gap-1 mt-1"}>
                    <img src={"https://media.api-sports.io/football/teams/50.png"} className={"club-logo-sm"} alt={"Man City"} />
                    <span className={"fw-medium text-white"} style={{fontSize: "10px"}}>Manchester</span>
                    <span className={"fw-bold text-white px-1"} style={{fontSize: "10px"}}>2 - 1</span>
                    <span className={"text-muted me-1"} style={{fontSize: "10px"}}>Spurs</span>
                    <img src={"https://media.api-sports.io/football/teams/47.png"} className={"club-logo-sm"} alt={"Spurs"} />
                  </div>
                </div>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "10px"}}></i>
              </div>
            </div>

            
            <div className={"story-row"}>
              <img src={"https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=400&auto=format&fit=crop"} alt={"Barcelona"} className={"story-thumb"} />
              
              <div className={"flex-grow-1 pe-2"}>
                <h6 className={"fw-semibold text-white mb-1"} style={{fontSize: "11.5px"}}>
                  Barcelona comeback seals comeback win in thriller
                </h6>
                <p className={"text-muted mb-0"} style={{fontSize: "10px", lineHeight: 1.4}}>
                  Two late goals from Ferran Torres completed a stunning turnaround against Atlético.
                </p>
              </div>

              <div style={{width: "110px", flexShrink: 0}}>
                <div className={"text-white fw-medium"} style={{fontSize: "10px"}}>Laura Martínez</div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>Mundo Deportivo</div>
                <div className={"d-flex align-items-center gap-2 mt-2"}>
                  <span className={"text-muted"} style={{fontSize: "10px"}}>3h ago</span>
                  <span className={"badge-updated"}>UPDATED</span>
                </div>
              </div>

              <div className={"related-match-box"}>
                <div>
                  <div className={"filter-lbl"} style={{fontSize: "7.5px"}}>RELATED MATCH</div>
                  <div className={"d-flex align-items-center gap-1 mt-1"}>
                    <img src={"https://media.api-sports.io/football/teams/530.png"} className={"club-logo-sm"} alt={"Atletico"} />
                    <span className={"fw-medium text-white"} style={{fontSize: "10px"}}>Atlético</span>
                    <span className={"fw-bold text-white px-1"} style={{fontSize: "10px"}}>2 - 3</span>
                    <span className={"text-muted me-1"} style={{fontSize: "10px"}}>Barcelona</span>
                    <img src={"https://media.api-sports.io/football/teams/529.png"} className={"club-logo-sm"} alt={"Barcelona"} />
                  </div>
                </div>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "10px"}}></i>
              </div>
            </div>

            
            <div className={"story-row"}>
              <img src={"https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=400&auto=format&fit=crop"} alt={"Bayern"} className={"story-thumb"} />
              
              <div className={"flex-grow-1 pe-2"}>
                <h6 className={"fw-semibold text-white mb-1"} style={{fontSize: "11.5px"}}>
                  Bayern extend lead at the top with dominant display
                </h6>
                <p className={"text-muted mb-0"} style={{fontSize: "10px", lineHeight: 1.4}}>
                  Bayern Munich controlled possession and tempo to secure a comfortable victory at home.
                </p>
              </div>

              <div style={{width: "110px", flexShrink: 0}}>
                <div className={"text-white fw-medium"} style={{fontSize: "10px"}}>Florian Plettenberg</div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>Kicker</div>
                <div className={"d-flex align-items-center gap-2 mt-2"}>
                  <span className={"text-muted"} style={{fontSize: "10px"}}>5h ago</span>
                  <span className={"badge-fresh"}>FRESH</span>
                </div>
              </div>

              <div className={"related-match-box"}>
                <div>
                  <div className={"filter-lbl"} style={{fontSize: "7.5px"}}>RELATED MATCH</div>
                  <div className={"d-flex align-items-center gap-1 mt-1"}>
                    <img src={"https://media.api-sports.io/football/teams/157.png"} className={"club-logo-sm"} alt={"Bayern"} />
                    <span className={"fw-medium text-white"} style={{fontSize: "10px"}}>Bayern</span>
                    <span className={"fw-bold text-white px-1"} style={{fontSize: "10px"}}>3 - 0</span>
                    <span className={"text-muted me-1"} style={{fontSize: "10px"}}>Leverkusen</span>
                    <img src={"https://media.api-sports.io/football/teams/168.png"} className={"club-logo-sm"} alt={"Leverkusen"} />
                  </div>
                </div>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "10px"}}></i>
              </div>
            </div>

            
            <div className={"story-row"}>
              <img src={"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=400&auto=format&fit=crop"} alt={"Real Madrid"} className={"story-thumb"} />
              
              <div className={"flex-grow-1 pe-2"}>
                <h6 className={"fw-semibold text-white mb-1"} style={{fontSize: "11.5px"}}>
                  Mbappé brace leads Real Madrid to important win
                </h6>
                <p className={"text-muted mb-0"} style={{fontSize: "10px", lineHeight: 1.4}}>
                  Real Madrid bounce back with a strong performance away at Real Sociedad.
                </p>
              </div>

              <div style={{width: "110px", flexShrink: 0}}>
                <div className={"text-white fw-medium"} style={{fontSize: "10px"}}>Marco Ruiz</div>
                <div className={"text-muted"} style={{fontSize: "10px"}}>AS</div>
                <div className={"d-flex align-items-center gap-2 mt-2"}>
                  <span className={"text-muted"} style={{fontSize: "10px"}}>6h ago</span>
                  <span className={"badge-fresh"}>FRESH</span>
                </div>
              </div>

              <div className={"related-match-box"}>
                <div>
                  <div className={"filter-lbl"} style={{fontSize: "7.5px"}}>RELATED MATCH</div>
                  <div className={"d-flex align-items-center gap-1 mt-1"}>
                    <img src={"https://media.api-sports.io/football/teams/548.png"} className={"club-logo-sm"} alt={"Real Sociedad"} />
                    <span className={"fw-medium text-muted"} style={{fontSize: "10px"}}>Real Sociedad</span>
                    <span className={"fw-bold text-white px-1"} style={{fontSize: "10px"}}>1 - 2</span>
                    <span className={"fw-medium text-white"} style={{fontSize: "10px"}}>Real Madrid</span>
                    <img src={"https://media.api-sports.io/football/teams/541.png"} className={"club-logo-sm"} alt={"Real Madrid"} />
                  </div>
                </div>
                <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "10px"}}></i>
              </div>
            </div>

          </div>

        </div>
      </div>

      
      <div className={"col-lg-4"}>
        <div className={"d-flex flex-column gap-3"}>
          
          
          <div className={"dashboard-card"}>
            <div className={"section-header"}>SOURCE DETAILS</div>

            <div className={"d-flex align-items-center gap-3 mb-3"}>
              <div className={"bg-dark rounded-circle border border-secondary border-opacity-50 d-flex align-items-center justify-content-center fw-bold text-white"} style={{width: "38px", height: "38px", fontSize: "11px"}}>
                TPR
              </div>
              <div>
                <div className={"d-flex align-items-center gap-2"}>
                  <span className={"fw-bold text-white"} style={{fontSize: "12px"}}>The Pitch Report</span>
                  <i className={"bi bi-check-circle-fill text-primary"} style={{fontSize: "11px"}}></i>
                  <span className={"badge-editorial ms-1"}>EDITORIAL</span>
                </div>
              </div>
            </div>

            <div className={"d-flex flex-column gap-1 text-muted"} style={{fontSize: "10px"}}>
              <div className={"d-flex"}><span style={{width: "75px"}}>Type</span><span className={"text-white"}>Independent News Outlet</span></div>
              <div className={"d-flex"}><span style={{width: "75px"}}>Focus</span><span className={"text-white"}>Football News & Analysis</span></div>
              <div className={"d-flex align-items-center"}>
                <span style={{width: "75px"}}>Reliability</span>
                <span className={"text-white me-2"}>High</span>
                <div className={"dot-rating"}>
                  <div className={"dot active"}></div>
                  <div className={"dot active"}></div>
                  <div className={"dot active"}></div>
                  <div className={"dot active"}></div>
                  <div className={"dot"}></div>
                </div>
              </div>
              <div className={"d-flex"}><span style={{width: "75px"}}>Followers</span><span className={"text-white"}>245K</span></div>
            </div>
          </div>

          
          <div className={"dashboard-card"}>
            <div className={"section-header"}>FRESHNESS & ACCURACY</div>

            <div className={"row g-2"}>
              <div className={"col-6"}>
                <div className={"p-2 rounded"} style={{backgroundColor: "var(--card-inner)", border: "1px solid var(--card-border)"}}>
                  <span className={"badge-fresh mb-2"}>FRESH</span>
                  <div className={"fw-semibold text-white fs-6"}>1h ago</div>
                  <div className={"d-flex align-items-center gap-1 mt-2"}>
                    <span className={"text-muted"} style={{fontSize: "10px"}}>Accuracy</span>
                    <div className={"dot-rating ms-auto"}>
                      <div className={"dot active"}></div>
                      <div className={"dot active"}></div>
                      <div className={"dot active"}></div>
                      <div className={"dot active"}></div>
                      <div className={"dot"}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"p-2 rounded"} style={{backgroundColor: "var(--card-inner)", border: "1px solid var(--card-border)"}}>
                  <span className={"badge-updated mb-2"}>CORRECTION</span>
                  <div className={"fw-semibold text-white"} style={{fontSize: "10px"}}>Updated 2h ago</div>
                  <div className={"text-muted mt-1"} style={{fontSize: "10px", lineHeight: 1.2}}>
                    Incorrect lineup information
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className={"dashboard-card"}>
            <div className={"d-flex align-items-center justify-content-between mb-2"}>
              <span className={"section-header mb-0"}>DUPLICATE COVERAGE (3)</span>
              <i className={"bi bi-chevron-up text-muted"} style={{fontSize: "10px"}}></i>
            </div>

            <div className={"d-flex flex-column gap-1"}>
              <div className={"dup-row"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-globe text-primary"}></i> Sky Sports
                </span>
                <span className={"text-muted"} style={{fontSize: "10px"}}>2h ago</span>
                <span className={"text-success fw-bold"} style={{fontSize: "10px"}}>98% MATCH</span>
              </div>

              <div className={"dup-row"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-tv text-danger"}></i> ESPN
                </span>
                <span className={"text-muted"} style={{fontSize: "10px"}}>2h ago</span>
                <span className={"text-success fw-bold"} style={{fontSize: "10px"}}>95% MATCH</span>
              </div>

              <div className={"dup-row"}>
                <span className={"d-flex align-items-center gap-2 text-white"}>
                  <i className={"bi bi-broadcast text-warning"}></i> BBC Sport
                </span>
                <span className={"text-muted"} style={{fontSize: "10px"}}>3h ago</span>
                <span className={"text-success fw-bold"} style={{fontSize: "10px"}}>92% MATCH</span>
              </div>
            </div>

            <div className={"text-center mt-3 pt-2 border-top border-secondary border-opacity-25"}>
              <a href={"#"} className={"text-muted text-decoration-none"} style={{fontSize: "10px"}}>View all coverage</a>
            </div>
          </div>

          
          <div className={"dashboard-card"}>
            <div className={"d-flex align-items-center justify-content-between"} style={{cursor: "pointer"}}>
              <div className={"d-flex align-items-center gap-2"}>
                <i className={"bi bi-bookmark text-muted"}></i>
                <div>
                  <div className={"section-header mb-0"} style={{color: "#cbd5e1"}}>SAVED ARTICLES</div>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>12 saved articles</div>
                </div>
              </div>
              <i className={"bi bi-chevron-right text-muted"} style={{fontSize: "10px"}}></i>
            </div>
          </div>

          
          <div className={"dashboard-card"}>
            <div className={"section-header"}>FEED STATUS</div>

            <div className={"row g-2"}>
              <div className={"col-3"}>
                <div className={"status-box"}>
                  <div className={"filter-lbl mb-2"}>LOADING</div>
                  <div className={"spinner-border spinner-border-sm text-primary mb-1"} role={"status"}></div>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>Loading news...</div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"status-box"}>
                  <div className={"filter-lbl mb-2"}>EMPTY</div>
                  <i className={"bi bi-file-earmark-x text-muted mb-1"} style={{fontSize: "14px"}}></i>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>No news found</div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"status-box"}>
                  <div className={"filter-lbl mb-2"}>OFFLINE</div>
                  <i className={"bi bi-wifi-off text-muted mb-1"} style={{fontSize: "14px"}}></i>
                  <div className={"text-muted"} style={{fontSize: "10px"}}>You're offline</div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"status-box error-box"}>
                  <div className={"filter-lbl mb-1 text-danger"}>FEED ERROR</div>
                  <i className={"bi bi-exclamation-triangle text-danger mb-1"} style={{fontSize: "14px"}}></i>
                  <div className={"text-danger"} style={{fontSize: "10px"}}>Failed to load</div>
                  <button className={"btn-retry"}>Retry</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
	</main>
	
	
	
	



<Script src={"/assets/next/news-boot.js"} strategy="afterInteractive" />
    </>
  );
}
