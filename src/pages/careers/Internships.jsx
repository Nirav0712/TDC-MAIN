import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, GraduationCap, Code, Layout, TrendingUp, Sparkles,
  CheckCircle2, ChevronDown, Mail, ArrowRight, Award, Compass, Laptop
} from 'lucide-react';
import SEO from '../../components/seo/SEO';
import PageTransition from '../../components/common/PageTransition';

const internshipTracks = [
  {
    id: 'frontend',
    title: 'Frontend Engineering Intern (React / Next.js)',
    icon: Code,
    duration: '3 - 6 Months',
    stipend: 'Paid Stipend + PPO Opportunity',
    location: 'Remote / Hybrid (India)',
    desc: 'Work directly on production user interfaces with React, Next.js, TailwindCSS, and Framer Motion under lead frontend mentorship.',
    learningOutcomes: [
      'Master component-driven architecture, custom hooks, and state management (Zustand/Redux).',
      'Learn Core Web Vitals optimization, accessibility (a11y), and clean CSS animations.',
      'Participate in real agile code reviews and Git PR workflows.'
    ],
    prerequisites: ['Basic JavaScript / TypeScript fundamentals', 'HTML5 & modern CSS experience', 'Familiarity with React basics and Git']
  },
  {
    id: 'backend',
    title: 'Backend & Cloud API Intern (Node.js / Python)',
    icon: Laptop,
    duration: '3 - 6 Months',
    stipend: 'Paid Stipend + PPO Opportunity',
    location: 'Remote / Hybrid (India)',
    desc: 'Build high-performance REST APIs, database schemas, and microservices using Node.js, Python, PostgreSQL, and Docker.',
    learningOutcomes: [
      'Design relational schemas (PostgreSQL) and implement ORMs (Prisma / TypeORM).',
      'Implement JWT/OAuth authentication, rate limiting, and caching layers (Redis).',
      'Deploy containerized services to cloud environments with CI/CD automation.'
    ],
    prerequisites: ['Node.js or Python fundamentals', 'Basic SQL / relational database knowledge', 'Understanding of RESTful API principles']
  },
  {
    id: 'uiux',
    title: 'UI/UX & Product Design Intern',
    icon: Layout,
    duration: '3 - 6 Months',
    stipend: 'Paid Stipend + PPO Opportunity',
    location: 'Remote / Hybrid (India)',
    desc: 'Turn product ideas into stunning wireframes, design systems, and responsive Figma prototypes for global enterprise clients.',
    learningOutcomes: [
      'Master advanced Figma features: Auto-Layout, Component Variants, and Design Tokens.',
      'Conduct user interviews, competitor heuristic audits, and user journey mapping.',
      'Collaborate with frontend developers for pixel-perfect design handoff.'
    ],
    prerequisites: ['Proficiency in Figma or Adobe XD', 'Strong visual hierarchy, typography, and color theory sense', 'Portfolio of mockups or personal UI redesigns']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Growth Intern',
    icon: TrendingUp,
    duration: '3 - 6 Months',
    stipend: 'Paid Stipend + PPO Opportunity',
    location: 'Remote / Hybrid (India)',
    desc: 'Learn data-backed digital marketing, keyword research, on-page SEO optimization, content distribution, and analytics.',
    learningOutcomes: [
      'Perform technical SEO audits and keyword opportunity analysis using Ahrefs / SEMrush.',
      'Write compelling, SEO-optimized articles, meta tags, and landing page copy.',
      'Analyze traffic metrics and conversion funnels via Google Analytics 4.'
    ],
    prerequisites: ['Strong written and verbal English communication', 'Interest in digital media, SEO, and copywriting', 'Analytical mindset and curiosity for marketing data']
  }
];

