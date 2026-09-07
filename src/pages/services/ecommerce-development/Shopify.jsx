import React from 'react';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe, Store, ShoppingCart, HeartPulse, Navigation, GraduationCap, Shirt, Dumbbell, Scale, Bitcoin, Landmark, Paintbrush, Building, CheckCircle2, CreditCard, Code, RefreshCw, Palette } from 'lucide-react';
import { ShopifyVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { ModernServiceLayout } from '../../../components/services/subservices/ModernServiceLayout';

const Shopify = () => {
    const seoData = {
        title: "Powerful Shopify Development Solutions for Growing Businesses | The Digital Connect",
        description: "Custom headless Shopify architectures maximizing absolute storefront versatility mapping strictly to high-conversion checkout optimization."
    };

    const theme = { "accent": "text-brand-cyan", "bg": "bg-brand-cyan/20", "softBg": "bg-brand-gold/10" };

    const hero = {
        parentTitle: "eCommerce Development",
        parentRoute: "/services/ecommerce-development",
        eyebrow: "SHOPIFY DEVELOPMENT",
        title: "Powerful Shopify Development Solutions for Growing Businesses",
        description: "Standard Shopify themes destroy conversion momentum identically. If your storefront looks exactly like ten thousand other generic dropshipping businesses, consumer trust heavily falters. We engineer highly bespoke Shopify environments scaling securely with your enterprise.",
        visual: ShopifyVisual,
        ctaText: "Start Your Shopify Project"
    };

    const intro = {
        eyebrow: "OUR SHOPIFY DEVELOPMENT SERVICES",
        title: "Escaping the Generic Template Ecosystem",
        paragraphs: [
            "We replace basic templates entirely with custom Liquid operations or headless architectures. By deploying custom Shopify Plus headless solutions utilizing Next.js or React on the frontend, we bypass native Shopify rendering limitations instantly.",
            "This explicitly delivers hyper-fast, millisecond page-loading speeds which mathematically correlate to intense revenue increases directly.",
            "We optimize absolutely everything: customizing complex filtering algorithms, executing robust ERP integrations, and redesigning the checkout process to heavily reduce cart abandonment."
        ]
    };

    const process = {
        eyebrow: "HOW WE WORK",
        title: "Our Shopify Methodology",
        description: "We deploy rigorous engineering systems customizing every facet of your Shopify ecosystem.",
        steps: [
            { title: "Platform Auditing", desc: "Diagnosing heavy bottleneck applications dragging native server performance directly killing active conversions." },
            { title: "Custom Architecture Build", desc: "Writing clean minimal logic rendering unique catalog experiences functioning fundamentally better." },
            { title: "UI/UX Store Design", desc: "Crafting immaculate, branded eCommerce fronts ensuring intuitive customer journeys." },
            { title: "Third-Party Webhooks", desc: "Integrating aggressive multi-platform tools synchronizing exact analytics securely." },
            { title: "Migation Execution", desc: "Safely transferring entire historical catalogs and consumer databases onto Shopify reliably." },
            { title: "Conversion Calibration", desc: "Auditing exact funnel metrics continuously to refine sales-driving elements seamlessly." }
        ]
    };

    const services = {
        eyebrow: "COMPREHENSIVE ECOMMERCE",
        title: "Shopify Development Services",
        items: [
            {
                title: "Shopify Store Development",
                icon: <Store className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Developing robust entire storefronts natively bypassing off-the-shelf templates and integrating direct analytics protocols flawlessly.",
                    "Creating a highly predictable direct revenue machine driven purely by optimized user experiences."
                ],
                cta: "Build Your Store"
            },
            {
                title: "Custom Shopify Theme Development",
                icon: <Code className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Authoring immaculate raw Liquid code fundamentally avoiding massively bloated pre-bought marketplace themes entirely.",
                    "Connecting visually engaging, highly functional front-end assets directly to Shopify's secure backend."
                ],
                cta: "Design Custom Theme"
            },
            {
                title: "Shopify Theme Customization",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Surgically modifying existing templates specifically improving filtering algorithms and navigation funnels without breaking global CSS logic natively."
                ],
                cta: "Customize Your Theme"
            },
            {
                title: "Shopify App Integration",
                icon: <Layers className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Fusing bespoke middleware explicitly pushing high-volume inventory data perfectly across fragmented global warehouses or ERP suites."
                ],
                cta: "Integrate Powerful Apps"
            },
            {
                title: "Shopify Store Migration",
                icon: <RefreshCw className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Deploying rigorous ETL (Extract, Transform, Load) protocols safely shifting massive customer databases and dense SKU catalogs completely securely preserving all metadata."
                ],
                cta: "Migrate to Shopify"
            },
            {
                title: "Shopify Performance Optimization",
                icon: <Zap className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Implementing rapid checkout customization aggressively reducing cart abandonment metrics explicitly."
                ],
                cta: "Optimize Performance"
            },
            {
                title: "Shopify Maintenance & Support",
                icon: <Database className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Continuously projecting massive updates providing robust security sweeps keeping your entire framework perfectly intact."
                ],
                cta: "Get Ongoing Support"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom Analytics Tracking",
        title: "Industries",
        description: "A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers' engagement.",
        items: [
            { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
            { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
            { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
            { name: "Food & Grocery", desc: "Rapidly develop functional storefronts selling inventory seamlessly", icon: <Store /> },
            { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
            { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
            { name: "Beauty & Cosmetics", desc: "Visually stunning Shopify stores driving cosmetic retail heavily", icon: <Palette /> },
            { name: "Home & Lifestyle", desc: "Intelligent digital solutions for lifestyle catalog ecosystems", icon: <Building2 /> }
        ]
    };

    const reasons = {
        eyebrow: "REASON TO CHOOSE US",
        title: "Why Businesses Choose Our Shopify Agency",
        description: "We combine technical expertise, creative thinking and business-focused practices to accelerate your digital growth.",
        items: [
            "Custom Shopify Development",
            "Conversion-Focused Store Design",
            "Shopify App Integration",
            "Secure Payment Integration",
            "Store Performance Optimization",
            "Mobile-Friendly Experiences",
            "Complex Data Migration",
            "Ongoing Server Maintenance"
        ]
    };

    const contact = {
        title: "Ready to Build Your Shopify Store?",
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

export default Shopify;
