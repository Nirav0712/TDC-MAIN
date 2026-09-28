import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { SubServiceShared } from '../../components/services/subservices/SubServiceShared';
import { UIUXDesignVisual } from '../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import {
    ArrowRight, CheckCircle2, ShoppingCart, HeartPulse, Navigation,
    GraduationCap, Shirt, Dumbbell, Scale, Landmark, Truck, Building2,
    Building, Briefcase, Palette, PenTool, Monitor, Layout, Sparkles
} from 'lucide-react';

const UIUXDesign = () => {
    useSEO({
        title: "Designing Services | Graphic, Web, Logo & UI/UX Design | The Digital Connect",
        description: "Transform your visual presence with creative Designing Services by The Digital Connect. We offer Graphic Design, Web Design, Logo Design, and UI & UX Designing Services."
    });

    const theme = { accent: "text-purple-600", bg: "bg-purple-500/20", softBg: "bg-purple-50" };

    const services = [
        {
            title: "Graphic Designing Services",
            icon: <Palette className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Graphic Design",
            link: "/services/ui-ux-design/graphic-design",
            paragraphs: [
                "Establish a commanding and cohesive visual presence across all digital and print touchpoints. The Digital Connect crafts brochures, business cards, pitch decks, presentation templates, and corporate stationery that leave a lasting mark.",
                "Every asset is created with rigorous typography, precise color psychology, and scalable vector formats ready for professional print and high-resolution screen displays."
            ]
        },
        {
            title: "Web Design Company",
            icon: <Monitor className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Web Design",
            link: "/services/ui-ux-design/web-design",
            paragraphs: [
                "Deliver seamless, immersive user experiences across smartphones, tablets, laptops, and ultra-wide displays. The Digital Connect designs bespoke websites that reflect your unique value proposition without reliance on generic themes.",
                "We structure content layouts for maximum readability, fast visual scanning, and intuitive navigation flow that naturally guides visitors to conversion."
            ]
        },
        {
            title: "Logo Designing Services",
            icon: <PenTool className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
            cta: "Explore Logo Design",
            link: "/services/ui-ux-design/logo-design",
            paragraphs: [
                "Your logo is the cornerstone of your brand identity. The Digital Connect creates bespoke emblems, minimalist wordmarks, abstract marks, and monogram logos that immediately communicate your business values.",
                "We design with mathematical precision, utilizing golden ratio geometry and balanced typography to ensure visual longevity and instant brand recognition across all mediums."
            ]
        },
        {
            title: "UI & UX Designing Services",
            icon: <Layout className="w-8 h-8" />,
            imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            cta: "Explore UI & UX Design",
            link: "/services/ui-ux-design/ui-ux-designing-services",
            paragraphs: [
                "Transform complex digital ideas into effortless, intuitive user experiences. The Digital Connect combines deep behavioral research with cutting-edge UI design to build products people love to use.",
                "We define reusable design tokens, buttons, form inputs, modals, and navigation patterns that reduce cognitive friction and maximize user adoption."
            ]
        }
    ];

    const processSteps = [
        { title: "Creative Discovery & Brief", desc: "Understanding your brand mission, target audience profile, market positioning, and core aesthetic goals." },
        { title: "Visual Strategy & Moodboards", desc: "Developing visual moodboards, style directions, color palettes, and preliminary layout schematics." },
        { title: "Vector Design & Wireframing", desc: "Crafting pixel-perfect vector graphics, brand marks, and wireframe blueprints in Figma and Adobe Suite." },
        { title: "Interactive Prototyping", desc: "Developing clickable prototypes to test user behavior and simulate real-world digital interactions." },
        { title: "Client Review & Fine-Tuning", desc: "Iterative feedback sessions to refine typography, visual contrast, balance, and messaging hierarchy." },
        { title: "Design System & Asset Delivery", desc: "Delivering complete vector source files, brand guidelines, and responsive design tokens." }
    ];

    const industries = [
        { name: "eCommerce & Retail", desc: "Improve brand presence and sales with scalable digital storefronts.", icon: <ShoppingCart /> },
        { name: "Health & Fitness", desc: "HIPAA-compliant platforms for transformational digital healthcare.", icon: <HeartPulse /> },
        { name: "Travel & Hospitality", desc: "Integrate customer travel experiences with robust booking platforms.", icon: <Navigation /> },
        { name: "Education & e-Learning", desc: "Blending modern technology to bring seamless interactive learning.", icon: <GraduationCap /> },
        { name: "Fashion & Apparel", desc: "Interactive digital storefronts and style apps to boost online presence.", icon: <Shirt /> },
        { name: "Sports & Recreation", desc: "Creating modern websites and engaging tracking apps for sports.", icon: <Dumbbell /> },
        { name: "Legal & Compliance", desc: "Secure digital document portals and case workflows for law firms.", icon: <Scale /> },
        { name: "Fintech & Banking", desc: "Trustworthy & next-gen financial software solutions for enterprises.", icon: <Landmark /> },
        { name: "Logistics & Supply Chain", desc: "Intelligent freight routing and real-time inventory tracking portals.", icon: <Truck /> },
        { name: "Real Estate & PropTech", desc: "Intelligent digital solutions and listing portals for real estate.", icon: <Building2 /> },
        { name: "SaaS & Cloud Platforms", desc: "Multi-tenant cloud architectures engineered for rapid subscription scaling.", icon: <Building /> },
        { name: "Automotive & Manufacturing", desc: "Smart production monitoring and supply chain management tools.", icon: <Briefcase /> }
    ];

    const reasons = [
        "Human-centered design process rooted in strategic brand positioning",
        "Obsession with conversion optimization, visual balance, and brand recall",
        "100% original, vector-based designs with complete copyright ownership",
        "Comprehensive Figma component libraries and auto-layout token structures",
        "Pixel-perfect visual design conforming to accessibility (WCAG 2.1 AA) standards",
        "Interactive prototyping that accurately replicates final product interactions",
        "Multi-format delivery across all digital, mobile, and high-DPI print mediums",
        "Proven track record increasing client conversion rates and user retention"
    ];

    const technologies = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe XD", "Sketch", "Framer", "Lottie", "Tailwind CSS", "CorelDRAW"];

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle="Home"
                    parentRoute="/"
                    currentTitle="Designing Services"
                    badge="CREATIVE BRANDING & DIGITAL DESIGN"
                    title="Designing"
                    highlight="Services"
                    description="Elevate your brand presence with world-class design services. The Digital Connect crafts memorable logos, high-converting websites, striking marketing graphics, and intuitive UI/UX experiences tailored to your business."
                    primaryCtaText="Request a Design Quote"
                    primaryCtaLink="#quote-form"
                    secondaryCtaText="Explore Capabilities"
                    secondaryCtaLink="#services-section"
                    theme={theme}
                    visualComponent={<UIUXDesignVisual />}
                />

                <SubServiceShared.Intro
                    heading="Creative Design Engineered to Captivate and Convert"
                    paragraphs={[
                        "Design is the most critical touchpoint between your business and your customers. At The Digital Connect, our multidisciplinary design team combines artistic distinction, psychological triggers, and user-centric architecture to create impactful visual assets.",
                        "From iconic logo marks and print marketing collateral to responsive corporate web designs and friction-free application interfaces, we build cohesive brand ecosystems that establish authority and inspire action across every platform."
                    ]}
                />

                <SubServiceShared.ProcessSection
                    processSteps={processSteps}
                    theme={theme}
                />

                <div id="services-section">
                    <SubServiceShared.EmpowerServices
                        services={services}
                        theme={theme}
                        title="Our Core Designing Services"
                    />
                </div>

                <SubServiceShared.TechStack
                    techList={technologies}
                    theme={theme}
                />

                <SubServiceShared.IndustryGrid
                    industries={industries}
                    theme={theme}
                />

                <SubServiceShared.ReasonsList
                    reasons={reasons}
                    theme={theme}
                />

                <div id="quote-form">
                    <SubServiceShared.QuoteForm
                        serviceName="Designing Services"
                        theme={theme}
                    />
                </div>
            </div>
        </PageTransition>
    );
};

export default UIUXDesign;
