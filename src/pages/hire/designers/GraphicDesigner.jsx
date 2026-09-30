import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const GraphicDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Graphic Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Graphic Designers | Creative Visual & Marketing Design Experts | The Digital Connect"
      metaDescription="Hire certified Graphic Designers from The Digital Connect. Marketing creatives, social media graphics, corporate brochures, vector illustrations, and flexible hiring models."
      tagline="We successfully elevate your brand identity with compelling, high-converting visual graphics"
      heroDescription="We have a group of gifted and dedicated Graphic Designers who specialize in creating captivating digital marketing assets, brand visual identities, vector illustrations, pitch decks, infographics, and print-ready collateral using Adobe Creative Cloud and Figma. Get in touch with us for your free quote."
      heroBullets={[
        "High-converting marketing creatives for Google Ads, Facebook, Instagram, LinkedIn, and email campaigns",
        "Comprehensive brand asset suites: vector logos, typography systems, style guides, and stationery",
        "Executive pitch decks, corporate brochures, infographics, and packaging designs"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "350+", label: "Design Projects Delivered" },
        { value: "24/7", label: "Creative Support" }
      ]}
      whyHireIntro={{
        card1Title: "Compelling, Brand-Defining Graphic Design Solutions",
        card1Text1: "Does your brand need skilled graphic designers? We at The Digital Connect provide cutting-edge, all-inclusive creative graphic design solutions. We help businesses worldwide stand out in crowded markets with memorable, conversion-focused visuals that resonate with target audiences.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Graphic Designers, allowing you to take advantage of our availability as your Offshore Creative Center. Your company can make significant savings and improve the visual appeal of its marketing campaigns by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Creative Adobe & Figma Artists",
        card2Text1: "One of the finest creative design firms, The Digital Connect provides you with a dedicated team of Graphic Designers. To construct striking visual assets, our certified designers possess deep expertise in Adobe Photoshop, Illustrator, InDesign, Figma, and typography theory.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique branding demands with pixel-perfect precision, fast revision turnarounds, and print/digital ready vector formats."
      }}
      whyChoosePoints={[
        {
          title: "Digital Marketing & Ad Creatives",
          desc: "High-CTR display banners, carousel ads, social media post templates, and conversion-focused email headers."
        },
        {
          title: "Brand Identity & Style Guides",
          desc: "Distinctive logo design, brand color palettes, font pairings, iconography, and brand guideline documentation."
        },
        {
          title: "Investor Pitch Decks & Presentations",
          desc: "Custom PowerPoint, Keynote, and Google Slides presentations designed to captivate investors and enterprise clients."
        },
        {
          title: "Vector Illustrations & Infographics",
          desc: "Custom vector art, character illustrations, editorial graphics, and digestible statistical infographics."
        },
        {
          title: "Print Collateral & Packaging",
          desc: "Print-ready CMYK brochures, business cards, billboards, exhibition banners, and product packaging."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile creative sprints with daily communication, rapid 24-hour turnaround on revisions, and organized source files."
        }
      ]}
      techHighlight={{
        title1: "Design Psychology & Conversion Optimization",
        desc1: "Our graphic designers apply visual hierarchy, color psychology, and focal point theory to ensure every marketing asset captures attention and drives quantifiable user actions.",
        title2: "Organized Source Files & Multi-Format Delivery",
        desc2: "We deliver impeccably organized source files (.AI, .PSD, Figma components) along with production-optimized export formats (.SVG, .PNG, .WebP, .PDF with bleed marks)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your graphic design bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your brand assets and proprietary concepts are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your marketing campaign launches with dedicated graphic artists who deliver fresh creatives on a daily basis."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified creative artists skilled in Adobe Illustrator, Photoshop, InDesign, Figma, Canva, and Vector Illustration."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all raw design files, vector artwork, and creative assets."
        }
      ]}
    />
  );
};

export default GraphicDesigner;
