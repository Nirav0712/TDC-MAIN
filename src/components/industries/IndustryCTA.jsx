import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const IndustryCTA = ({ title, variant = 'saas' }) => (
  <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#061A2E] text-white">
    {/* Ambient Glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

    <div className="max-w-[1100px] mx-auto text-center relative z-10">
      
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-wider text-[#18C5E8] mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Ready to Transform Your Operations</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
        {title.replace('→', '').trim()}
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
        Let's architect a secure, high-performance digital ecosystem engineered precisely for your domain requirements.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#18C5E8] text-[#061A2E] font-extrabold text-base hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-full sm:w-auto"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 text-white font-bold text-base hover:bg-white/20 border border-white/15 transition-all duration-300 w-full sm:w-auto"
        >
          Explore All Services
        </Link>
      </div>

      {/* Bottom Highlights */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300 font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#18C5E8]" />
          <span>NDA & Full IP Transfer</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#18C5E8]" />
          <span>SOC2 & HIPAA Compliant Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#18C5E8]" />
          <span>Agile Sprint Delivery</span>
        </div>
      </div>

    </div>
  </section>
);

export default IndustryCTA;