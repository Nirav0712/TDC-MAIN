import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const ReactNativeDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="React Native"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated React Native Developers | Cross-Platform Mobile Experts | The Digital Connect"
      metaDescription="Hire certified React Native developers from The Digital Connect. Modern React Native 0.74+, Expo, New Architecture (Fabric/TurboModules), and flexible hiring models."
      tagline="We successfully deliver 60fps native cross-platform mobile apps for iOS and Android"
      heroDescription="We have a group of gifted and dedicated React Native developers who specialize in crafting high-performance, truly native cross-platform apps using React Native, Expo, and the New Architecture (Fabric & TurboModules). Get in touch with us for your free quote."
      heroBullets={[
        "Modern React Native 0.74+ & Expo development leveraging TypeScript and NativeWind",
        "React Native New Architecture: Fabric renderer, TurboModules, and bridgeless performance",
        "Over-the-Air (OTA) updates with Expo EAS, automated CI/CD, and fast App Store / Play Store releases"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "160+", label: "React Native Apps Launched" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Performance Cross-Platform React Native Solutions",
        card1Text1: "Does your company need senior React Native developers? We at The Digital Connect provide cutting-edge, all-inclusive React Native engineering solutions. We help startups and global enterprises launch performant, beautiful mobile apps across iOS and Android from a single shared TypeScript codebase.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced React Native developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Expo & Mobile JavaScript Engineers",
        card2Text1: "One of the finest mobile engineering firms, The Digital Connect provides you with a dedicated team of React Native developers. To build sophisticated mobile applications, our certified developers are trained engineers with deep expertise in React Native, Reanimated 3, Redux Toolkit / Zustand, and native bridging in Swift/Kotlin.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with buttery 60fps gesture animations, offline-first data sync, and rapid iteration cycles."
      }}
      whyChoosePoints={[
        {
          title: "Expo & EAS Workflow",
          desc: "Accelerated development using Expo Application Services (EAS), custom development builds, and seamless OTA hotfixes."
        },
        {
          title: "Fluid Animations with Reanimated",
          desc: "Native thread-driven gesture animations with React Native Reanimated 3 and Gesture Handler for zero jank."
        },
        {
          title: "Custom Native Modules",
          desc: "Bridging complex third-party native SDKs (Bluetooth LE, thermal printers, proprietary sensors) in Swift and Kotlin."
        },
        {
          title: "Offline-First Data Architecture",
          desc: "Resilient local database integration using WatermelonDB, SQLite, and MMKV with background server replication."
        },
        {
          title: "App Store & Google Play Submissions",
          desc: "Comprehensive mobile audits, screenshot preparation, App Store Privacy details, and 100% store approval assurance."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, automated Jest testing, and Fastlane CI/CD delivery."
        }
      ]}
      techHighlight={{
        title1: "Bridgeless Performance with Fabric & TurboModules",
        desc1: "Our React Native developers harness the New Architecture to invoke native C++ and platform modules directly without JSON bridge serialization, delivering instantaneous startup times and low memory footprints.",
        title2: "Over-the-Air (OTA) Updates & Continuous Delivery",
        desc2: "We set up automated OTA deployment pipelines with Expo EAS Update, allowing you to push critical bug fixes and UI updates to users' devices instantly without waiting for app store reviews."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden costs. Scale your mobile developer headcount on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your mobile source code and credentials are fully secured. We sign mutual NDAs and follow OWASP Mobile Top 10 security."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your product launch across iOS and Android simultaneously with a unified, high-velocity engineering team."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in React Native, TypeScript, Expo, Reanimated, Redux Toolkit, Swift, Kotlin, and Firebase."
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

export default ReactNativeDeveloper;
