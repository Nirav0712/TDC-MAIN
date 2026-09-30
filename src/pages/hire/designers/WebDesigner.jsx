import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const WebDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Web Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Web Designers | Responsive & Modern Website Design Experts | The Digital Connect"
      metaDescription="Hire certified Web Designers from The Digital Connect. Responsive landing pages, corporate websites, SaaS web design, Figma, and flexible hiring models."
      tagline="We successfully craft responsive, conversion-focused & visually stunning web experiences"
      heroDescription="We have a group of gifted and dedicated Web Designers who specialize in designing modern, responsive websites, high-converting SaaS landing pages, eCommerce storefronts, and interactive web portals using Figma and modern UI aesthetics. Get in touch with us for your free quote."
      heroBullets={[
        "Modern, responsive web layouts optimized for desktop, tablet, and mobile breakpoints",
        "Conversion rate optimization (CRO) principles embedded into landing pages and lead funnels",
        "Clean Figma component systems with design tokens ready for React, Next.js, and WordPress builds"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "310+", label: "Websites Designed" },
        { value: "24/7", label: "Design Support" }
      ]}
      whyHireIntro={{
        card1Title: "Aesthetic, High-Converting Web Design Solutions",
        card1Text1: "Does your company need expert Web Designers? We at The Digital Connect provide cutting-edge, all-inclusive website design solutions. We help businesses worldwide elevate their online presence with modern, beautiful web layouts that captivate visitors and convert them into paying customers.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Web Designers, allowing you to take advantage of our availability as your Offshore Design Center. Your company can make significant savings and improve the effectiveness of its web presence by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Figma & Responsive Web Specialists",
        card2Text1: "One of the finest web creative firms, The Digital Connect provides you with a dedicated team of Web Designers. To construct striking web pages, our certified designers possess deep expertise in grid systems, visual hierarchy, typography, micro-interactions, and conversion rate optimization.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique brand demands with pixel-perfect responsive layouts, structured design assets, and fast delivery."
      }}
      whyChoosePoints={[
        {
          title: "Responsive Multi-Device Layouts",
          desc: "Designing tailored experiences across 4K desktop, laptop, tablet, and mobile screen sizes."
        },
        {
          title: "SaaS & Tech Landing Pages",
          desc: "High-converting hero sections, feature grids, pricing comparison tables, and interactive FAQ accordions."
        },
        {
          title: "eCommerce Storefront Design",
          desc: "Conversion-optimized product pages, category grids, cart drawers, and streamlined checkout interfaces."
        },
        {
          title: "Micro-Interactions & Motion States",
          desc: "Defining hover effects, scroll-driven animations, skeleton loaders, and interactive state transitions."
        },
        {
          title: "Developer-Ready Component Systems",
          desc: "Impeccably organized Figma auto-layout components ready for TailwindCSS, React, and Webflow implementation."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week design sprints with daily standups, live Figma previews, and prompt revision turnarounds."
        }
      ]}
      techHighlight={{
        title1: "Speed-Oriented Visual Design Systems",
        desc1: "Our web designers build with web performance in mind—utilizing modern vector SVG graphics, responsive typography scales, and CSS-friendly visual effects that load in milliseconds.",
        title2: "A/B Testable Modular Layouts",
        desc2: "We design modular section blocks (hero variations, social proof bars, testimonial sliders) that enable your growth team to run continuous A/B conversion tests effortlessly."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your web design bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your proprietary brand concepts and designs are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Launch new marketing landing pages and brand redesigns in record time with dedicated web designers."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Figma, Adobe XD, Photoshop, Illustrator, Webflow, and HTML/CSS principles."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Figma files, design tokens, and exported assets."
        }
      ]}
    />
  );
};

export default WebDesigner;
