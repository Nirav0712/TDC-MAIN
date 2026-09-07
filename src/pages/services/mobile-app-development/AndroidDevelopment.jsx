import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Smartphone,
    PenTool,
    LineChart,
    Gamepad2,
    Settings2,
    Building2,
    HeartPulse,
    Landmark,
    GraduationCap,
    ShoppingCart,
    Truck,
    MonitorPlay,
    Briefcase,
    Code2,
    CreditCard,
    Banknote,
    Repeat,
    Bug,
    Layout,
    Globe2,
    Send,
    Loader2,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AndroidVisual } from '../../../components/services/subservices/visuals/VisualsMobile';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Dummy image placeholders to represent standard assets
const Images = {
    hero: "https://images.unsplash.com/photo-1607252654015-f85df1fac051?auto=format&fit=crop&q=80&w=1200",
    agile: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    customApp: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
    uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
};

export default function AndroidDevelopment() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const services = [
        {
            title: "Custom Android App Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
            paragraphs: [
                "Every business is unique. We build custom Android applications from scratch tailored strictly to your specific enterprise requirements, ensuring scalable architecture, robust performance, and a perfect product-market fit."
            ],
            cta: "Get Custom App Solution"
        },
        {
            title: "Android UI/UX Designing",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
            paragraphs: [
                "We design intuitive, stunning user experiences adhering strictly to Google's Material Design principles. Our interfaces guarantee maximum user retention, fluid animations, and absolute ease of navigation."
            ],
            cta: "Design Your App"
        },
        {
            title: "Android App Consulting",
            icon: <LineChart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
            paragraphs: [
                "Not sure where to begin? Our consultants analyze your business strategy, recommend the optimal tech stack, outline monetization strategies, and craft a meticulous product roadmap to ensure a highly successful deployment."
            ],
            cta: "Consult our Experts"
        },
        {
            title: "Android Game App Testing",
            icon: <Gamepad2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            paragraphs: [
                "We rigorously test Android games across thousands of device matrices, ensuring flawless frame rates, zero memory leaks, and perfect interactive responses, providing gamers an unmatched playing experience."
            ],
            cta: "Test Application"
        },
        {
            title: "Android App Support & Maintenance",
            icon: <Settings2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
            paragraphs: [
                "Post-launch reliability is critical. We provide 24/7 dedicated monitoring, rapid bug fixes, OS update compatibility, and continuous feature enhancements to guarantee your app never experiences costly downtime."
            ],
            cta: "Get Maintenance Support"
        }
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-900 overflow-x-hidden">
            <Helmet>
                <title>Android App Development Company | The Digital Connect</title>
                <meta name="description" content="Most Trusted Android App Development Agency offering custom Android app development services, UI/UX design, consulting, and support." />
                <link rel="canonical" href="/services/mobile-app-development/android-development" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F5FAFD]">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full blur-[100px] lg:blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 bg-cyan-100/50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col pt-12 lg:pt-6">

                    {/* Breadcrumbs */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }} className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold mb-6 md:mb-10 text-slate-500">
                        <Link to="/" className="hover:text-cyan-600 transition-colors shrink-0">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <Link to="/services" className="hover:text-cyan-600 transition-colors shrink-0">Services</Link>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <Link to="/services/mobile-app-development" className="hover:text-cyan-600 transition-colors shrink-0 whitespace-nowrap">Mobile App Development</Link>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-cyan-600 font-bold shrink-0">Android App Development</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col space-y-6">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center space-x-2 border border-cyan-200 bg-white shadow-sm rounded-full px-4 py-1.5 w-max">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                                <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">ANDROID APP DEVELOPMENT</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1024] leading-[1.15]">
                                Most Trusted Android App <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Development Agency</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                We are a top-tier Android app development company recognized universally for crafting custom, high-performance, and feature-packed Android applications. Our skilled developers utilize the latest technologies to bring your innovative concepts to life on the world's most popular mobile platform.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="pt-4 flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-cyan-600 rounded-full hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                    <span className="relative z-10 flex items-center">
                                        GET FREE QUOTE NOW
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full h-full flex items-center justify-center">
                            <AndroidVisual />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AGILE DEVELOPMENT PROCESS */}
            <section className="py-20 lg:py-32 bg-white overflow-hidden" id="process">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Agile Development Process</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">Enhance Your Project with Risk Free Development Process</h3>
                        <p className="mt-4 text-slate-600">
                            We employ a standard agile methodology ensuring complete transparency, regular milestones, and rapid iteration, keeping you fully in control of your project's lifecycle from conception to launch.
                        </p>
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative">
                        {/* Horizontal Line for Desktop */}
                        <div className="hidden lg:block absolute top-[120px] left-0 w-full h-1 bg-slate-100"></div>
                        {/* Vertical Line for Mobile */}
                        <div className="lg:hidden absolute top-0 left-[28px] md:left-[44px] h-full w-1 bg-slate-100"></div>

                        <motion.div
                            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0"
                        >
                            {[
                                { num: "01", title: "Ideation", icon: <Globe2 /> },
                                { num: "02", title: "Planning", icon: <Building2 /> },
                                { num: "03", title: "Android App Design", icon: <PenTool /> },
                                { num: "04", title: "Android App Development", icon: <Code2 /> },
                                { num: "05", title: "Testing", icon: <Bug /> },
                                { num: "06", title: "App Deployment", icon: <Send /> },
                                { num: "07", title: "Support & Maintenance", icon: <Settings2 /> }
                            ].map((step, idx) => (
                                <motion.div key={idx} variants={fadeIn} className="relative flex lg:flex-col items-center lg:w-48 group">
                                    {/* Step Number Bubble (Mobile: Left side, Desktop: Top) */}
                                    <div className="z-10 bg-white border-4 border-slate-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:border-cyan-100 transition-colors duration-300 flex-shrink-0 lg:mb-8 text-cyan-600 font-black text-xl lg:w-20 lg:h-20 lg:text-2xl shrink-0">
                                        {step.num}
                                    </div>

                                    {/* Mobile Connector (Optional detail for connection mapping) */}
                                    <div className="hidden lg:block absolute top-[40px] left-[50%] w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100 z-0"></div>

                                    {/* Content */}
                                    <div className="ml-6 lg:ml-0 text-left lg:text-center">
                                        <div className="text-[#0A1024] p-3 rounded-lg bg-slate-50 inline-block mb-3 lg:mb-4 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                            {step.icon}
                                        </div>
                                        <h4 className="font-bold text-[#0A1024] text-lg lg:text-xl lg:max-w-xs">{step.title}</h4>
                                        <p className="mt-2 text-sm text-slate-500 lg:hidden">
                                            Executing phase {step.num} effectively guaranteeing high standard delivery for {step.title.toLowerCase()}.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ANDROID DEVELOPMENT SERVICES */}
            <section className="py-20 lg:py-32 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Our Android App Development Services</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024]">Empower Your Business with Our Services</h3>
                        <p className="mt-4 text-slate-600">
                            We offer end-to-end Android capabilities, translating your vision into incredibly robust, heavily tested applications perfectly tailored for the Android ecosystem.
                        </p>
                    </div>
                    <div className="space-y-12 lg:space-y-24">
                        {services.map((svc, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-center py-4`}>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="w-16 h-16 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-2xl flex items-center justify-center">
                                        {svc.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-bold text-[#0A1024]">{svc.title}</h4>
                                        <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-cyan-500 rounded-full mt-4 mb-6"></div>
                                    </div>
                                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                        {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                    </div>
                                    <div className="pt-4">
                                        <Link to="/contact" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link text-lg">
                                            {svc.cta}
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, x: i % 2 !== 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="w-full lg:w-1/2 relative group"
                                >
                                    <div className="absolute -inset-4 bg-cyan-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
                                    <div className="relative w-full bg-slate-100 border border-slate-100 rounded-[18px] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                        <img src={svc.imgUrl} alt={svc.title} className="w-full h-auto object-cover block" />
                                    </div>
                                </motion.div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Industries</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">Custom IT Solutions for Varied Verticals</h3>
                        <p className="mt-4 text-slate-600">
                            We leverage our extensive Android expertise across multiple global industries, delivering precision-engineered platforms tailored to the distinct operational realities of your vertical.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Real Estate", icon: <Building2 />, desc: "Property portals & broker dashboards." },
                            { name: "Healthcare", icon: <HeartPulse />, desc: "Telemedicine & patient management." },
                            { name: "Finance", icon: <Landmark />, desc: "Fintech, trading & banking apps." },
                            { name: "Education", icon: <GraduationCap />, desc: "E-learning & LMS solutions." },
                            { name: "E-Commerce", icon: <ShoppingCart />, desc: "B2B/B2C marketplace applications." },
                            { name: "Logistics", icon: <Truck />, desc: "Fleet tracking & supply chain." },
                            { name: "Entertainment", icon: <MonitorPlay />, desc: "Streaming & media platforms." },
                            { name: "Enterprise", icon: <Briefcase />, desc: "Internal workflow & SaaS mobile." }
                        ].map((industry, i) => (
                            <motion.div
                                key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-cyan-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                            >
                                <div className="w-12 h-12 bg-white border border-slate-200 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-colors">
                                    {React.cloneElement(industry.icon, { className: 'w-6 h-6' })}
                                </div>
                                <h5 className="font-bold text-[#0A1024] text-lg mb-2">{industry.name}</h5>
                                <p className="text-sm text-slate-500 mb-4 flex-grow">{industry.desc}</p>
                                <div className="mt-auto flex justify-end">
                                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-cyan-500 group-hover:-rotate-45 transition-all" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="py-16 md:py-24 lg:py-32 bg-[#F5FAFD] relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:flex lg:justify-between lg:items-end mb-12 lg:mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Reason to Choose US</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight">
                                Hire Dedicated Developers to Passionately <br className="hidden md:block" /> Lead Your Business Vision to Reality
                            </h3>
                        </div>
                        <div className="mt-6 lg:mt-0 pt-4 border-t border-slate-200 lg:border-t-0 lg:border-l lg:pl-10">
                            <p className="text-slate-600 max-w-sm">
                                Key Features that distinctly separate us from standard development shops. We prioritize code excellence and business outcomes.
                            </p>
                        </div>
                    </div>

                    {/* Mixed Editorial Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Featured Box */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2 bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-cyan-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <Code2 className="w-48 h-48 text-cyan-600" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-cyan-100 shadow-sm mb-6">
                                    <Code2 className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h4 className="text-2xl font-bold text-[#0A1024] mb-4">Latest programming languages knowledge</h4>
                                <p className="text-slate-600 text-lg max-w-md">
                                    We stay on the bleeding edge of the ecosystem. Our teams flawlessly execute Kotlin, Java, and modern Jetpack libraries, guaranteeing you receive an industry-leading, future-proofed application architecture.
                                </p>
                            </div>
                        </motion.div>

                        {/* Standard Boxes */}
                        {[
                            { title: "Easy payment options", icon: <CreditCard />, desc: "Flexible engagement and billing models suitable for varying budgets." },
                            { title: "Competitive prices for app development", icon: <Banknote />, desc: "Top-tier quality development services without inflated enterprise costs." },
                            { title: "Agile app development methodology", icon: <Repeat />, desc: "Rapid iterations protecting your ROI through continuous functional delivery." },
                            { title: "Knowledge in testing and debugging", icon: <Bug />, desc: "Strict QA protocols hunting down memory leaks and UI malfunctions." },
                            { title: "Cross-platform and native app solutions", icon: <Smartphone />, desc: "Advising and executing the perfect architectural paradigm." },
                            { title: "Experience in creating rich user interface", icon: <Layout />, desc: "Flawless UX/UI perfectly mapped to human-centered design principles." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                                className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 hover:border-cyan-200 hover:shadow-lg transition-all flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center mb-6">
                                    {React.cloneElement(feature.icon, { className: 'w-6 h-6' })}
                                </div>
                                <h4 className="text-xl font-bold text-[#0A1024] mb-3">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}

                        {/* Final Highlight Box */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                                <Send className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#0A1024] mb-2">Proficient in deploying Android apps</h4>
                                <p className="text-slate-600 text-sm">Navigating Google Play Console guidelines perfectly to guarantee quick, seamless approvals and store rollouts.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* GET A FREE QUOTE FORM SECTION */}
            <section className="py-16 md:py-24 lg:py-32 bg-[#F5FAFD] relative" id="quote">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-slate-200">

                        {/* Left Info Side */}
                        <div className="bg-cyan-50 lg:w-2/5 p-8 lg:p-16 flex flex-col justify-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0A1024]">Ready to Build Your Android App?</h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    Fill out the form to request a free quote. Our technical experts will get back to you within 24 hours to discuss your app idea.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "100% Confidential Consultation",
                                        "Signed NDA for Protection",
                                        "Detailed Cost Breakdown",
                                        "Technical Feasibility Check"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-center text-slate-700 font-medium">
                                            <CheckCircle2 className="w-6 h-6 text-cyan-600 mr-3 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Form Side */}
                        <div className="lg:w-3/5 p-8 lg:p-16">
                            <h3 className="text-2xl font-bold text-[#0A1024] mb-8">GET A FREE QUOTE</h3>

                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted smoothly!"); }}>
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

                                <button type="submit" className="w-full py-4 mt-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group">
                                    Submit Request
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
