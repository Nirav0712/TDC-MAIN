import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { IOSVisual } from '../../components/services/subservices/visuals/VisualsMobile';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const MobileDevelopment = () => {
    useSEO({
        "title": "Custom Mobile App Development Company | The Digital Connect",
        "description": "The Digital Connect delivers full-cycle mobile app development services for iOS, Android, and cross-platform applications with scalable architectures."
    });

    const theme = { "accent": "text-brand-electric-cyan", "bg": "bg-brand-electric-cyan/20", "softBg": "bg-brand-periwinkle/20" };

    const services = [
        {
            title: "iOS Application Development",
            icon: <Apple className="w-8 h-8" />,
            imgUrl: "/images/ios_custom_dev.png",
            cta: "Explore iOS App Services",
            link: "/services/mobile-app-development/ios-development",
            paragraphs: [
                "Being a reliable mobile app development company, we help you fulfill your app’s requirements. Our dexterous team of skilled developers makes us a top iOS app development firm worldwide. We help you become competitive and challenging among your competitors. Our long years of expertise have delivered comprehensive, reliable, and highly secured solutions to different business verticals. Our avid iOS developers know all the modern programming languages and tools that help them develop interactive and innovative applications.",

                "We are a strong team of industry-veteran programmers having expertise and knowledge of the latest methodologies and technologies. We are committed to serving business-centric and highly profitable app development solutions in the set timeframe. If you want to meet the ever-changing demand of today’s iOS app users, we are the one-stop destination for you. Our solutions are coded by professional UI/UX designers, quality analysts, and expert developers. Connect with us for affordable iOS app solutions."
            ],
        },
        {
            title: "Android Application Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1607252654015-f85df1fac051?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Android App Services",
            link: "/services/mobile-app-development/android-development",
            paragraphs: [
                "Do you want to experience innovation and creativity? Are you seeking a reliable and highly affordable Android app development company? We are here to assist you with our in-depth technical expertise and experience. Our experienced Android app developers are serving the best apps to industry domains.",

                "With a specialized team, we create robust and well-researched apps for your business to make it profitable and competitive. We assure to offer high-performing and robust solutions. Our developers know the Android platform’s security cracks; we utilize full security protocols and tools to resolve these cracks.",

                "We ensure the smooth flow of the app’s architecture and strong security layers throughout the development. Maintaining transparency is our major advantage. To get your trust in our app development process, we report to you regularly and update you on the project’s progress."
            ],
        },
        {
            title: "Hybrid & Cross-Platform Apps",
            icon: <Combine className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Hybrid App Services",
            link: "/services/mobile-app-development/hybrid-app-development",
            paragraphs: [
                "Do you need an app that can run seamlessly across the iOS and Android platforms within a limited budget? A hybrid app is the best answer. It is a blend of web and native apps and offers a cross-platform experience and highly scalable robust features in a fully customized mobile app.",

                "Hybrid app development includes native app capabilities and features and also serves to put developers and businesses on the way toward the acceptance of HTML5 app development. We are the top mobile app development company and have a proven track record of delivering highly functional and innovative hybrid app solutions to our clients.",

                "Our developers use modern technologies to bring ideas into reality. We ensure optimum user experience. The hybrid applications we create offer seamless functionality and load faster as well. Our proficient designers create apps that are aesthetically interactive and appealing. We keep our clients on top priority and deliver the work on or before time."
            ],
        },
        //             {
        //                 title: "Enterprise Mobile Solutions",
        //                 icon: <Briefcase className="w-8 h-8" />,
        //                 imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        //                 cta: "Consult Our Mobile Architects",
        //                 link: "/contact",
        //                 paragraphs: [
        //                     "Modern enterprises require robust mobile platforms for internal workforce productivity, remote field operations, and real-time operational oversight. The Digital Connect crafts secure enterprise mobile platforms.",
        //                     "We implement single sign-on (SSO), end-to-end data encryption, role-based access control (RBAC), and custom enterprise API integrations that keep your corporate data secure while empowering your distributed teams."
        // ]
        //             }
    ];

    const processSteps = [
        { title: "Discovery & Strategy", desc: "We evaluate your business goals, target audience, and functional requirements to craft an actionable product roadmap." },
        { title: "UI/UX Prototyping", desc: "Our design team crafts intuitive wireframes and interactive prototypes that follow platform-specific design guidelines." },
        { title: "Agile Development", desc: "Experienced engineers write modular, secure, and clean code to bring application features to life incrementally." },
        { title: "Comprehensive QA", desc: "Rigorous automated and manual testing across real devices guarantees bug-free performance and stability." },
        { title: "Store Launch & Deployment", desc: "We handle complete App Store and Google Play submission protocols, ensuring rapid approval." },
        { title: "Continuous Optimization", desc: "Ongoing monitoring, feature enhancements, OS compatibility upgrades, and 24/7 technical support." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve brand presence and sales with scalable digital storefronts.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant platforms for transformational digital healthcare.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Integrate customer travel experiences with robust booking platforms.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Blending modern technology to bring seamless interactive learning.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Interactive digital storefronts and style apps to boost online presence.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Creating modern websites and engaging tracking apps for sports.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Secure digital document portals and case workflows for law firms.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Trustworthy & next-gen financial software solutions for enterprises.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Intelligent freight routing and real-time inventory tracking portals.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Intelligent digital solutions and listing portals for real estate.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud architectures engineered for rapid subscription scaling.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Smart production monitoring and supply chain management tools.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Native and cross-platform expertise across iOS & Android",
        "Human-centered UI/UX designed for high user retention",
        "Strict adherence to App Store & Google Play guidelines",
        "Enterprise-grade security and data encryption standards",
        "Agile sprints with weekly demos and clear milestones",
        "Continuous post-launch maintenance, monitoring, and updates",
        "Transparent pricing models with zero hidden charges",
        "Proven track record delivering scalable mobile architectures"
    ];

    const technologies = ["Swift", "SwiftUI", "Kotlin", "Java", "Flutter", "React Native", "Objective-C", "Xcode", "Android Studio", "Firebase", "GraphQL", "REST APIs", "SQLite", "Realm", "TestFlight"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="Mobile App Development Services"
                    title="Enterprise Mobile App Development Solutions"
                    description="We build intuitive, high-performance mobile applications across iOS, Android, and hybrid platforms tailored to accelerate your business growth and customer engagement."
                    theme={theme}
                    visual={IOSVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Innovative Mobile Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Transforming Business Ideas into Impactful Mobile Experiences
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>In an era where mobile accessibility defines customer relationships, having a high-performing and scalable mobile application is essential. At The Digital Connect, we craft bespoke mobile solutions that blend elegant user experiences with enterprise-grade backend stability. Our mobile app developers leverage native and cross-platform technologies to ensure your business reaches its target audience smoothly across all devices.</p>
                                <p>From early-stage conceptualization and design thinking to deployment and post-launch maintenance, The Digital Connect provides end-to-end mobile engineering services. Whether you require a native iOS app built on Swift, a responsive Android application using Kotlin, or a cost-effective hybrid platform, we engineer solutions designed for high user retention, robust security, and tangible business ROI.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Proven Mobile Development Process"
                    eyebrow="Our Agile Lifecycle"
                    description="We follow a systematic agile workflow that guarantees product quality, rapid delivery cycles, and transparent collaboration."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Mobile App Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our comprehensive suite of mobile development services engineered to drive engagement and sustainable revenue.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F0F7FF]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-orange-500 mt-4 mb-6"></div>
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
                        title="Technologies We Work On"
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

                {/* Reasons to Choose Us & Key Features */}
                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Reason to Choose Us</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Choose The Digital Connect for Mobile App Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Discover the tangible advantages of collaborating with our experienced mobile engineering team:</p>
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

                {/* Quote Form Section */}
                <section className="py-16 md:py-24 lg:py-32 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-[#0A1024] mb-3">GET A FREE QUOTE</h3>
                                <p className="text-slate-600">We will get back to you within 24 hours</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your quote request has been received. Our team will contact you shortly."); }}>
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
                                    <button type="submit" className="w-full md:w-auto px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
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

export default MobileDevelopment;
