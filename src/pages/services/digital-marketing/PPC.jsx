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
        parentTitle: "PPC services",
        parentRoute: "/services/digital-marketing/ppc",
        eyebrow: "The Best Solution For Your Business",
        title: "Trusted PPC Management Company",
        description: "",
        visual: PPCVisual,
        ctaText: "GET FREE QUOTE NOW"
    };

    const intro = {
        eyebrow: "",
        title: "Renowned PPC Management Agency",
        paragraphs: [
            "Pay-per-click advertising (PPC) is a powerful way to boost revenue for your company. PPC management services powered by 21Twelve Interactive can help you meet your objectives and get the most out of your ad spend by increasing conversions or driving more visitors to your website. It gives you an advantage over your competition since you can reach them where they’re already browsing. With our PPC management services, 21Twelve Interact can create a tailored PPC campaign to help your business grow conversions and income. From Google Ads to Facebook Ads, we assist our customers in reaching their target audience on the most efficient paid advertising platforms.",
            "With thousands of dollars in PPC budgets under our belts, we’ve figured out what constitutes a good client-PPC agency relationship. We’ve designed our PPC management program based on what provides our customers with the greatest results while maintaining the highest degree of accountability. Pay-per-click advertising campaigns are perfect for organizations that want to grab clients quickly. Regardless of your company’s size or budget, we’ll help you convert every dollar into revenue. Make an online appointment with a PPC strategist from our company to discuss ways to increase income from PPC campaigns."
        ]
    };

    const process = {
        eyebrow: "Enhance Your Project with Risk Free Development Process",
        title: "Process We Follow",
        description: "Our new clients often inquire how we intend to onboard their accounts when we first meet. The following is our procedure:",
        steps: [
            { title: "Questionnaires", desc: "We are the marketing strategists that look at the big picture and prepare the questionnaires." },
            { title: "Auditing of Current Accounts", desc: "Once we’ve learned as much as possible from the current account’s prior performance, we set a baseline against which to compare all of our KPIs." },
            { title: "Kickoff Meeting", desc: "As part of our discovery process, we examined completed questionnaires during this conference." },
            { title: "Restructuring or Setting Up an Account", desc: "This process comprises improving the different account settings, such as campaigns, ad groups, match types, extensions, bids, goal tracking, and audience/in-market targeting." },
            { title: "Campaign Setup", desc: "We will create various ad campaigns and copies to run our PPC ads at this stage. Our certified PPC experts will always set up and create a result-oriented campaign." },
            { title: "Measure and Monitor", desc: "After creating and launching our ppc campaign, it’s time to sit, relax & measure it. How many leads are we getting? What are ad copies performing better? From which device are we getting more leads? Where do we have to improvise our ad strategy?" }
        ]
    };

    const services = {
        eyebrow: "Empower Your Business with Our Services",
        title: "Our Pay Per Click Management Services",
        items: [
            {
                title: "Search Ads",
                icon: <Search className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "One of the most prevalent methods of paid search marketing is search advertising. Search advertising is shown to those already interested in your sector or brand. Short sales cycles or one-time campaigns might benefit from these pay-per-click advertisements.",

                    "We propose search advertising for companies looking to attract new consumers with powerful, high-quality leads. Prospects seeking your sector or brand offers online will see your search advertisements. These pay-per-click advertisements are appropriate for brief sales cycles or one-time campaign promotions.",

                    "If you are a company looking to get powerful, high-quality leads from new consumers, our pay-per-click advertising service advises search advertising. Contact us if you’d like to chat with one of our strategists about the advantages of social media ad management."
                ],
                cta: "Hire us to get reliable search ads campaigns for your business!"
            },
            {
                title: "Display Ads",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Display advertising is the most successful advertising method. Display advertising shows on sites that Google has approved as partners. Display advertising makes the most of images and text to draw viewers and persuade them to act. Display ads help to increase your brand awareness.",

                    "Our pay-per-click advertising firm advises display advertising for businesses with long sales cycles and specialized or luxury clientele. Display advertisements appear on Google’s partner websites and target individuals who have visited websites similar to their sector.",

                    "Regarding internet advertising, display advertising makes the most of pictures and text to attract consumers’ attention and persuade them to take action. When it comes to firms with long sales cycles and consumers that are either specialized or luxury, our pay-per-click advertising agency offers display advertising."
                ],
                cta: "Let us frame Display ads to grow your business!"
            },
            {
                title: "Social Media Paid Ads",
                icon: <Megaphone className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Pay-per-click advertising on social media has become the fastest-growing part of the industry. Social media platforms like Facebook, LinkedIn, Instagram, and Twitter all provide social advertisements. They are pre-programmed to target potential customers based on their interests, hobbies, and social networks, among other things.",

                    "At The Digital Connect, our paid ads experts team will help you promote your events, webinar, product launching, lead generation, post-boost, retargeting, and many other paid social media ads.",

                    "Firms in practically any sector may use social advertising to engage, educate, and convert their target audience. Know how our agency and social media ad management services may help you develop your online presence and boost consumer loyalty by contacting us now."
                ],
                cta: "For decent social media ads, you may also call us!"
            },
            {
                title: "Retargeting Ads/Remarketing Ads",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "One of the greatest methods to find consumers that convert well is via remarketing, which may quadruple your revenue. People who have previously visited your website will be reminded and persuaded to convert via remarketing advertisements. Since fewer people compete for the same customers, remarketing is less expensive than search advertising.",

                    "With our PPC marketing services, you’ll get the best results from your PPC campaign. Competitive remarketing services from The Digital Connect attract paying clients back to your company. Our digital marketing experts have hundreds of successful pay-per-click (PPC) campaigns under their belts and can give our customers results that are second to none.",

                    "It is possible to use remarketing as a significant instrument for boosting sales and expanding your organization. Your organization may reap the benefits of remarketing with the help of The Digital Connect’s remarketing services."
                ],
                cta: "Contact us online to learn more about what our distinguished team can do for you!"
            },
            {
                title: "PPC Audits Services",
                icon: <BarChart2 className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Whether you’re spending too much money on your pay-per-click (PPC) advertising campaign and getting too little return, a PPC audit may help you figure out what’s wrong and how to solve it. And you don’t even have to pay a dime to get started.",

                    "If you’re spending too much money on your pay-per-click (PPC) advertising campaign and getting too little return, a PPC audit may help you figure out what’s wrong and how to solve it. And you don’t even have to pay a dime to get started.",

                    "Our outstanding PPC audits services are the key to increasing your company’s online revenue. A personal consultation with a strategist is available if you’re interested in learning more about our expert PPC management services or assessing your current paid advertising campaigns."
                ],
                cta: "To get started, get your free PPC audit services quotes now!"
            }
        ]
    };

    const industries = {
        eyebrow: "Custom IT Solutions for Varied Verticals",
        title: "Industries",
        description: "A perfect combination of ideation & innovation of digital products for all industry verticals. We help you streamline and improve customers’ engagement.",
        items: [
            { name: "eCommerce & Retail", desc: "Improve the brand presence and sales with an online marketplace", icon: <ShoppingCart /> },
            { name: "Health & Fitness", desc: "Perfect solutions for transformational health & fitness care", icon: <HeartPulse /> },
            { name: "Travel & Hospitality", desc: "Integrate your travel experience with robust digital platforms", icon: <Navigation /> },
            { name: "Education & e-Learning", desc: "Blending technology to bring seamless experience into education", icon: <GraduationCap /> },
            { name: "Fashion & Apparel", desc: "Robust fashion apps to improve your brand's presence", icon: <Shirt /> },
            { name: "Sports Industry", desc: "Creating modern websites and apps for the sports industry", icon: <Dumbbell /> },
            { name: "Legal Industry", desc: "New generation websites and apps for modern law firms", icon: <Scale /> },
            { name: "Blockchain & Crypto", desc: "Perfect apps for blockchain & crypto industry vertical", icon: <Bitcoin /> },
            { name: "Finance & Share Marketing", desc: "Trustworthy & next-gen mobile solutions for finance organizations", icon: <Landmark /> },
            { name: "Home Interior & Exterior", desc: "Rapidly develop a fully-functional home decor storefront", icon: <Paintbrush /> },
            { name: "Real-Estate Industry", desc: "Intelligent digital solutions for the real estate industry", icon: <Building /> },
            { name: "Hotel Industry", desc: "Smoothen your hotel processes with our digital solution", icon: <Building2 /> }
        ]
    };

    const reasons = {
        eyebrow: "Reason to Choose US",
        title: "Our Key Features",
        description: "As a leading provider of cost-effective PPC services, we are well-known in the industry. Hire our PPC developers to get the most out of your project.",
        items: [
            "Dedicated experts representative",
            "Google certified PPC experts",
            "Quick experimentation",
            "Total customization",
            "Trackable data",
            "Improved brand visibility",
            "Deliver transparent ROI reporting",
            "Immediate and consistent traffic"
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
