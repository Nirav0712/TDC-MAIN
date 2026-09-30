import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const FlutterDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Flutter"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Flutter Developers | Dart & Cross-Platform Mobile Experts | The Digital Connect"
      metaDescription="Hire certified Flutter developers from The Digital Connect. Dart 3, Flutter 3.x, Impeller rendering engine, BLoC/Riverpod, and flexible hiring models."
      tagline="We successfully deliver 120fps cross-platform mobile apps for iOS, Android, Web & Desktop"
      heroDescription="We have a group of gifted and dedicated Flutter developers who specialize in crafting high-speed, beautiful mobile apps using Dart 3, Flutter 3.x, the Impeller rendering engine, and modern state management (BLoC, Riverpod). Get in touch with us for your free quote."
      heroBullets={[
        "Sub-millisecond Impeller graphics engine delivering buttery smooth 120Hz animations",
        "Single Dart codebase deployed natively across iOS, Android, Web, macOS, Windows, and Linux",
        "Enterprise state management architecture with BLoC, Riverpod, clean architecture, and Firebase"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "180+", label: "Flutter Apps Launched" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "High-Performance Multi-Platform Flutter Solutions",
        card1Text1: "Does your enterprise require senior Flutter developers? We at The Digital Connect provide cutting-edge, all-inclusive Flutter engineering solutions. We help startups and global enterprises launch high-fidelity mobile experiences with identical pixel-perfect rendering across iOS and Android.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Flutter developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its product roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Dart & Flutter Engineers",
        card2Text1: "One of the finest Flutter development firms, The Digital Connect provides you with a dedicated team of Flutter developers. To build sophisticated mobile platforms, our certified developers are trained engineers with deep expertise in Dart 3, Flutter widgets, RESTful APIs, SQLite/Isar, and native platform channels.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with clean separation of concerns, zero jank, and rapid hot-reload iteration cycles."
      }}
      whyChoosePoints={[
        {
          title: "Impeller Engine & Smooth UI",
          desc: "Harnessing Flutter's modern Impeller rendering engine to eliminate shader compilation jank completely."
        },
        {
          title: "BLoC & Riverpod State Management",
          desc: "Scalable, predictable, and fully testable state architectures built with flutter_bloc or Riverpod."
        },
        {
          title: "Custom Platform Channels",
          desc: "Writing native platform channels in Swift and Kotlin for deep hardware integrations and OEM SDKs."
        },
        {
          title: "Offline-First Local Storage",
          desc: "Fast, lightweight NoSQL and relational caching using Hive, Isar DB, and Drift with background cloud syncing."
        },
        {
          title: "App Store & Play Store Compliance",
          desc: "End-to-end bundling, native splash screens, automated app signing, and seamless store approval handling."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, comprehensive widget/unit testing, and automated CI/CD."
        }
      ]}
      techHighlight={{
        title1: "Pixel-Perfect Rendering & Custom Design Systems",
        desc1: "Because Flutter controls every pixel on screen via its own rendering engine, our developers build custom, branded design systems and rich micro-interactions that look and feel identical across every phone.",
        title2: "Dart 3 Type Safety & Pattern Matching",
        desc2: "We utilize modern Dart 3 features including sound null safety, pattern matching, records, and class modifiers to build robust, compile-time verified enterprise codebases."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly and monthly billing models with zero hidden fees. Scale your Flutter developer headcount on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and Google enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Ship features to both iOS and Android simultaneously, reducing your time-to-market and engineering overhead by half."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Flutter, Dart, BLoC, Riverpod, Firebase, GraphQL, Swift, Kotlin, and Fastlane."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all Flutter repositories, assets, and deployment scripts."
        }
      ]}
    />
  );
};

export default FlutterDeveloper;
