import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Home, MapPin, Building, Key, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { RealEstateData } from '../../data/industries/real-estate';

const RealEstateVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-amber-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
          <Building className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">Aura Estate MLS Platform</h4>
          <span className="text-[11px] font-semibold text-amber-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> RETS / IDX Sync • Live
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-[11px] font-bold text-amber-700 border border-amber-200">
        3D Walkthrough
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Active Listings</span>
        <span className="text-base font-extrabold text-[#061A2E] mt-0.5">18,400+</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Lead Inquiries</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">+42.8%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Avg Close Time</span>
        <span className="text-base font-extrabold text-amber-600 mt-0.5">14 Days</span>
      </div>
    </div>

    {/* Property Map & Live Inquiries */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3 relative overflow-hidden">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <MapPin className="w-4 h-4" /> Interactive Geospatial Filter
        </span>
        <span className="text-slate-400">Polygon Search</span>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
            $1.4M
          </div>
          <div>
            <div className="text-xs font-bold text-white">The Skyline Penthouse</div>
            <div className="text-[10px] text-slate-400">4 Bed • 3 Bath • 3,200 sqft</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Verified
        </span>
      </div>
    </div>
  </div>
);

const realEstateSteps = [
  { step: '01', title: 'Property Data & MLS Mapping', desc: 'Analyzing IDX/RETS protocols, CRM integration, and broker workflows.' },
  { step: '02', title: 'Immersive UI/UX & 3D Maps', desc: 'Designing interactive polygon maps, 3D floorplan tours, and fast filter UI.' },
  { step: '03', title: 'Listing Engine & Lead Routing', desc: 'Developing automated valuation models, instant SMS alerts, and lead CRM.' },
  { step: '04', title: 'Performance & SEO Optimization', desc: 'Engineering programmatic SEO landing pages for high local search rankings.' },
  { step: '05', title: 'Broker Launch & Portal Onboarding', desc: 'Agent training, multi-office permission structures, and continuous sync.' }
];

const RealEstate = () => {
  useSEO({
    title: "Real Estate Digital Solutions | The Digital Connect",
    description: "Create modern property platforms that simplify discovery, management, communication and transactions."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="real-estate"
        eyebrow="REAL ESTATE TECHNOLOGY"
        headline="Digital Experiences That Move Modern Property Businesses Forward."
        description="Create high-performance property platforms that simplify discovery, streamline transaction management, and empower agents with automated lead generation."
        visual={RealEstateVisual}
        ctaText="Build Property Platform"
      />

      <IndustryOverview
        title="Transforming Real Estate with Intelligent Digital Infrastructure"
        content={[
          RealEstateData.desc ? `"${RealEstateData.desc}"` : '""',
          "We engineer high-speed property listing portals, automated agent CRMs, and 3D virtual tour integrations for enterprise brokerages and proptech innovators.",
          "Our platforms feature seamless MLS/RETS synchronization, advanced geospatial map search, digital signature workflows, and automated tenant management systems."
        ]}
      />

      <IndustryChallenges challenges={RealEstateData.challenges} />

      <IndustryUniqueSection title="The PropTech Engineering Lifecycle" variant="real-estate">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {realEstateSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-amber-700 px-2.5 py-1 rounded-lg bg-amber-50 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Build Your Next-Gen Property Platform?" variant="real-estate" />
    </div>
  );
};

export default RealEstate;
