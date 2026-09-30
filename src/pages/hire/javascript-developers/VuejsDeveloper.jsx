import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const VuejsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Vue.js"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated Vue.js Developers | Nuxt.js & Vue 3 Experts | The Digital Connect"
      metaDescription="Hire certified Vue.js developers from The Digital Connect. Vue 3 Composition API, Pinia, Nuxt 3, Vite, TypeScript, and flexible hiring models."
      tagline="We successfully engineer reactive, elegant web applications with Vue 3 & Nuxt 3"
      heroDescription="We have a group of gifted and dedicated Vue.js developers who specialize in building reactive single-page applications (SPAs), SSR/SSG portals with Nuxt 3, Pinia state stores, and modular component architectures using Vue 3 Composition API and TypeScript. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Vue 3 Composition API with script setup and TypeScript",
        "Predictable state management with Pinia and high-performance routing with Vue Router",
        "Full-stack SSR and static generation with Nuxt 3, Nitro engine, and TailwindCSS"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "130+", label: "Vue Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Approachable, High-Speed Vue.js Solutions",
        card1Text1: "Does your company need senior Vue.js developers? We at The Digital Connect provide cutting-edge, all-inclusive Vue.js frontend engineering solutions. We help businesses worldwide launch progressive, maintainable web applications with fast load speeds and intuitive reactivity.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Vue.js developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Vue 3 & Nuxt.js Engineers",
        card2Text1: "One of the finest modern frontend firms, The Digital Connect provides you with a dedicated team of Vue.js developers. To build sophisticated web applications, our certified developers are trained engineers with deep expertise in Vue 3, Nuxt 3, Pinia, Vite, and REST/GraphQL APIs.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with clean composable functions, automated Vitest unit testing, and smooth user interactions."
      }}
      whyChoosePoints={[
        {
          title: "Vue 3 Composition API & Composables",
          desc: "Writing modular, reusable business logic using custom Vue composables, TypeScript, and reactive refs."
        },
        {
          title: "Nuxt 3 SSR & Full-Stack Capabilities",
          desc: "Building blazing-fast server-rendered and statically generated portals with Nuxt 3, Nitro server engine, and auto-imports."
        },
        {
          title: "Pinia Reactive State Management",
          desc: "Type-safe, modular global state stores with Pinia, complete with devtools time-travel debugging."
        },
        {
          title: "Vue 2 to Vue 3 Migrations",
          desc: "Smoothly upgrading legacy Vue 2 (Options API / Vuex) applications to Vue 3 (Composition API / Pinia) with zero downtime."
        },
        {
          title: "Design Systems & TailwindCSS",
          desc: "Building accessible, animated UI component libraries using TailwindCSS, PrimeVue, Vuetify, and Radix Vue."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean code reviews, automated CI/CD pipelines, and post-launch SLAs."
        }
      ]}
      techHighlight={{
        title1: "Vite-Powered Instant Development Velocity",
        desc1: "Our Vue developers leverage Vite's native ES module bundling for instantaneous hot module replacement (HMR) and optimized rollup production bundles.",
        title2: "Nuxt 3 Server Engine & API Integration",
        desc2: "We construct full-stack hybrid web applications where Nuxt 3 server routes handle database access (Prisma) and authentication securely on the server."
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
          desc: "Accelerate your frontend release cycle with dedicated Vue specialists who ship clean, maintainable code rapidly."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Vue 3, Nuxt 3, TypeScript, Pinia, Vite, TailwindCSS, and Vitest."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all developed Vue repositories and assets."
        }
      ]}
    />
  );
};

export default VuejsDeveloper;