const internshipBenefits = [
  {
    title: 'Direct 1-on-1 Mentorship',
    desc: 'Pair up with a senior engineer or designer who reviews your code, offers feedback, and accelerates your learning curve.'
  },
  {
    title: 'Real Production Code',
    desc: 'No coffee runs or dummy tasks. You will build and deploy real features used by thousands of global users.'
  },
  {
    title: 'Pre-Placement Offer (PPO)',
    desc: 'Over 85% of our high-performing interns transition into full-time permanent associate engineer roles upon completion.'
  },
  {
    title: 'Flexible Remote Schedule',
    desc: 'Balance your final semester college coursework or exams with structured, asynchronous work schedules.'
  }
];

const Internships = () => {
  const [expandedTrackId, setExpandedTrackId] = useState('frontend');

  const toggleTrack = (id) => {
    setExpandedTrackId(expandedTrackId === id ? null : id);
  };

  return (
    <PageTransition>
      <SEO
        title="Internship Opportunities | Careers at The Digital Connect"
        description="Launch your tech career with paid internship programs in Web Development, Mobile Apps, UI/UX Design, and Digital Marketing at The Digital Connect."
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/careers" className="hover:text-[#00A9D6] transition-colors">Careers</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Internships</span>
        </div>

        {/* HERO */}
        <section className="pt-8 pb-14 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00A9D6]" />
              <span>Kickstart Your Tech Career</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#061A2E]">
              Internship Opportunities at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                The Digital Connect
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
              Gain hands-on real-world experience, build high-impact client projects, learn from seasoned tech architects, and fast-track your pathway to a full-time engineering career.
            </p>
          </div>
        </section>

        {/* WHY INTERN WITH US */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Internship Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                Why Launch Your Career at TDC?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {internshipBenefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNSHIP TRACKS ACCORDION */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
              Available Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight mb-2">
              Choose Your Specialization
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click any track to explore learning outcomes, prerequisites, and application instructions.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {internshipTracks.map((track) => {
              const isExpanded = expandedTrackId === track.id;
              const Icon = track.icon;

              return (
                <div
                  key={track.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-cyan-400/60 shadow-lg'
                      : 'bg-white border-slate-200/80 hover:border-cyan-400/50 shadow-xs'
                  }`}
                >
                  {/* Track Header */}
                  <div
                    onClick={() => toggleTrack(track.id)}
                    className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00A9D6] border border-cyan-200/60">
                            {track.duration}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {track.stipend}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-[#061A2E]">
                          {track.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <span className="text-xs font-bold text-[#00A9D6] hidden sm:inline">
                        {isExpanded ? 'Hide Details' : 'View Track Details'}
                      </span>
                      <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-cyan-100 text-[#00A9D6]' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-200/80 bg-[#F8FAFC] px-6 py-8 sm:px-8 space-y-6"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {track.desc}
                        </p>

                        {/* Learning Outcomes */}
                        <div>
                          <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#061A2E] mb-3">
                            What You Will Learn & Build:
                          </h4>
                          <div className="space-y-2">
                            {track.learningOutcomes.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-cyan-100 text-[#00A9D6] flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                                </div>
                                <span className="text-xs sm:text-sm text-slate-700">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Prerequisites */}
                        <div>
                          <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#061A2E] mb-3">
                            Prerequisites & Basic Skills:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {track.prerequisites.map((req, rIdx) => (
                              <span
                                key={rIdx}
                                className="text-xs font-medium bg-white border border-slate-200 px-3 py-1 rounded-lg text-[#061A2E]"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Apply Box */}
                        <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                          <div>
                            <span className="font-bold text-[#061A2E] block">Ready to apply for this internship?</span>
                            <span className="text-slate-600">Email your resume, GitHub/portfolio link, and available start date to:</span>
                          </div>
                          <a
                            href="mailto:info@thedigitalconnect.in"
                            className="inline-flex items-center gap-2 font-mono font-bold text-[#00A9D6] hover:text-[#063B63] bg-white px-3.5 py-2 rounded-xl border border-cyan-200/80 shadow-2xs transition-colors"
                          >
                            <Mail size={14} />
                            <span>info@thedigitalconnect.in</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Internships;
