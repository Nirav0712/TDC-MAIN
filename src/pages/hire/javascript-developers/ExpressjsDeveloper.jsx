import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ExpressjsVisual } from '../../../components/services/subservices/visuals/VisualsJS';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Settings, Cpu, Terminal, Shield, RefreshCw, KeyRound
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ExpressjsDeveloper = () => {
    useSEO({
        title: "Hire Express.js Developers | Dedicated Node & Express API Architects | The Digital Connect",
        description: "Hire vetted Express.js developers for robust RESTful APIs, high-throughput microservices, and secure backend architectures. Flexible engagement and fast onboarding."
    });

    const theme = { accent: "text-slate-800", bg: "bg-slate-500/20", softBg: "bg-slate-100" };

    const services = [
        {
            title: "Web Application Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Hire Express API Developers",
            paragraphs: [
                "Express.JS is the fastest JavaScript framework especially suitable for start-ups and large-scale enterprises. Express.JS is a part of a large-scale web applications interface. At The Digital Connect, our Express.JS developers have experience handling all the projects. You can hire Express.JS developers to get the feature-rich web solution. Our exemplary track record in the medium and large-scale web applications interface makes our team unique.",

                "Express.JS is the fastest JavaScript framework suitable for every business. We have experience in handling every project with timely delivery. Our Express.JS developers have served clients from varied industries and domains. We are well-versed in designing innovative and exclusive web applications with advanced technologies.",

                "Utilizing Express.js lets our developers create a web server and render HTML pages. These are perfect for various HTTP requests. Developing apps using Express.JS improves user experience as it maintains a persistent connection from the browser without the need to refresh pages."
            ],
        },
        {
            title: "Express.JS API Development",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Express Microservices",
            paragraphs: [
                "Express.JS is a unique & excellent Node framework specially designed to help developers create servers quickly. Hire our skilled Express.JS API expert to get a faster app experience. Our Express.JS experts provide access to performance-centric solutions with the HTTP utility. We integrate cutting-edge technology with the best unique Express.JS development requirement.",

                "Our Express.JS development services assure ease of robust API development. Our API generator application provides the right platforms that integrate with third-party applications without hassle. These would meet the business goal and needs by making a significant online presence suitable for the brand. We use a popular API development framework to achieve the best result.",

                "Being a renowned web development company, we use HTTPS requests for making the representational state transfer. Our Express.JS development team has hands-on experience creating advanced back-end interactive Express.JS solutions—impeccable development of the RESTFUL technology assured with assisting in transferring data."
            ],
        },
        {
            title: "Express.JS Migration Services",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Build Secure Auth Pipelines",
            paragraphs: [
                "Our Express.JS Migration solution provides you with a smooth switch from the existing platform to Express.JS. Our transition process takes care of detail to eliminate data hampering connectivity issues even from the zero downtime effort. Developing web apps using Express.JS improves user experience by maintaining a persistent connection from the browser to the server.",

                "We are the leading Express.JS development company that leverages innovative and updated technology for seamless integration and migration. Whether you are looking to migrate from your existing platform to Express.JS, we assure you that we will provide you with a smooth transition. You can experience the interactive and feature-rich Express.JS solution upon migration.",

                "Our extensive experience ensures in providing you with a safe migration phase. We are one of the early adopters of Express.JS development, and we use it to build real-time and scalable applications. Our Express.JS migration services address customer requirements by leveraging the impressive ecosystem. We help you to migrate your application seamlessly using the advanced framework."
            ],
        },
        {
            title: "Express.JS Consultation & Custom Development",
            icon: <Database className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Database Connectivity",
            paragraphs: [
                "Are you confused about using the right JavaScript technology for your project? At The Digital Connect, our Express.JS Developers would process clearing the dilemmas with building the scalable Express.JS project. Our Express.JS development company is renowned as the top-rated and dedicated to utilizing Express.JS. Consult our team to get flexible hiring models using Express.JS that suit your requirements.",

                "We are a well-acclaimed company having years of expertise in developing world-class applications using Express.JS. Our robust analytics engines with advanced technology assure saving you more time in making your dream come actual project. Our team utilizes the Express.JS framework and focuses on ensuring ease of user interaction with better insights.",

                "We are ready to help you achieve the maximum potential of technology to help you to grow your business quickly. We have certified Express.JS developers providing you with a broader range of hiring options, including a full-time, part-time or hourly basis. Avail of our cost-effective services for Express.JS web development."
            ],
        },
        {
            title: "Express.JS Support & Maintenance Services",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Real-Time Backends",
            paragraphs: [
                "The Digital Connect offers support and maintenance services that easily connect with post-development support. Our dedicated customer support team assures no effort in serving the customers. Support & maintenance is the essential part of growth. We support our customers 24×7. Our team is committed to helping fix issues and all the maintenance requirements.",

                "We are ready to assist you with a complete Express.JS solution. We are always available to customers throughout all phases of the project. Our team offers professional assistance and maintenance in all areas of project development. We follow standard project development strategies by conducting code reviews, updating technology stacks, and following trending development styles.",

                "Our Express.JS development team takes the best stance in providing complete assistance and maintenance of the application. You can extensively get reliable and accessible support with complete maintenance facilities. We are ready to cover all maintenance and support problems."
            ],
        },
        // {
        //     title: "Backend Modernization & Serverless Migration",
        //     icon: <RefreshCw className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Modernize Express Workloads",
        //     paragraphs: [
        //         "Convert legacy backend systems or refactor existing Express apps into AWS Lambda or Google Cloud Run serverless micro-functions.",
        //         "Reduce operational infrastructure overhead and improve response times while maintaining complete code clarity."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "Our team listens to client’s requirements and business goals. We make proper business analyses and test the project idea and assign suitable trending technologies and frameworks."
        },
        {
            title: "UI/UX Designing",
            desc: "Our UI/UX designing team shows you what attracts your users and brings you the success of your solution. Our innovative approach is the best way to cut development expenses by extensively improving your ROI."
        },
        {
            title: "Prototype",
            desc: "We are experts in developing lightweight and robust Express.JS solutions. Our specialized Express.JS Development team creates the back-end solutions with a prototype model."
        },
        {
            title: "Product Development",
            desc: "The Digital Connect is a top Express.JS development company specializing in user experience design and cutting-edge technologies for API development."
        },
        {
            title: "Quality Testing",
            desc: "Our developed project goes through continuous testing. Developers ensure that the code is clean, free of bugs, and effective."
        },
        {
            title: "Support & Maintenance",
            desc: "In time, all the Software grows updated, and project ideas could change. We provide you with constant support & maintenance for fixing technical errors and updating your web apps post-deployment."
        }
    ];

    const industries = [
        { name: "Fintech & Payments", desc: "High-security transaction processing, PCI-DSS compliance, and banking APIs.", icon: <Landmark /> },
        { name: "eCommerce & Marketplaces", desc: "Multi-vendor inventory sync, payment gateway integration, and order engines.", icon: <ShoppingCart /> },
        { name: "Healthcare & HIPAA", desc: "Encrypted patient data pipelines, FHIR APIs, and secure telemetry.", icon: <HeartPulse /> },
        { name: "SaaS & Cloud Software", desc: "Multi-tenant authentication, webhook dispatchers, and usage metering.", icon: <Cloud /> },
        { name: "Logistics & Transport", desc: "Real-time dispatch APIs, telematics ingestion, and routing algorithms.", icon: <Navigation /> },
        { name: "Media & Streaming", desc: "High-concurrency video metadata indexing and secure token authorization.", icon: <MonitorPlay /> },
        { name: "On-Demand Delivery", desc: "Real-time driver location updates, order dispatching, and automated alerts.", icon: <Truck /> },
        { name: "EdTech & LMS", desc: "Grading pipelines, video stream token authorization, and student records.", icon: <GraduationCap /> },
        { name: "Enterprise B2B", desc: "Custom CRM/ERP backend integrations, ETL data pipelines, and analytics.", icon: <Building2 /> },
        { name: "PropTech & Real Estate", desc: "Multiple Listing Service (MLS) ingestion pipelines and contract data.", icon: <Building /> },
        { name: "Cybersecurity & Identity", desc: "OAuth2/OIDC servers, RBAC access control gates, and audit logging.", icon: <ShieldCheck /> },
        { name: "IoT & Smart Devices", desc: "High-frequency MQTT/HTTP sensor telemetry aggregation and processing.", icon: <Cpu /> }
    ];

    const reasons = [
        "Certified senior Express.js and Node.js backend architects with 5+ years experience",
        "Deep mastery of non-blocking asynchronous event-loop patterns and cluster scalability",
        "Strict adherence to OWASP top 10 backend security guidelines and API rate-limiting",
        "Proven expertise in microservices decomposition, message queues, and distributed caching",
        "Flexible hiring models: Dedicated Monthly Retainer, Staff Augmentation, or T&M",
        "100% automated test coverage with Jest, Supertest, and Mocha/Chai",
        "Direct communication across your time zones with daily standups and sprint reviews",
        "Full intellectual property transfer, NDA security, and enterprise code documentation"
    ];

    const technologies = [
        "Express.js", "Node.js", "TypeScript", "RESTful APIs", "GraphQL", "Socket.io",
        "PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Docker", "Kubernetes",
        "AWS Lambda", "RabbitMQ", "Kafka", "JWT / OAuth2", "Jest & Supertest"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="JavaScript Developers"
                    parentRoute="/hire-team/javascript-developers"
                    eyebrow="High-Throughput Backend Architecture"
                    title="Hire Dedicated Express.js Developers & Backend Architects"
                    description="Build ultra-fast, scalable, and secure RESTful APIs and microservices with vetted Express.js developers. The Digital Connect engineers enterprise backends capable of handling massive concurrency with optimal throughput."
                    theme={theme}
                    visual={ExpressjsVisual}
                    ctaText="HIRE EXPRESS.JS DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-slate-800 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Backend Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering High-Speed, Resilient Express.js Backend Infrastructure
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Express.js is the de-facto standard framework for building modern Node.js web applications and high-performance microservices. Its minimalist, unopinionated architecture allows developers to craft fast, lightweight, and highly extensible backend solutions with maximum architectural freedom.</p>
                                <p>At The Digital Connect, our dedicated Express.js engineers specialize in architecting production-grade REST and GraphQL APIs, real-time event-driven systems, custom authentication middleware, and robust database layers designed to power millions of transactions per day without performance degradation.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Express.js Backend Delivery Lifecycle"
                    eyebrow="Agile Backend Process"
                    description="From API contract design to load testing and production deployment, our structured workflow ensures scalable, secure backends."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-slate-100 text-slate-800 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-slate-300">
                                Empower Your Infrastructure with Express.js
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Express.js Development & Staffing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum Express.js backend engineering tailored for high-scale enterprise applications.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-slate-50`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-slate-800 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <TopicCard svc={svc} index={i} />
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
                        title="Backend Technologies & Database Connectors"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-slate-800 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-slate-100 group-hover:text-slate-800 group-hover:border-slate-300 transition-colors">
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
                                <h2 className="text-slate-800 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Express.js Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We engineer fault-tolerant, high-concurrency API backends built to scale with your enterprise growth.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Architect High-Performance Express.js Backends?"
                    subtitle="Share your API specifications with our backend architects and receive verified developer profiles & an architectural estimate within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default ExpressjsDeveloper;
