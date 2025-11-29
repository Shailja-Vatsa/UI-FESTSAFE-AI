import React from "react";

// FestSafe AI - Single-file React + Tailwind UI
// Default export: FestSafeAIApp
// Usage: paste into a Create React App / Vite + Tailwind project.

export default function FestSafeAIApp() {
  return (
    <div className="min-h-screen bg-[#0A1A2F] text-[#FAFAF2] font-sans">
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#245CFF] to-[#56D6FF] flex items-center justify-center shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1046 2 14 2.89543 14 4V10H20C21.1046 10 22 10.8954 22 12V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H12Z" fill="white" opacity="0.08" />
              <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="white" />
              <path d="M16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14C14 15.1046 14.8954 16 16 16Z" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">FestSafe AI</h1>
            <p className="text-xs opacity-80">Predictive Crowd & Medical Intelligence</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="text-sm opacity-80 hover:opacity-100" href="#how">How it works</a>
          <a className="text-sm opacity-80 hover:opacity-100" href="#dashboard">Dashboard</a>
          <a className="text-sm opacity-80 hover:opacity-100" href="#medical">Medical AI</a>
          <a className="text-sm opacity-80 hover:opacity-100" href="#contact">Get Access</a>
          <button className="ml-4 px-4 py-2 rounded-md bg-[#245CFF] hover:bg-[#1f4fe0] transition">Start Demo</button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Agentic AI for Safer Festivals & Faster Medical Response</h2>
            <p className="mt-4 text-lg opacity-85 max-w-xl">Real-time crowd forecasting, automated incident recommendations, and emergency drug-repurposing insights — built to keep large events safer and health systems faster.</p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-[#245CFF] shadow-md hover:scale-[1.01] transition">Try Interactive Demo</button>
              <button className="px-6 py-3 rounded-lg border border-[#2d3f5a] text-sm">Technical Overview</button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              <StatCard label="Prediction Accuracy" value="95%" />
              <StatCard label="Response Speed" value="x4 faster" />
              <StatCard label="Coverage" value="Scale: stadiums → cities" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-[#071125] to-[#0e223c] p-6 shadow-2xl">
              <MiniDashboard />
            </div>

            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full opacity-30 bg-gradient-to-br from-[#56D6FF] to-[#245CFF] blur-3xl"></div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-12 bg-[#071627] rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">How it works</h3>
          <p className="mt-2 text-sm opacity-85 max-w-2xl">An agentic pipeline ingests multi-source inputs, detects crowd-risk patterns, performs causal reasoning and suggests targeted operational interventions. Also extends to medical response by surfacing candidate drug repurposing hypotheses.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Data Intake",
              "Risk Detection",
              "Agentic Reasoning",
              "Actionable Alerts",
              "Medical Extensions",
            ].map((t, i) => (
              <HowNode key={t} index={i + 1} title={t} />
            ))}
          </div>
        </section>

        {/* LIVE DASHBOARD */}
        <section id="dashboard" className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-[#071627] p-6">
            <div className="flex items-start justify-between">
              <h4 className="text-xl font-semibold">Crowd Heat Map</h4>
              <div className="flex items-center gap-3">
                <select className="bg-transparent border border-[#22314b] px-3 py-2 rounded-md">
                  <option>Live</option>
                  <option>Last 30 min</option>
                  <option>Simulate</option>
                </select>
                <button className="px-3 py-2 rounded-md bg-[#245CFF]">Export</button>
              </div>
            </div>

            <div className="mt-6 h-80 rounded-lg bg-gradient-to-br from-[#07142a] to-[#07233b] flex items-center justify-center relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 600 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#245CFF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#56D6FF" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <rect width="600" height="400" fill="url(#g1)" />
              </svg>

              <div className="w-full h-full flex items-center justify-center text-sm opacity-70">[Interactive Map Placeholder — embed Mapbox/Leaflet here]</div>

              <div className="absolute top-6 left-6 bg-[#0d2238] p-3 rounded-lg border border-[#18314d] shadow-lg">
                <div className="text-xs opacity-80">Current Density</div>
                <div className="font-mono text-lg mt-1">High — Gate 3</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <MiniStat title="Projected Injuries" value="12 → 3 in 30m" />
              <MiniStat title="Bottleneck Points" value="Gate 2, Stage B" />
              <MiniStat title="Hydration Risk" value="Elevated" />
            </div>
          </div>

          <aside className="rounded-2xl bg-[#071627] p-6 flex flex-col gap-4">
            <h4 className="text-xl font-semibold">AI Recommendations</h4>
            <div className="flex-1 space-y-3 overflow-auto max-h-96 pr-2">
              <ActionCard title="Deploy Medics" subtitle="Gate 3" text="Recommend 4 medics + 2 stretchers. ETA 8 mins." severity="high" />
              <ActionCard title="Open Cooling Tents" subtitle="Near Stage B" text="Forecasted heat cluster in 22 minutes." severity="medium" />
              <ActionCard title="Manage Flow" subtitle="Gate 1" text="Temporarily redirect entry to Gate 4." severity="low" />
            </div>

            <div>
              <h5 className="text-sm opacity-80">Chat with AI</h5>
              <div className="mt-2 flex gap-2">
                <input placeholder="Ask: 'What if we close Gate 2?'" className="flex-1 bg-[#061022] border border-[#17304a] rounded-md px-3 py-2" />
                <button className="px-3 py-2 rounded-md bg-[#245CFF]">Send</button>
              </div>
            </div>
          </aside>
        </section>

        {/* MEDICAL AI */}
        <section id="medical" className="mt-12 rounded-2xl bg-[#071627] p-8">
          <h3 className="text-2xl font-semibold">Medical Response & Drug Repurposing</h3>
          <p className="mt-2 text-sm opacity-85 max-w-2xl">Leverages clinical embeddings, symptom-clustering, and candidate selection to accelerate emergency drug-repurposing hypotheses in event-based health crises.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Symptom Clustering" body="Realtime clustering of reported symptoms & geolocation trends." />
            <Card title="Repurposing Engine" body="Ranked candidate drugs with evidence-path visualizations." />
            <Card title="Public Health Alerts" body="Automatic alerts for trending syndromic patterns." />
          </div>

          <div className="mt-6 rounded-lg bg-[#061523] p-4">
            <h4 className="font-semibold">Candidate Suggestion</h4>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <DrugCard name="Drug A" score={0.87} details="Mechanism match: inflammatory cascade" />
              <DrugCard name="Drug B" score={0.72} details="Symptom profile similarity 0.81" />
              <DrugCard name="Drug C" score={0.63} details="Low-risk profile; needs trial" />
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="mt-12 rounded-2xl bg-[#071627] p-8 flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-xl font-semibold">Get early access</h4>
            <p className="mt-2 text-sm opacity-80">Request API access or schedule a demo for your event operations team.</p>

            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Name" className="bg-[#061022] border border-[#17304a] rounded-md px-3 py-2" />
              <input placeholder="Organization" className="bg-[#061022] border border-[#17304a] rounded-md px-3 py-2" />
              <input placeholder="Email" className="sm:col-span-2 bg-[#061022] border border-[#17304a] rounded-md px-3 py-2" />
              <textarea placeholder="Tell us about your event" className="sm:col-span-2 bg-[#061022] border border-[#17304a] rounded-md px-3 py-2 h-24" />
              <button className="sm:col-span-2 px-4 py-3 rounded-md bg-[#245CFF]">Request Access</button>
            </form>
          </div>

          <div className="flex-1">
            <h5 className="text-sm opacity-80">Quick links</h5>
            <div className="mt-3 grid grid-cols-2 gap-2 opacity-85">
              <a className="text-sm">Docs</a>
              <a className="text-sm">Security</a>
              <a className="text-sm">Blog</a>
              <a className="text-sm">Careers</a>
            </div>

            <div className="mt-6 text-xs opacity-70">© {new Date().getFullYear()} FestSafe AI — Built for safer gatherings.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}


/* ----------------- Presentational subcomponents ----------------- */
function StatCard({ label, value }) {
  return (
    <div className="bg-[#081828] p-3 rounded-lg shadow-sm border border-[#19314b]">
      <div className="text-xs opacity-80">{label}</div>
      <div className="font-mono font-semibold mt-1">{value}</div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="text-xs opacity-75">Next-hour prediction</div>
        <div className="mt-2 font-mono text-2xl">High risk</div>
        <div className="mt-4 text-sm opacity-80">Alerts: <span className="font-semibold">3</span></div>
      </div>
      <div className="col-span-1">
        <div className="text-xs opacity-75">Nearby incidents</div>
        <ul className="mt-2 text-sm opacity-85 space-y-2">
          <li>Heat-related — Gate 3</li>
          <li>Minor injury — Stage B</li>
          <li>Flow backlog — Gate 1</li>
        </ul>
      </div>
    </div>
  );
}

function HowNode({ index, title }) {
  return (
    <div className="md:col-span-1 flex items-start gap-4 p-3 rounded-md bg-[#061A2A] border border-[#123046]">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#245CFF] to-[#56D6FF] flex items-center justify-center font-bold">{index}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm opacity-80">Quick explanation of step and what the AI does here.</div>
      </div>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="bg-[#061022] p-3 rounded-md border border-[#18314d]">
      <div className="text-xs opacity-80">{title}</div>
      <div className="font-mono mt-1">{value}</div>
    </div>
  );
}

function ActionCard({ title, subtitle, text, severity }) {
  const color = severity === "high" ? "border-red-500" : severity === "medium" ? "border-yellow-500" : "border-green-400";
  return (
    <div className={`p-3 rounded-md bg-[#061425] border ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs opacity-80">{subtitle}</div>
        </div>
        <div className="text-xs opacity-80">{severity.toUpperCase()}</div>
      </div>
      <div className="mt-2 text-sm opacity-85">{text}</div>
    </div>
  );
}

function Card({ title, body }) {
  return (
    <div className="rounded-lg bg-[#061022] p-4 border border-[#153144]">
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-80 mt-2">{body}</div>
    </div>
  );
}

function DrugCard({ name, score, details }) {
  return (
    <div className="rounded-lg bg-[#071827] p-4 border border-[#163046]">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs opacity-80">{details}</div>
        </div>
        <div className="font-mono">{Math.round(score * 100)}%</div>
      </div>
      <div className="mt-3 bg-[#052233] h-2 rounded-full overflow-hidden">
        <div style={{ width: `${score * 100}%` }} className="h-full bg-gradient-to-r from-[#56D6FF] to-[#245CFF]"></div>
      </div>
    </div>
  );
}
