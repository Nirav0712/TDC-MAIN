import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const CicdDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="CI/CD"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated CI/CD Developers | Continuous Integration & Delivery Experts | The Digital Connect"
      metaDescription="Hire certified CI/CD pipeline engineers from The Digital Connect. GitHub Actions, GitLab CI, Jenkins, automated testing, zero-downtime releases, and flexible hiring models."
      tagline="We successfully automate continuous integration & deployment pipelines for high-velocity teams"
      heroDescription="We have a group of gifted and dedicated CI/CD engineers who specialize in architecting fast, reliable, and secure automated delivery pipelines using GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, and ArgoCD. Get in touch with us for your free quote."
      heroBullets={[
        "Automated continuous build, test, and release pipelines with GitHub Actions & GitLab CI",
        "Zero-downtime deployment strategies: Blue/Green, Canary releases, and rolling updates",
        "Integrated automated unit testing, security scanning, code quality gates, and notifications"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "200+", label: "CI/CD Pipelines Built" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Speed, Automated CI/CD Pipeline Solutions",
        card1Text1: "Does your development team need CI/CD automation experts? We at The Digital Connect provide cutting-edge, all-inclusive continuous integration and delivery engineering solutions. We help software organizations worldwide eliminate manual deployments and reduce release times from hours to minutes.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced CI/CD developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve developer productivity by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Automation & Release Engineers",
        card2Text1: "One of the finest DevOps engineering firms, The Digital Connect provides you with a dedicated team of CI/CD developers. To construct foolproof delivery pipelines, our certified engineers possess deep expertise in pipeline caching, parallel job execution, artifact versioning, and environment management.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with zero failed deployments, automated rollbacks, and instant Slack/Teams alerting."
      }}
      whyChoosePoints={[
        {
          title: "GitHub Actions & GitLab CI Mastery",
          desc: "Writing modular, reusable composite actions and pipeline workflows with robust secret masking and caching."
        },
        {
          title: "Zero-Downtime Deployment Strategies",
          desc: "Automating Blue/Green, Canary, and rolling deployments to AWS, GCP, Azure, and Kubernetes clusters."
        },
        {
          title: "Quality Gates & Automated Testing",
          desc: "Embedding SonarQube, Jest, PyTest, Cypress, and security linters into pipelines to block substandard commits."
        },
        {
          title: "Pipeline Speed Optimization",
          desc: "Slashing build times by up to 70% using Docker layer caching, dependency cache mounts, and parallel test runners."
        },
        {
          title: "Multi-Environment Promotion",
          desc: "Structuring clean promotion pipelines from Dev &rarr; Staging &rarr; UAT &rarr; Production with manual approval gates."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, automated testing, and comprehensive pipeline documentation."
        }
      ]}
      techHighlight={{
        title1: "Automated Instant Rollbacks & Audit Trails",
        desc1: "Our CI/CD engineers implement automated health checks during deployment; if anomalous error rates are detected post-release, the pipeline triggers an immediate automatic rollback with detailed audit logging.",
        title2: "Secure Credential Handling & OIDC",
        desc2: "We eliminate long-lived cloud API keys in CI/CD by configuring OpenID Connect (OIDC) identity federation with AWS, GCP, and Azure for secure, short-lived token authentication."
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
          desc: "Your source code and pipeline secrets are completely protected. We enforce strict bilateral NDAs and security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Empower your product developers to ship features safely and continuously multiple times per day."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in GitHub Actions, GitLab CI, Jenkins, ArgoCD, Docker, Terraform, and Bash/Python."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all pipeline YAML configurations, scripts, and documentation."
        }
      ]}
    />
  );
};

export default CicdDeveloper;
