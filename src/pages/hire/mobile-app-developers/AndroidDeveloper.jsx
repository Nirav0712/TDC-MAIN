import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const AndroidDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Android"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Android Developers | Kotlin & Jetpack Compose Experts | The Digital Connect"
      metaDescription="Hire certified Android developers from The Digital Connect. Native Kotlin, Jetpack Compose, Android Architecture Components, Google Play optimization, and flexible hiring models."
      tagline="We successfully engineer responsive native Android apps for phones, tablets & wearables"
      heroDescription="We have a group of gifted and dedicated Android developers who specialize in building native, performant Android apps using Kotlin, Jetpack Compose, Coroutines, and modern Android Architecture Components. Get in touch with us for your free quote."
      heroBullets={[
        "Modern native Android development with Kotlin, Jetpack Compose, and Material You design",
        "Asynchronous concurrency using Kotlin Coroutines, StateFlow, and Room database caching",
        "Deep hardware integration: Bluetooth LE, NFC, CameraX, GPS, Biometrics, and Google Play Billing"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "150+", label: "Android Apps Published" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Native, High-Performance Android Solutions",
        card1Text1: "Does your enterprise require senior Android developers? We at The Digital Connect provide cutting-edge, all-inclusive Android application development solutions. We help businesses worldwide construct resilient Android apps that run flawlessly across thousands of device models, screen resolutions, and OS versions.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Android developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its mobile roadmap by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Kotlin & Google Jetpack Engineers",
        card2Text1: "One of the finest mobile engineering firms, The Digital Connect provides you with a dedicated team of Android developers. To build sophisticated mobile applications, our certified developers are trained engineers with deep expertise in Kotlin, Jetpack Compose, Dagger-Hilt, Retrofit, and Clean Architecture (MVVM/MVI).",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with zero ANR (Application Not Responding) rates, smooth 120Hz scrolling, and strict Google Play compliance."
      }}
      whyChoosePoints={[
        {
          title: "Jetpack Compose Declarative UI",
          desc: "Building intuitive, responsive user interfaces with Jetpack Compose, dynamic theming, and smooth Material You animations."
        },
        {
          title: "Coroutines & Flow Reactive Architecture",
          desc: "Structured asynchronous programming with Kotlin Coroutines, StateFlow, and SharedFlow for seamless data streams."
        },
        {
          title: "Dependency Injection & Clean Code",
          desc: "Clean, testable architectures implemented with Dagger-Hilt, Koin, repository patterns, and ViewModel lifecycle separation."
        },
        {
          title: "Offline Storage & Room DB",
          desc: "Robust local data persistence with Room ORM, automated SQLite migrations, and background WorkManager syncing."
        },
        {
          title: "Google Play Console Publishing",
          desc: "Complete App Bundle (AAB) preparation, Google Play Policy compliance checks, and target SDK 34+ readiness."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, automated Espresso testing, and Firebase Test Lab validation."
        }
      ]}
      techHighlight={{
        title1: "Broad Android Device & Fragmentation Optimization",
        desc1: "Our Android developers conduct thorough compatibility testing across diverse screen sizes, foldable devices, and OEM operating system flavors (Samsung OneUI, Xiaomi MIUI, Google Pixel) to guarantee uniform excellence.",
        title2: "Enterprise Android Security & Play Integrity API",
        desc2: "We protect mobile apps using Google Play Integrity API, Android Keystore encryption, ProGuard/R8 code obfuscation, and certificate pinning against reverse engineering and tampering."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Transparent hourly and monthly billing models with zero hidden overheads. Scale developer capacity flexibly on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and Google enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Instantly augment your engineering team with certified Android specialists ready to deliver clean Kotlin code from Day 1."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Kotlin, Jetpack Compose, Coroutines, Room DB, Hilt, Retrofit, Firebase, and Gradle."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of the Android Studio project, assets, and keystores."
        }
      ]}
    />
  );
};

export default AndroidDeveloper;
