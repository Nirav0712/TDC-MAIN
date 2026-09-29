import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { WebDesignVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Monitor, Layout, Zap, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WebDesign = () => {
    useSEO({
        title: "Web Design Company & Custom Web Design Services | The Digital Connect",
        description: "Transform your online presence with conversion-focused, responsive web design by The Digital Connect. We build sleek corporate websites, custom landing pages, and interactive digital experiences."
    });

    const theme = { accent: "text-cyan-600", bg: "bg-cyan-500/20", softBg: "bg-cyan-50" };

    const services = [
        {
            title: "eCommerce Website Designing",
            icon: <Monitor className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Design Custom Website",
            paragraphs: [
                "The Digital Connect is the ultimate and feature-rich e-commerce web development expert. We work with undisputed excellence spanning across the world. Our team is well versed in offering you a full suite of e-commerce web development services. It is helpful to automatically build a brand and garner the best Return on Investment.",

                "With years of experience in the e-commerce industry, our team at The Digital Connect is equipped with the best expertise. We are ready to assist you in choosing the right platform suitable for your eCommerce business. We ensure that your eCommerce website enriches your brand effectively and quickly allows you to identify the market to target.",

                "As a reliable, professional web design company, The Digital Connect offers you the best ecommerce services at reasonable prices. Our mission is to guide you and support you extensively, strengthening your market presence. It is also helpful to easily reach out to your business targets and goals with eCommerce website designing."
            ],
        },
        {
            title: "Responsive Web Designing",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Design Landing Pages",
            paragraphs: [
                "Creating the best Responsive Web Designing is most important for attracting mobile and web users worldwide. The Digital Connect brings you the complete splendid e-cart responsive web designing solutions more innovatively. These can be easily accessed with multiple platforms such as smartphones, Desktop, Tablets, iPad, etc.",

                "We know and act according to your priorities, backed by a quick response team. Our responsive web designs would automatically ensure that your website is adaptable, trendy, and easy to navigate. We are the best web design company ready to bring you the best responsive features suitable for your website. It would automatically provide 100% satisfaction for your business uniquely.",

                "Our team makes your responsive website enabled with usability and global compatibility. Our responsive web design combines the efforts of robust, ingenious, and visionary web design experts. We are simply skilled in what we do. Responsive web design achieves easy access on Mobiles, Tablets, Laptops, and desktops."
            ],
        },
        {
            title: "Custom Web Designing Services",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Redesign Corporate Site",
            paragraphs: [
                "Our team is well versed in designing customized E-commerce websites. Availing our website designing services lets you get flawless payment gateway integrations. It is equipped with hassle-free, secure transactions. We live in a technologically driven world well versed in achieving a lasting online presence.",

                "We aim to bring your business to the top position to pursue success. Our team at The Digital Connect is a skilled team of full-stack web designers. It is a convenient option for employing years of expertise in building secure, high-performing, and feature-packed websites.",

                "We also bring you tailor-made products that meet your specific industry needs. Our team ensures a smooth digital transformation with custom web designing without hassle. The Digital Connect develops unique customized e-commerce solutions with the latest technologies such as Shopify, Magento, WooCommerce, BigCommerce, and more for your business with innovation."
            ],
        },
        {
            title: "Landing Page Designing",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            cta: "Connect with us to get a landing page designing service!",
            paragraphs: [
                "Our team understands website needs first and assures us with determining the exclusive needs of the website. We design a perfect landing page for your e-commerce web page, which allows you to attract more numbers of people quickly. We offer you the best clear-cut idea about your website and help to look and feel like it.",

                "With the data and information developing daily by the hour, our team would automatically recognize the necessity for dynamic website design with the appropriate landing page. The Digital Connect crafts interactive websites that come fully loaded with an attractive landing page. These WebPages would automatically provide the complete customizable pages, integrated CMS, and personalized user experiences.",

                "We would give the go-ahead for bringing you creative heads for embarking on the website development. Our excellent website will be sent to you for review so that they will provide you the better results. We would eliminate even the slightest error and finally test for removing any bugs."
            ],
        },
        {
            title: "Corporate/Small Business Website Designing",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Let's create intuitive web designs for you!",
            paragraphs: [
                "A corporate website is more than just a medium for showcasing the product and services. Whether you are a corporation, big or small, it is essential to portray the business with bright light tops with the best online requirements. The Digital Connect guarantees with every patron of ours no matter your products or services.",

                "Our proven corporate web design services help organizations use the internet to propagate the mission and establish thought-leadership. It is also suitable for creating sales-ready corporate/small business website design opportunities. Powerful features are equipped with the business website design.",

                "We constantly endeavor to develop professional websites that especially gain repeat customers. The Digital Connect is a top in creating attractive and unique-looking websites. It is 100% functional and easy to use, which would automatically reflect your brand to the world. We serve startups, SMBs, or large corporations! We build a corporate/small business website that works for you!"
            ],
        }
    ];

    const processSteps = [
        {
            title: "Increase Search Ranking",
            desc: "Responsive design and interactive website help to increase your keywords search ranking in Google SERP."
        },
        {
            title: "Enhance Brand Reputation",
            desc: "Having a strong brand reputation is an essential need for a business. Therefore, you can get it done quickly with our interactive designs."
        },
        {
            title: "Attract New Visitors",
            desc: "Indeed when your website contains good designs, it becomes easy to attract new visitors. It also helps you turn your visitors into potential customers."
        },
        {
            title: "Increase Leads & Conversions",
            desc: "We are a professional web design company dedicated to making your brand profitable and successful. In this way, we assist you in increasing the leads and conversions."
        },
        {
            title: "User-Friendly",
            desc: "Creating a user-friendly design is our expertise. We have become the first choice of several clients to frame a user-friendly and attractive web design."
        },
        {
            title: "Reduce Maintenance",
            desc: "We trust in creating the first perfect design. In this manner, we reduce the maintenance cost of web designs. Hire us to leverage reduced maintenance benefits."
        },
        {
            title: "Reduce Bounce Rate",
            desc: "If you have robust, impressive, relevant, and eye-catching designs on your website, users stay on this for sufficient time. Our designs are good at reducing the bounce rate."
        }
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
        "Pixel-perfect responsive designs tailored for 100% device compatibility",
        "Built-in Conversion Rate Optimization (CRO) with strategic UI pathways",
        "Mobile-first architecture ensuring lightning-fast load times and SEO advantage",
        "Accessibility-first approach complying with WCAG 2.1 AA standards",
        "Interactive Figma prototypes with comprehensive developer handoff specs",
        "Proven track record delivering award-winning digital experiences"
    ];

    const technologies = ["Figma", "Adobe XD", "Webflow", "HTML5/CSS3", "Tailwind CSS", "Framer Motion", "GSAP", "Lottie Animations", "Next.js"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Designing Services"
                    parentRoute="/services/ui-ux-design"
                    eyebrow="Web Design Company"
                    title="Professional Web Design Company"
                    description="The Digital Connect is the leading professional web design company offering full-spectrum service from mobile app development to digital marketing."
                    theme={theme}
                    visual={WebDesignVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom Web Design Excellence</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-2">
                                Process We Follow
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Being a renowned web designing company, we assist our clients in leveraging the top benefits of interactive web designs with our expertise. Get in touch with us.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Web Design Process"
                    eyebrow="Our Design Workflow"
                    description="From strategy and information architecture to high-fidelity UI design and developer handoff."
                    process={processSteps}
                />

                {/* Empower Your Business with Our Services */}
                <section>
                    <div className="bg-white py-8 md:py-12 lg:py-16">                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                            Empower Your Business with Our Services
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                            Our Offered Web Design Services
                        </h3>
                        {/* <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Custom responsive websites and landing pages engineered to convert.</p> */}
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
                        eyebrow="Our Design Suite"
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
                                Why Choose The Digital Connect as Your Web Design Company
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">Transform your online growth with custom web design:</p>
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

export default WebDesign;
