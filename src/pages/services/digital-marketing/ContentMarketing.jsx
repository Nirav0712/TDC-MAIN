import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2, PenTool } from 'lucide-react';
import { ContentMarketingVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const ContentMarketing = () => {
    const seoData = {
        title: "Content Marketing That Builds Brands & Drives Growth | The Digital Connect",
        description: "Producing elite long-form educational ecosystems explicitly capturing high-intent prospects entirely before they are ready to transact physically."
    };

    const theme = { "accent": "text-brand-blue", "bg": "bg-brand-blue/20", "softBg": "bg-brand-cyan/10" };

    const hero = {
        parentTitle: "Digital Marketing",
        parentRoute: "/services/digital-marketing",
        eyebrow: "CONTENT MARKETING",
        title: "Content Marketing That Builds Brands & Drives Growth",
        description: "Before prospects purchase massive software or services, they research solutions actively. We construct immense content pipelines that act fundamentally as an evergreen sales engine.",
        visual: ContentMarketingVisual,
        ctaText: "STRATEGIZE YOUR CONTENT"
    };

    const intro = {
        eyebrow: "EMPOWER YOUR BUSINESS WITH OUR SERVICES",
        title: "Establishing Categorical Thought Leadership",
        paragraphs: [
            "We construct immense content pipelines: whitepapers, in-depth blog topologies, and heavy case studies. We actively refuse generic AI-generated fluff, exclusively focusing heavily on profound actionable proprietary insight driving extreme user trust.",
            "If you explicitly provide the most authoritative educational resource solving their immediate pain natively, you completely win the eventual physical contract sale.",
            "This ecosystem acts fundamentally as an evergreen sales engine actively indoctrinating global prospects comprehensively mathematically while your team sleeps entirely."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our Content Methodology",
        description: "We deploy rigorous editorial systems mapping your domain expertise into highly indexed, deeply engaging assets.",
        steps: [
            { title: "Topic Modeling", desc: "Analyzing deep search landscapes to locate untapped, high-leverage content opportunities." },
            { title: "Editorial Strategy", desc: "Crafting structured monthly deployment calendars perfectly aligned with your business objectives." },
            { title: "Asset Production", desc: "Drafting immense, highly technical architectures capturing severe deep long-tail SERP traffic flawlessly." },
            { title: "Optimization", desc: "Engineering on-page technical factors ensuring indexation and maximum organic reach." },
            { title: "Distribution", desc: "Orchestrating active outreach amplifying your new assets across engaged digital communities." },
            { title: "Performance Analysis", desc: "Auditing exact engagement metrics to refine subsequent production cycles." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE PUBLISHING",
        title: "Content Marketing Services",
        items: [
            {
                title: "Content Strategy",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Developing comprehensive long-term roadmaps effectively mapping customer journeys to precisely timed educational content.",
                    "Executing deeply researched buyer personas ensuring all published material resonates with your target demographic."
                ],
                cta: "Develop Your Strategy"
            },
            {
                title: "SEO Content Writing",
                icon: <PenTool className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Producing meticulously optimized long-form architectures strictly maintaining semantic keyword hierarchies.",
                    "Combining deep subject matter expertise with algorithmic precision to dominate search."
                ],
                cta: "Boost Search Authority"
            },
            {
                title: "Website Content",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Engineering highly persuasive landing page copy directly converting raw organic traffic into heavily qualified inbound leads."
                ],
                cta: "Optimize Web Copy"
            },
            {
                title: "Social Media Content",
                icon: <MessageSquare className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Extracting massive value from long-form core assets and restructuring them as highly engaging native micro-content."
                ],
                cta: "Engage Audiences"
            },
            {
                title: "Lead Generation Materials",
                icon: <LockKeyhole className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Designing extreme high-value PDFs and whitepapers actively gating them securely strictly exchanging for premium prospect emails."
                ],
                cta: "Generate More Leads"
            },
            {
                title: "Content Analytics",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Evaluating exact behavioral metrics measuring explicitly which articles organically close enterprise-level prospects mathematically."
                ],
                cta: "Measure Success"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Content Solutions",
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
        title: "Why Businesses Choose Our Content Marketing",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Strategic Content Planning",
            "SEO-Optimized Content",
            "Expert Content Creation",
            "Audience-Focused Storytelling",
            "Content Distribution",
            "Performance Analytics",
            "Conversion-Focused Content",
            "Continuous Optimization"
        ]
    };

    const contact = {
        title: "GET A FREE QUOTE",
        description: "We will get back to you within 24 hours"
    };

    // Dummy icon component for PenTool that isn't cleanly passing through lucide
    // Wait, PenTool is actually valid in lucide-react, I will verify it's exported.
    // Actually, I imported many icons but PenTool is missing in the list. I'll just use a generic icon (Layers) in the JSX above if needed, but I'll add PenTool import.

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

export default ContentMarketing;
