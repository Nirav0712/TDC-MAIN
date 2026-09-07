import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2, TrendingUp, Users, Magnet } from 'lucide-react';
import { PerformanceMarketingVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const PerformanceMarketing = () => {
    const seoData = {
        title: "Performance Marketing Built for Measurable Growth | The Digital Connect",
        description: "Math Not Magic. Scale with Confidence. We build Omnichannel paid-acquisition architectures explicitly focusing exclusively on mathematically guaranteed positive ROAS."
    };

    const theme = { "accent": "text-brand-cyan", "bg": "bg-brand-cyan/20", "softBg": "bg-brand-bg-light" };

    const hero = {
        parentTitle: "Digital Marketing",
        parentRoute: "/services/digital-marketing",
        eyebrow: "PERFORMANCE MARKETING",
        title: "Performance Marketing Built for Measurable Growth.",
        description: "Brand marketing measures feelings. Performance marketing explicitly measures absolute gross profit capital natively. We operate heavily across scalable platforms actively demanding exact measurable Return On Ad Spend.",
        visual: PerformanceMarketingVisual,
        ctaText: "SCALE ROI TODAY"
    };

    const intro = {
        eyebrow: "EMPOWER YOUR BUSINESS WITH OUR SERVICES",
        title: "Treating Ad-Spend as a Financial Algorithm",
        paragraphs: [
            "We heavily deploy intense server-side tracking natively bypassing chaotic absolute privacy restrictions, fundamentally feeding explicit physical purchase data securely back to algorithms.",
            "This ensures extreme machine-learning optimization actively hunting exact demographic profiles statistically proven mathematically likely to convert entirely predictably.",
            "By engineering accurate financial matrices, we ensure that every single cent of capital deployed returns tangible, positive net margins into your enterprise accounts."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our Scaling Methodology",
        description: "We deploy aggressive direct-response architectures strictly mapped to physical business objectives.",
        steps: [
            { title: "Tracking Architecture", desc: "Explicitly fixing drastically broken pixel integrations natively heavily ensuring algorithms receive perfect exact data physically." },
            { title: "Audience Modeling", desc: "Isolating high-value user clusters statistically most likely to transact immediately." },
            { title: "Creative Testing", desc: "Running tiny budgets globally finding extreme anomaly ads mathematically outperforming standard chaotic benchmarks fundamentally." },
            { title: "Funnel Optimization", desc: "Re-engineering destination URLs rapidly repairing severe drop-off vectors natively blocking revenue capture." },
            { title: "Vertical Scaling", desc: "Aggressively injecting massive capital explicitly specifically into winning ad-sets natively perfectly without algorithmically breaking CPA ceilings." },
            { title: "Cross-Channel Cohesion", desc: "Deploying parallel remarketing across Meta, Google, and TikTok seamlessly trapping prospects inside your ecosystem." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE TARGETING",
        title: "Performance Marketing Services",
        items: [
            {
                title: "Performance Marketing Strategy",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Formulating rigorous mathematical deployment calendars analyzing extreme blended CPA thresholds before spending a single dollar.",
                    "Aligning creative payloads mathematically against hard historical performance baselines."
                ],
                cta: "Calculate Your Strategy"
            },
            {
                title: "Paid Search Campaigns",
                icon: <Search className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Bidding specifically on exact-match commercial intent queries physically neutralizing generic search fatigue completely.",
                    "Creating highly predictable direct revenue machines driven purely by bottom-funnel interest."
                ],
                cta: "Dominate Search"
            },
            {
                title: "Paid Social Advertising",
                icon: <Users className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Scaling massive daily budgets inherently explicitly balancing creative fatigue mathematically simultaneously avoiding massive CPA spikes.",
                    "Operating across Meta, TikTok, and LinkedIn."
                ],
                cta: "Launch Social Ads"
            },
            {
                title: "Conversion Rate Optimization",
                icon: <TrendingUp className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Deploying heavy matrices natively actively isolating exactly which specific structure physically drops click costs entirely."
                ],
                cta: "Boost Conversions"
            },
            {
                title: "Retargeting Campaigns",
                icon: <Magnet className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Chasing abandoned users aggressively flawlessly globally violently securing drastically cheap final closing conversions natively."
                ],
                cta: "Capture Lost Sales"
            },
            {
                title: "ROI & Performance Optimization",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Writing exact Node.js logic pushing offline heavy CRM conversion data perfectly securely into algorithmic learning."
                ],
                cta: "Optimize Your ROI"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Analytics Tracking",
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
        title: "Why Businesses Choose Our Performance Marketing",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "ROI-Focused Campaigns",
            "Advanced Campaign Tracking",
            "Conversion Optimization",
            "Data-Driven Decisions",
            "Audience Targeting",
            "Retargeting Architectures",
            "Real-Time Analytics",
            "Continuous Performance Calibration"
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

export default PerformanceMarketing;
