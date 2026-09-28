import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { WebflowVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Globe, Sparkles, Layout, Zap, Layers, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WebflowDevelopment = () => {
    useSEO({
        title: "Enterprise Webflow Development Company & Services | The Digital Connect",
        description: "Accelerate your marketing agility with custom Webflow development services by The Digital Connect. We build award-winning, responsive Webflow websites with clean semantic code."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Building Websites With Fast Load Times",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Convert Figma to Webflow",
            paragraphs: [
                "When it comes to minimizing a website’s load time, our Webflow CMS team is unrivaled. They have extensive experience with a wide range of performance measurements and hence know how to incorporate these features effectively.",

                "Our professionals are well-versed in keeping a website’s loading time constant to keep customers returning. We will deliver a custom webflow website design that is complete with modern conveniences and SEO-friendly architecture.",

                "Webflow plays a vital role for the website as it is. We are developing websites that are clean with high responsive time. Moreover, we use Webflow’s lazy load settings to speed up your website."
            ],
        },
        {
            title: "Customized & High-End Theme Design Service",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Motion Webflow",
            paragraphs: [
                "Both consumers and business owners are increasingly turning to online mediums, realizing that doing so can expand their customer bases and, ultimately, their profits. Being a renowned Webflow web development company, we ensure to deliver high-end and customized theme designs for your project.",

                "Our designer team will create a Figma file according to your idea and depending on the Figma file our experience developer will develop the customized theme for your website.",

                "Our webflow developers are professionals in providing the best solution for implementing websites in any company sector. Reach out to us if you’re interested in getting expert assistance for Webflow website development."
            ],
        },
        {
            title: "Efficient Webflow Migration Service",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Webflow CMS",
            paragraphs: [
                "Are the webflow and its offerings impressive so far? If yes, then it’s time to implement our Webflow projects to reap the benefits of this modern technology. In addition, we help you improve your company’s growth to new heights by taking advantage of our Webflow migration services.",

                "At The Digital Connect, we’ve helped lots of businesses successfully migrate from WordPress, Squarespace, Joomla, and Drupal over to Webflow. When it comes to migration, we make sure your 301 redirects are in place, so there are no floating or broken links.",

                "After carefully analyzing your business needs, our expert developers will provide you tailor-made Webflow migration solution."
            ],
        },
        {
            title: "Consultation on Webflow Projects",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate Webflow",
            paragraphs: [
                "We offer expert consulting services, during which we’ll listen to your questions, needs, and worries concerning the Webflow services you’re trying to find. Then, our specialists will propose a tailor-made solution to meet your specific company requirements.",

                "The Digital Connect is not a typical web design & development agency. Our Webflow development service can build anything from a simple site to a high-quality website with custom animations.",

                "We also focus on Webflow innovation to provide the most seamless UI possible. Feel free to contact us if you’re thinking of launching an online business, and we’ll give you a comprehensive quote based on our years of experience in webflow implementation."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Process We Follow",
            desc: "Being a renowned Webflow web development company, we follow an agile approach to creating excellent, scalable, and market-ready products."
        },
        {
            title: "Project Strategy",
            desc: "We make a well-defined and reliable strategy to create value-driven products per your specifications and objectives."
        },
        {
            title: "Analysis and Planning",
            desc: "We perform an in-depth and precise analysis of your idea. We identify the technical architecture of your webflow website."
        },
        {
            title: "UI/UX Design",
            desc: "Our expert UI/UX designers have extensive knowledge in drafting impressive and eye-catching UI/UX for your project."
        },
        {
            title: "Website Development",
            desc: "Our skilled and expert developers use their experience to create superior, secure, and scalable webflow products."
        },
        {
            title: "Quality Assurance",
            desc: "We follow a robust zero-error policy to ensure product quality. As a result, we deliver secure, stable, and usable webflow websites."
        },
        {
            title: "Project Launch",
            desc: "Launching a website should be done by professionals. So, we facilitate your project launch with our expertise."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Webflow eCommerce stores, bespoke DTC lookbooks, and luxury merchandise sites.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Modern wellness platforms, clinic showcase sites, and fitness brand portals.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Boutique hotel websites, luxury travel agency platforms, and resort showcases.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Online bootcamps, academy landing pages, and student curriculum hubs.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "High-end fashion editorial showcases, designer portfolios, and seasonal collections.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Athletic lifestyle brands, sports agency websites, and outdoor recreation portals.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Corporate law firm websites, practice area hubs, and professional attorney bios.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Venture-backed fintech marketing websites, investor decks, and product showcases.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Freight brokerage websites, supply chain technology platforms, and B2B hubs.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Luxury real estate development showcases, architectural portfolio hubs, and leasing.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "High-converting B2B SaaS marketing websites, product tour hubs, and interactive pricing.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "EV automaker showcases, automotive technology platforms, and product spec hubs.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Certified Webflow Experts using the industry standard Client-First style framework",
        "Lightning-fast AWS & Fastly global CDN hosting with 99.99% uptime guarantee",
        "Zero backend maintenance, zero plugin security vulnerabilities, and instant publishing",
        "Advanced custom JavaScript, GSAP animations, and Three.js 3D interactivity",
        "Seamless integration with HubSpot, Salesforce, Zapier, and Memberstack",
        "Comprehensive video training enabling your marketing team to edit with total confidence"
    ];

    const technologies = ["Webflow", "Client-First (Relume)", "Finsweet Attributes", "GSAP", "Three.js", "Memberstack", "Wized", "HubSpot", "Zapier", "Make", "HTML5/CSS3", "JavaScript"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Webflow Development Services"
                    title="Enterprise Webflow Development & Custom CMS Solutions"
                    description="Launch lightning-fast, visually stunning, and conversion-focused websites with Webflow. The Digital Connect turns Figma designs into scalable, award-winning Webflow experiences for high-growth brands."
                    theme={theme}
                    visual={WebflowVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Modern Visual Development Platform</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Unrivaled Marketing Agility with Clean, Production-Grade Code
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Webflow has revolutionized web engineering by combining the visual speed of a design tool with the clean, standards-compliant HTML, CSS, and JavaScript of a full-stack engineering team. For marketing teams, Webflow delivers unmatched publishing autonomy while eliminating plugin bloat and server maintenance.</p>
                                <p>At The Digital Connect, our certified Webflow developers build scalable enterprise websites using the Client-First design framework, complex CMS data models, custom JavaScript integrations, and smooth 60 FPS GSAP animations that captivate visitors and drive conversions.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From Figma design audit to Client-First semantic build, CMS collections, and global CDN launch."
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
                                Effective Webflow Development Services
                            </h3>
                            {/* <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom Webflow development, CMS architectures, and enterprise marketing sites.</p> */}
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

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
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
                        eyebrow="Our Webflow Ecosystem"
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
                                Why Choose The Digital Connect for Webflow Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Elevate your brand presence with certified Webflow experts:</p>
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

export default WebflowDevelopment;
