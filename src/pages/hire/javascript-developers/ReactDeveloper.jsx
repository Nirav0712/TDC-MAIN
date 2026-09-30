import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const ReactDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="React"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated React Developers | Senior React.js Experts | The Digital Connect"
      metaDescription="Hire certified React.js developers from The Digital Connect. React 19, Redux Toolkit, Zustand, Next.js integration, clean TypeScript, and flexible hiring models."
      tagline="We successfully engineer reactive, high-performance web frontends with React.js"
      heroDescription="We have a group of gifted and dedicated React developers who specialize in building interactive, high-performance single-page applications (SPAs), component libraries, and SaaS dashboards using React 19, TypeScript, and modern state management. Get in touch with us for your free quote."
      heroBullets={[
        "Modern React 19 development with React Hooks, Server Components, and Concurrent Mode",
        "Predictable state management architecture with Redux Toolkit, Zustand, TanStack Query, and Jotai",
        "Pixel-perfect responsive design systems with TailwindCSS, Framer Motion, and shadcn/ui"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "220+", label: "React Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Interactive, High-Speed React.js Frontends",
        card1Text1: "Does your company need senior React developers? We at The Digital Connect provide cutting-edge, all-inclusive React.js frontend solutions. We help businesses worldwide build dynamic user interfaces that provide lightning-fast navigation, sub-second render times, and exceptional user retention.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced React developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its frontend roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified React & TypeScript Engineers",
        card2Text1: "One of the finest JavaScript frontend firms, The Digital Connect provides you with a dedicated team of React developers. To build sophisticated web applications, our certified developers are trained engineers with deep expertise in React 19, TypeScript, REST/GraphQL APIs, Vite, and Webpack/Turbopack.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with clean modular components, high unit test coverage (Jest & React Testing Library), and zero UI lag."
      }}
      whyChoosePoints={[
        {
          title: "Component-Driven Architecture",
          desc: "Developing modular, reusable, and self-contained UI components following Atomic Design principles."
        },
        {
          title: "State Management Mastery",
          desc: "Expert implementation of global and server state using Zustand, Redux Toolkit, TanStack Query, and Context API."
        },
        {
          title: "TypeScript End-to-End Safety",
          desc: "Writing strictly typed React codebases with interfaces, generics, and Zod runtime schema validations."
        },
        {
          title: "Performance Optimization",
          desc: "Code-splitting, lazy loading, memoization (useMemo/useCallback), and virtualized lists for rendering 100k+ rows."
        },
        {
          title: "Design System & Micro-Animations",
          desc: "Crafting polished enterprise design systems with TailwindCSS, Radix UI, Headless UI, and Framer Motion."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean Git PRs, automated Cypress/Jest testing, and continuous deployment."
        }
      ]}
      techHighlight={{
        title1: "React 19 & Concurrent Mode Optimization",
        desc1: "Our React engineers harness React 19 features including Actions, use() hook, and Server Components to minimize bundle size and eliminate unnecessary client-side re-renders.",
        title2: "Seamless Backend & Headless API Integration",
        desc2: "We connect React frontends smoothly with any backend architecture—Node.js, Python, Java, Go, or headless CMS platforms—using optimized TanStack Query caching and GraphQL clients."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden fees. Scale developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and proprietary logic are fully secured. We sign bilateral NDAs and adhere strictly to OWASP web security."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your frontend release cycle with dedicated React specialists who seamlessly integrate with your design and API teams."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in React, TypeScript, Redux, Zustand, Next.js, TailwindCSS, Vite, and Jest."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You maintain 100% intellectual property and full ownership of all React repositories, component libraries, and assets."
        }
      ]}
    />
  );
};

export default ReactDeveloper;
