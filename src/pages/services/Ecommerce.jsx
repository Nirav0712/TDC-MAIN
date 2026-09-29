import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { ShopifyVisual } from '../../components/services/subservices/visuals/VisualsUIUX_Ecom';
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

const Ecommerce = () => {
    useSEO({
        "title": "Custom eCommerce Development Services | The Digital Connect",
        "description": "The Digital Connect provides end-to-end eCommerce development services including Shopify, WooCommerce, custom headless storefronts, payment gateways, and marketplaces."
    });

    const theme = { "accent": "text-emerald-600", "bg": "bg-emerald-500/20", "softBg": "bg-emerald-50" };

    const services = [
        {
            title: "Magneto Development",
            icon: <Store className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Shopify Services",
            link: "/services/ecommerce-development/shopify",
            paragraphs: [
                "When building successful online businesses, Magento has a wealth of sophisticated tools. Because of its open-source nature and a great degree of adaptability in terms of functionality, features, plans, and architecture, it’s a big hit. Help your company meet its unique demands by hiring a Magento developer who can help you convert a PSD to Magento, customize an existing Magento theme, add extensions, and integrate with third-party API providers.",

                "We use a feedback-based strategy and standardized development methods like GIT and Development Environments as part of our development process. From shop design to online store setup, bespoke extensions, and third-party connections, you may hire Magento 2 expertise from us.",

                "Magento experts at our company are adept at offering sturdy yet scalable solutions designed to improve revenue and enhance user experience while accelerating expansion. Please take advantage of our extensive expertise in building eCommerce websites for organizations of all sizes. We can help you find the best Magento developers for your e-commerce business."
            ],
        },
        {
            title: "WooCommerce Development",
            icon: <ShoppingBag className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
            cta: "Explore WooCommerce Services",
            link: "/services/ecommerce-development/woocommerce",
            paragraphs: [
                "To create a full-fledged eCommerce business, WooCommerce is the best option since it is a scalable open-source platform developed for WordPress which can be easily customized. The Digital Connect can help you with WooCommerce development. Hire our WooCommerce development service to create a distinctive and engaging shopping experience for your customers.",

                "With The Digital Connect, a top WooCommerce development company in the market, you can expect a flawless, responsive, and functioning eCommerce shop with a user-friendly design, engaging themes, and strong extensions. We use an iterative development method to ensure timely delivery and work in short, specified sprints.",

                "Our skilled programmers adhere to W3C guidelines to ensure their work is bug-free. Our specialists will work with you to find the best possible solution for your company’s particular needs. When you work with The Digital Connect, you can be sure that your Woocommerce development is in good hands. Our Woocommerce development services are result-oriented, high-quality, and dependable."
            ],
        },
        {
            title: "Shopify Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Custom eCommerce",
            link: "/services/ecommerce-development/custom-ecommerce",
            paragraphs: [
                "With our Shopify ecommerce development company, you can increase your sales and income. Shopify is the world’s top eCommerce platform for small and medium-sized enterprises. Our Shopify eCommerce development company offers completely integrated solutions by combining world-class platform and subject experience with selected technical advice.",

                "We provide a wide range of Shopify development services that help you match your brand’s vision to your customers’ expectations. A leading Shopify web development firm, we specialize in the creation of specific e-commerce sites as well as dependable mobile apps. Our Shopify eCommerce development services include everything from bespoke Shopify theme creation to third-party integrations, functionality, and security methods that comply.",

                "Known for producing functionally efficient and cost-effective Shopify sites, we are a professional Shopify development business. Our customized solutions enable you to design your online shop, add new features, manage sales channels and inventory, measure your business’s development and performance smoothly, etc."
            ],
        },
        {
            title: "OpenCart Development",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Marketplace Dev",
            link: "/services/ecommerce-development/marketplace-development",
            paragraphs: [
                "PHP, jQuery, and Bootstrap as a CSS framework make OpenCart development well-suited for small and medium-sized businesses. It’s simple to change the design. OpenCart’s MVC structure is simple to comprehend and grow. Millions of websites throughout the globe utilize OpenCart as their shopping cart platform.",

                "Your customers may buy from a wide variety of items and categories, and you’ll be able to improve your productivity and collect valuable data thanks to OpenCart. When customizing OpenCart for your business, no one knows OpenCart better than The Digital Connect. We serve many clients, from massive corporations to small businesses.",

                "Our specialty is web design, development, and integration services based on OpenCart. Our customers are always kept in the loop about the status of their projects, and their input is taken into account throughout the design process to guarantee complete client satisfaction."
            ],
        },
        {
            title: "BigCommerce Development",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Marketplace Dev",
            link: "/services/ecommerce-development/marketplace-development",
            paragraphs: [
                "Do you have a specific need for your online store? You may then make use of our BigCommerce design services. Known for being feature-rich, adaptable, and cost-effective, BigCommerce is a leading platform for turnkey eCommerce sites. With BigCommerce, you can quickly and affordably create and expand your online store.",

                "We’ve helped a few companies develop from nothing to something quickly by using eCommerce development services. For BigCommerce integration solutions, you can also employ our professionals. We are well-known for creating BigCommerce solutions for any company that is comprehensive, high-performing, and works across all platforms.",

                "To turn your concept and organization into a lean, mean, and outstanding sales machine, our highly qualified BigCommerce professionals can assist you. All parts of BigCommerce, from catalog building and ERP integration to backend operations and connectivity with other omnichannel platforms, are handled by us."
            ],
        }
    ];

    const processSteps = [
        { title: "Store Strategy & Scoping", desc: "Analyzing your product catalog, buyer personas, shipping logic, and payment requirements." },
        { title: "Conversion-Focused UI/UX", desc: "Designing intuitive product detail pages, search filters, and 1-click checkout experiences." },
        { title: "Custom Development", desc: "Building responsive themes, custom apps, and backend integrations with clean code." },
        { title: "Payment & Logistics Setup", desc: "Integrating secure payment gateways, shipping calculators, and ERP inventory sync." },
        { title: "Rigorous Testing & Security", desc: "Executing end-to-end transaction tests, load testing, and PCI-DSS compliance checks." },
        { title: "Launch & Growth Optimization", desc: "Coordinating zero-downtime cutover, SEO audits, and ongoing conversion rate optimization (CRO)." }
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
        "Conversion-optimized checkout experiences engineered to reduce cart abandonment",
        "Deep experience across Shopify, WooCommerce, and custom headless architectures",
        "Seamless ERP, CRM, inventory management, and 3PL shipping integrations",
        "PCI-compliant payment gateway setups with multi-currency and fraud prevention",
        "Ultra-fast page load times ensuring top Google mobile search rankings",
        "Mobile-first responsive design tailored for frictionless smartphone shopping",
        "Transparent sprint communication with dedicated project managers",
        "Ongoing maintenance, security patch management, and Conversion Rate Optimization (CRO)"
    ];

    const technologies = ["Shopify", "Shopify Plus", "WooCommerce", "WordPress", "Next.js", "Liquid", "PHP", "Node.js", "Stripe API", "PayPal", "Klaviyo", "Algolia", "Tailwind CSS"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="eCommerce Development Services"
                    title="High-Converting eCommerce Development Solutions"
                    description="We build high-performance, secure, and scalable digital storefronts designed to maximize online conversions, streamline operations, and scale global sales."
                    theme={theme}
                    visual={ShopifyVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Engineering Digital Commerce</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Transforming Online Shopping into Seamless Customer Journeys
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Modern digital commerce demands fast page loads, effortless navigation, frictionless checkouts, and seamless inventory management. At The Digital Connect, we engineer custom eCommerce platforms that convert casual browsers into high-lifetime-value customers.</p>
                                <p>Whether you require a customized Shopify Plus store, a flexible WooCommerce platform, a multi-vendor marketplace, or a headless Next.js digital storefront, our eCommerce architects craft solutions built for speed, security, and sustained revenue growth.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Proven eCommerce Development Methodology"
                    eyebrow="Our eCommerce Process"
                    description="A conversion-driven engineering process that guarantees performance, security, and seamless checkouts."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our eCommerce Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Comprehensive eCommerce engineering services tailored to your digital retail model.</p>
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
                                Why Choose The Digital Connect for eCommerce Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Partner with an experienced eCommerce agency focused on measurable revenue growth:</p>
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

export default Ecommerce;
