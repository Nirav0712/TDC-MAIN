import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { OpencartVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
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

const OpencartDevelopment = () => {
    useSEO({
        title: "OpenCart Development Company & Services | The Digital Connect",
        description: "Custom OpenCart eCommerce development, bespoke theme design, custom module engineering, and third-party integrations for scalable online stores."
    });

    const theme = { accent: "text-cyan-600", bg: "bg-cyan-500/20", softBg: "bg-cyan-50" };

    const services = [
        {
            title: "Custom OpenCart Store Setup & Theme Design",
            icon: <Store className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Build OpenCart Store",
            paragraphs: [
                "Launch lightning-fast, visually striking online stores with bespoke OpenCart themes engineered for maximum buyer engagement and checkout conversions.",
                "We craft responsive, mobile-first designs with intuitive navigation, dynamic product filters, and 1-page checkout flows."
            ]
        },
        {
            title: "Custom OpenCart Extension & Module Engineering",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Custom Modules",
            paragraphs: [
                "Extend your store's native capabilities with custom OCMOD / VQMOD extensions that integrate cleanly without overriding core engine files.",
                "From custom shipping rule calculators to advanced inventory management and CRM connectors, we build modules that solve your exact business needs."
            ]
        },
        {
            title: "Multi-Store & Multi-Currency Architecture",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Configure Multi-Store",
            paragraphs: [
                "Manage multiple international storefronts, regional product catalogs, localized currencies, and tax rules from a single centralized OpenCart administrative panel.",
                "Ideal for brands operating multiple niche stores or expanding across cross-border eCommerce territories."
            ]
        },
        {
            title: "Payment Gateway & Shipping Integration",
            icon: <CreditCard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate Payment & Shipping",
            paragraphs: [
                "Integrate global and regional payment gateways (Stripe, PayPal, Authorize.Net, Razorpay, Klarna) and automated real-time shipping rate APIs (FedEx, UPS, DHL).",
                "Ensure smooth, secure, and PCI-compliant checkout experiences that minimize cart abandonment."
            ]
        },
        {
            title: "OpenCart Speed Optimization & Security Hardening",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Store Performance",
            paragraphs: [
                "Turbocharge your OpenCart website load speed with database query optimization, server-side caching, asset minification, and image compression.",
                "We install firewall guards, SSL encryption, database sanitization, and automated malware monitoring to protect your store."
            ]
        },
        {
            title: "Migration to OpenCart & Version Upgrades",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade OpenCart Store",
            paragraphs: [
                "Upgrade your legacy OpenCart 1.5/2.x/3.x store to OpenCart 4.x seamlessly, preserving all products, categories, customer records, and historical order data.",
                "We maintain full SEO meta data, 301 URL redirects, and search engine ranking authority throughout the migration."
            ]
        }
    ];

    const processSteps = [
        { title: "Store Scoping & Architecture", desc: "Evaluating product catalog schemas, third-party payment gateways, shipping rules, and hosting specs." },
        { title: "UI/UX & Wireframing", desc: "Designing intuitive storefront mockups, product detail pages, and seamless single-page checkout flows." },
        { title: "OpenCart Module & Theme Coding", desc: "Developing custom modules with clean OCMOD architecture and responsive HTML5/CSS3 templates." },
        { title: "Testing, QA & Security Audit", desc: "Testing transaction flows, payment security, cross-device responsiveness, and load concurrency." },
        { title: "Deployment & Store Launch", desc: "Configuring production hosting, SSL certificates, transactional email servers, and DNS setup." },
        { title: "Ongoing Support & Optimization", desc: "Routine module updates, database backups, security patches, and conversion rate enhancement." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Scalable online stores with rich product catalogs and multi-attribute filters.", icon: <ShoppingCart /> },
        { name: "Fashion & Apparel", desc: "Modern lookbooks, interactive size guides, and visual color variant selectors.", icon: <Shirt /> },
        { name: "Electronics & Gadgets", desc: "Technical spec comparison sheets, warranty add-ons, and bundle offers.", icon: <MonitorPlay /> },
        { name: "Health & Nutrition", desc: "Dietary supplement catalogs, customer reviews, and repeat order reordering.", icon: <HeartPulse /> },
        { name: "Auto Parts & Accessories", desc: "Vehicle make and model filter systems and inventory management.", icon: <Truck /> },
        { name: "Beauty & Cosmetics", desc: "Clean, high-impact product presentation and gift-with-purchase modules.", icon: <Palette /> },
        { name: "Sports & Fitness", desc: "Gear catalogs, athletic equipment, and dynamic seasonal promotion banners.", icon: <Dumbbell /> },
        { name: "Home & Kitchen", desc: "Interior accessories, multi-angle imagery, and flat-rate shipping calculations.", icon: <Building2 /> },
        { name: "Gourmet Foods & Grocery", desc: "Local delivery date pickers, fresh product inventory, and temperature-safe shipping.", icon: <Apple /> },
        { name: "Toys & Baby Products", desc: "Age-category filters, gift registries, and secure checkout protections.", icon: <Sparkles /> },
        { name: "Jewelry & Luxury Goods", desc: "High-resolution zoom galleries, custom engraving options, and certificate downloads.", icon: <ShieldCheck /> },
        { name: "Wholesale & B2B Portals", desc: "Minimum order quantities, bulk tier discounts, and wholesale tax exemptions.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Specialized OpenCart developers with proven expertise across OC 2.x, 3.x, and 4.x",
        "Clean OCMOD / VQMOD extension coding that avoids core file modifications",
        "Multi-store and multi-language setups managed through a unified dashboard",
        "High-performance caching and sub-second page loading speed optimization",
        "Comprehensive payment gateway and global carrier shipping integrations",
        "Safe version upgrade pipelines with zero product or customer data loss",
        "Robust cybersecurity hardening and automated database backup routines",
        "Transparent project milestones and dedicated post-launch maintenance SLAs"
    ];

    const technologies = [
        "OpenCart 4.x", "OpenCart 3.x", "PHP 8+", "MySQL", "OCMOD", "VQMOD",
        "Bootstrap", "jQuery", "REST API", "Stripe API", "PayPal SDK", "Cloudflare"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="eCommerce Development"
                    parentRoute="/services/ecommerce-development"
                    eyebrow="Open Source Commerce"
                    title="Custom OpenCart eCommerce Development Services"
                    description="Build agile, lightweight, and high-performing eCommerce websites with custom OpenCart development. The Digital Connect creates bespoke themes, robust modules, and seamless third-party integrations that turn casual visitors into loyal customers."
                    theme={theme}
                    visual={OpencartVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Agile & Cost-Effective Commerce</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Empowering Digital Retailers with Flexible OpenCart Engineering
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>OpenCart is renowned for its lightweight architecture, exceptional speed, and remarkable versatility. It provides growing eCommerce businesses with full ownership of their storefronts without heavy recurring platform license fees. At The Digital Connect, we harness OpenCart's robust MVC architecture to craft responsive, conversion-focused online stores tailored to your target audience.</p>
                                <p>From bespoke theme design and custom OCMOD extension engineering to multi-currency payment setups and legacy database migrations, our technical team ensures your OpenCart platform runs smoothly, securely, and at peak performance.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our OpenCart Development Process"
                    eyebrow="Proven Methodology"
                    description="A systematic development workflow focused on delivering fast, secure, and easily manageable online storefronts."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our OpenCart Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our tailored OpenCart services designed to elevate your online retail brand.</p>
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

                {/* Reasons to Choose Us */}
                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for OpenCart Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We create agile, fast-loading, and high-conversion storefronts designed to scale with your sales volume.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reasons.map((r, i) => (
                                    <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-200 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build Your Custom OpenCart Store?"
                    subtitle="Connect with our OpenCart specialists today for a free architecture review, timeline estimate, and project quote."
                />
            </div>
        </PageTransition>
    );
};

export default OpencartDevelopment;
