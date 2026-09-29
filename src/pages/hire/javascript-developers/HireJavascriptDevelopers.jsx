import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { JavascriptVisual } from '../../../components/services/subservices/visuals/VisualsJS';
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

const HireJavascriptDevelopers = () => {
    useSEO({
        title: "Hire JavaScript Developers | Dedicated Full-Stack JS Experts | The Digital Connect",
        description: "Hire vetted, dedicated JavaScript developers for full-stack web, mobile, and cloud engineering. Leverage React, Angular, Vue, Node.js, and modern TypeScript."
    });

    const theme = { accent: "text-amber-500", bg: "bg-amber-500/20", softBg: "bg-amber-50" };

    const services = [
        {
            title: "AngularJS Development Services",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Hire Full-Stack JS Developers",
            paragraphs: [
                "AngularJS is an open-source JS framework. As a Google product, it is trusted by several big organizations worldwide. It assists in augmenting web-based apps using MVC (Model-View-Controller) feature.",

                "With regular DOM and two-way data binding AngularJS works better on client sites. It helps developers in creating real-time applications effortlessly. Indeed AngularJS is a highly flexible and reliable framework for developing top-end applications like Gmail.",

                "Hire AngularJS developers from The Digital Connect to get customized and business-centric web applications with a perfect mix of user-friendly, interactive features and seamless performance. We are one of the best JavaScript development service providers who offer immense benefits to our clients and help them leverage the full potential of the AngularJS framework."
            ],
        },
        {
            title: "React JS Development Services",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
            cta: "Build High-Performance SPAs",
            paragraphs: [
                "We are a prominent team of developers having expertise in using JavaScript for web development. We use our proficiency in creating the most challenging and complex React JS development services.",

                "Our experienced team of ReactJS developers knows how to implement new technologies and bring business-driven applications to you. At The Digital Connect, we use innovative and widely used open-source app development frameworks to cater to the best products, such as dynamic web pages, Progressive Web Apps (PWAs), Single Page Applications (SPAs), and many more.",

                "As a leading ReactJS development company, we offer innovative solutions and the best performance to value your investment. With standard coding procedures, the most advanced tools, and agile development processes, we always deliver error-free and effective ReactJS products to our clients."
            ],
        },
        {
            title: "Vue JS Development Services",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Backend APIs",
            paragraphs: [
                "Vue.JS is an open-source front-end technology that assists large-scale enterprises in creating dynamic and real-time applications. This progressive JavaScript (JS) framework utilizes MVVM architecture. Core libraries of Vue.JS help you easily integrate with several other JS libraries.",

                "Vue.js development assists developers in creating high-performing and futuristic applications to empower end-users. The Digital Connect is dedicated and committed to offering cost-efficient and result-oriented Vue.js development services to create seamless user interfaces with smooth app functionality.",

                "Being famous and trusted Vue.js development company, we offer on-time and error-free delivery of products to our clients. We offer a perfect mix of innovation and techniques to give full value to your investment."
            ],
        },
        {
            title: "Express JS Development Services",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Modernize Legacy JS Codebase",
            paragraphs: [
                "ExpressJS is a server-side mobile and web app development framework. If you need a lightweight framework with a vast range of built-in features, Express.JS can be the best bet to develop robust websites.",

                "This framework’s mobile and web applications are adaptable, scalable, minimal, and simple. We have years of expertise in creating highly interactive, user-friendly and lightweight applications using ExpressJS.",

                "We skilled developers have expertise in maximizing the efficiency of your products with the advanced features of Express.JS, such as database integration, simplified multiple routing, template engines, etc. Being a renowned team of web and mobile app developers, we know how to create IoT applications, enterprise applications, data & streaming apps, etc."
            ],
        },
        {
            title: "Node JS Development Services",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Real-Time Apps",
            paragraphs: [
                "Do you want to stay ahead of your competitors by enhancing your business with real-time, fast, and secure node.js development services? We can be the best bet for your node.js development requirements.",

                "All the time, we keep our focus on delivering high-end, scalable, and feature-rich tech solutions to our clients. We have a knowledgeable team of node.js developers who know how to make your business visible and profitable in today’s competitive market.",

                "Our tech-savvy experts create innovative and result-oriented apps by using agile methodology. We also help you revamp your existing apps with modern-day app development technologies. We help you strengthen your business with high-performing real-time web applications with us."
            ],
        },
        // {
        //     title: "Dedicated JavaScript Team Augmentation",
        //     icon: <Users className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Scale Your Dev Team",
        //     paragraphs: [
        //         "Scale your in-house engineering team on-demand with pre-vetted senior JavaScript engineers matched to your specific timezone and tech stack.",
        //         "Direct communication via Slack/Teams, seamless Agile sprint integration, and full IP ownership transfer from day one."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Strategy",
            desc: "Our experts are efficient in creating bespoke websites backed by a well-structured strategy. Get a free consultation for meteor.js development now!"
        },
        {
            title: "Prototype Development",
            desc: "Our Meteor.js developers generate extremely usable prototypes with specific designs to excite user experience and workflows."
        },
        {
            title: "App Wireframe",
            desc: "Wireframes (A.K.A blueprints) represent how an app will look and function. We create a perfect wireframe for the websites."
        },
        {
            title: "Application Design",
            desc: "Our veteran designers know how to frame the perfect UI/UX of the app. We help you engage your users quickly by creating interactive and intuitive designs."
        },
        {
            title: "Application Development",
            desc: "Our app development team uses the best practices and standard coding to create the app that meets your needs. Meteor app developer to develop various side projects."
        },
        {
            title: "Testing",
            desc: "Now we start the app testing using modern tools and standard testing practices. We apply all essential test cases to make your app bug-free."
        },
        {
            title: "Deployment",
            desc: "A wide range of platforms is made available for the app’s deployment. Get in touch with us to launch your app more quickly."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "High-speed storefronts with dynamic filtering and instant checkout.", icon: <ShoppingCart /> },
        { name: "Fintech & Banking", desc: "Secure trading portals, payment gateways, and real-time ledgers.", icon: <Landmark /> },
        { name: "Healthcare & MedTech", desc: "HIPAA-compliant telemedicine platforms and patient portals.", icon: <HeartPulse /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud applications and developer toolkits.", icon: <Cloud /> },
        { name: "Logistics & Supply Chain", desc: "Live GPS fleet tracking and automated dispatch dashboards.", icon: <Navigation /> },
        { name: "Media & Streaming", desc: "Sub-second video streaming and real-time audio chat engines.", icon: <MonitorPlay /> },
        { name: "Enterprise B2B", desc: "Custom internal ERPs, CRMs, and business intelligence hubs.", icon: <Building2 /> },
        { name: "EdTech & Learning", desc: "Interactive virtual classrooms and collaborative whiteboard tools.", icon: <GraduationCap /> },
        { name: "Real Estate & PropTech", desc: "Interactive 3D floorplan visualizers and listing aggregators.", icon: <Building /> },
        { name: "Automotive & Mobility", desc: "Connected car telemetry dashboards and booking portals.", icon: <Truck /> },
        { name: "Fitness & Wellness", desc: "Real-time wearable telemetry and interactive workout trackers.", icon: <Dumbbell /> },
        { name: "LegalTech & Compliance", desc: "Secure document redaction and automated compliance workflows.", icon: <Scale /> }
    ];

    const reasons = [
        "Top 1% pre-vetted JavaScript, TypeScript, and Full-Stack technical architects",
        "Expertise across React, Angular, Vue, Node.js, Next.js, and Express.js ecosystems",
        "Strict adherence to clean code, SOLID principles, and comprehensive unit/E2E test coverage",
        "Flexible hiring models: Dedicated Monthly Retainer, Hourly T&M, or Fixed Scope",
        "Overlapping timezone coverage for USA, UK, Europe, Australia, and Global teams",
        "Zero recruitment delays with rapid developer onboarding within 48 to 72 hours",
        "100% intellectual property protection, non-disclosure agreements, and code transfer",
        "Dedicated Engineering Manager and continuous code quality oversight at no extra cost"
    ];

    const technologies = [
        "JavaScript (ESNext)", "TypeScript", "React.js", "Next.js", "Angular", "Vue.js",
        "Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "WebSockets",
        "Redis", "MongoDB", "PostgreSQL", "Docker", "AWS", "Jest & Cypress"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Hire Dedicated Developers"
                    parentRoute="/hire-team"
                    eyebrow="Top 1% JavaScript Talent"
                    title="Hire Meteor Developers for Web & Mobile Apps"
                    description="Supercharge your digital product engineering with certified, pre-vetted JavaScript developers. The Digital Connect builds scalable, resilient web applications and microservices using React, Angular, Vue, Node.js, and modern TypeScript."
                    theme={theme}
                    visual={JavascriptVisual}
                    ctaText="HIRE JS DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Full-Stack JavaScript Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Empowering Global Businesses with High-Performance JavaScript Solutions
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>JavaScript powers over 98% of the modern web, serving as the cornerstone for high-speed client interfaces, scalable serverless functions, and distributed cloud microservices. At The Digital Connect, our dedicated JavaScript developers combine deep language mastery with modern framework ecosystems to architect software that delivers uncompromising performance and scale.</p>
                                <p>Whether you require single-page applications with real-time reactivity, enterprise TypeScript architecture, cloud-native Node.js microservices, or full-cycle product engineering, our vetted JavaScript engineers seamlessly embed into your workflow to accelerate time-to-market.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our JavaScript Hiring & Delivery Lifecycle"
                    eyebrow="Agile Talent Process"
                    description="From requirement gathering to rapid onboarding and sprint delivery, our structured hiring model ensures zero friction and maximum productivity."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-amber-50 text-amber-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-amber-200">
                                Empower Your Product with Our Developers
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our JavaScript Development & Hiring Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum JavaScript expertise tailored for startups, scale-ups, and global enterprises.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFFDF5]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-amber-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-amber-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-amber-400 shrink-0">
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
                        title="JavaScript Frameworks & Tools We Master"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
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
                                <h2 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for JavaScript Talent
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine elite engineering standards with agile team flexibility to build high-ROI digital applications.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Scale Your Team with Expert JavaScript Developers?"
                    subtitle="Share your project requirements with our technical leads and receive vetted developer profiles & a custom estimate within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default HireJavascriptDevelopers;
