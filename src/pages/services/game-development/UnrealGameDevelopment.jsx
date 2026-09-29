import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { UnrealGameVisual } from '../../../components/services/subservices/visuals/VisualsGame';
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

const UnrealGameDevelopment = () => {
    useSEO({
        title: "Unreal Engine Game Development Company | AAA PC & Console Games | The Digital Connect",
        description: "Develop photorealistic AAA games with certified Unreal Engine 5 developers. We utilize UE5 Nanite, Lumen, Chaos Physics, and C++ for PC, PlayStation 5, and Xbox Series X/S."
    });

    const theme = { accent: "text-orange-600", bg: "bg-orange-500/20", softBg: "bg-orange-50" };

    const services = [
        {
            title: "Unreal Engine Animation",
            icon: <Gamepad2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            cta: "Build Unreal Engine Game",
            paragraphs: [
                "Using Unreal Engine, animators can produce stunning game sequences in a fraction of the time it would take using other methods; when frames can be rendered in less time, the potential for increased output increases. Everything a studio needs to bring people and things to life in 3D may be founded in the game unreal engine’s standard toolkit.",

                "At The Digital Connect, the best game developers team is top-notch, so the games’ characters, environments, and vehicles are all tweaked to perfection using mesh and animation editing tools. In addition to the animated video game items, we also assist various companies with engaging more consumers, increasing conversions, and speeding up their SEO rankings with the aid of our animated movies."
            ],
        },
        {
            title: "Unreal Game Engine",
            icon: <Sparkles className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            cta: "Leverage UE5 Photorealism",
            paragraphs: [
                "To remain ahead in today’s competitive digital market, organizations must develop mobile applications that are engaging and easy to use. Developing user-friendly and distributing cutting-edge mobile applications is a great way to assist companies of all sizes and sectors in streamlining their operations and increasing their bottom line. Our best game developer has been dedicated to becoming the best Unreal game production studio.",

                "We have specialists in Unreal that can make your dreams come true. Hire dedicated game developers at The Digital Connect to use cutting-edge tools and methods to develop visually stunning Unreal mobile applications. The Digital Connect is revolutionizing how businesses simplify operations, develop new, more robust products, and reach their objectives with its out-of-the-box Unreal mobile app solutions."
            ],
        },
        {
            title: "Mobile and web-based solutions",
            icon: <Server className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            cta: "Architect UE Multiplayer",
            paragraphs: [
                "We deliver powerful mobile and web-based solutions tailored to consumers’ specific needs, so you can serve them regardless of whether they’re accessing your service from a mobile device or a desktop computer. Our answers function uniformly across all major platforms and hardware configurations. The Digital Connect’s expertise in creating mobile apps using the Unreal engine is unparalleled.",

                "Small and low-budget mobile applications may benefit greatly from using an unreal engine since it allows for creating stunning 3D environments without effort. Our professionals have worked with UE4 for years, so you can trust that their mastership will make the most of the engine’s potential and impressive capabilities."
            ],
        },
        {
            title: "Extended AR/VR support",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Create Open World Games",
            paragraphs: [
                "We develop agile, engaging, and user-centric Augmented Reality (AR) and Virtual Reality (VR) solutions by combining Unreal’s tools and technologies with a thorough grasp of your project’s objectives. You can get a whole new level of enjoyment out of your favorite apps and games by using augmented reality and virtual reality technologies. Small businesses and large corporations are betting on the growth of augmented and virtual reality to boost profits.",

                "AR and VR have tremendous potential to revolutionize the gaming and entertainment industries. To help you bring your imaginative ideas to life, The Digital Connect delivers custom AR and VR game creation services across many platforms and genres. We provide state-of-the-art AR/VR solutions for developing innovative software and games."
            ],
        },
        {
            title: "Simulations",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Chaos Physics",
            paragraphs: [
                "Games made using the Unreal engine are rapidly advancing in quality. Thanks to AR and VR technology that takes video games have taken a new dimension. Augmented and virtual reality simulations refine and enhance the game experience through the game development company. Startups and large companies are trying to perfect the integration of immersive simulation into Unreal game creation.",

                "We use state-of-the-art tools and methods to keep ahead of the curve, such as developing 3D simulation effects in unreal engine game development and rely on our extensive understanding of immersive technology. Extreme power is drawn from the features of UE4 (and eventually UE5), including its built-in components (fire, smoke, dust, water, etc.), visual effects editing tools, clothing tools to mimic garments and textiles, stand-based hair & fur simulations, and Chaos next-gen physics & destruction system."
            ],
        },
        // {
        //     title: "Virtual Production & High-End ArchViz Simulation",
        //     icon: <MonitorPlay className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
        //     cta: "Explore Virtual Production",
        //     paragraphs: [
        //         "Pioneer real-time virtual production filmmaking with LED in-camera VFX (ICVFX), camera tracking synchronization, and digital twins.",
        //         "We craft photorealistic architectural visualization walkthroughs and high-fidelity automotive product demonstrations."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "We first focus on collecting the necessary data, materials, and specifications to kick off our project."
        },
        {
            title: "User Interface/User Experience Design",
            desc: "Using cutting-edge design software, we develop visually appealing and engaging layouts for optimal use of unreal engine game development."
        },
        {
            title: "Prototype",
            desc: "Once the design phase is complete, a prototype is developed and passed on to the next stage of the product’s creation."
        },
        {
            title: "Development",
            desc: "With complete openness, we have begun developing a mobile app, online platform, or blockchain."
        },
        {
            title: "Quality Assurance",
            desc: "The Digital Connect places a premium on quality and delivers a flawless software product free of bugs."
        },
        {
            title: "Deployment",
            desc: "Your app has been tested and is ready for distribution on the App Store or Google Play."
        },
        {
            title: "Service and Upkeep",
            desc: "After implementation, you will have full assistance from our organization, and our staff is available to answer any questions."
        }
    ];

    const industries = [
        { name: "AAA PC & Console Gaming", desc: "High-budget commercial titles for Steam, Epic Games, PS5, and Xbox.", icon: <Trophy /> },
        { name: "Competitive Multiplayer & Shooters", desc: "Fast-paced tactical FPS, battle royales, and arena combat.", icon: <Gamepad2 /> },
        { name: "Virtual Production & Film", desc: "In-camera LED wall backgrounds, cinematics, and digital stunt doubles.", icon: <MonitorPlay /> },
        { name: "Automotive & Aerospace Visuals", desc: "Real-time car configurators, flight simulations, and marketing renders.", icon: <Truck /> },
        { name: "Architecture & Real Estate (ArchViz)", desc: "Interactive 3D luxury property walkthroughs with photoreal lighting.", icon: <Building2 /> },
        { name: "Defense & Heavy Industry Training", desc: "High-stakes tactical training simulations and heavy machinery VR.", icon: <Briefcase /> },
        { name: "Story-Driven Action & RPGs", desc: "Expansive cinematic quests, motion-captured dialogue, and deep lore.", icon: <Sparkles /> },
        { name: "Medical & Surgical Digital Twins", desc: "Anatomical simulations with realistic soft-body tissue physics.", icon: <HeartPulse /> },
        { name: "Broadcast & Esports Graphics", desc: "Real-time augmented reality broadcast overlays and virtual studios.", icon: <Globe /> },
        { name: "Historical & Cultural Recreations", desc: "Photorealistic digital preservation of ancient cities and monuments.", icon: <Landmark /> },
        { name: "Theme Park & Location Entertainment", desc: "Interactive dark rides, dome projection mapping, and VR attractions.", icon: <Navigation /> },
        { name: "Enterprise Metaverse Simulations", desc: "High-fidelity virtual headquarters and industrial product showcases.", icon: <Building /> }
    ];

    const reasons = [
        "Certified Unreal Engine C++ software engineers and technical artists with 5+ years experience",
        "Deep mastery of Unreal Engine 5.4, Nanite virtual geometry, Lumen lighting, and Chaos physics",
        "Expertise in Gameplay Ability System (GAS) and dedicated server multiplayer networking",
        "Proven experience deploying certified commercial titles to PlayStation 5, Xbox, and Steam",
        "Real-time virtual production workflows for broadcast, cinema, and luxury automotive visualization",
        "Comprehensive profiling with Unreal Insights to maintain locked 60FPS and 120FPS targets",
        "100% intellectual property ownership, NDA protection, and full source code transfer",
        "Dedicated post-launch LiveOps, matchmaking maintenance, and DLC content support"
    ];

    const technologies = [
        "Unreal Engine 5.4", "C++", "Blueprints", "Nanite", "Lumen", "Chaos Physics",
        "Niagara VFX", "Gameplay Ability System (GAS)", "World Partition", "MetaHuman",
        "Unreal Insights", "Steamworks SDK", "PlayStation SDK", "Xbox GDK", "Blender / Maya"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Game Development"
                    parentRoute="/services/game-development"
                    eyebrow="Photorealistic AAA Game Engine"
                    title="Enterprise Unreal Engine Game Development Services"
                    description="Build cinematic, photorealistic AAA games and interactive 3D simulations with certified Unreal Engine developers. The Digital Connect utilizes Unreal Engine 5.4, Nanite, Lumen, and modern C++ to deliver unmatched visual fidelity and fluid framerates across PC, PS5, Xbox Series X/S, and Virtual Production."
                    theme={theme}
                    visual={UnrealGameVisual}
                    ctaText="GET FREE UNREAL QUOTE"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Unreal Engine Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering Photorealistic, Next-Gen Unreal Engine Games and Virtual Worlds
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Unreal Engine 5 represents the absolute pinnacle of real-time 3D graphics, physics simulation, and high-concurrency multiplayer networking. Empowered by revolutionary technologies like Nanite virtualized geometry, Lumen dynamic global illumination, and the Chaos physics engine, UE5 enables game developers and creators to build photorealistic worlds previously confined to offline Hollywood render farms.</p>
                                <p>At The Digital Connect, our certified Unreal Engine developers, C++ programmers, and technical artists deliver AAA PC and console video games, large-scale open worlds, real-time virtual production sets, and enterprise simulations. We provide end-to-end production support—from initial prototype to console TRC certification and worldwide release.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Unreal Engine Game Development Lifecycle"
                    eyebrow="Agile UE5 Production"
                    description="From C++ system design to Nanite asset optimization, multiplayer stress testing, and console certification, our process delivers AAA excellence."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-[#FFF4ED] text-orange-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6">
                                Empower Your Vision with Unreal Engine
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Unreal Engine Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-spectrum Unreal Engine 5 production capabilities built for AAA video games, simulations, and virtual production.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#FFF9F5]`}
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
                        title="Unreal Engine Tools, SDKs & Pipelines"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Domains We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
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
                                <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Unreal Game Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine high-level C++ engine architecture with Hollywood-grade art pipelines to deliver blockbuster games.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-orange-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build a Blockbuster Unreal Engine Game?"
                    subtitle="Share your technical design document or game concept with our Unreal leads and receive a comprehensive technical proposal & quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default UnrealGameDevelopment;
