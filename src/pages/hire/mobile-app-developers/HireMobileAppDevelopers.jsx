import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Users, Shield, Clock,
  Smartphone, Tablet, Sparkles, Zap, Layers, Globe, Server,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, Code2, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const mobileSpecializations = [
  { title: "iOS Developer", path: "/hire-team/mobile-app-developers/ios-developer", desc: "Swift, SwiftUI, Objective-C, and Apple ecosystem architectures." },
  { title: "Android Developer", path: "/hire-team/mobile-app-developers/android-developer", desc: "Kotlin, Jetpack Compose, and high-performance Android apps." },
  { title: "Flutter Developer", path: "/hire-team/mobile-app-developers/flutter-developer", desc: "Single codebase, 60fps native performance for iOS and Android." },
  { title: "React Native Developer", path: "/hire-team/mobile-app-developers/react-native-developer", desc: "Cross-platform React architectures with native modules." },
  { title: "Kotlin Developer", path: "/hire-team/mobile-app-developers/kotlin-developer", desc: "Modern Android development with clean architecture & coroutines." },
  { title: "Swift Developer", path: "/hire-team/mobile-app-developers/swift-developer", desc: "High-performance iOS, iPadOS, watchOS, and macOS apps." },
  { title: "Ionic Developer", path: "/hire-team/mobile-app-developers/ionic-developer", desc: "Capacitor, web technologies, and hybrid mobile solutions." },
  { title: "Unity 3D Developer", path: "/hire-team/mobile-app-developers/unity-3d-developer", desc: "Mobile gaming, interactive AR/VR, and 3D simulation apps." },
  { title: "Cross-Platform Developer", path: "/hire-team/mobile-app-developers/cross-platform-developer", desc: "Unified codebases maximizing multi-platform market reach." }
];

const mobileServices = [
  {
    icon: Smartphone,
    title: "Native iOS & Android Engineering",
    desc: "Platform-specific apps built in Swift and Kotlin that fully leverage native hardware APIs, Apple/Google design guidelines, and peak performance."
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    desc: "Single-codebase Flutter and React Native mobile solutions that drastically cut time-to-market while preserving native look, feel, and speed."
  },
  {
    icon: Globe,
    title: "Enterprise Mobile Solutions",
    desc: "Secure, offline-first mobile apps for enterprise workforce automation, real-time telemetry, IoT connectivity, and role-based data synchronization."
  },
  {
    icon: Server,
    title: "Mobile Backend & API Architecture",
    desc: "Cloud-native microservices, GraphQL endpoints, push notification pipelines, and serverless backends engineered for massive mobile concurrency."
  },
  {
    icon: Zap,
    title: "App Store Optimization & Deployment",
    desc: "Zero-rejection App Store and Google Play submissions, compliance audits, automated CI/CD builds, and conversion-optimized store assets."
  },
  {
    icon: Cpu,
    title: "App Maintenance & Upgrades",
    desc: "Continuous OS version compatibility updates, crash monitoring, battery/memory profiling, and proactive feature roadmaps."
  }
];

const hiringModels = [
  {
    id: "dedicated",
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    highlight: "Most Popular",
    desc: "Dedicated senior mobile developer working exclusively on your app architecture with daily sprint demos.",
    points: ["Direct Slack/Git access", "Daily standups & weekly demos", "Zero overhead & full IP ownership", "Flexible monthly billing"]
  },
  {
    id: "part-time",
    title: "Part-Time Dedicated",
    hours: "80 Hours / Month",
    highlight: "Flexible",
    desc: "Ideal for feature rollouts, app store updates, and ongoing mobile enhancements on a structured schedule.",
    points: ["Scheduled weekly milestones", "Direct mobile lead access", "Transparent time logs", "Easy scale-up anytime"]
  },
  {
    id: "hourly",
    title: "Time & Material (Hourly)",
    hours: "Pay As You Scale",
    highlight: "On-Demand",
    desc: "Best for quick bug fixes, native library integrations, OS updates, and architectural consulting.",
    points: ["No lock-in contracts", "Weekly timesheet reports", "Rapid developer allocation", "Pay strictly for hours worked"]
  },
  {
    id: "fixed",
    title: "Fixed Price Scope",
    hours: "Milestone-Based",
    highlight: "Turnkey",
    desc: "Perfect for well-defined mobile MVPs with clear wireframes, user stories, and fixed delivery timelines.",
    points: ["Guaranteed delivery timeline", "Milestone-based billing", "Store submission QA included", "Post-launch warranty"]
  }
];

