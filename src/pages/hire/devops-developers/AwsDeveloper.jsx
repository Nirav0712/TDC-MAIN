import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const AwsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="AWS Cloud"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated AWS Developers | Certified AWS Cloud Engineers | The Digital Connect"
      metaDescription="Hire certified AWS developers from The Digital Connect. Serverless Lambda, ECS/EKS Kubernetes, Terraform, CloudFormation, and flexible hiring models."
      tagline="We successfully architect resilient, auto-scaling AWS cloud infrastructure & serverless backends"
      heroDescription="We have a group of gifted and dedicated AWS developers and cloud architects who specialize in building fault-tolerant cloud architectures, serverless backends (AWS Lambda), container orchestration with ECS/EKS, and automated CI/CD pipelines. Get in touch with us for your free quote."
      heroBullets={[
        "Certified AWS Solutions Architects & DevOps Professionals with deep cloud expertise",
        "Serverless microservices with AWS Lambda, API Gateway, DynamoDB, and EventBridge",
        "Infrastructure as Code (IaC) with Terraform, AWS CDK, and automated CloudFormation"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "140+", label: "AWS Environments Deployed" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Resilient, Cost-Optimized AWS Cloud Solutions",
        card1Text1: "Does your company need certified AWS engineers? We at The Digital Connect provide cutting-edge, all-inclusive Amazon Web Services engineering solutions. We help startups and global enterprises design auto-scaling, secure, and cost-effective cloud architectures that maintain 99.99% availability.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced AWS developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its cloud strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified AWS Solutions Architects",
        card2Text1: "One of the finest cloud consulting firms, The Digital Connect provides you with a dedicated team of AWS developers. To construct secure multi-region platforms, our certified developers are trained engineers with deep expertise in EC2, S3, RDS, ECS, EKS, CloudFront, IAM, and AWS Well-Architected Framework.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with zero security vulnerabilities, optimized AWS billing, and high-performance computing."
      }}
      whyChoosePoints={[
        {
          title: "Serverless & Event-Driven Apps",
          desc: "Building highly scalable, pay-per-execution backends with AWS Lambda, Step Functions, SQS, SNS, and DynamoDB."
        },
        {
          title: "Container Orchestration (ECS/EKS)",
          desc: "Deploying production Docker microservices using Amazon ECS (Fargate) and Amazon EKS Kubernetes clusters."
        },
        {
          title: "Terraform & AWS CDK IaC",
          desc: "Automating cloud infrastructure provisioning with reusable Terraform modules and TypeScript AWS CDK."
        },
        {
          title: "Database Migration & RDS Tuning",
          desc: "Zero-downtime database migrations to Amazon Aurora, PostgreSQL, MySQL, and DynamoDB global tables."
        },
        {
          title: "AWS FinOps & Cost Reduction",
          desc: "Slashing monthly AWS bills by 30-50% with Spot instances, Compute Savings Plans, and automated resource scheduling."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, comprehensive infrastructure testing, and strict SLA compliance."
        }
      ]}
      techHighlight={{
        title1: "AWS Well-Architected Framework Alignment",
        desc1: "Our AWS engineers align every cloud system with the 6 pillars of the AWS Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
        title2: "Airtight IAM Security & SOC2 Compliance",
        desc2: "We implement least-privilege IAM policies, AWS KMS customer-managed encryption keys, GuardDuty threat detection, and AWS WAF edge firewall protection."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden fees. Scale developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your infrastructure configurations and IAM keys are 100% protected. We enforce strict bilateral NDAs and AWS security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your cloud roadmap with certified AWS engineers who design, deploy, and maintain scalable infrastructure."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in AWS Lambda, ECS, EKS, Terraform, CloudFront, Aurora, Docker, and Python/Node.js."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Terraform code, CloudFormation templates, and AWS configurations."
        }
      ]}
    />
  );
};

export default AwsDeveloper;
