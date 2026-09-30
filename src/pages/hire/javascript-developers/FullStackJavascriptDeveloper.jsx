import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const FullStackJavascriptDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Full Stack JavaScript"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated Full Stack JavaScript Developers | The Digital Connect"
      metaDescription="Hire certified Full Stack JavaScript developers from The Digital Connect. React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and flexible hiring models."
      tagline="We successfully deliver end-to-end full-stack web applications using a unified JavaScript codebase"
      heroDescription="We have a group of gifted and dedicated Full Stack JavaScript developers who excel in building complete, high-performance web products using modern JavaScript/TypeScript across frontend UI (React, Next.js, Vue), backend APIs (Node.js, Express, NestJS), and modern databases. Get in touch with us for your free quote."
      heroBullets={[
        "Single-language efficiency across the entire stack: React/Next.js frontend to Node.js backend",
        "High-performance REST & GraphQL APIs, real-time WebSockets, and asynchronous worker queues",
        "Comprehensive database design with PostgreSQL, MongoDB, Redis, and automated cloud deployments"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "260+", label: "Full Stack JS Apps Launched" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Unified, High-Velocity Full-Stack JS Solutions",
        card1Text1: "Does your company need versatile full stack JavaScript engineers? We at The Digital Connect provide cutting-edge, all-inclusive full-stack JS development solutions. We help businesses worldwide build and ship cohesive web platforms with exceptional code velocity and reduced maintenance overhead.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Full Stack JavaScript developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering output by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Multi-Framework JavaScript Specialists",
        card2Text1: "One of the finest full-stack engineering firms, The Digital Connect provides you with a dedicated team of Full Stack JavaScript developers. To build sophisticated web applications, our certified developers are trained engineers with deep expertise in TypeScript, React, Node.js, Prisma, and cloud DevOps.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with rapid MVP delivery, clean architecture, and continuous deployment pipelines."
      }}
      whyChoosePoints={[
        {
          title: "Complete Product Lifecycle Ownership",
          desc: "Full stack JS developers capable of building responsive frontend screens, architecting backend APIs, and managing databases."
        },
        {
          title: "Single Language Efficiency",
          desc: "Sharing type definitions, validation logic, and utility functions seamlessly between client and server codebases."
        },
        {
          title: "Custom SaaS & Web Platforms",
          desc: "Architecting multi-tenant SaaS platforms, interactive client portals, and conversion-focused eCommerce stores."
        },
        {
          title: "Database Design & Optimization",
          desc: "Optimizing relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases with modern ORMs."
        },
        {
          title: "Cloud Deployment & DevOps",
          desc: "Deploying production applications across Vercel, AWS, Docker containers, and automated CI/CD workflows."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean code reviews, automated testing, and post-launch SLAs."
        }
      ]}
      techHighlight={{
        title1: "Bridging Frontend Interactivity & Backend Reliability",
        desc1: "Our full-stack JavaScript developers seamlessly connect dynamic React/Next.js interfaces with non-blocking Node.js endpoints, ensuring sub-100ms global latency and fluid animations.",
        title2: "Reduced Communication Overhead",
        desc2: "With full-stack JS engineers managing both sides of the development cycle, cross-team API discrepancies are completely eliminated, drastically accelerating your time-to-market."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden fees. Ramp up developer hours smoothly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and intellectual property are fully secured. We sign bilateral NDAs and adhere strictly to OWASP security guidelines."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Maximize engineering efficiency by hiring versatile full-stack developers who can tackle any layer of your web application."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Engineers proficient in TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and AWS."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all developed services and architecture."
        }
      ]}
    />
  );
};

export default FullStackJavascriptDeveloper;
