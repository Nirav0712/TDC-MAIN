import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle2, Users, Shield, Clock,
  Server, Cloud, Terminal, Sparkles, Zap, Layers, Globe,
  PhoneCall, MessageSquare, ChevronDown, Award, HelpCircle, GitBranch, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const devopsSpecializations = [
  { title: "AWS Developer", path: "/hire-team/devops-developers/aws-developer", desc: "EC2, ECS, Lambda, CloudFront, Terraform, and AWS Well-Architected." },
  { title: "Azure DevOps Developer", path: "/hire-team/devops-developers/azure-devops-developer", desc: "Azure Pipelines, AKS, ARM templates, and hybrid enterprise cloud." },
  { title: "Kubernetes Developer", path: "/hire-team/devops-developers/kubernetes-developer", desc: "Container orchestration, Helm charts, service mesh, and auto-scaling." },
  { title: "Docker Developer", path: "/hire-team/devops-developers/docker-developer", desc: "Containerization, multi-stage builds, and microservices packaging." },
  { title: "CI/CD Developer", path: "/hire-team/devops-developers/cicd-developer", desc: "GitHub Actions, GitLab CI, Jenkins, and zero-downtime deployment pipelines." },
  { title: "DevSecOps Developer", path: "/hire-team/devops-developers/devsecops-developer", desc: "Automated vulnerability scanning, compliance as code, and SOC2/HIPAA." },
  { title: "Cloud Engineer", path: "/hire-team/devops-developers/cloud-engineer", desc: "Multi-cloud architecture, cost optimization, and high-availability setups." },
  { title: "Infrastructure Automation", path: "/hire-team/devops-developers/infrastructure-automation-developer", desc: "Infrastructure as Code (IaC) via Terraform, Ansible, and Pulumi." }
];

const devopsServices = [
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture & Migration",
    desc: "Seamlessly architecting, migrating, and optimizing enterprise workloads on AWS, Microsoft Azure, and Google Cloud Platform with zero downtime."
  },
  {
    icon: GitBranch,
    title: "Automated CI/CD Pipeline Engineering",
    desc: "Robust deployment pipelines via GitHub Actions, GitLab CI, and ArgoCD that automate testing, security audits, and production releases in minutes."
  },
  {
    icon: Server,
    title: "Kubernetes & Container Orchestration",
    desc: "Production-ready Kubernetes (EKS/GKE/AKS) clusters with auto-healing, horizontal pod autoscaling (HPA), and Istio service mesh."
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code (IaC)",
    desc: "Deterministic, auditable, and repeatable cloud provisioning using Terraform, Pulumi, and Ansible across staging and production."
  },
  {
    icon: Shield,
    title: "DevSecOps & Compliance Auditing",
    desc: "Embedding automated SAST/DAST security scans, container image vulnerability testing, and secret management directly into deployment pipelines."
  },
  {
    icon: Zap,
    title: "24/7 Observability & Site Reliability (SRE)",
    desc: "Full-stack observability with Prometheus, Grafana, Datadog, and OpenTelemetry ensuring sub-15 minute mean-time-to-resolution (MTTR)."
  }
];

const hiringModels = [
  {
    id: "dedicated",
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    highlight: "Most Popular",
    desc: "Dedicated senior DevOps / SRE engineer managing your cloud infrastructure, CI/CD, and 24/7 reliability.",
    points: ["Direct Slack/Git access", "Infrastructure as Code commits", "Zero overhead & full IP ownership", "Flexible monthly billing"]
  },
  {
    id: "part-time",
    title: "Part-Time Dedicated",
    hours: "80 Hours / Month",
    highlight: "Flexible",
    desc: "Ideal for ongoing infrastructure tuning, pipeline improvements, and periodic cloud architecture reviews.",
    points: ["Scheduled weekly milestones", "Direct DevOps lead access", "Transparent time logs", "Easy scale-up anytime"]
  },
  {
    id: "hourly",
    title: "Time & Material (Hourly)",
    hours: "Pay As You Scale",
    highlight: "On-Demand",
    desc: "Best for emergency production troubleshooting, cloud cost audits, and one-off migration tasks.",
    points: ["No lock-in contracts", "Weekly timesheet reports", "Rapid engineer allocation", "Pay strictly for hours worked"]
  },
  {
    id: "fixed",
    title: "Fixed Price Scope",
    hours: "Milestone-Based",
    highlight: "Turnkey",
    desc: "Perfect for well-defined cloud migrations, Kubernetes setup, and complete CI/CD automation overhauls.",
    points: ["Guaranteed delivery timeline", "Milestone-based billing", "Full infrastructure handover", "Post-launch warranty"]
  }
];

