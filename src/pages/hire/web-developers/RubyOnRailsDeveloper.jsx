import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const RubyOnRailsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Ruby on Rails"
      pageTitle="Hire Dedicated Ruby on Rails Developers | Senior RoR Engineers | The Digital Connect"
      metaDescription="Hire certified Ruby on Rails (RoR) developers from The Digital Connect. Rapid MVP launches, Hotwire & Turbo, Rails 7+ migrations, REST APIs, and flexible hiring models."
      tagline="We successfully accelerate rapid MVP builds & scalable Rails enterprise web apps"
      heroDescription="We have a group of gifted and dedicated Ruby on Rails developers who excel in rapid application prototyping, Rails 7+ upgrades, Hotwire/Turbo real-time interfaces, API backends, and PostgreSQL architecture. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Rails 7+ web development featuring Hotwire, Turbo, Stimulus, and TailwindCSS",
        "High-performance REST & GraphQL API backends connecting React and mobile apps",
        "Legacy Rails refactoring, version upgrades, automated RSpec testing, and Sidekiq worker queues"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "75+", label: "Rails Applications Built" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Rapid MVP Prototyping & Scalable SaaS Platforms",
        card1Text1: "Does your startup or enterprise need seasoned Ruby on Rails developers? We at The Digital Connect provide cutting-edge, all-inclusive RoR programming solutions. We help businesses worldwide build and scale high-velocity web platforms with exceptional code maintainability and convention over configuration.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Ruby on Rails developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its product roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Trained RoR & Full-Stack Engineers",
        card2Text1: "One of the finest Rails development firms, The Digital Connect provides you with a dedicated team of RoR developers. To build sophisticated web applications, our certified developers are trained engineers with deep expertise in ActiveRecord, Sidekiq, Redis, Hotwire, and PostgreSQL.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with clean MVC architecture, high test coverage (TDD/RSpec), and rock-solid stability."
      }}
      whyChoosePoints={[
        {
          title: "Full-Stack Rails & Hotwire",
          desc: "SPA-like reactive user experiences without complex JS frameworks using Hotwire, Turbo Frames, and Stimulus."
        },
        {
          title: "Custom SaaS & Marketplace Platforms",
          desc: "Multi-tenant SaaS architectures with Stripe/Braintree billing, role-based permissions, and automated onboarding."
        },
        {
          title: "Rails Version Upgrades",
          desc: "Smooth upgrades from Rails 4.x/5.x/6.x to modern Rails 7+ with zero data loss and automated test coverage."
        },
        {
          title: "Background Jobs & Data Queues",
          desc: "High-throughput asynchronous job execution with Sidekiq, Redis, and ActiveJob for emails, reports, and imports."
        },
        {
          title: "Database Optimization & ActiveRecord",
          desc: "Elimination of N+1 query bottlenecks, database index tuning, and PostgreSQL full-text search integration."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, automated CI/CD deployments on Heroku, AWS, or Docker."
        }
      ]}
      techHighlight={{
        title1: "Modern Rails 7 Ecosystem & Hotwire Real-Time UI",
        desc1: "Our Rails engineers leverage Hotwire (Turbo Streams and Turbo Frames) to deliver blazingly fast, real-time web applications with minimal JavaScript complexity and maximum developer productivity.",
        title2: "Enterprise SaaS Architecture & Automated Testing",
        desc2: "We build enterprise-ready SaaS products equipped with comprehensive RSpec/Capybara test suites, bulletproof authorization (Pundit/CanCanCan), and scalable background workers (Sidekiq Enterprise)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly or monthly hiring models with zero hidden fees. Ramp up developer hours anytime as your product scales."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your code and intellectual property are fully secured. We sign mutual NDAs and adhere to OWASP security guidelines."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Launch your product to market in weeks rather than months by hiring seasoned Rails engineers with full-stack capabilities."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Ruby on Rails engineers proficient in Rails 7, Ruby 3.x, Hotwire, React, PostgreSQL, Redis, and Sidekiq."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You have 100% complete ownership of the GitHub repository, database schemas, and all deployment pipelines."
        }
      ]}
    />
  );
};

export default RubyOnRailsDeveloper;
