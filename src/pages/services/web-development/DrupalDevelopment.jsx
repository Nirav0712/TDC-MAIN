import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { DrupalVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Globe, ShieldCheck, Layers, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const DrupalDevelopment = () => {
    useSEO({
        title: "Enterprise Drupal Development Company & Services | The Digital Connect",
        description: "Scale your global web presence with enterprise Drupal development services by The Digital Connect. We architect secure, decoupled, and multilingual Drupal CMS platforms."
    });

    const theme = { accent: "text-blue-600", bg: "bg-blue-500/20", softBg: "bg-blue-50" };

    const services = [
        {
            title: "Drupal Web Development & Designing Services",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Drupal Platform",
            paragraphs: [
                "With Drupal web development, you can enjoy a smooth performance in the digital space. We allow our customers to use the powerful Drupal features and make the best of the easy-to-use interface. With this, clients can also manage their websites with an in-house team.",

                "If they wish to opt for professional service, there could be nothing better than that. Along with Drupal web development, we provide support after project deployment and delivery so that our clients feel comfortable even without a professional developer.",

                "At the same time, we have a certified team to provide you with the best-updated look and feel and help you build a complete end-to-end Drupal website with minimal effort and reasonable cost. With our comprehensive Drupal web development and designing services, you can take your business to new heights, securing the top Google ranking."
            ],
        },
        {
            title: "Drupal eCommerce Development",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            cta: "Build Decoupled Drupal",
            paragraphs: [
                "E-commerce is the need of the time. With the increasing competition in the ecommerce sector, it has become essential for businesses to have the right e-commerce service provider to support their business online. At The Digital Connect, we offer highly customized and advanced e-commerce solutions for all kinds of businesses indulged in online commerce.",

                "From helping your business with a secure, scalable, and easy-to-maintain Drupal e-commerce environment to helping you reach the top Google ranking, we provide dedicated assistance for all your e-commerce requirements. We have a loyal customer base because we provide quick and cost-effective services. We are a preferred choice for businesses looking for e-commerce solutions under tight deadlines.",

                "Being in this business for years, we have the best tried and tested ecommerce development solutions for businesses. Our team is trained with the latest technology-based solutions to meet clients’ expectations. As a leading Drupal Module Development agency, we never miss any IT trends. We provide you with on-time assistance, a dedicated team to customize the idea as per your needs, a team to look after the smooth performance of your website 24/7, and support."
            ],
        },
        {
            title: "Drupal Module Development",
            icon: < Layers className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Develop Custom Modules",
            paragraphs: [
                "Are you confused as to which Drupal module will suit your business? Are you seeking a new module? If yes, hire our professional Drupal Module Development service right away. Just bring in your ideas, and our experts will guide you best. With our efficient staff, we are efficient at developing Drupal modules from the basics.",

                "Just bring your basic idea to us, and we will convert it into a full-fledged module to take your business in the right direction. We have a team of dedicated professionals capable of creating different modules. Our professionals help you make the best out of the module you opt for with years of experience working with Drupal modules.",

                "We also help you with professional tips and tricks to ensure you get maximum benefits from the chosen module with top-notch services. In addition, we provide development services in Drupal 8 & 9, offering advanced features like high speed, multilingual functions, etc."
            ],
        },
        {
            title: "Drupal Migration Services",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate to Drupal 10",
            paragraphs: [
                "Drupal 7 will end in November 2022; hence it is time to migrate or upgrade to the relevant version right now! If you’re looking for a Drupal migration, feel free to connect with us. We are an expert team of Drupal migrations and upgrades. With a dedicated team to look after the migration and updates for each client, we offer tailored solutions according to your business requirements.",

                "Our certified team of developers is quite efficient in managing Drupal web development, migration, data handling, and hassle-free content migration of all sizes. Our migration process is well supported by advanced methods that help us deliver Drupal Migration projects quickly and efficiently.",

                "With our proven working model, we ensure that our clients enjoy a seamless transition without having any effect on their regular business. In addition, our experienced team is here to help you get the migration done at an affordable price."
            ],
        },
        {
            title: "Drupal Support & Maintenance",
            icon: <ShieldCheck className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Migrate to Drupal 10",
            paragraphs: [
                "Your Drupal system works even more efficiently when supported by the proper support and maintenance experts. Our customizable support and maintenance packages help you meet your business needs. Our team helps you with timely reviews, performance testing, tuning, upgrades, migrations, development and design updates, etc.",

                "While we look after your Drupal assets, we take care of occasional issues and keep an active eye on them 24/7 to ensure a smooth performance. Being a trusted Drupal web development service provider, we look after all types of businesses and offer them effective solutions to grow in the digital world.",

                "As a part of the support and maintenance program, we also look out for competitors and ensure our client’s business performs at the top. For people looking for Drupal maintenance, we have customized packages; choose your package today and have a dedicated team of experts to take care of your Drupal assets."
            ],
        }
    ];

    const processSteps = [
        {
            title: "Requirement Analysis",
            desc: "As a leading Drupal web development company, we analyze your project requirements and create a perfect plan to meet your business needs."
        },
        {
            title: "Website Design",
            desc: "We have a strong team of experienced designers who know how to make your website user-friendly and highly interactive."
        },
        {
            title: "Website Development",
            desc: "At this stage, we start website development as per your project requirements and design modules. Then, we make your website functional and valuable with our standard coding practices."
        },
        {
            title: "Testing",
            desc: "Our professional team has expert quality analysts and testers who review the website’s code and ensure it is bug-free and ready to deliver."
        },
        {
            title: "Project Deployment",
            desc: "At The Digital Connect, we know how to deploy and make the product accessible to its users. We make your website quick and efficient."
        },
        {
            title: "Quick Support",
            desc: "Don’t worry; we will always be with you after project delivery. Therefore, we will provide quick support and resolution to any issue or error."
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Drupal Commerce platforms, international stores, and catalog management.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant hospital portals, clinician directories, and patient education.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Destination guides, multi-lingual booking hubs, and regional tourism portals.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "University websites, faculty research directories, and student portals.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Digital brand lookbooks, global media asset repositories, and PR centers.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "League management, stadium event ticketing, and multimedia fan hubs.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Law firm knowledgebases, multi-jurisdiction compliance hubs, and case filings.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Bank portals with strict data governance, regulatory compliance, and investor relations.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Global shipping documentation portals, freight tracking, and supplier hubs.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Commercial asset management platforms, developer portfolios, and listings.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Developer documentation hubs, API developer portals, and corporate marketing.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Global dealer portals, OEM product specifications, and parts documentation.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Specialized in high-security government, higher ed, and enterprise Drupal deployments",
        "Expertise in decoupled Headless Drupal with Next.js, Remix, and GraphQL frontends",
        "Proven migration track record moving millions of legacy records seamlessly to Drupal 10",
        "Deep integration with Apache Solr, Elasticsearch, Salesforce, and enterprise ERPs",
        "Strict compliance with WCAG 2.1 AA accessibility and enterprise data privacy rules",
        "Dedicated Acquia and Pantheon cloud certified architects overseeing your deployment"
    ];

    const technologies = ["Drupal 10", "Drupal 11", "PHP 8.3", "Twig", "Drush", "Composer", "GraphQL", "JSON:API", "Apache Solr", "Elasticsearch", "Redis", "Acquia Cloud"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Web & CMS Development"
                    parentRoute="/services/web-development"
                    eyebrow="Drupal Development Services"
                    title="Expert Drupal Web Development Company"
                    description="Architect secure, high-scale, and multilingual digital platforms with Drupal. The Digital Connect engineers enterprise content ecosystems, decoupled architectures, and high-security web portals."
                    theme={theme}
                    visual={DrupalVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Enterprise Content Management</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Scalable, Secure, and Flexible Digital Governance with Drupal
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Drupal is the content management system of choice for organizations that require uncompromising security, advanced editorial workflows, multilingual scalability, and intricate data governance. From global university networks to government portals and multinational corporations, Drupal offers unmatched architectural flexibility.</p>
                                <p>At The Digital Connect, our certified Drupal developers build high-availability platforms, decoupled headless CMS setups, and custom modules designed to withstand enterprise traffic demands with 99.99% uptime reliability.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Our Enterprise Workflow"
                    description="From content modeling and multi-site architecture to custom module coding and enterprise deployment."
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
                                Our Drupal Web Development Services
                            </h3>
                            {/* <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">We are committed to keeping transparency during overall Drupal website development. We will be available for your web development needs with our streamlined process.</p> */}
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
                        eyebrow="Our Drupal Technology Stack"
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
                                Why Choose The Digital Connect for Drupal Development
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Enterprise content governance engineered for scale and security:</p>
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

export default DrupalDevelopment;
