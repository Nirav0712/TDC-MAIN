import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { CrossPlatformVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building2, Building, PenTool, Smartphone, MonitorPlay, MessageSquare, Briefcase, RefreshCw, Zap, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CrossPlatformUIMockup = ({ Icon }) => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-8 bg-slate-50 relative overflow-hidden group">
        <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>

        <div className="relative flex items-end justify-center w-full h-full pt-12 pb-4 transform group-hover:scale-105 transition-transform duration-700">
            {/* Desktop Mockup */}
            <div className="absolute top-8 lg:top-4 w-[90%] max-w-[280px] aspect-[16/10] bg-white rounded-xl shadow-2xl border-4 border-slate-200 flex flex-col overflow-hidden">
                <div className="h-5 bg-slate-100 flex items-center px-3 gap-1.5 border-b border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-slate-50 flex p-3 gap-3">
                    <div className="w-1/4 h-full bg-slate-200 rounded-md"></div>
                    <div className="flex-1 flex flex-col gap-2"><div className="h-4 bg-slate-800 rounded w-1/3"></div><div className="flex-1 bg-slate-200 rounded-md"></div></div>
                </div>
            </div>

            {/* Tablet Mockup */}
            <div className="relative -left-8 -bottom-2 w-[140px] aspect-[3/4] bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-[5px] border-slate-200 flex flex-col overflow-hidden transform group-hover:-translate-x-2 transition-transform duration-700">
                <div className="flex-1 bg-slate-50 p-3 space-y-3">
                    <div className="w-full h-4 bg-slate-800 rounded"></div>
                    <div className="w-full h-16 bg-purple-100 rounded-lg"></div>
                    <div className="w-full h-12 bg-slate-200 rounded-lg"></div>
                </div>
            </div>

            {/* Mobile Mockup */}
            <div className="relative -right-8 bottom-0 w-[100px] aspect-[9/16] bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] border-[4px] border-slate-800 flex flex-col overflow-hidden z-10 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700">
                <div className="flex-1 bg-slate-50 flex flex-col items-center justify-center p-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                        <Icon className="text-purple-600" size={18} />
                    </div>
                    <div className="w-3/4 h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-1/2 h-2 bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
);

