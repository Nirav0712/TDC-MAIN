import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { WordPressVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Globe, Layout, ShieldCheck, Zap, Layers, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WordPressDevelopment = () => {
    useSEO({
        title: "WordPress Web Development Company & Services | The Digital Connect",
        description: "Transform your online presence with custom WordPress development services by The Digital Connect. We build bespoke Gutenberg block themes, WooCommerce stores, and headless WordPress solutions."
    });

    const theme = { accent: "text-blue-700", bg: "bg-blue-600/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Custom WordPress Development",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Build Custom Theme",
            paragraphs: [
                "Your project needs a strong group of developers who can create highly-customized and reliable websites. Our clients recognize us as one of the best WordPress website development services providers. We help you to make your business sustainable among your competitors.",

                "We focus on your core project requirements and bring the best solution to you. With an expert team of developers, our clients have achieved great existence in creating custom websites. In our custom WordPress development services, we include developing SEO-friendly websites, multi-faced themes, and different plugins as well.",

                "Our motto is to keep you a step ahead in today’s highly challenging market. We aim to develop responsive and clean websites in a process-driven manner. Being a renowned WordPress development company, we use the right tools and strategies to offer flexible and reliable web development solutions."
            ],
        },
        {
            title: "Themes Development & Customization Services",
            icon: <Code className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Headless WordPress",
            paragraphs: [
                "The requirement for WordPress theme customization is increasing rapidly due to the rise in unique-looking websites to make a distinctive identity. The pre-build options offered in themes are insufficient to get the website’s remarkable and desired look. That’s why people hire our custom WordPress website development services.",

                "We use our coding talent and years of experience to bring uniqueness to your project. Our experts keep mobile-first orientation in mind and create highly responsive websites. We assist our clients with custom theme development and PSD to WordPress theme conversion services.",

                "We create innovative and intuitive websites for different industry verticals with a proficient team of developers. We invest our full efforts to ensure the quality and versatility of your site."
            ],
        },
        {
            title: "WordPress Website Plugins Development Services",
            icon: <ShoppingCart className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Build WooCommerce Store",
            paragraphs: [
                "WordPress plugin development is challenging and demanding as it has endless possibilities for the key platform. Our highly skilled WordPress developers offer the most innovative and dedicated WordPress plugin development services.",

                "A WordPress development agency like The Digital Connect enables you to add many rich plugin features to your website. Our professional developers keep your requirements in mind and know how to add value to your websites using powerful plugins. The Digital Connect’s experienced WordPress developers are experts in plugin development and customization.",

                "We enhance your website’s functionality through our tailor-made plugins, components, and modules. Our expert team has expertise in custom plugin development and configuration according to your business needs. We increase the vitality and functionality of your website in no time."
            ],
        },
        {
            title: "WordPress Migration Services",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Secure WordPress Site",
            paragraphs: [
                "Data and safety are the major concerns while migrating between technologies and platforms. As a leading WordPress development agency, we have expertise in complex migration and moving your existing website into a smooth and easy-to-manage WordPress website. We execute the migration with full data security without affecting your current website’s core functionality and features.",

                "Our proven track record is sufficient to showcase our expertise in migration services. You can trust us for data security.No content will be deleted from your existing website as we take full care of it. We maintain 100% data integrity.",

                "All the data is well checked before migrating the website and making it live. We know how to make your website unique and feature-full. Big brands trust us for well-suited migration services as per their business requirements. We always follow an agile approach to ensure the successful migration of your site."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Discover",
            desc: "With a few discovery sessions, we will make a detailed scope of the project document with all essential processes, business goals, challenges, & workflows. Relied on this discussion, we will also present an estimated time & cost of project development."
        },
        {
            title: "WordPress Development",
            desc: "The Digital Connect experts start project development according to the project plan. We use the best tools and modern web development technologies to deliver top-notch solutions to our clients."
        },
        {
            title: "Project Launch",
            desc: "After completing the website development, and testing process, we make it ready to launch. We take care of all essential factors and follow the steps to make the launch successful."
        },
        {
            title: "Support & Maintenance",
            desc: "Our partnership with you doesn’t end with the project delivery and launch. As a leading WordPress development company, we offer 24*7 support & maintenance services to resolve all clients’ queries."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "High-volume WooCommerce stores, customized checkout funnels, and subscription boxes.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant healthcare clinics, wellness media publications, and telehealth blogs.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Destination travel guides, hotel booking portals, and luxury resort websites.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "LearnDash LMS platforms, member academies, and educational resource hubs.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Editorial lookbooks, designer portfolios, and international eCommerce stores.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Athletic clubs, fitness coaching memberships, and sports news portals.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Law firm corporate websites, legal blog publications, and case intake forms.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Corporate financial institutions, investor relations hubs, and wealth blogs.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Freight brokerage websites, shipment inquiry tools, and carrier portal hubs.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "IDX / MLS property listing websites, luxury development showcases, and broker portals.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "High-converting corporate marketing websites, product changelogs, and resource libraries.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Automotive dealerships, product spec catalogs, and industrial equipment showcases.", icon: <Briefcase /> }
    ];

    const reasons = [
        "100% custom Gutenberg block themes — zero slow, bloated visual builders",
        "Exceptional 95+ Google PageSpeed and Core Web Vitals performance scores",
        "Expertise in Headless WordPress with Next.js, Remix, and WPGraphQL",
        "Advanced WooCommerce engineering with custom checkout flows and ERP sync",
        "Enterprise-grade security hardening preventing brute-force attacks and malware",
        "Dedicated WordPress specialists delivering transparent weekly sprint updates"
    ];

    const technologies = ["WordPress 6+", "WooCommerce", "Gutenberg Block API", "PHP 8.3", "WPGraphQL", "Next.js", "MySQL", "Redis", "Cloudflare", "Docker", "Roots Bedrock", "Tailwind CSS"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="WordPress Development Services"
                    title="Custom WordPress Web Development & Headless Solutions"
                    description="Transform your digital presence with enterprise WordPress development. The Digital Connect engineers bespoke Gutenberg themes, high-converting WooCommerce storefronts, and ultra-fast headless WordPress setups."
                    theme={theme}
                    visual={WordPressVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom WordPress Engineering Excellence</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Empower Your Marketing Team with Blazing-Fast, Custom WordPress Solutions
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Powering over 43% of all websites on the internet, WordPress is the undisputed leader in content management. However, poorly coded commercial themes and excessive plugins often leave businesses with sluggish load times, security vulnerabilities, and brittle editing experiences.</p>
                                <p>At The Digital Connect, we do things differently. We build lightweight, bespoke WordPress solutions from the ground up using custom Gutenberg blocks and modern headless architectures that give your marketing team complete creative control while maintaining peak performance and impenetrable security.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From architecture modeling and custom Gutenberg block coding to speed optimization and live launch."
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
                                WordPress Website Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom themes, headless architectures, and enterprise WooCommerce.</p>
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
                        eyebrow="Our WordPress Tech Stack"
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
                                Why Choose The Digital Connect for WordPress Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Transform your web presence with our custom WordPress engineering team:</p>
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

export default WordPressDevelopment;
