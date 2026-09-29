import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { PerformanceMarketingVisual } from '../../components/services/subservices/visuals/VisualsSoftware_Marketing';
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

const DigitalMarketing = () => {
    useSEO({
        title: "Full-Service Digital Marketing Agency | SEO, PPC & Growth | The Digital Connect",
        description: "Scale your customer acquisition with full-service digital marketing. The Digital Connect delivers high-ROI SEO, PPC advertising, social media marketing, and content writing strategies."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Professional SEO Services",
            icon: <Search className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=800",
            cta: "Explore SEO Services",
            link: "/services/digital-marketing/seo",
            paragraphs: [
                "SEO is critical for your website to appear in online searches. Prospective buyers may never notice your digital marketing efforts if your SEO isn’t up to par. It is because search engines can determine which websites are shown when consumers are conducting web searches. Complex algorithms assess a wide range of factors to determine whether or not your website is relevant to the searcher’s needs.",

                "Our digital marketing consultancy provides in-depth keyword research, on-page & off-page optimization, and Google Search Console tracking to ensure you get the best possible results. We use these methods to drive high-quality leads and visitors and enhance your conversions as part of our digital marketing services.",

                "Our technical SEO professionals perform crawl error reports, verify your HTTPS status codes, improve your website performance, audit redirects, and eradicate duplicate content. Our online marketing company may also add organized data markup to your site and assist with site transfer, depending on your objectives."
            ],
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            icon: <Target className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore PPC Services",
            link: "/services/digital-marketing/ppc",
            paragraphs: [
                "With a data-driven PPC campaign developed by our online marketing company, you’ll be able to get to your customers swiftly and precisely. Pay-per-click (PPC) advertisement is a short-term and long-term content marketing approach for positioning your brand at the top of SERPs. You won’t have to wait for your rankings to rise; you’ll have immediate visibility and access to new customers.",

                "As Google Premier Partners, the PPC analysts at The Digital Connect are fully qualified to handle your campaigns. A PPC team assisted by Google and Microsoft improves your campaigns, cuts your PPC costs, and raises your ROI from various digital marketing initiatives.",

                "Our PPC Specialists are qualified in AdWords, so you can rest confident that your campaign is in the hands of experts. Our team tailors your ad copy, and your ROI is tracked for each keyword. We also optimize your bid techniques and device targeting approaches."
            ],
        },
        {
            title: "Social Media Marketing (SMM)",
            icon: <MessageSquare className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Social Media Services",
            link: "/services/digital-marketing/social-media",
            paragraphs: [
                "Considering that the average daily time spent on social media is three hours, it’s easy to see how social media marketing may help your business generate more leads and connect with your local community. You’re ready to take your business to the next level by utilizing social media. We create social media campaigns to assist your company in expanding and interacting with its target audience.",

                "Our digital marketing services analyze your target audience’s surfing habits, compare them to your competitors, and develop a strategy to meet their needs. We create customized social media management and paid advertising plans based on your company’s unique needs.",

                "When we work with you as a digital marketing consultancy, we would love to know your immediate and long-term goals – acquiring new customers, increasing engagement, or developing awareness. Since we know how to establish a social media presence, we can help you get more exposure on the many platforms you use."
            ],
        },
        {
            title: "Content Writing & Marketing Services",
            icon: <FileText className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Content Services",
            link: "/services/digital-marketing/content-marketing",
            paragraphs: [
                "Several factors can influence the success of your content marketing plan. What’s the best option for you? What can you do to meet the demands of your clients? We’ll develop a strategy that works best for you with your input. Good website content is essential to your SEO because it attracts most of your visitors. With The Digital Connect, you can rest assured that experts will write your content.",

                "As a full-service digital marketing service provider, The Digital Connect’s services include planning, development, production, distribution, and analysis. An expert online marketing company like us can help you develop relevant, distinctive and consistent content to help you grow your brand and establish your firm.",

                "To guarantee that our writing is up to Google’s requirements, the content professionals of our digital marketing consultancy remain updated on the newest industry news and trends. We craft catchy headlines, use powerful keywords, and include eye-catching graphics into your content to make it more readable for your target audience."
            ],
        }
    ];

    const processSteps = [
        { title: "Market & Competitor Audit", desc: "Analyzing your competitive landscape, keyword opportunities, customer search intent, and existing acquisition funnels." },
        { title: "360° Growth Strategy", desc: "Developing a tailored multichannel marketing plan with clear KPIs, target CPA goals, and revenue milestones." },
        { title: "Campaign Launch & Creative", desc: "Executing technical on-page SEO, high-converting ad copy, visual creative assets, and content funnels." },
        { title: "Conversion Tracking Setup", desc: "Configuring server-side Google Tag Manager, GA4, and Meta Pixel attribution for 100% accurate tracking." },
        { title: "A/B Testing & Optimization", desc: "Continuously testing ad creatives, landing page copy, and keyword bids to drive down customer acquisition costs." },
        { title: "Transparent Reporting & ROI", desc: "Delivering real-time data dashboards and monthly strategic review meetings focused on bottom-line revenue metrics." }
    ];

    const industries = [
        { name: "eCommerce & D2C", desc: "High-ROAS shopping campaigns and organic product catalog visibility.", icon: <ShoppingCart /> },
        { name: "B2B SaaS & Tech", desc: "Account-Based Marketing (ABM) and high-intent SQL lead generation.", icon: <Cloud /> },
        { name: "Healthcare & Clinics", desc: "HIPAA-compliant patient acquisition and local Google Map Pack SEO.", icon: <HeartPulse /> },
        { name: "Real Estate & Housing", desc: "Geo-targeted lead generation for luxury developments and brokerages.", icon: <Building2 /> },
        { name: "Fintech & Banking", desc: "Trust-building thought leadership and compliance-approved paid media.", icon: <Landmark /> },
        { name: "Legal & Professional", desc: "High-intent search ads and local authority ranking for law practices.", icon: <Scale /> },
        { name: "Education & EdTech", desc: "Enrollment generation campaigns and engaging social storytelling.", icon: <GraduationCap /> },
        { name: "Logistics & Freight", desc: "B2B shipper acquisition and supply chain thought leadership.", icon: <Truck /> },
        { name: "Automotive & Mobility", desc: "Dealership showroom foot-traffic ads and vehicle inventory search.", icon: <Navigation /> },
        { name: "Fashion & Lifestyle", desc: "Influencer marketing, TikTok/Instagram Reels, and visual lookbooks.", icon: <Shirt /> },
        { name: "Hospitality & Travel", desc: "Direct booking acquisition campaigns and destination travel guides.", icon: <Globe /> },
        { name: "Fitness & Wellness", desc: "Membership sign-up funnels, retargeting, and brand challenges.", icon: <Dumbbell /> }
    ];

    const reasons = [
        "Data-driven marketing strategies engineered to maximize customer lifetime value and ROAS",
        "Dedicated multi-channel specialists spanning Technical SEO, Google Ads, Meta, and Copywriting",
        "100% transparent live Looker Studio reporting tracking pipeline revenue and conversion metrics",
        "Strict adherence to white-hat SEO practices protecting your brand from search engine penalties",
        "Fast creative turnaround for high-converting ad banners, social Reels, and landing page copy",
        "Advanced server-side tracking (GA4, CAPI) ensuring zero signal loss across all ad channels",
        "Proactive monthly strategic consultation and continuous growth roadmap adjustments",
        "Proven track record scaling B2B, eCommerce, and Enterprise brands globally"
    ];

    const technologies = [
        "Google Ads", "Google Analytics 4", "Meta Ads Manager", "LinkedIn Campaign Manager",
        "Ahrefs", "SEMrush", "Google Search Console", "Google Tag Manager",
        "SurferSEO", "Looker Studio", "HubSpot", "Klaviyo", "Hotjar", "Shopify"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Our Services"
                    parentRoute="/services"
                    eyebrow="Data-Driven Growth Agency"
                    title="Enterprise Digital Marketing & Growth Services"
                    description="Accelerate your revenue growth with full-funnel digital marketing strategies. The Digital Connect combines technical SEO, high-converting PPC advertising, social media storytelling, and authoritative content writing to scale your customer acquisition."
                    theme={theme}
                    visual={PerformanceMarketingVisual}
                    ctaText="GET YOUR GROWTH PLAN"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Digital Marketing Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Scalable Customer Acquisition Engineered for Sustainable Market Leadership
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Modern digital marketing is no longer about fragmented vanity metrics—it is about building an integrated acquisition engine that consistently turns anonymous prospects into loyal, high-value customers. From capturing active intent on search engines to building brand affinity on social feeds, every touchpoint must work in harmony.</p>
                                <p>At The Digital Connect, our growth strategists, performance marketers, and creative copywriters engineer full-funnel marketing campaigns tailored to your specific unit economics. We combine deep technical SEO with high-ROI paid media and compelling brand storytelling to drive predictable, profitable pipeline revenue.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Digital Marketing Growth Lifecycle"
                    eyebrow="Agile Growth Process"
                    description="From audience research and strategy formulation to multi-channel execution, attribution tracking, and ongoing CRO optimization."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-6 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-blue-50 text-blue-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-blue-200">
                                Empower Your Brand with Digital Marketing
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Digital Marketing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum marketing capabilities built to drive qualified leads, customer acquisition, and brand dominance.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F6FAFE]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-blue-600 mt-4 mb-6"></div>
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
                        title="Marketing Platforms, Analytics & SEO Tools"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Verticals We Scale</h3>
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
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Digital Marketing
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine analytical rigor with creative execution to build compounding growth engines for ambitious brands.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
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
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Scale Your Online Revenue & Customer Acquisition?"
                    subtitle="Share your growth targets with our digital marketing directors and receive a free multi-channel audit & strategy proposal within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default DigitalMarketing;
