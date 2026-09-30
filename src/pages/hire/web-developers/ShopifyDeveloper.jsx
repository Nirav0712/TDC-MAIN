import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const ShopifyDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Shopify"
      pageTitle="Hire Dedicated Shopify Developers | Shopify Plus & Liquid Experts | The Digital Connect"
      metaDescription="Hire certified Shopify & Shopify Plus developers from The Digital Connect. Custom Liquid themes, private Shopify apps, Hydrogen headless stores, and flexible hiring models."
      tagline="We successfully scale high-converting Shopify & Shopify Plus eCommerce storefronts"
      heroDescription="We have a group of gifted and dedicated Shopify developers who specialize in custom Liquid themes, Shopify Plus enterprise stores, private apps, Hydrogen headless commerce, and seamless third-party ERP integrations. Get in touch with us for your free quote."
      heroBullets={[
        "Custom Liquid 2.0 theme development from Figma/Adobe XD designs",
        "Shopify Plus checkout customization, scripts, and private app development",
        "Hydrogen & Oxygen headless commerce with fast loading and high conversion rates"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "150+", label: "Shopify Stores Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Converting Shopify & Shopify Plus Solutions",
        card1Text1: "Does your retail brand need skilled Shopify developers? We at The Digital Connect provide cutting-edge, all-inclusive Shopify programming solutions. We help Direct-to-Consumer (DTC) and B2B brands worldwide generate high returns on investment with intuitive, high-speed storefronts.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Shopify developers, allowing you to take advantage of our availability as your Offshore Development Center. Your brand can make significant savings and improve the effectiveness of its eCommerce roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Shopify Plus & Liquid Engineers",
        card2Text1: "One of the finest eCommerce development firms, The Digital Connect provides you with a dedicated team of Shopify developers. To build sophisticated merchant workflows and conversion-optimized storefronts, our certified developers are trained engineers with deep expertise in Liquid, JavaScript, React, and Node.js.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with custom product configurators, subscription flows, and global payment gateways."
      }}
      whyChoosePoints={[
        {
          title: "Custom Shopify 2.0 Themes",
          desc: "Modular Shopify Online Store 2.0 themes with dynamic JSON templates, custom sections, and zero unnecessary apps."
        },
        {
          title: "Private & Public App Development",
          desc: "Custom Shopify apps built with Node.js/Remix, GraphQL Admin API, webhooks, and secure cloud databases."
        },
        {
          title: "Shopify Plus Enterprise",
          desc: "Shopify Functions, Checkout Extensibility, custom B2B wholesale portals, multi-currency, and internationalization."
        },
        {
          title: "Hydrogen Headless Commerce",
          desc: "Sub-second headless storefronts engineered with React, Remix, Shopify Hydrogen, and Oxygen global edge hosting."
        },
        {
          title: "Migration & Data Sync",
          desc: "Seamless migrations from WooCommerce, Magento, or BigCommerce to Shopify with zero loss of customer or order data."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile delivery sprints with thorough mobile responsiveness audits, speed optimizations, and post-launch support."
        }
      ]}
      techHighlight={{
        title1: "Shopify Checkout Extensibility & Custom Apps",
        desc1: "We build tailored checkout experiences using modern Shopify Functions and Checkout UI Extensions, enabling custom upsells, loyalty point redemptions, and localized payment routing.",
        title2: "ERP, CRM & 3PL Integration Ecosystems",
        desc2: "Our Shopify engineers integrate your store seamlessly with Klaviyo, NetSuite, SAP, ShipStation, Recharge Subscriptions, and custom warehouse management systems."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "No hidden fees or long-term lock-ins. Hire dedicated Shopify developers with total flexibility to scale engineering hours on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your customer data and API keys are completely secure with The Digital Connect. We operate under strict bilateral NDAs and industry-standard security."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product release velocity and seasonal campaign launches with on-demand access to certified Shopify engineers."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Shopify developers with deep command of Liquid, GraphQL Storefront API, React, Remix, and Headless Hydrogen."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% intellectual property ownership of all custom themes, private app repositories, and configuration assets."
        }
      ]}
    />
  );
};

export default ShopifyDeveloper;
