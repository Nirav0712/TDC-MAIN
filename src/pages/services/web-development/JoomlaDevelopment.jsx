import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { JoomlaVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Layers, Globe, ShieldCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const JoomlaDevelopment = () => {
    useSEO({
        title: "Joomla Web Development Company & Services | The Digital Connect",
        description: "Build flexible, multilingual corporate portals and community websites with Joomla development services by The Digital Connect. Custom components, modules, and templates."
    });

    const theme = { accent: "text-amber-600", bg: "bg-amber-500/20", softBg: "bg-amber-50" };

    const services = [
        {
            title: "Joomla Web Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Build Joomla Portal",
            paragraphs: [
                "The Digital Connect provides a wide range of Joomla services, including, but not limited to, the creation of templates, extensions, modules, components, eCommerce, and CMS. For those who prefer PHP as a web platform, Joomla is an excellent alternative because of its object-oriented programming structure.",

                "Using the power of social technology, our Joomla developers can take your website to a new level. Keeping an eye on current developments in the world of Joomla allows us to give a highly sophisticated Joomla development company.",

                "We ensure that our clients are satisfied with our Joomla development services and return to us for the creation of further apps and websites based on this framework, thanks to our unwavering assistance throughout and after the development process. Since it is used to create dynamic and inventive websites, Joomla is the most popular online CMS."
            ],
        },
        {
            title: "Joomla eCommerce Development",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Custom Extensions",
            paragraphs: [
                "Joomla shopping cart/eCommerce systems are adaptable and expandable so that you can sell anything, anywhere. You may even re-create your e-commerce website. The team comprises experienced Joomla developers who can provide high-quality solutions. An internet presence is one of the company’s primary goals for its customers. When you spend your hard-earned money with The Digital Connect, you can be certain you’ll get your money’s worth.",

                "The Digital Connect provides high-quality services at reasonable pricing, allowing consumers to get the most out of their money. We have a team of motivated programmers ready and able to complete projects on time and within budget.",

                "With our extremely configurable and adaptable Joomla shopping cart/eCommerce systems, we let you sell anything, anywhere. Using Joomla, we can even re-create your webshop. We’re aware of this and are here to provide solutions tailored to their specific requirements and provide them with the greatest Joomla website possible."
            ],
        },
        {
            title: "Joomla Theme Development",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade to Joomla 5",
            paragraphs: [
                "Joomla has a wide range of user-friendly and mobile-friendly capabilities. With the help of our website design experts, updating your content is a cinch. Using our speedy 72-hour turnaround, we’ve helped Joomla clients transform their websites into dynamic content management systems.",

                "Our staff helps you choose the finest Joomla themes that fit your company’s image and identity and then customizes the elements vital for your website’s effective operation. At The Digital Connect’s Joomla theme, developers assist customers in reducing operating costs, increasing sales, and increasing their return on investment. The Digital Connect’s highly skilled Joomla development services are dedicated to providing their valued customers with the best possible service.",

                "With our help, you can take your website to a new level. If you’re interested in learning more about our Joomla website design services or hiring Joomla specialists, kindly contact us."
            ],
        },
        {
            title: "Joomla Extension Development",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Secure Joomla Website",
            paragraphs: [
                "The Joomla platform is user-friendly, extensible, responsive, multilingual, search engine optimized, and accessible. Web developers widely use it throughout the world. Only a few extensions are included by default, but many more may be found in the Directory and used to enhance a site’s functionality. Your website’s internet position may be updated and converted through extensions.",

                "For your online company, we provide specialized Joomla extension development. First, we meet with our clients to get a clear understanding of their needs, then we provide the best possible solution and execute a successful strategy for your website. While working on Joomla extensions, we always strive to make them more useful.",

                "Having worked with Joomla for a long time, our developers are highly qualified, successful, and experienced. Our competent and dedicated experts who employ the most up-to-date technology enhance web design and development services."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Analyzing Requirements",
            desc: "A prominent Joomla development company analyses your project objectives and develops a customized strategy to fit your business’s specific requirements."
        },
        {
            title: "Designing a Website",
            desc: "Our designers will design your website user-friendly and dynamic."
        },
        {
            title: "Website Development",
            desc: "At this point, we begin developing your website according to the specifications of your project and the design components you’ve provided."
        },
        {
            title: "Testing",
            desc: "Quality analysts and testers on our professional team verify that the website’s code is bug-free and ready to be delivered."
        },
        {
            title: "Project Development",
            desc: "In the hands of The Digital Connect, you can be certain that your product will be available to everyone who needs it. We optimize your website for speed and user experience."
        },
        {
            title: "Prompt Service",
            desc: "Don’t worry; we’ll be here for you even after the job is completed. As a result, we are prepared to respond quickly to any problem or mishap."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "VirtueMart and HikaShop digital storefronts with multi-currency checkout.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Medical clinic portals, health wellness blogs, and patient appointment systems.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Tourism board portals, hotel reservation systems, and destination directories.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "School portals, member-only lesson repositories, and student alumni networks.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Lookbook media galleries, fashion magazine publications, and retailer portals.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Club membership portals, league schedules, and community sports forums.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Law firm knowledge hubs, client access areas, and regulatory publication portals.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Corporate investor portals, financial news publishing, and branch locators.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Vendor extranets, shipment inquiry portals, and regional depot directories.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Property directory portals, agent profiles, and neighborhood guides.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Corporate knowledgebases, community support forums, and user documentation.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Dealership portal ecosystems, product spec sheets, and warranty registries.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Mastery of Joomla 5 modern architecture, native web services, and schema tools",
        "Deep expertise in complex Access Control Lists (ACL) and multi-tier permissions",
        "Native multilingual implementation supporting 70+ languages out of the box",
        "Zero license fees — full open-source ownership of your codebase and content",
        "Rigorous security hardening eliminating common CMS vulnerabilities and spam",
        "Dedicated maintenance SLAs with daily backups and priority bug resolution"
    ];

    const technologies = ["Joomla 5", "Joomla 4", "PHP 8.3", "MySQL", "PostgreSQL", "VirtueMart", "HikaShop", "Bootstrap 5", "Docker", "Apache", "Nginx", "Redis"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Joomla Development Services"
                    title="Joomla Development Company"
                    description="Build flexible, content-rich corporate portals, community websites, and multilingual platforms with Joomla. The Digital Connect engineers bespoke extensions, templates, and enterprise CMS setups."
                    theme={theme}
                    visual={JoomlaVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Versatile Content & Portal Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Modular, Multilingual, and Scalable Digital Experiences with Joomla
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Joomla bridges the sweet spot between content management simplicity and enterprise-grade structural power. With native support for multi-language translations, granular user access levels, and an extensible MVC architecture, Joomla powers millions of corporate extranets, community hubs, and publishing platforms worldwide.</p>
                                <p>At The Digital Connect, our Joomla developers build customized, responsive, and secure portals tailored to your organization's exact editorial workflows and customer engagement goals.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="We are devoted to ensuring openness throughout the whole Joomla website construction. With our simplified procedure, you can count on us to meet your web development demands."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Joomla Development Services

                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom components, portals, and migration services for global enterprises.</p>
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
                        eyebrow="Our Joomla Tech Stack"
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
                                Why Choose The Digital Connect for Joomla Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Build high-impact portals with our certified Joomla specialists:</p>
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

export default JoomlaDevelopment;
