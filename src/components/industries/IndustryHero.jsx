import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const variantGradients = {
  healthcare: 'from-[#E8F8FA] via-[#F4FBFC] to-white',
  fintech: 'from-[#EBF2FA] via-[#F5F8FC] to-white',
  ecommerce: 'from-[#EAF8EE] via-[#F5FCF7] to-white',
  education: 'from-[#FAEEED] via-[#FCF7F6] to-white',
  'real-estate': 'from-[#FAF7E8] via-[#FCFAF2] to-white',
  travel: 'from-[#F3EAF8] via-[#F9F4FC] to-white',
  logistics: 'from-[#EEF2F6] via-[#F7F9FB] to-white',
  saas: 'from-[#EAF3FF] via-[#F4F8FF] to-white'
};

const variantAccents = {
  healthcare: { badge: 'bg-[#18C5E8]/10 text-[#087EA4] border-[#18C5E8]/30', dot: 'bg-[#18C5E8]' },
  fintech: { badge: 'bg-[#087EA4]/10 text-[#087EA4] border-[#087EA4]/30', dot: 'bg-[#087EA4]' },
  ecommerce: { badge: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30', dot: 'bg-emerald-500' },
  education: { badge: 'bg-rose-500/10 text-rose-700 border-rose-500/30', dot: 'bg-rose-500' },
  'real-estate': { badge: 'bg-amber-500/10 text-amber-700 border-amber-500/30', dot: 'bg-amber-500' },
  travel: { badge: 'bg-purple-500/10 text-purple-700 border-purple-500/30', dot: 'bg-purple-500' },
  logistics: { badge: 'bg-slate-500/10 text-slate-700 border-slate-500/30', dot: 'bg-slate-500' },
  saas: { badge: 'bg-blue-500/10 text-blue-700 border-blue-500/30', dot: 'bg-blue-500' }
};

export const IndustryHero = ({
  variant = 'saas',
  eyebrow,
  headline,
  description,
  visual: Visual,
  ctaText = 'Start a Project',
  ctaLink = '/contact'
}) => {
  const gradientClass = variantGradients[variant] || 'from-[#F0F5F9] via-white to-white';
  const accent = variantAccents[variant] || { badge: 'bg-primary/10 text-primary border-primary/20', dot: 'bg-primary' };

  return (
    <section className={`relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ${gradientClass} border-b border-[#D9E7EF] overflow-hidden`}>
      {/* Decorative ambient background orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-cyan/20 to-brand-soft-blue/20 rounded-full blur-3xl pointer-events-none -z-0 opacity-60"></div>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D9E7EF] text-xs sm:text-sm font-medium text-slate-600 mb-6 shadow-sm">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-primary font-bold capitalize">{variant.replace('-', ' ')}</span>
          </div>

          {/* Eyebrow Pill */}
          {eyebrow && (
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase mb-5 ${accent.badge}`}>
              <span className={`w-2 h-2 rounded-full ${accent.dot} animate-pulse`}></span>
              {eyebrow}
            </div>
          )}

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#061A2E] leading-[1.12] tracking-tight mb-6">
            {headline}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#061A2E] text-white font-bold text-base hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-[#061A2E] font-bold text-base border border-[#D9E7EF] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[#D9E7EF]/80 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#18C5E8]" />
              <span>Scalable Cloud Architecture</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full">
          <div className="w-full max-w-[540px] relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan/30 to-brand-blue/30 rounded-[32px] blur-xl opacity-50 -z-10"></div>
            {Visual ? <Visual /> : null}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryHero;