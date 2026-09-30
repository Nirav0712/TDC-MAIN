import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const KubernetesDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Kubernetes"
      pageCategory="DevOps Developers"
      categoryUrl="/hire-team/devops-developers"
      pageTitle="Hire Dedicated Kubernetes Developers | K8s Cluster & Cloud-Native Experts | The Digital Connect"
      metaDescription="Hire certified Kubernetes (K8s) engineers from The Digital Connect. EKS, GKE, AKS, Helm charts, service mesh (Istio), GitOps (ArgoCD), and flexible hiring models."
      tagline="We successfully architect, scale & automate enterprise Kubernetes (K8s) clusters in the cloud"
      heroDescription="We have a group of gifted and dedicated Kubernetes (K8s) engineers who specialize in production cluster design, GitOps automation with ArgoCD/Flux, Helm packaging, service mesh implementation with Istio, and multi-cloud scalability. Get in touch with us for your free quote."
      heroBullets={[
        "Production-grade Kubernetes cluster management on AWS (EKS), Google Cloud (GKE), and Azure (AKS)",
        "GitOps continuous delivery workflows with ArgoCD, Flux, Helm 3, and Kustomize",
        "Comprehensive observability with Prometheus, Grafana, OpenTelemetry, and Istio Service Mesh"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "90+", label: "K8s Clusters Managed" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Enterprise, Resilient Kubernetes Cloud Solutions",
        card1Text1: "Does your company need Certified Kubernetes Administrators (CKA)? We at The Digital Connect provide cutting-edge, all-inclusive Kubernetes engineering solutions. We help enterprise businesses run microservices with auto-healing, auto-scaling, and 99.99% uptime across hybrid and multi-cloud environments.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Kubernetes developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its cloud strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified CKA & CKAD Cloud Engineers",
        card2Text1: "One of the finest cloud-native engineering firms, The Digital Connect provides you with a dedicated team of Kubernetes developers. To construct high-resilience container platforms, our certified engineers possess deep expertise in Pod lifecycles, Ingress routing, NetworkPolicies, Helm charts, and RBAC security.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique enterprise demands with zero cluster outages, horizontal/vertical pod auto-scaling, and strict cost controls."
      }}
      whyChoosePoints={[
        {
          title: "Managed Cloud K8s (EKS / GKE / AKS)",
          desc: "Architecting, upgrading, and managing production managed Kubernetes clusters with Terraform automation."
        },
        {
          title: "GitOps Delivery with ArgoCD",
          desc: "Automating declarative application deployments and drift detection directly from Git repositories using ArgoCD."
        },
        {
          title: "Helm & Kustomize Packaging",
          desc: "Creating maintainable, multi-environment Kubernetes deployment charts with Helm 3 and Kustomize overlays."
        },
        {
          title: "Service Mesh & Traffic Management",
          desc: "Implementing Istio and Linkerd for mutual TLS (mTLS), canary traffic splitting, rate limiting, and observability."
        },
        {
          title: "Auto-Scaling & Cost Governance",
          desc: "Configuring Karpenter, HPA (Horizontal Pod Autoscaler), and KEDA for event-driven resource auto-scaling."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week sprints with daily standups, automated testing, disaster recovery drills, and 24/7 cluster monitoring."
        }
      ]}
      techHighlight={{
        title1: "Zero-Downtime Cluster Upgrades & Disaster Recovery",
        desc1: "Our Kubernetes engineers execute safe, rolling cluster version upgrades with Velero automated backups and cross-region failovers, guaranteeing zero business disruption.",
        title2: "Enterprise K8s Security & Policy Enforcement",
        desc2: "We enforce strict container security using OPA Gatekeeper / Kyverno policies, Kubernetes NetworkPolicies, runtime scanning (Falco), and secret isolation."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly or monthly hiring models with zero hidden fees. Scale your Kubernetes engineering bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your infrastructure manifests and cloud credentials are 100% protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Modernize your application delivery with enterprise GitOps pipelines and automated container auto-scaling."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Kubernetes Administrators (CKA) skilled in K8s, Helm, ArgoCD, Terraform, Prometheus, Istio, and AWS/GCP/Azure."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Helm charts, GitOps repositories, and Terraform manifests."
        }
      ]}
    />
  );
};

export default KubernetesDeveloper;
