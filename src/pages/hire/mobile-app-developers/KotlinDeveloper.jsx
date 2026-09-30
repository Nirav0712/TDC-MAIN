import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const KotlinDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Kotlin"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Kotlin Developers | Android & KMP Experts | The Digital Connect"
      metaDescription="Hire certified Kotlin developers from The Digital Connect. Kotlin Multiplatform (KMP), Jetpack Compose, Coroutines, Ktor, and flexible hiring models."
      tagline="We successfully engineer modern Android apps & Kotlin Multiplatform (KMP) shared codebases"
      heroDescription="We have a group of gifted and dedicated Kotlin developers who specialize in modern Android app development with Jetpack Compose and cross-platform shared business logic using Kotlin Multiplatform (KMP) and Ktor. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Kotlin 2.0 with the K2 compiler, Coroutines, and Jetpack Compose declarative UI",
        "Kotlin Multiplatform (KMP) sharing data layers and business logic across Android and iOS",
        "Enterprise backend and microservices development using Ktor, Spring Boot with Kotlin, and Exposed"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "130+", label: "Kotlin Apps & Modules Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Modern, Type-Safe Kotlin Engineering Solutions",
        card1Text1: "Does your company need senior Kotlin developers? We at The Digital Connect provide cutting-edge, all-inclusive Kotlin application engineering solutions. We help businesses worldwide construct type-safe, expressive, and concise Android apps and shared multi-platform logic that reduce boilerplate code by 40%.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Kotlin developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its engineering strategy by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Kotlin Multiplatform & Android Engineers",
        card2Text1: "One of the finest mobile engineering firms, The Digital Connect provides you with a dedicated team of Kotlin developers. To build sophisticated mobile platforms and KMP shared libraries, our certified developers are trained engineers with deep expertise in Kotlin 2.0, Flow, Room DB, Retrofit, and Dagger-Hilt.",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique company demands with null-safe architectures, robust background processing, and top-tier code maintainability."
      }}
      whyChoosePoints={[
        {
          title: "Kotlin Multiplatform (KMP)",
          desc: "Sharing pure business logic, networking, and data layers between Android and iOS without giving up native UI."
        },
        {
          title: "Jetpack Compose Modern UI",
          desc: "Building dynamic, reactive UI components with Compose, custom layouts, and smooth Material You animations."
        },
        {
          title: "Coroutines & Flow Reactive Streams",
          desc: "Structured asynchronous concurrency with Coroutines, StateFlow, and Channels for non-blocking UI responsiveness."
        },
        {
          title: "Kotlin Backend with Ktor",
          desc: "Lightweight, high-performance asynchronous web backends and microservices built with Ktor and Kotlin Serialization."
        },
        {
          title: "Java to Kotlin Migration",
          desc: "Refactoring legacy Java Android codebases to clean, modern idiomatic Kotlin with zero operational disruption."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile sprints with daily standups, comprehensive MockK unit testing, and automated CI/CD releases."
        }
      ]}
      techHighlight={{
        title1: "Kotlin Multiplatform (KMP) Architecture",
        desc1: "Our Kotlin engineers build shared multiplatform data repositories (Ktor client, SQLDelight database, kotlinx.serialization) that run natively on Android, iOS, and Web, eliminating duplicate logic.",
        title2: "Concise, Null-Safe Code Quality",
        desc2: "We leverage Kotlin's compile-time null safety, smart casts, extension functions, and data classes to drastically reduce app crash rates and developer maintenance time."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly billing models with zero hidden costs. Scale your Kotlin development capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your source code and app data are completely protected. We enforce strict bilateral NDAs and Google enterprise security standards."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your mobile engineering roadmap with certified Kotlin developers capable of handling both native Android and KMP."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Kotlin, Jetpack Compose, KMP, Coroutines, Ktor, Dagger-Hilt, Room, and Gradle."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all developed apps, KMP libraries, and assets."
        }
      ]}
    />
  );
};

export default KotlinDeveloper;
