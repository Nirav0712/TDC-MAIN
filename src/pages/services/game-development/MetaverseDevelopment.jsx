import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { MetaverseVisual } from '../../../components/services/subservices/visuals/VisualsGame';
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

const MetaverseDevelopment = () => {
    useSEO({
        title: "Metaverse Development Company | Virtual Worlds & WebXR Solutions | The Digital Connect",
        description: "Step into the future of digital engagement with custom Metaverse development. We build immersive 3D virtual worlds, WebXR spaces, avatar ecosystems, and spatial commerce."
    });

    const theme = { accent: "text-violet-600", bg: "bg-violet-500/20", softBg: "bg-violet-50" };

    const services = [
        {
            title: "Metaverse NFT & Marketplace Development",
            icon: <Globe className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
            cta: "Build Metaverse World",
            paragraphs: [
                "The Digital Connect offers you the best in-built Metaverse NFT marketplace development. These would maximize the futuristic business model by entering an innovative world. Our metaverse development services involve acquiring the best Metaverse NFT marketplace and standalone presence across the virtual world business.",

                "Building 3D modeling and immersive apps would be a suitable option for getting the long-term experience for the user; our team of experts is well versed in providing you with a metaverse project off the ground. It leads to the rocketing towards success. Our service provides you with the NFT marketplace specially designed for the Metaverse.",

                "We bring you the next-level 3D environments for experiencing virtual social engagement using Metaverse development. We are also equipped to create the ultimate Metaverse spanning multiple platforms and fulfilling various purposes. These also involve the virtual environment, including the range of interactions and functionality, creating the greatest value for the business. Our expertise in NFT ensures fast delivery along with top-notch features."
            ],
        },
        {
            title: "Metaverse Game Development",
            icon: <Eye className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
            cta: "Explore WebXR Solutions",
            paragraphs: [
                "As a dedicated Metaverse development company, The Digital Connect has developed dozens of games enabled with VR/AR. We have a dedicated studio for game development. Our game development artists and experts are ready to push your metaverse game project to the highest success rate. These would create a completely one-of-a-kind experience for gamers to the greatest extent.",

                "Our team assures us of bringing you the complete solution for your NFT Marketplace Development. Our metaverse developers have worked on many NFT marketplace projects and delivered the best results for clients across the globe. We have also worked on blockchain networks like Ethereum, Solana, Binance Smart Chain, and more.",

                "Metaverse is normally the extensive online world where people can easily interact through digital avatars. When you are looking for the best game development through this platform, we are ready to help you achieve your dream. With future growth in mind, we develop metaverse-based games and projects."
            ],
        },
        {
            title: "Metaverse Ecommerce Development",
            icon: <Users className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
            cta: "Build Avatar Systems",
            paragraphs: [
                "Based on a recent report, the Metaverse has been gaining more than $1 Trillion in annual revenue opportunities. The potential of the Metaverse is attributed to the growth of the people interested in metaverse development. Industry leaders have been venturing into the Metaverse to offer ingenious aspects. Many Corporate giants such as Facebook, Microsoft, Nike, and many other companies are harnessing the power of Metaverse.",

                "eCommerce has been growing with the implementation of metaverse projects. Our team helps you to easily launch the future-ready NFT marketplace giving the customers a seamless buying facility in the eCommerce sites. We have to store experience in NFT and Crypto.",

                "The Digital Connect is the top Metaverse NFT Marketplace Development team that offers you premium metaverse development services. These would especially ensure delivering complete top-notch features. Using the Metaverse NFT & Marketplace Development is a convenient option for making the best investment and yielding more. It also extensively leads to capitalizing on Metaverse opportunities."
            ],
        },
        {
            title: "Metaverse Social Media Development",
            icon: <Store className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            cta: "Launch Spatial Commerce",
            paragraphs: [
                "Metaverse has been gaining more popularity in multi-billion social media gatherings, 3D virtual reality platforms, and many others. Our team shares Augmented and Virtual Reality in the online space. The Digital Connect is a metaverse development company ready to help you launch a futuristic metaverse platform. We also provide you with end-to-end support in technical as well as development requirements.",

                "Our team has been designing and developing the Metaverse components like 3D virtual worlds. Modern-day, Decentralized platforms, Metaverse NFT markets, and Metaverse Applications have relied on Augmented Reality and Virtual Reality. Metaverse is the vast virtual world interacting as the digital avatars for doing everything virtually.",

                "These are helpful for easily buying products and services, participating in events, driving to work, and many more. We provide you with complete social media development based on the Metaverse. These are convenient options for bringing you the specialized attributes to excellence."
            ],
        },
        {
            title: "Metaverse Application Development",
            icon: <Briefcase className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            cta: "Build Enterprise Metaverse",
            paragraphs: [
                "The Digital Connect develops innovative, user-friendly apps using blockchain-specific qualities like transparency, automation, privacy, and user sovereignty. These also give you better sovereignty by giving you better access to the premium interface. Our team is well versed in Metaverse projects scalable with convenient 3D space design and development services.",

                "These also extend with the use cases of many new concepts. Our metaverse consulting team is ready to provide you with unique 3D modeling, 3D visualization, and many more. We have been offering integration services to assure you of increasing the features and functions.",

                "Metaverse also allows you to easily provide you with the right user experience that comprises the integration services. Our team is well versed in assisting you with technical and development aspects of building the Metaverse marketplace, such as Decentraland. Our team also provides you with end-to-end development services with analysis, conceptualization, full-stack development, and many more."
            ],
        },
        // {
        //     title: "Multiplayer Spatial Infrastructure & Smart Contracts",
        //     icon: <Server className="w-8 h-8" />,
        //     imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        //     cta: "Architect Spatial Backend",
        //     paragraphs: [
        //         "Deploy resilient, low-latency spatial server infrastructure capable of hosting tens of thousands of concurrent avatars in shared dynamic instances.",
        //         "We engineer automated server sharding, state synchronization, and optional Web3 smart contract integration for digital asset registries."
        //     ]
        // }
    ];

    const processSteps = [
        {
            title: "Requirement Gathering",
            desc: "Our team follows the first and foremost priority of gathering all requirements, information, and resources for the project. We would understand the feasibility of your project idea."
        },
        {
            title: "UI/UX Designing",
            desc: "We are a well-experienced team that creates charming and catching designs using UI/UX design. Our team provides the best tools for designing a user-friendly experience."
        },
        {
            title: "Prototype",
            desc: "You will get a prototype for all development processes with the complete design."
        },
        {
            title: "Development",
            desc: "The Digital Connect hosts the Metaverse project with a higher bandwidth decentralized network on computers. It facilitates decentralized data transmission."
        },
        {
            title: "Quality Testing",
            desc: "The Digital Connect values quality assured with the complete result without any compromise. We provide you with 100% bug-free applications on regular quality testing."
        },
        {
            title: "Deployment",
            desc: "After completion of the development stage, all the apps will be ready to launch on Play Store or App Store."
        },
        {
            title: "Support & Maintenance",
            desc: "Our team ensures complete support and maintenance for Metaverse to achieve higher usability and reliability."
        }
    ];

    const industries = [
        { name: "Virtual Events & Concerts", desc: "Massive virtual festival grounds, live DJ performances, and interactive fan engagement.", icon: <MonitorPlay /> },
        { name: "eCommerce & Virtual Retail", desc: "Photorealistic 3D shopping malls with instant checkout and digital try-ons.", icon: <ShoppingCart /> },
        { name: "Real Estate & Architecture", desc: "Interactive 3D master plans, pre-construction virtual tours, and land sales.", icon: <Building2 /> },
        { name: "Enterprise & Remote Work", desc: "Virtual corporate headquarters, multi-user workshops, and digital twin labs.", icon: <Briefcase /> },
        { name: "Fashion & Luxury Brands", desc: "Virtual runway shows, digital wearables, and exclusive avatar haute couture.", icon: <Shirt /> },
        { name: "Education & Virtual Campuses", desc: "Interactive 3D historical simulations, university campus tours, and medical labs.", icon: <GraduationCap /> },
        { name: "Gaming & Social Metaverse", desc: "User-generated content hubs, virtual hangout cafes, and multiplayer arenas.", icon: <Gamepad2 /> },
        { name: "Automotive Virtual Showrooms", desc: "Virtual test drives, interactive component disassembly, and customized interiors.", icon: <Truck /> },
        { name: "Museums & Cultural Heritage", desc: "Preservation of historical artifacts, virtual exhibitions, and guided tours.", icon: <Landmark /> },
        { name: "Healthcare & Surgical Training", desc: "Immersive 3D anatomical models, surgical rehearsal, and tele-mentoring.", icon: <HeartPulse /> },
        { name: "Sports & Fan Hubs", desc: "Virtual stadium box seats, 360-degree match viewing, and athlete meetups.", icon: <Dumbbell /> },
        { name: "Decentralized Web3 Worlds", desc: "Token-gated virtual land, interoperable avatars, and decentralized economies.", icon: <Sparkles /> }
    ];

    const reasons = [
        "Specialized team of 3D spatial architects, WebXR engineers, and Metaverse developers",
        "Deep mastery of Unreal Engine 5, Unity, Three.js, WebXR, and WebGL optimization",
        "Zero-install web experiences bringing rich 3D worlds directly to desktop and mobile browsers",
        "Spatial audio integration with proximity falloff and directional sound positioning",
        "Scalable multiplayer server architecture capable of supporting massive concurrent events",
        "Enterprise-grade security with SSO authentication, encryption, and GDPR compliance",
        "100% code and 3D asset ownership, strict NDAs, and comprehensive documentation",
        "Dedicated LiveOps management for hosting high-attendance virtual events and world updates"
    ];

    const technologies = [
        "Unreal Engine 5", "Unity 6", "WebXR / WebGL", "Three.js", "Ready Player Me",
        "Agora 3D Audio", "Dolby Voice", "Photon Engine", "AWS Spatial Server",
        "Blender", "Maya", "Substance 3D", "Node.js", "Docker", "Meta Quest SDK"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Game Development"
                    parentRoute="/services/game-development"
                    eyebrow="Next-Gen Spatial Computing"
                    title="Enterprise Metaverse & Virtual World Development Services"
                    description="Pioneer the future of human interaction with custom Metaverse solutions. The Digital Connect creates persistent 3D virtual worlds, zero-install WebXR platforms, avatar ecosystems, and spatial commerce environments engineered for massive multi-user engagement."
                    theme={theme}
                    visual={MetaverseVisual}
                    ctaText="BUILD YOUR METAVERSE"
                />

                {/* Intro Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="w-full">
                            <h2 className="text-violet-600 font-bold uppercase tracking-wider text-sm mb-3">Spatial Computing Authority</h2>
                            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                Architecting Immersive, Multi-User Virtual Worlds for Global Enterprises
                            </motion.h2>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                <p>The Metaverse represents the evolutionary convergence of real-time 3D graphics, spatial audio, multi-user cloud networking, and digital commerce. Far beyond a buzzword, modern Metaverse environments empower businesses to host global virtual conferences, launch interactive spatial storefronts, and conduct collaborative training simulations with unprecedented immersion.</p>
                                <p>At The Digital Connect, our dedicated spatial engineering team blends technical mastery of real-time engines with WebXR browser accessibility. Whether building a photorealistic virtual campus, an interactive 3D product showroom, or a massive virtual concert venue, we deliver high-framerate, secure, and scalable spatial experiences.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <SubServiceShared.Process
                    theme={theme}
                    title="Our Metaverse Development Lifecycle"
                    eyebrow="Agile Spatial Production"
                    description="From world design documents to 3D asset optimization, spatial networking, and live event management, our process ensures flawless execution."
                    process={processSteps}
                />

                {/* Empower Services Cards */}
                <section>
                    <div className="bg-white py-8 md:py-10 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="bg-violet-50 text-violet-700 font-bold text-sm tracking-wide uppercase px-3.5 py-2 rounded-full mb-6 border border-violet-200">
                                Empower Your Brand in the Metaverse
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]">
                                Our Metaverse Development Services
                            </h3>
                            <p className="mt-4 text-slate-600 max-w-2xl text-base md:text-lg">Explore our full suite of spatial computing and virtual world development services tailored for forward-thinking enterprises.</p>
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
                                        className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F9F7FD]`}
                                    >
                                        <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-20 h-[2px] bg-violet-600 mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                            <div className="absolute -inset-4 sm:-inset-6 bg-violet-500/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>
                                            <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                    <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                </div>
                                                <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                    <div className="text-violet-400 shrink-0">
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
                        title="Spatial Computing, WebXR & 3D Tools"
                        eyebrow="Our Tech Stack"
                    />
                )}

                {/* Industries Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-violet-600 font-bold uppercase tracking-wider text-sm mb-3">Custom IT Solutions for Varied Verticals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">Industries & Use Cases We Serve</h3>
                            <p className="text-slate-600">A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline operations and improve customer engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-violet-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-200 transition-colors">
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
                                <h2 className="text-violet-600 font-bold uppercase tracking-wider text-sm mb-3">Why Choose The Digital Connect</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024]">
                                    Why Choose The Digital Connect for Metaverse Development
                                </h3>
                                <p className="mt-4 text-slate-600 text-base md:text-lg">We combine high-performance WebXR architecture with immersive 3D artistic design to create captivating virtual experiences.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                    {reasons.map((r, i) => (
                                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-violet-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
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
                    title="Ready to Build Your Virtual World in the Metaverse?"
                    subtitle="Share your spatial concept with our Metaverse architects and receive a comprehensive technical proposal & quote within 24 hours."
                />
            </div>
        </PageTransition>
    );
};

export default MetaverseDevelopment;
