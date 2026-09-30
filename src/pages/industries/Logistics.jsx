import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Truck, Navigation, Package, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { LogisticsData } from '../../data/industries/logistics';

const LogisticsVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-slate-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
          <Truck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">FleetPulse Logistics Hub</h4>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> GPS Telemetry • Live Tracking
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-700 border border-slate-200">
        IoT Connected
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Active Trucks</span>
        <span className="text-base font-extrabold text-[#061A2E] mt-0.5">1,280</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">On-Time Rate</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">99.1%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Fuel Saved</span>
        <span className="text-base font-extrabold text-[#087EA4] mt-0.5">18.4%</span>
      </div>
    </div>

    {/* Live Route Dispatch */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <Navigation className="w-4 h-4" /> Real-time Dispatch #TRK-902
        </span>
        <span className="text-emerald-400 font-bold">In Transit</span>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Package className="w-4 h-4 text-[#18C5E8]" />
          <div>
            <div className="font-extrabold text-white text-sm">Port of LA → Chicago Hub</div>
            <div className="text-[10px] text-slate-400">ETA: 4h 15m • 42 Pallets</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#18C5E8]/20 text-[#18C5E8] border border-[#18C5E8]/30">
          Geofenced
        </span>
      </div>
    </div>
  </div>
);

const logisticsSteps = [
  { step: '01', title: 'Supply Chain & ERP Discovery', desc: 'Evaluating warehouse workflows, TMS systems, and EDI standards.' },
  { step: '02', title: 'Dispatcher & Driver UX', desc: 'Designing ergonomic driver mobile apps and high-density dispatch screens.' },
  { step: '03', title: 'IoT & Telemetry Engine', desc: 'Developing real-time GPS tracking, temperature logging, and ETA models.' },
  { step: '04', title: 'Automated Route Optimization', desc: 'Implementing AI algorithms to calculate lowest fuel costs and fastest lanes.' },
  { step: '05', title: 'Fleet Deployment & Monitoring', desc: 'Rollout with hardware telematics pairing and 24/7 incident response.' }
];

const Logistics = () => {
  useSEO({
    title: "Logistics Digital Solutions | The Digital Connect",
    description: "Build digital logistics systems that improve visibility, automate workflows and keep operations moving efficiently."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="logistics"
        eyebrow="LOGISTICS TECHNOLOGY"
        headline="Connected Technology For Smarter Supply Chain Operations."
        description="Build intelligent digital logistics systems that improve end-to-end visibility, automate dispatch workflows, and keep fleet operations moving at peak efficiency."
        visual={LogisticsVisual}
        ctaText="Connect Logistics Operations"
      />

      <IndustryOverview
        title="Transforming Supply Chains with Intelligent Telematics"
        content={[
          LogisticsData.desc ? `"${LogisticsData.desc}"` : '""',
          "We engineer enterprise Transportation Management Systems (TMS), smart warehouse management platforms (WMS), and last-mile delivery tracking apps.",
          "Our software leverages IoT sensor telemetry, automated route optimization engines, electronic Proof of Delivery (e-POD), and seamless carrier EDI integrations."
        ]}
      />

      <IndustryChallenges challenges={LogisticsData.challenges} />

      <IndustryUniqueSection title="The Logistics Engineering Lifecycle" variant="logistics">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {logisticsSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-slate-700 px-2.5 py-1 rounded-lg bg-slate-100 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Modernize Your Logistics Operations?" variant="logistics" />
    </div>
  );
};

export default Logistics;