const hiringSteps = [
  { step: "01", title: "Share Cloud Needs", desc: "Outline your cloud provider, current infrastructure bottlenecks, and tool preferences." },
  { step: "02", title: "Review DevOps CVs", desc: "Within 24 hours, receive matched senior AWS, Kubernetes, or SRE profiles." },
  { step: "03", title: "Technical Interview", desc: "Conduct 1-on-1 technical interviews and cloud architecture discussions." },
  { step: "04", title: "Sign NDA & IAM Setup", desc: "Execute NDA and agreements; grant least-privilege IAM access and Slack channels." },
  { step: "05", title: "Automate & Scale", desc: "Your dedicated DevOps engineer begins automating pipelines and optimizing infrastructure." }
];

const faqs = [
  {
    q: "Which cloud platforms do your DevOps developers support?",
    a: "Our certified engineers specialize in AWS, Microsoft Azure, Google Cloud Platform (GCP), DigitalOcean, and on-premises Kubernetes environments."
  },
  {
    q: "How do your developers ensure zero-downtime deployments?",
    a: "We implement blue-green deployments, canary releases, and rolling updates with automated health checks and instant rollback triggers."
  },
  {
    q: "Can you help optimize our monthly cloud hosting bills?",
    a: "Yes! Our DevOps engineers perform thorough FinOps audits, right-sizing compute instances, utilizing spot/reserved nodes, and optimizing CDN caching to reduce cloud spend by 30-50%."
  },
  {
    q: "Do I get full ownership of Terraform scripts and pipelines?",
    a: "Yes. 100% of the Infrastructure as Code (IaC) templates, Dockerfiles, and CI/CD pipelines belong exclusively to your repository."
  },
  {
    q: "Do you sign an NDA before assessing our infrastructure?",
    a: "Yes. We strictly execute a mutual NDA to protect your architecture diagrams, credentials, and business confidentiality."
  }
];

const HireDevopsDevelopers = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <SEO
        title="Hire Dedicated DevOps Developers & Cloud Engineers | The Digital Connect"
        description="Hire certified AWS, Azure, Kubernetes, and CI/CD DevOps developers. Pre-vetted talent, strict NDA, automated pipelines, and 99.99% cloud uptime."
      />

      <div className="w-full bg-gradient-to-b from-[#F7FAFC] via-[#EEF8FC]/40 to-[#F7FAFC] min-h-screen font-sans text-slate-800 select-none">
        
        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#00A9D6] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">Hire Team</span>
          <ChevronRight size={14} />
          <span className="text-[#061A2E] font-bold">Hire DevOps Developers</span>
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
              <span>Certified Cloud & DevOps Talent</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-[#061A2E]"
            >
              Hire Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D6] via-[#087EA4] to-[#063B63]">
                DevOps Engineers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Accelerate deployment cycles, eliminate downtime, and reduce cloud costs. Hire certified AWS, Azure, Kubernetes, and CI/CD specialists who automate your delivery pipelines.
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
                <span>Hire DevOps Engineers</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919925843531"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#061A2E] font-bold text-sm border border-slate-200 shadow-xs hover:border-[#00A9D6]/40 transition-all duration-300"
              >
                <PhoneCall size={16} className="text-[#00A9D6]" />
                <span>Talk to Cloud Architect</span>
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
                <span>99.99% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Infrastructure Mesh Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#061A2E] via-[#09223A] to-[#04111E] p-7 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20 font-mono text-xs">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span>main.tf (Terraform)</span>
                <span className="text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">Apply Complete</span>
              </div>

              <div className="space-y-1.5 text-slate-300 leading-relaxed">
                <p><span className="text-purple-400">resource</span> <span className="text-cyan-300">"aws_eks_cluster"</span> "prod" &#123;</p>
                <p className="pl-4">version: <span className="text-emerald-400">"1.30"</span>,</p>
                <p className="pl-4">auto_scaling: <span className="text-cyan-300">true</span>,</p>
                <p className="pl-4">encryption: <span className="text-amber-300">"KMS_MANAGED"</span>,</p>
                <p className="pl-4">multi_az: <span className="text-purple-400">true</span></p>
                <p>&#125;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-slate-300 font-sans text-xs">
                <span>AWS & Kubernetes Certified</span>
                <span className="font-mono text-cyan-300 font-bold">● Zero Downtime</span>
              </div>
            </div>
          </div>

        </section>

        {/* 8 SPECIALIZATIONS */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Cloud & Tooling Mastery</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
                Hire DevOps Engineers by Specialization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {devopsSpecializations.map((spec, i) => (
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

        {/* DEVOPS SERVICES */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#00A9D6] uppercase tracking-widest block mb-2 font-mono">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#061A2E]">
              DevOps & Cloud Engineering Services We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((srv, idx) => {
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
                Tailored DevOps Hiring Models
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
              How to Hire DevOps Engineers in 5 Steps
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
                READY TO AUTOMATE & SCALE?
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-3 text-white">
                Hire Certified DevOps Engineers Today
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our cloud architect today. Review pre-vetted engineer profiles and automate your delivery pipelines within 48 hours.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00A9D6] to-[#087EA4] hover:from-[#18C5E8] hover:to-[#00A9D6] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(0,169,214,0.5)] transition-all duration-300"
              >
                <span>Hire DevOps Engineers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HireDevopsDevelopers;
