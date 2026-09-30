import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Briefcase, GraduationCap, Users, Lightbulb,
  MapPin, Code, Cpu, Target, Layers, Sparkles, CheckCircle2, ChevronDown,
  Clock, Heart, Award, Shield, Mail, Copy, Check
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import PageTransition from '../components/common/PageTransition';

const benefits = [
  {
    title: 'Meaningful Work',
    description: 'Be part of high-impact engineering projects that directly transform digital landscapes and global business performance.',
    icon: Target,
    highlight: 'Impact'
  },
  {
    title: 'Continuous Learning',
    description: 'Access to learning stipends, cloud certifications, tech conferences, and 1-on-1 mentorship to keep your skills sharp.',
    icon: GraduationCap,
    highlight: 'Upskill'
  },
  {
    title: 'Collaborative Culture',
    description: 'Work alongside ambitious, humble peers in an open environment that prioritizes collective team success over hierarchy.',
    icon: Users,
    highlight: 'Teamwork'
  },
  {
    title: 'Creative Freedom',
    description: 'We believe good ideas can come from anywhere. You have the autonomy to innovate and architect modern solutions.',
    icon: Lightbulb,
    highlight: 'Autonomy'
  },
  {
    title: 'Growth Opportunities',
    description: 'Clear, merit-based career progression paths shaped by your personal ambitions, leadership, and technical milestones.',
    icon: Layers,
    highlight: 'Career Path'
  },
  {
    title: 'Modern Technology',
    description: 'Work with the latest modern frameworks (React 19, Next.js, Node, Python, Cloud IaC, AI) and clean architecture.',
    icon: Cpu,
    highlight: 'Latest Stack'
  }
];

const cultureValues = [
  { title: 'Think Boldly', desc: 'Challenge assumptions and propose ambitious, creative solutions that push boundaries.' },
  { title: 'Communicate Openly', desc: 'Transparent feedback, psychological safety, and clear asynchronous collaboration.' },
  { title: 'Take Ownership', desc: 'Own your deliverables from inception to production deployment with accountability.' },
  { title: 'Learn Continuously', desc: 'Stay curious, experiment with new technologies, and share knowledge with peers.' },
  { title: 'Build with Purpose', desc: 'Craft clean, performant, and maintainable software that delivers lasting value.' },
  { title: 'Celebrate Progress', desc: 'Recognize team milestones, small wins, personal growth, and collective breakthroughs.' }
];

const stats = [
  { value: '100%', label: 'Remote & Hybrid Flexibility' },
  { value: '6+ Yrs', label: 'Continuous Growth' },
  { value: '98%', label: 'Team Satisfaction' },
  { value: '25+', label: 'Global Client Brands' }
];

const growthSteps = [
  { step: '01', title: 'Explore', desc: 'Discover our open positions and align your passions with our engineering vision.' },
  { step: '02', title: 'Join', desc: 'Experience a smooth, respectful interview process with real-time technical feedback.' },
  { step: '03', title: 'Learn', desc: 'Comprehensive onboarding, codebase walkthroughs, and assigned mentor guidance.' },
  { step: '04', title: 'Contribute', desc: 'Ship production code, contribute to architecture, and collaborate with global peers.' },
  { step: '05', title: 'Lead', desc: 'Mentor junior engineers, lead technical sprints, and shape our engineering culture.' },
  { step: '06', title: 'Grow', desc: 'Advance along leadership or principal engineering tracks with full company support.' }
];