const CrossPlatformApps = () => {
    useSEO({
        title: "High-Performance Cross-Platform App Development | The Digital Connect",
        description: "Build powerful applications for multiple platforms with a unified development approach. Reduce development time and scale products efficiently."
    });
    const theme = { "accent": "text-[#A855F7]", "bg": "bg-[#A855F7]/10", "softBg": "bg-[#A855F7]/5" };

    const services = [
        {
            title: "Custom Cross-Platform App Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Build fully customized cross-platform mobile apps using a unified codebase, ensuring faster deployment without sacrificing native-like performance."
            ],
            cta: "Get Custom App Solution"
        },
        {
            title: "Cross-Platform UI/UX Design",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Design interfaces that feel inherently native across every device, prioritizing fluid interactions, clean layouts, and consistent user journeys."
            ],
            cta: "Design Your App"
        },
        {
            title: "Application Migration",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Upgrade your legacy applications directly into modern cross-platform frameworks, optimizing performance and establishing a highly scalable unified architecture."
            ],
            cta: "Migrate Applications"
        },
        {
            title: "Cross-Platform Consulting",
            icon: <MessageSquare className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Analyze your business objectives and receive expert guidance on framework selection, feasibility, and product launch roadmaps bridging multiple markets."
            ],
            cta: "Consult our Experts"
        },
        {
            title: "API & Third-Party Integration",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Flawlessly integrate backend microservices, robust third-party APIs, and native hardware features maintaining complete system security and rapid syncing."
            ],
            cta: "Integrate APIs"
        },
        {
            title: "Testing & Quality Assurance",
            icon: <CheckCircle2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Execute rigorous automated and manual test strategies verifying consistent stability and pixel-perfection across dozens of Android and iOS devices."
            ],
            cta: "Test Application"
        },
        {
            title: "Support & Maintenance",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Provide continuous post-launch optimization, OS update compliance, and security patching guaranteeing maximum app vitals 24/7."
            ],
            cta: "Get Maintenance Support"
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Blending technology to bring seamless experience into education", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
        { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
        { name: "Legal Industry", desc: "New generation websites and apps for modern law firms", icon: <Scale /> },
        { name: "Blockchain & Crypto", desc: "Perfect apps for blockchain & crypto industry vertical", icon: <Bitcoin /> },
        { name: "Finance", desc: "Trustworthy & next-gen mobile solutions for finance organizations", icon: <Landmark /> },
        { name: "Home Interior & Exterior", desc: "Rapidly develop a fully-functional home decor storefront", icon: <Paintbrush /> },
        { name: "Real Estate", desc: "Intelligent digital solutions for the real estate industry", icon: <Building2 /> },
        { name: "Hotel Industry", desc: "Smoothen your hotel processes with our digital solution", icon: <Building /> }
    ];

    const reasons = [
        "Cross-platform application expertise",
        "Modern Multi-Platform development practices",
        "Responsive UI/UX development across screens",
        "Scalable cross-device architecture",
        "Cost-effective unified development runtimes",
        "Complex API & third-party integrations",
        "Testing and performance optimization",
        "Continuous support & centralized maintenance"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="CROSS-PLATFORM APP DEVELOPMENT"
                    title="High-Performance Cross-Platform App Development"
                    description="Build powerful applications for multiple platforms with a unified development approach. Our cross-platform solutions help businesses reduce development time, maintain consistent experiences and scale products efficiently."
                    theme={theme}
                    visual={CrossPlatformVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center lg:text-left">
                            <h2 className="text-[#A855F7] font-bold uppercase tracking-wider text-sm mb-3">EMPOWER YOUR BUSINESS WITH OUR SERVICES</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024] mb-8">
                                High-Performance Cross-Platform App Development
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Build powerful applications for multiple platforms with a unified development approach. Our cross-platform solutions help businesses reduce development time, maintain consistent experiences and scale products efficiently without sacrificing robust native functionality.</p>
                                <p>We combine modern cross-platform framework capabilities, intuitive UI/UX design, robust architecture and detailed quality assurance to deliver responsive applications that feel natively built across any operating system concurrently.</p>
                                <p>Whether establishing a new startup or upgrading legacy enterprise systems, our unified solutions help accelerate global product launches, lower development overhead, and maintain massive consistency straight across Android, iOS and Web ecosystems.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <SubServiceShared.Process
                    theme={theme}
                    title="Cross-Platform Development Process"
                    eyebrow="ENHANCE YOUR PROJECT WITH OUR DEVELOPMENT PROCESS"
                    description="Our structured cross-platform development process ensures every application is carefully planned, designed, developed, tested and securely launched for multi-device performance."
                    process={[
                        { "title": "Discovery & Planning", "desc": "Understand business requirements, target users, project goals and technical requirements before development begins." },
                        { "title": "UI/UX Design", "desc": "Create intuitive, responsive and engaging interfaces designed specifically for modern mobile experiences." },
                        { "title": "Unified Development", "desc": "Develop scalable cross-platform applications using clean architecture, reusable components and modern unified practices." },
                        { "title": "Integration & Testing", "desc": "Integrate APIs and third-party services while performing functional, performance and cross-device testing." },
                        { "title": "Mass Deployment", "desc": "Safely prepare the application environments for production and publish them across all required App stores concurrently." },
                        { "title": "Support & Maintenance", "desc": "Continuously monitor, improve and maintain the single codebase to ensure long-term stability and unified performance." }
                    ]}
                />

                <section className="py-20 lg:py-32 bg-slate-50 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-[#A855F7] font-bold uppercase tracking-wider text-sm mb-3">EMPOWER YOUR BUSINESS WITH OUR SERVICES</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024]">Our Cross-Platform Development Services</h3>
                        </div>
                        <div className="space-y-12 lg:space-y-24">
                            {services.map((svc, i) => (
                                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-stretch py-4`}>

                                    <div className="flex-1 space-y-6 w-full lg:max-w-[560px]">
                                        <div className="w-16 h-16 bg-[#A855F7]/10 text-cyan-600 border border-[#A855F7]/20 rounded-2xl flex items-center justify-center">
                                            {svc.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-bold text-[#0A1024]">{svc.title}</h4>
                                            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-[#A855F7] rounded-full mt-4 mb-6"></div>
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

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, x: i % 2 !== 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="flex-1 w-full lg:max-w-[560px] relative group"
                                    >
                                        <div className="absolute -inset-4 bg-[#A855F7]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
                                        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] bg-slate-100 border border-slate-100 rounded-[18px] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                            <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-[#A855F7] font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers’ engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#A855F7]/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-[#A855F7]/10 group-hover:text-cyan-600 group-hover:border-[#A855F7] transition-colors">
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

                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-[#A855F7] font-bold uppercase tracking-wider text-sm mb-3">REASON TO CHOOSE US</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Businesses Choose Our Cross-Platform Development Services
                            </h3>
                            <p className="text-slate-600">We combine technical expertise, creative thinking and business-focused unified development practices to build Cross-Platform applications that are reliable, scalable and perfectly ready for multi-store deployment.</p>
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

                <section className="py-16 md:py-24 lg:py-32 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-[#0A1024] mb-3">GET A FREE QUOTE</h3>
                                <p className="text-slate-600">We will get back to you within 24 hours</p>
                            </div>
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
                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
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

export default CrossPlatformApps;