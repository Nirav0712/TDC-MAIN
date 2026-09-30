import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const AngularDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Angular"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated Angular Developers | Enterprise Angular 17+ Experts | The Digital Connect"
      metaDescription="Hire certified Angular developers from The Digital Connect. Angular 17/18, Standalone Components, Signals, RxJS, NgRx, TypeScript, and flexible hiring models."
      tagline="We successfully engineer structured, enterprise-grade Single Page Applications with Angular"
      heroDescription="We have a group of gifted and dedicated Angular developers who specialize in architecting scalable, enterprise-grade single-page applications using modern Angular 17+, Standalone Components, Angular Signals, TypeScript, and NgRx. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Angular 17/18 architecture with Standalone Components, Signals, and Deferrable Views",
        "Enterprise reactive state management with RxJS, NgRx Store, and ComponentStore",
        "Rigorous TypeScript type safety, dependency injection, and clean modular codebases"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "110+", label: "Angular Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Enterprise-Grade, Scalable Angular Solutions",
        card1Text1: "Does your enterprise require senior Angular developers? We at The Digital Connect provide cutting-edge, all-inclusive Angular application engineering solutions. We help enterprise businesses and financial institutions worldwide construct highly structured, maintainable web applications capable of supporting massive operational workflows.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Angular developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its frontend engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Angular & TypeScript Engineers",
        card2Text1: "One of the finest enterprise frontend firms, The Digital Connect provides you with a dedicated team of Angular developers. To build sophisticated web applications and portals, our certified developers are trained engineers with deep expertise in Angular CLI, RxJS observables, Angular Material, and micro-frontends.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with clean dependency injection, high test coverage (Jasmine/Karma/Jest), and strict architecture standards."
      }}
      whyChoosePoints={[
        {
          title: "Angular 17+ Signals & Standalone Components",
          desc: "Harnessing Angular Signals and standalone components for lightning-fast fine-grained reactivity and minimal boilerplate."
        },
        {
          title: "RxJS & NgRx Reactive State",
          desc: "Architecting complex asynchronous data pipelines, side effects, and predictable centralized stores with NgRx."
        },
        {
          title: "Micro-Frontend Architecture",
          desc: "Splitting massive enterprise applications into independent, independently deployable Angular micro-frontends via Module Federation."
        },
        {
          title: "AngularJS to Modern Angular Migration",
          desc: "Systematically upgrading legacy AngularJS (1.x) or older Angular versions to Angular 17+ with zero operational disruption."
        },
        {
          title: "Angular Material & Design Systems",
          desc: "Building accessible (WCAG 2.1 compliant), themeable component libraries using Angular CDK and Angular Material."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week enterprise sprints with daily standups, automated linting, SonarQube quality checks, and CI/CD releases."
        }
      ]}
      techHighlight={{
        title1: "Built-In Enterprise Scalability & Dependency Injection",
        desc1: "Our Angular developers leverage Angular's powerful hierarchical dependency injection and routing guards to build modular, highly decoupled enterprise architectures that scale effortlessly across large development teams.",
        title2: "Zoneless Change Detection & Performance Tuning",
        desc2: "We optimize render performance with zoneless change detection (Signals), OnPush change detection strategy, lazy loading routes, and server-side rendering (SSR with Angular Universal / SSR)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly and monthly billing models with zero hidden overheads. Scale developer capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Instantly augment your in-house teams with certified Angular developers ready to write structured TypeScript code from Day 1."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Angular 17+, TypeScript, RxJS, NgRx, Angular Material, Webpack, and Karma/Jest."
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

export default AngularDeveloper;
