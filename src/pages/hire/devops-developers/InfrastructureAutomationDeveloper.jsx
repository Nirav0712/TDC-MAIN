import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const InfrastructureAutomationDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Infrastructure Automation"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated Infrastructure Automation Developers | Terraform & Ansible Experts | The Digital Connect"
      metaDescription="Hire certified Infrastructure Automation developers from The Digital Connect. Terraform, Ansible, Pulumi, CloudFormation, and flexible hiring models."
      tagline="We successfully automate enterprise cloud provisioning & server configuration with IaC"
      heroDescription="We have a group of gifted and dedicated Infrastructure Automation engineers who specialize in provisioning repeatable, declarative cloud infrastructure using Terraform, Ansible, Pulumi, CloudFormation, and Bash/Python scripting. Get in touch with us for your free quote."
      heroBullets={[
        "Declarative Infrastructure as Code (IaC) with Terraform, OpenTofu, and Pulumi",
        "Automated configuration management and server hardening using Ansible and Chef",
        "Automated multi-environment provisioning (Dev, Staging, Prod) with drift detection"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "120+", label: "IaC Environments Automated" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Repeatable, Error-Free Infrastructure Automation Solutions",
        card1Text1: "Does your company need expert Infrastructure Automation developers? We at The Digital Connect provide cutting-edge, all-inclusive IaC engineering solutions. We help software organizations eliminate manual cloud console clicking and achieve 100% predictable, version-controlled infrastructure.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Infrastructure Automation developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the speed of environment spinning by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Terraform & Ansible Specialists",
        card2Text1: "One of the finest infrastructure engineering firms, The Digital Connect provides you with a dedicated team of automation developers. To construct modular cloud infrastructure, our certified developers possess deep expertise in state management, module registries, drift remediation, and immutable server patterns.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with zero configuration drift, rapid disaster recovery rebuilding, and audit-ready versioning."
      }}
      whyChoosePoints={[
        {
          title: "Terraform & OpenTofu IaC",
          desc: "Writing modular, DRY Terraform code with remote state locking (S3/DynamoDB) and automated state migration."
        },
        {
          title: "Ansible Configuration Playbooks",
          desc: "Automating software installation, OS patching, CIS benchmark security hardening, and service management."
        },
        {
          title: "Pulumi Modern Language IaC",
          desc: "Provisioning cloud resources using general-purpose programming languages (TypeScript, Python, Go) with Pulumi."
        },
        {
          title: "Automated Drift Detection",
          desc: "Running continuous scheduled pipeline scans to detect and alert on unauthorized manual infrastructure modifications."
        },
        {
          title: "Multi-Cloud Modular Modules",
          desc: "Creating standardized, reusable infrastructure modules for VPCs, Kubernetes clusters, databases, and IAM across clouds."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, automated Terratest validation, and comprehensive module documentation."
        }
      ]}
      techHighlight={{
        title1: "Automated Environment Cloning & Teardown",
        desc1: "Our automation engineers empower development teams to spin up ephemeral preview environments on demand with a single Git branch commit and automatically tear them down to save cloud costs.",
        title2: "Immutable Infrastructure with Packer & Cloud-Init",
        desc2: "We build pre-baked, security-hardened Golden AMIs and VM images using HashiCorp Packer, dramatically speeding up auto-scaling launch times."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale developer capacity flexibly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your infrastructure code and cloud secrets are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Provision entire production-ready cloud stacks in minutes rather than weeks with battle-tested IaC modules."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Terraform, Ansible, Pulumi, AWS, Azure, GCP, Linux, Python, and Bash."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Terraform modules, Ansible playbooks, and scripts."
        }
      ]}
    />
  );
};

export default InfrastructureAutomationDeveloper;
