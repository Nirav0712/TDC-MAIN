import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const NetCoreDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName=".NET Core"
      pageTitle="Hire Dedicated .NET Core Developers | ASP.NET Core & C# Experts | The Digital Connect"
      metaDescription="Hire certified .NET Core developers from The Digital Connect. C#, ASP.NET Core, microservices, cross-platform cloud backends, Azure, and flexible hiring models."
      tagline="We successfully engineer high-performance, cross-platform .NET Core web apps & microservices"
      heroDescription="We have a group of gifted and dedicated .NET Core developers who specialize in building cross-platform enterprise web applications, high-throughput microservices, ASP.NET Core Web APIs, gRPC services, and Azure cloud solutions. Get in touch with us for your free quote."
      heroBullets={[
        "Modern .NET 8 LTS & C# 12 cross-platform microservices and web applications",
        "High-performance RESTful Web APIs, gRPC streaming, and SignalR real-time hubs",
        "Entity Framework Core optimization, SQL Server / PostgreSQL, and Azure cloud integration"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "115+", label: ".NET Core Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Performance, Cross-Platform .NET Core Solutions",
        card1Text1: "Does your company need senior .NET Core engineers? We at The Digital Connect provide cutting-edge, all-inclusive .NET Core development solutions. We help enterprise businesses worldwide construct lightning-fast, modular web applications and microservices that run natively on Linux, Windows, and Docker containers.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced .NET Core developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Microsoft C# & Microservices Engineers",
        card2Text1: "One of the finest Microsoft technology firms, The Digital Connect provides you with a dedicated team of .NET Core developers. To build sophisticated web platforms and cloud-native systems, our certified developers are trained engineers with deep expertise in C# 12, ASP.NET Core, EF Core, Docker, and Azure.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with clean Clean Architecture / DDD, automated xUnit testing, and top-tier enterprise throughput."
      }}
      whyChoosePoints={[
        {
          title: ".NET Core Microservices",
          desc: "Decoupled, containerized microservices built with ASP.NET Core, Docker, Kubernetes, and event-driven RabbitMQ / Kafka."
        },
        {
          title: "High-Throughput Web APIs",
          desc: "Low-latency REST and gRPC API backends optimized for high concurrent enterprise transactional throughput."
        },
        {
          title: "Real-Time SignalR Solutions",
          desc: "Real-time dashboards, live stock feeds, chat systems, and collaborative web tools powered by ASP.NET Core SignalR."
        },
        {
          title: "Legacy .NET to Core Migration",
          desc: "Migrating legacy .NET Framework 4.x codebases to modern .NET 8 LTS for cross-platform Linux hosting and cost reduction."
        },
        {
          title: "Azure Cloud & Serverless",
          desc: "Developing and deploying scalable Azure Functions, Azure App Services, Cosmos DB, and automated Azure DevOps CI/CD."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, comprehensive test coverage, and strict adherence to enterprise delivery milestones."
        }
      ]}
      techHighlight={{
        title1: "Sub-Millisecond Performance with .NET 8",
        desc1: "Our .NET Core developers leverage .NET 8 optimizations (Span<T>, Memory<T>, Native AOT compilation) to deliver blazing-fast microservices with minimal CPU and memory footprints.",
        title2: "Clean Architecture & Domain-Driven Design (DDD)",
        desc2: "We construct enterprise codebases using Clean Architecture principles, MediatR CQRS patterns, and Entity Framework Core to ensure your software remains modular, testable, and future-proof."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly hiring models with zero hidden fees. Easily scale developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and intellectual property are fully secured. We sign bilateral NDAs and adhere strictly to enterprise security protocols."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product release cycle with senior .NET Core engineers who understand cross-platform cloud architectures."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Microsoft engineers skilled in C#, .NET 8, ASP.NET Core, EF Core, SQL Server, Docker, Kubernetes, and Azure."
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

export default NetCoreDeveloper;
