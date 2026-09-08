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
        parentTitle: "content writing services",
        parentRoute: "/services/digital-marketing/content-marketing",
        eyebrow: "The Best Solution For Your Business",
        title: "Result-Driven Content Writing Agency",
        description: "",
        visual: ContentMarketingVisual,
        ctaText: "GET FREE QUOTE NOW"
    };

    const intro = {
        eyebrow: "",
        title: "Hire Professional Content Writers",
        paragraphs: [
            "The content market is largely unorganized in this online world. Several businesses want SEO-friendly, relevant, and traffic-driving content but cannot find professional content writers. We’re here to help you bridge the gap. Our goal at 21Twelve Interactive is to deliver high-quality content that will improve the online presence of all companies while also bringing in high-quality clients and generating cash through the internet. We offer our reputed clients an expansive range of the best content writing services.",
            "Our responsibility is to deliver the best service for building a brand and recognition by creating targeted content. A group of young and creative writers is dedicated to giving the top content marketing services possible. Blog Posts, Website Content, Service Pages, Location-Specific Pages, Landing Pages, Social Media Content, Ad Copy, Case Studies, Press Releases, Email Marketing, Newsletters, and Translation services are just a few areas in which we specialize. Our mission at 21Twelve Interactive is to assist all businesses, start-ups, or established corporations. We help clients develop a significant and better presence across all digital channels with content. We want to reduce the number of money businesses spend on maintaining a professional online presence through content. We also strongly emphasize upholding high standards of work ethics, timeliness, professionalism, and creating a pleasant working environment."
        ]
    };

    const process = {
        eyebrow: "Enhance Your Project with Risk Free Development Process",
        title: "Process We Follow",
        description: "We follow a reliable and effective process to create unique, compelling content tailored to meet your specific goals. Our experienced writers bring together creativity and technique, combining research and storytelling for maximum impact.",
        steps: [
            { title: "Groundwork", desc: "Researching and analyzing the clients’ industry & their competitors to know KPIs & project management to ensure the project success." },
            { title: "Objective & Scope", desc: "We communicate with our clients, know their needs, and suggest the best solution to get the desired results. In addition, our SEO experts help you know the overall scope of your tasks." },
            { title: "Planning & Scheduling", desc: "We analyze every detail of the project schedule, like the required number of resources, tasks, challenges, and associated milestones. We identify keywords optimize content and the website." },
            { title: "Submission to Search Engines", desc: "We submit the optimized pages to the search engines. Our experienced SEO experts implement the best strategies to rank your website on different search engines." },
            { title: "QA & Testing", desc: "We test everything before and after submitting the website to the search engines. Furthermore, our team always makes required enhancements per the search engine’s algorithm." },
            { title: "Help & Support", desc: "Being a professional SEO company, we offer consistent support to our clients and resolve all their issues in no time. We review the ranking continuously and work to improve it." }
        ]
    };

    const services = {
        eyebrow: "Empower Your Business with Our Services",
        title: "Our Creative Content Writing Services",
        items: [
            {
                title: "White Papers",
                icon: <Target className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "White papers are long-form content publications professionally produced to offer knowledge while building trust among your target audience. These papers show what your organization offers to answer a specific issue. At The Digital Connect, we provide our clients with excellent white paper writing services at a low cost.",

                    "We have access to a diverse spectrum of knowledge because we have a workforce scattered throughout the world. Our staff is prepared to begin the research necessary and SEO content writing service to put together your white paper as soon as possible. White papers may take on a variety of formats; our professional content writers of white papers are adaptable and well-organized.",

                    "Whitepapers help you develop your thought leadership & reputation in the market by demonstrating your expertise. As a result, the content of the whitepaper will be produced in a unique manner that will have an impact on decision-making in your industry."
                ],
                cta: "Give us a call today to frame effective white papers!"
            },
            {
                title: "Case Studies Writing",
                icon: <PenTool className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "The Case study is indeed a persistent marketing tactic used by many companies. A decent case study can create a lasting impact on your consumer, increasing the likelihood of a long-term relationship and partnership between you. More than that, the company will increase the number of new clients seeking your services. To accomplish this, we develop case studies that are both visible and persuasive.",

                    "It is set against futuristic backgrounds; highlights your product’s ability to deal with potential obstacles. Through our work with businesses, organizations, and even entire corporations, we have gathered a wealth of knowledge and experience in effective case study writing, allowing us to present our clients with services that will astound even the most jaded of them.",

                    "Case study writing is something that we take extremely seriously, and we make use of all of our capabilities, expertise, and service capabilities to ensure that we provide amazing services to all of our clients on every occasion."
                ],
                cta: "We can offer you the best, call us now!"
            },
            {
                title: "eBooks Writing",
                icon: <Layout className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "Whether you intend for the eBook to be a stand-alone product or a promotional tool to promote your company’s products and services, it must strike the right emotional chord with the reader. Our eBook writers possess the knowledge and the ability to produce high-quality content ebooks.",

                    "Hire our eBook content writer & make your eBook project succeed. Online content is the future medium of information, entertainment, and marketing. In addition to being a part of the future, electronic books are also a logical development of printed books.",

                    "Because of the ease with which ebooks can be shared or distributed, they are an excellent medium for various reasons, including marketing. We write content for eBooks that are of actual value to readers and, as a result, help grow your business. If you require further changes, we will offer you as many as you require."
                ],
                cta: "Get your eBooks now. Contact us to know more!"
            },
            {
                title: "Video & Animation Script",
                icon: <MessageSquare className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "A scriptwriter creates commercials, webinars, videos, television shows, and film scripts. Having a thorough understanding of the ins & outs of screenwriting, our writers can craft natural-sounding, captivating scripts on virtually any subject matter.",

                    "Whether you have a concept for a movie but lack the experience to turn it into a script, require a plot for gameplay you’re developing, need a refined narration for a webinar the company is hosting, or require a script for your organization’s first TV commercial, there is a writer at The Digital Connect who can best help.",

                    "We are well-versed in the various copy formats and can combine the most relevant option for the client. Apart from that, we make certain that the substance of the ad copy is relevant to the readers by conducting the appropriate research before generating these materials. We simplify the text to make it easier to understand and integrate the brand’s personality into the materials."
                ],
                cta: "Hire us for video & animation script writing services now!"
            },
            {
                title: "Website Content & Blog Writing",
                icon: <LockKeyhole className="w-8 h-8" />,
                imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
                paragraphs: [
                    "We are your go-to resource for all types of web material. Our professional content writers are highly skilled and trained to develop entirely personalized copies for the online audience, whether for a blog, website, or article marketing campaign. Most users of a website glance over the information rather than reading it from beginning to end.",

                    "Because of this, our web content writers are well aware of the need to maintain the structure & format of articles, blogs, and websites so that readers find it easy to read them. We are committed to exceeding your expectations. The task of writing good blog content is to understand both the expectations of the client and the expectations of the customer’s audience before starting.",

                    "Our blog writers are experienced in writing about various topics and themes and know SEO content writing services. This adaptability enables us to meet the blog writing requirements of a wide range of clients. Furthermore, our content writing agency ensures that the blog articles are written at a level of comprehension appropriate for the typical reader, allowing them to absorb the information thoroughly."
                ],
                cta: "Get website content & blog writing services quotes now!"
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
        description: "We always prioritize the happiness of our clients with our best content writing services. Here are some key points which prove why you should hire us.",
        items: [
            "In-house highly-skilled writers",
            "Offers round-the-clock support",
            "Thorough understanding of writings concept",
            "Always write meaningful articles",
            "Promise quality and affordable content",
            "Offers proof-reading and editing",
            "Write fresh & original content",
            "Every project is given a quality rating"
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
