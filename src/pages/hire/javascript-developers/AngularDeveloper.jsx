import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { AngularVisual } from '../../../components/services/subservices/visuals/VisualsJS';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Settings, Cpu, Terminal, Shield, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AngularDeveloper = () => {
    useSEO({
        title: "Hire Angular Developers | Dedicated AngularJS & Angular 17+ Experts | The Digital Connect",
        description: "Hire certified Angular developers for enterprise SPAs, complex dashboards, and high-performance TypeScript web applications. Dedicated talent with fast onboarding."
    });

    const theme = { accent: "text-red-600", bg: "bg-red-500/20", softBg: "bg-red-50" };

    const services = [
        {
            title: "Web App UI/UX Development",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Hire Angular Developers",
            paragraphs: [
                "As a leading AngularJS development company, we are devoted to providing our global clients with the finest AngularJS web App UI/UX development solutions. It sets us apart from the rest of the competition since we are tech-savvy, creative, and committed. Clients worldwide always count on us as a one-stop-shop AngularJS development company for AngularJS web development.",

                "Our AngularJS UI/UX developers have extensive knowledge of JavaScript technologies and use that expertise to make AngularJS web apps for startups, small and medium-sized businesses, and major corporations.",

                "Being the most prominent AngularJS development company, we provide services and solutions for all types of web apps. We build the most user-friendly user interfaces and user experiences for your products."
            ],
        },
        {
            title: "Real-Time Chat Apps",
            icon: <ayoutDashboard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Enterprise Dashboards",
            paragraphs: [
                "With the help of our AngularJS developers, you can build sophisticated and comprehensive chatbot apps that will seamlessly integrate into your existing project. We are a team of skilled Angular developers; we have access to the full breadth of JS technologies and the ability to accomplish a wide range of AngularJS real-time chat app projects.",

                "Being a renowned AngularJS web development company, we help you leverage the benefits of modern features and functionalities in real-time chat apps.",

                "We have years of experience creating highly interactive and intuitive chat apps to grow your business in less time and effort. With a dedicated team, The Digital Connect enhances user engagement and the ROI of your online business."
            ],
        },
        {
            title: "AngularJS Migration",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate from AngularJS",
            paragraphs: [
                "A website can’t be fruitful if it doesn’t offer a great user experience and smooth functionality to its users. Following an evaluation of your business requirements and specific demands, our AngularJS developers will sit down with you and discuss the advantages of designing an AngularJS enterprise application.",

                "Our highly skilled team of AngularJS developers is capable of migrating your web application from other technologies to AngularJS and upgrading your existing solution to the most recent version of AngularJS.",

                "Your website’s dynamic portions can be resurrected with our AngularJS migration service. As a renowned team of AngularJS developers, we perform all security checks and performance analyses to ensure it’s working."
            ],
        },
        {
            title: "Web Portal Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Build Angular PWAs",
            paragraphs: [
                "As a professional AngularJS application development company, we specialize in developing fast-loading, interactive, and scalable web portals to match your organization’s unique demands and goals.",

                "When you choose to work with our AngularJS developers, you can be certain that your business will benefit from their expertise in cutting-edge technology and industry best practices.",

                "The powerful routing capabilities of AngularJS enable our AngularJS developers to construct single-page web apps that are fast to launch, flexible, and secure, providing a remarkable user experience. We have veteran developers to create business-centric web portals for our clients."
            ],
        },
        {
            title: "eCommerce AngularJS Mobile App Development",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Micro-Frontends",
            paragraphs: [
                "Our AngularJS developers employ the AngularJS framework to design E-commerce systems that are efficient, safe, impeccable, and capable of handling enormous traffic volumes. Our mission is to assist organizations in streamlining their processes by providing high-performance, scalable, and bespoke AngularJS mobile app development solutions developed utilizing the latest AngularJS technology.",

                "Our AngularJS developers provide clients with API development services that are both high-performing and scalable, taking into account the unique business requirements of each client.",

                "Our AngularJS developers enhance your business’s capabilities. Moreover, we make highly secure and market-ready products for different industry verticals. Leverage the benefits of our eCommerce app development proficiency to get successful and reliable digital products."
            ],
        },
        // {
        //     title: "Angular Performance Optimization & Code Audits",
        //     icon: <Zap className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        //     cta: "Optimize Angular App",
        //     paragraphs: [
        //         "Accelerate slow Angular applications with OnPush change detection, lazy-loaded routing bundles, tree-shaking, and Ahead-of-Time (AOT) compilation.",
        //         "We perform comprehensive memory leak checks, bundle size reduction audits, and automated Jest/Cypress test automation."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Assessment of Requirements",
            desc: "We assess your requirements, busines goals, and expectations to create a perfect AngularJS project."
        },
        {
            title: "Wireframing & Designing",
            desc: "We create a powerful project prototype and polish the design with our innovative and creative skills."
        },
        {
            title: "Coding & Development",
            desc: "We start the development with standing coding practices and help you meet your business objectives."
        },
        {
            title: "Testing and QA",
            desc: "Being a renowned AngularJS development company, we ensure a bug-free and seamless app every time."
        },
        {
            title: "Deployment",
            desc: "We use our experience for successful project deployment and make it live for the end-users."
        },
        {
            title: "Performance Monitoring",
            desc: "Our proficient AngularJS mobile app development team monitors the app’s performance and ensures smooth functioning."
        },
        {
            title: "Post-Deployment Support",
            desc: "We never leave you alone and offer uninterrupted support & maintenance service for the proper functionality of the app."
        }
    ];
    const industries = [
        { name: "Fintech & Banking", desc: "High-security banking dashboards, audit trails, and multi-factor auth.", icon: <Landmark /> },
        { name: "Healthcare & Life Sciences", desc: "HIPAA-compliant EHR portals and patient scheduling systems.", icon: <HeartPulse /> },
        { name: "eCommerce & Retail", desc: "Dynamic storefronts with interactive catalog filters and rapid checkout.", icon: <ShoppingCart /> },
        { name: "Enterprise SaaS", desc: "Multi-tenant software architectures and scalable admin panels.", icon: <Cloud /> },
        { name: "Logistics & Fleet", desc: "Real-time route optimization dashboards and asset trackers.", icon: <Navigation /> },
        { name: "Manufacturing & ERP", desc: "Complex inventory, supply chain management, and assembly oversight.", icon: <Briefcase /> },
        { name: "Telecommunications", desc: "Self-service customer portals, plan configurators, and billing engines.", icon: <Server /> },
        { name: "EdTech & Learning", desc: "Interactive digital assessment engines and LMS administration.", icon: <GraduationCap /> },
        { name: "Real Estate & Construction", desc: "Property management workflows and CRM pipeline visualizers.", icon: <Building /> },
        { name: "Automotive & Mobility", desc: "Vehicle diagnostic monitors and dealership management platforms.", icon: <Truck /> },
        { name: "LegalTech & Compliance", desc: "Contract management workflows and compliance verification systems.", icon: <Scale /> },
        { name: "Media & Entertainment", desc: "Content delivery portals with real-time rights management.", icon: <MonitorPlay /> }
    ];

    const reasons = [
        "Certified senior Angular and TypeScript developers with 5+ years average experience",
        "Deep expertise in modern Angular Signals, Standalone Components, and RxJS pipelines",
        "Proven track record of zero-downtime AngularJS to modern Angular migrations",
        "Strict enterprise security standards including CSP, sanitization, and OAuth2/JWT auth",
        "Flexible hiring models: Dedicated Monthly Team, Part-Time Staffing, or T&M",
        "Comprehensive unit, integration, and E2E test coverage with Jest, Jasmine, and Cypress",
        "Timezone-aligned communication and direct Slack/Teams collaboration with your leads",
        "Complete code ownership, strict NDA agreements, and transparent sprint velocity"
    ];

    const technologies = [
        "Angular 17+", "AngularJS", "TypeScript", "RxJS", "NgRx", "Signals",
        "Angular Material", "Tailwind CSS", "Module Federation", "Node.js", "GraphQL",
        "REST APIs", "Jest", "Cypress", "Docker", "AWS", "GitHub Actions"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="JavaScript Developers"
                    parentRoute="/hire-team/javascript-developers"
                    eyebrow="Enterprise Angular Engineering"
                    title="Hire Dedicated Angular Developers & Technical Architects"
                    description="Build scalable, type-safe enterprise web applications with certified Angular developers. The Digital Connect delivers high-performance SPAs, modular dashboards, and seamless AngularJS migrations designed for mission-critical operations."
                    theme={theme}
                    visual={AngularVisual}
                    ctaText="HIRE ANGULAR DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Front-End Excellence</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Architecting Robust, Maintainable Angular Applications for High-Growth Enterprises
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Angular is Google's battle-tested framework built specifically for enterprise-grade scalability, rock-solid TypeScript integration, and structured modular architecture. At The Digital Connect, our dedicated Angular engineers leverage the full spectrum of Angular capabilities—from RxJS reactive state streams to high-speed Standalone Components—to build software that powers complex enterprise operations.</p>
                                <p>Whether you require a mission-critical financial dashboard, a complex SaaS workflow tool, an incremental migration from AngularJS, or on-demand team augmentation, our certified Angular experts integrate seamlessly into your engineering team to deliver clean, maintainable, and high-velocity code.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Angular Development & Hiring Lifecycle"
                    eyebrow="Agile Angular Delivery"
                    description="From technical architecture review to sprint delivery and continuous QA, our structured process ensures rapid velocity and robust software."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-red-50 text-red-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-red-200">
                                Empower Your Architecture with Angular
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Angular Development & Staffing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our comprehensive Angular engineering capabilities tailored for enterprise web applications.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFF8F8]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-red-600 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-red-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-red-400 shrink-0">
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
                        title="Angular Frameworks, Tools & Libraries"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
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

                {/* Reasons to Choose Us */}
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Angular Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine enterprise software engineering rigor with rapid delivery to build resilient Angular web products.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="text-slate-700 font-medium text-sm leading-relaxed">{r}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Scale Your Product with Certified Angular Developers?"
                    subtitle="Share your application roadmap with our technical architects and receive senior Angular profiles & a tailored proposal within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default AngularDeveloper;
