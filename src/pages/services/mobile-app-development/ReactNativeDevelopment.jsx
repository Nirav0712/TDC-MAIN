import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ReactNativeVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building2, Building, PenTool, Smartphone, MonitorPlay, MessageSquare, Briefcase, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ReactNativeUIMockup = ({ Icon }) => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-8 bg-slate-50 relative overflow-hidden group">
        {/* Subtle react-blue background glow */}
        <div className="absolute w-72 h-72 bg-[#61DAFB]/20 rounded-full blur-[80px] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
        {/* Device Container */}
        <div className="relative w-full max-w-[260px] aspect-[9/16] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-100 flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
            {/* Header */}
            <div className="h-14 bg-white border-b border-slate-100 flex items-center px-4 justify-between">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                    <Icon size={16} />
                </div>
                <div className="w-24 h-3 bg-slate-100 rounded-full"></div>
            </div>
            {/* Social Feed style mockup body */}
            <div className="p-4 space-y-5">
                {[1, 2].map(i => (
                    <div key={i} className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#61DAFB]/20"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-3 w-1/2 bg-slate-200 rounded-full"></div>
                                <div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
                            </div>
                        </div>
                        <div className="w-full h-24 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"></div>
                    </div>
                ))}
            </div>
            {/* Bottom Nav */}
            <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full ${i === 1 ? 'bg-[#61DAFB]/20' : 'bg-slate-100'}`}></div>
                ))}
            </div>
        </div>
    </div>
);

const ReactNativeDevelopment = () => {
    useSEO({
        title: "Scalable React Native App Development Company | The Digital Connect",
        description: "Create high-quality mobile applications with React Native using a powerful cross-platform development approach."
    });
    const theme = { "accent": "text-[#61DAFB]", "bg": "bg-[#61DAFB]/20", "softBg": "bg-[#61DAFB]/10" };

    const services = [
        {
            title: "Custom React Native App Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Build customized React Native applications designed around your business requirements, workflows and target audience."
            ],
            cta: "Get Custom App Solution"
        },
        {
            title: "React Native UI/UX Development",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Create beautiful, responsive and user-friendly interfaces that deliver a consistent experience across different devices and screen sizes."
            ],
            cta: "Design Your App"
        },
        {
            title: "React Native App Migration",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Modernize existing mobile applications by migrating them to React Native while improving performance, maintainability and scalability."
            ],
            cta: "Migrate to React Native"
        },
        {
            title: "React Native App Consulting",
            icon: <MessageSquare className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Get expert guidance on architecture, technology selection, product strategy, development planning and React Native implementation."
            ],
            cta: "Consult our Experts"
        },
        {
            title: "React Native App Testing",
            icon: <CheckCircle2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Ensure your application performs reliably through functional, usability, compatibility and performance testing."
            ],
            cta: "Test Application"
        },
        {
            title: "React Native Support & Maintenance",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            paragraphs: [
                "Keep your React Native application secure, stable and up to date with continuous monitoring, maintenance and optimization."
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
        "Modern React Native development practices",
        "Responsive UI/UX development",
        "Scalable application architecture",
        "Cost-effective development",
        "API & third-party integrations",
        "Testing and performance optimization",
        "Continuous support & maintenance"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="REACT NATIVE APP DEVELOPMENT"
                    title="Scalable React Native App Development Company"
                    description="Create high-quality mobile applications with React Native using a powerful cross-platform development approach. We build fast, scalable and engaging applications that provide consistent experiences across iOS and Android."
                    theme={theme}
                    visual={ReactNativeVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center lg:text-left">
                            <h2 className="text-[#61DAFB] font-bold uppercase tracking-wider text-sm mb-3">EMPOWER YOUR BUSINESS WITH OUR SERVICES</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024] mb-8">
                                Scalable React Native App Development Company
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Create high-quality mobile applications with React Native using a powerful cross-platform development approach. We build fast, scalable and engaging applications that provide consistent experiences across iOS and Android.</p>
                                <p>We combine modern React Native development practices, intuitive UI/UX design, robust architecture and quality assurance to deliver applications that are reliable, engaging and ready for growth.</p>
                                <p>From startups to established businesses, our React Native development solutions help accelerate product launches while maintaining consistency across Android, iOS and other supported platforms.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <SubServiceShared.Process
                    theme={theme}
                    title="React Native Development Process"
                    eyebrow="ENHANCE YOUR PROJECT WITH OUR DEVELOPMENT PROCESS"
                    description="Our structured React Native development process ensures every application is carefully planned, designed, developed, tested and launched for long-term performance."
                    process={[
                        { "title": "Discovery & Planning", "desc": "Understand business requirements, target users, project goals and technical requirements before development begins." },
                        { "title": "UI/UX Design", "desc": "Create intuitive, responsive and engaging interfaces designed specifically for modern mobile experiences." },
                        { "title": "React Native Development", "desc": "Develop scalable React Native applications using clean architecture, reusable components and modern development practices." },
                        { "title": "Integration & Testing", "desc": "Integrate APIs and third-party services while performing functional, performance and device testing." },
                        { "title": "Deployment", "desc": "Prepare the application for production and publish it across the required platforms." },
                        { "title": "Support & Maintenance", "desc": "Continuously monitor, improve and maintain the application to ensure long-term stability and performance." }
                    ]}
                />

                <section className="py-20 lg:py-32 bg-slate-50 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-[#61DAFB] font-bold uppercase tracking-wider text-sm mb-3">EMPOWER YOUR BUSINESS WITH OUR SERVICES</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024]">Our React Native Development Services</h3>
                        </div>
                        <div className="space-y-12 lg:space-y-24">
                            {services.map((svc, i) => (
                                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-stretch py-4`}>

                                    <div className="flex-1 space-y-6 w-full lg:max-w-[560px]">
                                        <div className="w-16 h-16 bg-[#61DAFB]/10 text-cyan-600 border border-[#61DAFB]/20 rounded-2xl flex items-center justify-center">
                                            {svc.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-bold text-[#0A1024]">{svc.title}</h4>
                                            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-[#61DAFB] rounded-full mt-4 mb-6"></div>
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
                                        <div className="absolute -inset-4 bg-[#61DAFB]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
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
                            <h2 className="text-[#61DAFB] font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers’ engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#61DAFB]/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-[#61DAFB]/10 group-hover:text-cyan-600 group-hover:border-[#61DAFB] transition-colors">
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
                            <h2 className="text-[#61DAFB] font-bold uppercase tracking-wider text-sm mb-3">REASON TO CHOOSE US</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Businesses Choose Our React Native Development Services
                            </h3>
                            <p className="text-slate-600">We combine technical expertise, creative thinking and business-focused development practices to build React Native applications that are reliable, scalable and ready for growth.</p>
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

export default ReactNativeDevelopment;