const jobsData = [
  {
    id: 1,
    title: 'Senior Frontend Developer (React / Next.js)',
    dept: 'Engineering',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '3+ Years',
    desc: 'Build highly interactive, performance-obsessed user interfaces and enterprise design systems using React, Next.js, TypeScript, and modern CSS.',
    responsibilities: [
      'Architect and maintain scalable frontend architectures using React 19, Next.js App Router, and TypeScript.',
      'Build reusable, accessible (WCAG 2.1) UI components with TailwindCSS and Framer Motion.',
      'Optimize Core Web Vitals (LCP, FID, CLS) for sub-second global render speeds.',
      'Collaborate closely with UI/UX designers and backend API engineers in agile 2-week sprints.'
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux / Zustand', 'REST & GraphQL APIs', 'Jest / Cypress']
  },
  {
    id: 2,
    title: 'Senior Backend Developer (Node.js / Python)',
    dept: 'Engineering',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '3+ Years',
    desc: 'Architect robust and scalable server-side systems, event-driven microservices, and high-throughput RESTful/GraphQL APIs.',
    responsibilities: [
      'Design, build, and maintain high-concurrency microservices in Node.js (NestJS/Express) or Python (Django/FastAPI).',
      'Optimize database queries, indexing, and connection pools across PostgreSQL, MongoDB, and Redis.',
      'Implement secure authentication mechanisms (OAuth2, JWT), rate limiting, and zero-trust security policies.',
      'Author automated unit and integration test suites with CI/CD integration.'
    ],
    skills: ['Node.js', 'Python', 'NestJS / Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS / Azure']
  },
  {
    id: 3,
    title: 'Full Stack Engineer (TypeScript Stack)',
    dept: 'Engineering',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '4+ Years',
    desc: 'Own end-to-end web application solutions combining elegant frontend experiences with resilient, cloud-native backend infrastructure.',
    responsibilities: [
      'Deliver end-to-end full-stack features from UI wireframe to database schema and deployment.',
      'Maintain unified TypeScript interfaces across client and server applications to eliminate runtime errors.',
      'Collaborate on cloud containerization and automated deployments using Docker and GitHub Actions.',
      'Participate in peer code reviews and architectural RFC discussions.'
    ],
    skills: ['Full-Stack TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'Prisma / TypeORM', 'Docker', 'Git']
  },
  {
    id: 4,
    title: 'Lead UI/UX Designer',
    dept: 'Design',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '3+ Years',
    desc: 'Translate complex business logic and user needs into intuitive, pixel-perfect, and conversion-focused web and mobile interfaces.',
    responsibilities: [
      'Conduct user research, customer journey mapping, and information architecture synthesis.',
      'Create high-fidelity interactive Figma prototypes with auto-layout, variables, and responsive constraints.',
      'Maintain and govern enterprise Figma design systems and tokens synchronized with frontend engineers.',
      'Perform usability testing and iterative heuristic UX audits.'
    ],
    skills: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Research', 'Information Architecture', 'Mobile UI/UX']
  },
  {
    id: 5,
    title: 'Digital Marketing & SEO Specialist',
    dept: 'Marketing',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '3+ Years',
    desc: 'Drive organic search growth, technical SEO execution, high-converting lead funnels, and data-driven marketing campaigns.',
    responsibilities: [
      'Plan and execute comprehensive technical, on-page, and off-page SEO strategies to scale organic search traffic.',
      'Analyze conversion funnels, landing page metrics, and user drop-offs using Google Analytics 4 and Hotjar.',
      'Collaborate with content creators to produce SEO-optimized guides, case studies, and comparison landing pages.',
      'Manage multi-channel paid acquisition campaigns (Google Ads, LinkedIn) with strict CAC/LTV targets.'
    ],
    skills: ['Technical SEO', 'Google Analytics 4', 'Ahrefs / SEMrush', 'Conversion Optimization (CRO)', 'Content Strategy', 'Paid Ads']
  },
  {
    id: 6,
    title: 'Technical Project Manager / Scrum Master',
    dept: 'Management',
    location: 'Remote / India',
    type: 'Full-Time',
    exp: '4+ Years',
    desc: 'Guide the product lifecycle uniting business objectives with engineering resources, design sprints, and on-time milestone delivery.',
    responsibilities: [
      'Facilitate agile Scrum ceremonies: Daily standups, sprint planning, backlog grooming, and retrospectives.',
      'Translate client requirements into clear, unambiguous user stories with well-defined acceptance criteria.',
      'Proactively identify technical blockers, risk dependencies, and resource constraints.',
      'Ensure transparent stakeholder communication, sprint progress demos, and delivery velocity.'
    ],
    skills: ['Agile / Scrum', 'Jira / Confluence', 'Sprint Planning', 'Stakeholder Management', 'Risk Mitigation', 'Technical Delivery']
  }
];

const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Management'];

const Careers = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);

  const filteredJobs = selectedDept === 'All'
    ? jobsData
    : jobsData.filter((job) => job.dept === selectedDept);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <PageTransition>
      <SEO
        title="Careers at The Digital Connect | Build What Matters, Grow With Us"
        description="Join The Digital Connect's talented team of engineers, designers, and strategists. Explore open positions in web, mobile, DevOps, and design with flexible remote culture."
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Careers</span>
        </div>

        {/* HERO SECTION */}
        <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#00A9D6]" />
              <span>We Are Hiring Talent Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#061A2E]"
            >
              Build What Matters.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                Grow With Us.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl"
            >
              We bring together strategists, designers, developers, and problem-solvers who believe great digital experiences are built through curiosity, collaboration, and high-standard engineering craft.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-cyan-400/50 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl sm:text-3xl font-heading font-black text-[#00A9D6] block">
                    {st.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY WORK WITH US / BENEFITS */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Work Culture & Perks
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                More Than a Job. A Place to Build & Thrive.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,169,214,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A9D6] group-hover:bg-[#00A9D6] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                          <Icon size={22} />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-600">
                          {benefit.highlight}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-[#061A2E] mb-3 group-hover:text-[#00A9D6] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR CULTURE */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block font-mono">
                Shared Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                How We Work & Innovate Together
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A great team is built on transparency, mutual respect, and shared craftsmanship. We cultivate an environment where talent thrives without rigid corporate barriers.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cultureValues.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-400/50 shadow-xs hover:shadow-sm transition-all duration-300"
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

        {/* CAREER GROWTH JOURNEY */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Progression Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight">
                Your Growth Journey at The Digital Connect
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-cyan-400/50 shadow-xs transition-all duration-300"
                >
                  <span className="text-2xl font-mono font-black text-[#00A9D6] block mb-2">
                    {step.step}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-[#061A2E] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS WITH INLINE EXPANSION (NO REDIRECTS) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E] leading-tight mb-2">
                Open Positions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl">
                Click any role to view detailed responsibilities and required qualifications directly on this page.
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                const count = dept === 'All' ? jobsData.length : jobsData.filter(j => j.dept === dept).length;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#061A2E] text-white shadow-sm'
                        : 'bg-white border border-slate-200/80 text-slate-600 hover:border-cyan-400/50 hover:text-[#061A2E]'
                    }`}
                  >
                    {dept} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Cards with In-Place Accordion Expansion */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-cyan-400/60 shadow-lg'
                      : 'bg-white border-slate-200/80 hover:border-cyan-400/50 shadow-xs'
                  }`}
                >
                  {/* Job Header Bar */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/70 text-[#00A9D6]">
                          {job.dept}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                          {job.type}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                          {job.exp}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 inline-flex items-center gap-1">
                          <MapPin size={12} className="text-slate-400" /> {job.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#061A2E]">
                        {job.title}
                      </h3>
                      
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl">
                        {job.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                      <span className="text-xs font-bold text-[#00A9D6] hidden sm:inline">
                        {isExpanded ? 'Hide Details' : 'View Role & Requirements'}
                      </span>
                      <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-cyan-100 text-[#00A9D6]' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded In-Place Details (No Redirects!) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-200/80 bg-[#F8FAFC] px-6 py-8 sm:px-8 space-y-6"
                      >
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#061A2E] mb-3">
                            Key Responsibilities:
                          </h4>
                          <div className="space-y-2">
                            {job.responsibilities.map((resp, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-cyan-100/80 text-[#00A9D6] flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                                </div>
                                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                  {resp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Required Skills Badges */}
                        <div>
                          <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#061A2E] mb-3">
                            Key Skills & Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-xs font-medium bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-[#061A2E] shadow-2xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* In-Place Application Note */}
                        <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                          <div className="space-y-0.5">
                            <span className="font-bold text-[#061A2E] block">Interested in this role?</span>
                            <span className="text-slate-600">Send your resume and portfolio directly to our recruitment team:</span>
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

export default Careers;
