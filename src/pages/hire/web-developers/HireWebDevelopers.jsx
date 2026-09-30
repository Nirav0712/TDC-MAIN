import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Users, Shield, Clock,
  Code2, Laptop, Globe, Server, Database, Sparkles, Zap, Layers,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const devSpecializations = [
  { title: "PHP Developer", path: "/hire-team/web-developers/php-developer", desc: "Enterprise Laravel, Symfony, and custom backend systems." },
  { title: "Python Developer", path: "/hire-team/web-developers/python-developer", desc: "Django, FastAPI, AI integration, and scalable data backends." },
  { title: "WordPress Developer", path: "/hire-team/web-developers/wordpress-developer", desc: "Custom themes, plugins, high-converting WooCommerce stores." },
  { title: "Laravel Developer", path: "/hire-team/web-developers/laravel-developer", desc: "Robust APIs, secure multi-tenant architectures, and SaaS." },
  { title: "MERN Stack Developer", path: "/hire-team/web-developers/mern-developer", desc: "Full-stack React, Node.js, Express, and MongoDB web apps." },
  { title: "MEAN Stack Developer", path: "/hire-team/web-developers/mean-stack-developer", desc: "Enterprise Angular, Node, Express, and cloud databases." },
  { title: "Full Stack Developer", path: "/hire-team/web-developers/full-stack-developer", desc: "End-to-end architecture from pixel-perfect UI to scalable DB." },
  { title: "Shopify Developer", path: "/hire-team/web-developers/shopify-developer", desc: "Custom Liquid storefronts, headless Shopify, and app integrations." },
  { title: "Magento Developer", path: "/hire-team/web-developers/magento-developer", desc: "High-volume B2B/B2C Adobe Commerce enterprise stores." },
  { title: "Java Developer", path: "/hire-team/web-developers/java-developer", desc: "Spring Boot, enterprise microservices, and banking-grade security." },
  { title: "Golang Developer", path: "/hire-team/web-developers/golang-developer", desc: "Ultra-low latency APIs, cloud microservices, and distributed systems." },
  { title: ".NET Core Developer", path: "/hire-team/web-developers/net-core-developer", desc: "C#, Azure enterprise integrations, and high-throughput systems." }
];

const services = [
  {
    icon: Laptop,
    title: "Custom Web Application Development",
    desc: "Bespoke, cloud-ready web applications engineered for speed, robust security, and seamless user experiences tailored to your business workflows."
  },
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "Complete frontend and backend engineering using modern tech stacks (React, Node.js, Python, TypeScript) to deliver turnkey platforms."
  },
  {
    icon: Globe,
    title: "eCommerce & Marketplace Platforms",
    desc: "High-converting online storefronts and multi-vendor marketplaces optimized for fast checkout, secure payments, and global traffic."
  },
  {
    icon: Server,
    title: "Enterprise SaaS & Web Portals",
    desc: "Multi-tenant cloud architectures, customer self-service portals, and internal dashboard systems with role-based access control."
  },
  {
    icon: Code2,
    title: "API Development & Third-Party Integrations",
    desc: "RESTful and GraphQL APIs connecting your web ecosystem with payment gateways, ERPs, CRMs, and third-party SaaS services."
  },
  {
    icon: Zap,
    title: "Web Performance & Modernization",
    desc: "Legacy system refactoring, Core Web Vitals optimization, and microservices migration to boost performance and reduce hosting costs."
  }
];

const hiringModels = [
  {
    id: "dedicated",
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    highlight: "Most Popular",
    desc: "A dedicated senior developer or full squad working exclusively on your project as an integral extension of your internal team.",
    points: ["Direct Slack/Git access", "Daily standup & sprint demos", "Zero overhead & full IP ownership", "Flexible monthly billing"]
  },
  {
    id: "part-time",
    title: "Part-Time Dedicated",
    hours: "80 Hours / Month",
    highlight: "Flexible",
    desc: "Ideal for growing startups and medium-sized projects requiring consistent engineering output without full-time commitment.",
    points: ["Scheduled weekly milestones", "Direct lead communication", "Transparent time-tracking", "Easy scale-up to full-time"]
  },
  {
    id: "hourly",
    title: "Time & Material (Hourly)",
    hours: "Pay As You Scale",
    highlight: "On-Demand",
    desc: "Best for maintenance, bug fixes, periodic feature rollouts, and ongoing architectural consulting with flexible hours.",
    points: ["No minimum lock-in", "Weekly timesheet reports", "Rapid developer allocation", "Pay strictly for hours worked"]
  },
  {
    id: "fixed",
    title: "Fixed Price Scope",
    hours: "Milestone-Based",
    highlight: "Turnkey",
    desc: "Perfect for well-defined MVPs, redesigns, and greenfield projects with clear deliverables, deadlines, and fixed budgets.",
    points: ["Guaranteed delivery timeline", "Fixed milestone payments", "End-to-end QA included", "Post-launch warranty"]
  }
];

const hiringSteps = [
  { step: "01", title: "Share Requirements", desc: "Send us your project scope, required skill sets, timeline, and tech preferences." },
  { step: "02", title: "Review Vetted Profiles", desc: "Within 24 hours, we share shortlisted senior developer CVs matched to your needs." },
  { step: "03", title: "Interview Candidates", desc: "Conduct one-on-one live technical interviews and code evaluations." },
  { step: "04", title: "Sign NDA & Setup", desc: "Execute NDA and service agreements; setup Git repositories and Slack channels." },
  { step: "05", title: "Kickoff Sprints", desc: "Your dedicated developer starts coding with daily standups and weekly sprint demos." }
];

