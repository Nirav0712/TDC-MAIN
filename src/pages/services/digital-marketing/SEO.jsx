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
        parentTitle: "SEO services",
        parentRoute: "/services/digital-marketing/seo",
        eyebrow: "The Best Solution For Your Business",
        title: "Professional SEO Services",
        description: "",
        visual: SEOVisual,
        ctaText: "GET FREE QUOTE NOW"
    };

    const intro = {
        eyebrow: "",
        title: "Affordable SEO Services",
        paragraphs: [
            "Do you know a report that shows that SEO increases by 14.6% conversion results if done right? Indeed this result is 8 times higher than traditional marketing strategies. Think of it SEO is an evolution that helps you improve your business in less time and effort. To leverage the full potential of SEO, you need professional hands. Our affordable SEO services are measurable, reliable, and transparent. Here we come into play with our extensive experience in offering SEO services. From strategic planning to final execution, we implement the complete SEO strategy. Being a professional online marketing company, we adopt 360° and a collaborative approach to SEO.",
            "Whether you need to increase your online visibility or online conversions, we will assist you in all possible ways. We have robust expertise, significant industry exposure, and experience that you can leverage to achieve your desired business goals from SEO. As an industry leader in online marketing services, we aim to deliver the highest growth and brand visibility to businesses irrespective of their size and domain. So if you need a professional seo company expert to grow your business globally, you are at the right place. We will help you achieve your online marketing objectives with less time and investment."
        ]
    };

    const process = {
        eyebrow: "Enhance Your Project with Risk Free Development Process",
        title: "Agile Development Process",
        description: "We have a proven and modern SEO process that helps us bring ranking, ROI, and success to our clients. So let's check our SEO process.",
        steps: [
            { title: "Groundwork", desc: "Researching and analyzing the clients’ industry & their competitors to know KPIs & project management to ensure the project’s success." },
            { title: "Objective & Scope", desc: "We communicate with our clients, know their needs, and suggest the best solution to get the desired results. In addition, our SEO experts help you know the overall scope of your tasks." },
            { title: "Planning & Scheduling", desc: "We analyze every detail of the project schedule, like the required number of resources, tasks, challenges, and associated milestones. We identify keywords to optimize content and the website." },
            { title: "Submission to Search Engines", desc: "We submit the optimized pages to the search engines. Our experienced SEO experts implement the best strategies to rank your website on different search engines." },
            { title: "QA & Testing", desc: "We test everything before and after submitting the website to the search engines. Furthermore, our team makes required enhancements per the search engine’s algorithm." },
            { title: "Help & Support", desc: "Being a professional SEO company, we offer consistent support to our clients and resolve all their issues in no time. We review the ranking continuously and work to improve it." }
        ]
    };

    const services = {
        eyebrow: "Empower Your Business with Our Services",
        title: "Our Offered Professional SEO Services",
        description: "Looking for the best SEO service for your business? At 21Twelve, we offer a range of SEO services tailored to your needs, including local SEO services, E-commerce SEO, international SEO and more.",
        items: [
            {
                title: "Local SEO Service",
                icon: <Map className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Local SEO is all about boosting your local business’s internet visibility and reaching out to the people who live in your area with your goods or services. Rather than targeting the whole country, local SEO targets a particular location. We know how to optimize your website, including keywords, frame headers, meta titles, meta descriptions, and images.",

                    "Search engine rankings are often influenced by how effectively your Google My Business page is optimized. It is where you give your location, company hours, a brief description, and a few images. When a user types a search query, the search engine’s results pages consider proximity, relevancy, and popularity before selecting a firm.",

                    "We utilize our in-depth skills to help you increase your business’s visibility in the local vicinity. Our local SEO service provides reliable and targeted results to all clients. We optimize your website for better visibility and access to all different search engines."
                ],
                cta: "Hire us for the best local SEO service!"
            },
            {
                title: "E-commerce SEO Service",
                icon: <ShoppingCart className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "E-commerce SEO refers to the practice of improving a company’s online shop. eCommerce SEO is the umbrella term for all of the subsequent SEO developments. Every day, search engines answer millions of inquiries related to eCommerce. Your website’s traffic and ranking will rise in less time if you use our eCommerce SEO services. Indeed, we are a one-stop solution for all your SEO needs.",

                    "Being a professional SEO company, we have extensive expertise in working with top brands and can assist you in getting the top ranking on SERPs. We are committed to offering result-oriented eCommerce SEO to drive growth, increase conversion, and generate organic traffic and sales.",

                    "We help you improve your eCommerce business presence with the best content and website optimization strategy recommended by search engines. We also deliver relevant information to your customers using our appropriate SEO content tactics. So don’t worry; you will always get committed and affordable eCommerce SEO services with us."
                ],
                cta: "Get eCommerce SEO service quotes now!"
            },
            {
                title: "International SEO Service",
                icon: <Globe className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "You’ll need to use global SEO techniques to increase your website’s organic traffic from other countries and languages. To succeed at international SEO, you must cater to your target market’s cultural context and enable them to make purchases in their currency and language.",

                    "Whether you want to conduct local keyword research in the international market or maximize your search engine rankings, our global SEO experts are here to assist you with their robust knowledge. Our international SEO approach will boost your brand’s visibility among global customers. Being a professional SEO company, we know how to make your business global and bring profits.",

                    "As the best SEO Company, we are committed to providing a complete set of integrated services to drive more growth for your company. Our professional SEO services are tailored to your business needs from SEO consultation and management."
                ],
                cta: "Connect with us to get professional international SEO services today!"
            },
            {
                title: "SEO Consulting",
                icon: <MessageSquare className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "A strong presence on search engines is vital for all businesses as it helps you get more visibility, profits, and ROI in less time and effort. Your website needs to be optimized for search engines using on-page optimization or on-site SEO. Our experienced SEO consultants optimize your website as per the modern SEO approach and search engine algorithm.",

                    "We work with the motto to increase your business’s visibility so more customers can grab your products and services. As the best SEO company, we create high-quality links on high DA and PA websites. Moreover, we implement the best-in-class SEO strategies to boost your website’s ranking and brand’s presence in today’s highly competitive market.",

                    "Using our SEO consulting service, you can leverage the benefits of experienced digital marketers, business analysts, project managers, and content developers. We empower our clients to achieve the desired results and rank on the SERP."
                ],
                cta: "Call us right now to get the best SEO consultation for your business development!"
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
        description: "We are a professional SEO company offering businesses the best and most affordable local SEO services. Hire us to get unique and result-centric SEO solutions.",
        items: [
            "Team of professional SEO experts",
            "Using all premium tools",
            "Comprehensive SEO Audit",
            "Multi-Location SEO",
            "Complete transparent process",
            "Regular monitoring & depth reporting",
            "Assured results",
            "Affordable SEO services"
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
