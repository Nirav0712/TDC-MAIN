import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Users, Shield, Clock,
  PenTool, Palette, Sparkles, Zap, Layers, Globe, Layout,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, Eye, Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const designerSpecializations = [
  { title: "UI/UX Designer", path: "/hire-team/designers/ui-ux-designer", desc: "User research, wireframing, high-fidelity prototypes, and design systems." },
  { title: "Product Designer", path: "/hire-team/designers/product-designer", desc: "End-to-end product strategy, discovery sprints, and user journey mapping." },
  { title: "Web Designer", path: "/hire-team/designers/web-designer", desc: "High-converting, responsive website layouts with modern visual identity." },
  { title: "Mobile App Designer", path: "/hire-team/designers/mobile-app-designer", desc: "iOS Human Interface & Material You compliant mobile app interfaces." },
  { title: "Brand Designer", path: "/hire-team/designers/brand-designer", desc: "Visual branding, typography guidelines, logo marks, and design assets." },
  { title: "Motion Designer", path: "/hire-team/designers/motion-designer", desc: "Micro-interactions, Lottie animations, 60fps UI transitions, and video assets." },
  { title: "Graphic Designer", path: "/hire-team/designers/graphic-designer", desc: "Marketing collateral, pitch decks, infographics, and social media kits." },
  { title: "Game Designer", path: "/hire-team/designers/game-designer", desc: "2D/3D game assets, character rigs, HUD interfaces, and level concept art." }
];

const designServices = [
  {
    icon: Palette,
    title: "UI/UX Design Systems & Tokens",
    desc: "Scalable Figma design systems with reusable atomic components, color tokens, and responsive layout grids ensuring 100% developer handoff efficiency."
  },
  {
    icon: Layout,
    title: "Interactive Prototyping & User Testing",
    desc: "High-fidelity clickable prototypes that validate user flows, gather feedback, and eliminate usability friction before a single line of code is written."
  },
  {
    icon: Globe,
    title: "Conversion-Focused Web & Landing Pages",
    desc: "Modern digital storefronts and SaaS landing pages engineered with visual hierarchy, compelling copy layout, and conversion rate optimization (CRO)."
  },
  {
    icon: Eye,
    title: "Mobile App Interface Design (iOS & Android)",
    desc: "Intuitive touch gestures, dynamic islands, adaptive tablet layouts, and seamless dark mode states crafted for Apple and Google ecosystems."
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Visual Guidelines",
    desc: "Complete visual positioning, logo architecture, typography palettes, iconography libraries, and enterprise brand style guides."
  },
  {
    icon: Sliders,
    title: "WCAG Accessibility Audits & Compliance",
    desc: "Ensuring all color contrast ratios, screen reader hierarchies, and interactive touch targets meet strict WCAG AAA compliance standards."
  }
];

const hiringModels = [
  {
    id: "dedicated",
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    highlight: "Most Popular",
    desc: "Dedicated senior product / UI/UX designer embedded directly into your product roadmap with daily design reviews.",
    points: ["Direct Figma & Slack access", "Daily iterations & sprint demos", "Zero overhead & full IP ownership", "Flexible monthly billing"]
  },
  {
    id: "part-time",
    title: "Part-Time Dedicated",
    hours: "80 Hours / Month",
    highlight: "Flexible",
    desc: "Ideal for ongoing feature design, design system maintenance, and marketing assets on a structured schedule.",
    points: ["Scheduled weekly deliverables", "Direct design lead access", "Transparent time logs", "Easy scale-up anytime"]
  },
  {
    id: "hourly",
    title: "Time & Material (Hourly)",
    hours: "Pay As You Scale",
    highlight: "On-Demand",
    desc: "Best for quick UI reviews, UX heuristic audits, iconography, and pitch deck enhancements.",
    points: ["No lock-in contracts", "Weekly timesheet reports", "Rapid designer allocation", "Pay strictly for hours worked"]
  },
  {
    id: "fixed",
    title: "Fixed Price Scope",
    hours: "Milestone-Based",
    highlight: "Turnkey",
    desc: "Perfect for complete new product redesigns, MVP wireframing, and brand identity launch packages.",
    points: ["Guaranteed delivery timeline", "Milestone-based billing", "Developer-ready Figma handover", "Post-launch warranty"]
  }
];

const hiringSteps = [
  { step: "01", title: "Share Design Needs", desc: "Tell us about your brand vision, target demographic, and required design assets." },
  { step: "02", title: "Review Portfolios", desc: "Within 24 hours, receive matched senior UI/UX and product designer portfolio decks." },
  { step: "03", title: "Design Interview", desc: "Conduct 1-on-1 portfolio walkthroughs and design problem-solving discussions." },
  { step: "04", title: "Sign NDA & Figma Setup", desc: "Execute NDA and agreements; grant designer access to your Figma teams and Slack." },
  { step: "05", title: "Create & Iterate", desc: "Your dedicated designer begins wireframing and prototyping with daily feedback loops." }
];

