import Script from 'next/script';
import Link from 'next/link';
import AnalysisShell from '../_assets/shell';

export const metadata = { title: 'Tactical Matchup - Arsenal vs Chelsea | Myodin' };

export default function Page() {
  return (
    <AnalysisShell>
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Tactical Matchup</h1><small>Arsenal vs Chelsea &bull; Premier League &bull; Myodin</small></div>
          <Link href={"/match-analysis/arsenal-vs-chelsea"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Overview</Link>
        </div>
        <div className={"myo-sections"}>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea"}><span className={"d-none d-md-inline"}></span>Overview</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}><span className={"d-none d-md-inline"}></span>Team Power</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}><span className={"d-none d-md-inline"}></span>Form & Momentum</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}><span className={"d-none d-md-inline"}></span>Performance Quality</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}><span className={"d-none d-md-inline"}></span>Match Context</Link>
          <Link className={"myo-sec active"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}><span className={"d-none d-md-inline"}></span>Tactical Matchup</Link>
        </div>
        <div className={"myo-cols"}>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Arsenal 4-3-3</div>
            <div style={{fontSize:"12px",color:"#cbd5e1",lineHeight:1.7}}>High press, inverted full-backs, overloads in the left half-space, elite set-piece routines. Vulnerable to fast transitions behind the high line.</div>
          </div>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Chelsea 3-4-2-1</div>
            <div style={{fontSize:"12px",color:"#cbd5e1",lineHeight:1.7}}>Back five with wing-backs, direct transitions through Palmer and Madueke, strong in duels. Can sit deep and hit on the counter if Arsenal dominate the ball.</div>
          </div>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Matchup Factors</div>
          <div className={"myo-compare"}><span className={"nm"}>Pressing</span><span className={"bar left"}><i style={{width:"70%"}}></i></span><span className={"val"}>Arsenal</span></div>
          <div className={"myo-compare"}><span className={"nm"}>Counter risk</span><span className={"bar right"}><i style={{width:"62%"}}></i></span><span className={"val"}>Chelsea</span></div>
          <div className={"myo-compare"}><span className={"nm"}>Aerial</span><span className={"bar right"}><i style={{width:"52%"}}></i></span><span className={"val"}>Even</span></div>
          <div className={"myo-compare"}><span className={"nm"}>Set pieces</span><span className={"bar left"}><i style={{width:"80%"}}></i></span><span className={"val"}>Arsenal</span></div>
          <div className={"myo-compare"}><span className={"nm"}>Possession</span><span className={"bar left"}><i style={{width:"64%"}}></i></span><span className={"val"}>Arsenal</span></div>
          <div style={{fontSize:"11.5px",color:"#94a3b8",marginTop:"10px",lineHeight:1.6}}>Key risk for Arsenal is the Chelsea counter when the high press is bypassed. Chelsea&apos;s best route is wide transitions; Arsenal&apos;s best route is set pieces and sustained pressure in the final third.</div>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Key Duels</div>
          <table className={"myo-odds"}>
            <thead><tr><th>Matchup</th><th>Why it matters</th><th>Advantage</th></tr></thead>
            <tbody>
              <tr><td>Saka vs Cucurella</td><td>Isolation duel on Arsenal&apos;s right</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Havertz vs Colwill</td><td>Air + runs in behind</td><td className={"up"}>Arsenal</td></tr>
              <tr><td>Palmer vs Rice</td><td>Half-space creator vs ball-winner</td><td className={"down"}>Chelsea slight</td></tr>
              <tr><td>Madueke vs Zinchenko</td><td>1v1 transition outlet</td><td className={"down"}>Chelsea</td></tr>
            </tbody>
          </table>
        </div>
        <div className={"myo-foot"}>Demo build - sample data for UI review. Backend will serve real model output.</div>
      </div>
    </AnalysisShell>
  );
}