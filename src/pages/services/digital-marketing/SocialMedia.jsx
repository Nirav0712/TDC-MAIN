import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { SocialMediaVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Megaphone, RefreshCw, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SocialMedia = () => {
    useSEO({
        title: "Social Media Marketing & Management Agency | The Digital Connect",
        description: "Build an active community, amplify brand awareness, and drive social revenue. The Digital Connect manages full-cycle organic social, influencer, and viral campaigns."
    });

    const theme = { accent: "text-pink-500", bg: "bg-pink-500/20", softBg: "bg-pink-50" };

    const services = [
        {
            title: "Facebook Marketing",
            icon: <Share2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            cta: "Grow on Instagram & FB",
            paragraphs: [
                "Through Facebook, you are certain to reach your target demographic since the social media platform has over 2 billion monthly active users. Use the most popular social media network to expand your company’s reach.",

                "Facebook advertising services may help your company create an online following, raise brand recognition, and improve lead generation and revenue-generating initiatives. It’s a must-use advertising channel for organizations that want to develop because of Facebook’s large audience (it has more than two billion monthly users), extensive targeting possibilities, and a wide variety of ad kinds.",

                "We at The Digital Connect provide Facebook ad management services to get the most out of Facebook. We’re a one-stop solution for Facebook advertising, taking care of everything from developing your strategy and ad creatives to starting and tracking your campaigns."
            ],
        },
        {
            title: "Instagram Marketing",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Scale B2B Thought Leadership",
            paragraphs: [
                "Is Instagram advertising something you’re interested in using for your business? If this is the case, you need a strategy. Effective Instagram advertising needs strategic knowledge, a creative eye, and the time to execute and track results.",

                "Many companies don’t have the means to run effective Instagram ads, so we’re here to assist. If you’re looking for an Instagram advertising agency, we’ll keep you up to speed on the most recent industry developments, algorithm adjustments, and best practices. The buyer’s journey may be broken down into phases, from awareness through conversion, and we can do so while keeping inside your budget.",

                "Our agency can maximize your ad budget because of Instagram’s large and diversified user base, which includes more than 1 billion active monthly accounts and more than 500 million active daily accounts. We can target our digital advertising efforts to the specific individuals you want to reach by determining characteristics like geography, interests, demographics, habits, and more."
            ],
        },
        {
            title: "LinkedIn Marketing",
            icon: <MonitorPlay className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Create Viral Video Content",
            paragraphs: [
                "When it comes to targeting and efficiently reaching professionals all around the globe, LinkedIn stands out above the other social media giants that may claim comparable figures. Consider using LinkedIn advertising services if you’re planning to target individuals based on their professions, skill sets, industries, or professional interests since more than half of its members have a college degree.",

                "Our LinkedIn advertising agency is always up to speed on algorithm updates and LinkedIn news to provide the greatest possible marketing results for your company. To get the best results for your company, we use our LinkedIn ad campaign management knowledge and smart selection among the platform’s many ad formatting and targeting options.",

                "You can count on us to keep you updated throughout the process since we know how important it is to make the most of your financial resources. Every step of the way, you can be certain that we will use your resources effectively and productively to help you reach the goals you care about most."
            ],
        },
        {
            title: "Twitter Marketing",
            icon: <Users className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            cta: "Launch Influencer Campaign",
            paragraphs: [
                "Get in touch with present and future customers quickly with Twitter advertising services. Become the company that people follow and believe in. The sheer volume of tweets on Twitter might be frightening, but we have the expertise to assist your company in cutting through the clutter and getting your message out there.",

                "Does your company want to tap into the buying power of generations who have grown up in the digital age? We’ll use your marketing campaign’s latest industry information and platform technologies to target your targeted consumers. We follow industry best practices to get the greatest outcomes and make the most of every opportunity.",

                "Don’t hesitate to contact us for your Twitter advertising management if you don’t have the time to build smart advertising campaigns, evaluate and make adjustments based on Twitter information, and keep up with industry developments."
            ],
        },
        {
            title: "eCommerce Social Media Services",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
            cta: "Design Visual Assets",
            paragraphs: [
                "You can attract more clients to your eCommerce site and enhance your income through social network marketing. As a result, your eCommerce shop’s social media advertising campaigns may directly impact sales and profits.",

                "Social media marketing strategies for eCommerce businesses include paid advertising on social media networks such as Facebook, Twitter, Instagram, LinkedIn, YouTube, and other platforms. Paid social media advertising allows you to expand the reach of your brand’s social media presence beyond what you can accomplish organically on social media.",

                "Because of algorithm changes on social media networks such as Facebook, connecting consumers organically on these platforms is more difficult than ever. E-tailers should consider employing social media advertising to boost their online sales to grow their business."
            ],
        },
        // {
        //     title: "Social Listening & Reputation Crisis Management",
        //     icon: <ShieldCheck className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        //     cta: "Monitor Brand Mentions",
        //     paragraphs: [
        //         "Track brand sentiment, customer feedback, and competitor movements in real-time across social networks with advanced listening tools.",
        //         "We proactively address customer concerns, mitigate PR risks, and turn customer inquiries into positive brand loyalty moments."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Assessing Your Existing Social Media Presence",
            desc: "We will first observe your surroundings and social media presence before making plans for the future."
        },
        {
            title: "Determining the Ideal Customer for You",
            desc: "We will research extensively to determine the ideal customers that suit your needs."
        },
        {
            title: "Selecting a Channel",
            desc: "For your company, we focus on the social media outlets that will have the most effect."
        },
        {
            title: "Social Strategy & Posting",
            desc: "We will create and distribute high-quality content with the right strategy, monitoring, and execution."
        },
        {
            title: "Promoting Your Business Through Social Media",
            desc: "We help you promote your business socially with a mixture of organic and paid ads strategies."
        },
        {
            title: "Tracking and Analyzing Results",
            desc: "After all the efforts, we will measure everything, which will help us know where to improve our strategy."
        }
    ];

    const industries = [
        { name: "Fashion & Apparel", desc: "Lookbooks, influencer styling hauls, and visual shoppable Instagram feeds.", icon: <Shirt /> },
        { name: "B2B SaaS & Tech", desc: "Founder thought leadership, product release demos, and employee culture.", icon: <Cloud /> },
        { name: "eCommerce & D2C", desc: "Viral unboxing videos, customer reviews, and dynamic product giveaways.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Workout tutorials, transformation stories, and motivational reels.", icon: <HeartPulse /> },
        { name: "Food & Beverage", desc: "Appetizing recipe reels, restaurant aesthetic photos, and foodie reviews.", icon: <Sparkles /> },
        { name: "Real Estate & Architecture", desc: "Luxury property video tours, interior design carousels, and market updates.", icon: <Building2 /> },
        { name: "Education & Learning", desc: "Bite-sized knowledge tips, student achievements, and campus life.", icon: <GraduationCap /> },
        { name: "Fintech & Finance", desc: "Financial literacy carousels, market commentary, and security tips.", icon: <Landmark /> },
        { name: "Travel & Hospitality", desc: "Wanderlust travel reels, resort amenities showcases, and guest stories.", icon: <Globe /> },
        { name: "Legal & Professional", desc: "Legal tips, corporate case wins, and attorney introduction videos.", icon: <Scale /> },
        { name: "Automotive & Dealerships", desc: "Vehicle walkarounds, exhaust sounds, and new inventory spotlights.", icon: <Truck /> },
        { name: "Gaming & Entertainment", desc: "Gameplay clips, community memes, and live streaming announcements.", icon: <MonitorPlay /> }
    ];

    const reasons = [
        "Dedicated team of social strategists, copywriters, graphic designers, and video editors",
        "Strategic focus on genuine community engagement and pipeline revenue, not just vanity follower counts",
        "Consistent, high-frequency posting schedules managed with zero operational burden on your team",
        "Custom high-production short-form video creation optimized for TikTok, Reels, and Shorts algorithms",
        "Proactive influencer relationship management delivering vetted creators aligned with your values",
        "Transparent monthly Looker Studio reporting detailing audience demographic growth and engagement",
        "Comprehensive brand reputation monitoring catching customer sentiment issues before they escalate",
        "Proven experience scaling organic social presence for consumer brands and B2B enterprises alike"
    ];

    const technologies = [
        "Instagram Creator Studio", "LinkedIn Analytics", "TikTok Ads & Organic", "Buffer / Hootsuite",
        "Canva Enterprise", "Adobe Premiere Pro", "After Effects", "Figma", "Sprout Social",
        "Brand24", "Looker Studio", "CapCut Pro", "Meta Business Suite"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Digital Marketing"
                    parentRoute="/services/digital-marketing"
                    eyebrow="Social Media Mastery"
                    title="Social Media Marketing & Management Services"
                    description="Turn casual social scrollers into loyal, active brand advocates. The Digital Connect delivers full-service social media management, viral short-form video production, B2B thought leadership, and influencer partnerships that amplify brand equity."
                    theme={theme}
                    visual={SocialMediaVisual}
                    ctaText="GET FREE SOCIAL AUDIT"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-pink-600 font-bold uppercase tracking-wider text-sm mb-3">Authentic Brand Storytelling</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Building High-Engagement Communities Across Modern Social Channels
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Social media is the digital storefront and cultural heartbeat of modern brands. A passive or generic social media presence alienates potential customers and damages brand trust. To succeed, brands must consistently publish visually striking, value-packed content that sparks genuine conversation and commands attention.</p>
                                <p>At The Digital Connect, our social media strategists, copywriters, and video producers craft bespoke organic social campaigns across LinkedIn, Instagram, TikTok, Facebook, and X. We combine captivating aesthetic design with algorithmic video pacing to build engaged communities that drive meaningful commercial results.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Social Media Management Lifecycle"
                    eyebrow="Agile Social Process"
                    description="From brand persona discovery and monthly content calendar creation to creative production, scheduling, and community moderation."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-pink-50 text-pink-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-pink-200">
                                Empower Your Brand on Social Media
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Social Media Marketing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum social media management, short-form video, and influencer capabilities engineered for maximum engagement.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFF8FA]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-pink-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-pink-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-pink-400 shrink-0">
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
                        title="Social Platforms, Creation & Listening Tools"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-pink-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Verticals We Grow</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-pink-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-200 transition-colors">
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
                                <h2 className="text-pink-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Social Media Marketing
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine high-aesthetic creative visual assets with proactive community building to turn social followers into brand advocates.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-pink-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Transform Your Social Media Presence?"
                    subtitle="Share your social media goals with our creative directors and receive a complimentary social audit & monthly growth strategy within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default SocialMedia;
