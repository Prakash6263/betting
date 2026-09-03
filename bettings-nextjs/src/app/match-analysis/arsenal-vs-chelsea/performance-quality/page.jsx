import Script from 'next/script';
import Link from 'next/link';
import AnalysisShell from '../_assets/shell';

export const metadata = { title: 'Performance Quality - Arsenal vs Chelsea | Myodin' };

export default function Page() {
  return (
    <AnalysisShell>
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Performance Quality</h1><small>Arsenal vs Chelsea &bull; Premier League &bull; Myodin</small></div>
          <Link href={"/match-analysis/arsenal-vs-chelsea"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Overview</Link>
        </div>
        <div className={"myo-sections"}>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea"}><span className={"d-none d-md-inline"}></span>Overview</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}><span className={"d-none d-md-inline"}></span>Team Power</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}><span className={"d-none d-md-inline"}></span>Form & Momentum</Link>
          <Link className={"myo-sec active"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}><span className={"d-none d-md-inline"}></span>Performance Quality</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}><span className={"d-none d-md-inline"}></span>Match Context</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}><span className={"d-none d-md-inline"}></span>Tactical Matchup</Link>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Performance Comparison (per match, league)</div>
          <table className={"myo-odds"}>
            <thead><tr><th>Metric</th><th>Arsenal</th><th>Chelsea</th><th>League avg</th><th>Better</th></tr></thead>
            <tbody>
              <tr><td>xG</td><td>1.98</td><td>1.48</td><td>1.35</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>xGA</td><td>0.92</td><td>1.43</td><td>1.35</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Big chances created</td><td>3.1</td><td>2.3</td><td>2.2</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Conversion rate</td><td>13.8%</td><td>11.9%</td><td>11.2%</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Shots on target</td><td>6.2</td><td>4.9</td><td>4.4</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Possession quality</td><td>64%</td><td>58%</td><td>51%</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Pressing (PPDA)</td><td>8.1</td><td>11.4</td><td>10.6</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Set-piece xG</td><td>0.42</td><td>0.26</td><td>0.31</td><td className={"up"}>Arsenal</td></tr>
            </tbody>
          </table>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Finishing & Shot Quality</div>
          <div style={{fontSize:"11.5px",color:"#94a3b8",lineHeight:1.7}}>Arsenal create higher-quality chances (0.14 xG per shot vs 0.11) and convert above expectation. Chelsea take more shots from outside the box and rely on individual moments. Over a single match, Arsenal&apos;s process advantage is worth roughly +0.5 expected goals.</div>
        </div>
        <div className={"myo-foot"}>Demo build - sample data for UI review. Backend will serve real model output.</div>
      </div>
    </AnalysisShell>
  );
}