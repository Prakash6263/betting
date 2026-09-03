import Script from 'next/script';
import Link from 'next/link';
import AnalysisShell from '../_assets/shell';

export const metadata = { title: 'Match Context - Arsenal vs Chelsea | Myodin' };

export default function Page() {
  return (
    <AnalysisShell>
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Match Context</h1><small>Arsenal vs Chelsea &bull; Premier League &bull; Myodin</small></div>
          <Link href={"/match-analysis/arsenal-vs-chelsea"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Overview</Link>
        </div>
        <div className={"myo-sections"}>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea"}><span className={"d-none d-md-inline"}></span>Overview</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}><span className={"d-none d-md-inline"}></span>Team Power</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}><span className={"d-none d-md-inline"}></span>Form & Momentum</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}><span className={"d-none d-md-inline"}></span>Performance Quality</Link>
          <Link className={"myo-sec active"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}><span className={"d-none d-md-inline"}></span>Match Context</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}><span className={"d-none d-md-inline"}></span>Tactical Matchup</Link>
        </div>
        <div className={"myo-cols"}>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Arsenal - Availability</div>
            <div className={"myo-factors"}>
              <span className={"myo-fact"}>Injury: <b>Saka - Doubtful</b></span>
              <span className={"myo-fact"}>Injury: <b>Timber - Out</b></span>
              <span className={"myo-fact"}>Suspensions: <b>None</b></span>
              <span className={"myo-fact"}>Expected XI: <b>4-3-3 (near full)</b></span>
              <span className={"myo-fact"}>Rest: <b>6 days since last match</b></span>
            </div>
          </div>
          <div className={"myo-card"} style={{marginBottom:0}}>
            <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Chelsea - Availability</div>
            <div className={"myo-factors"}>
              <span className={"myo-fact"}>Injury: <b>Lavia - Out</b></span>
              <span className={"myo-fact"}>Injury: <b>Fofana - Doubtful</b></span>
              <span className={"myo-fact"}>Suspensions: <b>None</b></span>
              <span className={"myo-fact"}>Expected XI: <b>3-4-2-1</b></span>
              <span className={"myo-fact"}>Rest: <b>3 days since last match</b></span>
            </div>
          </div>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Fatigue, Travel, Motivation & Rotation</div>
          <div className={"myo-row-2"}><span>Rest advantage</span><b>Arsenal +3 days</b></div>
          <div className={"myo-row-2"}><span>Travel</span><b>London derby - no travel for either side</b></div>
          <div className={"myo-row-2"}><span>Motivation</span><b>High both - top-4 race vs title push</b></div>
          <div className={"myo-row-2"}><span>Rotation risk</span><b>Low (Arsenal) / Medium (Chelsea - schedule)</b></div>
          <div className={"myo-row-2"}><span>Midweek fixture</span><b>No - both had full week except Chelsea&apos;s cup tie</b></div>
          <div style={{fontSize:"11.5px",color:"#94a3b8",marginTop:"10px",lineHeight:1.6}}>Context favours Arsenal: more rest, no travel and a settled XI. Chelsea&apos;s shorter turnaround and slight rotation risk raise their uncertainty, which the model includes as downside.</div>
        </div>
        <div className={"myo-foot"}>Demo build - sample data for UI review. Backend will serve real model output.</div>
      </div>
    </AnalysisShell>
  );
}