import TopicCard from '../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { GameDevOverviewVisual } from '../../components/services/subservices/visuals/VisualsGame';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Gamepad2, Trophy, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const GameDevelopment = () => {
    useSEO({
        title: "Full-Cycle Game Development Company | 2D, 3D, AR/VR & Metaverse Games | The Digital Connect",
        description: "Transform your game ideas into chart-topping commercial reality. The Digital Connect is a full-cycle game development studio engineering 2D, 3D, Unity, Unreal Engine, and Metaverse games."
    });

    const theme = { accent: "text-purple-600", bg: "bg-purple-500/20", softBg: "bg-purple-50" };

    const services = [
        {
            title: "Unity Game Development",
            icon: <Smartphone className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Android Game Services",
            link: "/services/game-development/android-game-development",
            paragraphs: [
                "The Unity3D game engine fosters the creation of any game project, from conception through completion and distribution. In addition to being the most widely used gaming engine globally, it is also the ideal choice for both beginning and experienced game producers.",

                "Developers at The Digital Connect may develop games for the big gaming platform by utilizing the capabilities and toolkits provided by the platform. Unity allows for development on more than 25 leading platforms, with one-click deployment throughout them all simultaneously. You have the option of developing for many platforms simultaneously or porting in the future.",

                "Using a single codebase, we’ll be able to release on several platforms simultaneously, with only minor modifications to the console features required. Among the many developer-friendly features of Unity3D are advanced programming, accessible APIs, the advanced physics system, collaboration software, network connectivity, rendering pipelines, a visual editor, and ArtEngine."
            ],
        },
        {
            title: "iOS Game Development",
            icon: <Gamepad2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Unity Game Services",
            link: "/services/game-development/unity-game-development",
            paragraphs: [
                "Depending on the requirements, we, as a mobile game apps development company, generate various art assets ranging from cartoon to realistic and then optimize them to function smoothly on various iOS-based devices. Our expert iOS game developers have a thorough understanding of the platform, an in-depth knowledge of technologies such as Unity3D, Cocos-2dx, Unreal, and others, and years of hands-on experience developing iOS games for various platforms.",

                "Our designers are familiar with the aesthetics of the iOS platform and can construct user-friendly interfaces. The fact that iOS devices are recognized for their fluid renderers and UI transitions leads us to design our application with this in mind. With the help of these and other capabilities, both novice and professional developers may easily create an online game of various kinds in a short amount of time.",

                "We provide comprehensive post-launch support and maintenance services, including performance optimization, game balance, bug and error correction, and other services designed to increase user retention and engagement."
            ],
        },
        {
            title: "Android Game Development",
            icon: <Apple className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Explore iOS Game Services",
            link: "/services/game-development/ios-game-development",
            paragraphs: [
                "One of the most obvious advantages of using HTML5 for gaming app development would be that the games will operate on any modern device, regardless of the operating system. Because HTML5 games are browser-based, developers can concentrate on the gameplay & how their game will respond to different screen sizes & input modalities.",

                "While you may need to customize the code for each platform, this is only sometimes the case. The development of a game with HTML5 is rapid and efficient. You won’t have to wait for the game to finish compiling, updating, & debugging in real-time, & once the game is finished, you’ll be able to release an update immediately.",

                "Games created in HTML5 may be viewed in the browser, broadening their audience. Users can also quickly share a link to the game with their friends. There is no need to download, install, or configure any game packages. That is all that is required to get started."
            ],
        },
        {
            title: "AR/VR and MR Game Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Metaverse Services",
            link: "/services/game-development/metaverse-development",
            paragraphs: [
                "If 3-dimensional tracking, smart glasses compatibility, or geolocation are necessary for your project, we will work with the appropriate SDKs for the task. Our mobile game app development & augmented reality video game developers are experienced in developing AR mobile games using popular tools such as ARCore, ARKit, Vuforia, ARToolkit, and Wikitude, among others.",

                "ARKit is Apple’s augmented reality foundation for iOS game app development and games. It can recognize the surrounding environment, such as planes and other things. Objects can be set in the environment, manipulated, and kept track of while the iPhone moves through the area. ARCore enables the developers to create augmented reality (AR) applications that overlay users’ vision with animated 3-dimensional material.",

                "ARToolKit, on the other hand, is free and open-source software that provides full access to AR library functionality. The main advantage is that it comes with a test app with annotations demonstrating the capabilities and its support for virtual reality app devices."
            ],
        },
        // {
        //     title: "Unreal Engine Game Development",
        //     icon: <Trophy className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Explore Unreal Engine Services",
        //     link: "/services/game-development/unreal-game-development",
        //     paragraphs: [
        //         "Build photorealistic, cinema-grade AAA PC and console video games with Unreal Engine 5.4, Nanite virtualized geometry, and Lumen lighting.",
        //         "Our senior C++ engineers develop dedicated multiplayer server infrastructure, Chaos destruction physics, and virtual production sets."
        //     ]
        // }
    ];

    const processSteps = [
        { title: "Game Conceptualization & GDD", desc: "Establishing game narrative, core player loops, level blueprints, art bibles, and monetization strategies." },
        { title: "Prototype & Core Mechanics", desc: "Developing playable greybox prototypes to validate controls, gameplay balance, physics feel, and fun factors early." },
        { title: "Art, Animation & 3D Modeling", desc: "Crafting stylized or photorealistic 3D/2D characters, PBR environment materials, dynamic VFX, and soundscapes." },
        { title: "Gameplay & Network Coding", desc: "Writing clean C# and C++ gameplay logic, AI behavior trees, multiplayer netcode, and UI screen transitions." },
        { title: "Cross-Platform QA & Certification", desc: "Conducting automated load tests, frame-time profiling, and compliance certification for Steam, Apple, and Google Play." },
        { title: "Store Publishing & LiveOps", desc: "Managing store launch, ASO optimization, seasonal content roadmaps, and continuous server monitoring." }
    ];

    const industries = [
        { name: "Mobile Gaming Studios", desc: "Top-grossing casual, puzzle, action, and strategy games.", icon: <Smartphone /> },
        { name: "AAA PC & Console Publishers", desc: "Cinematic commercial titles for Steam, Epic Games, PS5, and Xbox.", icon: <Trophy /> },
        { name: "eCommerce & Brand Gamification", desc: "Reward mini-games, virtual try-ons, and gamified loyalty loops.", icon: <ShoppingCart /> },
        { name: "EdTech & Game Learning", desc: "Interactive science labs, historical adventures, and puzzle quizzes.", icon: <GraduationCap /> },
        { name: "Virtual Events & Metaverse", desc: "Massive virtual festival grounds and interactive 3D brand pavilions.", icon: <Globe /> },
        { name: "Architecture & Real Estate", desc: "Photorealistic 3D interactive building walkthroughs and BIM tools.", icon: <Building2 /> },
        { name: "Sports & Virtual Athletics", desc: "Motion-tracked training simulators and esports competitive titles.", icon: <Dumbbell /> },
        { name: "Automotive Virtual Showrooms", desc: "Real-time 3D vehicle configurators and interactive dealership spaces.", icon: <Truck /> },
        { name: "Healthcare & Rehabilitation", desc: "Gamified physical therapy, mental health, and surgical simulations.", icon: <HeartPulse /> },
        { name: "Casino & Arcade Games", desc: "Certified RNG slot machines, multiplayer poker rooms, and arcade games.", icon: <Landmark /> },
        { name: "Film & Virtual Production", desc: "In-camera VFX LED wall environments, pre-visualization, and digital doubles.", icon: <MonitorPlay /> },
        { name: "Defense & Heavy Industry", desc: "High-stakes tactical training simulations and equipment digital twins.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Full-cycle game studio spanning concept art, 3D modeling, C#/C++ programming, and LiveOps",
        "Deep expertise across Unity 6, Unreal Engine 5.4, WebXR, Metal 3, and Vulkan pipelines",
        "Cross-platform deployment capabilities for Mobile, PC, Web, Console, and AR/VR headsets",
        "Low-latency multiplayer server engineering supporting tens of thousands of concurrent players",
        "Strategic in-app monetization models designed to maximize retention and player lifetime value",
        "100% intellectual property protection, non-disclosure agreements, and complete code transfer",
        "Rigorous performance profiling ensuring locked 60FPS and 120FPS with zero thermal throttling",
        "Dedicated post-launch LiveOps teams providing seasonal events and rapid content updates"
    ];

    const technologies = [
        "Unity 6", "Unreal Engine 5.4", "C#", "C++", "Vulkan", "Apple Metal 3",
        "WebXR / Three.js", "Photon Engine", "AWS Spatial Servers", "Blender",
        "Maya", "Substance 3D", "FMOD / Wwise", "Steamworks SDK", "Google Play Billing"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Our Services"
                    parentRoute="/services"
                    eyebrow="End-to-End Game Production Studio"
                    title="Full-Cycle Game Development & Metaverse Services"
                    description="Bring your interactive digital visions to life with our full-cycle game development studio. The Digital Connect builds captivating 2D, 3D, AR/VR, and Metaverse games powered by Unity 6 and Unreal Engine 5 for mobile, PC, console, and web platforms."
                    theme={theme}
                    visual={GameDevOverviewVisual}
                    ctaText="START YOUR GAME PROJECT"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Game Development Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering Blockbuster Video Games and Next-Gen Virtual Worlds
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Video gaming is the world's most lucrative and rapidly expanding entertainment medium, outgrossing the global film and music industries combined. Launching a standout game requires a harmonious synergy between captivating game mechanics, emotive storytelling, photorealistic 3D art, and low-latency multiplayer engineering.</p>
                                <p>At The Digital Connect, our multidisciplinary game studio partners with independent developers, global entertainment enterprises, and forward-thinking brands. From hyper-casual mobile hits and cross-platform Unity titles to photorealistic Unreal Engine 5 cinematic games and immersive WebXR Metaverse spaces, we handle the complete lifecycle from initial design to global launch and LiveOps growth.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Full-Cycle Game Development Lifecycle"
                    eyebrow="Agile Game Production"
                    description="From concept art and GDD creation to playable prototyping, asset optimization, store publishing, and LiveOps, our structured workflow ensures commercial excellence."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-purple-50 text-purple-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-purple-200">
                                Empower Your Vision with Game Development
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Game Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum game production and Metaverse engineering capabilities tailored for all major platforms.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FAF8FE]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-purple-600 mt-4 mb-6"></div>
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
                        title="Game Engines, Frameworks & Graphics Pipelines"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Game Genres & Verticals We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-purple-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-200 transition-colors">
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
                                <h2 className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Game Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine passion for gaming with enterprise software rigor to build games that captivate millions of players.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-purple-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build Your Dream Video Game?"
                    subtitle="Share your game vision or design document with our senior producers and receive a free technical roadmap & quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default GameDevelopment;
