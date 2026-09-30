import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const DevsecopsDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="DevSecOps"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated DevSecOps Developers | Cloud Security & Compliance Experts | The Digital Connect"
      metaDescription="Hire certified DevSecOps engineers from The Digital Connect. Shift-left security, SAST/DAST automation, vulnerability scanning, SOC2/HIPAA compliance, and flexible hiring models."
      tagline="We successfully embed automated security, vulnerability scanning & compliance into your CI/CD pipelines"
      heroDescription="We have a group of gifted and dedicated DevSecOps engineers who specialize in shifting security left by integrating automated SAST/DAST scanning, container vulnerability management, secrets protection, and automated compliance into your continuous delivery workflows. Get in touch with us for your free quote."
      heroBullets={[
        "Shift-left automated security integration across GitHub Actions, GitLab CI, and Jenkins",
        "Continuous vulnerability scanning with Snyk, SonarQube, Trivy, OWASP ZAP, and Aqua Security",
        "Regulatory compliance automation for SOC 2 Type II, ISO 27001, HIPAA, and GDPR standards"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "80+", label: "Secure Pipelines Implemented" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Automated, Proactive DevSecOps Solutions",
        card1Text1: "Does your organization need certified DevSecOps engineers? We at The Digital Connect provide cutting-edge, all-inclusive DevSecOps engineering solutions. We help enterprise businesses eliminate security bottlenecks by embedding automated security testing directly into developer workflows.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced DevSecOps developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the security posture of its software delivery by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Cloud Security & Compliance Specialists",
        card2Text1: "One of the finest cloud security firms, The Digital Connect provides you with a dedicated team of DevSecOps engineers. To protect multi-cloud architectures, our certified engineers possess deep expertise in Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), Software Composition Analysis (SCA), and Infrastructure as Code security.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with zero unpatched zero-days, automated secrets scanning, and audit-ready compliance reporting."
      }}
      whyChoosePoints={[
        {
          title: "SAST / DAST Automated Scanning",
          desc: "Integrating SonarQube, Snyk, Checkmarx, and OWASP ZAP into CI/CD pipelines to block vulnerable code before merging."
        },
        {
          title: "Container & Kubernetes Security",
          desc: "Scanning Docker images with Trivy/Clair, enforcing Falco runtime security, and configuring OPA Gatekeeper policies."
        },
        {
          title: "Secrets Management & Zero Trust",
          desc: "Eliminating hardcoded credentials with HashiCorp Vault, AWS Secrets Manager, GitGuardian, and automated secret rotation."
        },
        {
          title: "IaC Security Scanning",
          desc: "Scanning Terraform and Kubernetes manifests for misconfigurations using tfsec, Checkov, and Kube-bench."
        },
        {
          title: "Compliance Automation (SOC 2 & HIPAA)",
          desc: "Automating security controls, audit logs, and infrastructure compliance policies with Drata, Vanta, and AWS Config."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, automated security reports, and actionable vulnerability remediation roadmaps."
        }
      ]}
      techHighlight={{
        title1: "Zero-Friction Developer-First Security",
        desc1: "Our DevSecOps engineers configure security guardrails directly in IDEs and Git pull requests, providing developers with instant remediation guidance without slowing down sprint velocity.",
        title2: "Continuous Cloud Security Posture Management (CSPM)",
        desc2: "We deploy automated CSPM agents (Wiz, Prisma Cloud, AWS Security Hub) to continuously monitor multi-cloud environments for drift, exposed S3 buckets, and overly permissive IAM roles."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly or monthly hiring models with zero hidden fees. Scale your security engineering bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and security findings are 100% confidential. We enforce strict bilateral NDAs and encrypted communication."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your path to SOC 2 or ISO certification by hiring certified DevSecOps specialists who implement automated controls."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Snyk, SonarQube, HashiCorp Vault, Terraform, Docker, Kubernetes, AWS, and Azure."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all security pipelines, policies, and compliance documentation."
        }
      ]}
    />
  );
};

export default DevsecopsDeveloper;
