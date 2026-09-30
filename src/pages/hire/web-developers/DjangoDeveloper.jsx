import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const DjangoDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Django"
      pageTitle="Hire Dedicated Django Developers | Python & Django REST Framework Experts | The Digital Connect"
      metaDescription="Hire certified Django developers from The Digital Connect. Python backends, Django REST framework, Celery queues, PostgreSQL, and flexible hiring models."
      tagline="We successfully engineer secure, scalable Python web apps & robust Django REST APIs"
      heroDescription="We have a group of gifted and dedicated Django developers who specialize in building secure, batteries-included web applications, Django REST Framework (DRF) APIs, asynchronous task workers with Celery, and AI-ready data backends. Get in touch with us for your free quote."
      heroBullets={[
        "Enterprise Python & Django web platforms with built-in ORM, admin dashboard, and security",
        "High-performance REST & GraphQL API backends using Django REST Framework (DRF)",
        "Asynchronous task processing with Celery, Redis, and automated PostgreSQL query optimization"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "85+", label: "Django Platforms Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Secure, Batteries-Included Python & Django Solutions",
        card1Text1: "Does your company need senior Django developers? We at The Digital Connect provide cutting-edge, all-inclusive Django engineering solutions. We help businesses worldwide launch secure, maintainable web applications and enterprise platforms with rapid time-to-market.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Django developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Django & Python Engineers",
        card2Text1: "One of the finest Python development firms, The Digital Connect provides you with a dedicated team of Django developers. To build sophisticated web applications and data platforms, our certified developers are trained engineers with deep expertise in Python 3.12+, Django ORM, DRF, PostgreSQL, and Docker.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with built-in protection against SQL injection, CSRF, and XSS, paired with clean code and high performance."
      }}
      whyChoosePoints={[
        {
          title: "Django REST Framework (DRF)",
          desc: "Modular, performant RESTful APIs with automated token/OAuth authentication, serializers, and Swagger API docs."
        },
        {
          title: "Custom SaaS & Enterprise Portals",
          desc: "Multi-tenant SaaS architectures, complex role-based access control (RBAC), and custom admin dashboards."
        },
        {
          title: "Asynchronous Jobs with Celery",
          desc: "Background task queues, scheduled cron jobs, data scraping pipelines, and batch email delivery with Celery & Redis."
        },
        {
          title: "Django ORM & PostgreSQL Mastery",
          desc: "Complex database query optimization, automated schema migrations, database indexing, and full-text search."
        },
        {
          title: "AI / ML Integration",
          desc: "Seamlessly connecting Django web backends with PyTorch, TensorFlow, and OpenAI LLM models for intelligent features."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with comprehensive PyTest test suites, continuous deployment, and strict SLAs."
        }
      ]}
      techHighlight={{
        title1: "Built-In Enterprise Security by Design",
        desc1: "Our Django engineers utilize Django's battle-tested security mechanisms to guard your application against common vulnerabilities like cross-site request forgery (CSRF), clickjacking, and cross-site scripting (XSS).",
        title2: "Seamless React / Next.js & DRF Headless Synergy",
        desc2: "We construct decoupled, modern web architectures where lightweight React or Next.js frontends consume high-performance Django REST APIs for maximum interactive responsiveness."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly engagement models with no hidden costs. Scale your Django development bandwidth anytime."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your proprietary code and data are 100% protected. We enforce bilateral NDAs and bank-grade encryption standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product release schedule by leveraging Django's rapid development conventions and senior engineers."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Python, Django, DRF, Celery, PostgreSQL, Redis, Docker, and AWS/GCP."
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

export default DjangoDeveloper;
