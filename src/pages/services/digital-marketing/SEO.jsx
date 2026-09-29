import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { SEOVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    MapPin, RefreshCw, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SEO = () => {
    useSEO({
        title: "Professional SEO Services Company | Search Engine Optimization | The Digital Connect",
        description: "Dominate Google search results with professional SEO services. The Digital Connect delivers technical SEO audits, semantic keyword optimization, link building, and local SEO."
    });

    const theme = { accent: "text-cyan-600", bg: "bg-cyan-500/20", softBg: "bg-cyan-50" };

    const services = [
        {
            title: "Local SEO Service",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Fix Technical SEO",
            paragraphs: [
                "Local SEO is all about boosting your local business’s internet visibility and reaching out to the people who live in your area with your goods or services. Rather than targeting the whole country, local SEO targets a particular location. We know how to optimize your website, including keywords, frame headers, meta titles, meta descriptions, and images.",

                "Search engine rankings are often influenced by how effectively your Google My Business page is optimized. It is where you give your location, company hours, a brief description, and a few images. When a user types a search query, the search engine’s results pages consider proximity, relevancy, and popularity before selecting a firm.",

                "We utilize our in-depth skills to help you increase your business’s visibility in the local vicinity. Our local SEO service provides reliable and targeted results to all clients. We optimize your website for better visibility and access to all different search engines."
            ],
        },
        {
            title: "E-commerce SEO Service",
            icon: <FileText className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize On-Page SEO",
            paragraphs: [
                "E-commerce SEO refers to the practice of improving a company’s online shop. eCommerce SEO is the umbrella term for all of the subsequent SEO developments. Every day, search engines answer millions of inquiries related to eCommerce. Your website’s traffic and ranking will rise in less time if you use our eCommerce SEO services. Indeed, we are a one-stop solution for all your SEO needs.",

                "Being a professional SEO company, we have extensive expertise in working with top brands and can assist you in getting the top ranking on SERPs. We are committed to offering result-oriented eCommerce SEO to drive growth, increase conversion, and generate organic traffic and sales.",

                "We help you improve your eCommerce business presence with the best content and website optimization strategy recommended by search engines. We also deliver relevant information to your customers using our appropriate SEO content tactics. So don’t worry; you will always get committed and affordable eCommerce SEO services with us."
            ],
        },
        {
            title: "E-commerce SEO Service",
            icon: <MapPin className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            cta: "Dominate Local Map Pack",
            paragraphs: [
                "E-commerce SEO refers to the practice of improving a company’s online shop. eCommerce SEO is the umbrella term for all of the subsequent SEO developments. Every day, search engines answer millions of inquiries related to eCommerce. Your website’s traffic and ranking will rise in less time if you use our eCommerce SEO services. Indeed, we are a one-stop solution for all your SEO needs.",

                "Being a professional SEO company, we have extensive expertise in working with top brands and can assist you in getting the top ranking on SERPs. We are committed to offering result-oriented eCommerce SEO to drive growth, increase conversion, and generate organic traffic and sales.",

                "We help you improve your eCommerce business presence with the best content and website optimization strategy recommended by search engines. We also deliver relevant information to your customers using our appropriate SEO content tactics. So don’t worry; you will always get committed and affordable eCommerce SEO services with us."
            ],
        },
        {
            title: "eCommerce SEO & Faceted Navigation",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Boost Store Rankings",
            paragraphs: [
                "Drive high-intent organic shoppers directly to product and category pages across Shopify, Magento, WooCommerce, or custom storefronts.",
                "We optimize faceted filters, canonicalization of variant URLs, rich merchant schema, and write high-converting category copy."
            ]
        },
        {
            title: "International SEO Service",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build Domain Authority",
            paragraphs: [
                "You’ll need to use global SEO techniques to increase your website’s organic traffic from other countries and languages. To succeed at international SEO, you must cater to your target market’s cultural context and enable them to make purchases in their currency and language.",

                "Whether you want to conduct local keyword research in the international market or maximize your search engine rankings, our global SEO experts are here to assist you with their robust knowledge. Our international SEO approach will boost your brand’s visibility among global customers. Being a professional SEO company, we know how to make your business global and bring profits.",

                "As the best SEO Company, we are committed to providing a complete set of integrated services to drive more growth for your company. Our professional SEO services are tailored to your business needs from SEO consultation and management."
            ],
        },
        {
            title: "SEO Consulting",
            icon: <Building2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            cta: "Scale Enterprise SEO",
            paragraphs: [
                "A strong presence on search engines is vital for all businesses as it helps you get more visibility, profits, and ROI in less time and effort. Your website needs to be optimized for search engines using on-page optimization or on-site SEO. Our experienced SEO consultants optimize your website as per the modern SEO approach and search engine algorithm.",

                "We work with the motto to increase your business’s visibility so more customers can grab your products and services. As the best SEO company, we create high-quality links on high DA and PA websites. Moreover, we implement the best-in-class SEO strategies to boost your website’s ranking and brand’s presence in today’s highly competitive market.",

                "Using our SEO consulting service, you can leverage the benefits of experienced digital marketers, business analysts, project managers, and content developers. We empower our clients to achieve the desired results and rank on the SERP."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Groundwork",
            desc: "Researching and analyzing the clients’ industry & their competitors to know KPIs & project management to ensure the project’s success."
        },
        {
            title: "Objective & Scope",
            desc: "We communicate with our clients, know their needs, and suggest the best solution to get the desired results. In addition, our SEO experts help you know the overall scope of your tasks."
        },
        {
            title: "Planning & Scheduling",
            desc: "We analyze every detail of the project schedule, like the required number of resources, tasks, challenges, and associated milestones. We identify keywords to optimize content and the website."
        },
        {
            title: "Submission to Search Engines",
            desc: "We submit the optimized pages to the search engines. Our experienced SEO experts implement the best strategies to rank your website on different search engines."
        },
        {
            title: "QA & Testing",
            desc: "We test everything before and after submitting the website to the search engines. Furthermore, our team makes required enhancements per the search engine’s algorithm."
        },
        {
            title: "Help & Support",
            desc: "Being a professional SEO company, we offer consistent support to our clients and resolve all their issues in no time. We review the ranking continuously and work to improve it."
        }
    ];

    const industries = [
        { name: "eCommerce & D2C", desc: "Category rankings, product rich snippets, and high-intent shopper traffic.", icon: <ShoppingCart /> },
        { name: "B2B SaaS & Tech", desc: "High-intent bottom-funnel software keyword dominance and SQL generation.", icon: <Cloud /> },
        { name: "Healthcare & Clinics", desc: "Doctor profiles, patient condition pages, and local Google Map Pack rankings.", icon: <HeartPulse /> },
        { name: "Legal & Law Firms", desc: "High-value practice area search rankings and localized client acquisition.", icon: <Scale /> },
        { name: "Real Estate & Housing", desc: "Neighborhood listing portals, property market keywords, and agent hubs.", icon: <Building2 /> },
        { name: "Fintech & Banking", desc: "Authoritative financial guides, loan calculators, and compliance-first SEO.", icon: <Landmark /> },
        { name: "Education & Universities", desc: "Course curriculum pages, student enrollment funnels, and program search.", icon: <GraduationCap /> },
        { name: "Logistics & Freight", desc: "Supply chain service keywords and multi-location depot visibility.", icon: <Truck /> },
        { name: "Automotive & Dealerships", desc: "New and pre-owned inventory search and localized dealership SEO.", icon: <Navigation /> },
        { name: "Hospitality & Tourism", desc: "Direct hotel booking optimization, travel guides, and excursion tours.", icon: <Globe /> },
        { name: "Fashion & Apparel", desc: "Trend keyword clusters, visual image search optimization, and lookbooks.", icon: <Shirt /> },
        { name: "Manufacturing & Industrial", desc: "B2B equipment specification queries, RFQ forms, and distributor portals.", icon: <Briefcase /> }
    ];

    const reasons = [
        "100% white-hat, ethical SEO practices that permanently protect your site from Google penalties",
        "Focus on commercial, high-intent keywords that drive measurable inbound sales pipeline revenue",
        "Deep technical audits resolving foundational architecture, crawl budget, and Core Web Vitals issues",
        "Transparent real-time Looker Studio reporting tracking ranking movements and organic revenue",
        "High-quality editorial link building from trusted, niche-relevant high-authority websites",
        "Proven experience scaling organic traffic for B2B SaaS, enterprise platforms, and eCommerce",
        "Proactive continuous adaptation to major Google Core and helpful content algorithm updates",
        "Dedicated SEO strategist providing direct weekly communication and roadmap consultation"
    ];

    const technologies = [
        "Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Google Analytics 4",
        "SurferSEO", "Schema.org", "Looker Studio", "Sitebulb", "PageSpeed Insights", "HubSpot"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Digital Marketing"
                    parentRoute="/services/digital-marketing"
                    eyebrow="Sustainable Organic Visibility"
                    title="Professional Search Engine Optimization (SEO) Services"
                    description="Dominate Google search results, capture high-intent organic traffic, and establish long-term market authority. The Digital Connect engineers technical SEO audits, semantic keyword strategies, and high-authority link acquisition that compound revenue."
                    theme={theme}
                    visual={SEOVisual}
                    ctaText="GET FREE SEO AUDIT"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Sustainable Organic Growth</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Proven SEO Strategies Engineered for Long-Term Search Engine Dominance
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Over 93% of all global web sessions begin with a search engine query. If your website is not commanding page-one real estate for high-intent industry searches, your competitors are capturing your potential customers. At The Digital Connect, we deliver ethical, data-backed SEO services that generate compounding organic growth.</p>
                                <p>Our senior SEO specialists conduct exhaustive technical audits, resolve indexation bottlenecks, map topical semantic keyword clusters, optimize on-page content for Google's E-E-A-T guidelines, and execute authoritative digital PR campaigns to position your brand as the undisputed authority in your niche.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Professional SEO Growth Lifecycle"
                    eyebrow="Agile SEO Process"
                    description="From comprehensive site audits and keyword intent mapping to technical on-page execution, link building, and Looker Studio tracking."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-cyan-50 text-cyan-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-cyan-200">
                                Empower Your Brand with Organic SEO
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Professional SEO Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum search engine optimization capabilities engineered to drive consistent organic pipeline revenue.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F2FCFD]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-cyan-600 mt-4 mb-6"></div>
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
                        title="SEO Tools, Crawlers & Analytics Platforms"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Verticals We Rank</h3>
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
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Professional SEO
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine deep technical audit expertise with authoritative digital PR to build compounding search dominance.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
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
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Command Page One of Google?"
                    subtitle="Share your website URL with our senior SEO architects and receive a complimentary technical audit & ranking growth roadmap within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default SEO;
