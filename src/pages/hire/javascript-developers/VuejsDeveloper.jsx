import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { VuejsVisual } from '../../../components/services/subservices/visuals/VisualsJS';
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

const VuejsDeveloper = () => {
    useSEO({
        title: "Hire Vue.js Developers | Dedicated Vue 3 & Nuxt.js Engineers | The Digital Connect",
        description: "Hire certified Vue.js developers for progressive SPAs, Nuxt.js SSR applications, and high-performance frontend interfaces. Flexible hiring and rapid onboarding."
    });

    const theme = { accent: "text-emerald-500", bg: "bg-emerald-500/20", softBg: "bg-emerald-50" };

    const services = [
        {
            title: "Real-Time Application Development",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Hire Vue.js Developers",
            paragraphs: [
                "Our experienced and skilled vue.js developers are capable of building the best-performing real-time applications based on vue.js. In the modern-day, vue.js is gaining popularity among the JavaScript community. It is known for its easy-to-use features and simplicity to the greatest extent. Vue.js is a powerful and extensive framework for achieving more attributes in coding.",

                "Our developers ensure you of bringing you real-time application development. We make real-time building applications quite reliable and easy. We are the fastest growing vue.js development company, offering you the best services with unique attributes. We create high-performing and feature-rich web applications suitable for large and small enterprises.",

                "It helps to easily succeed in the IT market using the online presence. Our team ensures to provide high-end security measures that include the secure admin panel, data encryption, and many more. We bring you the best scalability of the application and incrementally adaptable framework."
            ],
        },
        {
            title: "Single Page Application Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build Nuxt.js Web Apps",
            paragraphs: [
                "Vue.js is the best mainstream front-end development technology offering an ultimately proven solution. These ensure improvement in response time along with significant performance levels. We are the leading vue.js development company providing you with proven solutions on vue.js for all the front-end development.",

                "Our team is well versed in full-stack JavaScript development technologies for building unique and excellent user interfaces and applications. When looking for scalable and excellent vue.js app development, The Digital Connect provides you with the ideal option for creating robust and intuitive front-end apps.",

                "We are well versed in providing complete Single Page application development for all sectors, including e-commerce stores, financial software, healthcare apps, travel & tourism apps, and many more. The Non-Disclosure Agreement legally binds our projects. Being stellar in vue.js app development, we offer the ultimate services for various industries."
            ],
        },
        {
            title: "Web App Development",
            icon: <LayoutDashboard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Vue Dashboards",
            paragraphs: [
                "We provide you with the best customized vue.js solution for ensuring complete visible scalability based on the client’s requirements. Our apps are created even without compromising the quality. You can hire vue.js developers to get the third-party integrations of vue.js for web development. We are a trustworthy technology partner who took on many challenges in creating a product that meets all the strict security standards.",

                "Our team would be providing the best user experience. We design and release the first version of the web app development phase within the first three months. We assure you of a successful premiere with its platform in the market. The professional vue.js development team has years of experience making consumer-centric and user-oriented web solutions.",

                "At The Digital Connect, we have the best experience to build you the ultimate digital products in all the markets. These automatically help maximize the ROI based on the developed solution. The front-end development team is specialized in creating intuitive user interfaces."
            ],
        },
        {
            title: "Modernization & Migration",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate to Vue 3",
            paragraphs: [
                "At The Digital Connect, you can quickly level up your business by making the application well optimized and responsive. We are ready to help you easily migrate your existing application to vue.js. Our team is professional in delivering the best results on time. We would ensure that high-quality codes are maintained.",

                "Our clients will get updates on progress, and it is helpful to achieve business goals and market needs extensively. Industry-standard codes are readable as well as understandable. You have the best option of migrating to the vue.js framework from the existing application.",

                "These enhance the app’s performance by making it fully optimized and responsive. These also extensively keep pace with the latest UI/UX trends, and our skilled team improves their skills constantly in the vue.js development. Whether you want to build vue.js development for your B2B or B2C app, vue.js consulting is the best option."
            ],
        },
        {
            title: "Vue.JS Support & Maintenance Services",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Build Headless Vue Storefronts",
            paragraphs: [
                "Besides developing vue.js development services, our team provides 24\\*7 complete support and maintenance. Our post-development support and maintenance are helpful for you to save time. Our service is available with the most affordable pricing making our clients happy. We provide professional support and maintenance for vue.js and online ticket resolution.",

                "Whether you have any queries or issues, we are ready to provide you with full support even without any hassle. Vue.js is a component-based approach to building web apps that includes single-file components. These are enabled to provide you with better code reuse and rapid developments. Vue is a versatile framework as compared to others.",

                "It performs better and is known for its lightweight and fast features. We can do it for you with zero downtime effort and minimal connectivity disruption. When you want to migrate from the old framework to full-stack vue.js development, contact us to get the best professional service with 100% support guaranteed."
            ],
        },
        // {
        //     title: "Vue.js Performance Audits & Code Refactoring",
        //     icon: <Zap className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Optimize Vue App Speed",
        //     paragraphs: [
        //         "Accelerate slow Vue applications with Vite HMR optimization, tree-shaking, lazy-loaded route chunking, and memory leak profiling.",
        //         "We perform comprehensive component audits, streamline reactive watchers, and integrate automated Vitest and Cypress test suites."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "We make comprehensive analyses to reap better outcomes. In addition, our team works closely with you to understand your project requirements."
        },
        {
            title: "ui/ux Designing",
            desc: "Our user-centric approach for vue.js development gives you a better option to employ the latest UI/UX design trends. In addition, our team is well versed in creating a beautiful and user-friendly interface for the app."
        },
        {
            title: "Prototype",
            desc: "Let the right technology solutions enable the successful launch of your app. We extensively build trust among investors by acquiring customers."
        },
        {
            title: "Product Development",
            desc: "Our team works to deliver the best vue.js app development solution that perfectly fits your business requirements. Introduce new features quickly in line with your client's needs with a component-based approach."
        },
        {
            title: "Quality Testing",
            desc: "Our vue.js app development team is well supported and provides you with a comprehensive guide and APIs."
        },
        {
            title: "Product Deployment",
            desc: "Our main priority is providing you with the best result within the specified time. The timely delivery of the project makes us unique."
        },
        {
            title: "Support & Maintenance",
            desc: "You can easily request a quote for any security issue or bug in the developed software. Our expert team will get back to you within 24 business hours."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Sub-second product catalogs, headless storefronts, and instant checkout.", icon: <ShoppingCart /> },
        { name: "Fintech & WealthTech", desc: "Real-time investment dashboards, telemetry tickers, and secure auth.", icon: <Landmark /> },
        { name: "Healthcare & MedTech", desc: "Patient management portals, telehealth booking, and secure medical records.", icon: <HeartPulse /> },
        { name: "SaaS & Cloud Apps", desc: "Multi-tenant user administration, interactive analytics, and billing hubs.", icon: <Cloud /> },
        { name: "Logistics & Fleet", desc: "Live mapping, automated dispatch grids, and shipment status trackers.", icon: <Navigation /> },
        { name: "Media & Publishing", desc: "High-speed digital magazines, content curation feeds, and video players.", icon: <MonitorPlay /> },
        { name: "EdTech & E-Learning", desc: "Interactive student courseware, virtual classrooms, and test scoring.", icon: <GraduationCap /> },
        { name: "Real Estate & PropTech", desc: "Interactive property visualizers, dynamic mortgage tools, and map search.", icon: <Building /> },
        { name: "Automotive & Mobility", desc: "Vehicle configurators, dynamic finance calculators, and booking flows.", icon: <Truck /> },
        { name: "Enterprise B2B", desc: "Internal workflow automation tools, customized CRMs, and ERP interfaces.", icon: <Building2 /> },
        { name: "Fitness & Wellness", desc: "Activity tracking dashboards, workout planner visualizers, and goals.", icon: <Dumbbell /> },
        { name: "LegalTech & Compliance", desc: "Contract generation workflows, document redacting, and audit logging.", icon: <Scale /> }
    ];

    const reasons = [
        "Certified senior Vue.js and Nuxt.js developers with 5+ years average enterprise experience",
        "Deep mastery of Vue 3 Composition API, <script setup>, Pinia, and TypeScript",
        "Seamless Vue 2 to Vue 3 migration with zero business downtime and reduced bundle sizes",
        "Proven expertise in Nuxt 3 SSR for sub-second page loads and superior SEO scores",
        "Flexible engagement models: Dedicated Monthly Team, Staff Augmentation, or T&M",
        "100% automated test coverage with Vitest, Vue Test Utils, and Cypress",
        "Timezone-aligned communication and direct daily collaboration in Slack/Teams",
        "Complete code ownership, strict NDA agreements, and transparent sprint reporting"
    ];

    const technologies = [
        "Vue.js 3", "Nuxt.js 3", "TypeScript", "Pinia", "Vuex", "Composition API",
        "Vite", "Tailwind CSS", "Vuetify", "GraphQL", "REST APIs", "Node.js",
        "Vitest", "Cypress", "Docker", "AWS", "Vercel"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="JavaScript Developers"
                    parentRoute="/hire-team/javascript-developers"
                    eyebrow="Lightweight Reactive Engineering"
                    title="Renowned Vue.JS Development Company"
                    description="Build ultra-fast, intuitive web applications and progressive SPAs with certified Vue.js developers. The Digital Connect engineers high-performance interfaces and Nuxt.js SSR platforms with clean Composition API architecture and minimal runtime overhead."
                    theme={theme}
                    visual={VuejsVisual}
                    ctaText="HIRE VUE.JS DEVELOPERS"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-emerald-500 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Vue.js Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Crafting High-Speed, Elegant Vue.js Interfaces for Modern Enterprises
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Vue.js is celebrated for its progressive design, gentle learning curve, and ultra-fast reactive engine powered by ES6 Proxies. With Vue 3 and Nuxt.js, Vue provides enterprise applications with unmatched developer velocity, lightweight bundle sizes (under 20KB gzipped core), and seamless server-side rendering performance.</p>
                                <p>At The Digital Connect, our certified Vue.js developers engineer high-performance single-page applications, complex administrative portals, headless eCommerce frontends, and Nuxt.js SSR products. Whether you need to augment your frontend team or build a new digital product from scratch, our engineers deliver maintainable, type-safe code tailored to your roadmap.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Vue.js Development & Hiring Lifecycle"
                    eyebrow="Agile Vue Delivery"
                    description="From architecture discovery to component development and continuous QA, our structured process ensures maximum speed and code elegance."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-emerald-50 text-emerald-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-emerald-200">
                                Empower Your Frontend with Vue.js
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Vue.js Development & Staffing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum Vue.js and Nuxt.js engineering capabilities tailored for high-growth digital businesses.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F2FAF6]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-emerald-500 mt-4 mb-6"></div>
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
                        title="Vue Frameworks, Tooling & State Managers"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-emerald-500 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
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
                                <h2 className="text-emerald-500 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Vue.js Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine lightweight reactivity engineering with enterprise Vue 3 architecture to build fast, beautiful web apps.</p>
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
                    title="Ready to Build High-Speed Vue.js Applications?"
                    subtitle="Share your frontend specifications with our Vue architects and receive senior developer profiles & a custom estimate within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default VuejsDeveloper;
