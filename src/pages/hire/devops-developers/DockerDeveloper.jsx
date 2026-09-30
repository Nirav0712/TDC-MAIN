import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const DockerDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Docker"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated Docker Developers | Containerization & Microservices Experts | The Digital Connect"
      metaDescription="Hire certified Docker developers from The Digital Connect. Multi-stage Dockerfiles, Docker Compose, container security, lightweight images, and flexible hiring models."
      tagline="We successfully containerize, optimize & secure applications with enterprise Docker workflows"
      heroDescription="We have a group of gifted and dedicated Docker engineers who specialize in architecting lightweight multi-stage Docker builds, Docker Compose development environments, image security scanning, and seamless cloud container deployments. Get in touch with us for your free quote."
      heroBullets={[
        "Ultra-lightweight, secure multi-stage Dockerfiles optimized for minimal image size",
        "Multi-container local & staging orchestration using Docker Compose and Docker Swarm",
        "Automated image building and vulnerability scanning integrated into CI/CD pipelines"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "150+", label: "Docker Environments Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Standardized, Lightweight Docker Container Solutions",
        card1Text1: "Does your company need expert Docker engineers? We at The Digital Connect provide cutting-edge, all-inclusive containerization engineering solutions. We help software teams eliminate 'it works on my machine' issues and achieve 100% environment parity across development, staging, and production.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Docker developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its development velocity by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Containerization & DevOps Specialists",
        card2Text1: "One of the finest DevOps consulting firms, The Digital Connect provides you with a dedicated team of Docker developers. To build sophisticated container workflows, our certified developers are trained engineers with deep expertise in Linux namespaces, cgroups, rootless containers, and registry management.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with fast image build caches, minimal image vulnerabilities, and automated registry sync."
      }}
      whyChoosePoints={[
        {
          title: "Multi-Stage Dockerfile Optimization",
          desc: "Slashing image sizes from gigabytes to megabytes using multi-stage builds, Alpine/Distroless bases, and layer caching."
        },
        {
          title: "Docker Compose Development Stacks",
          desc: "Spinning up complete local development ecosystems (databases, queues, microservices) with a single command."
        },
        {
          title: "Container Security & Scanning",
          desc: "Integrating automated image vulnerability scanning with Trivy, Snyk, and Docker Scout into CI pipelines."
        },
        {
          title: "Registry & Cache Automation",
          desc: "Setting up private container registries (ECR, ACR, Docker Hub, Harbor) with automated cleanup policies."
        },
        {
          title: "Microservices Containerization",
          desc: "Containerizing Node.js, Python, Java, Go, and .NET applications with optimized process supervision and signal handling."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, clean code reviews, automated CI/CD pipelines, and post-launch SLAs."
        }
      ]}
      techHighlight={{
        title1: "Distroless & Rootless Container Security",
        desc1: "Our Docker engineers build hardened containers that run without root privileges and exclude shell binaries, drastically shrinking the attack surface in production environments.",
        title2: "BuildKit Caching & Fast CI/CD Cycles",
        desc2: "We leverage Docker BuildKit remote cache mounts to cut build and deployment times in GitHub Actions and GitLab CI by up to 80%."
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
          desc: "Your source code and container configs are completely protected. We enforce strict bilateral NDAs and security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Onboard new developers in minutes rather than days with turnkey Dockerized development environments."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Docker, Docker Compose, Linux, Kubernetes, Terraform, Bash, and CI/CD."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Dockerfiles, Compose scripts, and deployment manifests."
        }
      ]}
    />
  );
};

export default DockerDeveloper;
