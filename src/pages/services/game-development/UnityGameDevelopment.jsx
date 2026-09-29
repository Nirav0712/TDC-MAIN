import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { UnityGameVisual } from '../../../components/services/subservices/visuals/VisualsGame';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, MonitorPlay, Apple, Smartphone, Combine,
    Layout, Server, FileText, Globe, Code, PenTool, Zap, Database,
    Cloud, Layers, CreditCard, Users, LayoutDashboard, Search,
    Target, Palette, Component, Repeat, Store, ShoppingBag, ArrowRightLeft,
    Share2, MessageSquare, BookOpen, CheckCircle, Sparkles, ShieldCheck, Mail, LineChart,
    Settings, Cpu, Terminal, Shield, RefreshCw, Gamepad2, Trophy, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const UnityGameDevelopment = () => {
    useSEO({
        title: "Unity Game Development Company | 2D, 3D & Cross-Platform Games | The Digital Connect",
        description: "Build immersive cross-platform 2D, 3D, AR/VR, and multiplayer games with certified Unity developers. We leverage Unity 6 and DOTS for maximum performance."
    });

    const theme = { accent: "text-indigo-600", bg: "bg-indigo-500/20", softBg: "bg-indigo-50" };

    const services = [
        {
            title: "Unity Game UI/UX Design",
            icon: <Gamepad2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            cta: "Build Unity Game",
            paragraphs: [
                "Unity is a cross-platform game engine suitable for developers to complete real-time 3D projects. Our Unity projects include proper planning, designing, technology, and perfect launch. We are the best Unity developers ready to create the best game with the principal use of the platform. Well-skilled Unity developers have the best programming experience in all languages.",

                "We use Unity for its integral role in the game development process. UI/UX Designing assures with best character development and storyboarding. Our UI designers render the ultimate prototype with their skills and experience to the maximum. These are created by keeping the targeted audience in mind.",

                "We have been working on a graphical presentation based on the interfaces that include fonts, illustrations, and more. Our UI designers’ team assures us of the best interactive features. We have been moving product development from research to engaging the responsive user experience in the game."
            ],
        },
        {
            title: "Unity 2D & 3D Art",
            icon: <Cpu className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Game Architecture",
            paragraphs: [
                "2D & 3D gaming development reached the greatest height within the standard boundaries. Apart from these, the gaming world has reached an admirable height, driven by the user’s demands. 3D game development services assure you that transforming your creative ideas into a dynamic and smooth user experience.",

                "We are the leading Unity 2D & 3D game development company well versed in handling all the situations on mobile gaming projects. We offer full-scale Unity 2D and 3D game design services, including UI/UX, user experience design, object drawing, and many more. We use talented Unity 3D game designers and artists to provide you with the most stunning visuals.",

                "Our developers implement unique features with significant game engines. Stunning designs of innovative 2D & 3D Art assure a fine-tuned look. Our experienced Unity developers mastered OpenGL, Direct3D, OpenGL ES, and many others."
            ],
        },
        {
            title: "Unity Mobile Game Development",
            icon: <Eye className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
            cta: "Build AR/VR Experiences",
            paragraphs: [
                "The Digital Connect is a leading Unity 3D game development company that delivers your complete unity game development services. We assure our active developments in building the game are shared with customers to solicit feedback. Our team of experts provides you with a highly secure gaming app suitable for protecting our customer’s personal information.",

                "The team of The Digital Connect provides the best functional and rich-featured services. It is one of the greatest options for securing the app and valuing the process. Our Unity Mobile Game Development team is involved with professional coders ready to work vigorously to uplift the business. These meet the complete expectation of customers.",

                "Our Vivid Gaming Designs are perfect for providing you with awe-inspiring features. These features cover all the attributes from the start to the end. Hire our unity game developer to easily get the top-notch functionality on the latest trends so they would give you the best result to the extent. We provide you with graphic development support on parallax and bump mapping."
            ],
        },
        {
            title: "AR & VR Development",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Multiplayer Game",
            paragraphs: [
                "Our Unity game AR & VR development team assures you of providing matchless terms of design and performance. We bring you constant functionality with an innovative approach to gaming designs. Our player-centred approach is unique in attracting the players to the highest standards.",

                "We develop unique gaming apps and deliver a seamless user experience, ensuring better user downloads from the app store. Our Unity Mobile Game Development team at The Digital Connect is known for the quality assurance of AR & VR developments. We will check the game functionalities along with the best performance levels.",

                "We also extensively conduct the best playtests by removing glitches and bugs. You can easily get the best 3D Unity support suitable for developing and deploying content on large platforms. It helps to achieve a better extent of the reach of the targeted audience. It also ensures the players enjoy a smooth and fast gaming experience"
            ],
        },
        {
            title: "Unity Cross-Platform Development",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Visual FX Studio",
            paragraphs: [
                "Creating Cross-Platform apps or games requires individual platforms. Our team extensively brings you the best smart aspects of cross-platform Unity development to the greatest extent. It would be a suitable option for being within the boundaries of a specific platform. It is convenient to use Javascript or C# to work in it. They offer you a better way to complete the program within the scheduled time easily.",

                "There are a wide number of advantages that cross-platform app development offers. Unity cross-platform developments are development-friendly as they would provide more suitable alterations, edits, and modifications in real-time with UI/UX models on pragmatic attributes.",

                "Developers can efficiently enable the best characteristics and choose rapid debugging features. These are also suitable ways for providing the live testing aspects. There is no need to bind themselves on technical checks with the Unity cross-platform development. They help create time-saving ready-made modules."
            ],
        },
        // {
        //     title: "Unity Game Optimization & Memory Profiling",
        //     icon: <Zap className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        //     cta: "Boost Game Framerate",
        //     paragraphs: [
        //         "Diagnose performance bottlenecks, draw call overheads, and Garbage Collection spikes using the Unity Profiler and Memory Profiler.",
        //         "We implement occlusion culling, texture compression (ASTC), mesh LODs, and Addressable Asset systems to minimize build sizes."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Defines Your Goal",
            desc: "We would define your goal, efficiently plan the project for the gaming app, and create the perfect plan to achieve the milestones for the business."
        },
        {
            title: "Requirement Gathering",
            desc: "Unity is the ideal framework for many game genres, and our developers would gather information on building their games from scratch. We create a system design, UX/UI design, and architecture for gaming solutions."
        },
        {
            title: "Prototype",
            desc: "Real-time 3D rendering in Unity is an ideal platform for developers to create prototype games easily. Designing the AR and VR assures gaining more audience."
        },
        {
            title: "Unity Game Development",
            desc: "Our team ensures the best solution for your gaming mode from coding, executing APIs, testing, and debugging. Different coding languages are used to provide the best scenarios."
        },
        {
            title: "Quality Testing",
            desc: "Unity game developers at The Digital Connect are involved in the full game development cycle. Our team will provide quality testing for implementing the complete gaming functionalities."
        },
        {
            title: "Game Deployment",
            desc: "With complete testing, we would launch both the 3D and 2D games for you with basic marketing features. Our Professional developers are known for being qualified and efficient in deployment."
        },
        {
            title: "Support & Maintenance",
            desc: "Our team ensures you get the best outcome, completely bug-free and debugged. It works perfectly on all platforms. We offer 24×7 support and maintenance service."
        }
    ];
    const industries = [
        { name: "Indie & AAA Games", desc: "Original 2D/3D commercial game titles for Steam, PlayStation, and Xbox.", icon: <Gamepad2 /> },
        { name: "Mobile Gaming Studios", desc: "Top-grossing casual, puzzle, action, and strategy games.", icon: <Smartphone /> },
        { name: "Enterprise Simulation & Training", desc: "Interactive 3D digital twins, medical simulations, and defense drills.", icon: <Briefcase /> },
        { name: "EdTech & Game Learning", desc: "Gamified learning modules, interactive science labs, and puzzles.", icon: <GraduationCap /> },
        { name: "Architecture & Real Estate", desc: "Interactive 3D virtual walkthroughs and photorealistic BIM viewers.", icon: <Building2 /> },
        { name: "Automotive Visualization", desc: "Real-time 3D car configurators and virtual showroom environments.", icon: <Truck /> },
        { name: "Healthcare & Rehabilitation", desc: "Gamified physical therapy and motor-skill recovery applications.", icon: <HeartPulse /> },
        { name: "eCommerce & 3D Web", desc: "Interactive 3D product previews and WebGL gamified experiences.", icon: <ShoppingCart /> },
        { name: "Sports & Virtual Athletics", desc: "Motion-tracked training simulators and esports tournament titles.", icon: <Dumbbell /> },
        { name: "Casino & Arcade Games", desc: "Certified 3D slot machines, roulette wheels, and arcade machines.", icon: <Landmark /> },
        { name: "Virtual Events & Metaverse", desc: "Interactive branded virtual pavilions and avatar concert worlds.", icon: <Globe /> },
        { name: "Aerospace & Defense", desc: "Flight simulators, procedural terrain generation, and telemetry HUDs.", icon: <Navigation /> }
    ];

    const reasons = [
        "Certified Unity technical directors, C# software architects, and technical artists",
        "Deep mastery of Unity 6, DOTS / ECS, Burst compiler, and URP/HDRP pipelines",
        "Single-codebase deployment across Mobile, PC, WebGL, Console, and AR/VR headsets",
        "Comprehensive profiling eliminating garbage collection stutter and thermal throttling",
        "Proven expertise in multiplayer networking (UGS, Photon, Netcode) and matchmaking",
        "Full integration of Addressable Asset systems for instant over-the-air content patches",
        "100% intellectual property ownership, NDA protection, and transparent sprint reporting",
        "Dedicated post-launch LiveOps, seasonal battle pass updates, and ongoing QA support"
    ];

    const technologies = [
        "Unity 6", "C# (.NET)", "DOTS / ECS", "Burst Compiler", "URP / HDRP",
        "Shader Graph", "VFX Graph", "Unity Gaming Services", "Photon Engine",
        "AR Foundation", "WebXR", "FMOD / Wwise", "Blender", "Steamworks SDK"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Game Development"
                    parentRoute="/services/game-development"
                    eyebrow="Cross-Platform Gaming Engine"
                    title="Enterprise Unity Game Development Services"
                    description="Build captivating 2D, 3D, AR/VR, and multiplayer games with certified Unity developers. The Digital Connect utilizes Unity 6, DOTS, and modern C# architectures to deliver photorealistic visuals and silky-smooth framerates across mobile, PC, console, and XR devices."
                    theme={theme}
                    visual={UnityGameVisual}
                    ctaText="GET FREE UNITY QUOTE"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-3">Unity Engine Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Crafting High-Fidelity, Cross-Platform Games with Unity Engine
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Unity stands as the global industry benchmark for cross-platform interactive 3D and 2D development, powering over 70% of top mobile games and thousands of acclaimed PC, console, and virtual reality experiences. Its versatile modular engine, scriptable render pipelines, and powerful Data-Oriented Technology Stack (DOTS) enable game studios to deliver stunning visual fidelity across virtually any hardware platform.</p>
                                <p>At The Digital Connect, our certified Unity architects, programmers, and 3D technical artists craft custom gameplay mechanics, dynamic shader effects, multiplayer network topologies, and interactive XR simulations. We take your game idea from initial design documents to production launch and ongoing LiveOps expansion.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Unity Game Development Lifecycle"
                    eyebrow="Agile Unity Production"
                    description="From gameplay mechanics prototyping to shader optimization, multi-platform certification, and LiveOps, our process ensures stellar game delivery."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-indigo-50 text-indigo-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-indigo-200">
                                Empower Your Vision with Unity
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Unity Game Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our full suite of Unity development capabilities designed for mobile, PC, console, and XR platforms.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F6F6FD]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-indigo-600 mt-4 mb-6"></div>
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
                        title="Unity Tools, Frameworks & SDKs"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Domains We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
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
                                <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Unity Game Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine world-class C# engineering with cutting-edge visual art to deliver market-dominating Unity titles.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build an Award-Winning Unity Game?"
                    subtitle="Share your game design document or concept with our Unity team and receive a comprehensive technical proposal & quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default UnityGameDevelopment;
