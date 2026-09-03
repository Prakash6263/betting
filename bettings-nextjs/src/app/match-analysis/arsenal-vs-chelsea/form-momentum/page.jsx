import Script from 'next/script';
import Link from 'next/link';
import AnalysisShell from '../_assets/shell';

export const metadata = { title: 'Form & Momentum - Arsenal vs Chelsea | Myodin' };

export default function Page() {
  return (
    <AnalysisShell>
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Form & Momentum</h1><small>Arsenal vs Chelsea &bull; Premier League &bull; Myodin</small></div>
          <Link href={"/match-analysis/arsenal-vs-chelsea"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Overview</Link>
        </div>
        <div className={"myo-sections"}>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea"}><span className={"d-none d-md-inline"}></span>Overview</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}><span className={"d-none d-md-inline"}></span>Team Power</Link>
          <Link className={"myo-sec active"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}><span className={"d-none d-md-inline"}></span>Form & Momentum</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}><span className={"d-none d-md-inline"}></span>Performance Quality</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}><span className={"d-none d-md-inline"}></span>Match Context</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}><span className={"d-none d-md-inline"}></span>Tactical Matchup</Link>
        </div>
        <div className={"myo-cols"}>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Arsenal - Last 5</div>
            <div style={{marginBottom:"8px"}}><span className={"myo-fl w"}>W</span><span className={"myo-fl w"}>W</span><span className={"myo-fl w"}>W</span><span className={"myo-fl w"}>W</span><span className={"myo-fl d"}>D</span></div>
            <div className={"myo-row-2"}><span>Points per match (last 5)</span><b>2.4</b></div>
            <div className={"myo-row-2"}><span>Points per match (last 10)</span><b>2.3</b></div>
            <div className={"myo-row-2"}><span>Home form</span><b>WWWWD</b></div>
            <div className={"myo-row-2"}><span>xG for (last 5)</span><b>2.12</b></div>
            <div className={"myo-row-2"}><span>xG against (last 5)</span><b>0.88</b></div>
          </div>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Chelsea - Last 5</div>
            <div style={{marginBottom:"8px"}}><span className={"myo-fl w"}>W</span><span className={"myo-fl d"}>D</span><span className={"myo-fl w"}>W</span><span className={"myo-fl l"}>L</span><span className={"myo-fl d"}>D</span></div>
            <div className={"myo-row-2"}><span>Points per match (last 5)</span><b>1.6</b></div>
            <div className={"myo-row-2"}><span>Points per match (last 10)</span><b>1.7</b></div>
            <div className={"myo-row-2"}><span>Away form</span><b>WDWLD</b></div>
            <div className={"myo-row-2"}><span>xG for (last 5)</span><b>1.55</b></div>
            <div className={"myo-row-2"}><span>xG against (last 5)</span><b>1.31</b></div>
          </div>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Momentum Meter</div>
          <div className={"myo-compare"}><span className={"nm"}>Arsenal</span><span className={"bar left"}><i style={{width:"76%"}}></i></span><span className={"val"}>+0.6</span></div>
          <div className={"myo-compare"}><span className={"nm"}>Chelsea</span><span className={"bar right"}><i style={{width:"38%"}}></i></span><span className={"val"}>-0.4</span></div>
          <div style={{fontSize:"11.5px",color:"#94a3b8",marginTop:"10px",lineHeight:1.6}}>Momentum strongly favours Arsenal: 5-game unbeaten, rising xG output and a cleaner defensive record. Chelsea are trending slightly down after a defeat and a draw, and travel on shorter rest.</div>
        </div>
        <div className={"myo-foot"}>Demo build - sample data for UI review. Backend will serve real model output.</div>
      </div>
    </AnalysisShell>
  );
}