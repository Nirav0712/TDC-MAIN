import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { RubyOnRailsVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Zap, Server, ShieldCheck, Database, Layers, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const RubyOnRailsDevelopment = () => {
    useSEO({
        title: "Ruby on Rails Web Development Company & Services | The Digital Connect",
        description: "Build fast, scalable MVPs and high-growth digital platforms with Ruby on Rails development services from The Digital Connect. Proven convention-over-configuration engineering."
    });

    const theme = { accent: "text-red-600", bg: "bg-red-500/20", softBg: "bg-red-50" };

    const services = [
        {
            title: "RoR MVP Development",
            icon: <Rocket className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Rails Application",
            paragraphs: [
                "Ruby on Rails is a framework that helps developers decrease their time on projects. Because it allows them to stay flexible and adaptable in shifting market circumstances, it is well recognized and routinely employed by many startups.",

                "We can help you get your MVP up and running quickly by using Ruby on Rails, a popular framework for rapid application development. We also build web infrastructures that can handle the traffic of hundreds of millions of visitors at a time if your product becomes more successful over time.",

                "If you need assistance getting your product up and running fast, our programmers can help you do it so that you can spend more time selling your product. We develop an MVP to establish whether or not our product is viable for commercialization."
            ],
        },
        {
            title: "RoR eCommerce Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Rails APIs",
            paragraphs: [
                "Making eCommerce apps using Ruby on Rails is a fantastic way to get your feet immersed in web development when you first start. Integration of your application with The Digital Connect is essential to benefit from their services and products to the fullest extent possible, as shown below.",

                "Ruby on Rails is the most appropriate framework for bespoke eCommerce development because of its user-friendly features and modular approach to development. With years of expertise in the sector, our Rails eCommerce development specialists at The Digital Connect can deliver a broad range of Rails eCommerce services to meet the different demands of our clients.",

                "This fantastic programming language enables us to provide you with unique and cost-effective solutions to the challenges that your company is now encountering due to our efforts. With our support, it is possible to create e-commerce websites that are user-friendly and attractive to a wider variety of clients."
            ],
        },
        {
            title: "RoR CMS Development",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Upgrade Rails App",
            paragraphs: [
                "Businesses all around the globe utilize CMS systems to manage better, alter, and sell their websites’ content. Business processes, collaboration, communication, and information distribution through interdependent online systems and apps are all made easier with our content management system (CMS) services.",

                "Custom web app development, including PWA and SPA, has typically relied on Ruby on Rails, which is still the case today. Application development using Ruby on Rails is the way to go if you want highly dependable online apps. To meet your particular business requirements, The Digital Connect integrates pre-built software.",

                "We add custom functionality to your current mobile or web-based apps depending on your specific company needs. In this way, you’ll be able to achieve your company objectives. Thanks to our innovative workflow platform, we’ve orchestrated RoR CMS development solutions perfectly tailored to our client’s businesses and needs."
            ],
        },
        {
            title: "RoR Web Apps Development",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Scale Rails System",
            paragraphs: [
                "In only a few weeks, you may have a working prototype. With Ruby on Rails, you’re allowed to do so. Ready-to-use modules and generators are provided by this web framework, allowing you to create your MVP quickly. Because of the Convention over Configuration philosophy in Ruby on Rails, rapid application development is possible without creating code.",

                "If a web app developed on the Rails framework does not work out, or if you need to add additional engineers to your team, it is simple to swap projects. Hire us to create your Ruby on Rails prototype in weeks.",

                "Using our Ruby on Rails professionals, you can have your application up and running in a few weeks. Our Ruby on Rails web development services can help you get the job done no matter your industry. Create your product from scratch using RubyGems, modules, and generators."
            ],
        },
        {
            title: "RoR Support & Maintenance",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            cta: "Scale Rails System",
            paragraphs: [
                "We’ll take care of your current applications, so you can relax and have peace of mind. Your concept, objectives, and needs are considered by our Ruby on Rails consulting experts to assist you in choosing the best framework for your project.",

                "Continuous improvement is critical for companies operating in today’s global economy. Since the beginning, The Digital Connect has focused on creating the best, most reliable, and result-driven digital solutions for clients. We know how to assess an RoR developer’s skill set, onboard new employees, and keep track of the project’s resources.",

                "Your website will always be up and running if you outsource your Ruby on Rails development to us. We provide excellent 24/7 maintenance and support services. Even if you’re thinking of adding new features or migrating data, you’ll receive the greatest RoR support and maintenance."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Creating a Roadmap",
            desc: "You must handle the project's direction and identify the web application's objectives and purposes. Let's take a look at your program's overall structure and functionality."
        },
        {
            title: "Define The Target Audience",
            desc: "The following information should be included in the analytics report: the kind of audience, age, gender, education, online access capabilities, and degree of security."
        },
        {
            title: "Aesthetics and Interaction Design",
            desc: "Design implementation begins when the interface and interaction models have been authorized. The magic comes when a well-designed user experience draws the audience in."
        },
        {
            title: "Web App Development",
            desc: "When designing an application's structure and architecture, begin with the database. Once the model, classes, and libraries have been created, you must implement all of the features detailed in the specs."
        },
        {
            title: "Support & Maintenance",
            desc: "Post-deployment, you can count on us for technical support and maintenance to keep your web applications up to date and error-free."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "High-scale custom marketplaces, multi-currency stores, and payment integrations.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-ready telehealth platforms, EHR data synchronization, and medical booking.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Dynamic hotel booking platforms, itinerary creators, and global reservation engines.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Interactive student portals, automated test evaluation, and digital courseware.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "B2B wholesale fashion platforms, custom swatch configurators, and retail sync.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Fantasy sports leagues, stadium ticketing engines, and membership portals.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Digital legal document automation, case filings, and client collaboration portals.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Subscription billing platforms, ledger calculation engines, and invoice automation.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Freight route optimization, shipment tracking backends, and dispatch dispatchers.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Property valuation models, MLS listings syndication, and investor dashboards.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant B2B subscription platforms with metered usage and automated billing.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Vehicle diagnostic analytics, assembly inventory control, and warranty portals.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Unrivaled development velocity delivering fully functional MVPs in record time",
        "Deep expertise in Rails 7+, Ruby 3.3 (YJIT), Hotwire, Turbo, and Stimulus",
        "Battle-tested architecture trusted by global tech giants (GitHub, Shopify, Airbnb)",
        "Comprehensive RSpec and Capybara test suites guaranteeing zero production regressions",
        "High-performance Sidekiq queue processing managing millions of daily background tasks",
        "Transparent agile sprints with dedicated technical leads and daily communication"
    ];

    const technologies = ["Ruby on Rails 7", "Ruby 3.3", "Hotwire", "Turbo", "Stimulus", "PostgreSQL", "Redis", "Sidekiq", "RSpec", "Docker", "AWS", "GraphQL"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Ruby on Rails Development Services"
                    title="High-Velocity Ruby on Rails Web Application Development"
                    description="Build scalable, secure, and rapid-to-market web applications with Ruby on Rails. The Digital Connect turns innovative startup ideas and enterprise requirements into battle-tested digital platforms."
                    theme={theme}
                    visual={RubyOnRailsVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Convention Over Configuration</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Rapid Prototyping and Massive Enterprise Scalability
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Ruby on Rails revolutionized web development by emphasizing developer happiness, sensible conventions, and unmatched rapid prototyping capabilities. Today, Rails powers some of the largest digital platforms on the internet including GitHub, Shopify, Basecamp, and Airbnb.</p>
                                <p>At The Digital Connect, our expert Ruby on Rails developers build clean, maintainable, and high-concurrency applications. From rapid MVP launches for ambitious startups to enterprise platform modernization, we engineer Rails solutions that deliver real competitive advantage.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Engineering Workflow"
                    description="From domain discovery to Rails scaffolding, async workers, RSpec testing, and cloud deployment."
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
                                Ruby on Rails Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom SaaS platforms, high-throughput APIs, and performance upgrades.</p>
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
                        eyebrow="Our Ruby on Rails Stack"
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
                                Why Choose The Digital Connect for Ruby on Rails Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Ship faster with our seasoned Rails product engineers:</p>
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

export default RubyOnRailsDevelopment;
