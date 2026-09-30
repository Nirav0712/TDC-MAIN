import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Plane, Compass, Globe, MapPin, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { TravelData } from '../../data/industries/travel';

const TravelVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-purple-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
          <Plane className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">Voyager Global Booking Engine</h4>
          <span className="text-[11px] font-semibold text-purple-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span> GDS / NDC Direct Connect
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-purple-50 text-[11px] font-bold text-purple-700 border border-purple-200">
        Live Flight Feed
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Search Speed</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">280ms</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Airlines Synced</span>
        <span className="text-base font-extrabold text-[#087EA4] mt-0.5">450+</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Booking Success</span>
        <span className="text-base font-extrabold text-purple-600 mt-0.5">99.8%</span>
      </div>
    </div>

    {/* Route Visualization */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <Compass className="w-4 h-4" /> JFK (New York) → LHR (London)
        </span>
        <span className="text-emerald-400 font-bold">On Schedule</span>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="text-left">
            <div className="font-extrabold text-white text-sm">BA 178</div>
            <div className="text-[10px] text-slate-400">Non-Stop • 6h 55m</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-extrabold text-[#18C5E8] text-sm">$640.00</div>
          <div className="text-[10px] text-emerald-400">Instant e-Ticket</div>
        </div>
      </div>
    </div>
  </div>
);

const travelSteps = [
  { step: '01', title: 'GDS & Supplier Integration', desc: 'Connecting Amadeus, Sabre, NDC APIs, and hotel inventory engines.' },
  { step: '02', title: 'Frictionless Itinerary UX', desc: 'Designing responsive flight selectors, room pickers, and split payments.' },
  { step: '03', title: 'Real-Time Sync Engine', desc: 'Building sub-second flight fare search, seat selection, and price alerts.' },
  { step: '04', title: 'Multi-Currency & VAT Rules', desc: 'Automating multi-currency checkout, dynamic taxes, and cancellation logic.' },
  { step: '05', title: 'Travel App & Agent Console', desc: 'Deploying mobile itinerary apps with live gate updates and push notifications.' }
];

const Travel = () => {
  useSEO({
    title: "Travel Digital Solutions | The Digital Connect",
    description: "Create seamless travel experiences that make discovery, booking and journey management effortless."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="travel"
        eyebrow="TRAVEL TECHNOLOGY"
        headline="Digital Journeys Designed Around the Modern Traveler."
        description="Create seamless travel, hospitality, and booking experiences that make flight discovery, hotel reservations, and journey management completely effortless."
        visual={TravelVisual}
        ctaText="Build Travel Platform"
      />

      <IndustryOverview
        title="Transforming Travel & Hospitality with High-Speed Architecture"
        content={[
          TravelData.desc ? `"${TravelData.desc}"` : '""',
          "We build next-generation Online Travel Agencies (OTAs), corporate booking engines, and dynamic packaging platforms integrated with leading global GDS and NDC APIs.",
          "Our software delivers sub-second flight search, automated itinerary synchronization, interactive destination guides, and seamless mobile check-in capabilities."
        ]}
      />

      <IndustryChallenges challenges={TravelData.challenges} />

      <IndustryUniqueSection title="The Travel Tech Engineering Lifecycle" variant="travel">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {travelSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-purple-700 px-2.5 py-1 rounded-lg bg-purple-50 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Create Better Travel Experiences?" variant="travel" />
    </div>
  );
};

export default Travel;
