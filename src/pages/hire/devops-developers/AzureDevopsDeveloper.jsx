import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const AzureDevopsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Azure DevOps"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated Azure DevOps Developers | Microsoft Cloud & CI/CD Experts | The Digital Connect"
      metaDescription="Hire certified Azure DevOps engineers from The Digital Connect. Azure Pipelines, ARM/Bicep, Terraform, Kubernetes (AKS), and flexible hiring models."
      tagline="We successfully engineer automated CI/CD pipelines & secure Microsoft Azure cloud infrastructure"
      heroDescription="We have a group of gifted and dedicated Azure DevOps engineers who specialize in automating enterprise CI/CD pipelines with Azure Pipelines, provisioning Infrastructure-as-Code (Terraform, Bicep), managing AKS clusters, and enforcing cloud compliance. Get in touch with us for your free quote."
      heroBullets={[
        "Automated multi-stage CI/CD pipelines with Azure Pipelines and GitHub Actions",
        "Infrastructure as Code (IaC) using Bicep, ARM templates, and Terraform",
        "Enterprise Kubernetes (AKS) cluster deployment, Azure Monitor, and zero-trust security"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "95+", label: "Azure DevOps Pipelines Deployed" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Automated, Enterprise Azure Cloud & CI/CD Solutions",
        card1Text1: "Does your company need senior Azure DevOps engineers? We at The Digital Connect provide cutting-edge, all-inclusive Azure cloud engineering solutions. We help enterprise businesses worldwide achieve continuous delivery, rapid deployment velocity, and high infrastructure reliability on Microsoft Azure.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Azure DevOps developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its cloud strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Microsoft Azure DevOps Specialists",
        card2Text1: "One of the finest cloud engineering firms, The Digital Connect provides you with a dedicated team of Azure DevOps developers. To build sophisticated CI/CD pipelines and multi-tenant cloud environments, our certified developers are trained engineers with deep expertise in Azure Repos, Pipelines, Test Plans, Artifacts, and Azure Active Directory.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with automated compliance policies, blue-green zero-downtime releases, and robust cost optimization."
      }}
      whyChoosePoints={[
        {
          title: "Azure Pipelines & GitHub Actions",
          desc: "Multi-stage YAML pipeline automation with approval gates, automated smoke testing, and artifact versioning."
        },
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Deterministic cloud provisioning using Terraform, Azure Bicep, and modular ARM templates for multi-environment parity."
        },
        {
          title: "Azure Kubernetes Service (AKS)",
          desc: "Production-ready AKS container orchestration with auto-scaling, Helm charts, and ingress controllers."
        },
        {
          title: "Azure Security & Key Vault",
          desc: "Enforcing zero-trust network policies, role-based access control (RBAC), and secrets rotation with Azure Key Vault."
        },
        {
          title: "FinOps & Cloud Cost Optimization",
          desc: "Continuous monitoring of cloud consumption, reserved instances analysis, and cost-reduction policies via Azure Advisor."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, comprehensive infrastructure testing, and strict SLA compliance."
        }
      ]}
      techHighlight={{
        title1: "Zero-Downtime Blue/Green & Canary Deployments",
        desc1: "Our Azure DevOps engineers implement traffic routing mechanisms via Azure Traffic Manager and App Service deployment slots, ensuring instantaneous rollbacks with zero disruption to end users.",
        title2: "Centralized Monitoring & Log Analytics",
        desc2: "We set up end-to-end cloud telemetry using Azure Monitor, Application Insights, and Log Analytics workbooks for proactive anomaly detection and automated incident resolution."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly or monthly engagement models with zero hidden fees. Scale your cloud engineering capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your infrastructure manifests and cloud credentials are 100% protected. We enforce strict bilateral NDAs and Microsoft compliance."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate software release frequency from monthly cycles to multiple daily automated deployments with zero friction."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Azure Solutions Architects and DevOps Engineers skilled in Azure, Terraform, Bicep, Kubernetes, Docker, and PowerShell."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all IaC repositories, pipeline scripts, and cloud configurations."
        }
      ]}
    />
  );
};

export default AzureDevopsDeveloper;
