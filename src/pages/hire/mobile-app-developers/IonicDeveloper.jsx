import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const IonicDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Ionic"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Ionic Developers | Hybrid Mobile & Capacitor Experts | The Digital Connect"
      metaDescription="Hire certified Ionic developers from The Digital Connect. Hybrid mobile apps, Capacitor plugins, React/Angular/Vue integration, and flexible hiring models."
      tagline="We successfully engineer cost-effective cross-platform mobile apps with Ionic & Capacitor"
      heroDescription="We have a group of gifted and dedicated Ionic developers who excel in building high-performance hybrid mobile and Progressive Web Apps (PWAs) using Ionic Framework, Capacitor native bridges, and modern JavaScript/TypeScript (React, Angular, Vue). Get in touch with us for your free quote."
      heroBullets={[
        "Single-codebase cross-platform deployment across iOS, Android, and Web with Ionic & Capacitor",
        "Deep native device hardware access: Camera, Biometrics, Geolocation, Bluetooth, and Push Notifications",
        "Seamless integration with Angular, React, and Vue for modern component reusability and fast time to market"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "90+", label: "Ionic Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Cost-Effective, Single-Codebase Hybrid Solutions",
        card1Text1: "Does your company need expert Ionic developers? We at The Digital Connect provide cutting-edge, all-inclusive Ionic hybrid mobile application solutions. We help businesses worldwide launch feature-rich apps simultaneously on iOS, Android, and Web with up to 50% cost savings.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Ionic developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its mobile roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Capacitor & Hybrid Engineers",
        card2Text1: "One of the finest cross-platform development firms, The Digital Connect provides you with a dedicated team of Ionic developers. To create responsive mobile applications, our certified developers are trained engineers with deep expertise in Ionic 7+, Capacitor, TypeScript, REST APIs, and native SDKs.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with native look-and-feel (iOS Cupertino and Android Material Design), zero sluggishness, and high store approval rates."
      }}
      whyChoosePoints={[
        {
          title: "Capacitor Native Bridges",
          desc: "Custom Capacitor plugin development to access native iOS (Swift) and Android (Kotlin) APIs without limitations."
        },
        {
          title: "Framework Versatility",
          desc: "Building with your preferred frontend framework—Ionic React, Ionic Angular, or Ionic Vue—with full TypeScript support."
        },
        {
          title: "Progressive Web Apps (PWAs)",
          desc: "Offline-ready, installable web apps with service workers, background sync, and push notifications."
        },
        {
          title: "Legacy Cordova Migration",
          desc: "Seamlessly upgrading older Apache Cordova hybrid codebases to modern, secure, and fast Capacitor 6+."
        },
        {
          title: "App Store & Play Store Deployment",
          desc: "End-to-end bundling, native code signing, App Store and Google Play compliance review, and store release."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with continuous testing on physical iOS and Android test devices."
        }
      ]}
      techHighlight={{
        title1: "Adaptive Styling & Native-Grade Performance",
        desc1: "Our Ionic developers utilize Ionic's adaptive styling engine, ensuring your mobile app automatically matches the native UI conventions of both Apple iOS and Google Material You.",
        title2: "Unified Web & Mobile Architecture",
        desc2: "We construct shared component libraries that allow you to reuse up to 90% of code across web portals and native mobile builds, dramatically slashing maintenance costs."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly and monthly billing models with zero hidden fees. Scale developer bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and secure data storage."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Halve your development timeline by deploying to both major app stores simultaneously with a single engineering team."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Ionic 7, Capacitor, TypeScript, Angular, React, Vue, Cordova, and Firebase."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all developed apps and native plugins."
        }
      ]}
    />
  );
};

export default IonicDeveloper;
