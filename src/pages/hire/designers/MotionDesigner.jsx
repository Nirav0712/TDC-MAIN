import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const MotionDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Motion Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Motion Designers | 2D/3D Animation & Lottie Experts | The Digital Connect"
      metaDescription="Hire certified Motion Designers from The Digital Connect. After Effects, 2D/3D motion graphics, Lottie animations, explainer videos, and flexible hiring models."
      tagline="We successfully bring brands and interfaces to life with captivating motion graphics & Lottie animations"
      heroDescription="We have a group of gifted and dedicated Motion Designers who specialize in 2D/3D motion graphics, lightweight Lottie web animations, animated logo stings, UI micro-interactions, and product explainer videos using Adobe After Effects, Cinema 4D, and Rive. Get in touch with us for your free quote."
      heroBullets={[
        "Lightweight Lottie (JSON) and Rive vector animations for seamless web & mobile app integration",
        "High-impact 2D/3D motion graphics for product explainer videos, social ads, and marketing campaigns",
        "Animated UI micro-interactions, loading states, custom logo reveals, and dynamic video transitions"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "140+", label: "Motion Projects Delivered" },
        { value: "24/7", label: "Creative Support" }
      ]}
      whyHireIntro={{
        card1Title: "Dynamic, High-Impact Motion Graphic Solutions",
        card1Text1: "Does your company need expert Motion Designers? We at The Digital Connect provide cutting-edge, all-inclusive motion graphics and animation solutions. We help businesses worldwide elevate user engagement, explain complex software features effortlessly, and boost ad conversion rates with captivating motion design.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Motion Designers, allowing you to take advantage of our availability as your Offshore Creative Center. Your company can make significant savings and improve visual storytelling by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified After Effects & Lottie Animation Artists",
        card2Text1: "One of the finest motion creative firms, The Digital Connect provides you with a dedicated team of Motion Designers. To build fluid animations, our certified designers possess deep expertise in After Effects, Cinema 4D, Blender, LottieFiles, Rive, and timing/easing curves.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique product and marketing demands with lightweight file sizes, 60fps buttery smooth playback, and multi-format exports."
      }}
      whyChoosePoints={[
        {
          title: "Lottie & Rive Web Animations",
          desc: "Exporting lightweight JSON vector animations that render natively at 60fps in React, Flutter, and iOS/Android."
        },
        {
          title: "Product Explainer & 3D Videos",
          desc: "Script-to-screen production of animated SaaS demo videos, 3D product renders, and isometric walkthroughs."
        },
        {
          title: "UI Micro-Interactions & Loaders",
          desc: "Designing engaging button animations, pull-to-refresh indicators, success states, and skeleton loaders."
        },
        {
          title: "Animated Logo Reveals & Stings",
          desc: "Creating memorable animated brand logos for video intros, presentations, and digital signature sign-offs."
        },
        {
          title: "High-CTR Social Motion Ads",
          desc: "Dynamic motion graphics tailored for TikTok, Instagram Reels, YouTube shorts, and LinkedIn video feeds."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile 2-week motion sprints with daily standups, storyboard reviews, animatics, and organized project packages."
        }
      ]}
      techHighlight={{
        title1: "Sub-50KB Lottie Files for Instant Web Loading",
        desc1: "Our motion designers build vector animations directly with Bodymovin and Rive, delivering crisp animations that weigh mere kilobytes and scale infinitely without raster compression artifacts.",
        title2: "The 12 Principles of Animation Applied to Modern UI",
        desc2: "We utilize squash & stretch, anticipation, and custom cubic-bezier easing curves to make every digital interface feel alive, intuitive, and physically natural."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your animation bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your product concepts, storyboards, and proprietary assets are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your content marketing and app design velocity with dedicated motion designers who bring static designs to life."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified artists skilled in Adobe After Effects, Cinema 4D, Blender, Lottie, Rive, Premiere Pro, and Illustrator."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all raw project files (.AEP, .C4D), render passes, and assets."
        }
      ]}
    />
  );
};

export default MotionDesigner;
