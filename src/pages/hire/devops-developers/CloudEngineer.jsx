import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const CloudEngineer = () => {
  return (
    <DeveloperHireTemplate
      techName="Cloud Infrastructure"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated Cloud Engineers | Multi-Cloud Architects | The Digital Connect"
      metaDescription="Hire certified Cloud Engineers from The Digital Connect. AWS, Azure, Google Cloud (GCP), cloud migration, cost optimization, and flexible hiring models."
      tagline="We successfully architect, migrate & scale resilient multi-cloud enterprise infrastructure"
      heroDescription="We have a group of gifted and dedicated Cloud Engineers who specialize in multi-cloud architecture (AWS, Azure, GCP), seamless cloud migrations, disaster recovery planning, cloud cost optimization (FinOps), and 24/7 infrastructure reliability. Get in touch with us for your free quote."
      heroBullets={[
        "Multi-cloud architecture design across AWS, Microsoft Azure, and Google Cloud Platform (GCP)",
        "Seamless on-premise to cloud and cross-cloud workload migrations with zero data loss",
        "Automated FinOps cost governance, 99.99% high availability, and 24/7 cloud monitoring"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "180+", label: "Cloud Systems Architected" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Scalable, High-Availability Multi-Cloud Solutions",
        card1Text1: "Does your company need certified Cloud Engineers? We at The Digital Connect provide cutting-edge, all-inclusive cloud engineering and architecture solutions. We help enterprise businesses design, migrate, and maintain cloud infrastructure that guarantees high performance, elastic scalability, and maximum data security.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Cloud Engineers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the reliability of its IT infrastructure by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Multi-Cloud Architects",
        card2Text1: "One of the finest cloud consulting firms, The Digital Connect provides you with a dedicated team of Cloud Engineers. To construct enterprise cloud platforms, our certified engineers possess deep expertise in compute, storage, networking, database replication, and hybrid cloud setups.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with zero unexpected downtime, optimized cloud spend, and strict SOC 2 / ISO compliance."
      }}
      whyChoosePoints={[
        {
          title: "Multi-Cloud & Hybrid Cloud",
          desc: "Architecting vendor-agnostic infrastructure across AWS, Azure, and GCP to prevent single-vendor lock-in."
        },
        {
          title: "Zero-Downtime Cloud Migration",
          desc: "Migrating legacy monoliths, on-premise servers, and databases to modern cloud architectures seamlessly."
        },
        {
          title: "Cloud Cost Optimization (FinOps)",
          desc: "Slashing monthly cloud infrastructure bills by 30-50% with rightsizing, auto-scaling, and reserved capacity."
        },
        {
          title: "High Availability & Disaster Recovery",
          desc: "Configuring multi-region replication, automated failover routing, and automated backups with RTO/RPO guarantees."
        },
        {
          title: "Cloud Networking & Security",
          desc: "Setting up secure VPCs, transit gateways, Cloudflare WAF, VPNs, and zero-trust access controls."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, comprehensive infrastructure testing, and continuous monitoring."
        }
      ]}
      techHighlight={{
        title1: "Elastic Cloud Auto-Scaling & Peak Traffic Management",
        desc1: "Our Cloud Engineers architect elastic compute pools and distributed CDNs capable of scaling from idle to millions of concurrent users during flash sales or traffic spikes without latency penalties.",
        title2: "Centralized Observability & Proactive Alerting",
        desc2: "We integrate centralized telemetry stacks (Datadog, Grafana, OpenTelemetry, CloudWatch) to provide real-time dashboard visibility and instant automated incident escalation."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your cloud engineering capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your cloud infrastructure credentials and data are 100% secured. We enforce strict bilateral NDAs and security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your cloud transformation with certified multi-cloud architects ready to optimize your infrastructure."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in AWS, Azure, GCP, Terraform, Kubernetes, Docker, Linux, and Cloud Networking."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all cloud configurations, IaC code, and documentation."
        }
      ]}
    />
  );
};

export default CloudEngineer;
