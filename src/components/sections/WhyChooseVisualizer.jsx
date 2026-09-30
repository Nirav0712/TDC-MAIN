import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, BarChart3, ShieldCheck, CheckCircle2, Cpu,
  Code2, Terminal, Layers, Activity, Sparkles, Sliders,
  GitBranch, Zap, MessageSquare, Clock, Globe, ArrowRight,
  Palette, Play, Shield, RefreshCw, Server
} from 'lucide-react';

export const WhyChooseVisualizer = ({ activeIndex }) => {
  // 1. STRATEGIC THINKING
  if (activeIndex === 0) {
    return <StrategicVisualizer />;
  }

  // 2. DESIGN EXCELLENCE
  if (activeIndex === 1) {
    return <DesignVisualizer />;
  }

  // 3. TECHNICAL EXPERTISE
  if (activeIndex === 2) {
    return <TechnicalVisualizer />;
  }

  // 4. SCALABLE SOLUTIONS
  if (activeIndex === 3) {
    return <ScalableVisualizer />;
  }

  // 5. TRANSPARENT COMMUNICATION
  if (activeIndex === 4) {
    return <CommunicationVisualizer />;
  }

  // 6. LONG-TERM PARTNERSHIP
  return <PartnershipVisualizer />;
};

/* --- 1. STRATEGIC THINKING VISUALIZER --- */
const StrategicVisualizer = () => {
  const [stage, setStage] = useState('Scale');
  const stageData = {
    MVP: { roi: '3.2x', velocity: '94%', timeline: '4 Weeks', marketFit: '92%' },
    Scale: { roi: '4.8x', velocity: '99%', timeline: '8 Weeks', marketFit: '98%' },
    Enterprise: { roi: '6.5x', velocity: '99.5%', timeline: 'Quarterly', marketFit: '99.9%' }
  };

  const current = stageData[stage];

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#061A2E] via-[#0A2640] to-[#041220] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A9D6]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#18C5E8]/15 blur-[90px] rounded-full pointer-events-none" />

      {/* Top Bar: Title & Stage Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <TrendingUp size={18} />
          </div>
          <div>
            <span className="text-xs text-cyan-300/80 font-mono tracking-wider block">CAPABILITY ENGINE</span>
            <h4 className="text-base font-bold font-heading">ROI & Strategy Simulator</h4>
          </div>
        </div>

        {/* Stage Pill Switcher */}
        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/10 text-xs">
          {['MVP', 'Scale', 'Enterprise'].map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                stage === s
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Interactive Metrics Panel */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 relative z-10">
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <span className="text-[11px] text-slate-400 font-medium block mb-1">Projected ROI</span>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">{current.roi}</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <span className="text-[11px] text-slate-400 font-medium block mb-1">Market Velocity</span>
          <span className="text-2xl font-black text-emerald-400">{current.velocity}</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <span className="text-[11px] text-slate-400 font-medium block mb-1">Time to Value</span>
          <span className="text-2xl font-black text-sky-300">{current.timeline}</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <span className="text-[11px] text-slate-400 font-medium block mb-1">Market Fit Score</span>
          <span className="text-2xl font-black text-cyan-300">{current.marketFit}</span>
        </div>
      </div>

      {/* Interactive Growth Trajectory Graph */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 relative z-10">
        <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Real-Time Strategy Trajectory ({stage} Mode)
          </span>
          <span className="text-cyan-400 font-bold">100% Value Aligned</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-24 px-2">
          {[40, 58, 65, 82, 75, 95, 100].map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`w-full rounded-t-lg transition-all ${
                  idx === 6
                    ? 'bg-gradient-to-t from-cyan-500 to-emerald-400 shadow-[0_0_15px_rgba(24,197,232,0.6)]'
                    : 'bg-gradient-to-t from-cyan-900/60 to-cyan-500/60'
                }`}
              />
              <span className="text-[10px] text-slate-400 font-mono">M{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Floating Badge */}
      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-cyan-400" />
          Every architecture decision backed by business ROI
        </span>
        <span className="font-mono text-cyan-300">Phase 01 Active</span>
      </div>
    </div>
  );
};

/* --- 2. DESIGN EXCELLENCE VISUALIZER --- */
const DesignVisualizer = () => {
  const [activeTheme, setActiveTheme] = useState('cyan');
  const themes = {
    cyan: { primary: 'bg-[#00A9D6]', text: 'text-[#00A9D6]', label: 'Electric Cyan' },
    ocean: { primary: 'bg-[#087EA4]', text: 'text-[#087EA4]', label: 'Deep Ocean' },
    purple: { primary: 'bg-[#8B5CF6]', text: 'text-[#8B5CF6]', label: 'Modern Violet' }
  };

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#0B1528] via-[#10203E] to-[#081220] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/15 blur-[110px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
            <Palette size={18} />
          </div>
          <div>
            <span className="text-xs text-purple-300 font-mono tracking-wider block">DESIGN SYSTEM LAB</span>
            <h4 className="text-base font-bold font-heading">Figma to React Canvas</h4>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/10 text-xs">
          <Sparkles size={13} className="text-amber-300" />
          <span className="text-slate-200 font-mono">60 FPS Micro-Interactions</span>
        </div>
      </div>

      {/* Interactive UI Component Playground */}
      <div className="my-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Interactive Design Tokens:</span>
          <div className="flex items-center gap-2">
            {Object.keys(themes).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                  activeTheme === t ? 'scale-125 border-white shadow-[0_0_10px_white]' : 'border-transparent opacity-60'
                } ${themes[t].primary}`}
              />
            ))}
          </div>
        </div>

        {/* Live UI Mock Card inside */}
        <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">Fluid Adaptive Component</span>
            <h5 className="text-sm font-bold text-white">Seamless Multi-Device Experience</h5>
          </div>
          <button className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-lg transition-all ${themes[activeTheme].primary} shadow-cyan-500/30 hover:scale-105 active:scale-95 cursor-pointer`}>
            Try Interactive Button
          </button>
        </div>

        {/* Design System Stats */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
            <span className="text-[10px] text-slate-400 block">Accessibility</span>
            <span className="font-bold text-emerald-400">WCAG AAA (100%)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
            <span className="text-[10px] text-slate-400 block">Design System</span>
            <span className="font-bold text-cyan-300">120+ Components</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
            <span className="text-[10px] text-slate-400 block">Motion Engine</span>
            <span className="font-bold text-purple-300">Framer Motion</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-purple-400" />
          Pixel-perfect from concept to live production code
        </span>
        <span className="font-mono text-purple-300">02 / Design Core</span>
      </div>
    </div>
  );
};

