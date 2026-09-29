import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ReactVisual } from '../../../components/services/subservices/visuals/VisualsJS';
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

const ReactDeveloper = () => {
    useSEO({
        title: "Hire React.js Developers | Dedicated React & Next.js Engineers | The Digital Connect",
        description: "Hire certified React.js developers for dynamic SPAs, Next.js web applications, complex dashboards, and React Native mobile apps. Rapid onboarding with vetted engineers."
    });

    const theme = { accent: "text-cyan-500", bg: "bg-cyan-500/20", softBg: "bg-cyan-50" };

    const services = [
        {
            title: "Custom React.js Web & SPA Development",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Hire React Developers",
            paragraphs: [
                "Indeed, getting digital change in your business makes it dynamic and competitive. A digital presence is also necessary to sustain today’s highly competitive market. We have extensive expertise in developing high-performing and result-oriented ReactJS web and mobile apps.",

                "We are a one-stop solution for all your web and mobile app development needs. We have become the first choice of numerous businesses seeking efficient and dedicated digital solutions with a strong flair for developing custom web apps. We help you achieve your goals with our efficiency and agility.",

                "As a leading ReactJS developer, we ensure a superior user experience and interactive user interfaces in the apps we create. Our mission is to bring highly efficient and reliable futuristic apps to your business. The Digital Connect is a top-rated web app development company that assists businesses in capturing customers’ attention effortlessly."
            ],
        },
        {
            title: "ReactJS Support & Maintenance Services",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build Next.js Web Apps",
            paragraphs: [
                "Are you concerned about the issues of post-development or post-project delivery? Don’t be. We are just a call away from resolving all your issues with our outstanding support and maintenance services to all our clients.",

                "At The Digital Connect, we are committed to offering assured development support during and after the project delivery. Our responsive team of ReactJS developers has long experience creating innovative and business-centric apps with the latest functionalities and features.",

                "Our support team offers 24\\*7 support for the smooth and uninterrupted functionality of the app. You can rely on us for flawless time management, project collaboration, communication, and a strong developer background. A strong support team will always care for your digital presence with ReactJS solutions."
            ],
        },
        {
            title: "Custom React JS Development Services",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
            cta: "Build React Native Apps",
            paragraphs: [
                "The increasing popularity of web apps has proven the importance of having a digital presence. Web apps make your business accessible anytime, anywhere. It is the right time for businesses to leverage the unmatched advantages of the ReactJS framework.",

                "Hiring a ReactJS Consulting firm is the best key for businesses seeking growth and enhanced ROI. Here we help you get the best-in-class and highly functional custom web apps for your business. Brands worldwide prefer our web app development services as we always maintain the quality and theme of the technology.",

                "With ReactJS, we provide robust and reliable apps. We have strong expertise in creating engaging web and dedicated apps for businesses. Our capable team creates a perfectly suitable app with unmatched functionalities and interactive UI designs. We offer the best digital solutions for your unique app development needs."
            ],
        },
        {
            title: "ReactJS Migration Services",
            icon: <LayoutDashboard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build React Dashboards",
            paragraphs: [
                "Are you seeking to migrate your existing project to the modern ReactJS platform? Migrating to new technologies and framework is one of the vital aspects of improving your business growth. ReactJS migration is one of the widely used frameworks today.",

                "It is gaining popularity due to its flexibility, scalability, and performance. Businesses looking to migrate their mobile and web apps to this framework need an expert ReactJS partner; The Digital Connect is the best bet. Our professional team analyzes your existing web platform, current business requirements, and challenges to frame a full-fledged migration strategy.",

                "With our perfect ReactJS migration services, we help you increase your conversion and sales. We migrate your existing platform to a fast, feature-rich, robust framework with a team of veteran developers. This modern tech framework enables us to create a well-designed, interactive UI with the best features."
            ],
        },
        {
            title: "ReactJS Plugin Development Services",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize React Performance",
            paragraphs: [
                "From time to time, businesses need to enhance their web app’s functionality to scale up with the competitive needs of the market. Here plugins play a vital role in getting you the desired functionalities effortlessly. The functionalities of the ReactJS-based app can extend by creating custom plugins.",

                "Moreover, you can also integrate existing plugins to fulfill your project needs. If you seek a ReactJS development company for custom plugin development services, we are here to assist you with our in-depth skills and robust knowledge.",

                "Our extensive expertise in creating custom plugins helps us to fulfill the specific requirements of our client’s businesses. We render and add better features to your business applications with seasoned ReactJS developers. Don’t worry about plugin development to integration; our ReactJS developer can help you with all web app services."
            ],
        },
        // {
        //     title: "Legacy Frontend Migration to Modern React",
        //     icon: <RefreshCw className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Migrate to React.js",
        //     paragraphs: [
        //         "Upgrade legacy jQuery, Angular 1.x, or monolithic template engines to a modern, maintainable React and TypeScript ecosystem.",
        //         "Our structured micro-frontend strategy enables phased migration without halting active feature development or risking business continuity."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Analysis",
            desc: "Our veteran team analyzes your requirements, business goals, users’ expectations, end project vision."
        },
        {
            title: "Planning & Strategy",
            desc: "Our professional ReactJS app developers plan perfectly according to your project requirements and create an optimal strategy for development."
        },
        {
            title: "Product Design",
            desc: "We keep your requirements in mind and create unique UI/UX designs. Leverage the benefits of creative UI/UX designs and make your product interactive."
        },
        {
            title: "Product Development",
            desc: "Our dedicated and knowledgable developers use agile processes and modern coding practices to create unique apps."
        },
        {
            title: "Testing & QA",
            desc: "As a renowned ReactJS development company, we follow a unique QA & testing approach to ensure the project's quality and flow."
        },
        {
            title: "Product Perfecting",
            desc: "We perform repetitive checks to ensure that the app we deliver to you meets your expectations and fulfils business need."
        },
        {
            title: "Project Delivery",
            desc: "Develop and launch your applications with no time delays. Our ReactJS developer offers a speedy deployment process."
        }
    ];

    const industries = [
        { name: "eCommerce & D2C Brands", desc: "Sub-second product catalog browsing, dynamic carts, and instant checkout.", icon: <ShoppingCart /> },
        { name: "Fintech & Trading Platforms", desc: "Real-time market tickers, dynamic financial charts, and secure auth.", icon: <Landmark /> },
        { name: "Healthcare & Telehealth", desc: "HIPAA-compliant interactive patient portals and booking calendars.", icon: <HeartPulse /> },
        { name: "SaaS & Cloud Applications", desc: "Multi-tenant user management, settings hubs, and billing portals.", icon: <Cloud /> },
        { name: "Media & Streaming", desc: "Fluid video playback experiences, interactive playlists, and social feeds.", icon: <MonitorPlay /> },
        { name: "Logistics & Supply Chain", desc: "Live mapping, automated fleet schedules, and dispatch dashboards.", icon: <Navigation /> },
        { name: "EdTech & E-Learning", desc: "Interactive course players, live whiteboard collaboration, and quizzes.", icon: <GraduationCap /> },
        { name: "Real Estate & PropTech", desc: "Interactive floor plans, virtual tours, and map-based listing search.", icon: <Building /> },
        { name: "Automotive & Mobility", desc: "Vehicle configurators, dynamic finance calculators, and booking flows.", icon: <Truck /> },
        { name: "Fitness & Lifestyle", desc: "Gamified workout trackers, telemetry graphs, and community hubs.", icon: <Dumbbell /> },
        { name: "LegalTech & Enterprise", desc: "Document collaboration suites, audit viewers, and signature flows.", icon: <Scale /> },
        { name: "Social & Community", desc: "Real-time chat feeds, notification bells, and rich content editors.", icon: <MessageSquare /> }
    ];

    const reasons = [
        "Certified React.js and Next.js developers with 5+ years average enterprise experience",
        "Deep mastery of React 18+ concurrency, Server Components, Hooks, and TypeScript",
        "Proven expertise in Next.js App Router for sub-second page loads and superior SEO",
        "State management mastery: Redux Toolkit, Zustand, Recoil, TanStack React Query",
        "Flexible hiring models: Dedicated Monthly Team, Staff Augmentation, or T&M",
        "100% test coverage with Jest, React Testing Library, Cypress, and Playwright",
        "Overlapping timezone coverage for USA, UK, Europe, Australia, and Global teams",
        "Complete code ownership, strict NDA agreements, and transparent sprint reporting"
    ];

    const technologies = [
        "React 18+", "Next.js 14", "TypeScript", "React Native", "Redux Toolkit",
        "Zustand", "TanStack Query", "Tailwind CSS", "Framer Motion", "GraphQL",
        "REST APIs", "Node.js", "Jest", "Playwright", "Storybook", "Vercel & AWS"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="JavaScript Developers"
                    parentRoute="/hire-team/javascript-developers"
                    eyebrow="Modern Component-Driven Engineering"
                    title="A Reliable React JS Development Company"
                    description="Build ultra-fast, interactive web applications and mobile apps with certified React.js developers. The Digital Connect creates high-converting SPAs, Next.js portals, and enterprise dashboards with pixel-perfect precision and scalable architecture."
                    theme={theme}
                    visual={ReactVisual}
                    ctaText="HIRE REACT DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Front-End Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Crafting High-Speed, Conversion-Optimized React.js Web Experiences
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>React.js dominates modern frontend development through its declarative component model, lightning-fast Virtual DOM diffing engine, and vibrant open-source ecosystem. When paired with Next.js Server Components and modern TypeScript, React delivers unmatched user experiences, instantaneous page transitions, and top-tier search engine visibility.</p>
                                <p>At The Digital Connect, our dedicated React.js developers engineer high-performance single-page applications, complex SaaS analytics portals, headless eCommerce storefronts, and cross-platform React Native apps. We integrate seamlessly into your Agile sprints to accelerate feature releases while enforcing strict code quality standards.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our React.js Development & Hiring Lifecycle"
                    eyebrow="Agile React Delivery"
                    description="From architecture discovery to component development and continuous QA, our structured process ensures maximum speed and code elegance."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-cyan-50 text-cyan-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-cyan-200">
                                Empower Your Frontend with React.js
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our React.js Development & Staffing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum React and Next.js engineering capabilities tailored for high-growth digital businesses.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F2FCFD]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-cyan-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-cyan-400 shrink-0">
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
                        title="React Frameworks, State Managers & Tools"
                        eyebrow="Our Tech Stack"
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

                {/* Reasons to Choose Us */}
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for React Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine pixel-perfect design translation with enterprise React architecture to build market-leading web applications.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build Next-Gen React Applications?"
                    subtitle="Share your frontend roadmap with our React architects and receive senior developer profiles & a tailored technical estimate within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default ReactDeveloper;
