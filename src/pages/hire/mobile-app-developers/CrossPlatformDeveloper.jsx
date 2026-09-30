import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const CrossPlatformDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Cross Platform"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Cross Platform Mobile App Developers | The Digital Connect"
      metaDescription="Hire certified Cross Platform mobile app developers from The Digital Connect. Flutter, React Native, Kotlin Multiplatform (KMP), and flexible hiring models."
      tagline="We successfully deliver high-performance, single-codebase mobile applications for iOS & Android"
      heroDescription="We have a group of gifted and dedicated Cross Platform mobile developers who excel in building unified, high-performance mobile apps across iOS, Android, Web, and Desktop using Flutter, React Native, and Kotlin Multiplatform. Get in touch with us for your free quote."
      heroBullets={[
        "Single-codebase deployment across iOS and Android with up to 50% cost and time reduction",
        "Expertise across leading multi-platform frameworks: Flutter, React Native, and Kotlin Multiplatform",
        "True native performance, 60fps animations, hardware integration, and universal store deployment"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "200+", label: "Multi-Platform Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Cost-Effective, Unified Cross-Platform Solutions",
        card1Text1: "Does your company need cross-platform mobile engineers? We at The Digital Connect provide cutting-edge, all-inclusive cross-platform app development solutions. We help startups and enterprises launch feature-complete apps across multiple operating systems simultaneously without maintaining separate native teams.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Cross Platform developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its mobile roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Multi-Framework Mobile Specialists",
        card2Text1: "One of the finest mobile application firms, The Digital Connect provides you with a dedicated team of Cross Platform developers. To build sophisticated mobile applications, our certified developers are trained engineers with deep expertise in Flutter (Dart), React Native (TypeScript), and KMP.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique business demands with unified UI design systems, consistent feature releases, and flawless app store submissions."
      }}
      whyChoosePoints={[
        {
          title: "Multi-Framework Expertise",
          desc: "Unbiased technical consulting to recommend the ideal framework—Flutter, React Native, or KMP—for your specific app scope."
        },
        {
          title: "Unified UI/UX Design Systems",
          desc: "Crafting shared UI components that automatically conform to iOS Cupertino and Android Material You conventions."
        },
        {
          title: "Native Bridge & Hardware APIs",
          desc: "Bridging complex device features including Camera, BLE, NFC, Biometrics, and Background Geolocation."
        },
        {
          title: "Offline-First Sync Engines",
          desc: "Building reliable offline databases (SQLite, Hive, WatermelonDB) with real-time background cloud synchronization."
        },
        {
          title: "Store Publishing & CI/CD",
          desc: "Automating builds, code signing, and multi-store deployment to the Apple App Store, Google Play, and Web."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, comprehensive QA testing, and continuous deployment."
        }
      ]}
      techHighlight={{
        title1: "50% Faster Time-to-Market & Lower Maintenance",
        desc1: "By writing business logic and UI once, your engineering team ships new features simultaneously to both iOS and Android users, cutting bug reproduction and maintenance overhead in half.",
        title2: "Seamless Native Interoperability",
        desc2: "When specialized native capabilities are required, our developers seamlessly write custom Swift or Kotlin plugins, guaranteeing zero technical compromises on hardware access."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden fees. Ramp up developer hours smoothly as your product scales."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your data and intellectual property are fully secured. We sign bilateral NDAs and adhere strictly to mobile security guidelines."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Maximize resource efficiency by hiring cross-platform versatile engineers who build for both major mobile ecosystems."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Engineers proficient in Flutter, React Native, Dart, TypeScript, Swift, Kotlin, Firebase, and CI/CD pipelines."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all mobile codebases, assets, and build pipelines."
        }
      ]}
    />
  );
};

export default CrossPlatformDeveloper;
