import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { GraphicDesignVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Palette, Sparkles, Brush, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const GraphicDesign = () => {
    useSEO({
        title: "Graphic Designing Services | The Digital Connect",
        description: "Transform your visual brand identity with professional graphic design services by The Digital Connect. We create high-impact marketing collateral, digital graphics, and brand illustrations."
    });

    const theme = { accent: "text-pink-600", bg: "bg-pink-500/20", softBg: "bg-pink-50" };

    const services = [
        {
            title: "Social Media Post Design",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Design Brand Collateral",
            paragraphs: [
                "We’ll help your business make the most of your online presence in the age of social media’s exploding popularity. Even though you recognize the importance of social media, you don’t have the time to devote to it. An increase in website traffic, more visibility, and an increase in the “Awesome” factor are all benefits of using branded social media photographs.",
                "We will handle your social media branding, as we have a team of skilled graphic designers who can create banners, creativity, and posts for Facebook, Twitter, Instagram, LinkedIn, and Pintesrest. You can count on us to develop innovative ideas tailored to meet the needs of the products and services you offer.",
                "We combine designs and text by utilizing our specialized social media graphics design services. If you are a small business or a large corporation, we have the unique graphic design services you need at a price you can afford. You’re losing out on a ton of business if you don’t interact with your fans on social media."
            ]
        },
        {
            title: "Email Template Designing",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            cta: "Create Ad Creatives",
            paragraphs: [
                "Marketing via email is powerful because it allows you to directly address your target audience’s demands. Email templates are employed instead of regular email to make these efforts more professional and interactive. With the help of these templates, businesses can present information about their offerings in an eye-catching manner.",
                "Our email templates have been carefully built to match the brand or company’s aesthetic and serve as a creative hook to draw in potential customers. Our talented designers go above and beyond to ensure your content reaches its intended audience. You can count on us to help your company get the word through quickly and effectively.",
                "Our designer’s creative and strategic resources ensure that your email is professionally communicated to your consumers, making them eager to take action. Our designers work closely with you to fully grasp your business’s goals to create a functional and aesthetically pleasing design."
            ]
        },
        {
            title: "Brochures Design",
            icon: <Brush className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Illustrations",
            paragraphs: [
                "In the digital age, brochures are often regarded as outdated media, but they still have a vital role. A great brochure design, in our opinion, is unsurpassed. As a critical component of your marketing arsenal, our brochures are full of creativity and stand out from the crowd.",
                "Improve your marketing analytics by working with a global brochure design business! The creative brochure design solution provided by our designers meets all client requirements while remaining extremely cost-effective. Let us know everything you know about your brand so that we can create powerful brochures!",
                "Our goal is to make brochures an art form, and our specialist teams of brochures designers are professionals in unique design ideas. The industries in which our brochure designers in India have created brochures include anything from manufacturing and real estate to education, healthcare, and IT. Our brochure designers in India can handle your demands with no problem."
            ]
        },
        {
            title: "Website Banner Designing",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
            cta: "Design Packaging",
            paragraphs: [
                "Sincere gratitude from long-term clients is matched by confidence in our capacity to meet new clients’ expectations based on previous projects. When creating designs for our client’s online presence, we consider their branding and adhere to any branding restrictions. To increase the visibility of your business online, you may rely on the banner design services we provide.",
                "Being a renowned graphic design company, our banner design services can help you get your business seen more than ever before. When it comes to banner design, we work directly with you to ensure that the final product reflects your company’s image and fits your specific needs.",
                "Our bespoke banner designs are trusted and liked by people worldwide because of our passion for what we do. Our designers are experts at creating designly appealing and cost-effective banners from conception to execution. Please send us your company’s narrative, or let us do it for you. We promise to provide high-quality banners in the shortest amount of time possible."
            ]
        },
        {
            title: "Presentation, PPT & eBooks Designing",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
            cta: "Design Packaging",
            paragraphs: [
                "Custom-tailored presentation decks, sales presentations, and internal PowerPoint presentations are available. With 21Twelve Interactive, startups and large businesses alike may develop or improve their presentations by creating high-quality decks from scratch or building templates that can be used repeatedly.",
                "If you’re trying to persuade venture investors, show off your designs, or create excitement within your company through presentations, we can help. As a renowned graphic design company, our professional designers ensure to offer the best-in-class, eye-catching, and intuitive presentations, PPT, and eBooks designs.",
                "Every organization, from universities to corporations to government agencies, relies on the involvement of its stakeholders and target audience to be successful. Digital content, such as eBooks, is a powerful tool for attracting and retaining a highly targeted audience."
            ]
        }
    ];

    const processSteps = [
        { title: "Creative Discovery & Brief", desc: "Understanding your brand mission, target audience profile, market positioning, and core aesthetic goals." },
        { title: "Visual Strategy & Moodboards", desc: "Developing visual moodboards, style directions, color palettes, and preliminary layout schematics." },
        { title: "Vector Design & Drafting", desc: "Crafting pixel-perfect vector graphics, marketing collateral, and brand assets in Adobe Suite and Figma." },
        { title: "Interactive Mockups & Review", desc: "Presenting collateral mapped onto realistic 3D products, packaging, and digital screen mockups." },
        { title: "Client Review & Polish", desc: "Iterative feedback sessions to refine typography, visual contrast, balance, and messaging hierarchy." },
        { title: "Print & Digital Asset Delivery", desc: "Delivering print-ready CMYK files with bleeds and web-optimized digital asset packages." }
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
        "Strategic visual hierarchy built to boost brand recall and conversions",
        "100% original, vector-based designs with complete copyright ownership",
        "Multi-format delivery (AI, EPS, SVG, PDF, PNG, JPEG) with print bleed setup",
        "Fast turnaround times with collaborative Figma and Adobe Creative Cloud workflows",
        "Consistent brand guidelines integration across every collateral piece",
        "Dedicated creative director oversight on every graphic design project"
    ];

    const technologies = ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "CorelDRAW", "Adobe After Effects", "Canva Pro", "Procreate", "Blender 3D"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Designing Services"
                    parentRoute="/services/ui-ux-design"
                    eyebrow="Graphic Designing Services"
                    title="Professional Graphic Designing Services"
                    description="Captivate your target audience with bespoke visual designs that convey authority, creativity, and brand distinction. The Digital Connect turns ideas into memorable visual assets across digital and physical media."
                    theme={theme}
                    visual={GraphicDesignVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Creative Visual Communication</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Our Stunning Graphic Designing Services
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>The agile flow of the designing process is significant enough to ensure the app's reliability and success in the market.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Graphic Design Process"
                    eyebrow="Our Creative Workflow"
                    description="From concept discovery to pixel-perfect vector drafting and multi-format delivery."
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
                                Comprehensive Graphic Design Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Tailored graphic design solutions for modern digital and physical brands.</p>
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
                        eyebrow="Our Design Suite"
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
                                Why Choose The Digital Connect for Graphic Design
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Elevate your brand with our dedicated creative designers:</p>
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

export default GraphicDesign;