const faqs = [
  {
    q: "How quickly can I onboard a dedicated web developer?",
    a: "We maintain a ready bench of pre-vetted senior developers. You can review profiles within 24 hours, complete technical interviews, and have your developer onboarded within 48 to 72 hours."
  },
  {
    q: "Do I get 100% code and intellectual property (IP) ownership?",
    a: "Yes, absolutely. All source code, designs, documentation, and intellectual property developed during the engagement belong 100% to you from Day 1."
  },
  {
    q: "How do we communicate and track daily progress?",
    a: "You get direct access to your developers via Slack, Microsoft Teams, Zoom, and your preferred project management tool (Jira, Linear, Trello, GitHub). We provide daily asynchronous updates and weekly sprint demos."
  },
  {
    q: "What if I am not satisfied with the developer's performance?",
    a: "We offer a 100% risk-free trial period and a hassle-free replacement guarantee. If a developer does not meet expectations, our delivery lead will replace them promptly at zero extra cost."
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes. We strictly sign a bilateral Non-Disclosure Agreement (NDA) before discussing your confidential requirements and codebases to ensure total privacy."
  }
];

const HireWebDevelopers = () => {
  const [activeModel, setActiveModel] = useState('dedicated');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <SEO
        title="Hire Dedicated Web Developers | The Digital Connect"
        description="Hire top-tier, pre-vetted custom web developers. Flexible hiring models, strict NDA, daily agile standups, and scalable modern web engineering."
      />

      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">Hire Team</span>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire Web Developers</span>
        </div>

        {/* HERO SECTION */}
        <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span>Top 1% Pre-Vetted Talent</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-[#061A2E]"
            >
              Hire Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                Web Developers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Scale your engineering team with elite, pre-vetted full-stack web developers. We build secure, lightning-fast, and high-converting custom web applications tailored to your business goals.
            </motion.p>

            {/* CTA Buttons */}
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
                <span>Hire Developers Now</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919925843531"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/40 transition-all duration-300"
              >
                <PhoneCall size={16} className="text-[#00A9D6]" />
                <span>Schedule Tech Call</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A9D6]" />
                <span>24-48h Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#00A9D6]" />
                <span>Strict NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#00A9D6]" />
                <span>Timezone Aligned</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Console */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] p-7 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-slate-300 font-bold">VettedDeveloperSquad.ts</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Senior 5+ Yrs</span>
              </div>

              <div className="font-mono text-xs space-y-1.5 text-slate-300 leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-300">hireSquad</span> = &#123;</p>
                <p className="pl-4">engineers: <span className="text-emerald-400">'Senior Full-Stack'</span>,</p>
                <p className="pl-4">experience: <span className="text-amber-300">'5+ Years Avg'</span>,</p>
                <p className="pl-4">codeOwnership: <span className="text-cyan-300">100%</span>,</p>
                <p className="pl-4">agileSprint: <span className="text-purple-400">true</span>,</p>
                <p className="pl-4">techLeadAccess: <span className="text-emerald-400">'Direct & Daily'</span></p>
                <p>&#125;;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Award size={14} className="text-cyan-300" />
                  Top 1% Verified Engineers
                </span>
                <span className="font-mono text-cyan-300 font-bold">● Available Now</span>
              </div>
            </div>
          </div>

        </section>

        {/* 12 SPECIALIZATIONS MATRIX */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Specialized Talent</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Hire Web Developers by Technology
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Choose the exact stack and technology needed for your upcoming web milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {devSpecializations.map((spec, i) => (
                <Link
                  key={i}
                  to={spec.path}
                  className="group p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/60 hover:shadow-[0_12px_24px_-8px_rgba(0,169,214,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#061A2E] group-hover:text-[#00A9D6] transition-colors mb-1.5">
                      {spec.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      {spec.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#00A9D6] pt-2 border-t border-slate-200/60">
                    <span>View Specialists</span>
                    <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE WEB DEVELOPMENT SERVICES */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              Web Development Services We Deliver
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From enterprise SaaS applications to high-performance ecommerce, our developers deliver turnkey digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => {
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

        {/* FLEXIBLE HIRING ENGAGEMENT MODELS */}
        <section className="py-20 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Flexible Engagement</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Tailored Hiring Models
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Choose the model that best fits your product roadmap, budget, and scalability timeline.
              </p>
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
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        model.id === 'dedicated' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {model.highlight}
                      </span>
                    </div>

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

        {/* 5-STEP HIRING PROCESS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Streamlined Onboarding</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              How to Hire Developers in 5 Simple Steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A frictionless onboarding process designed to get senior developers writing code within days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs relative"
              >
                <span className="text-2xl font-heading font-black text-[#00A9D6] block mb-2 font-mono">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-base text-[#061A2E] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE FAQS */}
        <section className="py-20 bg-white border-y border-slate-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Got Questions?</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                      className="w-full p-5 text-left font-heading font-bold text-base text-[#061A2E] flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#00A9D6]' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
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

        {/* BOTTOM FINAL CTA */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/15 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-2 font-mono">
                READY TO SCALE YOUR TEAM?
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3 text-white">
                Hire Top 1% Dedicated Web Developers Today
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our technical lead today. Review pre-vetted developer profiles and kick off your next sprint within 48 hours.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire Developers Now</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HireWebDevelopers;
