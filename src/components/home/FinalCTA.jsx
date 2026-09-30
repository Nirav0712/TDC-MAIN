import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, PhoneCall, ShieldCheck, Zap, MessageSquare, Compass, Send } from 'lucide-react';

const FinalCTA = () => {
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#F0F8FF] via-[#E8F5FD] to-[#F7FAFC] border-t border-cyan-200/60 select-none"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 169, 214, 0.16), rgba(24, 197, 232, 0.08), transparent 70%)`,
          opacity: isHovered ? 1 : 0.6,
        }}
      />

      {/* Floating Animated Geometric Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -25, 0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-cyan-300/25 to-sky-200/20 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 30, 0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-[8%] w-96 h-96 rounded-full bg-gradient-to-tr from-sky-300/20 via-cyan-200/25 to-transparent blur-3xl pointer-events-none"
      />

      {/* Subtle Interactive Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: 'linear-gradient(#061A2E 1px, transparent 1px), linear-gradient(90deg, #061A2E 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-300/80 text-[#00A9D6] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_4px_16px_rgba(0,169,214,0.12)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00A9D6] animate-spin" style={{ animationDuration: '8s' }} />
          <span>Start Your Digital Transformation</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.12] mb-6 text-[#061A2E]"
        >
          Have an idea? <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
            Let's make it digital.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We partner with ambitious founders and established enterprises to architect, design, and engineer world-class digital products that aggressively scale.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-base shadow-[0_10px_28px_-5px_rgba(0,169,214,0.45)] hover:shadow-[0_14px_36px_-4px_rgba(24,197,232,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:+919925843531"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-base border border-slate-200/90 hover:border-[#00A9D6]/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 text-[#00A9D6]" />
            <span>Talk to Us</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-8 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 font-medium"
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <Zap className="w-4 h-4 text-[#00A9D6]" />
            <span>24h Discovery Turnaround</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
            <span>100% NDA Protected</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <MessageSquare className="w-4 h-4 text-[#00A9D6]" />
            <span>Direct Tech Lead Access</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
