import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { UIUXDesignVisual } from '../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Palette, PenTool, Monitor, Layout, Sparkles,
    Search, Layers, Cpu, Eye, Smartphone, MousePointer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const UIUXDesign = () => {
    useSEO({
        title: "Designing Services | Graphic, Web, Logo & UI/UX Design | The Digital Connect",
        description: "Transform your visual presence with creative Designing Services by The Digital Connect. We offer Graphic Design, Web Design, Logo Design, and UI & UX Designing Services."
    });

    const theme = { accent: "text-purple-600", bg: "bg-purple-500/20", softBg: "bg-purple-50" };

    const services = [
        {
            title: "Web Designing",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Graphic Design",
            link: "/services/ui-ux-design/graphic-design",
            paragraphs: [
                "Since the inception of the World Wide Web, web design has progressed from simple HTML pages to spectacular dynamic graphical interfaces. With today’s cutting-edge technology, it is possible to bring an inventive design to life. Websites that are easy to use and have attractive designs are becoming more vital.",

                "Website designs that are optimized for mobile devices are our specialty, and we try to make them look fantastic on every device, no matter how little or big the screen may be. Aside from offering responsive website design services that are as simple as they come, we also provide eCommerce website design, single-page layouts, landing pages, bespoke web design, and portfolio website design.",

                "Our web designers stay up with the most current innovations in web design in order to ensure that your website is aesthetically attractive. Because of our user experience/user interface (UX/UI) and conversion optimization, we are able to produce more income and leads without incurring any more costs or expenses (CRO)."
            ],
        },
        {
            title: "Mobile UI/UX Designing",
            icon: <Monitor className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Web Design",
            link: "/services/ui-ux-design/web-design",
            paragraphs: [
                "Consider working with a team that has a proven track record of meeting deadlines and delivering the outcomes you’re looking for. UI/UX design for mobile devices may be found at The Digital Connect. With the aid of our design team, you can swiftly create a product that meets both the demands of your company and those of your customers.",

                "With a beautiful user interface, you can do so much more than just grab the customer’s attention; you can also create an amazing user experience and strengthen your company’s brand. As a result, every company should put effort into developing engaging user interfaces that lead to better user experiences.",

                "The Digital Connect is cognizant of the importance of user-centred design and the influence it has on the user’s journey. Your mobile apps/websites will be easy to use and fun to use, thanks to our UIs, which are fluid, beautiful and user-friendly."
            ],
        },
        {
            title: "Graphic Designing",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Logo Design",
            link: "/services/ui-ux-design/logo-design",
            paragraphs: [
                "You must create an excellent first impression in order to effectively communicate your goals and build trust with potential customers in today’s competitive business environment. For many years, we have been delivering high-quality graphic design services as a professional graphic design firm.",

                "With the help of our in-house graphic design team, we’ll create a memorable brand for your business that will stand out from the crowd and put you ahead of the competition. We’re constantly looking for new ways to stretch our imaginations and push ourselves to think beyond the box. Our graphic design services help your company stand out from the rest of the competition.",

                "As a professional designing company, we recognize the importance of a professional image and attention-grabbing marketing materials. As a result, we don’t want you to fall behind the curve and become obsolete; instead, we want you to be in a position where your designs are current, relevant, and fit both you and your clients."
            ],
        },
        {
            title: "Logo Designing",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Explore UI & UX Design",
            link: "/services/ui-ux-design/ui-ux-designing-services",
            paragraphs: [
                "Iconic brands are those that instantly conjure up the name and history of the firm or brand when one sees their emblem. This demonstrates the power of a logo. Our skilled logo designers know how to combine symbols, calligraphy, design art, and other aesthetically pleasing graphical components to produce such an effective logo.",

                "Our logos evoke sensations and emotions for the users. For any of your logo design requirements, we can call on our many years of expertise and some of the greatest creative minds in the business. Over the years, we’ve had the pleasure of working with hundreds of customers from all over the globe.",

                "In addition to real estate and education, we also develop logos for culinary and hospitality businesses as well as technology and fashion companies. Our logo design services come in a variety of packages to fit the demands of any company."
            ],
        }
    ];

    const processSteps = [
        { title: "Creative Discovery & Brief", desc: "Understanding your brand mission, target audience profile, market positioning, and core aesthetic goals." },
        { title: "Visual Strategy & Moodboards", desc: "Developing visual moodboards, style directions, color palettes, and preliminary layout schematics." },
        { title: "Vector Design & Wireframing", desc: "Crafting pixel-perfect vector graphics, brand marks, and wireframe blueprints in Figma and Adobe Suite." },
        { title: "Interactive Prototyping", desc: "Developing clickable prototypes to test user behavior and simulate real-world digital interactions." },
        { title: "Client Review & Fine-Tuning", desc: "Iterative feedback sessions to refine typography, visual contrast, balance, and messaging hierarchy." },
        { title: "Design System & Asset Delivery", desc: "Delivering complete vector source files, brand guidelines, and responsive design tokens." }
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
        "Human-centered design process rooted in strategic brand positioning",
        "Obsession with conversion optimization, visual balance, and brand recall",
        "100% original, vector-based designs with complete copyright ownership",
        "Comprehensive Figma component libraries and auto-layout token structures",
        "Pixel-perfect visual design conforming to accessibility (WCAG 2.1 AA) standards",
        "Interactive prototyping that accurately replicates final product interactions",
        "Multi-format delivery across all digital, mobile, and high-DPI print mediums",
        "Proven track record increasing client conversion rates and user retention"
    ];

    const technologies = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe XD", "Sketch", "Framer", "Lottie", "Tailwind CSS", "CorelDRAW"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="Designing Services"
                    title="World-Class UI/UX & Creative Graphic Design Services"
                    description="Elevate your brand presence with world-class design services. The Digital Connect crafts memorable logos, high-converting websites, striking marketing graphics, and intuitive UI/UX experiences tailored to your business."
                    theme={theme}
                    visual={UIUXDesignVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Creative Visual Solutions</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Creative Design Engineered to Captivate and Convert
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Design is the most critical touchpoint between your business and your customers. At The Digital Connect, our multidisciplinary design team combines artistic distinction, psychological triggers, and user-centric architecture to create impactful visual assets.</p>
                                <p>From iconic logo marks and print marketing collateral to responsive corporate web designs and friction-free application interfaces, we build cohesive brand ecosystems that establish authority and inspire action across every platform.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Proven Creative Design Process"
                    eyebrow="Our Design Lifecycle"
                    description="We follow a systematic human-centered design workflow that guarantees aesthetic excellence, brand consistency, and frictionless user experiences."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#FAF5FF] text-purple-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Core Designing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our comprehensive range of design solutions crafted to elevate brand identity and digital engagement.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FAF5FF]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-purple-500 mt-4 mb-6"></div>
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
                        title="Design Software & Tools We Use"
                        eyebrow="Creative Suite"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-purple-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-200 transition-colors">
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
                <section className="py-20 lg:py-32 bg-[#FAF5FF]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Reason to Choose Us</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Why Choose The Digital Connect for UI/UX & Graphic Design
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Discover why leading global brands choose our creative design studio:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reasons.map((reason, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
                                    <span className="text-[#0A1024] font-bold">{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Elevate Your Brand Design?"
                    subtitle="Share your design requirements with our creative team and receive a customized concept proposal and quote within 24 hours."
                    serviceName="Design"
                />
            </div>
        </PageTransition>
    );
};

export default UIUXDesign;
