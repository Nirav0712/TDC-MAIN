import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Users, Shield, Clock,
  Code2, Sparkles, Zap, Layers, Globe, Server, Database,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const jsSpecializations = [
  { title: "React Developer", path: "/hire-team/javascript-developers/react-developer", desc: "Interactive SPAs, Next.js full-stack systems, and design systems." },
  { title: "Node.js Developer", path: "/hire-team/javascript-developers/nodejs-developer", desc: "High-throughput asynchronous backends, Express, and microservices." },
  { title: "Next.js Developer", path: "/hire-team/javascript-developers/nextjs-developer", desc: "Server-side rendered (SSR) web applications and static sites." },
  { title: "TypeScript Developer", path: "/hire-team/javascript-developers/typescript-developer", desc: "Strict type-safe enterprise architectures with zero runtime bugs." },
  { title: "Vue.js Developer", path: "/hire-team/javascript-developers/vuejs-developer", desc: "Progressive, lightweight web interfaces and Nuxt.js apps." },
  { title: "Angular Developer", path: "/hire-team/javascript-developers/angular-developer", desc: "Enterprise-grade single page applications and complex dashboards." },
  { title: "Express.js Developer", path: "/hire-team/javascript-developers/expressjs-developer", desc: "REST & GraphQL APIs, authentication, and database connectors." },
  { title: "Full Stack JS Developer", path: "/hire-team/javascript-developers/full-stack-javascript-developer", desc: "End-to-end JavaScript ecosystem mastery from React to Node & DB." }
];

const jsServices = [
  {
    icon: Globe,
    title: "Full-Stack JavaScript Engineering",
    desc: "Single-language efficiency across the entire stack—delivering seamless data flow from React/Next.js frontends to Node.js backends."
  },
  {
    icon: Code2,
    title: "Modern Single Page Applications (SPAs)",
    desc: "Lightning-fast, dynamic web apps with smooth client-side routing, state management (Zustand/Redux), and zero page reloads."
  },
  {
    icon: Server,
    title: "High-Concurrency Node.js Microservices",
    desc: "Event-driven, non-blocking asynchronous APIs capable of handling millions of real-time requests with minimal memory overhead."
  },
  {
    icon: Layers,
    title: "Serverless & Edge Compute Solutions",
    desc: "Next.js App Router, Cloudflare Workers, and AWS Lambda serverless functions minimizing latency across global edge networks."
  },
  {
    icon: Zap,
    title: "Real-Time WebSockets & Streaming",
    desc: "Low-latency live chat, real-time collaboration dashboards, notification engines, and streaming web telemetry using Socket.io."
  },
  {
    icon: Terminal,
    title: "TypeScript Enterprise Refactoring",
    desc: "Migrating untyped JavaScript codebases to strict TypeScript for enhanced maintainability, automated CI testing, and self-documenting code."
  }
];

const hiringModels = [
  {
    id: "dedicated",
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    highlight: "Most Popular",
    desc: "Dedicated senior JavaScript engineer working exclusively on your product with daily sprint demos.",
    points: ["Direct Slack/Git access", "Daily standups & weekly demos", "Zero overhead & full IP ownership", "Flexible monthly billing"]
  },
  {
    id: "part-time",
    title: "Part-Time Dedicated",
    hours: "80 Hours / Month",
    highlight: "Flexible",
    desc: "Ideal for feature rollouts, API additions, and continuous UI enhancements on a structured schedule.",
    points: ["Scheduled weekly milestones", "Direct JS lead access", "Transparent time logs", "Easy scale-up anytime"]
  },
  {
    id: "hourly",
    title: "Time & Material (Hourly)",
    hours: "Pay As You Scale",
    highlight: "On-Demand",
    desc: "Best for performance profiling, complex bug resolutions, and ongoing architectural consulting.",
    points: ["No lock-in contracts", "Weekly timesheet reports", "Rapid developer allocation", "Pay strictly for hours worked"]
  },
  {
    id: "fixed",
    title: "Fixed Price Scope",
    hours: "Milestone-Based",
    highlight: "Turnkey",
    desc: "Perfect for well-defined full-stack JS MVPs with clear wireframes, user stories, and fixed delivery timelines.",
    points: ["Guaranteed delivery timeline", "Milestone-based billing", "Full QA & automated testing", "Post-launch warranty"]
  }
];

