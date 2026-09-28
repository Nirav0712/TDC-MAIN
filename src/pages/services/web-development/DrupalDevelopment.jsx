import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { DrupalVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Globe, ShieldCheck, Layers, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const DrupalDevelopment = () => {
    useSEO({
        title: "Enterprise Drupal Development Company & Services | The Digital Connect",
        description: "Scale your global web presence with enterprise Drupal development services by The Digital Connect. We architect secure, decoupled, and multilingual Drupal CMS platforms."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Enterprise Drupal CMS Architecture",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Drupal Platform",
            paragraphs: [
                "Build scalable content ecosystems capable of serving millions of monthly visits across dozens of global regions. The Digital Connect develops customized Drupal 10/11 solutions for healthcare networks, higher education institutions, government bodies, and Fortune 500 enterprises.",
                "We structure custom taxonomy systems, complex content types, and multi-site architectures governed from a single unified Drupal core."
            ]
        },
        {
            title: "Headless & Decoupled Drupal Development",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Decoupled Drupal",
            paragraphs: [
                "Combine Drupal's best-in-class content authoring and editorial workflows with blazing-fast modern frontend frameworks like Next.js, Remix, and React.",
                "We implement GraphQL and JSON:API standards to deliver omnichannel content across websites, native mobile applications, smart displays, and customer kiosks."
            ]
        },
        {
            title: "Custom Drupal Module & Theme Development",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Custom Modules",
            paragraphs: [
                "Tailor Drupal to your precise operational requirements with custom module development and bespoke Twig themes. We build custom authentication hooks, automated content syndication pipelines, and enterprise search integration with Apache Solr and Elasticsearch.",
                "All code adheres strictly to Drupal Coding Standards and is thoroughly documented for long-term scalability."
            ]
        },
        {
            title: "Drupal Migration (Drupal 7/8/9 to Drupal 10/11)",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate to Drupal 10",
            paragraphs: [
                "End-of-life legacy Drupal versions pose major security vulnerabilities and performance bottlenecks. We execute complete migrations to Drupal 10 and Drupal 11.",
                "Our migration engineers preserve all historical content, URL hierarchies, taxonomies, user roles, and SEO backlinks without operational downtime."
            ]
        }
    ];

    const processSteps = [
        { title: "Discovery & Content Modeling", desc: "Auditing content schemas, editorial workflows, role permissions, and integration endpoints." },
        { title: "Drupal Architecture & Multi-Site Setup", desc: "Configuring Drupal core, multi-domain ecosystems, Drush tooling, and Composer dependency management." },
        { title: "Module & API Engineering", desc: "Developing custom modules, JSON:API endpoints, custom entities, and third-party integrations." },
        { title: "Responsive Twig Theme Design", desc: "Building accessible, fast, and responsive UI components conforming to WCAG 2.1 AA standards." },
        { title: "Performance & Security Auditing", desc: "Varnish caching, Redis object caching, Memcached configuration, and vulnerability audits." },
        { title: "Enterprise Deployment & 24/7 SLA", desc: "Automated Acquia / Pantheon / AWS cloud CI/CD pipelines and proactive security updates." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Drupal Commerce platforms, international stores, and catalog management.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant hospital portals, clinician directories, and patient education.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Destination guides, multi-lingual booking hubs, and regional tourism portals.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "University websites, faculty research directories, and student portals.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Digital brand lookbooks, global media asset repositories, and PR centers.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "League management, stadium event ticketing, and multimedia fan hubs.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Law firm knowledgebases, multi-jurisdiction compliance hubs, and case filings.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Bank portals with strict data governance, regulatory compliance, and investor relations.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Global shipping documentation portals, freight tracking, and supplier hubs.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Commercial asset management platforms, developer portfolios, and listings.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Developer documentation hubs, API developer portals, and corporate marketing.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Global dealer portals, OEM product specifications, and parts documentation.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Specialized in high-security government, higher ed, and enterprise Drupal deployments",
        "Expertise in decoupled Headless Drupal with Next.js, Remix, and GraphQL frontends",
        "Proven migration track record moving millions of legacy records seamlessly to Drupal 10",
        "Deep integration with Apache Solr, Elasticsearch, Salesforce, and enterprise ERPs",
        "Strict compliance with WCAG 2.1 AA accessibility and enterprise data privacy rules",
        "Dedicated Acquia and Pantheon cloud certified architects overseeing your deployment"
    ];

    const technologies = ["Drupal 10", "Drupal 11", "PHP 8.3", "Twig", "Drush", "Composer", "GraphQL", "JSON:API", "Apache Solr", "Elasticsearch", "Redis", "Acquia Cloud"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Drupal Development Services"
                    title="Enterprise Drupal CMS Development & Headless Solutions"
                    description="Architect secure, high-scale, and multilingual digital platforms with Drupal. The Digital Connect engineers enterprise content ecosystems, decoupled architectures, and high-security web portals."
                    theme={theme}
                    visual={DrupalVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Content Management</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Scalable, Secure, and Flexible Digital Governance with Drupal
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Drupal is the content management system of choice for organizations that require uncompromising security, advanced editorial workflows, multilingual scalability, and intricate data governance. From global university networks to government portals and multinational corporations, Drupal offers unmatched architectural flexibility.</p>
                                <p>At The Digital Connect, our certified Drupal developers build high-availability platforms, decoupled headless CMS setups, and custom modules designed to withstand enterprise traffic demands with 99.99% uptime reliability.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Drupal Development Process"
                    eyebrow="Our Enterprise Workflow"
                    description="From content modeling and multi-site architecture to custom module coding and enterprise deployment."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Complete Drupal Engineering Capabilities
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Enterprise CMS, decoupled architectures, and migration services.</p>
                        </div>
                    </div>

                    <div className="w-full bg-white py-12 md:py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-12 lg:space-y-16">
                                {services.map((svc, i) => (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={fadeIn}
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F0F7FF]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-orange-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-orange-400 shrink-0">
                                                        {React.cloneElement(svc.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
                                                    </div>
                                                    <span className="font-semibold text-sm sm:text-base leading-snug flex-1">
                                                        {svc.cta}
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 text-white/50 group-hover/link:text-white group-hover/link:translate-x-1 transition-all shrink-0" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                {technologies && technologies.length > 0 && (
                    <SubServiceShared.Technology
                        theme={theme}
                        technologies={technologies}
                        title="Technologies We Work On"
                        eyebrow="Our Drupal Technology Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-cyan-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-colors">
                                        {React.cloneElement(ind.icon, { className: 'w-6 h-6' })}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#0A1024] mb-2">{ind.name}</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reasons to Choose Us & Key Features */}
                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Reason to Choose Us</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Choose The Digital Connect for Drupal Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Enterprise content governance engineered for scale and security:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reasons.map((reason, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-[#0A1024] font-bold">{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Form Section */}
                <section className="py-16 md:py-24 lg:py-32 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-[#0A1024] mb-3">GET A FREE QUOTE</h3>
                                <p className="text-slate-600">We will get back to you within 24 hours</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your quote request has been received. Our team will contact you shortly."); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">First Name <span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Last Name <span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Email Address <span className="text-red-500">*</span></label>
                                        <input required type="email" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Phone Number <span className="text-red-500">*</span></label>
                                        <input required type="tel" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#0A1024]">Message <span className="text-red-500">*</span></label>
                                    <textarea required rows={4} className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your project requirements..."></textarea>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
                                        Submit Request
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default DrupalDevelopment;
