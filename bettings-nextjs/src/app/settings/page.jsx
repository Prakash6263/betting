import Script from 'next/script';
import UserMenu from '../../components/profile/UserMenu';
import Link from 'next/link';
import SettingsContent from '../../components/profile/SettingsContent';

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

        
        <UserMenu />
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
        <Link href={"/settings"} className={"nav-link active"}>
            <i className={"fa-solid fa-gear"}></i>
            <span className={"sidebar-text"}>Settings</span>
        </Link>
        <Link href={"/help-support"} className={"nav-link"}>
            <i className={"fa-solid fa-circle-question"}></i>
            <span className={"sidebar-text"}>Help & Support</span>
        </Link>
    </div>

    
</aside>
	<SettingsContent />
	
	
	
	


<Script src={"/assets/next/settings-boot.js"} strategy="afterInteractive" />
    </>
  );
}
