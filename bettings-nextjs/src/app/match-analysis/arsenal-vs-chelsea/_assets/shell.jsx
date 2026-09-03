import Script from 'next/script';
import DashboardChrome from '../../../../components/DashboardChrome.jsx';
import Link from 'next/link';
import { css } from './myoCss';

export default function AnalysisShell({ children }) {
  return (
    <>
<DashboardChrome />


    <main className={"main-content"} id={"mainContent"}>
      {children}
    </main>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Script src={"/assets/next/myodin-analysis-boot.js"} strategy="afterInteractive" />
    </>
  );
}
