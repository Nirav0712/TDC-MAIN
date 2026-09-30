import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const NodejsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Node.js"
      pageCategory="JavaScript Developers"
      categoryUrl="/hire-team/javascript-developers"
      pageTitle="Hire Dedicated Node.js Developers | Backend & API Microservices Experts | The Digital Connect"
      metaDescription="Hire certified Node.js developers from The Digital Connect. Express.js, NestJS, Fastify, high-concurrency microservices, GraphQL, and flexible hiring models."
      tagline="We successfully engineer high-concurrency, asynchronous backend microservices with Node.js"
      heroDescription="We have a group of gifted and dedicated Node.js developers who specialize in architecting fast, event-driven RESTful and GraphQL APIs, asynchronous microservices, WebSocket streaming servers, and cloud-native backends. Get in touch with us for your free quote."
      heroBullets={[
        "High-performance asynchronous backends built with Node.js 20+ LTS, Express, NestJS, and Fastify",
        "Event-driven microservices architecture with Apache Kafka, RabbitMQ, and Redis Pub/Sub",
        "Comprehensive database integration with PostgreSQL (Prisma/TypeORM), MongoDB (Mongoose), and Redis"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "240+", label: "Node.js Backends Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Concurrency, Event-Driven Node.js Solutions",
        card1Text1: "Does your company need senior Node.js developers? We at The Digital Connect provide cutting-edge, all-inclusive Node.js backend engineering solutions. We help startups and enterprises worldwide build ultra-fast, non-blocking servers capable of handling tens of thousands of simultaneous socket connections with minimal RAM usage.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Node.js developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its backend roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified NestJS & Microservices Engineers",
        card2Text1: "One of the finest backend engineering firms, The Digital Connect provides you with a dedicated team of Node.js developers. To build sophisticated web applications and scalable data pipelines, our certified developers are trained engineers with deep expertise in NestJS, Express, TypeScript, Docker, and AWS/GCP.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with clean modular architecture, automated test suites (Jest/Supertest), and high security."
      }}
      whyChoosePoints={[
        {
          title: "NestJS & Express.js Mastery",
          desc: "Building structured, enterprise-ready TypeScript backends with NestJS or ultra-fast lightweight microservices with Fastify/Express."
        },
        {
          title: "Real-Time WebSocket Servers",
          desc: "Live messaging platforms, multiplayer game backends, collaborative documents, and live trade tickers with Socket.io."
        },
        {
          title: "Event-Driven Microservices",
          desc: "Decoupled distributed systems powered by message queues (Kafka, RabbitMQ, AWS SQS) and event-driven architectures."
        },
        {
          title: "Database Performance & ORMs",
          desc: "High-throughput data layers using PostgreSQL, MongoDB, Redis caching, Prisma, TypeORM, and connection pooling."
        },
        {
          title: "Serverless & Cloud Deployment",
          desc: "Architecting cost-efficient serverless functions on AWS Lambda, Google Cloud Functions, Docker containers, and Kubernetes."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean code reviews, automated CI/CD pipelines, and 24/7 post-launch monitoring."
        }
      ]}
      techHighlight={{
        title1: "Non-Blocking Asynchronous I/O Performance",
        desc1: "Our Node.js developers leverage the V8 JavaScript engine and libuv event loop to execute I/O-intensive workloads (database queries, network requests, file operations) without thread contention, ensuring sub-10ms response times.",
        title2: "Enterprise Security & Rate Limiting",
        desc2: "We protect Node.js backends using Helmet security headers, rate limiting (express-rate-limit/Redis), JWT/OAuth2 authentication, payload sanitization, and SQL/NoSQL injection prevention."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly engagement models with zero hidden fees. Scale your Node.js developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and database schemas are completely secured. We sign bilateral NDAs and adhere strictly to OWASP guidelines."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product release cycle with full-stack TypeScript engineers who understand both frontend API contracts and backend data layers."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Node.js, NestJS, Express, TypeScript, Prisma, MongoDB, PostgreSQL, Redis, and Docker."
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

export default NodejsDeveloper;
