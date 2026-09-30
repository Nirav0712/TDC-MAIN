import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const BrandDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Brand Identity Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Brand Identity Designers | Corporate Branding & Logo Experts | The Digital Connect"
      metaDescription="Hire certified Brand Identity Designers from The Digital Connect. Logo design, brand strategy, color systems, typography guides, and flexible hiring models."
      tagline="We successfully craft memorable, high-impact visual identities & comprehensive brand guidelines"
      heroDescription="We have a group of gifted and dedicated Brand Identity Designers who specialize in defining distinctive corporate identities, vector logos, cohesive typography systems, color palettes, and comprehensive brand book guidelines using Adobe Illustrator and Figma. Get in touch with us for your free quote."
      heroBullets={[
        "Distinctive vector logo design: Wordmarks, lettermarks, pictorial icons, and dynamic emblems",
        "Comprehensive Brand Book Guidelines: Color formulas (HEX, RGB, CMYK, Pantone), typography, and usage rules",
        "Full brand collateral suite: Business cards, letterheads, social media kits, and merchandise mockups"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "160+", label: "Brand Identities Crafted" },
        { value: "24/7", label: "Design Support" }
      ]}
      whyHireIntro={{
        card1Title: "Distinctive, Long-Lasting Brand Identity Solutions",
        card1Text1: "Does your enterprise or startup need expert Brand Identity Designers? We at The Digital Connect provide cutting-edge, all-inclusive corporate branding and visual identity solutions. We help businesses worldwide establish unforgettable market presence and build instant trust with target audiences.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Brand Designers, allowing you to take advantage of our availability as your Offshore Creative Center. Your company can make significant savings and elevate its brand positioning by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Visual Identity & Typography Specialists",
        card2Text1: "One of the finest corporate branding firms, The Digital Connect provides you with a dedicated team of Brand Designers. To construct timeless brand identities, our certified designers possess deep expertise in vector geometry, semiotics, color psychology, and multi-channel asset deployment.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique brand positioning demands with scalable vector master files, comprehensive brand books, and organized digital toolkits."
      }}
      whyChoosePoints={[
        {
          title: "Strategic Brand Discovery & Moodboards",
          desc: "Uncovering your core brand values, target audience demographics, competitor landscape, and aesthetic positioning."
        },
        {
          title: "Vector Logo Systems & Variations",
          desc: "Designing primary logos, secondary lockups, submarks, favicons, and monochrome versions for all mediums."
        },
        {
          title: "Color Systems & Typography Pairing",
          desc: "Curating accessible primary/secondary color palettes and pairing harmonious header/body typography fonts."
        },
        {
          title: "Comprehensive Brand Books (Style Guides)",
          desc: "Authoring detailed PDF brand books specifying logo clear space, improper usage, grid systems, and tone of voice."
        },
        {
          title: "Corporate Stationery & Social Media Kits",
          desc: "Designing business cards, email signatures, presentation templates, invoice headers, and social banners."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week branding sprints with daily communication, multi-concept presentations, and organized asset handoffs."
        }
      ]}
      techHighlight={{
        title1: "Scalable Vector Master Files for Any Medium",
        desc1: "Our brand designers construct every visual element using mathematical vector curves, ensuring your logo scales flawlessly from a 16px browser favicon to a 50-foot highway billboard with zero pixelation.",
        title2: "Multi-Platform Digital & Print Export Formats",
        desc2: "We deliver master packages organized by format (.AI, .EPS, .SVG, .PDF, .PNG with transparency) and color profile (Pantone, CMYK for print, RGB/HEX for digital screens)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your creative design capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your new brand concepts and trademarks are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Rebrand or launch your new company identity swiftly with seasoned brand artists who deliver cohesive visual systems."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Adobe Illustrator, Photoshop, InDesign, Figma, Typography, and Brand Strategy."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all vector files, brand guidelines, fonts, and assets."
        }
      ]}
    />
  );
};

export default BrandDesigner;
