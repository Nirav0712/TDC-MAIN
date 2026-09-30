import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Calendar, Users, CheckCircle2, Clock } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { HealthcareData } from '../../data/industries/healthcare';

const HealthcareVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-blue-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header Bar */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#E8F8FA] border border-[#18C5E8]/30 flex items-center justify-center text-[#087EA4]">
          <Heart className="w-5 h-5 text-[#087EA4]" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">CarePulse Health Platform</h4>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> HIPAA Compliant • Live
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 border border-slate-200">
        v4.2.0
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Active Patients</span>
        <span className="text-base font-extrabold text-[#061A2E] mt-0.5">24,850+</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Tele-Sessions</span>
        <span className="text-base font-extrabold text-[#087EA4] mt-0.5">99.4%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Avg Wait</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">2.4 min</span>
      </div>
    </div>

    {/* Telemetry Visual & Live Stream */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3 relative overflow-hidden">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <Activity className="w-4 h-4 animate-pulse" /> Live Patient Telemetry
        </span>
        <span className="text-slate-400">Realtime Sync</span>
      </div>

      {/* Pulsing ECG line wave */}
      <div className="h-16 relative w-full overflow-hidden flex items-center">
        <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
          <motion.path
            d="M 0 30 L 40 30 L 50 10 L 60 50 L 70 20 L 80 30 L 140 30 L 150 5 L 160 55 L 170 15 L 180 30 L 240 30 L 250 12 L 260 48 L 270 22 L 280 30 L 300 30"
            fill="none"
            stroke="#18C5E8"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.8 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/10">
        <span>EHR Integrations: Epic, Cerner</span>
        <span className="text-emerald-400 font-medium">Encrypted AES-256</span>
      </div>
    </div>
  </div>
);

const healthcareSteps = [
  { step: '01', title: 'Clinical Discovery & Compliance', desc: 'Analyzing provider workflows, HIPAA requirements, and EHR integrations.' },
  { step: '02', title: 'UX Architecture & Wireframing', desc: 'Designing empathetic, accessible patient journeys and physician dashboards.' },
  { step: '03', title: 'Secure API & Telehealth Core', desc: 'Engineering encrypted video streaming, FHIR data pipelines, and booking engine.' },
  { step: '04', title: 'Rigorous Security & Pen-Testing', desc: 'SOC2 & HIPAA audits, penetration tests, and stress testing across devices.' },
  { step: '05', title: 'Deployment & Staff Onboarding', desc: 'Phased rollout with clinical training, staff support, and 24/7 monitoring.' }
];

const Healthcare = () => {
  useSEO({
    title: "Healthcare Digital Solutions | The Digital Connect",
    description: "Build secure, intuitive digital platforms that improve patient engagement, streamline healthcare operations and help providers deliver better experiences."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="healthcare"
        eyebrow="DIGITAL HEALTHCARE SOLUTIONS"
        headline="Technology That Puts Better Healthcare Experiences First."
        description="Build secure, intuitive digital platforms that improve patient engagement, streamline clinical operations and empower providers to deliver higher quality care."
        visual={HealthcareVisual}
        ctaText="Build Healthcare Platform"
      />

      <IndustryOverview
        title="Transforming Healthcare with Secure Digital Architecture"
        content={[
          HealthcareData.desc ? `"${HealthcareData.desc}"` : '""',
          "We partner with hospital networks, healthtech startups, and clinical providers to replace fragmented legacy tools with seamless, interoperable platforms.",
          "Our software engineers ensure uncompromising data security, HIPAA compliance, and frictionless telemedicine workflows designed around the patient."
        ]}
      />

      <IndustryChallenges challenges={HealthcareData.challenges} />

      <IndustryUniqueSection title="The Healthcare Engineering Lifecycle" variant="healthcare">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {healthcareSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-primary px-2.5 py-1 rounded-lg bg-primary/10 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Build Better Healthcare Experiences?" variant="healthcare" />
    </div>
  );
};

export default Healthcare;
