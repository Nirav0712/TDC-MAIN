import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Briefcase, MapPin, Sparkles, CheckCircle2, ChevronDown,
  Mail, ArrowRight, Filter, Search, Award, Clock
} from 'lucide-react';
import SEO from '../../components/seo/SEO';
import PageTransition from '../../components/common/PageTransition';

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

const OpenPositions = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);

  const filteredJobs = jobsData.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.dept === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <PageTransition>
      <SEO
        title="Open Positions | Careers at The Digital Connect"
        description="Explore open engineering, design, and marketing roles at The Digital Connect. Join a world-class remote-first team building scalable digital solutions."
      />

      <div className="w-full bg-[#FBFDFE] min-h-screen font-sans text-slate-800">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/careers" className="hover:text-[#00A9D6] transition-colors">Careers</Link>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Open Positions</span>
        </div>

        {/* HERO SECTION */}
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A9D6] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00A9D6]" />
              <span>Explore Active Openings</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#061A2E]">
              Current Open Roles at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                The Digital Connect
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
              Find your next career milestone. We offer full remote flexibility, competitive compensation, continuous learning stipends, and an ambitious team of peers.
            </p>
          </div>
        </section>

        {/* FILTER & SEARCH BAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by role or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#00A9D6] transition-colors"
              />
            </div>

            {/* Department Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
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
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-cyan-400/50 hover:text-[#061A2E]'
                    }`}
                  >
                    {dept} ({count})
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* JOB LISTINGS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-xl font-heading font-bold text-[#061A2E] mb-1">No Openings Match Your Query</h3>
              <p className="text-slate-500 text-sm mb-4">Try clearing your search filter or check back soon.</p>
              <button
                onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                className="px-5 py-2.5 bg-[#00A9D6] text-white font-bold text-xs rounded-xl hover:bg-[#063B63] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
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
                          {isExpanded ? 'Hide Details' : 'View Requirements'}
                        </span>
                        <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-cyan-100 text-[#00A9D6]' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
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

                          {/* Required Skills */}
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

                          {/* Application Guidance */}
                          <div className="p-5 rounded-2xl bg-cyan-50/80 border border-cyan-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
                            <div className="space-y-0.5">
                              <span className="font-bold text-[#061A2E] block">Interested in applying?</span>
                              <span className="text-slate-600">Send your resume, portfolio links, and expected CTC directly to:</span>
                            </div>
                            <a
                              href="mailto:info@thedigitalconnect.in"
                              className="inline-flex items-center gap-2 font-mono font-bold text-[#00A9D6] hover:text-[#063B63] bg-white px-4 py-2.5 rounded-xl border border-cyan-200/80 shadow-2xs transition-colors"
                            >
                              <Mail size={15} />
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
          )}
        </section>

      </div>
    </PageTransition>
  );
};

export default OpenPositions;
