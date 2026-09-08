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
                title: "Custom Shopify Store Development",
                icon: <Store className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "A Shopify shop comprises a wide range of features and functions that allow merchants to sell their items online and provide them with cloud-based systems and themes. Regarding e-commerce, the Shopify app is inevitable in terms of its relevance and role in the overall success of a business.",

                    "We can’t overlook the Shopify applications when it comes to expanding the functionality of a Shopify shop and adding new features and services. We realize that no two internet businesses are alike, even if they offer the same things. You can rely on our staff to develop a Shopify website design that matches your unique needs, no matter what they may be.",

                    "Our Shopify developers are proficient in the most recent versions of the Shopify and Shopify Plus platforms, so hire them at reasonable rates. With the most recent Shopify improvements, our team has constantly adapted to provide our clients with the best possible Shopify websites."
                ],
                cta: "Build Your Store"
            },
            {
                title: "Shopify Migration",
                icon: <Code className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "A new storefront is far easier to set up than a platform transfer. The process is complicated to migrate a traditional online store to Shopify. To avoid damaging your store’s data and rating throughout the Shopify migration process, you must ensure it is done the first time correctly.",

                    "At The Digital Connect, we help you migrate all of your online store’s items, orders, customers, data, and content without any hassles or chance of losing data. Your online shop items, content, photos, order data, and customers’ data might be difficult to migrate if the engineers are skilled. Over the years, we’ve helped several companies migrate their e-commerce operations from various e-commerce platforms to Shopify.",

                    "It includes Magento, WooCommerce, BigCommerce, and more. Our Shopify ecommerce website building firm has a team of experts that can help you migrate to the platform without any issues. We provide a worry-free migration solution from other eCommerce platforms to Shopify and Shopify to Shopify Plus."
                ],
                cta: "Design Custom Theme"
            },
            {
                title: "Shopify Apps Development",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Creating an eCommerce website for your business is the best bet to increase your customers and improve sales. Besides our excellent technological skills, we also know a lot about the ins and outs of every e-commerce specialty and sector and the business processes that go along with them.",

                    "Our expert and experienced developers will help you to develop various Shopify apps to enhance your Shopify eCommerce store. Our experts not only design and develop Shopify apps, but we also provide Shopify app maintenance and upgradation services. Also, our marketing experts will help you to optimize your app in the market and increase your app installation in the app market.",

                    "As an expert Shopify development company, we deeply understand the technology and can help you choose the ideal recruiting strategy for your organization. Our Shopify developers will be available and willing to assist you in creating and transforming your Shopify website if you select this dedicated Shopify development model."
                ],
                cta: "Customize Your Theme"
            },
            {
                title: "Themes Development & Customization",
                icon: <Layers className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Shopify themes are fantastic because they meet the demands of e-commerce businesses and the expectations of their consumers. However, they may need to meet your expectations since you want something more to make them ideal for your company. You may modify the Shopify theme with the help of our design specialists.",

                    "We are one of the best Shopify developers and designers globally. We will completely redesign your Shopify store’s user interface. Our designers have worked on various projects for small and large enterprises alike. We adhere to industry best practices to provide the most incredible theme architecture.",

                    "We’re here to help you every step of the way as a trusted theme development specialist. With our universal and engaging themes, you can give your online business a facelift. If you’re looking for the most remarkable e-commerce website design, go no further than our team of UX/UI designers."
                ],
                cta: "Integrate Powerful Apps"
            },
            {
                title: "Shopify Support & Maintenance",
                icon: <RefreshCw className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "If you ask us here at The Digital Connect, our work continues once your site is live. In addition to creating and hosting, we provide comprehensive Shopify maintenance. Our team of professionals will deal with any issues or malfunctions swiftly.",

                    "There is no difference in the level of service we provide whether you have a brand new Shopify shop or are migrating from an older site to a hosting plan. We at The Digital Connect know how critical it is for your business to have a fully functional location at all times. We’re here to help you get there with our round-the-clock customer service and maintenance.",

                    "To maintain your e-commerce site running at its best functionality, we work around the clock to handle any difficulties you have daily. We’ve worked with eCommerce sites of all shapes and sizes for over a decade. All Shopify shops are included in this, and we guarantee to keep them up to date for you and your customers."
                ],
                cta: "Migrate to Shopify"
            },
            // {
            //     title: "Shopify Performance Optimization",
            //     icon: <Zap className="w-8 h-8" />,
            //     imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
            //     paragraphs: [
            //         "Implementing rapid checkout customization aggressively reducing cart abandonment metrics explicitly."
            //     ],
            //     cta: "Optimize Performance"
            // },
            // {
            //     title: "Shopify Maintenance & Support",
            //     icon: <Database className="w-8 h-8" />,
            //     imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
            //     paragraphs: [
            //         "Continuously projecting massive updates providing robust security sweeps keeping your entire framework perfectly intact."
            //     ],
            //     cta: "Get Ongoing Support"
            // }
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
