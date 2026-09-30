import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const AspnetDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="ASP.NET"
      pageTitle="Hire Dedicated ASP.NET Developers | C# & Microsoft Web Experts | The Digital Connect"
      metaDescription="Hire certified ASP.NET developers from The Digital Connect. C#, ASP.NET MVC, Web API, Azure cloud integration, SQL Server, and flexible hiring models."
      tagline="We successfully engineer enterprise Microsoft .NET web applications & cloud platforms"
      heroDescription="We have a group of gifted and dedicated ASP.NET developers who specialize in building enterprise-grade web applications, ASP.NET Web APIs, modern C# backends, SQL Server databases, and Azure cloud solutions. Get in touch with us for your free quote."
      heroBullets={[
        "Enterprise C# and ASP.NET MVC / Web API application development",
        "High-performance SQL Server database optimization, Entity Framework, and Dapper",
        "Seamless Microsoft Azure cloud integration, microservices, and active directory security"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "100+", label: "ASP.NET Solutions Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Enterprise-Grade Microsoft .NET Web Solutions",
        card1Text1: "Does your organization require seasoned ASP.NET developers? We at The Digital Connect provide cutting-edge, all-inclusive ASP.NET programming solutions. We help enterprise businesses worldwide construct high-security, high-performance web applications that integrate seamlessly with Microsoft enterprise ecosystems.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced ASP.NET developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its IT infrastructure by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Microsoft C# & Azure Engineers",
        card2Text1: "One of the finest enterprise development firms, The Digital Connect provides you with a dedicated team of ASP.NET developers. To build sophisticated web applications and transactional systems, our certified developers are trained engineers with deep expertise in C#, ASP.NET Core, Entity Framework, and SQL Server.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with clean N-tier architecture, automated xUnit testing, and compliance with industry standards."
      }}
      whyChoosePoints={[
        {
          title: "ASP.NET MVC & Web API",
          desc: "Architecting modular, maintainable web applications and high-throughput RESTful Web APIs using modern C#."
        },
        {
          title: "Legacy .NET Framework Migration",
          desc: "Upgrading legacy ASP.NET Web Forms and .NET 4.x applications to modern ASP.NET Core and .NET 8 LTS."
        },
        {
          title: "Azure Cloud & DevOps Integration",
          desc: "Deploying scalable serverless functions, Azure App Services, Azure SQL, and automated Azure DevOps pipelines."
        },
        {
          title: "Database Performance & ORM",
          desc: "High-performance data access using Entity Framework Core, Dapper micro-ORM, and SQL Server stored procedures."
        },
        {
          title: "Enterprise Identity & Security",
          desc: "Implementing Azure Active Directory (AAD), OAuth2/OpenID Connect, and ASP.NET Identity with role-based access."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile sprints with daily standups, comprehensive unit/integration testing, and strict enterprise milestone deliveries."
        }
      ]}
      techHighlight={{
        title1: "Microsoft Ecosystem & Cloud Scalability",
        desc1: "Our ASP.NET developers leverage the full power of the Microsoft cloud ecosystem (Azure Functions, Service Bus, Redis Cache, and Cosmos DB) to build resilient, auto-scaling enterprise platforms.",
        title2: "Modern Cross-Platform Web Architecture",
        desc2: "We combine high-performance ASP.NET Core web backends with React or Angular frontends, delivering responsive, low-latency user interfaces backed by robust enterprise C# logic."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly or monthly hiring models with zero hidden fees. Ramp up developer bandwidth smoothly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your proprietary code and database are 100% secured. We enforce strict NDAs and Microsoft enterprise security protocols."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Augment your engineering team with certified C# / .NET specialists ready to deploy code from Day 1."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Microsoft developers proficient in C#, ASP.NET Core, Web API, EF Core, SQL Server, and Azure."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You maintain 100% intellectual property and complete ownership of all repository code, schemas, and CI/CD pipelines."
        }
      ]}
    />
  );
};

export default AspnetDeveloper;
