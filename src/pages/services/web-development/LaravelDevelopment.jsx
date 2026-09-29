import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { LaravelVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Zap, Server, ShieldCheck, Database, Layers, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const LaravelDevelopment = () => {
    useSEO({
        title: "Enterprise Laravel Web Development Company & Services | The Digital Connect",
        description: "Accelerate your product roadmap with enterprise Laravel web development services by The Digital Connect. We build scalable SaaS platforms, CRM/ERP backends, and high-performance REST APIs."
    });

    const theme = { accent: "text-rose-600", bg: "bg-rose-500/20", softBg: "bg-rose-50" };

    const services = [
        {
            title: "Laravel Migration",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Laravel Application",
            paragraphs: [
                "Do you want to use Laravel to build a high-performance, feature-rich and scalable web application? You will need a senior developer to lead a PHP team in transitioning a monolithic application to a microservice architecture based on a PHP foundation. Our Laravel web development experts can help you convert your current PHP/MySQL website to the Laravel-based platform.",

                "Your existing application’s structure will be rebuilt in Laravel utilizing the tools and syntax provided by Laravel, including blade templating. With the help of our Laravel data migration solutions, we can help you transition from one Laravel framework to another.",

                "With Laravel 5.6 now available, you can take advantage of new features and improved performance. We migrate databases, seed them, publish package assets, and generate boilerplate code using Artisan’s CLI. Using Laravel’s Bcrypt technique for database password encryption, developers don’t have to re-create the database for every update made."
            ],
        },
        {
            title: "Customized Laravel Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Laravel APIs",
            paragraphs: [
                "In terms of PHP frameworks, Laravel ranks as one of the most widely used and the preferred choice of many renowned developers. Because it is an open-source framework based on the MVC style of architecture, Laravel website development is so popular nowadays. Laravel is an excellent platform for building web apps and websites quickly and efficiently. Innovative and Depending on the project’s requirements, the workforce size can be increased or decreased at short notice. You can expect the new Laravel-based custom website to have the same functionality, usability on mobile devices, and features as the old site. distinctive designs are a speciality of our very skilled team of Laravel developers.",

                "Moreover, they attempt to incorporate elements that enhance the user’s experience. Our Laravel development services can help you create the perfect website for your company. Contact us today! Our offshore Laravel developers in India provide excellent web app development services that are secure, reliable, and flexible at a reasonable rate for your company’s requirements.",

                "Depending on the project’s requirements, the workforce size can be increased or decreased at short notice. You can expect the new Laravel-based custom website to have the same functionality, usability on mobile devices, and features as the old site."
            ],
        },
        {
            title: "Laravel Extension Development",
            icon: <Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Build SaaS Platform",
            paragraphs: [
                "As a bespoke Laravel web development company, we create add-ons to assist customers in meeting their ever-changing business needs and goals. Laravel includes a diverse set of packages that make it easy to add new functionality to your app without affecting the foundation already in place. Using their subject experience, our trained developers assist customers in achieving their long-term objectives.",

                "Our Laravel development company programmers are proficient at providing a wide range of extension development services, including eCommerce integration, CMS customization, and highly dynamic forums. With The Digital Connect’s Laravel developers, you can be sure that your project will be bolstered with extensions that will meet your business needs.",

                "Each of our application developers is an expert in their field. We adhere to international standards and coding techniques for Laravel framework development and are thus able to produce apps that meet worldwide benchmarks in this regard. As a leading Laravel web development company, we go the extra mile to provide our clients with complete PHP web solutions that are both secure and scalable."
            ],
        },
        {
            title: "Laravel APIs Development",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Audit & Upgrade Laravel",
            paragraphs: [
                "Laravel web development is becoming increasingly popular as a result of its simple coding syntax, low learning curve, and developmental flexibility. We use Laravel’s built-in product development capabilities to build web apps quickly and provide you extra time to market your product.",

                "It is possible to integrate any Laravel project or third-party app using Laravel’s well-organized APIs, making them more accessible, flexible, and compatible with each other. Our RESTful API integration services provide an affordable way for customers to customize their legacy systems and make them more user-friendly, dynamic, and competitive.",

                "From customizing pre-defined templates to creating Laravel features that are simple to install, the programmers at The Digital Connect Laravel development company excel at optimizing any Laravel service you worry about."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Strategy",
            desc: "The first step in our Laravel website development process is to identify the best plan for monetizing your unique ideas."
        },
        {
            title: "Development of Prototype",
            desc: "Our Laravel developers produce highly functional prototypes with specific designs to enhance user experience and workflows."
        },
        {
            title: "Web App Wireframe",
            desc: "Wireframes (also known as blueprints) are visual representations of how an app will look and function before it is built."
        },
        {
            title: "Application Design",
            desc: "In our role as a leading Laravel development company, we work together with our clients to produce user-friendly apps that are both engaging and functional."
        },
        {
            title: "Application Development",
            desc: "Our Laravel web development team uses the best practices and standard code to create the app that matches your requirements."
        },
        {
            title: "Testing",
            desc: "Laravel applications that are tested thoroughly during the development process are more likely to be secure, functional, and reliable."
        },
        {
            title: "Deployment",
            desc: "We distribute the application across all the relevant platforms. Get in touch with us to have our industry specialists launch your app more swiftly."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Custom headless commerce, B2B wholesale marketplaces, and multi-vendor portals.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant telehealth platforms, appointment scheduling, and electronic records.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Global hotel reservation engines, flight search APIs, and tour package management.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Interactive Learning Management Systems (LMS), student grading, and video streaming.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Custom product configurators, inventory distribution networks, and flash sale engines.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Player statistics analytics, team tournament management, and membership portals.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Secure digital document vaults, automated contract assembly, and compliance auditing.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Payment gateways, ledger reconciliation, automated invoicing, and micro-investment tools.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Real-time fleet tracking, automated route dispatching, and warehouse barcode systems.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Automated MLS/IDX property syncing, tenant portals, and lease contract workflows.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant B2B SaaS platforms with metered billing and team seat management.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Telematics tracking, automated warranty claims, and parts inventory control.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Specialized in modern Laravel 11, PHP 8.3, and robust Domain-Driven Design (DDD)",
        "Deep mastery of Laravel ecosystem: Horizon, Nova, Cashier, Sanctum, Inertia, and Echo",
        "High-performance queue architectures handling millions of asynchronous jobs daily",
        "100% automated test coverage with PHPUnit and Pest ensuring bug-free releases",
        "Bank-grade security hardening protecting against CSRF, SQLi, and session hijacking",
        "Dedicated senior Laravel developers with transparent sprint tracking in Jira"
    ];

    const technologies = ["Laravel 11", "PHP 8.3", "Inertia.js", "Livewire", "Vue.js", "React", "MySQL", "PostgreSQL", "Redis", "Docker", "AWS", "Laravel Forge"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Laravel Development Services"
                    title="Enterprise Laravel Web Application Development"
                    description="Build scalable, elegant, and secure web applications using the world's leading PHP framework. The Digital Connect engineers bespoke SaaS platforms, robust APIs, and high-concurrency enterprise systems with Laravel."
                    theme={theme}
                    visual={LaravelVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Modern Full-Stack PHP Framework</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Elegant Code, Uncompromised Security, and Infinite Scalability
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Laravel is universally celebrated as the most expressive and powerful PHP framework in modern software engineering. With its rich ecosystem of tools like Eloquent ORM, Horizon background job queues, and Inertia full-stack adapters, Laravel enables development teams to deliver enterprise-scale applications in record time.</p>
                                <p>At The Digital Connect, our certified Laravel engineers build scalable digital backends, SaaS web applications, and mission-critical enterprise platforms engineered to process high concurrent workloads with flawless reliability.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Laravel Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From domain-driven modeling to artisan scaffolding, automated testing, and cloud deployment."
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
                                Reliable Laravel Development Services
                            </h3>
                            {/* <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom SaaS platforms, RESTful APIs, and enterprise web solutions.</p> */}
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
                        eyebrow="Our Full-Stack Laravel Suite"
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
                                Why Choose The Digital Connect for Laravel Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Scale faster with our top-tier Laravel application developers:</p>
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

export default LaravelDevelopment;