const faqs = [
  {
    q: "Which design tools do your designers use?",
    a: "Our designers are master practitioners of Figma, Adobe Creative Cloud, Framer, Principle, Lottie, and Miro for collaborative handoffs."
  },
  {
    q: "Do I get full ownership of all Figma files and source assets?",
    a: "Yes. 100% of all Figma files, design tokens, source vectors, and raw brand assets belong exclusively to you."
  },
  {
    q: "How do your designers collaborate with developers?",
    a: "Our designers build with code in mind—using auto-layout, named tokens, responsive breakpoints, and organized component variants to guarantee zero friction during engineering handoff."
  },
  {
    q: "How fast can I hire a dedicated designer?",
    a: "You can review curated portfolios within 24 hours and onboard your dedicated designer within 48 to 72 hours."
  },
  {
    q: "Do you sign an NDA before reviewing our product ideas?",
    a: "Yes. We strictly execute a mutual NDA to protect your confidential concepts and intellectual property."
  }
];

const HireDesigners = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <SEO
        title="Hire Dedicated UI/UX & Product Designers | The Digital Connect"
        description="Hire top UI/UX, product, web, and mobile app designers. Pre-vetted talent, strict NDA, pixel-perfect Figma handoffs, and high-converting user experiences."
      />

      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">Hire Team</span>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire Designers</span>
        </div>

        {/* HERO SECTION */}
        <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span>Top 1% Product & UI/UX Talent</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-[#061A2E]"
            >
              Hire Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                UI/UX Designers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Elevate your digital brand with world-class user experiences. Hire senior product designers, UI/UX strategists, and motion artists who craft frictionless, high-converting digital interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Hire Designers</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919925843531"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/40 transition-all duration-300"
              >
                <PhoneCall size={16} className="text-[#00A9D6]" />
                <span>Talk to Design Director</span>
              </a>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A9D6]" />
                <span>Figma Tokens & Auto-Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#00A9D6]" />
                <span>100% NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#00A9D6]" />
                <span>WCAG AAA Accessible</span>
              </div>
            </div>
          </div>

          {/* Right Column: Design Canvas Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] p-7 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20">
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400 mb-4">
                <span>DesignSystem.fig</span>
                <span className="text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded font-bold">100% Vetted</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Component Preview</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#00A9D6]" />
                    <span className="w-3 h-3 rounded-full bg-[#18C5E8]" />
                    <span className="w-3 h-3 rounded-full bg-purple-400" />
                  </div>
                </div>
                <div className="h-10 bg-gradient-to-r from-[#00A9D6] to-[#087EA4] rounded-xl flex items-center justify-center font-bold text-xs shadow-md">
                  Interactive Micro-Motion
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-slate-300 text-xs">
                <span>Human-Centered Product Design</span>
                <span className="font-mono text-purple-300 font-bold">60 FPS Fluid</span>
              </div>
            </div>
          </div>

        </section>

        {/* 8 SPECIALIZATIONS */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Creative Roles</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Hire Designers by Specialization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {designerSpecializations.map((spec, i) => (
                <Link
                  key={i}
                  to={spec.path}
                  className="group p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/60 hover:shadow-[0_12px_24px_-8px_rgba(0,169,214,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#061A2E] group-hover:text-[#00A9D6] transition-colors mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                      {spec.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#00A9D6] pt-3 border-t border-slate-200/60">
                    <span>View Portfolios</span>
                    <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN SERVICES */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              Design Capabilities We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] flex items-center justify-center mb-6 shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#061A2E] mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HIRING MODELS */}
        <section className="py-20 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Engagement Models</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Tailored Design Hiring Models
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringModels.map((model) => (
                <div
                  key={model.id}
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between select-none ${
                    model.id === 'dedicated'
                      ? 'bg-gradient-to-b from-[#061A2E] to-[#0A2640] text-white border-[#061A2E] shadow-xl scale-105'
                      : 'bg-white text-slate-800 border-slate-200/80 shadow-xs hover:border-cyan-400/50'
                  }`}
                >
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-3 ${
                      model.id === 'dedicated' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {model.highlight}
                    </span>
                    <h3 className="font-heading font-bold text-xl mb-1">{model.title}</h3>
                    <span className={`text-xs font-mono font-bold block mb-4 ${model.id === 'dedicated' ? 'text-cyan-300' : 'text-[#00A9D6]'}`}>
                      {model.hours}
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${model.id === 'dedicated' ? 'text-slate-300' : 'text-slate-600'}`}>
                      {model.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100/20 mb-6">
                      {model.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-medium">
                          <CheckCircle2 size={14} className={model.id === 'dedicated' ? 'text-cyan-400' : 'text-[#00A9D6]'} />
                          <span className={model.id === 'dedicated' ? 'text-slate-200' : 'text-slate-700'}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                      model.id === 'dedicated'
                        ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-[#061A2E] hover:opacity-90 shadow-md'
                        : 'bg-slate-100 hover:bg-[#00A9D6] hover:text-white text-[#061A2E]'
                    }`}
                  >
                    Select This Model
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 STEPS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Process</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              How to Hire Designers in 5 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringSteps.map((step, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
                <span className="text-2xl font-heading font-black text-[#00A9D6] block mb-2 font-mono">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-base text-[#061A2E] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-white border-y border-slate-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">FAQs</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div key={fIdx} className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                      className="w-full p-5 text-left font-heading font-bold text-base text-[#061A2E] flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#00A9D6]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-2 font-mono">
                READY TO CRAFT PREMIUM EXPERIENCES?
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3">
                Hire Top 1% Dedicated UI/UX Designers
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our design director today. Review curated portfolio decks and elevate your product experience within 48 hours.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire Designers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HireDesigners;
