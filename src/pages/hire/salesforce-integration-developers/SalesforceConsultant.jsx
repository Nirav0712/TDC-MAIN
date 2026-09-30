import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const SalesforceConsultant = () => {
  return (
    <DeveloperHireTemplate
      techName="Salesforce Consulting"
      pageCategory="Salesforce Developers"
      categoryUrl="/hire-team/salesforce-integration-developers"
      pageTitle="Hire Dedicated Salesforce Consultants | CRM Strategy & Architecture Experts | The Digital Connect"
      metaDescription="Hire certified Salesforce Consultants from The Digital Connect. CRM audits, Sales Cloud, Service Cloud, digital transformation, and flexible hiring models."
      tagline="We successfully optimize CRM workflows, maximize adoption & drive ROI on your Salesforce investment"
      heroDescription="We have a group of gifted and dedicated Salesforce Consultants who specialize in business process optimization, Salesforce org health audits, CRM roadmap planning, multi-cloud implementation, and change management strategies. Get in touch with us for your free quote."
      heroBullets={[
        "Certified Salesforce Consultants & Solution Architects with enterprise advisory experience",
        "Comprehensive Salesforce Org Health Audits: Technical debt, security, licensing, and optimization",
        "End-to-end multi-cloud roadmap planning for Sales Cloud, Service Cloud, Experience Cloud, and CPQ"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "85+", label: "CRM Roadmaps Implemented" },
        { value: "24/7", label: "Consulting Support" }
      ]}
      whyHireIntro={{
        card1Title: "Strategic, High-Impact Salesforce Consulting Solutions",
        card1Text1: "Does your company need expert Salesforce Consultants? We at The Digital Connect provide cutting-edge, all-inclusive Salesforce consulting and architecture advisory solutions. We help enterprise leaders translate complex business goals into streamlined, automated CRM workflows that drive user adoption and measurable revenue growth.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Salesforce Consultants, allowing you to take advantage of our availability as your Offshore Consulting Center. Your company can make significant savings and eliminate costly implementation mistakes by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Salesforce Solution Architects",
        card2Text1: "One of the finest CRM advisory firms, The Digital Connect provides you with a dedicated team of Salesforce Consultants. To structure enterprise-wide CRM deployments, our certified consultants possess deep expertise in business analysis, data governance, security modeling, and third-party AppExchange evaluations.",
        card2Text2: "Their advisory capability enables us to provide effective contractual services in this area to meet your unique business demands with practical implementation blueprints, user training documentation, and clear milestone deliverables."
      }}
      whyChoosePoints={[
        {
          title: "Salesforce Org Health & Security Audits",
          desc: "Evaluating code health, governor limit bottlenecks, duplicate data, unused licenses, and security permissions."
        },
        {
          title: "Business Process & Workflow Optimization",
          desc: "Mapping end-to-end sales and customer service funnels to replace manual tasks with automated Flows."
        },
        {
          title: "Multi-Cloud Implementation Strategy",
          desc: "Designing cohesive roadmaps connecting Sales Cloud, Service Cloud, Marketing Cloud, and Experience Cloud."
        },
        {
          title: "Salesforce CPQ & Billing Consulting",
          desc: "Configuring product bundles, dynamic pricing rules, discount schedules, and automated invoice workflows."
        },
        {
          title: "User Adoption & Change Management",
          desc: "Creating interactive user training programs, documentation, and executive dashboard reporting to ensure high CRM adoption."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Structured milestone delivery sprints with executive stakeholder reviews, risk registers, and actionable guidance."
        }
      ]}
      techHighlight={{
        title1: "Maximizing ROI & Eliminating License Waste",
        desc1: "Our consultants review your Salesforce licensing tiers and custom objects, identifying underutilized features and consolidating custom code to drastically lower total cost of ownership (TCO).",
        title2: "Enterprise Data Governance & Clean Architecture",
        desc2: "We architect scalable data models, record sharing rules, territory management hierarchies, and automated deduplication pipelines to maintain pristine CRM data hygiene."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly advisory models with zero hidden overheads. Scale consulting engagement hours on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your business strategies and customer data are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Eliminate costly trial-and-error by engaging certified Salesforce architects who have solved enterprise CRM challenges."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified consultants skilled in Sales Cloud, Service Cloud, Experience Cloud, CPQ, Flow Builder, and Architecture."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all architecture blueprints, audit reports, and roadmap assets."
        }
      ]}
    />
  );
};

export default SalesforceConsultant;
