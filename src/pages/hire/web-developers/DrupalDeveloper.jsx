import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const DrupalDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Drupal"
      pageTitle="Hire Dedicated Drupal Developers | Drupal 10 & Enterprise CMS Experts | The Digital Connect"
      metaDescription="Hire certified Drupal developers from The Digital Connect. Drupal 10, custom modules, Acquia cloud, decoupled headless CMS, and flexible hiring models."
      tagline="We successfully engineer enterprise Drupal 10 digital experiences & secure content platforms"
      heroDescription="We have a group of gifted and dedicated Drupal developers who specialize in enterprise CMS development, Drupal 10 migrations, custom module and theme development, decoupled headless architecture, and Acquia cloud optimization. Get in touch with us for your free quote."
      heroBullets={[
        "Enterprise Drupal 10 development, custom module creation, and Twig theming",
        "Decoupled & Headless Drupal architecture with GraphQL and Next.js / React frontends",
        "High-security public sector, healthcare, higher-ed, and enterprise digital platforms"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "65+", label: "Enterprise Drupal Portals" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Enterprise, High-Security Drupal CMS Solutions",
        card1Text1: "Does your organization require seasoned Drupal developers? We at The Digital Connect provide cutting-edge, all-inclusive Drupal engineering solutions. We help universities, government entities, and global enterprises build secure, accessible, and high-volume content hubs with complex editorial workflows.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Drupal developers, allowing you to take advantage of our availability as your Offshore Development Center. Your organization can make significant savings and improve the effectiveness of its content strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Drupal 10 & PHP Engineers",
        card2Text1: "One of the finest enterprise CMS firms, The Digital Connect provides you with a dedicated team of Drupal developers. To build sophisticated publishing platforms, our certified developers are trained engineers with deep expertise in Drupal core APIs, Symfony components, Twig, and Acquia / Pantheon clouds.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with WCAG 2.1 accessibility, GDPR/HIPAA compliance, and robust caching architectures."
      }}
      whyChoosePoints={[
        {
          title: "Custom Drupal 10 Modules",
          desc: "Developing custom modules following Drupal coding standards, leveraging Symfony components and robust hooks."
        },
        {
          title: "Drupal 7/8/9 to 10 Migrations",
          desc: "Structured content migration, database mapping, theme modernization, and zero-downtime upgrades to Drupal 10."
        },
        {
          title: "Decoupled Headless Drupal",
          desc: "Headless CMS setups using JSON:API and GraphQL to power blazing-fast Next.js and mobile app experiences."
        },
        {
          title: "Enterprise Multi-Site Architecture",
          desc: "Managing hundreds of branded websites from a single Drupal codebase using Drupal Multi-site and Domain Access."
        },
        {
          title: "Acquia & Pantheon Cloud Hosting",
          desc: "DevOps automation, Varnish caching configuration, Redis integration, and CI/CD pipelines on enterprise PaaS."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with rigorous cross-browser testing, accessibility compliance audits, and SLA-backed maintenance."
        }
      ]}
      techHighlight={{
        title1: "Enterprise Editorial Workflows & Multi-Language Support",
        desc1: "Our Drupal developers build complex content moderation states, granular role-based permissions, and automated multi-lingual translation workflows for global publishing teams.",
        title2: "Headless Drupal & High-Concurrency Performance",
        desc2: "We combine Drupal's rock-solid content repository capabilities with modern edge-rendered React/Next.js frontends, ensuring fast page load speeds and airtight security."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly hiring models with zero hidden fees. Scale your Drupal developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and intellectual property are fully secured. We sign bilateral NDAs and maintain strict enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your digital transformation by hiring certified Drupal engineers with deep enterprise CMS experience."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Drupal 10, PHP, Symfony, Twig, GraphQL, Next.js, MySQL, and Acquia Cloud."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You maintain 100% complete intellectual property and source code ownership of all developed themes, modules, and architecture."
        }
      ]}
    />
  );
};

export default DrupalDeveloper;
