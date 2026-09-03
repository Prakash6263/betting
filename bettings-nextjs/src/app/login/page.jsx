import Script from 'next/script';
import Link from 'next/link';

export default function Page() {
  return (
    <>

















<nav className={"navbar navbar-expand-lg fixed-top"}>

<div className={"container"}>

<a className={"navbar-brand"} href={"#"}>



<div className={"brand-text"}>
 <img src={"/images/logo.png"} style={{width: "250px"}} />
</div>

</a>

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
<Link href={"/login"} className={"btn-login"}>
Login
</Link>

<Link href={"/register"} className={"btn-primary-custom"}>
Get Started
</Link>

</div>

</div>

</div>

</nav>


 <style dangerouslySetInnerHTML={{ __html: "\r\n         :root {\r\n            \r\n            --surface-bg: #0f172a;\r\n            \r\n            --card-border: #1e293b;\r\n            \r\n            --accent-green: #10b981;\r\n        }\r\n\r\n        \r\n\r\n       \r\n        /* --- AUTH SECTION --- */\r\n        .auth-section {\r\n            flex: 1;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            padding: 120px 20px 60px 20px;\r\n        }\r\n\r\n        .auth-card {\r\n            background-color: var(--card-bg);\r\n            border: 1px solid var(--card-border);\r\n            border-radius: 16px;\r\n            width: 100%;\r\n            max-width: 440px;\r\n            padding: 36px;\r\n            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);\r\n            position: relative;\r\n        }\r\n\r\n        .badge-green {\r\n            background: rgba(0, 230, 118, 0.1);\r\n            color: var(--accent-green);\r\n            border: 1px solid rgba(0, 230, 118, 0.2);\r\n            padding: 6px 12px;\r\n            border-radius: 20px;\r\n            font-size: 11px;\r\n            font-weight: 600;\r\n            letter-spacing: 0.5px;\r\n            display: inline-flex;\r\n            align-items: center;\r\n            gap: 6px;\r\n        }\r\n\r\n        .form-control {\r\n            background-color: var(--bg-dark);\r\n            border: 1px solid var(--card-border);\r\n            color: var(--text-primary);\r\n            font-size: 13px;\r\n            padding: 11px 14px 11px 40px;\r\n            border-radius: 8px;\r\n        }\r\n\r\n        .form-control:focus {\r\n            background-color: var(--bg-dark);\r\n            border-color: var(--accent-green);\r\n            color: var(--text-primary);\r\n            box-shadow: 0 0 0 0.25rem rgba(0, 230, 118, 0.15);\r\n        }\r\n\r\n        .input-group-text-custom {\r\n            position: absolute;\r\n            left: 14px;\r\n            top: 38px;\r\n            color: var(--text-secondary);\r\n            z-index: 10;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .btn-social {\r\n            background-color: var(--surface-dark);\r\n            border: 1px solid var(--card-border);\r\n            color: var(--text-primary);\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            padding: 10px;\r\n            border-radius: 8px;\r\n            transition: all 0.2s ease;\r\n        }\r\n\r\n        .btn-social:hover {\r\n            border-color: var(--accent-green);\r\n            color: var(--text-primary);\r\n        }\r\n\r\n        .divider {\r\n            display: flex;\r\n            align-items: center;\r\n            text-align: center;\r\n            color: var(--text-secondary);\r\n            font-size: 11px;\r\n            margin: 22px 0;\r\n            letter-spacing: 0.5px;\r\n        }\r\n\r\n        .divider::before, .divider::after {\r\n            content: '';\r\n            flex: 1;\r\n            border-bottom: 1px solid var(--card-border);\r\n        }\r\n\r\n        .divider::before { margin-right: .8em; }\r\n        .divider::after { margin-left: .8em; }\r\n\r\n        \r\n    " }} />








<section className={"auth-section"}>
    <div className={"auth-card"}>
        
        <div className={"text-center mb-4"}>
            <span className={"badge-green mb-2"}>
                <i className={"bi bi-shield-lock"}></i>
                Secure Portal
            </span>
            <h3 className={"fw-bold text-white mb-1"}>Welcome Back</h3>
            <p className={"text-secondary small"}>Access AI match intelligence & market signals.</p>
        </div>

        <form action={"/dashboard"}>
            
            <div className={"mb-3 position-relative"}>
                <label className={"form-label text-secondary small fw-medium"} style={{fontSize: "11px"}}>EMAIL ADDRESS</label>
                <i className={"bi bi-envelope input-group-text-custom"}></i>
                <input type={"email"} className={"form-control"} placeholder={"user@mail.com"} />
            </div>

            
            <div className={"mb-3 position-relative"}>
                <div className={"d-flex justify-content-between align-items-center mb-1"}>
                    <label className={"form-label text-secondary small fw-medium mb-0"} style={{fontSize: "11px"}}>PASSWORD</label>
                    <a href={"#"} className={"text-success text-decoration-none small"} style={{fontSize: "11px"}}>Forgot password?</a>
                </div>
                <i className={"bi bi-lock input-group-text-custom"}></i>
                <input type={"password"} className={"form-control"} placeholder={"••••••••"} />
            </div>

            
            <div className={"form-check mb-4"}>
                <input className={"form-check-input bg-dark border-secondary"} type={"checkbox"} id={"rememberMe"} />
                <label className={"form-check-label text-secondary small"} htmlFor={"rememberMe"} style={{fontSize: "12px"}}>
                    Keep me logged in
                </label>
            </div>

            
            <button type={"submit"} className={"btn btn-primary-custom w-100 mb-3"}>
                Sign In <i className={"bi bi-arrow-right ms-2"}></i>
            </button>
        </form>

        <div className={"divider"}>OR CONTINUE WITH</div>

        
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
            Don't have an account? <Link href={"/register"} className={"text-success text-decoration-none fw-semibold"}>Sign up</Link>
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










<Script src={"/assets/next/login-boot.js"} strategy="afterInteractive" />
    </>
  );
}
