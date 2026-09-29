import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ContentMarketingVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    RefreshCw, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContentMarketing = () => {
    useSEO({
        title: "Content Writing & Content Marketing Services | The Digital Connect",
        description: "Scale industry authority and inbound organic traffic with professional content writing services. We craft SEO blog articles, whitepapers, case studies, and website copy."
    });

    const theme = { accent: "text-amber-600", bg: "bg-amber-500/20", softBg: "bg-amber-50" };

    const services = [
        {
            title: "White Papers",
            icon: <FileText className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
            cta: "Write SEO Articles",
            paragraphs: [
                "White papers are long-form content publications professionally produced to offer knowledge while building trust among your target audience. These papers show what your organization offers to answer a specific issue. At The Digital Connect, we provide our clients with excellent white paper writing services at a low cost.",

                "We have access to a diverse spectrum of knowledge because we have a workforce scattered throughout the world. Our staff is prepared to begin the research necessary and SEO content writing service to put together your white paper as soon as possible. White papers may take on a variety of formats; our professional content writers of white papers are adaptable and well-organized.",

                "Whitepapers help you develop your thought leadership & reputation in the market by demonstrating your expertise. As a result, the content of the whitepaper will be produced in a unique manner that will have an impact on decision-making in your industry."
            ],
        },
        {
            title: "Case Studies Writing",
            icon: <BookOpen className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
            cta: "Create Lead Magnets",
            paragraphs: [
                "The Case study is indeed a persistent marketing tactic used by many companies. A decent case study can create a lasting impact on your consumer, increasing the likelihood of a long-term relationship and partnership between you. More than that, the company will increase the number of new clients seeking your services. To accomplish this, we develop case studies that are both visible and persuasive.",

                "It is set against futuristic backgrounds; highlights your product’s ability to deal with potential obstacles. Through our work with businesses, organizations, and even entire corporations, we have gathered a wealth of knowledge and experience in effective case study writing, allowing us to present our clients with services that will astound even the most jaded of them.",

                "Case study writing is something that we take extremely seriously, and we make use of all of our capabilities, expertise, and service capabilities to ensure that we provide amazing services to all of our clients on every occasion."
            ],
        },
        {
            title: "eBooks Writing",
            icon: <CheckCircle className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            cta: "Publish Case Studies",
            paragraphs: [
                "Whether you intend for the eBook to be a stand-alone product or a promotional tool to promote your company’s products and services, it must strike the right emotional chord with the reader. Our eBook writers possess the knowledge and the ability to produce high-quality content ebooks.",

                "Hire our eBook content writer & make your eBook project succeed. Online content is the future medium of information, entertainment, and marketing. In addition to being a part of the future, electronic books are also a logical development of printed books.",

                "Because of the ease with which ebooks can be shared or distributed, they are an excellent medium for various reasons, including marketing. We write content for eBooks that are of actual value to readers and, as a result, help grow your business. If you require further changes, we will offer you as many as you require."
            ],
        },
        {
            title: "Video & Animation Script",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Craft Website Copy",
            paragraphs: [
                "A scriptwriter creates commercials, webinars, videos, television shows, and film scripts. Having a thorough understanding of the ins & outs of screenwriting, our writers can craft natural-sounding, captivating scripts on virtually any subject matter.",

                "Whether you have a concept for a movie but lack the experience to turn it into a script, require a plot for gameplay you’re developing, need a refined narration for a webinar the company is hosting, or require a script for your organization’s first TV commercial, there is a writer at The Digital Connect who can best help.",

                "We are well-versed in the various copy formats and can combine the most relevant option for the client. Apart from that, we make certain that the substance of the ad copy is relevant to the readers by conducting the appropriate research before generating these materials. We simplify the text to make it easier to understand and integrate the brand’s personality into the materials."
            ],
        },
        {
            title: "Website Content & Blog Writing",
            icon: <Mail className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Launch Email Sequences",
            paragraphs: [
                "We are your go-to resource for all types of web material. Our professional content writers are highly skilled and trained to develop entirely personalized copies for the online audience, whether for a blog, website, or article marketing campaign. Most users of a website glance over the information rather than reading it from beginning to end.",

                "Because of this, our web content writers are well aware of the need to maintain the structure & format of articles, blogs, and websites so that readers find it easy to read them. We are committed to exceeding your expectations. The task of writing good blog content is to understand both the expectations of the client and the expectations of the customer’s audience before starting.",

                "Our blog writers are experienced in writing about various topics and themes and know SEO content writing services. This adaptability enables us to meet the blog writing requirements of a wide range of clients. Furthermore, our content writing agency ensures that the blog articles are written at a level of comprehension appropriate for the typical reader, allowing them to absorb the information thoroughly."
            ],
        },
        {
            title: "Thought Leadership & Ghostwriting for Executives",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Ghostwriting",
            paragraphs: [
                "Amplify your founders' and executives' personal brands across Forbes, TechCrunch, LinkedIn, and Medium with expert ghostwritten articles.",
                "We capture your unique perspective and voice, distilling complex industry insights into articulate, viral thought leadership essays."
            ]
        }
    ];

    const processSteps = [
        {
            title: "Groundwork",
            desc: "Reserching and analyzing the clients’ industry & their competitors to know KPIs & project management to ensure the project success."
        },
        {
            title: "Objective & Scope",
            desc: "We communicate with our clients, know their needs, and suggest the best solution to get the desired results. In addition, our SEO experts help you know the overall scope of your tasks."
        },
        {
            title: "Planning & scheduling",
            desc: "We analyze every detail of the project schedule, like the required number of resources, tasks, challenges, and associated milestones. We identify keywords optimize content and the website."
        },
        {
            title: "Submission to Search Engines",
            desc: "We submit the optimized pages to the search engines. Our experienced SEO experts implement the best strategies to rank your website on different search engines."
        },
        {
            title: "QA & Testing",
            desc: "We test everything before and after submitting the website to the search engines. Furthermore, our team always makes required enhancements per the search engine’s algorithm."
        },
        {
            title: "Help & Support",
            desc: "Being a professional SEO company, we offer consistent support to our clients and resolve all their issues in no time. We review the ranking continuously and work to improve it."
        }
    ];
    const industries = [
        { name: "B2B SaaS & Tech", desc: "Developer documentation, technical comparison guides, and whitepapers.", icon: <Cloud /> },
        { name: "eCommerce & D2C", desc: "Engaging buying guides, product descriptions, and lifestyle blog posts.", icon: <ShoppingCart /> },
        { name: "Healthcare & MedTech", desc: "Medically reviewed health articles, patient guides, and clinical summaries.", icon: <HeartPulse /> },
        { name: "Fintech & Financial Services", desc: "In-depth investment analyses, tax guides, and crypto breakdowns.", icon: <Landmark /> },
        { name: "Legal & Corporate Law", desc: "Authoritative legal practice area pages, case law summaries, and insights.", icon: <Scale /> },
        { name: "Real Estate & Construction", desc: "Neighborhood market reports, commercial investment trends, and guides.", icon: <Building2 /> },
        { name: "Education & EdTech", desc: "Student learning articles, course reviews, and career roadmap guides.", icon: <GraduationCap /> },
        { name: "Logistics & Supply Chain", desc: "Industry supply chain reports, freight logistics trends, and case studies.", icon: <Truck /> },
        { name: "Automotive & Mobility", desc: "Vehicle reviews, future mobility analyses, and maintenance guides.", icon: <Navigation /> },
        { name: "Fashion & Lifestyle", desc: "Style trends, capsule wardrobe articles, and seasonal lookbooks.", icon: <Shirt /> },
        { name: "Hospitality & Travel", desc: "Curated city itineraries, destination guides, and luxury hotel reviews.", icon: <Globe /> },
        { name: "Manufacturing & Industrial", desc: "Technical whitepapers, machinery specifications, and case studies.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Experienced subject-matter writers and senior editors with native linguistic fluency",
        "100% original, human-written content adhering strictly to Google's E-E-A-T quality principles",
        "Deep SEO integration utilizing SurferSEO and Clearscope for guaranteed search visibility",
        "Full-spectrum content capabilities: Technical blogs, B2B whitepapers, website copy, and ghostwriting",
        "Fast turnaround times with dedicated editorial workflows and multi-stage proofreading",
        "Seamless integration with your CMS (WordPress, Webflow, HubSpot, or custom frameworks)",
        "Complete intellectual property transfer, NDA security, and full commercial copyright",
        "Dedicated content strategist providing quarterly editorial audits and performance reviews"
    ];

    const technologies = [
        "SurferSEO", "Clearscope", "Grammarly Business", "Hemingway Editor", "Google Search Console",
        "Ahrefs", "WordPress", "Webflow", "HubSpot", "Figma", "Looker Studio", "Google Docs"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Digital Marketing"
                    parentRoute="/services/digital-marketing"
                    eyebrow="Authoritative Brand Storytelling"
                    title="Content Writing & Content Marketing Services"
                    description="Build undeniable industry authority and capture high-intent inbound organic leads. The Digital Connect crafts deeply researched SEO blog articles, B2B whitepapers, conversion landing pages, and executive thought leadership that compounds pipeline revenue."
                    theme={theme}
                    visual={ContentMarketingVisual}
                    ctaText="GET FREE CONTENT STRATEGY"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-3">High-Impact Content Writing</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Crafting Compelling Content That Educates, Inspires, and Converts
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>In an era overwhelmed by generic automated text, high-quality, authoritative human-crafted content is the single most powerful differentiator for modern brands. Exceptional content does not simply populate a webpage—it answers complex customer objections, demonstrates verified expertise, builds deep emotional trust, and drives prospects decisively down the sales funnel.</p>
                                <p>At The Digital Connect, our multidisciplinary team of veteran copywriters, investigative researchers, and SEO editors craft bespoke content marketing assets. From in-depth technical pillar articles and B2B whitepapers to punchy website landing page copy and executive ghostwriting, we deliver words that win rankings and close deals.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Content Marketing Production Lifecycle"
                    eyebrow="Agile Content Process"
                    description="From audience research and editorial roadmap planning to draft writing, SEO optimization, and multi-channel distribution."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-amber-50 text-amber-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-amber-200">
                                Empower Your Brand with Compelling Content
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Content Writing & Marketing Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum content creation services engineered to establish domain authority and drive inbound conversions.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFFDF5]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-amber-500 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-amber-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-amber-400 shrink-0">
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
                        title="Content Optimization, SEO & Editorial Tools"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Verticals We Write For</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
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
                                <h2 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Content Marketing
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine human editorial brilliance with data-driven SEO strategy to create content that captures attention and drives conversions.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Publish Content That Ranks and Converts?"
                    subtitle="Share your target audience and content goals with our editorial directors and receive a customized content strategy & proposal within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default ContentMarketing;
