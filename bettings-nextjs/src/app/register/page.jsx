import Script from 'next/script';
import AuthNav from '../../components/AuthNav';
import Link from 'next/link';
import RegisterForm from '../../components/auth/RegisterForm';

export default function Page() {
  return (
    <>

















<nav className={"navbar navbar-expand-lg fixed-top"}>

<div className={"container"}>



<div className={"brand-icon"}>
 <img src={"/images/logo.png"} style={{width: "250px"}} />
</div>

<div className={"brand-text"}>
FOOTBALL <span>INTELLIGENCE</span>
</div>



<button className={"navbar-toggler bg-dark"} data-bs-toggle={"collapse"} data-bs-target={"#nav"}>

<i className={"bi bi-list text-white"}></i>

</button>

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


 <style dangerouslySetInnerHTML={{ __html: "\r\n       \r\n\r\n        :root {\r\n            \r\n            --surface-bg: #0f172a;\r\n            \r\n            --card-border: #1e293b;\r\n            \r\n            --accent-green: #10b981;\r\n        }\r\n        /* --- AUTH SECTION --- */\r\n        .auth-section {\r\n            flex: 1;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            padding: 120px 20px 60px 20px;\r\n        }\r\n\r\n        .register-container {\r\n            width: 100%;\r\n            max-width: 1020px;\r\n            background-color: var(--card-bg);\r\n            border: 1px solid var(--card-border);\r\n            border-radius: 20px;\r\n            overflow: hidden;\r\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);\r\n        }\r\n\r\n        /* LEFT VISUAL PANEL */\r\n        .register-visual {\r\n            background: linear-gradient(135deg, rgba(8, 18, 14, 0.95), rgba(3, 8, 6, 0.98)),\r\n                        url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat;\r\n            border-right: 1px solid var(--card-border);\r\n            padding: 48px 40px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            position: relative;\r\n        }\r\n\r\n        .register-visual::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0; left: 0; right: 0; bottom: 0;\r\n            background: radial-gradient(circle at top left, rgba(0, 230, 118, 0.15), transparent 60%);\r\n            pointer-events: none;\r\n        }\r\n\r\n        .badge-green {\r\n            background: rgba(0, 230, 118, 0.1);\r\n            color: var(--accent-green);\r\n            border: 1px solid rgba(0, 230, 118, 0.2);\r\n            padding: 6px 14px;\r\n            border-radius: 20px;\r\n            font-size: 11px;\r\n            font-weight: 600;\r\n            letter-spacing: 0.5px;\r\n            display: inline-flex;\r\n            align-items: center;\r\n            gap: 6px;\r\n        }\r\n\r\n        .visual-stat-card {\r\n            background: rgba(8, 18, 14, 0.85);\r\n            border: 1px solid var(--card-border);\r\n            backdrop-filter: blur(8px);\r\n            border-radius: 12px;\r\n            padding: 16px;\r\n            margin-top: 24px;\r\n        }\r\n\r\n        .feature-item {\r\n            display: flex;\r\n            align-items: flex-start;\r\n            gap: 12px;\r\n            margin-bottom: 16px;\r\n        }\r\n\r\n        .feature-item i {\r\n            color: var(--accent-green);\r\n            font-size: 16px;\r\n            margin-top: 2px;\r\n        }\r\n\r\n        .feature-item p {\r\n            margin: 0;\r\n            font-size: 12px;\r\n            color: var(--text-secondary);\r\n        }\r\n\r\n        /* RIGHT FORM PANEL */\r\n        .register-form-container {\r\n            padding: 48px 40px;\r\n        }\r\n\r\n        .form-control {\r\n            background-color: var(--bg-dark);\r\n            border: 1px solid var(--card-border);\r\n            color: var(--text-primary);\r\n            font-size: 13px;\r\n            padding: 11px 14px 11px 40px;\r\n            border-radius: 8px;\r\n        }\r\n\r\n        .form-control:focus {\r\n            background-color: var(--bg-dark);\r\n            border-color: var(--accent-green);\r\n            color: var(--text-primary);\r\n            box-shadow: 0 0 0 0.25rem rgba(0, 230, 118, 0.15);\r\n        }\r\n\r\n        .input-icon {\r\n            position: absolute;\r\n            left: 14px;\r\n            top: 38px;\r\n            color: var(--text-secondary);\r\n            z-index: 10;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .btn-social {\r\n            background-color: var(--surface-dark);\r\n            border: 1px solid var(--card-border);\r\n            color: var(--text-primary);\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            padding: 10px;\r\n            border-radius: 8px;\r\n            transition: all 0.2s ease;\r\n        }\r\n\r\n        .btn-social:hover {\r\n            border-color: var(--accent-green);\r\n            color: var(--text-primary);\r\n        }\r\n\r\n        .divider {\r\n            display: flex;\r\n            align-items: center;\r\n            text-align: center;\r\n            color: var(--text-secondary);\r\n            font-size: 11px;\r\n            margin: 20px 0;\r\n            letter-spacing: 0.5px;\r\n        }\r\n\r\n        .divider::before, .divider::after {\r\n            content: '';\r\n            flex: 1;\r\n            border-bottom: 1px solid var(--card-border);\r\n        }\r\n\r\n        .divider::before { margin-right: .8em; }\r\n        .divider::after { margin-left: .8em; }\r\n\r\n        \r\n    " }} />



<section className={"auth-section"}>
    <div className={"register-container"}>
        <div className={"row g-0"}>
            
            
            <div className={"col-lg-5 d-none d-lg-flex register-visual"}>
                <div>
                    <span className={"badge-green mb-3"}>
                        <i className={"bi bi-cpu"}></i> AI-Powered Analytics
                    </span>
                    <h2 className={"fw-bold text-white mb-3"} style={{lineHeight: 1.3}}>
                        Unlock High-Precision Match Signals.
                    </h2>
                    <p className={"text-secondary small"}>
                        Join 250,000+ analysts using AI predictions, real-time market liquidity indicators, and sharp money detection.
                    </p>

                    
                    <div className={"mt-4"}>
                        <div className={"feature-item"}>
                            <i className={"bi bi-check-circle-fill"}></i>
                            <div>
                                <strong className={"text-white d-block small"}>500+ Leagues Covered</strong>
                                <p>Deep algorithmic insights across global fixtures.</p>
                            </div>
                        </div>

                        <div className={"feature-item"}>
                            <i className={"bi bi-check-circle-fill"}></i>
                            <div>
                                <strong className={"text-white d-block small"}>Sharp Money Alerts</strong>
                                <p>Instant detection of high-volume market moves.</p>
                            </div>
                        </div>

                        <div className={"feature-item"}>
                            <i className={"bi bi-check-circle-fill"}></i>
                            <div>
                                <strong className={"text-white d-block small"}>98.7% Model Accuracy</strong>
                                <p>Trained on over 1,000,000 historical matches.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className={"visual-stat-card"}>
                    <div className={"d-flex justify-content-between align-items-center mb-2"}>
                        <span className={"text-success small fw-semibold"} style={{fontSize: "11px"}}>● LIVE SIGNAL</span>
                        <span className={"text-secondary small"} style={{fontSize: "11px"}}>UCL</span>
                    </div>
                    <div className={"d-flex justify-content-between text-white fw-bold small"}>
                        <span>Real Madrid vs Barcelona</span>
                        <span className={"text-success"}>82% Conf.</span>
                    </div>
                </div>
            </div>

            
            <div className={"col-lg-7 register-form-container"}>
                <div className={"mb-4"}>
                    <span className={"badge-green mb-2 d-inline-flex d-lg-none"}>
                        <i className={"bi bi-stars"}></i> Get Started
                    </span>
                    <h3 className={"fw-bold text-white mb-1"}>Create Your Account</h3>
                    <p className={"text-secondary small"}>Start analyzing matches free with full access to standard insights.</p>
                </div>

                <RegisterForm />

                <div className={"divider"}>OR SIGN UP WITH</div>

                
                <div className={"row g-2 mb-4"}>
                    <div className={"col-6"}>
                        <button className={"btn btn-social w-100 d-flex align-items-center justify-content-center gap-2"}>
                            <i className={"fa-brands fa-google text-danger"}></i> Google
                        </button>
                    </div>
                    <div className={"col-6"}>
                        <button className={"btn btn-social w-100 d-flex align-items-center justify-content-center gap-2"}>
                            <i className={"fa-brands fa-github text-white"}></i> GitHub
                        </button>
                    </div>
                </div>

                
                <div className={"text-center text-secondary small"} style={{fontSize: "12px"}}>
                    Already have an account? <Link href={"/login"} className={"text-success text-decoration-none fw-semibold"}>Sign in here</Link>
                </div>

            </div>

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
</div>

</a>

<p className={"footer-description"}>
AI-powered football intelligence combining match analytics,
predictive models and betting market intelligence.
</p>

</div>


<div className={"col-6 col-lg-2"}>

<h6>PLATFORM</h6>

<ul>

<li><a href={"#matches"}>Matches</a></li>
<li><a href={"#"}>AI Predictions</a></li>
<li><a href={"#"}>Market Analysis</a></li>
<li><a href={"#"}>Statistics</a></li>

</ul>

</div>


<div className={"col-6 col-lg-2"}>

<h6>INTELLIGENCE</h6>

<ul>

<li><a href={"#volume"}>Betting Volume</a></li>
<li><a href={"#"}>Sharp Money</a></li>
<li><a href={"#"}>Steam Moves</a></li>
<li><a href={"#"}>Reports</a></li>

</ul>

</div>


<div className={"col-6 col-lg-2"}>

<h6>COMPANY</h6>

<ul>

<li><a href={"#"}>About</a></li>
<li><a href={"#pricing"}>Pricing</a></li>
<li><a href={"#"}>Contact</a></li>
<li><a href={"#"}>FAQ</a></li>

</ul>

</div>


<div className={"col-6 col-lg-2"}>

<h6>LEGAL</h6>

<ul>

<li><a href={"#"}>Privacy</a></li>
<li><a href={"#"}>Terms</a></li>
<li><a href={"#"}>Security</a></li>

</ul>

</div>

</div>


<div className={"copyright d-flex justify-content-between flex-wrap gap-3"}>

<span>
© 2026 Football Intelligence. All rights reserved.
</span>

<span>
Built for smarter football decisions.
</span>

</div>

</div>

</footer>










<Script src={"/assets/next/register-boot.js"} strategy="afterInteractive" />
    </>
  );
}
