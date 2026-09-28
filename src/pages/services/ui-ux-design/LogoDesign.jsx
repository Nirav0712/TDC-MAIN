import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { LogoDesignVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, PenTool, Sparkles, Compass, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const LogoDesign = () => {
    useSEO({
        title: "Logo Designing Services & Brand Identity | The Digital Connect",
        description: "Stand out with memorable, timeless logo design and corporate brand identity packages crafted by The Digital Connect. 100% custom vector marks with full copyright ownership."
    });

    const theme = { accent: "text-indigo-600", bg: "bg-indigo-500/20", softBg: "bg-indigo-50" };

    const services = [
        {
            title: "Custom Logo Design & Monogram Marks",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
            cta: "Design Custom Logo",
            paragraphs: [
                "Your logo is the cornerstone of your brand identity. The Digital Connect creates bespoke emblems, minimalist wordmarks, abstract marks, and monogram logos that immediately communicate your business values.",
                "We design with mathematical precision, utilizing golden ratio geometry and balanced typography to ensure visual longevity and instant brand recognition across all mediums."
            ]
        },
        {
            title: "Complete Corporate Identity Kits",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Build Brand Kit",
            paragraphs: [
                "Beyond a standalone logo, we engineer complete visual identity systems. Our identity kits include primary logos, secondary lockups, favicons, app icons, and monochrome variants.",
                "Equip your organization with business cards, letterheads, email signatures, presentation decks, and digital badges that align perfectly with your core visual language."
            ]
        },
        {
            title: "Brand Style Guide & Design Systems",
            icon: <Compass className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Get Brand Guidelines",
            paragraphs: [
                "Maintain flawless brand consistency as your business expands. We author comprehensive brand guideline documents covering clear-space rules, minimum sizing, color breakdowns (HEX, RGB, CMYK, Pantone), and font pairings.",
                "Ensure that internal teams, external agencies, and print vendors implement your visual identity accurately and cohesively."
            ]
        },
        {
            title: "Logo Redesign & Modernization",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
            cta: "Modernize Your Logo",
            paragraphs: [
                "Is your existing logo outdated or difficult to scale on modern digital screens? We revitalize legacy logos while honoring established brand equity and recognition.",
                "We simplify shapes, modernize typography, and optimize vector geometry for responsive mobile viewports and modern app ecosystems."
            ]
        }
    ];

    const processSteps = [
        {
            title: "Brand Discovery & Brief",
            desc: "Uncovering your mission, target demographics, brand personality, and competitive differentiators."
        },
        {
            title: "Market & Aesthetic Research",
            desc: "Analyzing industry visual trends, color psychology, and symbolic associations to find a unique whitespace."
        },
        {
            title: "Concept Sketching & Ideation",
            desc: "Generating dozens of raw thumbnail concepts exploring geometric, abstract, and typographic directions."
        },
        {
            title: "Vector Drafting & Golden Ratio",
            desc: "Refining select concepts into scalable vector geometry with precise balance and custom font tuning."
        },
        {
            title: "Real-World Mockups & Review",
            desc: "Presenting logo marks mapped onto realistic 3D products, signage, mobile screens, and stationery."
        },
        {
            title: "Final Deliverables & Ownership",
            desc: "Handing over complete vector master files, responsive formats, brand guide, and copyright certificates."
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
        "100% custom-crafted logos — zero templates, clip-art, or AI-generated shortcuts",
        "Full intellectual property and copyright ownership transferred upon delivery",
        "Comprehensive vector source files provided (AI, EPS, SVG, PDF, High-Res PNG)",
        "Careful evaluation of color psychology and competitor landscape",
        "Versatile designs tested on billboards, favicons, dark mode, and mobile screens",
        "Multiple distinct design concepts with unlimited iterative fine-tuning"
    ];

    const technologies = ["Adobe Illustrator", "Figma", "Adobe Photoshop", "VectorScribe", "Glyphs", "CorelDRAW", "Pantone Color Matching", "FontLab"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Designing Services"
                    parentRoute="/services/ui-ux-design"
                    eyebrow="Logo Designing Services"
                    title="Timeless Logo Designing Services"
                    description="Create a timeless, unforgettable brand mark that resonates with your customers. The Digital Connect engineers distinctive logos and complete corporate identities built for lasting market leadership."
                    theme={theme}
                    visual={LogoDesignVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Brand Identity & Logo Craftsmanship</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Top-rated Business Logo Creator
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>A designer logo will assist the audience in becoming more familiar with you. In a world with billions of people, an innovative look carved on a particular color, along with an everlasting font style, can catch the attention of those who see your product tags. If you have an actual, interactive logo, your customers will be able to recognize your brand immediately when they use any of your services, regardless of where they are in the world. Logo designers at our logo design agency make sure that they create a distinctive logo for you and effectively express your organization’s personality, grandeur, and atmosphere to the general public and other stakeholders.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Logo Design Process"
                    eyebrow="Our Identity Workflow"
                    description="From brand discovery to geometric sketching, vector precision, and brand stylebook delivery."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                {/* <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Complete Brand Identity & Logo Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Tailored brand marks and style systems built for industry leaders.</p>
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
                </section> */}

                {/* Technologies Section */}
                {technologies && technologies.length > 0 && (
                    <SubServiceShared.Technology
                        theme={theme}
                        technologies={technologies}
                        title="Technologies We Work On"
                        eyebrow="Our Precision Tools"
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
                                Why Choose The Digital Connect for Logo Design
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Build brand authority with custom vector logos:</p>
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

export default LogoDesign;
