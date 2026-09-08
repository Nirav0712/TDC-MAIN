import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { FlutterVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building2, Building, PenTool, Smartphone, MonitorPlay, MessageSquare, Briefcase, Code2, Layers, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServiceUIMockup = ({ Icon }) => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-8 bg-slate-50 relative overflow-hidden group">
        <div className="absolute w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div className="relative w-full max-w-[260px] aspect-[9/16] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-100 flex flex-col overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="h-16 bg-slate-50 border-b border-slate-100 flex items-center px-1 gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-sm">
                    <Icon size={20} />
                </div>
                <div className="flex-1 h-3 bg-slate-200 rounded-full"></div>
            </div>
            <div className="p-5 space-y-4">
                <div className="w-3/4 h-5 bg-[#0A1024] rounded-md"></div>
                <div className="w-1/2 h-3 bg-slate-200 rounded-full"></div>
                <div className="space-y-3 pt-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-14 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center px-1 gap-4 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-cyan-100/50"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto p-5 pt-0">
                <div className="w-full h-12 bg-cyan-500 rounded-xl shadow-lg shadow-cyan-500/20"></div>
            </div>
        </div>
    </div>
);

const FlutterDevelopment = () => {
    useSEO({
        title: "Powerful Flutter App Development Solutions | The Digital Connect",
        description: "Build beautiful, high-performance and scalable mobile applications with Flutter. Our Flutter development team creates seamless cross-platform experiences."
    });
    const theme = { "accent": "text-brand-electric-cyan", "bg": "bg-brand-electric-cyan/20", "softBg": "bg-brand-periwinkle/20" };

    const services = [
        {
            title: "Custom Flutter App Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Build customized Flutter applications designed around your business requirements, workflows and target audience."
            ],
            cta: "Get Custom App Solution"
        },
        {
            title: "Flutter UI/UX Development",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Create beautiful, responsive and user-friendly interfaces that deliver a consistent experience across different devices and screen sizes."
            ],
            cta: "Design Your App"
        },
        {
            title: "Flutter App Migration",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Modernize existing mobile applications by migrating them to Flutter while improving performance, maintainability and scalability."
            ],
            cta: "Migrate to Flutter"
        },
        {
            title: "Flutter App Consulting",
            icon: <MessageSquare className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Get expert guidance on architecture, technology selection, product strategy, development planning and Flutter implementation."
            ],
            cta: "Consult our Experts"
        },
        {
            title: "Flutter App Testing",
            icon: <CheckCircle2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Ensure your application performs reliably through functional, usability, compatibility and performance testing."
            ],
            cta: "Test Application"
        },
        {
            title: "Flutter App Support & Maintenance",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
            paragraphs: [
                "Keep your Flutter application secure, stable and up to date with continuous monitoring, maintenance and optimization."
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
        "Modern Flutter development practices",
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
                    eyebrow="FLUTTER APP DEVELOPMENT"
                    title="Powerful Flutter App Development Solutions"
                    description="Build beautiful, high-performance and scalable mobile applications with Flutter. Our Flutter development team creates seamless cross-platform experiences that help businesses launch faster, reduce development costs and deliver consistent experiences across platforms."
                    theme={theme}
                    visual={FlutterVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-1 relative z-10">
                        <div className="max-w-4xl mx-auto text-center lg:text-left">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">EMPOWER YOUR BUSINESS WITH OUR SERVICES</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Trusted Flutter App Development Company
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Flutter enables businesses to build modern applications with a single powerful codebase while maintaining excellent performance and beautiful user experiences. Our Flutter developers create scalable applications tailored to your business goals and customer expectations.</p>
                                <p>We combine modern Flutter development practices, intuitive UI/UX design, robust architecture and quality assurance to deliver applications that are reliable, engaging and ready for growth.</p>
                                <p>From startups to established businesses, our Flutter development solutions help accelerate product launches while maintaining consistency across Android, iOS and other supported platforms.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <SubServiceShared.Process
                    theme={theme}
                    title="Flutter App Development Process"
                    eyebrow="ENHANCE YOUR PROJECT WITH OUR DEVELOPMENT PROCESS"
                    description="Our structured Flutter development process ensures every application is carefully planned, designed, developed, tested and launched for long-term performance."
                    process={[
                        { "title": "Discovery & Planning", "desc": "Understand business requirements, target users, project goals and technical requirements before development begins." },
                        { "title": "UI/UX Design", "desc": "Create intuitive, responsive and engaging interfaces designed specifically for modern mobile experiences." },
                        { "title": "Flutter Development", "desc": "Develop scalable Flutter applications using clean architecture, reusable components and modern development practices." },
                        { "title": "Integration & Testing", "desc": "Integrate APIs and third-party services while performing functional, performance and device testing." },
                        { "title": "Deployment", "desc": "Prepare the application for production and publish it across the required platforms." },
                        { "title": "Support & Maintenance", "desc": "Continuously monitor, improve and maintain the application to ensure long-term stability and performance." }
                    ]}
                />

                <section>
                    {/* TOP HEADING AREA */}
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-1 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-1 py-2 rounded-full mb-6">
                                EMPOWER YOUR BUSINESS WITH OUR SERVICES
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Flutter App Development Services
                            </h3>
                        </div>
                    </div>

                    {/* MAIN SERVICE CONTENT AREA */}
                    <div className="w-full bg-white py-12 md:py-16">
                        <div className="max-w-7xl mx-auto px-1">
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

                                        {/* LEFT COLUMN: Height determined organically by paragraph text */}
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-orange-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        {/* RIGHT COLUMN: Stretches matching left side through cascading flex layout */}
                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            {/* Decorative Orange Shape (Absolute behind card) */}
                                            <div className="absolute -inset-4 sm:-inset-6 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>

                                            {/* Outer Card (Given flex-1 to consume the full stretched column height) */}
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                {/* Image Space (Takes all remaining inner vertical height pushing CTA flush) */}
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>

                                                {/* Rigid CTA Link positioned below fluid image limit */}
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

                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-1">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers’ engagement.</p>
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

                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-1">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">REASON TO CHOOSE US</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Businesses Choose Our Flutter Development Services
                            </h3>
                            <p className="text-slate-600">We combine technical expertise, creative thinking and business-focused development practices to build Flutter applications that are reliable, scalable and ready for growth.</p>
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
                    <div className="max-w-4xl mx-auto px-1 relative z-10">
                        <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-[#0A1024] mb-3">GET A FREE QUOTE</h3>
                                <p className="text-slate-600">We will get back to you within 24 hours</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted smoothly!"); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">First Name <span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Last Name <span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Email Address <span className="text-red-500">*</span></label>
                                        <input required type="email" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Phone Number <span className="text-red-500">*</span></label>
                                        <input required type="tel" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#0A1024]">Message <span className="text-red-500">*</span></label>
                                    <textarea required rows={4} className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your project requirements..."></textarea>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-2 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
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

export default FlutterDevelopment;