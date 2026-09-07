import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2, User, Palette, CreditCard, RefreshCw, Code } from 'lucide-react';
import { WooCommerceVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const WooCommerce = () => {
    const seoData = {
        title: "Limitless Omnichannel Commerce Built on Code | The Digital Connect",
        description: "Deeply customized open-source Woo commerce experiences granting complete data ownership and literally limitless platform structural capabilities."
    };

    const theme = { "accent": "text-brand-periwinkle", "bg": "bg-brand-periwinkle/20", "softBg": "bg-brand-cyan/10" };

    const hero = {
        parentTitle: "eCommerce Development",
        parentRoute: "/services/ecommerce-development",
        eyebrow: "WOOCOMMERCE DEVELOPMENT",
        title: "Flexible WooCommerce Solutions Built for Online Growth",
        description: "SaaS eCommerce platforms command immense monthly fees and structurally limit what backend code you can explicitly alter. WooCommerce immediately solves this natively by providing 100% open-source structural access explicitly sitting on top of WordPress.",
        visual: WooCommerceVisual,
        ctaText: "Start Your WooCommerce Project"
    };

    const intro = {
        eyebrow: "OUR WOOCOMMERCE DEVELOPMENT SERVICES",
        title: "Complete Commercial Autonomy and Data Control",
        paragraphs: [
            "We construct heavy WooCommerce environments heavily optimized exclusively for high-traffic stores that demand extraordinarily specific checkout setups, incredibly dynamic subscription modeling, or highly explicit wholesale (B2B) permission tiering.",
            "We heavily rewrite standard bloated WooCommerce infrastructures, offloading complex databases, enabling caching, and securing immense catalog queries running flawlessly.",
            "Owning your entire secure consumer history database natively perfectly safeguards from unexpected SaaS platform bans while granting limitless architectural control."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our WooCommerce Methodology",
        description: "We deploy vigorous structural WordPress ecosystems customizing exact commerce logic.",
        steps: [
            { title: "Server Architecture", desc: "Engineering intense Redis caching natively optimizing queries matching exact standard enterprise loading metrics flawlessly." },
            { title: "Store UI Customization", desc: "Drafting visually engaging, highly functional front-end layouts specifically scaling mobile interactions." },
            { title: "Third-Party Integration", desc: "Implementing aggressive multi-platform tools synchronizing exact analytics and ERP gateways securely." },
            { title: "Theme Code Execution", desc: "Authoring immaculate bespoke PHP logic fundamentally avoiding massively bloated pre-bought WordPress environments." },
            { title: "B2B Permission Routing", desc: "Deploying deep user permission tiers instantly altering product pricing dependent natively on logged-in roles." },
            { title: "Security Protocols", desc: "Running stringent payment gateway lockdown audits blocking explicitly automated malicious transactions." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE WORDPRESS",
        title: "WooCommerce Services",
        items: [
            {
                title: "Custom WooCommerce Development",
                icon: <Code className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Drafting totally unique, extremely robust open-source web infrastructures effectively connecting your physical catalog directly into massive digital distribution workflows securely."
                ],
                cta: "Start Development"
            },
            {
                title: "WooCommerce Store Design",
                icon: <Palette className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Forging highly persuasive landing page interfaces optimizing the overarching consumer tracking funnel maximizing conversions naturally."
                ],
                cta: "Design Your Store"
            },
            {
                title: "WooCommerce Theme Customization",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Surgically tweaking exact frontend cart variables and navigation layouts avoiding heavy core WordPress function destruction entirely."
                ],
                cta: "Customize Your Theme"
            },
            {
                title: "Plugin & Payment Integration",
                icon: <CreditCard className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Fusing explicitly massive payment gateway networks properly handling immense transaction volumes securely across fragmented international geographies."
                ],
                cta: "Integrate Payments"
            },
            {
                title: "WooCommerce Migration",
                icon: <RefreshCw className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Executing rigorous ETL actions transferring historical databases away from closed ecosystems natively into safe decentralized environments flawlessly."
                ],
                cta: "Migrate to WooCommerce"
            },
            {
                title: "WooCommerce Performance Optimization",
                icon: <Zap className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Repairing explicitly broken underlying infrastructure logic ensuring your open-source store matches enterprise rendering sub-millisecond rates directly."
                ],
                cta: "Optimize Performance"
            },
            {
                title: "WooCommerce Maintenance & Support",
                icon: <Server className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Executing standard PHP updates natively explicitly deploying patches preventing heavy technical debt from scaling exponentially locally."
                ],
                cta: "Maintain Your Store"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom eCommerce Workflows",
        title: "Industries",
        description: "A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers' engagement.",
        items: [
            { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
            { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
            { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
            { name: "Food & Grocery", desc: "Rapidly develop functional storefronts selling inventory seamlessly", icon: <Store /> },
            { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
            { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
            { name: "Beauty & Cosmetics", desc: "Visually stunning stores driving cosmetic retail heavily", icon: <Palette /> },
            { name: "Real Estate", desc: "Intelligent digital solutions for complex internal real estate metrics", icon: <Building2 /> }
        ]
    };

    const reasons = {
        eyebrow: "REASON TO CHOOSE US",
        title: "Why Businesses Choose Our WooCommerce Services",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Custom WooCommerce Development",
            "Flexible Store Architecture",
            "Payment Gateway Integration",
            "Plugin Integration Protocol",
            "Performance Optimization Metrics",
            "Mobile-Responsive Storefronts",
            "Complex Data Migration",
            "Ongoing WordPress Maintenance"
        ]
    };

    const contact = {
        title: "Ready to Grow Your WooCommerce Store?",
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

export default WooCommerce;
