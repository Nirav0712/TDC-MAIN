import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const TypescriptDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="TypeScript"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated TypeScript Developers | Full-Stack Type Safety Experts | The Digital Connect"
      metaDescription="Hire certified TypeScript developers from The Digital Connect. Type-safe full-stack architectures, React, Next.js, Node.js, NestJS, and flexible hiring models."
      tagline="We successfully eliminate runtime bugs with end-to-end full-stack TypeScript development"
      heroDescription="We have a group of gifted and dedicated TypeScript developers who specialize in architecting type-safe, scalable web applications across the entire stack—from React and Next.js frontends to Node.js, NestJS, and serverless backends. Get in touch with us for your free quote."
      heroBullets={[
        "Strict full-stack TypeScript architecture with zero any types and shared interfaces",
        "Frontend mastery in React, Next.js, Angular, and Vue with type-safe state stores",
        "Backend type safety using NestJS, Prisma, Drizzle ORM, tRPC, and Zod validation"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "200+", label: "TypeScript Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Robust, Bug-Free Full-Stack TypeScript Solutions",
        card1Text1: "Does your company need senior TypeScript developers? We at The Digital Connect provide cutting-edge, all-inclusive TypeScript engineering solutions. We help businesses worldwide eliminate runtime exceptions, improve team refactoring confidence, and accelerate feature shipping with strict compile-time verification.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced TypeScript developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Full-Stack TypeScript Specialists",
        card2Text1: "One of the finest modern engineering firms, The Digital Connect provides you with a dedicated team of TypeScript developers. To build sophisticated web platforms and SDKs, our certified developers are trained engineers with deep expertise in advanced types, generics, AST transformations, and monorepos (Turborepo/Nx).",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with self-documenting code, automated test suites, and high architectural maintainability."
      }}
      whyChoosePoints={[
        {
          title: "Advanced Typing & Generics",
          desc: "Writing expressive, generic utilities, conditional types, mapped types, and branded primitives for bulletproof safety."
        },
        {
          title: "End-to-End Type Safety with tRPC",
          desc: "Eliminating API contract drift by sharing types directly between frontend React/Next.js and backend server endpoints."
        },
        {
          title: "JavaScript to TypeScript Migration",
          desc: "Systematically migrating legacy JavaScript codebases to strict TypeScript with zero disruption to active user traffic."
        },
        {
          title: "TypeScript Monorepo Architecture",
          desc: "Setting up high-speed monorepos with Turborepo or Nx for sharing UI packages, utility functions, and API models."
        },
        {
          title: "Runtime Validation with Zod",
          desc: "Validating API payloads, environment variables, and user input using Zod and inferring static TypeScript types automatically."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with strict ESLint / TypeScript compiler checks, automated CI/CD pipelines, and clean PRs."
        }
      ]}
      techHighlight={{
        title1: "Zero Runtime Type Errors & Easy Refactoring",
        desc1: "Our TypeScript developers configure strict compiler options (noImplicitAny, strictNullChecks), catching bugs at compile time before they ever reach production users.",
        title2: "Type-Safe Database ORM Integration",
        desc2: "We utilize modern type-safe ORMs like Prisma and Drizzle to generate fully typed database queries and schema migrations directly from your SQL schemas."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale developer capacity flexibly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your development cycle by hiring full-stack TypeScript engineers who can build both frontend and backend seamlessly."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in TypeScript, React, Next.js, Node.js, NestJS, Prisma, Zod, and Turborepo."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all developed repositories and libraries."
        }
      ]}
    />
  );
};

export default TypescriptDeveloper;
