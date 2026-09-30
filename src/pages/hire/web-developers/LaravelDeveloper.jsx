import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const LaravelDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Laravel"
      pageTitle="Hire Dedicated Laravel Developers | Senior Laravel & PHP Experts | The Digital Connect"
      metaDescription="Hire certified Laravel developers from The Digital Connect. Laravel 11, Livewire, Inertia.js, RESTful APIs, Eloquent ORM, and flexible hiring models."
      tagline="We successfully engineer elegant, high-performance Laravel web applications & SaaS backends"
      heroDescription="We have a group of gifted and dedicated Laravel developers who specialize in building enterprise web applications, high-concurrency RESTful APIs, modern full-stack setups (Livewire, Inertia.js + React/Vue), and custom SaaS platforms. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Laravel 11 web development with Eloquent ORM, Queues, and Horizon",
        "High-performance REST & GraphQL API backends for web and mobile platforms",
        "Full-stack reactive web applications with Livewire 3, Inertia.js, and TailwindCSS"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "180+", label: "Laravel Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Elegant, Rapid & Scalable Laravel Web Solutions",
        card1Text1: "Does your company need senior Laravel developers? We at The Digital Connect provide cutting-edge, all-inclusive Laravel engineering solutions. We help businesses and startups worldwide build robust, maintainable, and elegant web platforms with rapid development velocity and low total cost of ownership.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Laravel developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Laravel & PHP 8.x Engineers",
        card2Text1: "One of the finest PHP framework development firms, The Digital Connect provides you with a dedicated team of Laravel developers. To build sophisticated web applications and SaaS systems, our certified developers are trained engineers with deep expertise in PHP 8.3, Laravel Sanctum/Passport, Redis, and MySQL.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with clean PSR-12 code, automated PHPUnit/Pest testing, and top-tier security standards."
      }}
      whyChoosePoints={[
        {
          title: "Custom Laravel SaaS Platforms",
          desc: "Architecting multi-tenant SaaS applications with Laravel Cashier (Stripe/Paddle), team permissions, and subscription tiers."
        },
        {
          title: "Laravel REST & GraphQL APIs",
          desc: "High-speed API endpoints secured with Laravel Sanctum/Passport, resource transformers, and automated Swagger docs."
        },
        {
          title: "Inertia.js & Livewire Mastery",
          desc: "Dynamic, SPA-like user interfaces without complex API boilerplate using Livewire 3 or Inertia.js with React/Vue."
        },
        {
          title: "Background Queues & Horizon",
          desc: "High-throughput asynchronous job processing with Redis, Laravel Horizon, and scheduled cron jobs."
        },
        {
          title: "Laravel Version Upgrades",
          desc: "Upgrading legacy Laravel 6/7/8/9 applications to modern Laravel 11 with zero downtime and strict type refactoring."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean Git pull requests, automated CI/CD deployments, and post-launch SLAs."
        }
      ]}
      techHighlight={{
        title1: "Modern Laravel 11 Ecosystem Mastery",
        desc1: "Our developers leverage the latest Laravel ecosystem tools—including Laravel Octane for lightning-fast request handling, Laravel Telescope for deep debugging, and Laravel Nova/Filament for powerful administration panels.",
        title2: "Database Optimization & High Concurrency",
        desc2: "We eliminate N+1 query bottlenecks with eager loading, index optimization, Redis caching layers, and database read-write replication for high concurrent user loads."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly hiring models with zero hidden fees. Scale your Laravel developer count flexibly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your code and intellectual property are fully secured. We sign mutual NDAs and adhere strictly to OWASP web security principles."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your development cycle by hiring senior Laravel engineers who can ship production-ready features quickly."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in PHP 8.3, Laravel 11, Livewire, Inertia.js, React, Vue, MySQL, Redis, and Docker."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You maintain 100% complete intellectual property and source code ownership of all developed services and architecture."
        }
      ]}
    />
  );
};

export default LaravelDeveloper;
