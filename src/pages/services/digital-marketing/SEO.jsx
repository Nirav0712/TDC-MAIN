import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2 } from 'lucide-react';
import { SEOVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const SEO = () => {
    const seoData = {
        title: "Dominate Organic Industry Search Authority | The Digital Connect",
        description: "Technical, programmatic, and content-driven SEO explicitly dominating Google SERP rankings heavily replacing paid acquisition fundamentally."
    };

    const theme = { "accent": "text-brand-blue", "bg": "bg-brand-blue/20", "softBg": "bg-brand-cyan/10" };

    const hero = {
        parentTitle: "Digital Marketing",
        parentRoute: "/services/digital-marketing",
        eyebrow: "SEARCH ENGINE OPTIMIZATION",
        title: "Dominate Organic Industry Search Authority",
        description: "Operating a beautiful website fundamentally hidden on page four of Google is commercially useless. Organic Search Engine Optimization remains physically the most lucrative digital asset because it operates globally 24/7 without variable click-costs.",
        visual: SEOVisual,
        ctaText: "DOMINATE SEARCH RANKINGS"
    };

    const intro = {
        eyebrow: "EMPOWER YOUR BUSINESS WITH OUR SERVICES",
        title: "Trusted SEO Optimization Agency",
        paragraphs: [
            "We heavily bypass basic metadata. We deploy intense programmatic SEO architectures, explicitly repairing core-web-vital speed leaks natively inside your React applications, massively structuring JSON-LD schema, and generating immense clustered semantic authority maps.",
            "This fundamentally secures untouchable domain authority directly intercepting users exactly when they demonstrate extremely explicit high-intent commercial queries.",
            "SEO is an asset investment, similar to real estate. Unlike PPC which stops immediately when budget runs out, SEO compounds massively over time."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our SEO Methodology",
        description: "Our structured SEO process ensures every campaign is engineered for maximum organic visibility and long-term algorithmic dominance.",
        steps: [
            { title: "Deep Technical Repair", desc: "Fixing exactly what inherently blocks active indexation like duplicate content and severe render blocking JS." },
            { title: "Keyword Mapping", desc: "Isolating specific untapped, high intent transactional queries entirely ignored directly by mammoth competitors." },
            { title: "Content Architecture", desc: "Structuring immense interconnected blog pillars actively establishing absolute semantic topic dominance safely." },
            { title: "On-Page Optimization", desc: "Physically altering metadata, schema, and internal linking to ensure Googlebot crawls flawlessly." },
            { title: "Authority Building", desc: "Continuously projecting massive signals natively proving absolute E-E-A-T trust directly to core Google algorithms." },
            { title: "Analytics & Tracking", desc: "Monitoring indexation velocity, impression growth, and organic conversion pipelines continuously." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE OPTIMIZATION",
        title: "Our SEO Services",
        items: [
            {
                title: "Technical SEO Audits",
                icon: <TerminalSquare className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Physically altering React/Next.js code natively ensuring Googlebot crawls dynamic JS platforms flawlessly."
                ],
                cta: "Get a Technical Audit"
            },
            {
                title: "Programmatic SEO",
                icon: <Layers className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Generating massive templated high-quality keyword pages routing heavy long-tail commercial intent drastically."
                ],
                cta: "Explore Programmatic SEO"
            },
            {
                title: "Content Clustering Strategy",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Structuring immense interconnected blog pillars actively establishing absolute semantic topic dominance safely."
                ],
                cta: "Build Content Clusters"
            },
            {
                title: "High-Authority Backlink Acquisition",
                icon: <ArrowUpRight className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Orchestrating high DA PR campaigns forcefully pushing intense page authority directly into central hubs."
                ],
                cta: "Acquire Backlinks"
            },
            {
                title: "Local Search Optimization",
                icon: <Map className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Dominating local Google Map Packs ensuring immediate visibility for geographically restricted commercial searches."
                ],
                cta: "Dominate Local Search"
            },
            {
                title: "SEO Analytics & Reporting",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Advanced Google Search Console and analytics tracking mapping organic clicks directly to enterprise revenue pipelines."
                ],
                cta: "Track Your Growth"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Search Solutions",
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
        title: "Why Businesses Choose Our SEO Marketing Engine",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Technical algorithmic expertise",
            "Modern programmatic practices",
            "Advanced core-web-vitais repair",
            "Massive scale content architectures",
            "Cost-effective organic acquisition",
            "High-DA PR integrations",
            "Predictable rank indexing pipelines",
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

export default SEO;