const hiringSteps = [
  { step: "01", title: "Share Tech Needs", desc: "Outline your JavaScript framework preferences, feature roadmap, and team setup." },
  { step: "02", title: "Review JS CVs", desc: "Within 24 hours, receive matched senior React, Node, or Full-Stack JS developer profiles." },
  { step: "03", title: "Code Interview", desc: "Conduct 1-on-1 live coding sessions and architecture evaluations." },
  { step: "04", title: "Sign NDA & Setup", desc: "Execute NDA and agreements; add developer directly to your GitHub and Slack." },
  { step: "05", title: "Ship Code", desc: "Daily agile development begins with continuous pull requests and sprint demos." }
];

const faqs = [
  {
    q: "Why hire full-stack JavaScript developers?",
    a: "Full-stack JavaScript enables one cohesive language across frontend (React/Next) and backend (Node.js), vastly accelerating velocity, code sharing, and team efficiency."
  },
  {
    q: "How soon can a dedicated JS developer start?",
    a: "We maintain pre-vetted senior JavaScript engineers. You can interview candidates within 24 hours and have them coding on your repository within 48 to 72 hours."
  },
  {
    q: "Do your developers write strict TypeScript?",
    a: "Yes! All our senior JavaScript developers are proficient in TypeScript strict mode, comprehensive type safety, and automated test-driven development (Jest/Vitest/Playwright)."
  },
  {
    q: "Do I get full IP and code ownership?",
    a: "Yes. 100% of the repository, source code, commits, and assets belong exclusively to you from Day 1."
  },
  {
    q: "Do you sign an NDA before kickoff?",
    a: "Yes, we strictly execute a mutual NDA to ensure total privacy for your intellectual property and roadmap."
  }
];

const HireJavascriptDevelopers = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <SEO
        title="Hire Dedicated JavaScript Developers | The Digital Connect"
        description="Hire top React, Node.js, Next.js, and TypeScript developers. Pre-vetted talent, strict NDA, daily agile standups, and high-performance full-stack web apps."
      />

      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">Hire Team</span>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire JavaScript Developers</span>
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
              <span>Top 1% Full-Stack JS Talent</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-[#061A2E]"
            >
              Hire Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                JavaScript Developers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Engineer modern, reactive, and scalable digital platforms with senior JavaScript & TypeScript engineers. From responsive React/Next.js frontends to microservices backends in Node.js.
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
                <span>Hire JS Developers</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919925843531"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/40 transition-all duration-300"
              >
                <PhoneCall size={16} className="text-[#00A9D6]" />
                <span>Talk to Tech Lead</span>
              </a>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A9D6]" />
                <span>24-48h Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#00A9D6]" />
                <span>100% NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#00A9D6]" />
                <span>Strict TypeScript Quality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] p-7 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-slate-300 font-bold">App.tsx</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">TypeScript v5.4</span>
              </div>

              <div className="font-mono text-xs space-y-1.5 text-slate-300 leading-relaxed">
                <p><span className="text-purple-400">export const</span> <span className="text-cyan-300">ModernArchitecture</span> = () =&gt; &#123;</p>
                <p className="pl-4">frontend: <span className="text-emerald-400">'Next.js App Router'</span>,</p>
                <p className="pl-4">backend: <span className="text-amber-300">'Node.js & Fastify'</span>,</p>
                <p className="pl-4">stateManagement: <span className="text-cyan-300">'Zustand'</span>,</p>
                <p className="pl-4">unitTesting: <span className="text-purple-400">'Vitest & Playwright'</span>,</p>
                <p className="pl-4">buildStatus: <span className="text-emerald-400">'Zero Warnings'</span></p>
                <p>&#125;;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Passionate JS Craftsmen</span>
                <span className="font-mono text-cyan-300 font-bold">● Top 1% Senior</span>
              </div>
            </div>
          </div>

        </section>

        {/* 8 SPECIALIZATIONS */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Framework Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Hire JavaScript Developers by Specialization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {jsSpecializations.map((spec, i) => (
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
                    <span>View Specialists</span>
                    <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* JS SERVICES */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              JavaScript Development Services We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jsServices.map((srv, idx) => {
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
                Tailored JS Hiring Models
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
              How to Hire JS Developers in 5 Steps
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
                READY TO SHIP BETTER JAVASCRIPT?
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3">
                Hire Top 1% Dedicated JavaScript Developers
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our technical lead today. Review pre-vetted developer profiles and kick off your next sprint within 48 hours.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire JS Developers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HireJavascriptDevelopers;
