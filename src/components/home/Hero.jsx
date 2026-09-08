import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import AnimatedGrid from '../backgrounds/AnimatedGrid';
import { ArrowRight, BarChart2, MousePointerClick, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[auto] md:min-h-[90vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F7FAFC] to-white">
      {/* Minimal Background System */}
      <div className="hidden md:block opacity-[0.15]">
        <AnimatedGrid />
      </div>

      {/* Highly reduced, subtle negative space desktop glow */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-brand-soft-blue/10 rounded-full blur-[140px] pointer-events-none hidden md:block"></div>

      {/* Floating Labels */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[10%] hidden lg:flex items-center gap-2 px-1 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-cyan"></span> UI/UX Design
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] right-[5%] hidden xl:flex items-center gap-2 px-1 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-electric-cyan"></span> Digital Solutions
      </motion.div>

      <div className="max-w-7xl mx-auto px-1 lg:px-1 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

        {/* Left Side: UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-7"
        >
          <span className="inline-block py-1.5 px-1 rounded-full bg-white border border-[#D9E7EF] text-sm font-bold mb-6 md:mb-8 shadow-sm text-[#063B63]">
            The Digital Connect
          </span>
          <h1 className="text-responsive-h1 font-extrabold tracking-tighter leading-[1.02] mb-6 text-[#061A2E]">
            Digital Experiences <br /> Built to Move <br />
            <span className="text-[#087EA4]">
              Businesses Forward.
            </span>
          </h1>
          <p className="text-responsive-body md:text-2xl text-[#607080] mb-8 md:mb-10 max-w-2xl leading-[1.6]">
            The Digital Connect creates high-performance websites, applications and digital experiences that help ambitious businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" className="group text-[16px] py-3.5 sm:py-2.5 w-full sm:w-auto justify-center" variant="primary">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/portfolio" className="bg-white border hover:border-brand-border/80 shadow-sm hover:bg-white/80 text-foreground text-[16px] py-3.5 sm:py-2.5 w-full sm:w-auto justify-center" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </motion.div>

        {/* Right Side: PREMIUM, DARK GLASSMORPHISM UI VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 xl:col-span-5 relative w-full flex justify-center"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/4.5] md:aspect-[4/5] rounded-3xl bg-[#0F172A] border border-[#1E293B] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.6)] overflow-hidden group">

            {/* Background elements inside the card for subtle lighting */}
            <div className="absolute top-[-10%] right-[-20%] w-[350px] h-[350px] bg-[#0ea5e9]/15 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] bg-[#38bdf8]/10 blur-[50px] rounded-full pointer-events-none"></div>

            {/* Top Bar / Interface header */}
            <div className="absolute top-0 left-0 right-0 px-1 py-5 flex justify-between items-center z-10 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
              </div>
              <div className="flex items-center gap-2 px-1 py-1 bg-[#1e293b]/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3" /> Secure Env
              </div>
            </div>

            {/* Central Metric Panel */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[22%] right-[8%] left-[12%] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 shadow-2xl z-20 overflow-hidden group/card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#94a3b8] tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#38bdf8]" /> Conversion Rate
                  </div>
                  <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
                    +148% <span className="text-[#34d399] text-sm bg-[#34d399]/10 px-1.5 py-0.5 rounded flex items-center">↑ 2.4%</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#1e293b] border border-white/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BarChart2 className="w-5 h-5 text-[#38bdf8]" />
                </div>
              </div>

              {/* Minimal Chart Data Visualization */}
              <div className="flex items-end justify-between h-[72px] gap-2.5 w-full mt-2">
                <div className="w-full bg-[#1e293b] rounded-t-[4px] h-[30%] group-hover/card:h-[35%] transition-all duration-500 ease-out"></div>
                <div className="w-full bg-[#1e293b] rounded-t-[4px] h-[50%] group-hover/card:h-[55%] transition-all duration-500 ease-out delay-75"></div>
                <div className="w-full bg-gradient-to-t from-[#1e293b] to-[#38bdf8]/40 border-t border-[#38bdf8]/50 rounded-t-[4px] h-[40%] group-hover/card:h-[48%] transition-all duration-500 ease-out delay-100"></div>
                <div className="w-full bg-[#1e293b] rounded-t-[4px] h-[70%] group-hover/card:h-[75%] transition-all duration-500 ease-out delay-150"></div>
                <div className="w-full bg-gradient-to-t from-[#0284c7] to-[#38bdf8] rounded-t-[4px] h-[90%] group-hover/card:h-[100%] transition-all duration-500 ease-out delay-200 relative shadow-[0_0_20px_rgba(56,189,248,0.4)]"></div>
              </div>
            </motion.div>

            {/* UI Component Card (Left-aligned, lower) */}
            <motion.div
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              animate={{ y: [4, -2, 4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[6%] right-[25%] rounded-2xl bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30 flex items-center gap-4 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#0284c7] to-[#0369a1] flex justify-center items-center flex-shrink-0 shadow-lg shadow-[#0284c7]/30 ring-1 ring-white/10">
                <MousePointerClick className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="w-16 h-2 rounded-full bg-[#64748b] mb-2.5"></div>
                <div className="w-full h-1.5 rounded-full bg-[#334155] mb-1.5 opacity-80"></div>
                <div className="w-4/5 h-1.5 rounded-full bg-[#334155] opacity-80"></div>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-[#38bdf8] animate-spin"></div>
            </motion.div>

            {/* Minimal Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEgMWgyM3YyM0gxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-60 z-0"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
