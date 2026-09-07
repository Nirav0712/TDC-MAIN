import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { IOSVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building2, Building, PenTool, Smartphone, MonitorPlay, MessageSquare, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const IOSDevelopment = () => {
    useSEO({
        title: "Trustworthy iOS Application Development Company",
        description: "We are a skilled iOS app development company committed to skyrocketing your business success and growth."
    });
    const theme = { "accent": "text-brand-electric-cyan", "bg": "bg-brand-electric-cyan/20", "softBg": "bg-brand-periwinkle/20" };

    const services = [
        {
            title: "iOS App UI/UX Designing",
            imgUrl: "/images/ios_ui_design.png",
            icon: <PenTool className="w-8 h-8" />,
            paragraphs: [
                "Mobile applications have a significant impact on businesses. iOS apps are helpful to create a significant impact on your business’s presence, profit, and visibility in today’s competitive world. This is not done yet with a professional iPhone application development company; you can easily reach your customers and increase ROI effortlessly.",
                "At 21Twelve Interactive, we have a strong team of UI/UX designers who are certified and skilled. Being a renowned iOS app development company, we have in-depth knowledge and expertise in making your app interactive and user-friendly. We know how to validate your ideas with our creative thinking and app development knowledge.",
                "Our expert designers have years of experience to create a perfect-match iOS application for iOS TV, tablets, or wearable devices. We are well-versed in designing, analysis, and development, so you can easily live stress-free and focus on your core business activities. We help you leverage the full potential of seamless UI/UX designs of iOS apps."
            ],
            cta: "Hire trusted iOS app development company!"
        },
        {
            title: "Custom iOS App Development",
            imgUrl: "/images/ios_custom_dev.png",
            icon: <Smartphone className="w-8 h-8" />,
            paragraphs: [
                "With the increasing use of mobile devices, businesses worldwide are moving towards creating mobile apps. Indeed it is a billion-dollar industry enabling businesses of all sizes and domains to increase their profits and reach globally. The iOS app market is huge, and millions of apps are available today that are operated on iOS. So why not grab its potential to improve your business growth.",
                "If you seek a professional iOS application development company, we are here to help you with our extensive expertise and industry knowledge. Whether you are a start-up or a well-known organization, iOS can help you boost it up more.",
                "With our custom iOS app development services, you can make your business competitive and take it to the new height of success. 21Twelve Interactive assists our clients in becoming sustainable and profitable in this digital age. We are committed to making your business competitive, sustainable, and profitable in today’s digital age."
            ],
            cta: "Contact us for iPhone app development services!"
        },
        {
            title: "iOS App Consulting",
            imgUrl: "/images/ios_consulting.png",
            icon: <MessageSquare className="w-8 h-8" />,
            paragraphs: [
                "Having an online presence has become vital for business. However, it is not easy to become the best in the market. Well! There are some best ways you can utilize you to create your mobile presence to reach a broad audience. As a professional iPhone application development company, we can help you leverage a perfect iOS app to get the immense benefits of having a robust mobile presence.",
                "Our trusted iOS app development consultants understand your requirements and work accordingly by following an agile development process. We ensure that you will get positive and profitable results in less time. Our veteran consultants create powerful and intuitive iOS experiences from scratch, so you don’t need to worry about anything.",
                "We consult from SMBs to large-scale businesses in getting a digital transformation. With us, you can easily enhance your overall performance in the right direction. Our consultants strategize a perfect end-to-end mobile app to monetize your efforts and make your business profitable."
            ],
            cta: "Get in touch with us for your iOS app development needs!"
        },
        {
            title: "iOS TV, iWatch & Ipad App Development",
            imgUrl: "/images/ios_tv_watch.svg",
            icon: <MonitorPlay className="w-8 h-8" />,
            paragraphs: [
                "Today businesses are incomplete without a functional mobile application. If you also run an online business, 21Twelve Interactive would be the best destination for you. Here we offer multidimensional website development for all types of business. No matter whether you’re looking to develop an application for iOS TV, iWatch, iPad or any other smart device, we are well-versed in it all.",
                "As a certified iPhone application development service, we ensure quick delivery of your business applications within an affordable price range. As a market leader, we ensure that your application thrives in the market. We offer development and provide post-development services such as maintenance, support, and performance review.",
                "Along with this, we keep an eye on the latest trends and keep updating your website from time to time, ensuring it stays ahead of its competitors. Reach out to us right away to assess your business requirements and get professional iOS app development services."
            ],
            cta: "Hire a professional iOS app development company!"
        },
        {
            title: "IOS App Support & Maintenance",
            imgUrl: "/images/ios_support.svg",
            icon: <Briefcase className="w-8 h-8" />,
            paragraphs: [
                "As mobile applications become our need, we get new technologies and updates now and then. With this, it becomes essential for the business to have professional support service. 21Twelve Interactive is a leading iOS App Support, Maintenance & Optimization service provider that helps businesses worldwide run smoothly.",
                "We look after companies from various domains. With a dynamic team of research experts, we always watch every market update and update our client’s applications accordingly. Whether you have developed your website and application with us or not, we provide the same standard of support and maintenance.",
                "Once you hire our support and maintenance service, we keep an eye on your website 24/7/365 to ensure that the performance is on point. Or if there’s any flaw detected, we resolve it right away. This also includes migrating, updating and porting the website to the new updates. Hire us today to avail the best support service for your website and application."
            ],
            cta: "Drop a message to get expert app development services!"
        }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Blending technology to bring seamless experience into education", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
        { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
        { name: "Legal Industry", desc: "New generation websites and apps for modern law firms", icon: <Scale /> },
        { name: "Blockchain & Crypto", desc: "Perfect apps for blockchain & crypto industry vertical", icon: <Bitcoin /> },
        { name: "Finance & Share Marketing", desc: "Trustworthy & next-gen mobile solutions for finance organizations", icon: <Landmark /> },
        { name: "Home Interior & Exterior", desc: "Rapidly develop a fully-functional home decor storefront", icon: <Paintbrush /> },
        { name: "Real-Estate Industry", desc: "Intelligent digital solutions for the real estate industry", icon: <Building2 /> },
        { name: "Hotel Industry", desc: "Smoothen your hotel processes with our digital solution", icon: <Building /> }
    ];

    const reasons = [
        "Superior iPhone app UI/UX designing",
        "Custom iOS application development",
        "Cost-effective app development services",
        "TV app and apple watch development",
        "App maintenance and support",
        "Native iOS app development solutions",
        "Migrating & updating existing apps",
        "Proficient in deploying iOS apps"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="The Best Solution For Your Business"
                    title="Trustworthy iOS Application Development Company"
                    description="We are a skilled iOS app development company committed to skyrocketing your business success and growth."
                    theme={theme}
                    visual={IOSVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section mapping exactly to user request */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024] mb-8">
                                Trusted iOS App Development Company
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>We are a skilled iOS app development company committed to skyrocketing your business success and growth. As a full-stack and highly professional iPhone application development service, we have developed and delivered native iOS apps that witnessed huge success rates and immense popularity on App Store. We are a strong team of experienced iPhone app developers who work with a vision to create robust, scalable, user-friendly, and interactive iOS apps. Our prominent programmers know how to create a perfect market-centric app to make your business successful and profitable. Indeed by hiring our iOS app development services, you can easily focus on your core business activities.</p>
                                <p>Our iOS app development process includes cutting-edge techniques, methodologies, and proven expertise, making us unique in the app development market. We have a strong team of iOS app designers, developers, quality analysts, project managers, and support, who work at their full capacity. So, it is the right time to leverage their development and manage a perfect app. Our technical leadership knows how to frame a multithreaded environment with lucrative designs, advanced algorithms, and core applications. Our proficient iOS app developers keep track of the entire app development lifecycle and ensure the product’s accuracy. From app monitoring to reducing overall load time, we maintain everything.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <SubServiceShared.Process
                    theme={theme}
                    title="Agile Development Process"
                    eyebrow="Enhance Your Project with Risk Free Development Process"
                    description="We follow the agile process for iOS app development. In this way, we ensure the app's performance and functionality."
                    process={[
                        { "title": "Planning", "desc": "21Twelve Interactive is a renowned iOS application development company; collect your app requirements to create a roadmap for development." },
                        { "title": "iOS App Designing", "desc": "In this step, we start designing the app using modular structures. We ensure to design a user-friendly and interactive iOS app." },
                        { "title": "iOS App Development", "desc": "Now we start the app development stage according to your business needs. Our developers ensure the app’s functionality and smooth flow." },
                        { "title": "Quality Assurance", "desc": "As a professional iPhone application development company, our quality analysts are committed to delivering quality bug-free and high-performing apps." },
                        { "title": "Deployment", "desc": "We know how to launch your app on the App Store. Our efficient developers are devoted to boosting your market and making it market-ready." },
                        { "title": "Support & Maintenance", "desc": "Our veteran iOS app developers keep track of your app’s performance and functionality. We keep you working and active all the time." }
                    ]}
                />

                {/* OUR iOS APP DEVELOPMENT SERVICES */}
                <section className="py-20 lg:py-32 bg-slate-50 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Empower Your Business with Our Services</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024]">Our iOS App Development Services</h3>
                        </div>
                        <div className="space-y-12 lg:space-y-24">
                            {services.map((svc, i) => (
                                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-center py-4`}>

                                    {/* Text Content */}
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="w-16 h-16 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-2xl flex items-center justify-center">
                                            {svc.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-bold text-[#0A1024]">{svc.title}</h4>
                                            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-cyan-500 rounded-full mt-4 mb-6"></div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                            {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                        </div>
                                        <div className="pt-4">
                                            <Link to="/contact" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link text-lg">
                                                {svc.cta}
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Image Card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, x: i % 2 !== 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="w-full lg:w-1/2 relative group"
                                    >
                                        <div className="absolute -inset-4 bg-cyan-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
                                        <div className="relative w-full bg-slate-100 border border-slate-100 rounded-[18px] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                            <img src={svc.imgUrl} alt={svc.title} className="w-full h-auto object-cover block" />
                                        </div>
                                    </motion.div>

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers’ engagement.</p>
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

                {/* REASONS TO CHOOSE US */}
                <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Reason to Choose US</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Hire Dedicated Developers to Passionately Lead Your Business Vision to Reality
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">As a renowned iPhone application development company, we are dedicated to offering customer-centric, profitable, and high-performing app development services. Know why to hire our iPhone application development services:</p>
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

                {/* GET A FREE QUOTE Form */}
                <section className="py-16 md:py-24 lg:py-32 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-[#0A1024] mb-3">GET A FREE QUOTE</h3>
                                <p className="text-slate-600">We will get back to you within 24 hours</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted smoothly!"); }}>
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
                                    <button type="submit" className="w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
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

export default IOSDevelopment;
