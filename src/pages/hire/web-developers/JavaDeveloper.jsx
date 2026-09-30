import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const JavaDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Java"
      pageTitle="Hire Dedicated Java Developers | Spring Boot & Enterprise Experts | The Digital Connect"
      metaDescription="Hire certified Java developers from The Digital Connect. Spring Boot, microservices, enterprise cloud backends, Kafka, Hibernate, and flexible hiring models."
      tagline="We successfully scale enterprise Java backends, Spring Boot microservices & cloud architectures"
      heroDescription="We have a group of gifted and dedicated Java developers who specialize in enterprise application development, Spring Boot microservices, high-volume transactional systems, Kafka streaming, and secure cloud architectures. Get in touch with us for your free quote."
      heroBullets={[
        "Enterprise Spring Boot 3.x, Spring Cloud, and Quarkus high-performance microservices",
        "High-volume transactional systems with Kafka, RabbitMQ, and relational/NoSQL databases",
        "Cloud-native deployments on AWS, Azure, and Google Cloud with Docker and Kubernetes"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "110+", label: "Java Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Robust, Mission-Critical Java Solutions",
        card1Text1: "Does your enterprise require senior Java developers? We at The Digital Connect provide cutting-edge, all-inclusive Java software engineering solutions. We help enterprise businesses and fintech organizations worldwide construct secure, high-concurrency systems that withstand massive loads with 99.99% uptime.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Java developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its IT infrastructure by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Spring Boot & Cloud Engineers",
        card2Text1: "One of the finest enterprise development firms, The Digital Connect provides you with a dedicated team of Java developers. To build sophisticated backends and banking-grade architectures, our certified developers are trained engineers with deep expertise in Java 17/21, Spring Framework, Hibernate, and distributed databases.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with clean OOP architecture, comprehensive JUnit/Mockito testing, and enterprise security compliance."
      }}
      whyChoosePoints={[
        {
          title: "Spring Boot Microservices",
          desc: "Modular, distributed microservices built with Spring Boot, Spring Cloud Gateway, Eureka, and OpenFeign."
        },
        {
          title: "Enterprise Web Applications",
          desc: "Robust, scalable web applications and REST/GraphQL APIs with Spring Security, OAuth2, and JWT authorization."
        },
        {
          title: "Event Streaming with Kafka",
          desc: "High-throughput asynchronous data processing and real-time event streaming architectures with Apache Kafka."
        },
        {
          title: "Legacy Java Migration & Upgrades",
          desc: "Seamless upgrades from legacy Java 8/11 to Java 17/21 LTS with performance boosts and modular refactoring."
        },
        {
          title: "Database Performance & Hibernate",
          desc: "Optimized relational database interactions with Hibernate/JPA, connection pooling (HikariCP), and caching (Ehcache/Redis)."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Enterprise Agile sprint delivery with strict code reviews, SonarQube quality gates, and automated CI/CD pipelines."
        }
      ]}
      techHighlight={{
        title1: "Spring Boot 3.x & Cloud-Native Concurrency",
        desc1: "Our Java engineers harness modern Java 21 features like Virtual Threads (Project Loom) and Spring Boot 3.x to execute hundreds of thousands of concurrent operations with negligible system resource consumption.",
        title2: "Enterprise Security & High Availability Architecture",
        desc2: "We engineer resilient backends featuring OAuth2 / SAML authentication, Spring Security hardening, distributed circuit breakers (Resilience4j), and multi-region cloud clustering."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Predictable hourly or monthly billing models with zero hidden overheads. Scale developer capacity flexibly according to project sprints."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "We enforce strict NDAs, IP protection, and banking-grade security protocols across all development environments."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Instantly augment your in-house teams with enterprise-vetted Java developers ready to deliver from Day 1."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Senior engineers skilled in Java 21, Spring Boot, Microservices, Hibernate, Kafka, Docker, Kubernetes, and PostgreSQL."
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

export default JavaDeveloper;
