import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Shield, Clock,
  Code2, Server, Database, Sparkles, Zap, Layers, Globe,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, Terminal, Laptop,
  Send, User, Mail, Phone, FileText, CheckCircle, RefreshCw, Cpu, Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../seo/SEO';
import PageTransition from '../common/PageTransition';

const defaultStats = [
  { value: "6+", label: "Years of Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "24/7", label: "Technical Support" }
];

const defaultHiringModels = [
  {
    id: "hourly",
    title: "Hourly Hiring",
    duration: "Depends on work",
    communication: "Email, Skype, G-Meet / Zoom",
    billing: "As per the worked hours",
    hiringPeriod: "Min 30-40 Hours",
    highlight: "Flexible",
    desc: "Ideal for short-term tasks, bug fixes, periodic maintenance, and on-demand engineering consultations."
  },
  {
    id: "fixed",
    title: "Fixed Hiring",
    duration: "Depending on requirements",
    communication: "Email, Skype, G-Meet / Zoom",
    billing: "Milestone / Sprint base",
    hiringPeriod: "Depending on requirements",
    highlight: "Turnkey Scope",
    desc: "Perfect for well-defined project scopes, MVPs, and deliverables with clear requirements."
  },
  {
    id: "dedicated",
    title: "Dedicated Hiring",
    duration: "160 Hours",
    communication: "Email, Skype, G-Meet / Zoom",
    billing: "Per Month",
    hiringPeriod: "Min 2-3 Month",
    highlight: "Most Popular",
    desc: "Full-time dedicated senior engineers working exclusively on your project as your offshore team."
  }
];

const defaultHiringSteps = [
  {
    step: "1",
    title: "Connect With Us",
    desc: "Share your project requirements and goals by emailing or contacting us so our technical team can review and reach out."
  },
  {
    step: "2",
    title: "Screening & Introduction",
    desc: "We'll arrange a call/chat and connect you with vetted industry experts that match your exact technical requirements."
  },
  {
    step: "3",
    title: "Choose Suitable Model",
    desc: "Select the suitable engagement model for your timeline and budget from our flexible Hourly, Fixed, or Dedicated hiring models."
  },
  {
    step: "4",
    title: "Start Your Project",
    desc: "Once you confirm, we'll start the work procedure immediately & you can have direct talk and daily standups with your hired developer."
  }
];

const DeveloperHireTemplate = ({
  techName,
  pageCategory = "Web Developers",
  categoryUrl = "/hire-team/web-developers",
  pageTitle,
  metaDescription,
  badge = "The Best Solution For Your Business",
  tagline,
  heroDescription,
  heroBullets = [],
  stats = defaultStats,
  whyHireIntro,
  whyChoosePoints = [],
  techHighlight,
  benefits = [],
  hiringModels = defaultHiringModels,
  hiringSteps = defaultHiringSteps,
  ctaHeader = `START YOUR ${techName.toUpperCase()} PROJECT TODAY`,
  ctaTitle = `Hire Dedicated ${techName} Developers within 30 Minutes`,
  ctaDescription = `Connect with our technical consultants today to review pre-screened ${techName} talent, discuss engagement models, and start development immediately.`
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <PageTransition>
      <SEO
        title={pageTitle || `Hire Dedicated ${techName} Developers | Certified Experts | The Digital Connect`}
        description={metaDescription || `Hire certified and gifted ${techName} developers from The Digital Connect. 6+ years experience, proven projects delivered, 24/7 technical support, and flexible hiring models.`}
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/hire-team" className="hover:text-[#00A9D6] transition-colors">Hire Team</Link>
          <ChevronRight size={14} />
          <Link to={categoryUrl} className="hover:text-[#00A9D6] transition-colors">{pageCategory}</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire {techName} Developers</span>
        </div>

        {/* HERO SECTION WITH LEAD CAPTURE FORM */}
        <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-[#00A9D6]" />
                <span>{badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-5xl font-heading font-black tracking-tight leading-[1.15] text-[#061A2E]"
              >
                Hire Certified{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                  {techName} Developers
                </span>
              </motion.h1>

              {tagline && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-lg font-semibold text-[#00A9D6]"
                >
                  {tagline}
                </motion.p>
              )}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-600 leading-relaxed text-base sm:text-lg"
              >
                {heroDescription || `We have a group of gifted and dedicated ${techName} developers who have experience building scalable applications. Get in touch with us for your free quote.`}
              </motion.p>

              {/* Bullets */}
              {heroBullets.length > 0 && (
                <div className="space-y-3 pt-2">
                  {heroBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-100/80 text-[#00A9D6] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={14} className="stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-medium">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                {stats.map((st, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                    <span className="text-2xl sm:text-3xl font-heading font-black text-[#00A9D6] block">
                      {st.value}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>CONTACT US</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/50 transition-all duration-300"
                >
                  <span>OUR PORTFOLIO</span>
                </Link>
              </div>
            </div>

            {/* Right: GET A FREE QUOTE FORM */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]" />

                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A9D6] block mb-1">
                    GET A FREE QUOTE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#061A2E]">
                    Hire Dedicated Developers within 30 minutes
                  </h3>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#061A2E]">Thank You!</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Your request has been received. Our {techName} technical consultant will contact you within 30 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">First Name (Required)</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#00A9D6] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Last Name (Required)</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#00A9D6] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Required)</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#00A9D6] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Required)</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#00A9D6] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message (Required)</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`Briefly describe your ${techName} project requirements...`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#00A9D6] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={16} />
                      <span>Submit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: WHY SHOULD BUSINESSES LOOK TO HIRE DEDICATED DEVELOPERS */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Offshore Development Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                Why Should Businesses Look to Hire Dedicated {techName} Developers?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-[#00A9D6] flex items-center justify-center mb-5 font-bold">
                    01
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#061A2E] mb-3">
                    {whyHireIntro?.card1Title || `Cutting-Edge, All-Inclusive ${techName} Solutions`}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {whyHireIntro?.card1Text1 || `Does your company need ${techName} developers? We at The Digital Connect provide cutting-edge, all-inclusive ${techName} programming solutions. We help organizations worldwide by generating high returns on investment through successful deployment.`}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                    {whyHireIntro?.card1Text2 || `Utilizing extensive industry knowledge and skills, we offer adaptable experienced ${techName} developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its IT strategy by using fewer resources and merging them with our skilled team.`}
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-[#00A9D6] flex items-center justify-center mb-5 font-bold">
                    02
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#061A2E] mb-3">
                    {whyHireIntro?.card2Title || "Trained Engineers & Contractual Services"}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {whyHireIntro?.card2Text1 || `One of the finest development firms, we at The Digital Connect provide you with a dedicated team of ${techName} developers. To create some of the most sophisticated applications, our certified developers are trained engineers with deep expertise in modern stacks.`}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                    {whyHireIntro?.card2Text2 || `Their potential enables us to provide effective contractual services in this area to meet your unique company's demands with high precision, high code quality, and strict performance metrics.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY DOES BRAND CHOOSE DEDICATED DEVELOPERS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
              Key Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
              Why Does Brand Choose Dedicated {techName} Developers from The Digital Connect?
            </h2>
          </div>

          {/* 6 Key Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#00A9D6] flex items-center justify-center font-mono font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#061A2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Supporting Technical Explanations */}
          {techHighlight && (
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#092642] to-[#041424] p-8 sm:p-12 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                    <Globe className="text-[#00A9D6]" size={20} />
                    {techHighlight.title1}
                  </h4>
                  <p>{techHighlight.desc1}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                    <Layers className="text-[#00A9D6]" size={20} />
                    {techHighlight.title2}
                  </h4>
                  <p>{techHighlight.desc2}</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 4: FLEXIBLE HIRING MODELS */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Engagement Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] mb-3">
                Flexible Hiring Models
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                When it comes to finding the right team, we've been there! It is why we've put up an easy-to-follow model that may help you get started.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hiringModels.map((model) => (
                <div
                  key={model.id}
                  className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    model.id === 'dedicated'
                      ? 'bg-[#061A2E] text-white border-[#061A2E] shadow-2xl scale-105'
                      : 'bg-[#F8FAFC] text-slate-800 border-slate-200/80 shadow-xs hover:bg-white hover:border-cyan-400/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        model.id === 'dedicated'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                          : 'bg-slate-200/70 text-slate-700'
                      }`}>
                        {model.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-2xl mb-3">
                      {model.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      model.id === 'dedicated' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {model.desc}
                    </p>

                    <div className={`space-y-3.5 py-5 border-y ${
                      model.id === 'dedicated' ? 'border-white/10 text-slate-200' : 'border-slate-200 text-slate-700'
                    } text-xs sm:text-sm`}>
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold opacity-75">Duration:</span>
                        <span className="font-semibold text-right">{model.duration}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold opacity-75">Communication:</span>
                        <span className="font-semibold text-right">{model.communication}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold opacity-75">Billing:</span>
                        <span className="font-semibold text-right">{model.billing}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold opacity-75">Hiring Period:</span>
                        <span className="font-semibold text-right">{model.hiringPeriod}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 w-full py-3.5 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                      model.id === 'dedicated'
                        ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-[#061A2E] hover:opacity-95 shadow-md'
                        : 'bg-slate-800 hover:bg-[#00A9D6] text-white'
                    }`}
                  >
                    <span>Choose {model.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT ARE THE BENEFITS OF HIRING DEDICATED DEVELOPERS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
              Proven Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight mb-4">
              What are the Benefits of Hiring Dedicated {techName} Developers from The Digital Connect?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From essential business apps to high-volume enterprise portals, our team of skilled and talented {techName} developers can build everything for your digital ecosystem. Our software engineering company has a staff of enthusiastic and knowledgeable programmers who work exclusively in-house and finish projects on time.
            </p>
            <p className="text-[#00A9D6] font-semibold text-sm sm:text-base mt-2">
              Hire {techName} developer services to create a scalable, secure, iterative, and robust digital product that aids start-ups and established enterprises compete in the global market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((bn, idx) => {
              const Icon = bn.icon || RefreshCw;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] flex items-center justify-center mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#061A2E] mb-3">
                      {bn.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {bn.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: HIRING PROCESS (4 STEPS) */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Easy and Smooth Hiring Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight mb-3">
                Hire Dedicated Developers to Passionately Lead Your Business Vision to Reality
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                When it comes to finding the right team, we've been there! It is why we've put up an easy-to-follow model that may help you get started.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs hover:shadow-[0_12px_28px_-8px_rgba(0,169,214,0.14)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00A9D6] text-white font-heading font-black text-xl flex items-center justify-center mb-6 shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#061A2E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061A2E] via-[#092845] to-[#061A2E] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest block mb-2 font-mono">
                {ctaHeader}
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3">
                {ctaTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {ctaDescription}
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default DeveloperHireTemplate;
