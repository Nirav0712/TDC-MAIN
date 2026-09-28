import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { MagentoVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Settings, Cpu, Terminal, Shield, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const MagentoDevelopment = () => {
    useSEO({
        title: "Magento Development Company | Adobe Commerce Services | The Digital Connect",
        description: "Scale your online enterprise with custom Magento 2 and Adobe Commerce development services. We build high-speed, secure, multi-store B2B and B2C platforms."
    });

    const theme = { accent: "text-orange-600", bg: "bg-orange-500/20", softBg: "bg-orange-50" };

    const services = [
        {
            title: "Custom Magento 2 Store Development",
            icon: <Store className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Build Magento Store",
            paragraphs: [
                "Build scalable, high-converting digital storefronts tailored to your unique brand identity with custom Magento 2 architecture.",
                "Our certified Magento developers build customized themes, optimized checkout funnels, and responsive layouts that maximize conversion rates."
            ]
        },
        {
            title: "Adobe Commerce B2B & Wholesale Portals",
            icon: <Building2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore B2B Solutions",
            paragraphs: [
                "Streamline wholesale operations with enterprise B2B capabilities including custom pricing tiers, corporate account hierarchies, punch-out catalogs, and rapid quote generation.",
                "We configure frictionless bulk ordering workflows, net-payment terms, and multi-warehouse fulfillment logic."
            ]
        },
        {
            title: "Custom Extension & API Integration",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate APIs & Extensions",
            paragraphs: [
                "Connect Magento seamlessly with your enterprise ERP, CRM (Salesforce, HubSpot), PIM systems, payment gateways, and automated fulfillment networks.",
                "We engineer clean, modular Magento extensions following strict Adobe architectural guidelines to prevent core code bloat."
            ]
        },
        {
            title: "Headless Commerce & PWA Studio",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Build Headless PWA",
            paragraphs: [
                "Deliver lightning-fast app-like shopping experiences using Magento PWA Studio, Next.js, and GraphQL API storefronts.",
                "Benefit from sub-second page loads, offline browsing, mobile push notifications, and superior Google Core Web Vitals rankings."
            ]
        },
        {
            title: "Performance Optimization & Security Audits",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Magento Speed",
            paragraphs: [
                "Accelerate slow Magento stores with advanced Varnish caching, Redis session management, Elasticsearch indexing, and query tuning.",
                "We perform comprehensive security patches, 2FA enforcement, and PCI-DSS compliance audits to safeguard transactions."
            ]
        },
        {
            title: "Magento Migration & Version Upgrades",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade to Latest Magento",
            paragraphs: [
                "Migrate legacy Magento 1 or monolithic platforms to the latest Adobe Commerce edition with zero catalog or customer data loss.",
                "Our structured migration process preserves your SEO rankings, customer historical orders, product URL structures, and backlink equity."
            ]
        }
    ];

    const processSteps = [
        { title: "Discovery & Architecture", desc: "Analyzing SKU complexity, third-party ERP integrations, B2B user stories, and hosting architecture." },
        { title: "UI/UX & Interactive Design", desc: "Designing conversion-optimized checkout funnels and responsive, brand-aligned visual layouts." },
        { title: "Module & API Engineering", desc: "Developing custom modules, API middleware, and catalog structures using standard Magento best practices." },
        { title: "QA, Load & Security Testing", desc: "Executing automated stress tests, penetration audits, and cross-browser functional testing." },
        { title: "Staging & Production Launch", desc: "Conducting seamless production deployment, database sync, and zero-downtime DNS cutover." },
        { title: "24/7 SLA & Growth Optimization", desc: "Continuous monitoring, security patch application, server scaling, and conversion rate optimization." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Multi-storefront digital commerce platforms with high SKU volume.", icon: <ShoppingCart /> },
        { name: "Fashion & Apparel", desc: "Visual-rich catalogs with dynamic swatch pickers and size calculators.", icon: <Shirt /> },
        { name: "Manufacturing & Wholesale", desc: "Complex B2B tiered pricing, custom quotes, and account credit terms.", icon: <Briefcase /> },
        { name: "Health & Beauty", desc: "Subscription repeat ordering and personalized beauty consultations.", icon: <HeartPulse /> },
        { name: "Automotive & Parts", desc: "Year-Make-Model search filters and vehicle catalog compatibility.", icon: <Truck /> },
        { name: "Consumer Electronics", desc: "Product comparison grids, warranty add-ons, and bundle configurators.", icon: <MonitorPlay /> },
        { name: "Food & Beverage", desc: "Perishable inventory routing, recurring delivery schedules, and cold shipping.", icon: <Apple /> },
        { name: "Sports & Fitness", desc: "High-volume seasonal promotional flash sales and athletic merchandise.", icon: <Dumbbell /> },
        { name: "Home & Furniture", desc: "High-ticket item financing, room planners, and heavy freight shipping.", icon: <Building2 /> },
        { name: "Fintech & Payments", desc: "Multi-currency checkout, localized payment gateways, and crypto rails.", icon: <Landmark /> },
        { name: "Education & Publishing", desc: "Digital book downloads, DRM protection, and recurring course access.", icon: <GraduationCap /> },
        { name: "Logistics & Distribution", desc: "Multi-warehouse stock allocation and automated 3PL carrier sync.", icon: <Navigation /> }
    ];

    const reasons = [
        "Certified Adobe Commerce & Magento 2 technical architects and developers",
        "Deep expertise in complex B2B wholesale portals and multi-store management",
        "Sub-second load time optimizations with Varnish, Redis, and Elasticsearch",
        "Seamless ERP, CRM, WMS, and payment gateway enterprise integrations",
        "Headless commerce & PWA Studio engineering for app-like web storefronts",
        "Rigorous PCI-DSS compliance audits and proactive security patch management",
        "Zero-data-loss migration pipelines preserving all SEO rankings and customer history",
        "Dedicated post-launch enterprise SLA support and continuous CRO optimization"
    ];

    const technologies = [
        "Magento 2", "Adobe Commerce", "PHP 8.2+", "MySQL", "Elasticsearch", "OpenSearch",
        "Redis", "Varnish Cache", "GraphQL", "PWA Studio", "Next.js", "Docker", "AWS", "Cloudflare"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="eCommerce Development"
                    parentRoute="/services/ecommerce-development"
                    eyebrow="Enterprise Commerce Architecture"
                    title="Enterprise Magento & Adobe Commerce Development Services"
                    description="Supercharge your online revenue with enterprise-grade Magento 2 storefronts. The Digital Connect engineers scalable B2B & B2C eCommerce platforms designed for speed, massive SKU volumes, and seamless third-party ERP integration."
                    theme={theme}
                    visual={MagentoVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Commerce Powerhouse</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering High-Performance Magento Ecosystems for Global Brands
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Magento (Adobe Commerce) remains the gold standard for high-volume enterprises requiring complete architectural control, limitless customization, and multi-storefront scalability. At The Digital Connect, our certified Magento developers build robust, feature-rich eCommerce platforms that handle millions of SKUs, complex pricing logic, and high-concurrency peak sales events without friction.</p>
                                <p>Whether you require a custom Magento 2 B2C storefront, a multi-national wholesale B2B portal, a headless PWA implementation, or seamless synchronization with legacy ERP systems, we engineer solutions designed to maximize conversion rates and operational efficiency.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Magento Development Lifecycle"
                    eyebrow="Agile Commerce Process"
                    description="From architecture planning to enterprise deployment, our structured workflow guarantees code quality, security, and peak performance."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#FFF4ED] text-orange-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Magento Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our comprehensive Magento and Adobe Commerce capabilities built for high-scale digital commerce.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFF9F5]`}
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
                                            <div className="absolute -inset-4 sm:-inset-6 bg-orange-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
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
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
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

                {/* Reasons to Choose Us */}
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Magento Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine enterprise architecture with conversion-focused UX to build high-ROI digital commerce platforms.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reasons.map((r, i) => (
                                    <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-orange-200 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <p className="text-slate-700 font-medium text-sm leading-relaxed">{r}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Build a High-Converting Magento Store?"
                    subtitle="Share your project requirements with our certified Magento developers and get a free technical roadmap & quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default MagentoDevelopment;
