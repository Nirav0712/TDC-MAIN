import React, { useState } from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Heart, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, ArrowRight, ArrowUpRight, Zap, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const valuesData = [
  {
    id: 'innovation',
    number: '01',
    title: 'Innovation First',
    tag: 'Next-Gen Tech',
    icon: Lightbulb,
    headline: 'Exploring better technologies.',
    desc: 'We continuously explore smarter systems, modern architectures, and emerging technologies to solve complex business challenges. Stagnation is the enemy of progress.',
    highlights: ['Microservices & Serverless', 'AI Integration', 'Modern Frontend Stacks'],
    metric: { value: '100%', label: 'Modern Stack Adoption' }
  },
  {
    id: 'customer-obsession',
    number: '02',
    title: 'Customer Obsession',
    tag: 'User Centricity',
    icon: Heart,
    headline: 'Design for the human behind the screen.',
    desc: 'Every architecture decision starts with deeply understanding user needs and business ROI. True engineering success is defined entirely by the measurable value delivered.',
    highlights: ['Conversion Optimization', 'Frictionless UX', 'Data-Driven Research'],
    metric: { value: '4.9/5', label: 'Client Satisfaction' }
  },
  {
    id: 'quality',
    number: '03',
    title: 'Quality Without Compromise',
    tag: 'Zero Technical Debt',
    icon: ShieldCheck,
    headline: 'Reliable, enterprise-grade engineering.',
    desc: 'We focus on clean code, modular architecture, and automated test coverage. Shortcuts are temporary; robust architecture scales forever.',
    highlights: ['Strict TypeScript', 'Automated CI/CD Tests', 'WCAG AAA Accessibility'],
    metric: { value: '99.8%', label: 'Test Pass Rate' }
  },
  {
    id: 'growth',
    number: '04',
    title: 'Continuous Growth',
    tag: 'Lifelong Evolution',
    icon: TrendingUp,
    headline: 'Learn, improve, and scale together.',
    desc: 'We evolve with every project, milestone, and technology shift. As your business expands into new markets, our capabilities grow alongside it.',
    highlights: ['Proactive Monitoring', 'Iterative Sprints', 'Future-Proof Scalability'],
    metric: { value: '10x', label: 'Scale Readiness' }
  }
];

const Values = () => {
  useSEO({
    title: "Our Values | The Digital Connect",
    description: "Discover the principles and core values shaping our digital mindset and engineering excellence."
  });

  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const activeValue = valuesData[activeValueIndex];
  const ActiveIcon = activeValue.icon;

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute top-10 right-1/4 w-[550px] h-[350px] bg-[#00A9D6]/8 blur-[130px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#061A2E 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span>Our Guiding Tenets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1] mb-6 text-[#061A2E]"
            >
              Principles shaping our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                digital mindset.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Beyond technology, these four core pillars dictate how we act, how we build, and how we deliver measurable value for our partners.
            </motion.p>
          </div>
        </section>

        {/* INTERACTIVE VALUES CANVAS */}
        <section className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          
          {/* Top 4 Interactive Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {valuesData.map((val, idx) => {
              const Icon = val.icon;
              const isActive = activeValueIndex === idx;

              return (
                <button
                  key={val.id}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`relative p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer select-none ${
                    isActive
                      ? 'bg-white border-[#00A9D6] shadow-[0_10px_28px_-8px_rgba(0,169,214,0.22)] -translate-y-1'
                      : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#00A9D6]' : 'text-slate-400'}`}>
                      {val.number}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-cyan-50 text-[#00A9D6]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className={`font-heading font-bold text-sm sm:text-base ${isActive ? 'text-[#061A2E]' : 'text-slate-700'}`}>
                    {val.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5 truncate">
                    {val.tag}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeValueBar"
                      className="absolute bottom-0 inset-x-5 h-[3px] bg-gradient-to-r from-[#00A9D6] to-[#18C5E8] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Deep-Dive Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-8 sm:p-12 shadow-[0_10px_35px_-10px_rgba(6,26,46,0.06)] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left: Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A9D6] text-xs font-bold font-mono">
                    <span>PILLAR {activeValue.number} • {activeValue.tag}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                    {activeValue.headline}
                  </h2>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {activeValue.desc}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-2.5">
                    {activeValue.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                        <CheckCircle2 size={18} className="text-[#00A9D6] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#061A2E] hover:bg-[#00A9D6] text-white font-bold text-sm transition-all duration-300 shadow-sm"
                    >
                      <span>Partner With Us</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Right: Dynamic Interactive Simulation Card */}
                <div className="lg:col-span-5">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] text-white shadow-xl relative overflow-hidden text-center flex flex-col justify-between min-h-[320px]">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

                    <div className="flex justify-between items-center relative z-10 text-xs text-slate-400 font-mono">
                      <span>VERIFIED STANDARD</span>
                      <span className="text-cyan-400 font-bold">100% AUDITED</span>
                    </div>

                    <div className="my-auto py-6 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(24,197,232,0.4)]">
                        <ActiveIcon size={28} />
                      </div>
                      <span className="text-4xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#18C5E8] block mb-1">
                        {activeValue.metric.value}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {activeValue.metric.label}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono relative z-10">
                      Phase {activeValue.number}: Guaranteed Architecture Commitment
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </section>

      </div>
    </PageTransition>
  );
};

export default Values;
