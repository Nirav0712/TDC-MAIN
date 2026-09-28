import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { JoomlaVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Layers, Globe, ShieldCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const JoomlaDevelopment = () => {
    useSEO({
        title: "Joomla Web Development Company & Services | The Digital Connect",
        description: "Build flexible, multilingual corporate portals and community websites with Joomla development services by The Digital Connect. Custom components, modules, and templates."
    });

    const theme = { accent: "text-amber-600", bg: "bg-amber-500/20", softBg: "bg-amber-50" };

    const services = [
        {
            title: "Custom Joomla Portal & Website Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Build Joomla Portal",
            paragraphs: [
                "Create dynamic community portals, corporate intranets, and content-rich websites with Joomla 5. The Digital Connect utilizes Joomla's native Access Control Lists (ACL) and multi-language support to develop powerful web solutions.",
                "Our Joomla architectures allow complex user permission hierarchies, member directories, and multi-tier publication workflows without bloated third-party dependencies."
            ]
        },
        {
            title: "Custom Component & Module Engineering",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Custom Extensions",
            paragraphs: [
                "When off-the-shelf extensions fall short, we build custom Joomla components, modules, and plugins from scratch. From interactive directories to custom reservation systems, we tailor the functionality to your business workflow.",
                "Every custom extension is built according to Joomla MVC standards for seamless future version upgrades and clean database management."
            ]
        },
        {
            title: "Joomla Migration & Version Upgrades",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade to Joomla 5",
            paragraphs: [
                "Upgrade your outdated Joomla 3.x or 4.x portals to the ultra-modern Joomla 5 framework. We migrate your content articles, user accounts, custom fields, and media assets with 100% data integrity.",
                "Unlock modern PHP 8.2+ compatibility, enhanced SEO metadata control, and modern caching engines for drastic speed improvements."
            ]
        },
        {
            title: "Joomla Security Hardening & Maintenance",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Secure Joomla Website",
            paragraphs: [
                "Protect your digital portal with proactive vulnerability patching, Web Application Firewall (WAF) integration, and two-factor authentication (2FA).",
                "Our ongoing support packages include automated off-site cloud backups, database indexing, core updates, and 24/7 emergency response."
            ]
        }
    ];

    const processSteps = [
        { title: "Portal Architecture & Permissions Audit", desc: "Defining user roles, access control levels (ACL), content categories, and extension requirements." },
        { title: "Joomla 5 Setup & Database Structuring", desc: "Configuring clean core installation, relational database tables, and multilingual translation routing." },
        { title: "Custom Module & Component Build", desc: "Coding custom Joomla MVC extensions, plugins, and custom field overrides." },
        { title: "Responsive Template Customization", desc: "Designing mobile-first, lightweight Joomla templates with fast Core Web Vitals scores." },
        { title: "Security Hardening & QA Audit", desc: "Implementing Two-Factor Auth, SSL enforcement, brute-force mitigation, and cross-browser testing." },
        { title: "Live Launch & Editorial Training", desc: "Zero-downtime server deployment, sitemap submission, and administrator training sessions." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "VirtueMart and HikaShop digital storefronts with multi-currency checkout.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Medical clinic portals, health wellness blogs, and patient appointment systems.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Tourism board portals, hotel reservation systems, and destination directories.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "School portals, member-only lesson repositories, and student alumni networks.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Lookbook media galleries, fashion magazine publications, and retailer portals.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Club membership portals, league schedules, and community sports forums.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Law firm knowledge hubs, client access areas, and regulatory publication portals.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Corporate investor portals, financial news publishing, and branch locators.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Vendor extranets, shipment inquiry portals, and regional depot directories.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Property directory portals, agent profiles, and neighborhood guides.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Corporate knowledgebases, community support forums, and user documentation.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Dealership portal ecosystems, product spec sheets, and warranty registries.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Mastery of Joomla 5 modern architecture, native web services, and schema tools",
        "Deep expertise in complex Access Control Lists (ACL) and multi-tier permissions",
        "Native multilingual implementation supporting 70+ languages out of the box",
        "Zero license fees — full open-source ownership of your codebase and content",
        "Rigorous security hardening eliminating common CMS vulnerabilities and spam",
        "Dedicated maintenance SLAs with daily backups and priority bug resolution"
    ];

    const technologies = ["Joomla 5", "Joomla 4", "PHP 8.3", "MySQL", "PostgreSQL", "VirtueMart", "HikaShop", "Bootstrap 5", "Docker", "Apache", "Nginx", "Redis"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Joomla Development Services"
                    title="Custom Joomla Web Development & Portal Solutions"
                    description="Build flexible, content-rich corporate portals, community websites, and multilingual platforms with Joomla. The Digital Connect engineers bespoke extensions, templates, and enterprise CMS setups."
                    theme={theme}
                    visual={JoomlaVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Versatile Content & Portal Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Modular, Multilingual, and Scalable Digital Experiences with Joomla
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Joomla bridges the sweet spot between content management simplicity and enterprise-grade structural power. With native support for multi-language translations, granular user access levels, and an extensible MVC architecture, Joomla powers millions of corporate extranets, community hubs, and publishing platforms worldwide.</p>
                                <p>At The Digital Connect, our Joomla developers build customized, responsive, and secure portals tailored to your organization's exact editorial workflows and customer engagement goals.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Joomla Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From permissions audit to custom component build, security hardening, and production launch."
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
                                Comprehensive Joomla Capabilities
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom components, portals, and migration services for global enterprises.</p>
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
                        eyebrow="Our Joomla Tech Stack"
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
                                Why Choose The Digital Connect for Joomla Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Build high-impact portals with our certified Joomla specialists:</p>
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

export default JoomlaDevelopment;
