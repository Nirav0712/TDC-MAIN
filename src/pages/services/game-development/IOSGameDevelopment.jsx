import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { IOSGameVisual } from '../../../components/services/subservices/visuals/VisualsGame';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Settings, Cpu, Terminal, Shield, RefreshCw, Gamepad2, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const IOSGameDevelopment = () => {
    useSEO({
        title: "iOS Game Development Company | iPhone & iPad Games | The Digital Connect",
        description: "Develop premium, high-ARPU iOS games utilizing Apple Metal 3, ProMotion 120Hz, and Game Center. We engineer award-winning games for iPhone, iPad, and Apple TV."
    });

    const theme = { accent: "text-cyan-600", bg: "bg-cyan-500/20", softBg: "bg-cyan-50" };

    const services = [
        {
            title: "iPad Game Development",
            icon: <Apple className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            cta: "Build iOS Game",
            paragraphs: [
                "Because of the bigger screen, the gaming experience on an iPad is far better than on the phone. The graphics card’s great rendering abilities, rather than its higher resolution, truly thrill gamers when it comes to 3D games.",

                "iPad-friendly games are no problem for our programmers, who have years of experience in this field. When you collaborate with us on your iPad game, you’ll benefit from lower costs, more game revenue, visual integrations, and the utilization of iPhone capabilities, to name a few benefits.",

                "More downloads and greater success rates in app stores achieve with our assistance compared to your competition. Our iPad game developers and their services will be adapted to the client’s specific requirements. Our games are developed by a team of professional iOS developers who are experts in developing iPad apps and much more."
            ],
        },
        {
            title: "iOS Game UI/UX Designing",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            cta: "Leverage Metal 3 Shaders",
            paragraphs: [
                "The Digital Connect is one of the top iOS game development companies to work with because we are energetic, creative, and well-versed in producing highly enjoyable and lucrative iOS games. Many of our customers’ iOS games have risen to the top of the charts and received great ratings in the app store.",

                "We have a team of professionals and artists who can work with you throughout the game development process to ensure success. Our team members will be with you throughout the whole process, from the first analysis to the final development phase. Before and after the deployment, all difficulties are taken into consideration.",

                "The fact that we are knowledgeable about the most current iOS tools and technologies allows us to deliver a top-notch iPhone gaming application. In addition, we will submit your program to the App Store in compliance with the App Store’s submission criteria after gaining permission from the company."
            ],
        },
        {
            title: "AR/VR iOS Game Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate Game Center",
            paragraphs: [
                "The adaptable real-time technology developed by The Digital Connect, originally used in gaming but now being used across industries to create innovative AR/VR content, opens you to a plethora of possibilities for your creative expression. Augmented reality can completely transform the way people interact with games and entertainment.",

                "The Digital Connect, a virtual reality game production company with extensive experience in reality technology, creates entertaining and fascinating augmented reality games for smartphones, smart glasses, and headsets. Our augmented reality and virtual reality technologies may take you to a virtual world while also enriching your experience in the actual world via the use of digital additions.",

                "We can develop custom plug-ins to make your applications or products more adaptive to specific circumstances while staying on top of the latest technological advances. With our augmented reality and virtual reality development services, you can create visually attractive AR / VR applications to supplement real-world settings and provide engaging experiences."
            ],
        },
        {
            title: "iOS 2D and 3D Game Development",
            icon: <CreditCard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Store Monetization",
            paragraphs: [
                "We’ve been a leading iOS 2D and 3D game development company for many years. Our iOS 2D and 3D game developers create feature-rich and powerful games for iOS devices such as iPhones and iPads, as well as other tablets and smartphones. Every gamer wants to play a game with a gripping plot, stunning graphics, and a soundtrack that’s as good as it looks.",

                "To ensure that every component of a game is handled properly, our team of highly-trained developers personally oversees every area of the project. Our well-versed team has a wealth of experience in game development and is well-suited to design and production tasks.",

                "Every step of the development process is extensively tested to provide the best possible outcomes. We help our customers transform their ideas into great iOS 2D and 3D games at fair and cost-effective pricing with an eye-catching UI and all the features the game needs."
            ],
        },
        {
            title: "iOS Game Support & Maintenance",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
            cta: "Explore ARKit Gaming",
            paragraphs: [
                "The real-time gaming experience we provide our clients ensures that our users have a thrilling and entertaining encounter. iOS game developers at our company can create single-player and multiplayer games based on a client’s specifications. We work with customers to create 2D and 3D scenarios and games across various genres.",

                "Full support and maintenance services are available after the game’s release, including game balancing, iOS app updates, performance improvements, and bug fixes. For improved user experience and engagement, we provide these services.",

                "We take care of each part of a client’s game and ensure that it is kept up to date using the most cutting-edge maintenance options available. Our team is available around the clock to answer any questions or concerns that the customer may have. With our professional approach, we promise to meet and exceed your expectations."
            ],
        },
        // {
        //     title: "Hardware Controller Support & Mac Catalyst Porting",
        //     icon: <Gamepad2 className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Enable Controller & Mac Support",
        //     paragraphs: [
        //         "Provide full native support for PlayStation DualSense, Xbox Wireless, and MFi gaming controllers with haptic feedback vibrations.",
        //         "We utilize Mac Catalyst to effortlessly expand your iOS touch title into a polished, mouse-and-keyboard ready macOS release."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Understanding the Client's Needs",
            desc: "We understand the kind of game our client wants to build, the game's ultimate objective, what features should be included, and, most importantly, who the game's intended audience is."
        },
        {
            title: "Conceptualization",
            desc: "Once we have a comprehensive understanding of the project's needs, specs, and target audience, we begin the process of conceptualization."
        },
        {
            title: "Prototype",
            desc: "When it comes to game development, prototyping refers to the process of experimenting with new ideas and solutions."
        },
        {
            title: "Development and Testing",
            desc: "As soon as our programmers are done with the game's development, we run the game's first test and notify if any bugs that found."
        },
        {
            title: "App Maintenance & Support",
            desc: "After the iOS games are delivered, we keep in touch with our customers to ensure everything runs well. We provide full-service maintenance and support to keep the game up-to-date with iOS."
        },
        {
            title: "App Launch and Promotion",
            desc: "We may establish a dedicated website and social media accounts for the game to guarantee that it has a large audience."
        },
        {
            title: "Support & Maintenance",
            desc: "We provide full-scale post-launch support and maintenance services, including performance enhancements, game balance, bug and error correction, etc, to increase user retention and engagement."
        }
    ];

    const industries = [
        { name: "Premium & Apple Arcade Titles", desc: "Polished story-driven premium games designed for Apple Arcade curation.", icon: <Trophy /> },
        { name: "Casual & Puzzle Games", desc: "Intuitive touch mechanics, satisfying haptics, and viral progression loops.", icon: <Gamepad2 /> },
        { name: "Augmented Reality (AR)", desc: "LiDAR-powered tabletop games, real-world escape rooms, and AR quests.", icon: <Sparkles /> },
        { name: "Competitive Multiplayer", desc: "Real-time PvP matches, Game Center matchmaking, and esports tournaments.", icon: <Users /> },
        { name: "RPG & Strategy Games", desc: "Deep progression trees, cloud inventory sync, and rich cinematic lore.", icon: <Briefcase /> },
        { name: "Gamified Fitness & Health", desc: "Apple Watch motion sensor integration, calorie burning, and health rewards.", icon: <HeartPulse /> },
        { name: "EdTech & Interactive Learning", desc: "Creative educational apps and interactive science adventures for kids.", icon: <GraduationCap /> },
        { name: "eCommerce Brand Gamification", desc: "Exclusive seasonal mini-games, loyalty points, and interactive rewards.", icon: <ShoppingCart /> },
        { name: "Music & Rhythm Games", desc: "ProMotion 120Hz precision beat matching and spatial audio tracking.", icon: <MonitorPlay /> },
        { name: "Racing & Flight Simulators", desc: "Realistic gyro steering, MFi controller support, and cockpit displays.", icon: <Truck /> },
        { name: "Architecture & Virtual Showrooms", desc: "Interactive 3D real estate tours with Apple Silicon photorealism.", icon: <Building2 /> },
        { name: "Casino & Card Games", desc: "Certified high-roller slots, poker tables, and blackjack with crisp Retina graphics.", icon: <Landmark /> }
    ];

    const reasons = [
        "Certified Apple developers and experienced iOS game designers with 5+ years experience",
        "Deep mastery of Apple Metal 3, MetalFX Upscaling, and 120Hz ProMotion optimization",
        "Seamless iCloud game saves, Game Center matchmaking, and StoreKit 2 monetization",
        "Uncompromising adherence to Apple Human Interface Guidelines and App Store approval",
        "Full support for MFi, PlayStation DualSense, and Xbox controller haptic feedback",
        "LiDAR and ARKit 6 expertise for pioneering augmented reality and spatial computing titles",
        "100% intellectual property ownership, strict NDAs, and source code transfer",
        "Dedicated post-launch LiveOps, seasonal events, and rapid OS version compatibility updates"
    ];

    const technologies = [
        "Apple Metal 3", "Swift / SwiftUI", "Unity 6", "Unreal Engine 5", "ARKit 6",
        "StoreKit 2", "Game Center", "CloudKit", "Core Haptics", "Spatial Audio",
        "Instruments Profiler", "TestFlight", "FMOD", "Blender", "Mac Catalyst"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Game Development"
                    parentRoute="/services/game-development"
                    eyebrow="Premium Apple Gaming"
                    title="A Creative iOS Game Development"
                    description="Deliver console-quality gaming experiences engineered exclusively for iPhone, iPad, Apple TV, and Mac. The Digital Connect utilizes Apple Metal 3, 120Hz ProMotion, and spatial computing technologies to build top-grossing, App Store featured titles."
                    theme={theme}
                    visual={IOSGameVisual}
                    ctaText="GET FREE IOS GAME QUOTE"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">iOS Gaming Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering High-ARPU, Visually Stunning iOS Games for Apple's Global Ecosystem
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>iOS gamers generate the highest Average Revenue Per User (ARPU) in the global mobile gaming industry. Capturing this lucrative audience requires flawless execution: responsive touch and controller ergonomics, 120Hz ProMotion smoothness, high-fidelity Metal graphics shaders, and seamless cross-device synchronization via iCloud and Game Center.</p>
                                <p>At The Digital Connect, our specialized iOS game engineering studio blends technical mastery of Apple Silicon hardware with captivating game design. From engaging hyper-casual hits and augmented reality tabletop adventures to deep narrative RPGs, we build iOS games that earn five-star ratings and coveted App Store editorial features.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our iOS Game Development Lifecycle"
                    eyebrow="Agile iOS Production"
                    description="From concept prototyping to Metal optimization, TestFlight betas, App Store certification, and LiveOps, our process ensures excellence."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-cyan-50 text-cyan-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-cyan-200">
                                Empower Your Vision on iOS
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our iOS Game Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum iOS game production capabilities built to create top-grossing App Store titles.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F2FCFD]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-cyan-600 mt-4 mb-6"></div>
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
                        title="Apple Graphics, Engines & Frameworks"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Game Genres & Verticals We Serve</h3>
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

                {/* Reasons to Choose Us */}
                <section className="py-20 lg:py-32 bg-[#FAF7F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for iOS Game Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine deep hardware-level optimization with high-conversion monetization to maximize App Store ROI.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="text-slate-700 font-medium text-sm leading-relaxed">{r}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Form */}
                <SubServiceShared.QuoteForm
                    theme={theme}
                    title="Ready to Build a Featured iOS Game?"
                    subtitle="Share your game vision with our Apple game development leads and receive an architectural roadmap & development estimate within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default IOSGameDevelopment;
