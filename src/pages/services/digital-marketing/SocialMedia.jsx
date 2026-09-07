import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2 } from 'lucide-react';
import { SocialMediaVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const SocialMedia = () => {
    const seoData = {
        title: "Cultivating Dedicated Brand Cults | The Digital Connect",
        description: "Organic social trajectory strategy explicitly engineering massive community engagement transforming standard followers directly into radical brand evangelists."
    };

    const theme = { "accent": "text-brand-cyan", "bg": "bg-brand-cyan/20", "softBg": "bg-brand-bg-light" };

    const hero = {
        parentTitle: "Digital Marketing",
        parentRoute: "/services/digital-marketing",
        eyebrow: "SOCIAL MEDIA MANAGEMENT",
        title: "Cultivating Dedicated Brand Cults.",
        description: "Organic social trajectory strategy explicitly engineering massive community engagement transforming standard followers directly into radical brand evangelists. Generic corporate postings generate zero traction.",
        visual: SocialMediaVisual,
        ctaText: "GROW YOUR AUDIENCE"
    };

    const intro = {
        eyebrow: "EMPOWER YOUR BUSINESS WITH OUR SERVICES",
        title: "Social Media Strategy & Marketing",
        paragraphs: [
            "Generic corporate postings generate absolutely zero algorithmic traction. Modern social media fundamentally rewards native, extremely authentic, heavily engaging value-driven content mapping directly perfectly to respective platform aesthetics.",
            "We architect massive content engines specifically for LinkedIn (B2B Authority), Instagram (Visual Brand), and X (Immediate Community). We define exact brand voices natively breaking through massive digital noise.",
            "By driving high-velocity engagement metrics early, we push complex algorithms actively to heavily dramatically amplify your organic reach naturally entirely free of ad-spend."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our Social Methodology",
        description: "We orchestrate continuous content deployment cycles explicitly designed for algorithmic reach.",
        steps: [
            { title: "Voice Definition", desc: "Establishing absolute explicit grammatical and emotional guidelines natively preventing fragmented chaotic branding." },
            { title: "Platform Selection", desc: "Focusing explicitly on specific networks where your target demographic organically consumes daily content." },
            { title: "Content Calendars", desc: "Structuring intense monthly deployment schedules heavily ensuring absolute extreme posting consistency natively." },
            { title: "Asset Production", desc: "Filming, writing, and designing massive payload assets performing flawlessly specifically for distinct platforms." },
            { title: "Community Building", desc: "Actively physically interacting globally maintaining intense digital relationships directly with your core consumers." },
            { title: "Metric Analysis", desc: "Reviewing explicit retention curves adapting subsequent content intensely mapping mathematically to what actually engaged." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE SOCIAL",
        title: "Our Social Media Services",
        items: [
            {
                title: "Social Media Strategy",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Structuring explicit long-term operational plans perfectly mapping native visual language directly to platform algorithms.",
                    "Identifying precise audience archetypes to engage effectively."
                ],
                cta: "Plan Your Strategy"
            },
            {
                title: "Content Creation",
                icon: <Component className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Producing high-fidelity creative assets spanning short-form vertical video, heavy carousel logic, and compelling copywriting natively."
                ],
                cta: "Create Viral Content"
            },
            {
                title: "Social Media Management",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Distributing heavy content volumes consistently while actively nurturing inbound audiences directly converting attention."
                ],
                cta: "Manage Your Presence"
            },
            {
                title: "Paid Social Campaigns",
                icon: <Megaphone className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Injecting capital explicitly into top-performing organic assets force-multiplying absolute direct-response conversions massively."
                ],
                cta: "Run Social Ads"
            },
            {
                title: "Audience Engagement",
                icon: <MessageSquare className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Operating daily active two-way communications essentially transforming standard followers actively into radical brand advocates."
                ],
                cta: "Engage Audiences"
            },
            {
                title: "Social Media Analytics",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Measuring explicit algorithmic retention signals directly validating which content vectors yield highest commercial velocity."
                ],
                cta: "Analyze Performance"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Marketing Solutions",
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
        title: "Why Businesses Choose Our Social Marketing",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Native platform expertise",
            "High-engagement creative assets",
            "Algorithm-friendly posting",
            "Consistent community nurturing",
            "Cost-effective audience building",
            "Influencer ecosystem mapping",
            "Deep retention metrics analysis",
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

export default SocialMedia;
