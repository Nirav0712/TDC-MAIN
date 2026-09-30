import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const FullStackDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Full Stack"
      pageTitle="Hire Dedicated Full Stack Developers | Frontend & Backend Experts | The Digital Connect"
      metaDescription="Hire certified Full Stack developers from The Digital Connect. React, Next.js, Node.js, Python, Java, cloud DevOps, and flexible hiring models."
      tagline="We successfully deliver end-to-end web apps, interactive frontends & resilient cloud backends"
      heroDescription="We have a group of gifted and dedicated Full Stack developers who bridge the gap between stunning UI/UX frontends and robust, scalable backend architectures. Get in touch with us for your free quote."
      heroBullets={[
        "Modern frontend mastery with React, Next.js, Vue, Angular, and TailwindCSS",
        "Robust backend engineering in Node.js, Python (Django/FastAPI), Java (Spring Boot), or Go",
        "Comprehensive database design, REST/GraphQL APIs, DevOps pipelines, and cloud hosting"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "300+", label: "Full Stack Apps Launched" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Comprehensive, End-to-End Full Stack Solutions",
        card1Text1: "Does your company need versatile full stack engineers? We at The Digital Connect provide cutting-edge, all-inclusive full stack development solutions. We help startups and enterprises worldwide launch complete digital products with seamless integration between user interfaces and complex backend servers.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Full Stack developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering output by using fewer resources and merging them with our skilled team.",
        card2Title: "Trained Multi-Stack Engineers & Cloud Specialists",
        card2Text1: "One of the finest development firms, The Digital Connect provides you with a dedicated team of Full Stack developers. To build sophisticated web applications, our certified developers are trained engineers with deep expertise across modern JavaScript frameworks, relational/NoSQL databases, and cloud DevOps.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with rapid MVP turnaround, clean architecture, and continuous deployment."
      }}
      whyChoosePoints={[
        {
          title: "Complete Product Ownership",
          desc: "Full stack engineers capable of handling UI wireframing, frontend development, API creation, database schemas, and DevOps."
        },
        {
          title: "Modern JavaScript / TypeScript",
          desc: "End-to-end type safety using TypeScript across React/Next.js frontends and Node.js microservices."
        },
        {
          title: "Custom SaaS & Enterprise Platforms",
          desc: "Architecting multi-tenant SaaS products, complex customer dashboards, and high-conversion web portals."
        },
        {
          title: "Database Architecture & Optimization",
          desc: "Expert design and optimization across PostgreSQL, MySQL, MongoDB, Redis, and DynamoDB."
        },
        {
          title: "Cloud & DevOps Integration",
          desc: "Automated CI/CD workflows, Docker containerization, and deployment on AWS, Vercel, GCP, and Azure."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile sprints, daily standups, clear sprint goals, and end-to-end automated testing for seamless releases."
        }
      ]}
      techHighlight={{
        title1: "Bridging Frontend Brilliance & Backend Power",
        desc1: "Our full stack developers seamlessly connect responsive, animated React/Vue interfaces with secure, asynchronous REST and GraphQL endpoints for snappy, flawless user experiences.",
        title2: "Reduced Communication Overhead & Faster Time to Market",
        desc2: "With full stack engineers managing both sides of the application stack, there are zero cross-team dependencies or API contract mismatches, dramatically increasing your product development velocity."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden fees. Ramp developer hours up or down based on your development roadmap."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and IP are completely secure with The Digital Connect. We sign strict NDAs and follow OWASP security best practices."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Maximize resource efficiency by hiring full-stack versatile engineers who can switch between frontend and backend tasks effortlessly."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Engineers proficient in React, Next.js, Node.js, Python, Java, PostgreSQL, MongoDB, Docker, and AWS."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You maintain 100% intellectual property and complete ownership of code repositories, databases, and deployment scripts."
        }
      ]}
    />
  );
};

export default FullStackDeveloper;
