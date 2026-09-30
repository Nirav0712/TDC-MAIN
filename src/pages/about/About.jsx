import React, { useState } from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Users, Globe2, ArrowRight, Sparkles, ShieldCheck, Zap, Code2, Heart, Award, ArrowUpRight } from 'lucide-react';

const About = () => {
  useSEO({
    title: "The Digital Connect | About Us",
    description: "Learn about The Digital Connect, our vision, and how we bring technology and design together."
  });

  const [activeTab, setActiveTab] = useState(0);

  const explorationCards = [
    {
      title: 'Our Values',
      desc: 'Principles and core tenets that drive our engineering and client partnerships.',
      path: '/about/values',
      icon: Heart,
      tag: 'Mindset & Culture',
      accent: 'from-rose-500/10 via-rose-500/5 to-transparent'
    },
    {
      title: 'Our Team',
      desc: 'The senior engineers, designers, and strategists behind every build.',
      path: '/about/team',
      icon: Users,
      tag: 'Specialized Squads',
      accent: 'from-cyan-500/10 via-cyan-500/5 to-transparent'
    },
    {
      title: 'Our Mission',
      desc: 'Discover what drives our commitment to technical precision and ROI.',
      path: '/about/mission',
      icon: Target,
      tag: 'Purpose & Vision',
      accent: 'from-sky-500/10 via-sky-500/5 to-transparent'
    },
    {
      title: 'Brand Story',
      desc: 'The journey and evolution of our agency from inception to global impact.',
      path: '/about/brand-story',
      icon: BookOpen,
      tag: 'Our Evolution',
      accent: 'from-purple-500/10 via-purple-500/5 to-transparent'
    }
  ];

  const pillars = [
    {
      title: 'Engineering Rigor',
      tag: 'Clean & Scalable',
      icon: Code2,
      desc: 'We write robust, type-safe, and self-documenting code built to scale from day one. Zero short cuts, zero technical debt.',
      metrics: ['99.8% Test Coverage', 'TypeScript Strict', 'Sub-50ms Latency']
    },
    {
      title: 'Design Excellence',
      tag: 'Pixel-Perfect UI',
      icon: Sparkles,
      desc: 'Human-centered user experiences that convert. We bridge visual prestige with frictionless interaction design.',
      metrics: ['Design System Tokens', '60 FPS Micro-Interactions', 'WCAG AAA Compliant']
    },
    {
      title: 'True Partnership',
      tag: 'Direct Lead Access',
      icon: ShieldCheck,
      desc: 'Direct communication with hands-on technical leads. Daily asynchronous progress, sprint demos, and 100% transparency.',
      metrics: ['Daily Sprint Syncs', 'No Account Layers', 'Full IP Ownership']
    }
  ];

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00A9D6]/8 blur-[140px] rounded-full pointer-events-none" />
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
              <span>About The Digital Connect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1] mb-6 text-[#061A2E]"
            >
              Technology with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                Purpose & Precision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              We are a modern digital engineering and product design agency. We partner with ambitious brands to transform complex business challenges into elegant, high-impact software.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,169,214,0.12)]"
            >
              <div>
                <span className="block text-3xl sm:text-4xl font-heading font-black text-[#00A9D6]">12+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">250+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Projects Shipped</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-heading font-black text-[#00A9D6]">50+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Senior Engineers</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">15+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Markets</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 INTERACTIVE EXPLORATION CARDS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2">Explore Our World</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#061A2E]">Discover Who We Are</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {explorationCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={card.path}
                    className="group relative flex flex-col justify-between h-full p-7 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${card.accent} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] group-hover:bg-[#00A9D6] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 font-mono group-hover:text-cyan-600 transition-colors">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-[#061A2E] group-hover:text-[#00A9D6] transition-colors mb-2.5">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#061A2E] group-hover:text-[#00A9D6] transition-colors">
                      <span>Explore</span>
                      <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE PILLARS SHOWCASE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block">Our Core Pillars</span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#061A2E]">
                  How We Drive Client Success
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Every product we engineer is grounded in deep technical mastery, user empathy, and measurable ROI.
                </p>

                {/* Tabs */}
                <div className="space-y-2">
                  {pillars.map((pillar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        activeTab === idx
                          ? 'bg-gradient-to-r from-cyan-500/10 to-sky-500/10 border-l-4 border-[#00A9D6] text-[#061A2E] font-bold shadow-xs'
                          : 'hover:bg-slate-50 text-slate-600 border-l-4 border-transparent'
                      }`}
                    >
                      <span className="font-heading font-bold text-sm sm:text-base">{pillar.title}</span>
                      <span className="text-xs text-cyan-600 font-mono">{pillar.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Preview Card */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#0A2640] to-[#041220] text-white shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/15 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                          {React.createElement(pillars[activeTab].icon, { size: 24 })}
                        </div>
                        <div>
                          <span className="text-xs text-cyan-300 font-mono block">PILLAR 0{activeTab + 1}</span>
                          <h4 className="text-xl font-heading font-bold text-white">{pillars[activeTab].title}</h4>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {pillars[activeTab].desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                        {pillars[activeTab].metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                            <span className="text-xs font-bold text-cyan-300 font-mono">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;
