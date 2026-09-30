import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const SalesforceAdmin = () => {
  return (
    <DeveloperHireTemplate
      techName="Salesforce Administration"
      pageCategory="Salesforce Developers"
      categoryUrl="/hire-team/salesforce-integration-developers"
      pageTitle="Hire Dedicated Salesforce Administrators | Certified Salesforce Admins | The Digital Connect"
      metaDescription="Hire certified Salesforce Administrators from The Digital Connect. Flow Builder, user management, security permissions, reports & dashboards, and flexible hiring models."
      tagline="We successfully manage, secure & optimize your daily Salesforce CRM operations"
      heroDescription="We have a group of gifted and dedicated Salesforce Administrators who specialize in declarative workflow automation with Flow Builder, user access governance, security profile management, customized reports & dashboards, and data hygiene. Get in touch with us for your free quote."
      heroBullets={[
        "Certified Salesforce Administrators (ADM 201 & Advanced Admin) managing daily CRM operations",
        "Declarative automation: Screen Flows, Record-Triggered Flows, and Approval Processes",
        "Role hierarchy, sharing rules, field-level security (FLS), and executive dashboard reporting"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "150+", label: "Salesforce Orgs Managed" },
        { value: "24/7", label: "Admin Support" }
      ]}
      whyHireIntro={{
        card1Title: "Proactive, Reliable Salesforce Administration Solutions",
        card1Text1: "Does your organization need dedicated Salesforce Administrators? We at The Digital Connect provide cutting-edge, all-inclusive Salesforce administration and support solutions. We ensure your CRM runs smoothly, users stay supported, and business workflows remain fully automated without hiring expensive full-time in-house teams.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Salesforce Administrators, allowing you to take advantage of our availability as your Offshore Administration Center. Your company can make significant savings and improve user adoption by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Salesforce Administration Specialists",
        card2Text1: "One of the finest CRM management firms, The Digital Connect provides you with a dedicated team of Salesforce Administrators. To maintain clean and secure orgs, our certified admins possess deep expertise in Flow Builder, permission sets, report types, Data Loader, and AppExchange packages.",
        card2Text2: "Their operational capability enables us to provide effective contractual services in this area to meet your unique business demands with fast helpdesk ticket resolution, pristine data hygiene, and reliable release management."
      }}
      whyChoosePoints={[
        {
          title: "Flow Builder Automation",
          desc: "Creating complex record-triggered, scheduled, and screen flows to automate business logic without code."
        },
        {
          title: "User Management & Security Governance",
          desc: "Configuring permission sets, permission set groups, role hierarchies, profile restrictions, and MFA enforcement."
        },
        {
          title: "Custom Reports & Executive Dashboards",
          desc: "Designing actionable sales funnels, pipeline forecasts, support SLA trackers, and executive KPI summaries."
        },
        {
          title: "Data Cleanliness & De-duplication",
          desc: "Routine data deduplication, bulk data cleansing with Data Loader, and validation rules to maintain high data quality."
        },
        {
          title: "AppExchange Installation & Configuration",
          desc: "Evaluating, installing, and configuring third-party AppExchange packages (DocuSign, ZoomInfo, RingCentral, Conga)."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile administrative sprints with fast SLA response times, daily ticket resolution, and release updates."
        }
      ]}
      techHighlight={{
        title1: "Migrating Process Builders & Workflows to Modern Flows",
        desc1: "Our administrators systematically refactor retired Process Builders and Workflow Rules into streamlined, high-performance Record-Triggered Flows, ensuring your org remains compliant with Salesforce roadmaps.",
        title2: "Airtight Sharing Models & Field-Level Security",
        desc2: "We design least-privilege security models ensuring sensitive financial and customer information is visible only to authorized personnel through restrictive sharing rules and FLS."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly administration plans with zero hidden overheads. Scale admin support hours on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your CRM data and confidential business metrics are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Keep your sales and support teams unblocked with fast turnaround on custom fields, page layouts, and workflow updates."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified Salesforce Administrators skilled in Flow Builder, Data Loader, Reports/Dashboards, Security, and AppExchange."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all custom configurations, reports, and documentation."
        }
      ]}
    />
  );
};

export default SalesforceAdmin;
