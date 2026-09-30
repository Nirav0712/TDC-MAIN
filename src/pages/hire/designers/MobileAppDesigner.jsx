import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const MobileAppDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Mobile App Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Mobile App Designers | iOS & Android UI/UX Experts | The Digital Connect"
      metaDescription="Hire certified Mobile App Designers from The Digital Connect. iOS Human Interface, Android Material You, Figma prototypes, micro-interactions, and flexible hiring models."
      tagline="We successfully design addictive, thumb-friendly mobile app interfaces for iOS & Android"
      heroDescription="We have a group of gifted and dedicated Mobile App Designers who specialize in native iOS (Human Interface Guidelines) and Android (Material You) mobile design, interactive Figma prototypes, mobile micro-interactions, and seamless developer handoffs. Get in touch with us for your free quote."
      heroBullets={[
        "Native mobile design tailored to Apple HIG and Google Material Design specifications",
        "Thumb-zone ergonomic optimization, intuitive gesture navigation, and haptic feedback design",
        "Clickable Figma interactive mobile prototypes with smart-animate and device frames"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "240+", label: "Mobile Apps Designed" },
        { value: "24/7", label: "Design Support" }
      ]}
      whyHireIntro={{
        card1Title: "Intuitive, Ergonomic Mobile App Design Solutions",
        card1Text1: "Does your mobile startup or brand need expert Mobile App Designers? We at The Digital Connect provide cutting-edge, all-inclusive mobile UI/UX design solutions. We help businesses worldwide create thumb-friendly, visually captivating mobile apps that achieve high user ratings and long-term retention.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Mobile App Designers, allowing you to take advantage of our availability as your Offshore Design Center. Your company can make significant savings and improve mobile user engagement by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified iOS & Android UI/UX Specialists",
        card2Text1: "One of the finest mobile design firms, The Digital Connect provides you with a dedicated team of Mobile App Designers. To build seamless mobile experiences, our certified designers possess deep expertise in mobile typography, dark mode theming, dynamic island/notch considerations, and gesture mechanics.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique mobile roadmap demands with production-ready asset exports, interactive prototypes, and 100% store approval compliance."
      }}
      whyChoosePoints={[
        {
          title: "iOS & Android Platform Conventions",
          desc: "Designing native experiences matching iOS Cupertino guidelines and Android Material You design tokens."
        },
        {
          title: "Thumb-Zone Ergonomics",
          desc: "Structuring primary actions within natural thumb reach zones for effortless one-handed smartphone operation."
        },
        {
          title: "Mobile Micro-Interactions & Transitions",
          desc: "Defining spring physics, pull-to-refresh animations, button ripple states, and tab bar state transitions."
        },
        {
          title: "Light & Dark Mode Support",
          desc: "Designing comprehensive dual-theme color palettes with OLED true black options for battery conservation."
        },
        {
          title: "App Store & Google Play Screenshot Assets",
          desc: "Creating high-converting, localized App Store and Google Play feature graphics and preview screenshots."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week mobile design sprints with daily standups, live Figma previews, and organized asset handoffs."
        }
      ]}
      techHighlight={{
        title1: "Interactive Mobile Testing on Physical Devices",
        desc1: "Our designers test prototypes directly on physical iPhones and Android devices using the Figma Mirror app, verifying tap target sizes and readability under real-world lighting conditions.",
        title2: "Vector Export Pipelines for Flutter & React Native",
        desc2: "We organize all mobile iconography, illustrations, and Lottie animations with clean naming conventions ready for instant developer import into Flutter, React Native, Swift, or Kotlin."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your mobile design capacity on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your mobile concepts and proprietary wireframes are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your mobile app launch timeline with dedicated designers who ship verified, production-ready mobile screens."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Figma, Protopie, Adobe XD, Principle, iOS HIG, Material Design, and Lottie."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all Figma files, component libraries, and visual assets."
        }
      ]}
    />
  );
};

export default MobileAppDesigner;
