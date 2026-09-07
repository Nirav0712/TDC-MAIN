import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2 } from 'lucide-react';
import { PPCVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const PPC = () => {
    const seoData = {
        title: "Precision Target Explicit Intent | The Digital Connect",
        description: "Highly aggressive Google Ads and LinkedIn PPC deployments maximizing exact algorithmic ROAS targeting high-value immediate commercial intents."
    };

    const theme = { "accent": "text-brand-cyan", "bg": "bg-brand-cyan/20", "softBg": "bg-brand-gold/10" };

    const hero = {
        parentTitle: "Digital Marketing",
        parentRoute: "/services/digital-marketing",
        eyebrow: "PAY PER CLICK",
        title: "Precision Target Explicit Intent.",
        description: "While SEO is the long-term compounding asset, Pay Per Click (Google Search Network) mathematically captures users executing explicit transactional searches absolutely instantly today.",
        visual: PPCVisual,
        ctaText: "MAXIMIZE ROAS TODAY"
    };

    const intro = {
        eyebrow: "EMPOWER YOUR BUSINESS WITH OUR SERVICES",
        title: "PPC Advertising & Campaign Management",
        paragraphs: [
            "We engineer brutal mathematical PPC campaigns natively blocking massive negative keywords actively saving thousands of dollars in wasted ad spend.",
            "We rigorously A/B split-test distinct landing page headlines explicitly driving Quality Scores aggressively up, naturally pushing Cost-Per-Click drastically down natively.",
            "This creates a highly predictable, incredibly scalable direct revenue machine operating exclusively on pure calculated Return On Ad Spend."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our PPC Methodology",
        description: "We deploy aggressive direct-response architectures strictly mapped to physical business objectives.",
        steps: [
            { title: "Competitor Research", desc: "Analyzing exactly what keywords competitors are defending to outbid them aggressively." },
            { title: "Campaign Architecture", desc: "Building extreme exact-match structures physically preventing irrelevant algorithmic spend." },
            { title: "Landing Page Optimization", desc: "Designing high-velocity funnels explicitly preventing massive paid traffic from bouncing." },
            { title: "Algorithmic Bidding", desc: "Deploying heavy machine learning natively adjusting click bids globally predicting exact conversions." },
            { title: "A/B Split Testing", desc: "Continuously isolating headlines and creatives actively boosting overall ad quality matrices." },
            { title: "ROAS Scaling", desc: "Systematically increasing daily burn precisely where conversions represent extreme net-positive revenue." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE TARGETING",
        title: "Our PPC Services",
        items: [
            {
                title: "Google Search Campaigns",
                icon: <Search className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Bidding heavily strictly on absolute bottom-funnel commercial keywords demanding explicit physical solutions.",
                    "Creating a highly predictable direct revenue machine."
                ],
                cta: "Dominate Search"
            },
            {
                title: "Display Network Optimization",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Retargeting explicit site visitors flawlessly across millions of global publications actively recalling brand identity."
                ],
                cta: "Explore Display Ads"
            },
            {
                title: "Google Shopping Implementations",
                icon: <ShoppingCart className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Structuring immense product feeds dynamically matching explicit D2C inventory perfectly with direct consumer searches."
                ],
                cta: "Boost eCommerce Sales"
            },
            {
                title: "Conversion Rate Optimization",
                icon: <MousePointerClick className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Continuously refining exact URL destinations explicitly preventing massive paid traffic from bouncing instantly."
                ],
                cta: "Optimize Funnels"
            },
            {
                title: "Campaign Management",
                icon: <Cog className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Executing daily negative keyword sweeps actively saving budget physically wasted on irrelevant algorithmic expansions."
                ],
                cta: "Manage Your Ads"
            },
            {
                title: "Analytics & ROI Reporting",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Granular tracking measuring every cent spent directly against explicitly validated consumer transactions natively."
                ],
                cta: "Track Performance"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Advertising Solutions",
        title: "Industries",
        description: "A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers' engagement.",
        items: [
            { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
            { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
            { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
            { name: "Education & e-Learning", desc: "Blending technology to bring seamless experience into education", icon: <GraduationCap /> },
            { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
            { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
            { name: "Legal Industry", desc: "New generation websites and apps for modern law firms", icon: <Scale /> },
            { name: "Real Estate", desc: "Intelligent digital solutions for the real estate industry", icon: <Building2 /> }
        ]
    };

    const reasons = {
        eyebrow: "REASON TO CHOOSE US",
        title: "Why Businesses Choose Our PPC Campaigns",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Mathematical ROAS focus",
            "Advanced bidding algorithms",
            "Responsive ad creations",
            "Negative keyword protections",
            "Cost-effective campaign scaling",
            "Conversion funnel testing",
            "Predictable revenue engines",
            "Continuous technical maintenance"
        ]
    };

    const contact = {
        title: "GET A FREE QUOTE",
        description: "We will get back to you within 24 hours"
    };

    return (
        <ModernServiceLayout
            seo={seoData}
            theme={theme}
            hero={hero}
            intro={intro}
            process={process}
            services={services}
            industries={industries}
            reasons={reasons}
            contact={contact}
        />
    );
};

export default PPC;
