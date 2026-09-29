import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { CodeigniterVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Zap, Server, ShieldCheck, Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CodeigniterDevelopment = () => {
    useSEO({
        title: "CodeIgniter Web Development Company & Services | The Digital Connect",
        description: "Build ultra-fast, lightweight, and secure PHP web applications with CodeIgniter development services from The Digital Connect. High performance with zero unnecessary framework bloat."
    });

    const theme = { accent: "text-orange-600", bg: "bg-orange-500/20", softBg: "bg-orange-50" };

    const services = [
        {
            title: "CodeIgniter CMS Development",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build CodeIgniter App",
            paragraphs: [
                "The CodeIgniter CMS development is the responsive, easy-to-use, and responsive system built with the most effective MVC framework. It simplifies users’ tasks to create a simple yet clean and better website with all pages. Those pages are a portfolio, service, event, news, etc.",

                "Through CodeIgniter CMS development, you can quickly build any website, such as a fitness website, education website, lawyer website, and much more, based on your choice. The CMS (Content Management System) is easy to develop with the extraordinary PHP framework CodeIgniter.",

                "It can be easily customized with the help of developers or programmers. Our programmers can easily understand the codes that are used in it. Then they can modify the files and database when it is required. You can do it based on your needs. The CodeIgniter CMS will have solid security-based and admin-level security to protect from SQL injection attacks, XSS attacks, etc."
            ],
        },
        {
            title: "CodeIgniter Portal Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade CodeIgniter",
            paragraphs: [
                "Generally, web portals go beyond websites based on their usability as they depend on information and services based on the user’s interest. Web portals will be futuristic business tools since they bring together vital business information and data at a specific location.",

                "Therefore, organizations invest in web portal development to strengthen their foundation and expand their horizons. Looking for a dependable framework based on creating a complex application is essential. CodeIgniter, the practical PHP-based web development framework, is the best choice as they are empowered with extraordinary features. Such features are simplicity, speed, security, and flexibility.",

                "The Digital Connect is the trusted firm for availing the best web portals for various enterprises. We have professional and skilled CodeIgniter portal developers acclaimed for developing a responsive and fully functional portal to increase value to the business enterprise. Our developers can build portals based on SEO-friendly."
            ],
        },
        {
            title: "CodeIgniter Web Apps Development",
            icon: <Database className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Develop REST APIs",
            paragraphs: [
                "CodeIgniter is the effectively used PHP-based web application framework that is the right choice to create top-notch web apps. This user-friendly platform has a highly interactive interface with easy-to-use tools. They also have additional features such as flexibility, simplicity, and security to make CodeIgniter the right choice.",

                "We at The Digital Connect offer the best CodeIgniter web apps development service and have the best track record in the technology domain. We are using this prolific framework to develop exceptional web applications within the client’s budget and within a short span.",

                "Our group of skilled team is composed of certified developers. They are highly specialized in developing rich and dynamic custom web apps using the extraordinary features of the framework. We have a wide range of experience in the CodeIgniter framework attending a lot of successful projects for clients in different industries. We are the right choice to offer our customers tailor-made custom web app solutions."
            ],
        },
        {
            title: "CodeIgniter eCommerce Solution",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Secure CodeIgniter App",
            paragraphs: [
                "Now you can scale up your online business with the CodeIgniter eCommerce solution. The increased popularity of the ecommerce business has increased the massive demand for professional ecommerce websites. Such websites must be visually appealing and offer buyers a seamless and smooth checkout experience.",

                "Therefore choosing a suitable framework for ecommerce solutions is essential. During that time, the CodeIgniter eCommerce solution was the right choice. It serves as the best choice for building compelling and rich ecommerce solutions. At The Digital Connect, we combine ecommerce expertise with practical CodeIgniter skills for an ecommerce solution to promote business online.",

                "We are the best to use an extraordinarily flexible and secure PHP-based framework to build robust e-commerce web applications. We ensure that such applications can provide you with high-end user experiences, easy shipping integration, easy browsing, secure payments, hassle-free checkout, etc. We enhance your business value by adding custom functionalities."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "Initially, we will gather all the requirements from our clients to meet their needs and goals without fail. Our experts will get in touch with you."
        },
        {
            title: "UI/UX Designing",
            desc: "Our CodeIgniter development will follow the UI/UX designing process to create highly functional PHP-based apps and websites on MVC architecture."
        },
        {
            title: "Prototype",
            desc: "We follow the proper prototype and traditional methods to create web applications to the next level."
        },
        {
            title: "Product Development",
            desc: "Product development is an essential process. The product will get its proper shape and almost get ready to execute."
        },
        {
            title: "Quality Testing",
            desc: "We have a group of quality testing teams to test whether the developed web apps are proper or not. Call us for error-free products."
        },
        {
            title: "Deployment",
            desc: "Finally, after passing the quality testing, the web application will be ready to deploy, and our clients can use it without hesitation."
        },
        {
            title: "Support & Maintenance",
            desc: "You can immediately contact our support and maintenance if you have any issues after deployment. They are available 24/7 and ready to answer anytime you want."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Ultra-fast product catalogs, customized shopping carts, and live order tracking.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-ready appointment portals, medical records storage, and patient tracking.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "High-speed reservation engines, flight search aggregators, and tour booking.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Lightweight student management systems, attendance logs, and online quiz engines.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Wholesale ordering platforms, supply chain portals, and regional distribution.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Club management platforms, tournament schedulers, and athletic portals.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Confidential document repositories, client intake forms, and case billing.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Secure transaction processing, ledger systems, and merchant payment gateways.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Dispatch management, shipment tracking backends, and warehouse APIs.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Property listing syndication, broker portals, and client lead management.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Lightweight SaaS backend engines designed for minimal server memory consumption.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Dealer inventory databases, warranty claims portals, and parts lookups.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Unrivaled PHP execution speed and ultra-low server resource consumption",
        "Deep expertise in CodeIgniter 3.x to 4.x seamless modernization and upgrades",
        "Zero boilerplate clutter — lean, focused codebase tailored precisely to your needs",
        "Built-in protection against SQL injection, cross-site scripting (XSS), and CSRF",
        "Transparent project management with dedicated technical leads and agile sprints",
        "Post-launch SLA support, automated backup monitoring, and performance tuning"
    ];

    const technologies = ["CodeIgniter 4", "CodeIgniter 3", "PHP 8.3", "MySQL", "PostgreSQL", "SQLite", "Composer", "Docker", "Apache", "Nginx", "Redis", "REST APIs"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="CodeIgniter Development Services"
                    title="CodeIgniter Development Company"
                    description="Build ultra-fast, lightweight, and scalable PHP web applications with CodeIgniter. The Digital Connect delivers high-performance portals and custom web backends with zero framework bloat."
                    theme={theme}
                    visual={CodeigniterVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Lightweight & High-Velocity PHP Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Exceptional Performance and Minimal Server Overhead
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>When raw execution speed, simplicity, and low server resource footprint are paramount, CodeIgniter stands out as the premier PHP development framework. Unlike heavy enterprise frameworks that require vast memory configurations, CodeIgniter provides an agile MVC architecture that executes requests in fractions of a second.</p>
                                <p>At The Digital Connect, our CodeIgniter developers craft robust, high-traffic digital platforms, secure REST APIs, and database-intensive backends engineered for speed and stability.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="As a leading CodeIgniter development company, we follow some of the best processes to offer 100% successful solutions for our customers. Check out the process we follow."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Comprehensive CodeIgniter Capabilities
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">High-speed PHP solutions tailored for performance-focused enterprises.</p>
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
                        eyebrow="Our PHP & Database Stack"
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
                                Why Choose The Digital Connect for CodeIgniter Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Power your business applications with our agile engineering team:</p>
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

export default CodeigniterDevelopment;