const hiringSteps = [
  { step: "01", title: "Share App Scope", desc: "Tell us your mobile feature scope, target platforms, and design preferences." },
  { step: "02", title: "Review Mobile CVs", desc: "Within 24 hours, receive matched senior iOS, Android, or Flutter developer profiles." },
  { step: "03", title: "Technical Interview", desc: "Conduct 1-on-1 code reviews and architecture discussions with shortlisted candidates." },
  { step: "04", title: "Sign NDA & Onboard", desc: "Execute NDA and service agreements; integrate developer into your Git & Slack." },
  { step: "05", title: "Start Mobile Sprints", desc: "Daily agile development begins with continuous test builds via TestFlight & Firebase." }
];

const faqs = [
  {
    q: "How fast can I hire a senior mobile developer?",
    a: "We maintain pre-vetted senior mobile engineers. You can interview candidates within 24 hours and have them coding on your repository within 48 to 72 hours."
  },
  {
    q: "Do you build native apps or cross-platform apps?",
    a: "Both! We provide dedicated developers for native iOS (Swift), native Android (Kotlin), as well as cross-platform frameworks (Flutter & React Native)."
  },
  {
    q: "Will the developer handle App Store and Google Play deployments?",
    a: "Yes. Our mobile developers handle certificate provisioning, App Store Connect setup, Google Play Console compliance, and continuous TestFlight builds."
  },
  {
    q: "Do I own 100% of the mobile source code?",
    a: "Yes. All code, UI assets, and intellectual property belong 100% to you from day one."
  },
  {
    q: "Do you sign an NDA before project discussions?",
    a: "Yes. We strictly execute a bilateral Non-Disclosure Agreement (NDA) to guarantee complete confidentiality of your product concept."
  }
];

const HireMobileAppDevelopers = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <SEO
        title="Hire Dedicated Mobile App Developers | The Digital Connect"
        description="Hire top iOS, Android, Flutter, and React Native mobile developers. Pre-vetted talent, strict NDA, daily agile standups, and scalable mobile apps."
      />

      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">Hire Team</span>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire Mobile App Developers</span>
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
              <span>Top 1% Mobile App Engineers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-[#061A2E]"
            >
              Hire Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                Mobile Developers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Build high-performance, frictionless iOS and Android applications. Hire senior Swift, Kotlin, Flutter, and React Native developers who turn visionary concepts into top-ranking store apps.
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
                <span>Hire Mobile Developers</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919925843531"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/40 transition-all duration-300"
              >
                <PhoneCall size={16} className="text-[#00A9D6]" />
                <span>Talk to Mobile Lead</span>
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
                <span>Zero Store Rejections</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20 text-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-6">
                <span>MOBILE SQUAD CORE</span>
                <span className="text-emerald-400 font-bold">● Swift & Flutter Ready</span>
              </div>

              <div className="w-48 h-64 bg-slate-900 border-4 border-slate-700 rounded-[32px] mx-auto p-3 shadow-inner flex flex-col justify-between relative">
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
                <div className="space-y-2 py-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                    <Smartphone size={20} />
                  </div>
                  <span className="text-xs font-bold text-white block">60 FPS Native UI</span>
                  <div className="h-1.5 w-24 bg-cyan-400/40 rounded-full mx-auto" />
                </div>
                <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto" />
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>App Store & Play Store Certified</span>
                <span className="font-mono text-cyan-300 font-bold">5+ Yrs Exp</span>
              </div>
            </div>
          </div>

        </section>

        {/* 9 SPECIALIZATIONS */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Platform Mastery</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Hire Mobile Developers by Specialization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mobileSpecializations.map((spec, i) => (
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

        {/* MOBILE SERVICES */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">End-To-End Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              Mobile Development Capabilities We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileServices.map((srv, idx) => {
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
                Flexible Mobile Hiring Models
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
              How to Hire Mobile Developers in 5 Steps
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
                READY TO BUILD YOUR APP?
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3 text-white">
                Hire Top 1% Dedicated Mobile App Developers
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our mobile lead today. Review pre-vetted developer profiles and kick off your next sprint within 48 hours.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire Mobile Developers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HireMobileAppDevelopers;