/* --- 3. TECHNICAL EXPERTISE VISUALIZER --- */
const TechnicalVisualizer = () => {
  const [activeTab, setActiveTab] = useState('code');

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#091523] via-[#0E2238] to-[#050D17] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Terminal size={18} />
          </div>
          <div>
            <span className="text-xs text-emerald-400 font-mono tracking-wider block">ENGINEERING CORE</span>
            <h4 className="text-base font-bold font-heading">Clean Architecture Terminal</h4>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-black/30 p-1 rounded-full border border-white/10 text-xs">
          {['code', 'tests'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                activeTab === t ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t === 'code' ? 'App.ts' : 'Test Suite'}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Panel */}
      <div className="my-6 p-4 rounded-2xl bg-[#050D18] border border-slate-800 font-mono text-xs relative z-10 space-y-2 shadow-inner">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 font-bold">src/core/EnterpriseEngine.ts</span>
          </div>
          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Strict Type-Safe</span>
        </div>

        {activeTab === 'code' ? (
          <div className="space-y-1 py-1 text-slate-300 leading-relaxed text-[11px] sm:text-xs">
            <p><span className="text-purple-400">export class</span> <span className="text-cyan-300">ScalableArchitecture</span> &#123;</p>
            <p className="pl-4"><span className="text-amber-300">readonly</span> latency = <span className="text-emerald-400">12</span>; <span className="text-slate-500">// ms guaranteed</span></p>
            <p className="pl-4"><span className="text-purple-400">async</span> <span className="text-cyan-300">executeWithZeroDowntime</span>() &#123;</p>
            <p className="pl-8 text-slate-400"><span className="text-purple-400">await</span> <span className="text-sky-300">orchestrateMicroservices</span>();</p>
            <p className="pl-8 text-emerald-400">return &#123; status: 'SUCCESS', debt: 0 &#125;;</p>
            <p className="pl-4">&#125;</p>
            <p>&#125;</p>
          </div>
        ) : (
          <div className="space-y-1.5 py-1 font-mono text-[11px]">
            <p className="text-emerald-400">PASS src/tests/loadTest.spec.ts</p>
            <p className="text-emerald-400">PASS src/tests/securityAudit.spec.ts</p>
            <p className="text-slate-400">Tests: <span className="text-emerald-400 font-bold">148 passed</span>, 148 total</p>
            <p className="text-slate-400">Time: <span className="text-cyan-300">0.42s</span> | Coverage: <span className="text-emerald-400 font-bold">99.8%</span></p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-emerald-400" />
          Senior engineering squads with zero tech debt standards
        </span>
        <span className="font-mono text-emerald-400">03 / Tech Node</span>
      </div>
    </div>
  );
};

/* --- 4. SCALABLE SOLUTIONS VISUALIZER --- */
const ScalableVisualizer = () => {
  const [traffic, setTraffic] = useState(500);

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#061A2E] via-[#0A2E50] to-[#041224] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 blur-[110px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Server size={18} />
          </div>
          <div>
            <span className="text-xs text-cyan-300 font-mono tracking-wider block">CLOUD MESH</span>
            <h4 className="text-base font-bold font-heading">Auto-Scaling Infrastructure</h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-xs text-emerald-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Cluster Healthy
        </div>
      </div>

      {/* Traffic Control & Live Compute Mesh */}
      <div className="my-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 space-y-4">
        <div>
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-slate-300 font-mono">Simulated Concurrent Throughput:</span>
            <span className="text-cyan-300 font-bold font-mono text-sm">{traffic}K req/sec</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={traffic}
            onChange={(e) => setTraffic(Number(e.target.value))}
            className="w-full accent-cyan-400 h-2 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        {/* Node Pods */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-black/30 border border-cyan-500/20 text-center">
              <span className="text-[10px] text-slate-400 block font-mono">Pod {i + 1}</span>
              <span className="text-xs font-bold text-cyan-300 font-mono">
                {Math.round((traffic / 4) * 0.9 + (i * 5))}k/s
              </span>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div
                  style={{ width: `${Math.min(100, (traffic / 1000) * 100)}%` }}
                  className="bg-cyan-400 h-full rounded-full transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-cyan-400" />
          Elastic cloud architectures designed to scale effortlessly
        </span>
        <span className="font-mono text-cyan-400">04 / Scalable</span>
      </div>
    </div>
  );
};

