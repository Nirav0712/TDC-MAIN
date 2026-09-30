import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const MeanStackDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="MEAN Stack"
      pageTitle="Hire Dedicated MEAN Stack Developers | Angular & Node.js Experts | The Digital Connect"
      metaDescription="Hire certified MEAN stack developers from The Digital Connect. MongoDB, Express.js, Angular, Node.js, full-stack JavaScript web apps, and flexible hiring models."
      tagline="We successfully build dynamic single-page web applications & end-to-end JavaScript backends"
      heroDescription="We have a group of gifted and dedicated MEAN stack developers who excel in crafting enterprise single-page applications (SPAs) with Angular, high-concurrency Node.js REST/GraphQL APIs, Express.js middleware, and scalable MongoDB databases. Get in touch with us for your free quote."
      heroBullets={[
        "End-to-end full-stack JavaScript development utilizing MongoDB, Express.js, Angular, and Node.js",
        "High-performance Single Page Applications (SPAs) with Angular standalone components & TypeScript",
        "Asynchronous, event-driven Node.js backend microservices with real-time WebSockets"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "95+", label: "MEAN Stack Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Unified, Full-Stack JavaScript Web Solutions",
        card1Text1: "Does your company need expert MEAN stack engineers? We at The Digital Connect provide cutting-edge, all-inclusive full-stack JavaScript development solutions. We help businesses worldwide build performant, maintainable, and cost-efficient web platforms using a unified JavaScript/TypeScript codebase from frontend to backend.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced MEAN stack developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering velocity by using fewer resources and merging them with our skilled team.",
        card2Title: "Trained Angular & Node.js Engineers",
        card2Text1: "One of the finest full-stack development firms, The Digital Connect provides you with a dedicated team of MEAN stack developers. To build sophisticated enterprise dashboards and SaaS products, our certified developers are trained engineers with deep expertise in Angular 17+, TypeScript, RxJS, Express, and MongoDB.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with modular component architecture, high test coverage, and smooth user experiences."
      }}
      whyChoosePoints={[
        {
          title: "Angular Enterprise SPAs",
          desc: "Structured, highly scalable frontend architectures built with Angular, TypeScript, RxJS, and NgRx state management."
        },
        {
          title: "Node.js & Express REST APIs",
          desc: "Lightweight, non-blocking asynchronous RESTful and GraphQL APIs engineered for high-volume transactions."
        },
        {
          title: "MongoDB Schema & Indexing",
          desc: "Flexible, high-performance NoSQL database modeling, aggregation pipelines, and sharded MongoDB Atlas deployments."
        },
        {
          title: "Real-Time WebSocket Apps",
          desc: "Live collaboration tools, dashboards, instant chat, and notifications powered by Socket.io and Node.js."
        },
        {
          title: "Angular Upgrades & Migrations",
          desc: "Modernizing older AngularJS (1.x) or legacy Angular versions to modern Angular 17+ with standalone components."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with transparent Jira tracking, automated CI/CD pipelines, and rigorous QA testing."
        }
      ]}
      techHighlight={{
        title1: "Single-Language Efficiency (Full-Stack TypeScript)",
        desc1: "By utilizing TypeScript across both the Angular frontend and Node.js backend, our MEAN stack developers share data interfaces and models seamlessly, drastically reducing bugs and accelerating delivery speed.",
        title2: "Scalable NoSQL & Real-Time Event Architecture",
        desc2: "We architect resilient cloud backends utilizing MongoDB Atlas replication, Redis caching layers, and event-driven Node.js workers to process high concurrent traffic effortlessly."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly engagement models with no hidden fees. Easily scale developer count up or down."
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
          desc: "Certified engineers skilled in Angular, TypeScript, Node.js, Express.js, MongoDB, Docker, and AWS."
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

export default MeanStackDeveloper;
