import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const ProductDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Product Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Product Designers | Digital Product & UX Strategy Experts | The Digital Connect"
      metaDescription="Hire certified Product Designers from The Digital Connect. End-to-end product strategy, user discovery, MVP scoping, design systems, and flexible hiring models."
      tagline="We successfully align user needs with business goals through full-lifecycle product design"
      heroDescription="We have a group of gifted and dedicated Product Designers who specialize in end-to-end product strategy, user journey mapping, MVP prototyping, scalable design systems, and data-driven UX optimization using Figma and Agile product frameworks. Get in touch with us for your free quote."
      heroBullets={[
        "Holistic product strategy: User discovery, market competitive analysis, and feature prioritization",
        "Rapid high-fidelity MVP prototyping, user testing validation, and conversion funnel optimization",
        "Design systems governance, design tokens, and tight collaboration with engineering teams"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "190+", label: "Digital Products Designed" },
        { value: "24/7", label: "Design Support" }
      ]}
      whyHireIntro={{
        card1Title: "Strategic, Business-Driven Product Design Solutions",
        card1Text1: "Does your company need senior Product Designers? We at The Digital Connect provide cutting-edge, all-inclusive product design solutions. We help startups and enterprises bridge user empathy and commercial viability, designing products that delight customers and drive business growth.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Product Designers, allowing you to take advantage of our availability as your Offshore Product Design Center. Your company can make significant savings and improve product-market fit by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Product Strategy & UX Specialists",
        card2Text1: "One of the finest product design firms, The Digital Connect provides you with a dedicated team of Product Designers. To build scalable software platforms, our certified designers possess deep expertise in qualitative/quantitative user research, design sprints, metrics-driven iteration (PLG), and Figma ecosystems.",
        card2Text2: "Their strategic capability enables us to provide effective contractual services in this area to meet your unique product roadmap demands with validated wireframes, high-impact feature prioritization, and seamless developer handoffs."
      }}
      whyChoosePoints={[
        {
          title: "End-to-End Product Lifecycle",
          desc: "Guiding ideas from early discovery, user interviews, and wireframes to production design systems and post-launch optimization."
        },
        {
          title: "Product-Led Growth (PLG) UX",
          desc: "Designing frictionless user onboarding funnels, self-serve trial flows, and viral loop referral mechanisms."
        },
        {
          title: "Interactive Prototyping & User Testing",
          desc: "Testing clickable prototypes with real users to validate usability, reduce development risk, and refine workflows."
        },
        {
          title: "Design Systems & Token Architecture",
          desc: "Creating centralized, multi-platform design systems that scale across web, iOS, and Android applications."
        },
        {
          title: "Data-Driven UX Optimization",
          desc: "Analyzing user session recordings (Hotjar, FullStory), funnel drop-offs, and A/B test results to boost KPIs."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week product sprints with daily standups, sprint reviews, and close engineering alignment."
        }
      ]}
      techHighlight={{
        title1: "Bridging Business Metrics & User Experience",
        desc1: "Our product designers define clear North Star metrics (activation rate, churn reduction, feature adoption), ensuring every design decision directly contributes to measurable business outcomes.",
        title2: "Design Tokens & Cross-Platform Consistency",
        desc2: "We synchronize Figma design tokens with frontend codebases (Tailwind/CSS variables), ensuring brand styles remain consistent across every web and mobile release."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your product design capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your product concepts and user data are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product release cycle with senior Product Designers who lead feature discovery and design execution."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Figma, FigJam, Product Strategy, User Research, Design Tokens, and Agile."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Figma files, research docs, prototypes, and tokens."
        }
      ]}
    />
  );
};

export default ProductDesigner;
