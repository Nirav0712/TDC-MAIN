import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const Unity3dDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="Unity 3D"
      pageCategory="Mobile App Developers"
      categoryUrl="/hire-team/mobile-app-developers"
      pageTitle="Hire Dedicated Unity 3D Developers | Game & AR/VR Experts | The Digital Connect"
      metaDescription="Hire certified Unity 3D developers from The Digital Connect. C# game development, mobile 2D/3D games, AR/VR simulations, physics engines, and flexible hiring models."
      tagline="We successfully engineer immersive 2D/3D mobile games, AR/VR applications & interactive simulations"
      heroDescription="We have a group of gifted and dedicated Unity 3D developers who specialize in building captivating 2D/3D mobile games, augmented reality (AR) & virtual reality (VR) experiences, interactive simulations, and custom shader development with C# and Unity Engine. Get in touch with us for your free quote."
      heroBullets={[
        "Modern Unity 6 & C# development for high-performance 2D and 3D mobile games",
        "Immersive Augmented Reality (AR Foundation / ARKit / ARCore) and Virtual Reality (Meta Quest / Vision Pro)",
        "Universal Render Pipeline (URP), custom HLSL shaders, physics optimization, and multiplayer networking"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "70+", label: "Unity Games & Apps Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Immersive 2D/3D Games & Interactive 3D Solutions",
        card1Text1: "Does your studio or enterprise need senior Unity 3D developers? We at The Digital Connect provide cutting-edge, all-inclusive Unity engine development solutions. We help gaming studios and brands worldwide build high-framerate mobile games, training simulations, and gamified apps that captivate millions of users.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Unity 3D developers, allowing you to take advantage of our availability as your Offshore Development Center. Your studio can make significant savings and improve the effectiveness of its development pipeline by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified C# Game & Simulation Engineers",
        card2Text1: "One of the finest interactive 3D development firms, The Digital Connect provides you with a dedicated team of Unity developers. To build sophisticated mobile titles and AR/VR applications, our certified developers are trained engineers with deep expertise in C#, URP, Shader Graph, Addressables, and multiplayer SDKs (Photon / Netcode).",
        card2Text2: "Their technical capability enables us to provide effective contractual services in this area to meet your unique project demands with steady 60fps mobile execution, optimized draw calls, and seamless cross-platform deployment."
      }}
      whyChoosePoints={[
        {
          title: "Mobile Game Architecture (2D/3D)",
          desc: "End-to-end game programming with C#, state machines, character controllers, physics, and particle systems."
        },
        {
          title: "AR / VR & Spatial Simulations",
          desc: "Building interactive AR/VR training tools, architectural walkthroughs, and spatial computing apps for Meta Quest and Apple Vision Pro."
        },
        {
          title: "Graphics & Shader Optimization",
          desc: "Custom HLSL shaders, Shader Graph, Universal Render Pipeline (URP), dynamic lighting, and texture compression."
        },
        {
          title: "Asset Management & Addressables",
          desc: "Optimizing mobile binary sizes with Unity Addressable Assets and dynamic on-demand content streaming."
        },
        {
          title: "Monetization & Analytics",
          desc: "Seamless integration of Unity Ads, AdMob, In-App Purchases (IAP), Game Analytics, and leaderboard backends."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile milestone sprints with playtesting builds on physical iOS and Android test devices and continuous integration."
        }
      ]}
      techHighlight={{
        title1: "Sub-Millisecond Mobile Rendering & Draw Call Batching",
        desc1: "Our Unity developers employ static/dynamic batching, GPU instancing, texture atlasing, and LOD (Level of Detail) systems to achieve rock-solid 60fps on mid-range mobile devices without overheating.",
        title2: "Multiplayer Synchronization & Cloud Save",
        desc2: "We build real-time multiplayer lobbies and state synchronization using Photon Fusion, Unity Netcode for GameObjects, and cloud backend databases (Firebase/PlayFab)."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly billing models with zero hidden overheads. Scale your Unity development team on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your game concepts, 3D models, and source code are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Rapidly prototype gameplay mechanics and ship fully polished interactive titles on iOS, Android, and PC."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified engineers skilled in Unity 6, C#, URP, Shader Graph, AR Foundation, Photon, and Addressables."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and source code ownership of all Unity projects, 3D assets, and shaders."
        }
      ]}
    />
  );
};

export default Unity3dDeveloper;
