import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, ShoppingCart, Zap, PackageCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { EcommerceData } from '../../data/industries/ecommerce';

const EcommerceVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-emerald-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">NovaStore Omnichannel Core</h4>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Headless Engine • Active
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700 border border-emerald-200">
        3.8x Speed
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Cart Checkout</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">4.82%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Orders / Min</span>
        <span className="text-base font-extrabold text-[#061A2E] mt-0.5">142</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Page Speed</span>
        <span className="text-base font-extrabold text-primary mt-0.5">99 / 100</span>
      </div>
    </div>

    {/* Live Stream Orders Mock */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <Zap className="w-4 h-4" /> Real-time Global Orders
        </span>
        <span className="text-slate-400">Headless API</span>
      </div>

      <div className="space-y-2">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs"
        >
          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-200 font-medium">B2B Wholesale Order #8942</span>
          </div>
          <span className="text-emerald-400 font-bold">$3,420.00</span>
        </motion.div>

        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-[#18C5E8]" />
            <span className="text-slate-200 font-medium">Mobile D2C Checkout #8943</span>
          </div>
          <span className="text-white font-bold">$189.50</span>
        </div>
      </div>
    </div>
  </div>
);

const ecommerceSteps = [
  { step: '01', title: 'Catalog & Architecture Review', desc: 'Planning headless storefronts, multi-currency engines, and ERP sync.' },
  { step: '02', title: 'High-Converting UI/UX', desc: 'Designing seamless 1-click checkouts, personalized discovery, and mobile journeys.' },
  { step: '03', title: 'Headless & Omnichannel Dev', desc: 'Building on Next.js, Shopify Plus, Magento, or custom microservices.' },
  { step: '04', title: 'Payment & Logistics Integration', desc: 'Connecting Stripe, PayPal, Klarna, FedEx, automated fulfillment APIs.' },
  { step: '05', title: 'Traffic Scaling & CRO Growth', desc: 'Load testing for flash sales, A/B conversion tuning, and 24/7 uptime.' }
];

const Ecommerce = () => {
  useSEO({
    title: "Ecommerce Digital Solutions | The Digital Connect",
    description: "Create fast, scalable ecommerce experiences designed around conversion, customer experience and long-term growth."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="ecommerce"
        eyebrow="ECOMMERCE TECHNOLOGY"
        headline="Digital Commerce Experiences That Turn Browsers Into Buyers."
        description="Create fast, scalable ecommerce experiences engineered for higher conversion, exceptional shopper experiences, and effortless global expansion."
        visual={EcommerceVisual}
        ctaText="Build Ecommerce Platform"
      />

      <IndustryOverview
        title="Transforming Digital Commerce with High-Velocity Architecture"
        content={[
          EcommerceData.desc ? `"${EcommerceData.desc}"` : '""',
          "We build ultra-fast headless storefronts, enterprise B2B marketplaces, and omnichannel platforms that handle millions of SKUs with sub-second page loads.",
          "Our commerce solutions unite intuitive design with automated inventory synchronization, smart recommendation engines, and seamless payment gateways."
        ]}
      />

      <IndustryChallenges challenges={EcommerceData.challenges} />

      <IndustryUniqueSection title="The Commerce Engineering Lifecycle" variant="ecommerce">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ecommerceSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-emerald-700 px-2.5 py-1 rounded-lg bg-emerald-50 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Scale Your Online Revenue?" variant="ecommerce" />
    </div>
  );
};

export default Ecommerce;
