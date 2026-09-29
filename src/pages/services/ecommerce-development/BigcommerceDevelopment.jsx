import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { BigcommerceVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
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

const BigcommerceDevelopment = () => {
    useSEO({
        title: "BigCommerce Development Company & Services | The Digital Connect",
        description: "Enterprise BigCommerce development, custom Stencil theme design, headless Catalyst Next.js storefronts, and B2B Edition implementations."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Custom BigCommerce Stencil Theme Design",
            icon: <Store className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Design Custom Storefront",
            paragraphs: [
                "Build pixel-perfect, responsive storefronts using BigCommerce's modern Stencil framework and Page Builder engine.",
                "We design high-converting, mobile-first shopping experiences with sub-second page rendering and frictionless checkout pathways."
            ]
        },
        {
            title: "BigCommerce B2B Edition Engineering",
            icon: <Building2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Implement B2B Solutions",
            paragraphs: [
                "Unlock enterprise wholesale capabilities with BigCommerce B2B Edition: custom buyer portals, corporate hierarchy management, tiered contract pricing, and instant quote generation.",
                "Streamline wholesale ordering with automated Net-30 invoicing, punchout catalog support, and sales rep management tools."
            ]
        },
        {
            title: "Headless Commerce with Next.js & Catalyst",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Build Headless Storefront",
            paragraphs: [
                "Decouple your frontend for limitless design flexibility and blazing-fast Core Web Vitals using BigCommerce Catalyst and Next.js GraphQL APIs.",
                "Enjoy total omnichannel freedom, static page generation, and personalized dynamic content delivery worldwide."
            ]
        },
        {
            title: "Multi-Storefront (MSF) Architecture",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            cta: "Configure Multi-Storefront",
            paragraphs: [
                "Power multiple unique brands, international regions, or B2B/B2C segments from a single BigCommerce control panel.",
                "Centralize catalog management, order fulfillment, and analytics while offering tailored local currency and language experiences."
            ]
        },
        {
            title: "ERP, CRM & Marketplace API Integrations",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate Enterprise Systems",
            paragraphs: [
                "Seamlessly synchronize BigCommerce with your mission-critical ERP (NetSuite, SAP, Acumatica), CRM, PIM, and multi-channel marketplaces (Amazon, eBay).",
                "We leverage BigCommerce's robust REST and GraphQL APIs to build real-time bidirectional data synchronization pipelines."
            ]
        },
        {
            title: "Platform Migration to BigCommerce",
            icon: <RefreshCw className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate to BigCommerce",
            paragraphs: [
                "Migrate seamlessly from Magento, Shopify, WooCommerce, or custom platforms to BigCommerce with zero downtime.",
                "Our proven migration protocol ensures 100% data fidelity for product catalogs, historical orders, customer records, and 301 SEO redirects."
            ]
        }
    ];

    const processSteps = [
        { title: "Discovery & Architecture", desc: "Evaluating store requirements, B2B workflows, ERP connectors, and Multi-Storefront structure." },
        { title: "UI/UX & Interactive Design", desc: "Designing responsive storefront mockups, conversion-optimized checkout, and custom widget components." },
        { title: "Stencil / Headless Coding", desc: "Developing custom Stencil themes or Next.js Catalyst frontends connected via BigCommerce GraphQL APIs." },
        { title: "Integration & API Testing", desc: "Syncing ERP/PIM data pipelines, payment gateways, automated tax calculating engines, and carrier APIs." },
        { title: "QA, Security & Performance", desc: "Conducting stress testing, accessibility reviews, Core Web Vitals audits, and end-to-end checkout validation." },
        { title: "Launch & 24/7 SLA Support", desc: "Ensuring smooth DNS cutover, zero-downtime deployment, post-launch monitoring, and conversion optimization." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "High-volume direct-to-consumer digital storefronts with dynamic promotions.", icon: <ShoppingCart /> },
        { name: "Manufacturing & B2B", desc: "Corporate wholesale portals with custom contract price lists and credit lines.", icon: <Briefcase /> },
        { name: "Fashion & Apparel", desc: "Visual storytelling, rich media lookbooks, and multi-variant size matrices.", icon: <Shirt /> },
        { name: "Consumer Electronics", desc: "Complex product specifications, bundle discounts, and trade-in programs.", icon: <MonitorPlay /> },
        { name: "Automotive & Parts", desc: "Year-Make-Model vehicle fitment lookup filters and heavy freight shipping.", icon: <Truck /> },
        { name: "Health & Wellness", desc: "Subscription replenishment orders, HSA/FSA checkout, and compliance.", icon: <HeartPulse /> },
        { name: "Food & Beverage", desc: "Regional cold-chain delivery date selection and recurring gift boxes.", icon: <Apple /> },
        { name: "Sports & Outdoor", desc: "High-traffic flash sales, gear builders, and omnichannel store pickup.", icon: <Dumbbell /> },
        { name: "Home & Furniture", desc: "Large catalog organization, 3D product previews, and room decorators.", icon: <Building2 /> },
        { name: "Beauty & Personal Care", desc: "Custom product sample bundles, loyalty rewards, and influencer shops.", icon: <Palette /> },
        { name: "Industrial & Chemicals", desc: "SDS document attachments, hazmat compliance rules, and quote requests.", icon: <Scale /> },
        { name: "Publishing & Digital Goods", desc: "Instant automated download delivery and license key management.", icon: <GraduationCap /> }
    ];

    const reasons = [
        "Certified BigCommerce partner developers with enterprise implementation experience",
        "Mastery of BigCommerce B2B Edition for complex wholesale & distributor workflows",
        "Expertise in modern Headless Commerce with BigCommerce Catalyst & Next.js",
        "Multi-Storefront (MSF) multi-brand management from a unified backend",
        "Robust enterprise ERP & CRM bidirectional synchronization pipelines",
        "Zero-downtime data migration from Magento, Shopify, and legacy platforms",
        "99.99% cloud uptime, built-in PCI-DSS Level 1 compliance, and zero server maintenance",
        "Dedicated technical support, SLA response guarantees, and continuous growth consulting"
    ];

    const technologies = [
        "BigCommerce", "BigCommerce B2B Edition", "Stencil Framework", "Next.js Catalyst",
        "GraphQL API", "REST API", "Handlebars.js", "TypeScript", "Node.js", "Tailwind CSS", "Cloudflare"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="eCommerce Development"
                    parentRoute="/services/ecommerce-development"
                    eyebrow="Open SaaS Commerce"
                    title="Enterprise BigCommerce Development Services"
                    description="Scale your retail and wholesale enterprise with powerful BigCommerce solutions. The Digital Connect creates high-converting Stencil storefronts, composable headless Next.js architectures, and complex B2B wholesale portals."
                    theme={theme}
                    visual={BigcommerceVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Open SaaS Architecture</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Scaling Modern Commerce with the Flexibility of BigCommerce
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>BigCommerce combines the best of SaaS reliability with open-API composability, eliminating server maintenance and high infrastructure costs while giving developers complete freedom to innovate. At The Digital Connect, our certified BigCommerce engineers build cutting-edge digital storefronts that power seamless B2C retail and complex B2B wholesale commerce.</p>
                                <p>Whether you are looking to launch a headless storefront with Next.js Catalyst, implement Multi-Storefront (MSF) for international expansion, or integrate your store with NetSuite or SAP ERPs, we deliver robust solutions designed for sustainable digital growth.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our BigCommerce Development Process"
                    eyebrow="Agile Delivery"
                    description="From technical discovery to global launch, our structured delivery model ensures rapid implementation and flawless execution."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EBF3FF] text-[#0A58CA] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our BigCommerce Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our specialized BigCommerce development services built to accelerate enterprise eCommerce growth.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F0F6FF]`}
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
                                            <div className="absolute -inset-4 sm:-inset-6 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
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
                            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
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
                <section className="py-20 lg:py-32 bg-[#F4F8FD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for BigCommerce Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We deliver enterprise scalability, conversion excellence, and seamless system integrations without SaaS complexity.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reasons.map((r, i) => (
                                    <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Scale Your BigCommerce Store?"
                    subtitle="Contact our certified BigCommerce experts today for an architectural consultation, scoping session, and customized proposal."
                />
            </div>
        </PageTransition>
    );
};

export default BigcommerceDevelopment;
