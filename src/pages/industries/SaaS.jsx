import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Cloud, Layers, Activity, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { SaaSData } from '../../data/industries/saas';

const SaaSVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-blue-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
          <Cloud className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">CloudMatrix Multi-Tenant Core</h4>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Auto-Scaling Cluster • 99.99%
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[11px] font-bold text-blue-700 border border-blue-200">
        Kubernetes
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">ARR Growth</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">+148%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">API Latency</span>
        <span className="text-base font-extrabold text-[#087EA4] mt-0.5">32ms</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Net Retention</span>
        <span className="text-base font-extrabold text-blue-600 mt-0.5">124%</span>
      </div>
    </div>

    {/* Live Multi-Tenant Analytics */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <Activity className="w-4 h-4" /> Global Microservice Mesh
        </span>
        <span className="text-emerald-400 font-bold">Healthy (0 Alert)</span>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[#18C5E8]" />
          <div>
            <div className="font-extrabold text-white text-sm">Tenant Isolation Level: Row & DB</div>
            <div className="text-[10px] text-slate-400">PostgreSQL Sharded • Redis Caching</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#18C5E8]/20 text-[#18C5E8] border border-[#18C5E8]/30">
          Encrypted
        </span>
      </div>
    </div>
  </div>
);

const saasSteps = [
  { step: '01', title: 'Product Discovery & Data Model', desc: 'Defining multi-tenant schemas, authorization roles, and billing tiers.' },
  { step: '02', title: 'Intuitive SaaS UX & Dashboard', desc: 'Crafting product onboarding, data tables, and dark/light UI systems.' },
  { step: '03', title: 'Cloud-Native Microservices Core', desc: 'Building on Next.js, Node/Go, Docker, Kubernetes, and PostgreSQL.' },
  { step: '04', title: 'Stripe Billing & Webhooks', desc: 'Integrating metered usage, recurring subscriptions, and invoice automation.' },
  { step: '05', title: 'CI/CD & Automated Observability', desc: 'Setting up automated release pipelines, Datadog/Sentry tracing, and SLO alerts.' }
];

const SaaS = () => {
  useSEO({
    title: "SaaS Digital Solutions | The Digital Connect",
    description: "Design and develop SaaS products that are intuitive for users and built to scale with growing businesses."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="saas"
        eyebrow="SAAS PRODUCT DEVELOPMENT"
        headline="From Product Vision to Scalable Enterprise SaaS Platform."
        description="Design and engineer high-retention SaaS applications built on robust multi-tenant architectures that scale seamlessly to millions of global users."
        visual={SaaSVisual}
        ctaText="Build SaaS Product"
      />

      <IndustryOverview
        title="Transforming Software Delivery with Cloud-Native Multi-Tenancy"
        content={[
          SaaSData.desc ? `"${SaaSData.desc}"` : '""',
          "We engineer high-growth SaaS applications featuring isolated multi-tenant data schemas, automated subscription billing, modular microservices, and robust REST/GraphQL APIs.",
          "Our platforms are built with security-first foundations, SOC2 compliance roadmaps, sub-second query performance, and seamless automated CI/CD deployment pipelines."
        ]}
      />

      <IndustryChallenges challenges={SaaSData.challenges} />

      <IndustryUniqueSection title="The SaaS Engineering Lifecycle" variant="saas">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {saasSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-blue-700 px-2.5 py-1 rounded-lg bg-blue-50 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Build Your Next Scalable SaaS?" variant="saas" />
    </div>
  );
};

export default SaaS;
