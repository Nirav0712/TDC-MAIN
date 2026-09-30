import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Sparkles, Shield, Heart, Lightbulb, Users,
  Target, CheckCircle2, Award, Zap, ArrowRight, BookOpen, Mail
} from 'lucide-react';
import SEO from '../../components/seo/SEO';
import PageTransition from '../../components/common/PageTransition';

const values = [
  {
    icon: Target,
    title: 'Customer-Centric Craftsmanship',
    desc: 'We do not just write code; we solve real commercial problems. Every line of software is engineered to create measurable value for our clients.'
  },
  {
    icon: Shield,
    title: 'Uncompromising Integrity & Quality',
    desc: 'From unit tests to security audits, we do not cut corners. We build maintainable, battle-tested software designed to scale for years.'
  },
  {
    icon: Lightbulb,
    title: 'Curiosity & Bold Innovation',
    desc: 'We embrace emerging technologies, challenge stale paradigms, and encourage team members to experiment with smarter approaches.'
  },
  {
    icon: Users,
    title: 'Radical Transparency & Empathy',
    desc: 'Open channels, honest feedback, and mutual respect. We succeed as one unified team where everyone has a voice.'
  },
  {
    icon: Zap,
    title: 'Bias for Action & Ownership',
    desc: 'We take complete pride and accountability in our work. We diagnose friction early, move deliberately, and deliver on our promises.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Knowledge Sharing',
    desc: 'Growth is compounding. We share learnings, conduct peer code reviews, mentor rising talent, and elevate our collective standards.'
  }
];

const cultureHighlights = [
  {
    title: 'Zero Bureaucracy, Pure Craft',
    desc: 'We keep meetings minimal and purposeful so you have maximum uninterrupted time to focus on deep engineering and creative design.'
  },
  {
    title: 'Psychological Safety',
    desc: 'Mistakes are treated as learning opportunities. We conduct blameless post-mortems and encourage ambitious experimentation.'
  },
  {
    title: 'Merit-Driven Growth',
    desc: 'Promotions and opportunities are based on your impact, code quality, and peer leadership—not politics or tenure.'
  },
  {
    title: 'Diversity & Global Inclusion',
    desc: 'We celebrate diverse perspectives from different cultural backgrounds, creating a rich collaborative tapestry.'
  }
];

const CultureValues = () => {
  return (
    <PageTransition>
      <SEO
        title="Culture & Values | The Digital Connect Careers"
        description="Discover the core principles, engineering ethics, and collaborative culture that drive innovation at The Digital Connect."
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/careers" className="hover:text-[#00A9D6] transition-colors">Careers</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Culture & Values</span>
        </div>

        {/* HERO */}
        <section className="pt-8 pb-14 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00A9D6]" />
              <span>Our Guiding Principles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#061A2E]">
              Values That Define{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                Who We Are
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
              Culture is not just words on a wall—it is how we make decisions, how we write software, and how we treat one another every single day.
            </p>
          </div>
        </section>

        {/* 6 CORE VALUES */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Core Foundations
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                Our 6 Pillars of Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] group-hover:bg-[#00A9D6] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#061A2E] mb-2 group-hover:text-[#00A9D6] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW CULTURE WORKS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block font-mono">
                Working Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                How Our Culture Protects Your Craft
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Great products are created by happy, focused teams. We design our organizational rhythms to protect focus, encourage mentorship, and reward proactive solutions.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cultureHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-400/50 shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-[#00A9D6]" />
                    <h4 className="font-heading font-bold text-base text-[#061A2E]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Resonate with our values?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                We are always excited to meet engineers, designers, and strategists. Email us at{' '}
                <a href="mailto:info@thedigitalconnect.in" className="text-cyan-300 hover:underline font-bold">
                  info@thedigitalconnect.in
                </a>.
              </p>
            </div>
            <Link
              to="/careers/open-positions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>Explore Opportunities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default CultureValues;
