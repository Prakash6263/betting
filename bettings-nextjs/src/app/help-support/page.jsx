import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />

	<main className={"main-content"} id={"mainContent"}>
		<section className={"hero-banner-card mb-4"}>
			<span className={"sport-kicker"}><i className={"fa-solid fa-circle-question"}></i> SUPPORT CENTRE</span>
			<h1 className={"page-title mt-2 mb-1"}>Help &amp; Support</h1>
			<p className={"mb-0 text-white"}>Find answers or contact the Football Intelligence team.</p>
		</section>
		<div className={"row g-3"}>
			<div className={"col-lg-7"}>
				<div className={"panel-card"}>
					<h2 className={"panel-title mb-3"}>Frequently asked questions</h2>
					<details className={"p-3 border-bottom"}>
						<summary className={"fw-semibold"}>
							How are model probabilities calculated?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Our models blend team form, injury updates, player matchups, bookie odds and real-time market signals for every prediction.</p>
					</details>
					<details className={"p-3 border-bottom"}>
						<summary className={"fw-semibold"}>
							How do I change my notification preferences?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Go to Settings to enable or disable alerts for live matches, market events, and strategy updates.</p>
					</details>
					<details className={"p-3 border-bottom"}>
						<summary className={"fw-semibold"}>
							What should I do if I forget my password?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Use the reset link on the login page, or contact support if your account email is not recognized.</p>
					</details>
					<details className={"p-3 border-bottom"}>
						<summary className={"fw-semibold"}>
							How can I request a new feature?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Send us a ticket or email support with your idea—we review feature requests weekly.</p>
					</details>
					<details className={"p-3 border-bottom"}>
						<summary className={"fw-semibold"}>
							How do I add a fixture to my watchlist?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Open a match and select the star icon next to the fixture.</p>
					</details>
					<details className={"p-3"}>
						<summary className={"fw-semibold"}>
							When is market data refreshed?
						</summary>
						<p className={"text-secondary mb-0 mt-2"}>Live market signals refresh continuously while an event is active.</p>
					</details>
				</div>
			</div>
			<div className={"col-lg-5"}>
				<div className={"panel-card"}>
					<h2 className={"panel-title mb-1"}>Need more help?</h2>
					<p className={"panel-sub mb-3"}>If you need urgent assistance with your account, data access, or platform settings, we’re here to help.</p><a className={"btn btn-success mb-3"} href={"mailto:support@footballintelligence.com"}><i className={"fa-solid fa-envelope me-2"}></i>Email support</a>
				</div>
			</div>
		</div>
	</main>
	
	
	
	


<Script src={"/assets/next/help-support-boot.js"} strategy="afterInteractive" />
    </>
  );
}