/* --- 5. TRANSPARENT COMMUNICATION VISUALIZER --- */
const CommunicationVisualizer = () => {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#061A2E] via-[#0D243F] to-[#061220] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <MessageSquare size={18} />
          </div>
          <div>
            <span className="text-xs text-sky-300 font-mono tracking-wider block">COLLABORATION RADAR</span>
            <h4 className="text-base font-bold font-heading">Real-Time Sprint & Tech Lead Feed</h4>
          </div>
        </div>
        <span className="text-xs font-mono bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-400/30">
          Direct Lead Access
        </span>
      </div>

      {/* Live Feed Simulator */}
      <div className="my-6 space-y-3 relative z-10">
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-500 flex items-center justify-center font-bold text-xs shrink-0">
            TL
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Lead Architect (Nirav)</span>
              <span className="text-[10px] text-slate-400 font-mono">10m ago</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Sprint 4 milestone completed. Automated load tests passed with 12ms p99 latency. Ready for client demo.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
            <GitBranch size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">CI/CD Automated Deployment</span>
              <span className="text-[10px] text-emerald-400 font-mono">● LIVE</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Staging environment updated with new feature branch <code className="text-cyan-300 font-mono">feat/auth-v2</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-sky-400" />
          No account manager middle-layers. Speak directly with builders.
        </span>
        <span className="font-mono text-sky-400">05 / Direct</span>
      </div>
    </div>
  );
};

/* --- 6. LONG-TERM PARTNERSHIP VISUALIZER --- */
const PartnershipVisualizer = () => {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#061A2E] via-[#0A2642] to-[#04111E] rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/15 blur-[110px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck size={18} />
          </div>
          <div>
            <span className="text-xs text-emerald-300 font-mono tracking-wider block">DEVOPS SENTINEL</span>
            <h4 className="text-base font-bold font-heading">24/7 SLA & Proactive Health</h4>
          </div>
        </div>
        <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30">
          99.99% Uptime SLA
        </span>
      </div>

      {/* Health Monitor Gauges */}
      <div className="my-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Continuous Proactive Health Check
          </span>
          <span className="text-emerald-400 font-mono font-bold">All 24 Services Normal</span>
        </div>

        {/* Pulse Waveform */}
        <div className="h-16 flex items-center gap-1 px-2 bg-black/30 rounded-xl border border-white/5 overflow-hidden">
          {[20, 35, 60, 25, 80, 45, 90, 30, 70, 40, 100, 35, 65, 30, 85, 40, 60, 95, 30, 70, 40, 80].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h * 0.4}%`, `${h * 0.7}%`, `${h * 0.4}%`] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
              className="flex-1 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-full"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs text-center">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-slate-400 block">Security Audits</span>
            <span className="font-bold text-white">Daily Auto-Scan</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] text-slate-400 block">Response Time</span>
            <span className="font-bold text-emerald-400">&lt; 15 Mins Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-4 border-t border-white/10 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-emerald-400" />
          Proactive evolution, zero abandonment, long-term tech stewardship
        </span>
        <span className="font-mono text-emerald-400">06 / Partnership</span>
      </div>
    </div>
  );
};
