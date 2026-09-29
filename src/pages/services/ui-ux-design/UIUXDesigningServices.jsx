import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { UIUXDesignVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Layout, Smartphone, Users, Zap, Layers, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const UIUXDesigningServices = () => {
    useSEO({
        title: "UI & UX Designing Services | The Digital Connect",
        description: "Elevate your web and mobile applications with human-centered UI & UX designing services by The Digital Connect. We combine user research, wireframing, and interactive design to build frictionless products."
    });

    const theme = { accent: "text-purple-600", bg: "bg-purple-500/20", softBg: "bg-purple-50" };

    const services = [
        {
            title: "UI/UX Design Consulting",
            icon: <Users className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Explore UX Research",
            paragraphs: [
                "If you’re looking for a team that has a well-defined design process, adheres to deadlines, and produces a flawless product, look no further. Make use of the UI and UX services provided by The Digital Connect. Using our design team, you may rapidly and simply create an interesting product inside a major software firm.",

                "Companies benefit from UI/UX consulting by applying the correct procedures, methodologies, and tools to enhance their product’s overall usability and save costs. To ensure your company has the most up-to-date knowledge of user interface and user experience (UI/UX) best practices, we provide comprehensive product evaluations, product strategy consultations, workshop facilitation, and training.",

                "Our UI/UX experts can help you at any point in the product development cycle, from product discovery and prototype validation through post-release support. With agile methodologies and a focus on the needs of your customers, we can help your business develop and evolve inside."
            ],
        },
        {
            title: "Android App UI/UX",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
            cta: "View Wireframing Services",
            paragraphs: [
                "When it comes to iOS app UI/UX design, the legibility of the text and layouts are something we look for more than anything else. Moreover, it doesn’t matter how useful an app is if it doesn’t have a decent user experience. We at The Digital Connect know the importance of having a decent, creative, and eye-catching UI/UX for iOS apps.",

                "Our professional iOS apps UI/UX designers are capable of creating cutting-edge user interfaces that enhance the overall experience for our clients. iOS apps app UI/UX designs that are appealing to the eye are the result of our high-quality services and years of expertise.",

                "We create meaningful, relevant, and user-friendly iOS app UI/UX design that is most conducive to business success and benefits both your organization and your end consumers. We are a one-stop solution for all your iOS app design needs."
            ],
        },
        {
            title: "Cross-Platform App UI/UX Design",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Design User Interfaces",
            paragraphs: [
                "The quality of the cross-platform app UI/UX design is directly related to its user experience. So we do. The Digital Connect believes in creating perfect UI/UX designs for cross-platform apps. Based on data and user behavior, we develop cutting-edge solutions. We have a unique approach to cross-platform UI/UX design that includes extensive planning and the frame of an innovative product from the start.",

                "Our professional designers use a user-centered approach to create cross-platform applications that meet the particular demands of our clients. We are the industry leader in UI/UX designs, and our products are popular for their quality and effectiveness.",

                "The cross-platform UI/UX designs we frame greatly impact your brand’s presence, visibility, and connection with the intended audience. We use cutting-edge tools and technologies to create the best-in-class and intuitive UI/UX for your cross-platform app. In this way, we help you increase the number of users and the efficiency of your app on different platforms."
            ],
        },
        {
            title: "Web Apps UI/UX Design",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Design Systems",
            paragraphs: [
                "The only thing that separates your mobile app from your competition is a fantastic user experience. Good User Interface design may have a significant impact on the success of your business. Every project we develop is informed by the knowledge we’ve gained through building hundreds of successful applications. We are well-known in the field of User Experience for our straightforward but very successful approach.",

                "Simple and clear user interfaces and user experience (UX) design are the most effective ways to keep clients engaged and committed. The Digital Connect’s web App UI design and development team is focused on making our clients’ consumers happier. This naturally has a long-term influence on the connection we have with our clients.",

                "Our top-notch designers are capable of working in a variety of industries, no matter what your previous experience is. We have a long-term relationship with our clients because of our dedication to quality-based web app interface design and attention to detail."
            ],
        },
        {
            title: "iOS Apps UI/UX Design",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Design Systems",
            paragraphs: [
                "When it comes to iOS app UI/UX design, the legibility of the text and layouts are something we look for more than anything else. Moreover, it doesn’t matter how useful an app is if it doesn’t have a decent user experience. We at The Digital Connect know the importance of having a decent, creative, and eye-catching UI/UX for iOS apps.",

                "Our professional iOS apps UI/UX designers are capable of creating cutting-edge user interfaces that enhance the overall experience for our clients. iOS apps app UI/UX designs that are appealing to the eye are the result of our high-quality services and years of expertise.",

                "We create meaningful, relevant, and user-friendly iOS app UI/UX design that is most conducive to business success and benefits both your organization and your end consumers. We are a one-stop solution for all your iOS app design needs."
            ],
        }
    ];

    const processSteps = [
        {
            title: "User Research & Empathy",
            desc: "Conducting user interviews, building personas, and mapping journey touchpoints."
        },
        {
            title: "Information Architecture",
            desc: "Organizing logical user flows, hierarchy, and intuitive sitemaps."
        },
        {
            title: "Wireframes & Schematics",
            desc: "Crafting structural layout blueprints to optimize navigation and spatial flow."
        },
        {
            title: "Visual UI Design",
            desc: "Applying modern color palettes, typography, iconography, and responsive grid layouts in Figma."
        },
        {
            title: "Interactive Prototyping",
            desc: "Simulating live app interactions, micro-animations, and gestures."
        },
        {
            title: "Design System & Handoff",
            desc: "Delivering unified design tokens, component libraries, and detailed developer specs."
        }
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
        "Human-centered design methodology focused on real user data and usability metrics",
        "Significant reduction in user drop-off through optimized interaction pathways",
        "Comprehensive Figma component libraries and auto-layout token structures",
        "Full compliance with WCAG 2.1 AA accessibility guidelines",
        "Interactive prototypes for real-time stakeholder testing and validation",
        "Seamless developer handoff with ready-to-use CSS and React code tokens"
    ];

    const technologies = ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Zeplin", "Storybook", "Framer", "Lottie"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Designing Services"
                    parentRoute="/services/ui-ux-design"
                    eyebrow="UI & UX Designing Services"
                    title="Creative UI/UX Design Company"
                    description="UI and UX development services that combine cutting-edge technology, creativity, and customisation may help you create a really unique digital experience. Customers’ happiness, brand value, and conversions all improve as a result of our user-friendly designs."
                    theme={theme}
                    visual={UIUXDesignVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Intuitive Product Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Where Intuitive Usability Meets State-of-the-Art Visuals
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Great digital products don't just look good—they feel effortless. In an era where user attention is fleeting, exceptional UI/UX design is the difference between a high-converting digital platform and an abandoned product.</p>
                                <p>At The Digital Connect, our UI/UX design engineers analyze user journeys, reduce cognitive load, and design frictionless digital experiences. We bridge the gap between user desires and your business metrics to deliver tangible results.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our UI/UX Design Process"
                    eyebrow="Our Product Workflow"
                    description="From user research and wireframing to interactive high-fidelity prototyping and design system delivery."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-12 lg:py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Interactive UI/UX Design Services

                            </h3>
                            {/* <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Product strategy, interface design, and component systems for digital leaders.</p> */}
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

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
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

                {/* Technologies Section */}
                {technologies && technologies.length > 0 && (
                    <SubServiceShared.Technology
                        theme={theme}
                        technologies={technologies}
                        title="Technologies We Work On"
                        eyebrow="Our Prototyping Tools"
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
                                Why Choose The Digital Connect for UI/UX Design
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Transform your product user experience with our specialized team:</p>
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

export default UIUXDesigningServices;
