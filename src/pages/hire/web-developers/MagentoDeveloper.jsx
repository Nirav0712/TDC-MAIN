import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const MagentoDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Magento"
      pageTitle="Hire Dedicated Magento Developers | Adobe Commerce Experts | The Digital Connect"
      metaDescription="Hire certified Magento (Adobe Commerce) developers from The Digital Connect. Custom B2B/B2C storefronts, Magento 2 migrations, extensions, and flexible hiring models."
      tagline="We successfully scale your high-volume eCommerce & enterprise Adobe Commerce stores"
      heroDescription="We have a group of gifted and dedicated Magento developers who specialize in Adobe Commerce (Magento 2) development, headless PWA storefronts, custom extensions, and high-volume B2B/B2C eCommerce. Get in touch with us for your free quote."
      heroBullets={[
        "Certified Magento 2 (Adobe Commerce) architecture and custom extension development",
        "Seamless ERP, CRM, PIM, and omnichannel multi-storefront integrations",
        "High-performance caching (Varnish, Redis, Elasticsearch) and multi-currency checkout"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "80+", label: "Magento Stores Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Enterprise B2B & B2C Magento Solutions",
        card1Text1: "Does your company need expert Magento developers? We at The Digital Connect provide cutting-edge, all-inclusive Adobe Commerce programming solutions. We help enterprise retailers worldwide generate high returns on investment with robust, multi-warehouse eCommerce architectures.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Magento developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its eCommerce operations by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Adobe Commerce Engineers",
        card2Text1: "One of the finest eCommerce development firms, The Digital Connect provides you with a dedicated team of Magento developers. To create some of the most sophisticated high-throughput stores, our certified developers are trained engineers with deep expertise in PHP, GraphQL, Knockout.js, and MySQL.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with custom modules, PCI-DSS compliance, and high transaction security."
      }}
      whyChoosePoints={[
        {
          title: "Custom Magento 2 Extensions",
          desc: "Bespoke module development and extension customizations adhering strictly to Adobe Commerce coding standards."
        },
        {
          title: "Magento 1 to 2 Migrations",
          desc: "Risk-free, zero-downtime database migrations, product catalog transfers, customer history sync, and SEO preservation."
        },
        {
          title: "ERP & Payment Gateways",
          desc: "Seamless synchronization with SAP, NetSuite, Salesforce, Stripe, PayPal, and custom third-party logistics (3PL)."
        },
        {
          title: "PWA & Headless Commerce",
          desc: "Blazing fast mobile shopping experiences built with Magento PWA Studio, React, and GraphQL APIs."
        },
        {
          title: "Speed & Server Tuning",
          desc: "Fine-tuning Varnish Cache, Redis sessions, Elasticsearch indexing, and AWS/Azure cloud configurations."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile sprint releases with strict QA testing, automated deployment pipelines, and 24/7 post-launch maintenance."
        }
      ]}
      techHighlight={{
        title1: "Headless Commerce & High-Volume Scalability",
        desc1: "Our Magento engineers architect microservices and headless PWA storefronts capable of handling tens of thousands of concurrent checkouts during peak flash sales.",
        title2: "Multi-Store & Omnichannel Architecture",
        desc2: "We configure centralized multi-store setups supporting multiple currencies, localized tax rules, international shipping methods, and custom B2B buyer pricing tiers."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "No hidden charges or vendor lock-in. Hire certified Magento developers with full flexibility to ramp up sprint velocity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data is entirely secure with The Digital Connect. We apply strict NDAs and ensure PCI-DSS security compliance across all Magento stores."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Scale your eCommerce engineering capacity rapidly without the overhead of in-house hiring, training, and infrastructure."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Adobe Commerce engineers with deep knowledge of Magento 2 core, REST/GraphQL APIs, Elasticsearch, and Docker."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full ownership of custom modules, source code repositories, design assets, and database architecture."
        }
      ]}
    />
  );
};

export default MagentoDeveloper;
