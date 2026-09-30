import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const MernDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="MERN Stack"
      pageTitle="Hire Dedicated MERN Stack Developers | React & Node.js Experts | The Digital Connect"
      metaDescription="Hire certified MERN stack developers from The Digital Connect. MongoDB, Express.js, React, Node.js, Next.js, and flexible hiring models."
      tagline="We successfully engineer dynamic React web applications & high-performance Node.js backends"
      heroDescription="We have a group of gifted and dedicated MERN stack developers who specialize in building reactive single-page applications with React/Next.js, high-concurrency Node.js REST/GraphQL APIs, Express.js middleware, and scalable MongoDB databases. Get in touch with us for your free quote."
      heroBullets={[
        "Full-stack JavaScript/TypeScript development utilizing MongoDB, Express.js, React, and Node.js",
        "Modern frontend interfaces with React 19, Next.js App Router, and TailwindCSS",
        "Asynchronous, event-driven Node.js backend microservices with real-time WebSockets"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "140+", label: "MERN Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Unified, Fast-Paced MERN Stack Web Solutions",
        card1Text1: "Does your startup or enterprise need seasoned MERN stack engineers? We at The Digital Connect provide cutting-edge, all-inclusive MERN stack development solutions. We help businesses worldwide build high-speed, maintainable, and cost-effective digital products using a single unified JavaScript/TypeScript codebase.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced MERN developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified React & Node.js Engineers",
        card2Text1: "One of the finest full-stack development firms, The Digital Connect provides you with a dedicated team of MERN stack developers. To build sophisticated web applications and SaaS platforms, our certified developers are trained engineers with deep expertise in React, Next.js, Express, MongoDB, and TypeScript.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with modular component architecture, automated Jest/Cypress testing, and fluid animations."
      }}
      whyChoosePoints={[
        {
          title: "React & Next.js Frontends",
          desc: "High-performance, interactive user interfaces with React 19, Server Components, SSR/SSG, and Redux Toolkit / Zustand."
        },
        {
          title: "Node.js & Express APIs",
          desc: "Scalable, non-blocking asynchronous REST and GraphQL APIs engineered for high-concurrency user requests."
        },
        {
          title: "MongoDB Database Architecture",
          desc: "Flexible, high-performance NoSQL database schema design, indexing, aggregation pipelines, and MongoDB Atlas."
        },
        {
          title: "Real-Time WebSocket Integration",
          desc: "Live chats, multiplayer collaboration, financial dashboards, and notification streams powered by Socket.io."
        },
        {
          title: "TypeScript End-to-End Safety",
          desc: "Strict type safety across frontend components and backend API endpoints, eliminating runtime data errors."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with transparent Jira tracking, automated CI/CD pipelines, and rigorous QA audits."
        }
      ]}
      techHighlight={{
        title1: "Single-Language Efficiency & Component Reusability",
        desc1: "By utilizing TypeScript across both the React frontend and Node.js backend, our MERN developers share validation schemas (Zod) and type definitions seamlessly, speeding up development cycles.",
        title2: "Modern Serverless & Cloud Deployments",
        desc2: "We deploy MERN applications across Vercel, AWS ECS/Lambda, and Docker containers with automated Redis caching for sub-100ms global response times."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly hiring models with zero hidden fees. Easily scale developer count up or down."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and intellectual property are fully secured. We sign bilateral NDAs and adhere strictly to OWASP guidelines."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your feature release cycle with full-stack developers who can handle both UI components and API microservices."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in React, Next.js, Node.js, Express.js, MongoDB, TypeScript, Docker, and AWS."
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

export default MernDeveloper;
