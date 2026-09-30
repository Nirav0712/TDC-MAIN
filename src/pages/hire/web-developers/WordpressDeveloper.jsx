import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const WordpressDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="WordPress"
      pageTitle="Hire Dedicated WordPress Developers | Custom Theme & Plugin Experts | The Digital Connect"
      metaDescription="Hire certified WordPress developers from The Digital Connect. Custom themes, WooCommerce stores, REST API, speed optimization, strict security, and flexible hiring models."
      tagline="We successfully enhance your online presence, CMS workflows & eCommerce growth"
      heroDescription="We have a group of gifted and dedicated WordPress developers with extensive experience creating custom themes, Gutenberg blocks, bespoke plugins, and high-converting WooCommerce stores. Get in touch with us for your free quote."
      heroBullets={[
        "Custom theme development from Figma/PSD and bespoke plugin engineering",
        "High-performance WooCommerce setup with automated payment & inventory sync",
        "Enterprise Core Web Vitals speed optimization and bulletproof security hardening"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "250+", label: "WordPress Sites Launched" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Bespoke, High-Speed WordPress Solutions",
        card1Text1: "Does your business need professional WordPress developers? We at The Digital Connect provide cutting-edge, all-inclusive WordPress programming solutions. We help organizations worldwide generate high returns on investment with ultra-fast, search-engine-optimized CMS platforms.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced WordPress developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its digital strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Gutenberg & WooCommerce Engineers",
        card2Text1: "One of the finest CMS development firms, The Digital Connect provides you with a dedicated team of WordPress developers. To build sophisticated publishing platforms and high-volume eCommerce stores, our certified developers are trained engineers with deep expertise in PHP, modern JS (React), and MySQL.",
        card2Text2: "Their technical potential enables us to provide effective contractual services in this area to meet your unique company demands with pixel-perfect design accuracy, clean code, and zero bloat."
      }}
      whyChoosePoints={[
        {
          title: "Custom Theme Engineering",
          desc: "Clean-coded, responsive WordPress themes built from scratch with zero slow visual builders or bloated code."
        },
        {
          title: "Bespoke Plugin Development",
          desc: "Development of custom WordPress plugins, REST API endpoints, and third-party integrations tailored to your business."
        },
        {
          title: "Real-Time Project Management",
          desc: "Agile project management with clear sprint schedules, transparent time logs, and regular milestone demonstrations."
        },
        {
          title: "WooCommerce Mastery",
          desc: "Custom checkout funnels, multi-currency payment gateways, ERP integrations, and high-concurrency eCommerce setups."
        },
        {
          title: "Core Web Vitals & SEO",
          desc: "Top 95+ Google PageSpeed score optimization, advanced caching, lazy loading, and technical schema markup."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Strict adherence to delivery timelines with comprehensive QA, cross-browser audits, and post-launch maintenance."
        }
      ]}
      techHighlight={{
        title1: "Headless WordPress & Modern Frontend Synergy",
        desc1: "We connect WordPress as a headless CMS with modern frontends like Next.js and React via WP REST API and WPGraphQL for blistering page loads and dynamic web experiences.",
        title2: "Enterprise Security & Speed Optimization",
        desc2: "Our WordPress developers implement automated backups, SSL enforcement, brute-force protection, Redis object caching, and database query optimization."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "No hidden costs or lock-ins. Hire dedicated WordPress developers with the flexibility to quickly scale developer hours up or down based on your roadmap."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data is entirely secure with The Digital Connect. We execute strict NDAs and apply bank-grade security protocols across all WordPress environments."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Gain on-demand access to certified CMS engineers who seamlessly integrate with your existing marketing and development teams."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Our WordPress developers possess deep expertise in PHP, Gutenberg Block development, MySQL, WooCommerce, and ACF Pro."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% ownership of all custom themes, plugin source code, design assets, and database architecture from Day 1."
        }
      ]}
    />
  );
};

export default WordpressDeveloper;
