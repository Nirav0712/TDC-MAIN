import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const UiuxDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="UI/UX Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated UI/UX Designers | Product & Interaction Design Experts | The Digital Connect"
      metaDescription="Hire certified UI/UX Designers from The Digital Connect. Figma wireframes, interactive prototypes, design systems, user research, and flexible hiring models."
      tagline="We successfully design intuitive, high-converting digital products, web apps & mobile user experiences"
      heroDescription="We have a group of gifted and dedicated UI/UX Designers who specialize in user research, wireframing, interactive prototyping, enterprise design systems, and responsive web/mobile interface design using Figma and modern UX methodologies. Get in touch with us for your free quote."
      heroBullets={[
        "User-centered UI/UX design: User research, persona mapping, customer journey flows, and wireframes",
        "High-fidelity interactive Figma prototypes with auto-layout, design tokens, and smooth micro-interactions",
        "Scalable enterprise design systems with comprehensive developer handoff documentation"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "280+", label: "UI/UX Products Designed" },
        { value: "24/7", label: "Design Support" }
      ]}
      whyHireIntro={{
        card1Title: "User-Centered, Conversion-Focused UI/UX Solutions",
        card1Text1: "Does your product need senior UI/UX designers? We at The Digital Connect provide cutting-edge, all-inclusive product design solutions. We help startups and enterprises transform complex software into delightful, intuitive user experiences that maximize conversion rates and user retention.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced UI/UX Designers, allowing you to take advantage of our availability as your Offshore Design Center. Your company can make significant savings and improve user satisfaction by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Figma & Interaction Design Specialists",
        card2Text1: "One of the finest product design firms, The Digital Connect provides you with a dedicated team of UI/UX Designers. To build seamless web and mobile interfaces, our certified designers possess deep expertise in Figma, design systems, information architecture, usability testing, and WCAG accessibility.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique product demands with frictionless developer handoffs, clickable interactive prototypes, and validated design decisions."
      }}
      whyChoosePoints={[
        {
          title: "User Research & Information Architecture",
          desc: "Conducting stakeholder interviews, user journey mapping, card sorting, and clear sitemap structuring."
        },
        {
          title: "Low & High-Fidelity Wireframes",
          desc: "Iterative wireframing to establish structural clarity and user flow validation prior to visual styling."
        },
        {
          title: "Interactive Figma Prototypes",
          desc: "Clickable, realistic prototypes with smart animate transitions, realistic data, and mobile gesture simulation."
        },
        {
          title: "Enterprise Design Systems",
          desc: "Building scalable Figma component libraries with variables, auto-layout 5.0, design tokens, and light/dark modes."
        },
        {
          title: "Usability Testing & Conversion UX",
          desc: "A/B testing wireframes, heat map analysis, and UX audits to identify and eliminate conversion funnel drop-offs."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week design sprints with daily standups, live Figma collaboration, and pixel-perfect developer handoff."
        }
      ]}
      techHighlight={{
        title1: "Frictionless Developer Handoff",
        desc1: "Our designers structure Figma files with strict auto-layout, explicit spacing variables, typography styles, and detailed component documentation, ensuring engineers implement designs with 100% fidelity.",
        title2: "WCAG 2.1 Accessibility & Responsive Layouts",
        desc2: "We design with accessibility at the forefront—validating contrast ratios, touch target sizes, focus states, and responsive fluid breakpoints across mobile, tablet, and desktop screens."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your product design bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your product concepts and user research data are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product development cycle with senior UI/UX designers who deliver production-ready screens quickly."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Figma, FigJam, Adobe XD, Principle, Miro, Design Systems, and User Research."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Figma files, component libraries, prototypes, and assets."
        }
      ]}
    />
  );
};

export default UiuxDesigner;
