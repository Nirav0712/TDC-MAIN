import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const IosDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="iOS"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated iOS Developers | Swift & SwiftUI App Experts | The Digital Connect"
      metaDescription="Hire certified iOS developers from The Digital Connect. Native Swift, SwiftUI, Objective-C, App Store optimization, Apple Vision Pro, and flexible hiring models."
      tagline="We successfully engineer high-performance native iOS apps for iPhone, iPad & Apple Watch"
      heroDescription="We have a group of gifted and dedicated iOS developers who specialize in crafting pixel-perfect, native iOS applications using Swift and SwiftUI. From enterprise mobile apps to high-converting consumer products, get in touch with us for your free quote."
      heroBullets={[
        "Modern iOS development using Swift 5.10+, SwiftUI, and Combine reactive programming",
        "Seamless Apple ecosystem integration: Apple Pay, HealthKit, CoreML, ARKit & WidgetKit",
        "Rigorous Apple Human Interface Guidelines compliance and 100% App Store approval guarantee"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "120+", label: "iOS Apps Published" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Native, High-Performance iOS Mobile Solutions",
        card1Text1: "Does your company need senior iOS developers? We at The Digital Connect provide cutting-edge, all-inclusive iOS application engineering solutions. We help startups and enterprises worldwide build smooth, memory-optimized iOS apps that deliver superior user retention and premium branding.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced iOS developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its mobile strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Apple Ecosystem & Swift Engineers",
        card2Text1: "One of the finest mobile app development firms, The Digital Connect provides you with a dedicated team of iOS developers. To create sophisticated mobile experiences, our certified developers are trained engineers with deep expertise in Swift, SwiftUI, Objective-C, CoreData, and RESTful/GraphQL API integration.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with fluid 120Hz ProMotion animations, clean MVVM/VIPER architecture, and strict memory safety."
      }}
      whyChoosePoints={[
        {
          title: "SwiftUI & UIKit Mastery",
          desc: "Modern declarative UI with SwiftUI paired with UIKit legacy integration for robust backward compatibility."
        },
        {
          title: "CoreML & ARKit Capabilities",
          desc: "Integrating on-device machine learning models with CoreML and augmented reality experiences using ARKit."
        },
        {
          title: "Apple Pay & In-App Purchases",
          desc: "Flawless StoreKit 2 subscriptions, in-app purchases, Apple Pay checkout funnels, and biometric authentication (FaceID/TouchID)."
        },
        {
          title: "Offline Storage & Sync",
          desc: "Resilient offline data persistence using SwiftData, CoreData, and Realm with background server synchronization."
        },
        {
          title: "App Store Publishing & ASO",
          desc: "End-to-end TestFlight beta distribution, App Store review submission, and metadata optimization for discoverability."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, automated XCTest suites, and Fastlane CI/CD distribution."
        }
      ]}
      techHighlight={{
        title1: "Strict Adherence to Apple Human Interface Guidelines (HIG)",
        desc1: "Our iOS developers craft interfaces that feel naturally integrated with iOS, supporting dynamic typography, system dark mode, haptic feedback, and fluid gesture navigation.",
        title2: "Enterprise Security, Keychain & Biometric Safety",
        desc2: "We secure sensitive user data using Apple Secure Enclave, iOS Keychain Services, Certificate Pinning, and end-to-end encrypted local storage."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden costs. Scale your iOS development capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your proprietary app idea and code are 100% protected. We execute strict bilateral NDAs before discussing any technical details."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Rapidly accelerate your time-to-market with senior Apple developers ready to integrate into your existing Git workflows."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Swift, SwiftUI, UIKit, CoreData, SwiftData, Combine, Fastlane, and Xcode Cloud."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% intellectual property ownership of the Xcode project, source code, app credentials, and design assets."
        }
      ]}
    />
  );
};

export default IosDeveloper;
