import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { CakePHPVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Box, Server, ShieldCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CakePHPDevelopment = () => {
    useSEO({
        title: "CakePHP Web Development Company & Services | The Digital Connect",
        description: "Scale your business with custom CakePHP development services by The Digital Connect. We build robust MVC web applications, portal solutions, and custom extensions with CakePHP."
    });

    const theme = { accent: "text-red-600", bg: "bg-red-500/20", softBg: "bg-red-50" };

    const services = [
        {
            title: "CakePHP Migration",
            icon: <Box className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build CakePHP Web App",
            paragraphs: [
                "Since its inception, CakePHP has been ruling the web application development arena. It offers greater stability and flexibility in decent ways. The globally used CMSs such as Joomla, Drupal, WordPress, Magento, etc., were created using it. Therefore, we can say that hiring CakePHP development services is the best bet if you need a unique and highly interactive application for your business needs.",

                "We at The Digital Connect offer reliable and efficient CakePHP development and migration services to all businesses. If you want to migrate your existing website to the CakePHP framework, we will assist you with our huge expertise and extensive experience.",

                "With our in-depth knowledge and skills, we help you leverage the full potential of this modern web app development framework. Even if you are using an older version of this framework and want to migrate your app to the latest versions of CakePHP, then we can help you out."
            ],
        },
        {
            title: "CakePHP Web App Development",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade CakePHP Version",
            paragraphs: [
                "Whether you are a small business owner or an established organization, CakePHP can help you fulfill your tech needs. It is a perfect solution for all enterprise-level needs. Our enthusiastic and expert CakePHP developer is knowledgeable and has rich industry experience. We deliver robust CakePHP development services for different industry domains.",

                "We use our expert resources who ensure database access, validations, translations, build-in caching, and authentication. Moreover, our team is known for maintaining your application’s quality and making it profitable. We are committed to delivering result-oriented CakePHP application development services in less time.",

                "The motto of our expert designers, developers, and solution architects is to offer higher performance, rapid development, agile workflow, and simplified codes. As a renowned CakePHP development company, we have a proven track record of creating innovative and creative solutions with complete support and better engagement."
            ],
        },
        {
            title: "CakePHP Plugin Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Develop CakePHP Plugins",
            paragraphs: [
                "Since its inception, CakePHP has been ruling the web application development arena. It offers greater stability and flexibility in decent ways. The globally used CMSs such as Joomla, Drupal, WordPress, Magento, etc., were created using it. Therefore, we can say that hiring CakePHP development services is the best bet if you need a unique and highly interactive application for your business needs.",

                "We at The Digital Connect offer reliable and efficient CakePHP development and migration services to all businesses. If you want to migrate your existing website to the CakePHP framework, we will assist you with our huge expertise and extensive experience.",

                "With our in-depth knowledge and skills, we help you leverage the full potential of this modern web app development framework. Even if you are using an older version of this framework and want to migrate your app to the latest versions of CakePHP, then we can help you out."
            ],
        },
        {
            title: "CakePHP Web App Development",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Build CakePHP APIs",
            paragraphs: [
                "Whether you are a small business owner or an established organization, CakePHP can help you fulfill your tech needs. It is a perfect solution for all enterprise-level needs. Our enthusiastic and expert CakePHP developer is knowledgeable and has rich industry experience. We deliver robust CakePHP development services for different industry domains.",

                "We use our expert resources who ensure database access, validations, translations, build-in caching, and authentication. Moreover, our team is known for maintaining your application’s quality and making it profitable. We are committed to delivering result-oriented CakePHP application development services in less time.",

                "The motto of our expert designers, developers, and solution architects is to offer higher performance, rapid development, agile workflow, and simplified codes. As a renowned CakePHP development company, we have a proven track record of creating innovative and creative solutions with complete support and better engagement."
            ],
        },
        {
            title: "Custom CakePHP Web Development",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Build CakePHP APIs",
            paragraphs: [
                "CakePHP is a newly built PHP 5.4+ framework. With its safety and security features, it turns out to be an ideal option for all business types. The Digital Connect is a leading CakePHP Development Agency with a team of highly experienced PHP developers who effectively develop custom web applications and dynamic websites.",

                "With years of experience and expertise in web development, we have emerged as a one-stop solution for all PHP development requirements, dealing with customers across various business types. We have a dedicated PHP development team who ensures to go the extra mile to provide the best web development solutions to our clients.",

                "We efficiently provide customized, ensuring that the outcome is tailored to the client’s needs. With a vast knowledge of different aspects of web development, including excellent MVC architecture programming skills, we deliver the most effective CakePHP applications. In addition, we are experts in building customized CakePHP web apps."
            ],
        },
        {
            title: "CakePHP Maintenance & Support",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Build CakePHP APIs",
            paragraphs: [
                "CakePHP maintenance and support are not as easy as it sounds! But you can make this task easier with the help of professional CakePHP service providers like The Digital Connect. We help manage it 360, from upgrading security features to complete enhancement. We have hands-on experience in web development such as CMS to portals, business websites, and e-commerce websites.",

                "We also offer a user-friendly content management system, CMS, which allows website owners to easily manage and control the content on their website, leveraging the CakePHP framework. Our trained professionals ensure that your applications and website run throughout without challenges.",

                "Our certified PHP development service efficiently manages simple and complex websites and applications. Whether designing or developing, our team has a trusted solution for both. This is not it; we also provide expert assistance in deploying CakePHP websites and applications. Our team ensures that your platform runs smoothly with minimal complications."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Planning",
            desc: "As a renowned CakePHP web development company, we collect and analyze your tech needs and create a perfect app design and development plan."
        },
        {
            title: "Design",
            desc: "We design your CakePHP application development with essential tools and create the perfect UI & UX for it. Ensuring user-friendly interfaces with our designing capabilities."
        },
        {
            title: "Development",
            desc: "Our expert developers start CakePHP development using the agile process. We are dedicated to creating highly efficient and relevant apps for your business."
        },
        {
            title: "QA & Testing",
            desc: "Our QA & the testing process includes executing several test cases, finding errors, and fixing bugs. As a result, get quality products in less time."
        },
        {
            title: "Deployment",
            desc: "Now we deploy your app and launch it in the market so the users can leverage its benefits according to their business needs."
        },
        {
            title: "Post-deployment Support",
            desc: "We ensure the consistent and uninterrupted functionality of your CakePHP app. Hire us to get professional CakePHP development solutions!"
        },
        {
            title: "Go to Market",
            desc: "We utilize our extensive experience to make your app market-ready and launch it with a quick deployment process."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Scalable product catalogs, custom cart checkout, and ERP inventory syncing.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant patient portals, doctor scheduling, and telehealth records.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Dynamic booking engines, itinerary management, and multi-currency portals.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Student grading dashboards, course material repositories, and interactive exams.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Omnichannel inventory control, B2B wholesale portals, and customer rewards.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Tournament bracket generators, athletic membership management, and live scores.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Encrypted case management, automated document assembly, and client portals.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Multi-layered encryption, micro-lending platforms, and secure transaction logs.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Fleet routing management, warehouse scanning systems, and shipment tracking.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "MLS / IDX property feeds, mortgage calculators, and lead management CRM.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant subscriptions, metered billing, and automated customer onboarding.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Assembly line telemetry tracking, dealer management, and parts catalog systems.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Proven expertise in CakePHP 4.x and CakePHP 5.x enterprise application development",
        "Clean, maintainable MVC code structure adhering strictly to PSR standards",
        "Deep knowledge of CakePHP ORM optimization, query caching, and entity validation",
        "Flawless migration strategies from older CakePHP versions without data downtime",
        "Built-in security protection against CSRF, SQL injection, and XSS attacks",
        "Transparent agile sprints with daily standup updates and dedicated project leadership"
    ];

    const technologies = ["CakePHP 5", "CakePHP 4", "PHP 8.3", "MySQL", "PostgreSQL", "Redis", "Composer", "Docker", "Apache", "Nginx", "PHPUnit", "REST APIs"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="CakePHP Development Services"
                    title="Most Reliable CakePHP Development Company"
                    description="Since its inception, CakePHP has proven its vitality in web development. Moreover, it has a significant impact on modern programming concepts."
                    theme={theme}
                    visual={CakePHPVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Rapid MVC Application Engineering</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Scalable CakePHP Solutions Built for Business Performance
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>CakePHP is one of the most reliable and mature PHP frameworks in the industry, renowned for its convention-over-configuration philosophy, clean MVC design pattern, and built-in security features. At The Digital Connect, our senior CakePHP developers leverage these advantages to build custom enterprise web applications faster and with higher precision.</p>
                                <p>From high-volume transaction processing systems to complex corporate intranets and SaaS backends, our CakePHP development team ensures your web architecture is scalable, rock-solid, and ready for long-term growth.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our CakePHP Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From architecture discovery to database scaffolding, custom logic build, and automated test deployment."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-6 md:py-10 lg:py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Comprehensive CakePHP Development Capabilities
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Tailored CakePHP development services for ambitious companies.</p>
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
                        eyebrow="Our PHP & Framework Stack"
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
                                Why Choose The Digital Connect for CakePHP Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Accelerate development with our certified PHP engineers:</p>
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

export default CakePHPDevelopment;
