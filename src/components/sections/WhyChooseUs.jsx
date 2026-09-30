import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { whyChooseUsData, whyChooseUsMetrics } from '../../data/whyChooseUsData';
import { WhyChooseVisualizer } from './WhyChooseVisualizer';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-cycle between pillars unless hovered by user
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyChooseUsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden w-full py-20 lg:py-28 bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] border-y border-slate-200/60">
      
      {/* Background Ambience & Atmospheric Blooms */}
      <div className="absolute top-1/4 left-[-10%] w-[550px] h-[550px] bg-[#18C5E8]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[550px] h-[550px] bg-[#00A9D6]/8 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#061A2E 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/60 text-[#00A9D6] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00A9D6]" />
            <span>Why The Digital Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#061A2E] tracking-tight leading-[1.12] mb-5"
          >
            Built for businesses that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
              think ahead.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            We don't just write code. Explore our interactive engineering and design methodology below to see how we transform ambition into market-leading digital realities.
          </motion.p>
        </div>

        {/* Main Interactive Split Showcase */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Interactive Connected Pipeline (Not boxes!) */}
          <div className="lg:col-span-5 flex flex-col relative">
            
            {/* Glowing Vertical Circuit Track */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-slate-200 hidden sm:block">
              <motion.div
                className="w-full bg-gradient-to-b from-[#00A9D6] to-[#18C5E8] shadow-[0_0_10px_#00A9D6]"
                animate={{
                  top: `${(activeIndex / (whyChooseUsData.length - 1)) * 100}%`,
                  height: '20%'
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="space-y-3 sm:space-y-3.5 relative z-10">
              {whyChooseUsData.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.num}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? 'bg-white shadow-[0_10px_30px_-10px_rgba(0,169,214,0.18)] border-l-4 border-[#00A9D6] border-y border-r border-slate-200/80 -translate-x-0 sm:translate-x-1'
                        : 'hover:bg-white/60 text-slate-600 hover:text-slate-900 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Interactive Node Indicator */}
                      <div
                        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-[#00A9D6] text-white shadow-[0_0_15px_rgba(0,169,214,0.4)] scale-110'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}
                      >
                        {item.num}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3
                            className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                              isActive ? 'text-[#061A2E]' : 'text-slate-700'
                            }`}
                          >
                            {item.title}
                          </h3>

                          {isActive && (
                            <span className="text-[11px] font-bold text-[#00A9D6] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-100 shrink-0">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        {/* Collapsible/Animated description on active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-3">
                                {item.desc}
                              </p>

                              {/* Interactive Tags */}
                              <div className="flex flex-wrap gap-1.5">
                                {item.tags?.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {/* Progress bar timer */}
                              {!isPaused && (
                                <div className="w-full bg-slate-100 h-1 rounded-full mt-3.5 overflow-hidden">
                                  <motion.div
                                    key={activeIndex}
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 6, ease: 'linear' }}
                                    className="bg-gradient-to-r from-[#00A9D6] to-[#18C5E8] h-full"
                                  />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive Visualizer Engine */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full"
              >
                <WhyChooseVisualizer activeIndex={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Trust Metrics Strip & Direct Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#082845] to-[#061A2E] p-8 lg:p-10 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#18C5E8]/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#00A9D6]/20 blur-3xl rounded-full pointer-events-none" />

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 w-full lg:w-auto relative z-10">
            {whyChooseUsMetrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#18C5E8] mb-1">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto justify-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(24,197,232,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white/90 font-semibold text-sm border border-white/15 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
