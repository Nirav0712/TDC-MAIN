import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Heart, Coffee, Globe, Laptop, Smile, Sparkles,
  Zap, Compass, Award, Users, CheckCircle2, ArrowRight, ShieldCheck, Mail
} from 'lucide-react';
import SEO from '../../components/seo/SEO';
import PageTransition from '../../components/common/PageTransition';

const pillars = [
  {
    icon: Laptop,
    title: 'Remote-First Freedom',
    desc: 'Work from anywhere with core collaboration hours. We measure outcomes, code quality, and creative problem-solving, not clock-in times.'
  },
  {
    icon: Zap,
    title: 'High-Impact Ownership',
    desc: 'Take direct ownership of architecture, features, and client solutions with psychological safety and clear autonomy.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    desc: 'Sustainable pace of development without chronic burnout. We value recharged, curious minds over late-night emergencies.'
  },
  {
    icon: Compass,
    title: 'Mentorship & Mentee Pairing',
    desc: 'Every team member is paired with engineering leads to foster rapid growth, code review clarity, and skill mastery.'
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    desc: 'Collaborate with international client brands spanning North America, Europe, Australia, and Asia-Pacific markets.'
  },
  {
    icon: Award,
    title: 'Continuous Celebrations',
    desc: 'Quarterly milestone bonuses, spot rewards, hackathon showcases, and team retreats recognizing exceptional contributions.'
  }
];

const dayInLife = [
  {
    time: '10:00 AM',
    title: 'Async Standup & Focus Flow',
    desc: 'Quick synchronous or Slack standup to unblock tasks, review pull requests, and prioritize morning deep-work blocks.'
  },
  {
    time: '12:00 PM',
    title: 'Architecture & Design Sprints',
    desc: 'Cross-functional alignment between frontend engineers, backend leads, and Figma designers for upcoming milestones.'
  },
  {
    time: '02:30 PM',
    title: 'Deep Engineering Work',
    desc: 'Uninterrupted building: crafting clean, typed, modular code, running local unit tests, and optimizing database latency.'
  },
  {
    time: '05:00 PM',
    title: 'Tech Demos & Knowledge Sharing',
    desc: 'Bi-weekly Friday lightning talks exploring new frameworks, AI tooling integrations, and engineering retrospectives.'
  }
];

const LifeAtTDC = () => {
  return (
    <PageTransition>
      <SEO
        title="Life at The Digital Connect | Culture, Perks & Remote Freedom"
        description="Experience the vibrant, people-first culture at The Digital Connect. Discover our remote flexibility, continuous learning, and supportive work environment."
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/careers" className="hover:text-[#00A9D6] transition-colors">Careers</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Life at TDC</span>
        </div>

        {/* HERO */}
        <section className="pt-8 pb-14 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00A9D6]" />
              <span>People-First Workplace</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#061A2E]">
              Life at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                The Digital Connect
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
              We believe brilliant work happens when talented minds feel empowered, respected, and free to innovate. Here is what everyday collaboration looks like inside our digital agency.
            </p>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Workplace Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                Designed For Innovation & Well-Being
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] group-hover:bg-[#00A9D6] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#061A2E] mb-2 group-hover:text-[#00A9D6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* A DAY IN THE LIFE */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
              Daily Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
              A Day in the Life of a TDC Engineer & Maker
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dayInLife.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-50 text-[#00A9D6] mb-4 border border-cyan-200/70">
                    {step.time}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-[#061A2E] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Want to be part of our story?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Explore our active job openings or email our talent discovery team directly at{' '}
                <a href="mailto:info@thedigitalconnect.in" className="text-cyan-300 hover:underline font-bold">
                  info@thedigitalconnect.in
                </a>.
              </p>
            </div>
            <Link
              to="/careers/open-positions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>View Open Roles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default LifeAtTDC;
