import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { NodejsVisual } from '../../../components/services/subservices/visuals/VisualsJS';
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

const NodejsDeveloper = () => {
    useSEO({
        title: "Hire Node.js Developers | Dedicated Node Backend & Cloud Engineers | The Digital Connect",
        description: "Hire certified Node.js developers for real-time backends, microservices, cloud-native APIs, and high-concurrency systems. Fast hiring with full code ownership."
    });

    const theme = { accent: "text-emerald-600", bg: "bg-emerald-500/20", softBg: "bg-emerald-50" };

    const services = [
        {
            title: "API Integration & Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Hire Node.js Developers",
            paragraphs: [
                "Microservice architectures (including SOA and APIs) are a collective set of loosely integrated services allowing several rugged business capabilities. Regardless of their size and domain, several businesses can efficiently utilize Node js. Moreover, developing complex applications, quick delivery, and microservices help efficiently grow an organization’s tech stack.",

                "We are here to assist you with our superior Node.js development services and enable you to achieve success with high-performing Node.js apps. The team at The Digital Connect maintains complete transparency during the app development process.",

                "Our expert developers are well-versed in creating the best web and mobile apps per your business requirements and goals. You can trust us for high-quality and error-free digital solutions. We understand your requirements carefully and create dedicated APIs for your project. We identify your issues and develop a superior solution for your business needs."
            ],
        },
        {
            title: "Realtime App Development",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Node Microservices",
            paragraphs: [
                "Over the last decade, the demand for real-time apps has significantly increased. Being a renowned Node.js development company, our expert team offers real-time messaging & chat app development services across different platforms. We are committed to delivering feature-rich applications to help you increase your business reach.",

                "Additionally, we have extensive experience in VoIP technology to deliver modern and high-quality IT solutions. We create a real-time dashboard as a perfect performance tool that you can use to analyze and track your company’s data in real-time and create a report using interactive and visual dashboards that make your data more authentic and readable.",

                "The real-time chat apps we deliver ensure rich functionality and efficient communication flow. Node.js enables developers to create real-time applications such as gaming apps, chatting apps, etc. The best power of Node.js development comes with using WebSocket protocols that create two-way communications between the client and server."
            ],
        },
        {
            title: "Node.JS Consultant",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Real-Time Node Apps",
            paragraphs: [
                "Developing mobile or web apps is not an easy process. We understand your project’s scope and will turn it into a successful application. Using the agile development approach, we ensure a smooth product development run. Our clients trust us for cost-effective and reliable app development solutions.",

                "Being a renowned Node.js development company, our client hires us repeatedly and recommends others to engage in our digital solutions. As a professional Node.js consultant, we have served several industries with technical expertise and standard coding practices.",

                "You can leverage the benefits of our analytical and dedicated web and mobile app development solutions. We are dedicated to creating full-stack, real-time, large-scale, and desktop applications. Hire our Node.js developers for innovative, fast, secure, scalable, and pragmatic web applications for your business domain."
            ],
        },
        {
            title: "Maintenance, Support & Migration",
            icon: <Cloud className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Deploy Serverless Node.js",
            paragraphs: [
                "Maintenance and support are vital for any product’s consistent performance and functioning, and we understand it very well. That’s why we always serve regular support to our customers. The Digital Connect committed Node.js developers to fix issues and resolve all errors, if any, randomly.",

                "Using our maintenance service, you can live stress-free from the app’s functionality so you can focus on your core business activities. We are always available for our clients throughout the app development process. Our expert maintenance and support team will help you identify and fix all complicated maintenance problems.",

                "We update our knowledge with modern technology trends and solutions related to your issues. Our proficient team is adaptable to the new software solution; we re-engineer it and make it suitable for your business needs. We assure you that your system performance will never go down."
            ],
        },
        {
            title: "Custom NodeJS Development",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build Node.js API Gateways",
            paragraphs: [
                "Comprehensive and robust online representation is essential for businesses in today’s highly competitive market. As the top Node.js development company, we create responsive and custom Node.js web apps tailored to your business goals and expectations. Our extensive experience empowers us to offer futuristic and robust custom software development services to grow your business in less time.",

                "Our expert team analyzes your requirements and creates a perfect custom Node.js solution. We apply the most advanced technologies to help you grow your ROI and increase customers’ attention to your business.",

                "The Digital Connect has a successful track record of delivering high-end and sophisticated Node.js applications. We can serve different business domains using our huge expertise and bespoke services. Businesses can leverage the full potential of Node.js like modern technologies, and we assure to offer 100% satisfactory services."
            ],
        },
        // {
        //     title: "Performance Optimization & Legacy Migration",
        //     icon: <RefreshCw className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Optimize Node.js Workloads",
        //     paragraphs: [
        //         "Diagnose and resolve event-loop blocking issues, memory leaks, and slow database queries with APM profilers (Clinic.js, Datadog).",
        //         "We seamlessly migrate legacy Java, .NET, or PHP backends to performant TypeScript/Node.js with zero data loss or downtime."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Analysis",
            desc: "Our expert Node.js developers collect your requirements and analyze your business objects."
        },
        {
            title: "Planning & Strategy",
            desc: "Being a renowned Node.js development company, we create a strategic plan and clear the path for product design."
        },
        {
            title: "Prototype Development",
            desc: "We create perfect prototypes to help you know the flow & look and feel of the app."
        },
        {
            title: "App Designing",
            desc: "As a leading Node.js consultant, we are committed to creating intuitive UI/UX designs and making your product more interactive."
        },
        {
            title: "App Development",
            desc: "We start the app development phase and create a unique product for your business using the proven development process."
        },
        {
            title: "Testing & QA",
            desc: "Now we start the testing process. We ensure the app is bug-free and high-performing by using several test cases."
        },
        {
            title: "Go to Market",
            desc: "We utilize our extensive experience to make your app market-ready and launch it with a quick deployment process."
        }
    ];

    const industries = [
        { name: "Fintech & Banking", desc: "High-speed algorithmic trading, payment processors, and fraud detection engines.", icon: <Landmark /> },
        { name: "eCommerce & Retail", desc: "Flash sale checkout systems, inventory sync queues, and cart engines.", icon: <ShoppingCart /> },
        { name: "Healthcare & Telehealth", desc: "HIPAA-compliant video consult signaling and encrypted clinical records.", icon: <HeartPulse /> },
        { name: "SaaS & Cloud Software", desc: "Multi-tenant tenant isolation, background job queues, and webhooks.", icon: <Cloud /> },
        { name: "Logistics & Fleet Ops", desc: "Real-time GPS telematics ingestion, geo-fencing, and driver routing.", icon: <Navigation /> },
        { name: "Streaming & Gaming", desc: "Multiplayer game state synchronization and live streaming metadata.", icon: <MonitorPlay /> },
        { name: "IoT & Smart Devices", desc: "High-frequency MQTT telemetry ingestion, device commands, and edge gateways.", icon: <Cpu /> },
        { name: "On-Demand Delivery", desc: "Live geolocation tracking, automated order dispatch, and notification hubs.", icon: <Truck /> },
        { name: "EdTech & Learning", desc: "Real-time collaborative classrooms, student analytics, and quiz scoring.", icon: <GraduationCap /> },
        { name: "Enterprise B2B", desc: "Custom ERP data sync pipelines, automated reporting, and CRM gateways.", icon: <Building2 /> },
        { name: "Real Estate & PropTech", desc: "Automated listing syndication, valuation calculators, and mortgage tools.", icon: <Building /> },
        { name: "LegalTech & Security", desc: "Document processing pipelines, digital signatures, and audit trails.", icon: <Scale /> }
    ];

    const reasons = [
        "Certified senior Node.js and TypeScript architects with 5+ years average experience",
        "Deep mastery of V8 memory management, event loop profiling, and cluster threading",
        "Proven expertise in NestJS, Fastify, Express, and cloud-native serverless stacks",
        "Strict enterprise security standards including OWASP Top 10, sanitization, and rate-limiting",
        "Flexible hiring models: Dedicated Monthly Retainer, Staff Augmentation, or T&M",
        "Comprehensive automated test coverage with Jest, Supertest, and k6 load testing",
        "Overlapping timezone availability for USA, UK, Europe, Australia, and Global teams",
        "100% intellectual property ownership, strict NDAs, and transparent sprint reporting"
    ];

    const technologies = [
        "Node.js (v20+)", "TypeScript", "NestJS", "Fastify", "Express.js", "GraphQL / REST",
        "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "Docker",
        "Kubernetes", "AWS Lambda", "Prisma ORM", "Jest", "k6 Load Testing"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="JavaScript Developers"
                    parentRoute="/hire-team/javascript-developers"
                    eyebrow="High-Concurrency Backend Engineering"
                    title="Custom & Reliable Node JS Development Services"
                    description="Build lightning-fast, event-driven web applications and scalable microservices with certified Node.js developers. The Digital Connect engineers high-throughput cloud backends engineered to process millions of concurrent transactions with sub-second latency."
                    theme={theme}
                    visual={NodejsVisual}
                    ctaText="HIRE NODE.JS DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Node.js Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Architecting Resilient, High-Throughput Node.js Backends for Global Scale
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Node.js powers modern digital backends by combining Google's ultra-fast V8 JavaScript engine with a non-blocking, event-driven I/O model. This architecture makes Node.js the premier choice for data-intensive real-time applications, microservices, and distributed cloud computing where high concurrency and low latency are non-negotiable.</p>
                                <p>At The Digital Connect, our dedicated Node.js engineers specialize in architecting production-grade REST & GraphQL APIs, distributed microservice meshes, event-driven streaming pipelines, and serverless architectures. Whether augmenting an existing product team or building from the ground up, our experts deliver maintainable, tested, and secure backend solutions.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Node.js Development & Hiring Lifecycle"
                    eyebrow="Agile Backend Process"
                    description="From architecture design to containerized deployment and load testing, our structured workflow ensures scalable, resilient backends."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-emerald-50 text-emerald-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-emerald-200">
                                Empower Your Backend with Node.js
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Node.js Development & Staffing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum Node.js backend engineering tailored for high-scale enterprise applications.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F4FBF7]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-emerald-600 mt-4 mb-6"></div>
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
                        title="Node.js Frameworks, Cloud & Databases"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
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
                                <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Node.js Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine deep V8 performance engineering with enterprise cloud security to build unstoppable backends.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Scale Your Backend with Expert Node.js Developers?"
                    subtitle="Share your architecture goals with our engineering leads and receive pre-vetted Node.js profiles & a technical proposal within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default NodejsDeveloper;
