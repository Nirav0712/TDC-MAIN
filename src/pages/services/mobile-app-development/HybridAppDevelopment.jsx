import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { HybridAppVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { ArrowRight, CheckCircle2, ChevronRight, Apple, Smartphone, Combine, MonitorPlay, PenTool, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HybridAppDevelopment = () => {
    useSEO({
        title: "Custom Mobile App Development Company | The Digital Connect",
        description: "The Digital Connect provides custom mobile app development solutions for iOS, Android, iPad, hybrid, and cross-platform applications with scalable and cost-effective technology solutions."
    });

    const theme = { "accent": "text-brand-electric-cyan", "bg": "bg-brand-electric-cyan/20", "softBg": "bg-brand-periwinkle/20" };

    const services = [
        {
            title: "iOS App Development Services",
            imgUrl: "https://www.21twelveinteractive.com/wp-content/uploads/2022/10/IOS-APP-DEVELOPMENT-SERVICES.jpg.webp",
            cta: "Have an iOS app idea? Let’s discuss now!",
            ctaImg: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Have-an-iOS-app-idea-Lets-discuss-now..png.webp",
            paragraphs: [
                "Being a reliable mobile app development company, we help you fulfill your app’s requirements. Our dexterous team of skilled developers makes us a top iOS app development firm worldwide. We help you become competitive and challenging among your competitors. Our long years of expertise have delivered comprehensive, reliable, and highly secured solutions to different business verticals. Our avid iOS developers know all the modern programming languages and tools that help them develop interactive and innovative applications.",
                "We are a strong team of industry-veteran programmers having expertise and knowledge of the latest methodologies and technologies. We are committed to serving business-centric and highly profitable app development solutions in the set timeframe. If you want to meet the ever-changing demand of today’s iOS app users, we are the one-stop destination for you. Our solutions are coded by professional UI/UX designers, quality analysts, and expert developers. Connect with us for affordable iOS app solutions.",
                "We are a leading mobile application development agency, delivering affordable iPad solutions to add value to our client’s businesses. When you need growth for your business and to reach global customers, choosing our iPad app solutions is the best bet. Our team is well-versed and knowledgeable in developing cutting-edge iPad apps that are robust and high-performing. Furthermore, we help you leverage the maximum benefits with our apps for the future growth of your business."
            ]
        },
        {
            title: "Android App Development Services",
            imgUrl: "https://www.21twelveinteractive.com/wp-content/uploads/2022/10/ANDROID-APP-DEVELOPMENT.jpg.webp",
            cta: "Let’s connect with us to get the best Android app development services!",
            ctaImg: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Lets-connect-with-us-to-get-the-best-Android-app-development-services.png.webp",
            paragraphs: [
                "Do you want to experience innovation and creativity? Are you seeking a reliable and highly affordable Android app development company? We are here to assist you with our in-depth technical expertise and experience. Our experienced Android app developers are serving the best apps to industry domains.",
                "With a specialized team, we create robust and well-researched apps for your business to make it profitable and competitive. We assure to offer high-performing and robust solutions. Our developers know the Android platform’s security cracks; we utilize full security protocols and tools to resolve these cracks.",
                "We ensure the smooth flow of the app’s architecture and strong security layers throughout the development. Maintaining transparency is our major advantage. To get your trust in our app development process, we report to you regularly and update you on the project’s progress."
            ]
        },
        {
            title: "Hybrid Mobile App Development",
            imgUrl: "https://www.21twelveinteractive.com/wp-content/uploads/2022/10/HYBRID-MOBILE-APP-DEVELOPMENT.jpg.webp",
            cta: "Have a call with us right now!",
            ctaImg: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Have-a-call-with-us-right-now.png.webp",
            paragraphs: [
                "Do you need an app that can run seamlessly across the iOS and Android platforms within a limited budget? A hybrid app is the best answer. It is a blend of web and native apps and offers a cross-platform experience and highly scalable robust features in a fully customized mobile app.",
                "Hybrid app development includes native app capabilities and features and also serves to put developers and businesses on the way toward the acceptance of HTML5 app development. We are the top mobile app development company and have a proven track record of delivering highly functional and innovative hybrid app solutions to our clients.",
                "Our developers use modern technologies to bring ideas into reality. We ensure optimum user experience. The hybrid applications we create offer seamless functionality and load faster as well. Our proficient designers create apps that are aesthetically interactive and appealing. We keep our clients on top priority and deliver the work on or before time."
            ]
        }
    ];

    const process = [
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/05/requirement-gathering.png.webp", title: "Requirement Analysis", desc: "The initial stage of our app development process includes a discussion about the project. Our business analysts understand your requirements and assist you with the best possible solution." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/UI-UX-Design.png.webp", title: "UI/UX Design", desc: "Here, we make UI/UX design strategies as per your requirements and business domain. We create intuitive, interactive, and user-friendly UI/UX designs." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Prototype-3.png.webp", title: "Prototype Development", desc: "We know the vitality of prototypes. Our team stimulates user experiences and app workflows. With prototype development, we help you know the app’s functionality and flow." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/App-Development.png.webp", title: "App Development", desc: "After integrating things with app designs, our experience app developers bring everything into action. Now we start the app development process to get the set milestones per your requirements." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Quality-Assurance.png.webp", title: "Quality Assurance", desc: "As a leading mobile app development firm, we always perform quality assurance testing to deliver secure, usable, & stable solutions." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Deployment-1.png.webp", title: "Proper Deployment", desc: "Releasing a native and customer-centered mobile app needs submitting it to the app stores, Google Play for Android apps, and Apple App Store for iOS apps. We know how to deploy and release the app successfully." },
        { img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Support-Maintenance-3.png.webp", title: "Support & Maintenance", desc: "Our support & maintenance team is always ready to offer uninterrupted app functionality. We are here to fix all issues instantly if you face any issues during development or after the app release." }
    ];

    const technologies = [
        { title: "Swift", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/08/swift-technology.png.webp" },
        { title: "Objective-c", img: "https://www.21twelveinteractive.com/wp-content/uploads/2023/01/Objective-C.png.webp" },
        { title: "X-Code", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/05/xcode-logo.png.webp" },
        { title: "Java", img: "https://www.21twelveinteractive.com/wp-content/uploads/2023/01/Java-1.png.webp" },
        { title: "Kotlin", img: "https://www.21twelveinteractive.com/wp-content/uploads/2023/01/KotlinIcon.png.webp" },
        { title: "Android Studio", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/05/technology-icon.png.webp" },
        { title: "Flutter", img: "https://www.21twelveinteractive.com/wp-content/uploads/2023/01/Fluttericon.png.webp" },
        { title: "React Native", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/05/react-logo.png.webp" },
        { title: "Ionic", img: "https://www.21twelveinteractive.com/wp-content/uploads/2023/01/iconic-icon.png.webp" }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" },
        { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/health-and-fitness.png.webp" },
        { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/travel-and-hospitality.png.webp" },
        { name: "Education & e-Learning", desc: "Blending technology to bring seamless experience into education", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/education-and-e-learning.png.webp" },
        { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" },
        { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/Sports-Industry.png.webp" },
        { name: "Legal Industry", desc: "New generation websites and apps for modern law firms", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/Legal-Industry.png.webp" },
        { name: "Blockchain & Crypto", desc: "Perfect apps for blockchain & crypto industry vertical", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/Blockchain-Crypto.png.webp" },
        { name: "Finance & Share Marketing", desc: "Trustworthy & next-gen mobile solutions for finance organizations", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" },
        { name: "Home Interior & Exterior", desc: "Rapidly develop a fully-functional home decor storefront", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" },
        { name: "Real-Estate Industry", desc: "Intelligent digital solutions for the real estate industry", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" },
        { name: "Hotel Industry", desc: "Smoothen your hotel processes with our digital solution", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/07/ecommerce-and-retail-1.png.webp" }
    ];

    const reasons = [
        { title: "All types of app solutions", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/All-Types-of-App-Solutions.png.webp" },
        { title: "Quick app development services", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Quick-App-Development-Services.png.webp" },
        { title: "A creative team of UI/UX designers", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/A-Creative-Team-of-UX-UX-Designers..png.webp" },
        { title: "24x7 assistant", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/24x7-Assistant.png.webp" },
        { title: "Transparent communication", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Transparent-Communication.png.webp" },
        { title: "Timely delivery & reporting", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Timely-Delivery-Reporting.png.webp" },
        { title: "Following agile methodology", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Following-Agile-Methodology.png.webp" },
        { title: "Top-notch quality assurance", img: "https://www.21twelveinteractive.com/wp-content/uploads/2022/09/Top-Notch-Quality-Assurance.png.webp" }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    eyebrow="The Best Solution For Your Business"
                    title="Custom Mobile App Development Company"
                    description="Build powerful, scalable and cost-effective mobile applications that deliver seamless experiences across iOS and Android with our expert hybrid app development services."
                    theme={theme}
                    visual={HybridAppVisual}
                    ctaText="GET FREE QUOTE NOW"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Reliable Mobile App Development Company
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>We are a leading mobile app development agency empowering businesses with best-in-class app development solutions. We know the gravity of your prospect’s ideas and promptness. Due to our cost-effective and quality app development, we have become the first choice of different brands worldwide. Our team is deeply dedicated to developing highly customized and interactive apps that help you meet your business needs with full customer satisfaction in mind. Our custom app development enables you to effortlessly serve a wide range of customers. As a renowned custom mobile app development company, we help you face tech challenges in today’s digital world.</p>
                                <p>We are committed to providing cutting-edge mobile app solutions. Our clients know as the best mobile app development agency, as we always deliver adaptive and highly scalable apps for iPhone, Android, iPad, hybrid, and cross-platform. We help you turn ideas into reality. We have years of expertise in mobile app innovation and have given the most prominent and impeccable fit solutions to their requirements. Our expert team uses modern tools and top app development technologies to bring the best mobile apps to your business. We help you grow your business with the right technology and cost-effective app solutions.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* AGILE DEVELOPMENT PROCESS */}
                <section className="py-20 lg:py-32 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Enhance Your Project with Risk Free Development Process</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Agile Development Process</h3>
                            <p className="text-slate-600">Delivering reach-rich, customized, cost-effective, and scalable app development solutions to businesses.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div key={index} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 mb-6 bg-slate-50 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                                        <img src={step.img} alt={step.title} className="w-12 h-12 object-contain" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A1024] mb-4 flex items-center gap-2">
                                        <span className="text-cyan-500 text-sm font-black">0{index + 1}</span>
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR MOBILE APP DEVELOPMENT SERVICES */}
                <section>
                    <div className="bg-white py-12 md:py-16 lg:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-full mb-6">
                                Empower Your Business with Our Services
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-4">
                                Our Mobile App Development Services
                            </h3>
                            <p className="text-slate-600 max-w-3xl mx-auto">Get your mobile app idea off the ground with our high-quality mobile app development services. We offer custom iOS, Android, and Hybrid development for businesses of all sizes. With us, you can trust that your project will be handled by experienced professionals from start to finish.</p>
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
                                        className={"group relative flex flex-col  items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F0F7FF]"}
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

                                                <Link to="/contact" className="group/link flex items-center justify-between w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <div className="shrink-0 bg-white/10 p-2 rounded-lg">
                                                            <img src={svc.ctaImg} alt="CTA Icon" className="w-6 h-6 object-contain" />
                                                        </div>
                                                        <span className="font-semibold text-sm sm:text-base leading-snug">
                                                            {svc.cta}
                                                        </span>
                                                    </div>
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

                {/* TECHNOLOGIES */}
                <section className="py-20 lg:py-32 bg-[#F8FAFC]">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Sculpt Your Idea Using Innovative Techniques</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Technologies We Work On</h3>
                            <p className="text-slate-600">We are very selective about the development frameworks, databases, and platforms we utilize for product development. Our key solutions are consulting, design, development, domain-specific solutions, and support.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {technologies.map((tech, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4">
                                    <img src={tech.img} alt={tech.title} className="h-12 w-12 object-contain" />
                                    <span className="font-bold text-[#0A1024] text-center text-sm">{tech.title}</span>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-cyan-200 hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:border-cyan-200 transition-colors p-2">
                                        {ind.img ? <img src={ind.img} alt={ind.name} className="w-8 h-8 object-contain" /> : <div className="w-8 h-8 bg-slate-200 rounded"></div>}
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
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Hire Dedicated Developers to PassionatelyLead Your Business Vision to Reality</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                Reason to Choose US
                            </h3>
                            <h4 className="text-xl font-bold text-slate-700 mb-4">Our Key Features</h4>
                            <p className="text-slate-600">The Digital Connect is committed to delivering excellence and quality to clients and enabling them to achieve growth and revenue.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {reasons.map((reason, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-50 flex items-center justify-center p-2">
                                        <img src={reason.img} alt={reason.title} className="w-8 h-8 object-contain" />
                                    </div>
                                    <span className="text-[#0A1024] font-bold leading-snug">{reason.title}</span>
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

export default HybridAppDevelopment;
