import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { FrontendVisual } from '../../components/services/subservices/visuals/VisualsWeb';
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

const WebDevelopment = () => {
    useSEO({
        "title": "Full Stack Web Development Services | The Digital Connect",
        "description": "The Digital Connect provides custom full stack web development services including frontend, backend, CMS, API integration, and custom web applications."
    });

    const theme = { "accent": "text-brand-cyan", "bg": "bg-brand-cyan/20", "softBg": "bg-brand-soft-blue/20" };

    const services = [
        {
            title: "WordPress Development Services",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Frontend Services",
            link: "/services/web-development/frontend-development",
            paragraphs: [
                "WordPress development services from The Digital Connect are a one-stop solution to all your website development needs. With a 33% website market share, WordPress has a lot to offer users. Our team of experts ensures that you make the best out of the platforms. As a leading CMS development company, we offer affordable and result-driven WordPress development services.",

                "We are proud to share that at The Digital Connect, we have worked with clients from different domains. Our varied clientele has helped us become even stronger over the years. Presently, we proudly service clients across the globe. Our CMS development services can create compelling digital experiences that add value to your business.",

                "With our unmatchable custom CMS development services, we can help you migrate or upgrade your business to WordPress from any other content management system. We closely work with our clients to understand their business and deliver the best WordPress development solutions."
            ],
        },
        {
            title: "PHP Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Backend Services",
            link: "/services/web-development/backend-development",
            paragraphs: [
                "PHP was initially developed for website development but has developed significantly and turned into a fully-fledged, efficient programming language in recent years. Today PHP is the first choice for expert website developers. If you’re also looking for PHP web development, feel free to connect with The Digital Connect.",

                "We are known to deliver exceptional websites and app solutions using PHP frameworks. As a leading custom CMS development company, we have many services to offer to help your business grow significantly. Our primary focus is to develop website solutions that compel you to choose PHP repeatedly.",

                "Our professionals are always available to assist you with your PHP development requirements. We work with different PHP frameworks, depending on the business type. As a top web development service provider, we offer affordable, tried, and tested PHP development methods."
            ],
        },
        {
            title: "CakePHP Development Services",
            icon: <FileText className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
            cta: "Explore CMS Services",
            link: "/services/web-development/cms-development",
            paragraphs: [
                "CakePHP offers easy coding with a unique template editor and enables the development of highly scalable web solutions in no time. It is also an open-source platform that developers can utilize anytime and anywhere to create unique designs. It has an MVC pattern, making it better than other web development frameworks.",

                "We are the leading CakePHP developers in the market. Our unmatchable approaches eliminate integrating various components to design web applications. It helps you save costs and get your web application on a pocket-friendly budget. Our experts specialize in custom CakePHP framework development and bring solutions compatible with the latest PHP versions.",

                "As a custom CMS development company, we ensure your business is well supported with the newest CakePHP development methods. If you’re still doubtful about the need for the CakePHP framework, let us help you count its unbeatable features."
            ],
        },
        {
            title: "Drupal Development Services",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Custom Web Apps",
            link: "/services/web-development/custom-web-applications",
            paragraphs: [
                "At The Digital Connect, we create web pages in Drupal, undoubtedly the first experts for building large websites and web applications. We have a team of experienced professionals with hands-on experience executing Drupal projects. We are 24\\*7 available to create Drupal websites at an affordable price.",

                "Over the years, we have developed hundreds of websites using Drupal. We have clients from various domains dealing with such veritable clientele has given us immense confidence to introduce new methodologies. Our approaches and methods are backed by in-depth research and tested in advance.",

                "As an active member of the Drupal community, we ensure that your business remains at the top of the search engine results. We added quite a few new modules and helped develop many existing ones. We enjoy building websites with Drupal frameworks as it allows us to deliver compelling web solutions to our clients."
            ],
        },
        {
            title: "Joomla Development Services",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Custom Web Apps",
            link: "/services/web-development/custom-web-applications",
            paragraphs: [
                "The Digital Connect is a leading web development service provider. Here we provide a wide range of Joomla services that help your business reach the next level of success. Our expert Joomla developers are experienced in creating excellent Joomla websites and web applications. As a leading CMS development company, we have developed highly potent online applications and alluring websites with Joomla CMS solutions.",

                "Our Joomla developers have gained prowess in building effective Joomla web solutions with minimal operation and maintenance costs. Our comprehensive services include responsive Joomla website development, up-gradation, security testing, maintenance, migrations, etc. While you hire Joomla development services from The Digital Connect, you get template design and customization, Joomla application development, Joomla extension development, Joomla e-commerce solutions, etc.",

                "We have effective solutions for all, no matter what business domain you belong to and your website development requirements. As a top-notch Joomla developer, we assure you to provide you with the best web development services."
            ],
        }
    ];

    const processSteps = [
        { title: "Architecture & Scoping", desc: "Defining technical specifications, database schemas, and API contracts tailored to your growth goals." },
        { title: "UI/UX Prototyping", desc: "Crafting modern, accessible, and responsive user interfaces tailored to your brand identity." },
        { title: "Full-Stack Development", desc: "Writing clean, modular code with rigorous TypeScript typing and modern frameworks." },
        { title: "Performance & Security QA", desc: "Conducting automated unit testing, load testing, penetration audits, and cross-browser checks." },
        { title: "Cloud Deployment", desc: "Deploying to optimized cloud infrastructure with automated CI/CD pipelines and CDN caching." },
        { title: "24/7 Monitoring & Support", desc: "Ongoing server management, security patching, Core Web Vitals maintenance, and feature rollouts." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve brand presence and sales with scalable digital storefronts.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant platforms for transformational digital healthcare.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Integrate customer travel experiences with robust booking platforms.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Blending modern technology to bring seamless interactive learning.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Interactive digital storefronts and style apps to boost online presence.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Creating modern websites and engaging tracking apps for sports.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Secure digital document portals and case workflows for law firms.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Trustworthy & next-gen financial software solutions for enterprises.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Intelligent freight routing and real-time inventory tracking portals.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Intelligent digital solutions and listing portals for real estate.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud architectures engineered for rapid subscription scaling.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Smart production monitoring and supply chain management tools.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Full-stack expertise spanning modern frontend, backend, and cloud architectures",
        "Obsession with Core Web Vitals, 100/100 Lighthouse performance, and accessibility",
        "Enterprise-grade security practices with zero technical debt",
        "Decoupled headless architectures giving you limitless future scalability",
        "Agile sprints with continuous integration and transparent weekly updates",
        "Custom-tailored business logic without reliance on bloated generic templates",
        "Complete source code ownership and thorough technical documentation",
        "Dedicated post-launch SLA support and ongoing optimization"
    ];

    const technologies = ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Tailwind CSS", "Docker", "AWS", "Vercel"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="Web Development Services"
                    title="Custom Full-Stack Web Development Services"
                    description="We build secure, high-speed, and scalable web applications engineered to captivate visitors, drive conversions, and power your core business workflows."
                    theme={theme}
                    visual={FrontendVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Modern Web Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Transforming Complex Ideas into Resilient Web Platforms
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Your web platform is the central pillar of your digital footprint. At The Digital Connect, we architect and deliver custom web solutions that blend cutting-edge frontend interactivity with bulletproof backend stability. Our web engineering team builds enterprise portals, customer-facing web applications, and dynamic content platforms designed to load instantaneously and scale effortlessly.</p>
                                <p>Utilizing modern technologies like React, Next.js, Node.js, Python, and cloud-native databases, we ensure your web infrastructure meets the highest standards of speed, Core Web Vitals, cybersecurity, and search engine visibility. We partner with you from architecture design to global deployment to achieve measurable digital transformation.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Web Development Methodology"
                    eyebrow="Agile Web Process"
                    description="Our structured development process ensures absolute code quality, transparent communication, and rapid deployment."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Web Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our comprehensive web development services built for security, agility, and performance.</p>
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
                        eyebrow="Our Tech Stack"
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
                                Why Choose The Digital Connect for Web Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Discover why leading businesses trust our full-stack web engineering team:</p>
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

export default WebDevelopment;
