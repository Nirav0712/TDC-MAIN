import TopicCard from '../../../components/common/TopicCard';
import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { AndroidGameVisual } from '../../../components/services/subservices/visuals/VisualsGame';
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

const AndroidGameDevelopment = () => {
    useSEO({
        title: "Android Game Development Company | Custom 2D & 3D Mobile Games | The Digital Connect",
        description: "Engage millions of global mobile players with custom Android game development. We build high-performance 2D, 3D, and multiplayer games optimized for Google Play."
    });

    const theme = { accent: "text-green-600", bg: "bg-green-500/20", softBg: "bg-green-50" };

    const services = [
        {
            title: "Custom Android Game Development",
            icon: <Gamepad2 className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            cta: "Build Android Game",
            paragraphs: [
                "Android dominates the Smartphone world in the modern day. Android possesses more than 70% of Smartphones, Tablets, and other mobile devices. With more than 2 Billion monthly active users worldwide, Android has become one of the significant options for secure usage.",

                "You can easily hire a developer to build your games on the Andriod platform. It is a suitable option for increasing the market reach in the nominal costs. We have an excellent record of success across android game app development by providing the complete solution.",

                "Our experienced mobile app developers have completed more numbers of Android development projects as well as fulfilled the exact specification of the seekers. Our game developers are ready to provide you with a dynamic twist on the gaming application with a massive visual appearance to make it enticing to the niche audience. We deploy game balancing in a unique process, assuring of giving better stability."
            ],
        },
        {
            title: "Android Game UI/UX Designing",
            icon: <Users className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Architect Multiplayer Game",
            paragraphs: [
                "Professional Game Designers at The Digital Connect assure that fulfilling your dream comes true. We are well versed in designing characters, puzzles, art, animation, and levels. With high-end computer programming languages, it is easier to write codes accordingly.",

                "High-end 3D games are developed with minimal lagging along with performance issues. The main role of the UI/UX game designing team is to bring you the finest designs with the concept art to the maximum. The game design phase starts with the parallel project’s concept art. Enabling the game’s UI flow development and the mechanic development is done with Architectural design documents, class design documents, and database design documents.",

                "Professional graphic designers also assure the specific tasks for accomplishing the division to the extent. UI/UX designing incorporates rough sketches to create the 2D images on the client’s requirements. Art designers prepare beautiful concept art documents with UI/UX modes."
            ],
        },
        {
            title: "Unity Android Game Development",
            icon: <CreditCard className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Integrate Game Monetization",
            paragraphs: [
                "Unity is a widely preferred 3D game development engine. Unity helps developers easily unleash the ultimate and stunning gaming experience. Our Unity 3D Android game app development solutions are accessed on major devices suitable for mobile devices, web browsers, and PC. The Digital Connect is one of the leading Android Development companies offering spectacular results to the extent.",

                "Our Game design services use advanced Android programming proficient in adding new features. It is also a suitable option for optimizing as well as improving the better user experience. We provide you with tailor-made products giving you a blend of functionality. We have a solid Android game development background in supporting Android devices.",

                "Get the complete realistic, flawless gaming modes bringing you a highly interactive gaming experience. We use the advanced Unity 3D game development tool to ensure that you get a smooth gaming experience. It is convenient to hire an android game developer from The Digital Connect who holds expertise in OpenGL, Direct3D, and OpenGL ES."
            ],
        },
        {
            title: "Android 2D And 3D Game Development",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Game Art Studio",
            paragraphs: [
                "The team of experts is well recognized for 2D and 3D Android Game Development. These are completely impressive and the most interactive visualization gaming methods. They deliver you the best feature-rich gaming application to the extent. Our main aim is to provide a best-in-class gaming application with 2D and 3D game modes. They are quite enabled with the competitive edges over the competitors.",

                "Well-experienced Android game developer assures you the 3D modeling solutions that are quite error-free and impeccable harmony. It is convenient to get matchless and unbeatable results with fantastic design, performance, and functionality. Android developments offer a completely contemporary and innovative solution without operational risks.",

                "We are a well-recognized 3D game developer in the gaming industry, ready to provide you with the best results for diverse needs. We would develop the best 3D/2D android game with fewer coding and complexities. These cater best results with magnificent visualization."
            ],
        },
        {
            title: "Android Game Support & Maintenance",
            icon: <Zap className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            cta: "Optimize Android Game FPS",
            paragraphs: [
                "Our Android game developers provide an addictive gaming application for enhancing the best gamer’s experience. Our team is widely recognized for its dedicated support as well as maintenance. We assist you with extensively building the game with improving better customer relations. Our team helps companies to attract customers to an extent easily.",

                "We help you build rich and engaging multiplayer games making the best memorable gaming for the people. Get 24×7 support for complete android gaming support and maintenance. We assist with improving the game updates and efficiencies by providing 100% maintenance and support.",

                "We bring you better convenience for people looking for better gaming software. The Digital Connect is well versed in creating the virtual environment to provide a seamless virtual experience. Our team assures us of providing stunning visuals to the maximum. We offer you great support on updates and other features."
            ],
        },
        // {
        //     title: "Game Porting & Ongoing LiveOps Management",
        //     icon: <RefreshCw className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        //     cta: "Scale Game LiveOps",
        //     paragraphs: [
        //         "Port existing iOS, PC, or console games to Android with custom touch control mappings and aspect-ratio responsive camera systems.",
        //         "Our LiveOps team manages seasonal events, battle pass updates, push notification retention loops, and automated patch delivery."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "At The Digital Connect, our team of experts conducts detailed analyses on the features incorporated in the game with clients. Game developers consult with clients for software requirement specifications."
        },
        {
            title: "UI/UX Designing",
            desc: "An internal team of artists is ready to create the unique concept art by extensively providing rough sketches about characters and other elements in the game for UI/UX designing."
        },
        {
            title: "Prototype",
            desc: "We start the development process once the proper prototype design and game script submit. Under this phase, game designs are prepared with UI flow."
        },
        {
            title: "Game Development",
            desc: "Well-skilled developers are assured of implementing the complete Android game strategy with active development. Building the game with fine-tuning and feedback ensures getting quick results."
        },
        {
            title: "Quality Testing",
            desc: "Android is a diversified platform, so all games must work smoothly across all the screens. Our Testing and QA engineers at The Digital Connect test our games to optimize them accordingly."
        },
        {
            title: "Game Deployment",
            desc: "Our internal team conducts user acceptance testing for launching the game on respective app stores. We provide essential marketing support with the game deployment."
        },
        {
            title: "Support & Maintenance",
            desc: "Our game development process is also equipped with proper support. Our regular support and maintenance assure us a better chance of gaining a higher ranking."
        }
    ];

    const industries = [
        { name: "Casual & Hyper-Casual", desc: "Instant-play, highly addictive mechanics with fast viral reward loops.", icon: <Gamepad2 /> },
        { name: "Action & RPG Games", desc: "Story-driven campaigns, character progression, and real-time combat.", icon: <Trophy /> },
        { name: "eCommerce Gamification", desc: "Reward wheels, mini-games, and branded challenges to boost sales.", icon: <ShoppingCart /> },
        { name: "EdTech & Game-Based Learning", desc: "Interactive puzzle games and educational quests for all ages.", icon: <GraduationCap /> },
        { name: "Sports & Racing", desc: "Realistic vehicle physics, licensed sports gameplay, and tournaments.", icon: <Dumbbell /> },
        { name: "Casino & Card Games", desc: "Secure RNG card games, poker rooms, and social slots with zero latency.", icon: <Landmark /> },
        { name: "AR & Location-Based", desc: "GPS geofencing and augmented reality camera interactions.", icon: <Navigation /> },
        { name: "Health & Fitness Games", desc: "Motion-tracked active gaming, step rewards, and habit formation.", icon: <HeartPulse /> },
        { name: "Branded Advergames", desc: "Custom corporate mini-games for product launches and trade shows.", icon: <Building2 /> },
        { name: "Simulation & Strategy", desc: "City builders, resource management, and tactical multiplayer wars.", icon: <Briefcase /> },
        { name: "Media & Entertainment", desc: "IP-based franchise games for television, cinema, and comic book brands.", icon: <MonitorPlay /> },
        { name: "Blockchain & Web3 Games", desc: "Digital collectibles, play-to-earn economies, and decentralized wallets.", icon: <Sparkles /> }
    ];

    const reasons = [
        "Experienced game designers, technical artists, and certified Unity/Unreal developers",
        "Expertise across Vulkan, OpenGL ES, and Google Play Asset Delivery (PAD)",
        "Proven monetization strategies driving high ARPU and player lifetime value (LTV)",
        "Flawless compatibility across diverse Android screen resolutions and GPU chipsets",
        "Low-latency real-time multiplayer servers supporting tens of thousands of concurrent players",
        "Full support for Google Play Games, achievements, cloud saves, and in-app billing",
        "Complete source code transfer, intellectual property protection, and strict NDAs",
        "Dedicated post-launch LiveOps management and continuous seasonal event releases"
    ];

    const technologies = [
        "Unity 6", "Unreal Engine 5", "C#", "C++", "Vulkan API", "OpenGL ES",
        "Photon Engine", "Google Play Billing", "Play Asset Delivery", "FMOD / Wwise",
        "Blender", "Maya", "Substance Painter", "Firebase", "Node.js Server"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Game Development"
                    parentRoute="/services/game-development"
                    eyebrow="Mobile Gaming Excellence"
                    title="A Creative Android Game Development Solution"
                    description="Captivate global mobile audiences with high-octane 2D, 3D, and multiplayer Android games. The Digital Connect engineers performant, visually stunning titles optimized for maximum engagement and top rankings on the Google Play Store."
                    theme={theme}
                    visual={AndroidGameVisual}
                    ctaText="GET FREE GAME QUOTE"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-green-600 font-bold uppercase tracking-wider text-sm mb-3">Android Gaming Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Engineering High-Performance Android Games for Global Mobile Gamers
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>Android represents the largest and most dynamic gaming ecosystem in the world, spanning billions of active devices worldwide. Crafting a commercially successful Android game demands more than compelling gameplay—it requires flawless optimization across diverse GPU chipsets, low battery consumption, dynamic resolution scaling, and strategic in-app monetization models.</p>
                                <p>At The Digital Connect, our seasoned game development studio combines creative storytelling, stunning 3D/2D visual assets, and high-performance physics engines. Whether building a hyper-casual sensation, an immersive RPG, a real-time multiplayer PvP arena, or gamified enterprise software, we deliver titles engineered to dominate the Google Play charts.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Android Game Development Lifecycle"
                    eyebrow="Agile Game Production"
                    description="From concept art and GDD to prototype testing, store submission, and LiveOps scaling, our workflow ensures commercial success."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-green-50 text-green-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-green-200">
                                Empower Your Brand with Game Development
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Android Game Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore full-cycle game production capabilities built to create chart-topping mobile titles.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F2FAF4]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-green-600 mt-4 mb-6"></div>
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
                        title="Android Game Engines, Tools & Frameworks"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-green-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Game Genres & Verticals We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-green-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-colors">
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
                                <h2 className="text-green-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Android Game Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine high-level game design psychology with flawless performance engineering to create viral mobile titles.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-green-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Launch a Chart-Topping Android Game?"
                    subtitle="Share your game concept with our game producers and receive a free technical feasibility roadmap & development quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default AndroidGameDevelopment;
