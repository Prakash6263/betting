import Script from 'next/script';
import Link from 'next/link';
import AnalysisShell from '../_assets/shell';

export const metadata = { title: 'Team Power - Arsenal vs Chelsea | Myodin' };

export default function Page() {
  return (
    <AnalysisShell>
      <div className={"myo-main"}>
        <div className={"myo-top"}>
          <div><h1>Team Power</h1><small>Arsenal vs Chelsea &bull; Premier League &bull; Myodin</small></div>
          <Link href={"/match-analysis/arsenal-vs-chelsea"} style={{fontSize:"12px",color:"#8ea0b8"}}>&larr; Back to Overview</Link>
        </div>
        <div className={"myo-sections"}>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea"}><span className={"d-none d-md-inline"}></span>Overview</Link>
          <Link className={"myo-sec active"} href={"/match-analysis/arsenal-vs-chelsea/team-power"}><span className={"d-none d-md-inline"}></span>Team Power</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/form-momentum"}><span className={"d-none d-md-inline"}></span>Form & Momentum</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/performance-quality"}><span className={"d-none d-md-inline"}></span>Performance Quality</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/match-context"}><span className={"d-none d-md-inline"}></span>Match Context</Link>
          <Link className={"myo-sec"} href={"/match-analysis/arsenal-vs-chelsea/tactical-matchup"}><span className={"d-none d-md-inline"}></span>Tactical Matchup</Link>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Overall Team Power Index</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"26px",alignItems:"center"}}>
            <div style={{textAlign:"center",minWidth:"120px"}}><div className={"myo-num ars"}>84</div><div style={{fontSize:"11px",color:"#8ea0b8"}}>Arsenal Power Index</div></div>
            <div style={{flex:1,minWidth:"220px"}}>
              <div className={"myo-compare"}><span className={"nm"}>Arsenal</span><span className={"bar left"}><i style={{width:"84%"}}></i></span><span className={"val"}>84</span></div>
              <div className={"myo-compare"}><span className={"nm"}>Chelsea</span><span className={"bar right"}><i style={{width:"78%"}}></i></span><span className={"val"}>78</span></div>
            </div>
            <div style={{textAlign:"center",minWidth:"120px"}}><div className={"myo-num che"}>78</div><div style={{fontSize:"11px",color:"#8ea0b8"}}>Chelsea Power Index</div></div>
          </div>
          <div style={{fontSize:"11.5px",color:"#94a3b8",marginTop:"12px",lineHeight:1.6}}>Myodin rates Arsenal higher across attack and defence. The gap is +6 index points, mainly from defensive solidity and set-piece threat.</div>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Unit Ratings (0-100)</div>
          <table className={"myo-odds"}>
            <thead><tr><th>Unit</th><th>Arsenal</th><th>Chelsea</th><th>Myodin edge</th></tr></thead>
            <tbody>
              <tr><td>Attack</td><td>86</td><td>80</td><td className={"up"}>Arsenal +6</td></tr>
              <tr><td>Defence</td><td>87</td><td>74</td><td className={"up"}>Arsenal +13</td></tr>
              <tr><td>Midfield control</td><td>83</td><td>81</td><td className={"up"}>Arsenal +2</td></tr>
              <tr><td>Goalkeeper</td><td>84</td><td>82</td><td className={"up"}>Arsenal +2</td></tr>
              <tr><td>Set pieces</td><td>88</td><td>70</td><td className={"up"}>Arsenal +18</td></tr>
              <tr><td>Bench depth</td><td>78</td><td>84</td><td className={"down"}>Chelsea +6</td></tr>
            </tbody>
          </table>
        </div>
        <div className={"myo-card"}>
          <div className={"myo-card-title"}><span style={{color:"#34d399"}}>&#9670;</span> Myodin Take</div>
          <div className={"myo-ai"}>Arsenal are the stronger side on paper, especially at the back and from set pieces. Chelsea can only offset this with superior bench options and transition speed if the game opens up.</div>
        </div>
        <div className={"myo-foot"}>Demo build - sample data for UI review. Backend will serve real model output.</div>
      </div>
    </AnalysisShell>
  );
}