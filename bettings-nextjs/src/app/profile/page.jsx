import Script from 'next/script';
import Link from 'next/link';

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

        
        <div className={"search-container d-none d-lg-block ms-4"}>
            <i className={"fa-solid fa-magnifying-glass position-absolute "} style={{left: "12px", top: "11px"}}></i>
            <input type={"text"} className={"form-control search-input"} id={"searchInput"} placeholder={"Search match, team, or league..."} />
        </div>
    </div>

    
    <div className={"d-flex align-items-center gap-2 gap-md-3"}>

        
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
        <Link href={"/dashboard"} className={"nav-link active"}>
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
		<section className={"hero-banner-card mb-4"}>
			<span className={"sport-kicker"}><i className={"fa-solid fa-user"}></i> PROFILE CENTRE</span>
			<h1 className={"page-title mt-2 mb-1"}>Your Profile</h1>
			<p className={"mb-0 text-white"}>Review your membership, performance, and account details in one place.</p>
		</section>
		<div className={"row g-3"}>
			<div className={"col-lg-7"}>
				<div className={"panel-card"}>
					<h2 className={"panel-title mb-1"}>Personal Snapshot</h2>
					<p className={"panel-sub mb-3"}>Your profile highlights and account status.</p>
					<div className={"d-flex align-items-center gap-3 mb-4"}>
						<div className={"bg-success rounded-circle d-flex align-items-center justify-content-center"} style={{width: "72px", height: "72px", fontSize: "24px", color: "#071007"}}>
							JD
						</div>
						<div>
							<h3 className={"mb-1"}>John Doe</h3>
							<p className={"text-secondary mb-1"}>Elite Member • Football Intelligence</p><span className={"badge bg-success text-dark"}>Pro Intelligence Plan</span>
						</div>
					</div>
					<div className={"row g-3"}>
						<div className={"col-sm-6"}>
							<div className={"card-panel"}>
								<h5 className={"mb-1"}>Member since</h5>
								<p className={"text-secondary mb-0"}>February 2025</p>
							</div>
						</div>
						<div className={"col-sm-6"}>
							<div className={"card-panel"}>
								<h5 className={"mb-1"}>Total predictions</h5>
								<p className={"text-secondary mb-0"}>1,248</p>
							</div>
						</div>
						<div className={"col-sm-6"}>
							<div className={"card-panel"}>
								<h5 className={"mb-1"}>Success rate</h5>
								<p className={"text-secondary mb-0"}>78.4%</p>
							</div>
						</div>
						<div className={"col-sm-6"}>
							<div className={"card-panel"}>
								<h5 className={"mb-1"}>Active devices</h5>
								<p className={"text-secondary mb-0"}>3</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={"col-lg-5"}>
				<div className={"panel-card"}>
					<h2 className={"panel-title mb-2"}>Profile overview</h2>
					<p className={"panel-sub"}>Manage your personal details and security settings.</p>
					<div className={"mb-3"}>
						<span className={"d-block text-secondary small mb-2"}>Full name</span><strong>John Doe</strong>
					</div>
					<div className={"mb-3"}>
						<span className={"d-block text-secondary small mb-2"}>Email</span><strong>john.doe@example.com</strong>
					</div>
					<div className={"mb-3"}>
						<span className={"d-block text-secondary small mb-2"}>Phone</span><strong>+1 555 123 4567</strong>
					</div>
					<div className={"mb-3"}>
						<span className={"d-block text-secondary small mb-2"}>Location</span><strong>London, UK</strong>
					</div>
					<hr className={"border-secondary my-3"} />
					<h3 className={"panel-title mb-2"}>Security</h3>
					<form>
						<div className={"mb-3"}>
							<label className={"form-label small text-secondary"}>Change display name</label><input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"text"} defaultValue={"John Doe"} />
						</div>
						<div className={"mb-3"}>
							<label className={"form-label small text-secondary"}>Update email</label><input className={"form-control form-control-sm bg-dark border-secondary text-white"} type={"email"} defaultValue={"john.doe@example.com"} />
						</div>
						<div className={"mb-3"}>
							<label className={"form-label small text-secondary"}>Current password</label><input className={"form-control form-control-sm bg-dark border-secondary text-white"} placeholder={"Enter current password"} type={"password"} />
						</div><button className={"btn btn-success btn-sm w-100"} type={"button"}>Save profile</button>
					</form>
				</div>
			</div>
		</div>
	</main>
	
	
	
	


<Script src={"/assets/next/profile-boot.js"} strategy="afterInteractive" />
    </>
  );
}
