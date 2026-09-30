import React, { useState } from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code, PenTool, BarChart3, Sparkles, ArrowRight, ShieldCheck, Zap, Terminal, Layers, CheckCircle2, GitBranch, Cpu, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamSquads = [
  {
    id: 'engineering',
    category: 'Engineering',
    number: '01',
    title: 'Full-Stack Engineering Squad',
    icon: Code,
    headline: 'Senior Builders & Architects',
    desc: 'Our engineering squad comprises full-stack specialists with deep expertise across modern distributed systems, cloud infrastructure, and responsive web/mobile platforms.',
    techs: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    stats: { primary: '50+', label: 'Engineers' },
    deliverables: ['Modular microservices architecture', 'Zero-downtime automated CI/CD', 'Sub-100ms API response latency']
  },
  {
    id: 'creative',
    category: 'Creative',
    number: '02',
    title: 'Product & UI/UX Design Studio',
    icon: PenTool,
    headline: 'Human-Centered Designers',
    desc: 'Operating at the intersection of human psychology and visual prestige, our design studio creates frictionless digital experiences that elevate brand authority.',
    techs: ['Figma', 'Design Systems', 'Framer Motion', 'WCAG AAA', 'Prototyping', 'User Research'],
    stats: { primary: '100%', label: 'Pixel-Perfect' },
    deliverables: ['Custom design systems & tokens', 'Interactive prototypes with 60fps motion', 'Comprehensive user journey maps']
  },
  {
    id: 'leadership',
    category: 'Leadership',
    number: '03',
    title: 'Leadership & Strategy Team',
    icon: Users,
    headline: 'Vision & Delivery Governance',
    desc: 'Seasoned technical founders and delivery directors ensuring every engagement is strategically aligned with your bottom line, timeline, and ROI goals.',
    techs: ['Tech Roadmaps', 'Architecture Audits', 'Agile Governance', 'Enterprise Security'],
    stats: { primary: '12+', label: 'Years Avg Exp' },
    deliverables: ['Direct tech lead partnership', 'Strategic enterprise scoping', 'Rigorous delivery governance']
  },
  {
    id: 'growth',
    category: 'Growth',
    number: '04',
    title: 'Growth & Performance Squad',
    icon: BarChart3,
    headline: 'Scale & Analytics Architects',
    desc: 'Merging deep performance marketing with full-funnel analytics to drive organic visibility, user acquisition, and sustainable client retention.',
    techs: ['SEO / Core Web Vitals', 'Conversion Rate Opt', 'Google Analytics 4', 'Data Pipelines'],
    stats: { primary: '4.8x', label: 'Avg ROAS' },
    deliverables: ['Technical SEO architecture', 'Conversion rate optimization', 'High-intent lead generation funnels']
  }
];

const Team = () => {
  useSEO({
    title: "Our Team | The Digital Connect",
    description: "Meet the senior engineers, designers, and strategists behind The Digital Connect."
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSquads = activeFilter === 'all'
    ? teamSquads
    : teamSquads.filter(s => s.id === activeFilter);

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-[550px] h-[350px] bg-[#00A9D6]/8 blur-[130px] rounded-full pointer-events-none" />
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
              <span>The Builders Behind The Code</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1] mb-6 text-[#061A2E]"
            >
              People behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                technology & experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              A multidisciplinary collective of senior engineers, product designers, and growth strategists dedicated to delivering transformative software.
            </motion.p>
          </div>
        </section>

        {/* INTERACTIVE SQUAD FILTER BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs max-w-2xl mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#061A2E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Squads
            </button>
            {teamSquads.map((squad) => (
              <button
                key={squad.id}
                onClick={() => setActiveFilter(squad.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === squad.id
                    ? 'bg-[#00A9D6] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {squad.category}
              </button>
            ))}
          </div>
        </div>

        {/* SQUADS GRID */}
        <section className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSquads.map((squad, index) => {
                const Icon = squad.icon;

                return (
                  <motion.div
                    key={squad.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 rounded-2xl bg-cyan-50 text-[#00A9D6] flex items-center justify-center shadow-xs">
                          <Icon size={24} />
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-heading font-black text-[#00A9D6] block">
                            {squad.stats.primary}
                          </span>
                          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                            {squad.stats.label}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#00A9D6] uppercase tracking-wider block mb-1">
                        SQUAD {squad.number} • {squad.category}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-[#061A2E] mb-3">
                        {squad.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {squad.desc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                        {squad.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 size={16} className="text-[#00A9D6] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                        Core Tooling & Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {squad.techs.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* SQUAD COLLABORATION BLUEPRINT */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#18C5E8] uppercase tracking-widest block mb-2 font-mono">
                ENGINEERING CULTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
                How Our Squads Collaborate With You
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                We embed directly into your workflows via Slack, GitHub, and 2-week agile sprints. No middle-managers or communication silos—just senior talent delivering clean code.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire a Dedicated Squad</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </section>

      </div>
    </PageTransition>
  );
};

export default Team;
