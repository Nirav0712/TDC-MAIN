import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Landmark, ArrowUpRight, TrendingUp, ShieldCheck, CreditCard, Lock, DollarSign } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { FintechData } from '../../data/industries/fintech';

const FintechVisual = () => (
  <div className="w-full bg-[#061A2E] rounded-[28px] shadow-2xl shadow-blue-950/20 border border-white/15 overflow-hidden flex flex-col p-6 relative text-white">
    {/* Ambient Glow */}
    <div className="absolute top-0 right-0 w-36 h-36 bg-[#18C5E8]/20 rounded-full blur-2xl pointer-events-none"></div>

    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#18C5E8]/20 border border-[#18C5E8]/30 flex items-center justify-center text-[#18C5E8]">
          <Landmark className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">Apex Vault & Settlement</h4>
          <span className="text-[11px] font-semibold text-[#18C5E8] flex items-center gap-1">
            <Lock className="w-3 h-3" /> PCI-DSS Level 1 Compliant
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
        99.999% SLA
      </span>
    </div>

    {/* Balance Card */}
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 flex flex-col gap-2">
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>Total Processed Volume (24h)</span>
        <span className="text-emerald-400 font-bold flex items-center gap-0.5">
          <TrendingUp className="w-3.5 h-3.5" /> +18.4%
        </span>
      </div>
      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        $14,892,450.00
      </div>
    </div>

    {/* Animated Bar Chart / Settlement Volume */}
    <div className="p-4 rounded-2xl bg-[#0B1724] border border-white/10 flex flex-col gap-3">
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>Realtime Transaction Velocity</span>
        <span className="text-slate-500 text-[11px]">8,200 TPS</span>
      </div>
      <div className="flex items-end gap-2 h-20 pt-2">
        {[35, 55, 40, 75, 50, 90, 65, 100, 80, 95].map((h, i) => (
          <div key={i} className="flex-1 bg-white/5 rounded-t-sm h-full flex items-end">
            <motion.div
              initial={{ height: '10%' }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.1
              }}
              className="w-full bg-gradient-to-t from-[#087EA4] to-[#18C5E8] rounded-t-sm"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const fintechSteps = [
  { step: '01', title: 'Regulatory & Security Audit', desc: 'Assessing KYC/AML mandates, PCI-DSS compliance, and ledger logic.' },
  { step: '02', title: 'Banking UX & Design System', desc: 'Crafting ultra-clear financial dashboards and conversion-focused checkout.' },
  { step: '03', title: 'Core Banking & Payment APIs', desc: 'Integrating SWIFT, ACH, Stripe, Plaid, and double-entry ledger database.' },
  { step: '04', title: 'Stress & Chaos Testing', desc: 'Simulating high-concurrency peak volumes, failovers, and fraud detection.' },
  { step: '05', title: 'Launch & Zero-Downtime LiveOps', desc: 'Production deployment with 24/7 automated monitoring and alerting.' }
];

const Fintech = () => {
  useSEO({
    title: "Fintech Digital Solutions | The Digital Connect",
    description: "Design and develop secure financial products that make complex financial services simpler, faster and more accessible."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="fintech"
        eyebrow="FINTECH DIGITAL SOLUTIONS"
        headline="Digital Banking Experiences Built for Trust and Scale."
        description="Design and develop secure financial products that make complex financial operations simpler, faster, and seamlessly accessible for modern users."
        visual={FintechVisual}
        ctaText="Build Fintech Product"
      />

      <IndustryOverview
        title="Transforming Financial Systems with Robust Architecture"
        content={[
          FintechData.desc ? `"${FintechData.desc}"` : '""',
          "From neobanks and trading engines to multi-currency payment gateways, we engineer bank-grade security protocols, automated fraud mitigation, and low-latency transaction processing.",
          "Our fintech software solutions enable seamless integration with top banking APIs, blockchain ledgers, and institutional payment networks."
        ]}
      />

      <IndustryChallenges challenges={FintechData.challenges} />

      <IndustryUniqueSection title="The Fintech Engineering Lifecycle" variant="fintech">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fintechSteps.map((item, idx) => (
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

      <IndustryCTA title="Ready to Scale Your Fintech Platform?" variant="fintech" />
    </div>
  );
};

export default Fintech;
