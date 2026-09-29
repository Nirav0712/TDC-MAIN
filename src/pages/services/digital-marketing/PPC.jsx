import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { PPCVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    MousePointerClick, RefreshCw, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PPC = () => {
    useSEO({
        title: "PPC Management Services | Google Ads & Paid Media Agency | The Digital Connect",
        description: "Scale qualified leads and eCommerce revenue with high-ROI PPC management. We manage Google Ads, Performance Max, Meta Ads, and LinkedIn B2B campaigns."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Search Ads",
            icon: <Target className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Launch Google Ads",
            paragraphs: [
                "One of the most prevalent methods of paid search marketing is search advertising. Search advertising is shown to those already interested in your sector or brand. Short sales cycles or one-time campaigns might benefit from these pay-per-click advertisements.",

                "We propose search advertising for companies looking to attract new consumers with powerful, high-quality leads. Prospects seeking your sector or brand offers online will see your search advertisements. These pay-per-click advertisements are appropriate for brief sales cycles or one-time campaign promotions.",

                "If you are a company looking to get powerful, high-quality leads from new consumers, our pay-per-click advertising service advises search advertising. Contact us if you’d like to chat with one of our strategists about the advantages of social media ad management."
            ],
        },
        {
            title: "Display Ads",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Scale eCommerce PPC",
            paragraphs: [
                "Display advertising is the most successful advertising method. Display advertising shows on sites that Google has approved as partners. Display advertising makes the most of images and text to draw viewers and persuade them to act. Display ads help to increase your brand awareness.",

                "Our pay-per-click advertising firm advises display advertising for businesses with long sales cycles and specialized or luxury clientele. Display advertisements appear on Google’s partner websites and target individuals who have visited websites similar to their sector.",

                "Regarding internet advertising, display advertising makes the most of pictures and text to attract consumers’ attention and persuade them to take action. When it comes to firms with long sales cycles and consumers that are either specialized or luxury, our pay-per-click advertising agency offers display advertising."
            ],
        },
        {
            title: "Social Media Paid Ads",
            icon: <Share2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            cta: "Run Meta Ads",
            paragraphs: [
                "Pay-per-click advertising on social media has become the fastest-growing part of the industry. Social media platforms like Facebook, LinkedIn, Instagram, and Twitter all provide social advertisements. They are pre-programmed to target potential customers based on their interests, hobbies, and social networks, among other things.",

                "At The Digital Connect, our paid ads experts team will help you promote your events, webinar, product launching, lead generation, post-boost, retargeting, and many other paid social media ads.",

                "Firms in practically any sector may use social advertising to engage, educate, and convert their target audience. Know how our agency and social media ad management services may help you develop your online presence and boost consumer loyalty by contacting us now."
            ],
        },
        {
            title: "Retargeting Ads/Remarketing Ads",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Scale LinkedIn B2B Ads",
            paragraphs: [
                "One of the greatest methods to find consumers that convert well is via remarketing, which may quadruple your revenue. People who have previously visited your website will be reminded and persuaded to convert via remarketing advertisements. Since fewer people compete for the same customers, remarketing is less expensive than search advertising.",

                "With our PPC marketing services, you’ll get the best results from your PPC campaign. Competitive remarketing services from The Digital Connect attract paying clients back to your company. Our digital marketing experts have hundreds of successful pay-per-click (PPC) campaigns under their belts and can give our customers results that are second to none.",

                "It is possible to use remarketing as a significant instrument for boosting sales and expanding your organization. Your organization may reap the benefits of remarketing with the help of The Digital Connect’s remarketing services."
            ],
        },
        {
            title: "PPC Audits Services",
            icon: <MonitorPlay className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Launch YouTube Ads",
            paragraphs: [
                "Whether you’re spending too much money on your pay-per-click (PPC) advertising campaign and getting too little return, a PPC audit may help you figure out what’s wrong and how to solve it. And you don’t even have to pay a dime to get started.",

                "If you’re spending too much money on your pay-per-click (PPC) advertising campaign and getting too little return, a PPC audit may help you figure out what’s wrong and how to solve it. And you don’t even have to pay a dime to get started.",

                "Our outstanding PPC audits services are the key to increasing your company’s online revenue. A personal consultation with a strategist is available if you’re interested in learning more about our expert PPC management services or assessing your current paid advertising campaigns."
            ],
        },
        // {
        //     title: "Landing Page CRO & A/B Split Testing",
        //     icon: <Zap className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        //     cta: "Optimize Conversion Rate",
        //     paragraphs: [
        //         "Traffic is only half the battle—we engineer dedicated, lightning-fast landing pages crafted exclusively for maximum conversion rates.",
        //         "Through rigorous multivariate A/B testing of headlines, form lengths, CTA button triggers, and social proof, we double your lead volume without increasing ad spend."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Questionnaires",
            desc: "We are the marketing strategists that look at the big picture and prepare the questionnaires."
        },
        {
            title: "Auditing of Current Accounts",
            desc: "Once we’ve learned as much as possible from the current account’s prior performance, we set a baseline against which to compare all of our KPIs."
        },
        {
            title: "Kickoff Meeting",
            desc: "As part of our discovery process, we examined completed questionnaires during this conference."
        },
        {
            title: "Restructuring or Setting Up an Account",
            desc: "This process comprises improving the different account settings, such as campaigns, ad groups, match types, extensions, bids, goal tracking, and audience/in-market target."
        },
        {
            title: "Campaign Setup",
            desc: "We will create various ad campaigns and copies to run our PPC ads at this stage. Our certified PPC experts will always set up and create a result-oriented campaign."
        },
        {
            title: "Measure and Monitor",
            desc: "After creating and launching our ppc campaign, it’s time to sit, relax & measure it. How many leads are we getting? What are ad copies performing better? From which device are we getting more leads? Where do we have to improvise our ad strategy?"
        }
    ];

    const industries = [
        { name: "eCommerce & D2C Brands", desc: "High-ROAS Google Shopping and Meta dynamic product catalog ads.", icon: <ShoppingCart /> },
        { name: "B2B SaaS & Enterprise", desc: "Account-Based Marketing (ABM) and demo request SQL generation.", icon: <Cloud /> },
        { name: "Legal & Law Practices", desc: "High-intent search ads capturing immediate injury and corporate cases.", icon: <Scale /> },
        { name: "Healthcare & Dental Clinics", desc: "Localized patient booking ads and high-converting treatment pages.", icon: <HeartPulse /> },
        { name: "Real Estate & Developers", desc: "Geo-fenced buyer campaigns for luxury property developments.", icon: <Building2 /> },
        { name: "Fintech & Financial Services", desc: "Compliance-approved loan generation and investment platform signups.", icon: <Landmark /> },
        { name: "Education & EdTech", desc: "Student enrollment funnels and downloadable course guide campaigns.", icon: <GraduationCap /> },
        { name: "Logistics & Freight Services", desc: "B2B shipper acquisition and cargo freight quotation leads.", icon: <Truck /> },
        { name: "Automotive Dealerships", desc: "Showroom visit campaigns and test-drive booking conversions.", icon: <Navigation /> },
        { name: "Home Services & Contracting", desc: "Emergency service Google Local Services Ads (LSA) and call tracking.", icon: <Building /> },
        { name: "Hospitality & Travel", desc: "Direct seasonal booking ads reducing high third-party OTA commissions.", icon: <Globe /> },
        { name: "Fashion & Lifestyle", desc: "Influencer creative whitelisting and dynamic carousel remarketing.", icon: <Shirt /> }
    ];

    const reasons = [
        "Certified Google Premier & Meta Partner technical media buyers managing your campaigns",
        "Rigorous focus on bottom-line ROAS and Customer Acquisition Cost (CAC) metrics",
        "Continuous negative keyword pruning and click-fraud protection to eliminate wasted budget",
        "Custom high-converting landing page design and A/B split testing included",
        "Advanced server-side tracking (GA4, CAPI) ensuring 100% accurate conversion attribution",
        "Transparent real-time Looker Studio reporting tracking pipeline revenue and ad spend live",
        "Full intellectual property and ad account ownership—you always retain 100% account control",
        "Proactive strategic consultation and weekly campaign optimization reviews"
    ];

    const technologies = [
        "Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Google Merchant Center",
        "Google Analytics 4", "Google Tag Manager", "Looker Studio", "Hotjar",
        "ClickCease", "Unbounce", "HubSpot", "Zapier", "Meta CAPI"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Digital Marketing"
                    parentRoute="/services/digital-marketing"
                    eyebrow="High-ROI Paid Media"
                    title="Enterprise Pay-Per-Click (PPC) Advertising Services"
                    description="Maximize your revenue and capture ready-to-buy prospects with precision PPC advertising. The Digital Connect manages data-driven Google Ads, Performance Max, Meta, and LinkedIn campaigns engineered for peak ROAS and predictable customer acquisition."
                    theme={theme}
                    visual={PPCVisual}
                    ctaText="GET FREE PPC AUDIT"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">High-Impact Paid Media</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Maximizing Conversion Velocity and Return on Ad Spend (ROAS)
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Paid advertising offers the fastest route to scale revenue, but mismanaged budgets, broad keyword waste, and poor landing page experiences quickly erode profitability. True PPC excellence requires continuous algorithmic bid management, precision demographic targeting, and relentless landing page conversion rate optimization.</p>
                                <p>At The Digital Connect, our certified Google and Meta performance marketers manage millions in annual ad spend across competitive global industries. We structure full-funnel paid media campaigns—combining high-intent search ads with persuasive social retargeting—to ensure every dollar invested delivers measurable sales pipeline revenue.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our PPC Campaign Management Lifecycle"
                    eyebrow="Agile Paid Media Process"
                    description="From account audit and audience architecture to ad copy drafting, server-side tracking, and weekly bid optimization."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-blue-50 text-blue-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-blue-200">
                                Empower Your Pipeline with Paid Media
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our PPC Advertising Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum paid media capabilities engineered to maximize return on ad spend across all major ad platforms.</p>
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
                        title="Ad Networks, Attribution & CRO Tools"
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
                                    Why Choose The Digital Connect for PPC Management
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine analytical bidding precision with high-conversion landing page design to maximize your ROAS.</p>
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
                    title="Ready to Skyrocket Your Return On Ad Spend?"
                    subtitle="Share your monthly ad spend goals with our senior media buyers and receive a complimentary PPC account audit & growth forecast within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default PPC;
