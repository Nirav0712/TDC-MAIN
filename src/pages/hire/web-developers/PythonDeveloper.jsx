import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const PythonDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Python"
      pageCategory="Web Developers"
      categoryUrl="/hire-team/web-developers"
      pageTitle="Hire Dedicated Python Developers | Django & FastAPI Experts | The Digital Connect"
      metaDescription="Hire certified and gifted Python developers from The Digital Connect. 6+ years experience, 120+ projects delivered, 24/7 technical support, and flexible hiring models."
      tagline="We successfully enhance your online presence & data intelligence"
      heroDescription="We have a group of gifted and dedicated Python developers who have experience building high-scale web applications, asynchronous APIs, and cloud-native systems. Get in touch with us for your free quote."
      heroBullets={[
        "Expertise in Django, FastAPI, Flask & AI/ML integration",
        "High scalability, low latency, and asynchronous microservices",
        "Reduced risk of errors or bugs through strict typing & automated testing"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "120+", label: "Python Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Cutting-Edge, High-Throughput Python Solutions",
        card1Text1: "Does your company need Python engineers? We at The Digital Connect provide cutting-edge, all-inclusive Python programming solutions. We help organizations worldwide by generating high returns on investment through successful deployment of web apps, data processing pipelines, and microservices.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Python developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its IT strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Trained Engineers & Contractual Services",
        card2Text1: "One of the finest development firms, we at The Digital Connect provide you with a dedicated team of Python developers. To create some of the most sophisticated web apps and AI-ready backends, our certified Python developers are trained engineers with deep expertise in Django, FastAPI, Celery, and cloud databases.",
        card2Text2: "Their potential enables us to provide effective contractual services in this area to meet your unique company demands with high precision, high code quality, and strict performance metrics."
      }}
      whyChoosePoints={[
        {
          title: "Work with Professionals",
          desc: "Work with senior Python developers who are familiar with PEP 8 standards, clean architecture, and modern async programming."
        },
        {
          title: "Bespoke Python Applications",
          desc: "Development of individual bespoke applications, REST/GraphQL APIs, and intelligent data pipelines tailored to your operations."
        },
        {
          title: "Real-Time Project Management",
          desc: "Project management that is efficient, transparent, and tracked in real-time with daily sprint demos and Jira tracking."
        },
        {
          title: "Python Upgrades & Migrations",
          desc: "Knowledgeable about Python 2.x to 3.x upgrades, framework refactoring, and migrating monoliths to async microservices."
        },
        {
          title: "Flexible Engagement Models",
          desc: "A project's flexible engagement models allowing you to quickly scale Python engineer bandwidth up or down."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile sprint execution and automated CI/CD pipelines ensuring your Python modules ship strictly on schedule."
        }
      ]}
      techHighlight={{
        title1: "Broad Range of Python & Web Framework Skills",
        desc1: "We at The Digital Connect provide top Python developers with a broad range of skills, enabling them to work on everything from high-speed FastAPI endpoints and Django platforms to complex data pipelines and automated web scrapers. Our affordable Python developers help create a seamless, scalable experience for your digital applications because they are knowledgeable about programming languages, async concurrency, and cloud architectures.",
        title2: "Full-Stack Synergy & Asynchronous Background Services",
        desc2: "Hire Indian Python developers to create dynamic, functional web backends and data-intensive applications. We at The Digital Connect take charge of building scalable software frameworks and executing resilient background worker queues (Celery, Redis). All of our Python developers collaborate seamlessly with front-end teams (React, Vue, Next.js) and DevOps engineers. We offer a variety of services thanks to our technical expertise in RESTful APIs, GraphQL, SQL/NoSQL databases, and cloud platforms (AWS, GCP)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "We don't have any hidden fees when you employ Python developers from us. We remain open for the duration of our engagement. Hire seasoned Python developers according to your requirements, with the flexibility to quickly ramp up or scale down as necessary to adapt to shifting business demands."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "With The Digital Connect, your data is entirely secure, and we value your privacy. Our team uses strict data protection methods and signed Non-Disclosure Agreements (NDAs) to guarantee total confidentiality of ongoing projects."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "We give you all the tools and engineering support you need to strengthen your company while assisting you in constructing a scalable, modern technology ecosystem."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Total accessibility with our knowledgeable Python engineers in your frameworks. Our developers offer deep domain expertise in Django, FastAPI, Flask, Celery, and AI/ML to create custom solutions tailored to specific industries."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "Hire Python developer strategy gives you direct control of projects, enabling them to be finished on schedule. 100% source code, repository, and intellectual property ownership is entirely transparent to you."
        }
      ]}
    />
  );
};

export default PythonDeveloper;
