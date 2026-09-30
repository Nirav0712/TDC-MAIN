import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const GameDesigner = () => {
  return (
    <DeveloperHireTemplate
      techName="Game Design"
      pageCategory="Designers"
      categoryUrl="/hire-team/designers"
      pageTitle="Hire Dedicated Game Designers | 2D/3D Game Art & Level Design Experts | The Digital Connect"
      metaDescription="Hire certified Game Designers from The Digital Connect. Game mechanics, level design, 2D/3D concept art, UI/UX for games, Unity/Unreal assets, and flexible hiring models."
      tagline="We successfully design engaging game mechanics, immersive level environments & 2D/3D game art"
      heroDescription="We have a group of gifted and dedicated Game Designers who specialize in game mechanics design, Game Design Document (GDD) authoring, level design, character concept art, in-game economy balancing, and game UI/UX for mobile, PC, and console titles. Get in touch with us for your free quote."
      heroBullets={[
        "Comprehensive Game Design Documents (GDD): Core loops, mechanics, progression systems, and storylines",
        "Immersive level design, environment blocking, and spatial puzzle flow for 2D and 3D titles",
        "Captivating 2D/3D concept art, character design, sprite sheets, texture maps, and in-game UI/UX"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "60+", label: "Game Titles Designed" },
        { value: "24/7", label: "Creative Support" }
      ]}
      whyHireIntro={{
        card1Title: "Immersive, Highly Engaging Game Design Solutions",
        card1Text1: "Does your gaming studio or brand need experienced Game Designers? We at The Digital Connect provide cutting-edge, all-inclusive game design and art solutions. We help studios create addictive core game loops, balanced economies, and unforgettable visual aesthetics that keep players hooked.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced Game Designers, allowing you to take advantage of our availability as your Offshore Game Design Center. Your studio can make significant savings and improve player retention metrics by using fewer resources and merging them with our skilled team.",
        card2Title: "Certified Game Mechanics & Level Design Specialists",
        card2Text1: "One of the finest game creative firms, The Digital Connect provides you with a dedicated team of Game Designers. To craft compelling gameplay, our certified designers possess deep expertise in game pacing, difficulty curves, economy monetization models (F2P/Premium), Unity/Unreal level blocking, and UI/HUD ergonomics.",
        card2Text2: "Their creative capability enables us to provide effective contractual services in this area to meet your unique studio demands with production-ready asset packages, clear technical design specs, and rapid prototype feedback."
      }}
      whyChoosePoints={[
        {
          title: "Core Mechanics & Game Loop Design",
          desc: "Designing engaging moment-to-moment gameplay loops, reward systems, control schemes, and progression trees."
        },
        {
          title: "In-Game Economy & Monetization",
          desc: "Balancing currencies, gacha drops, battle passes, loot tables, and in-app purchase incentives without pay-to-win friction."
        },
        {
          title: "2D & 3D Level Design",
          desc: "Crafting spatial layouts, pacing landmarks, combat encounters, and environmental storytelling in Unity and Unreal."
        },
        {
          title: "Game UI / HUD & Diegetic Interfaces",
          desc: "Designing responsive, intuitive heads-up displays, inventory menus, talent trees, and interactive map interfaces."
        },
        {
          title: "Concept Art & Character Design",
          desc: "Creating evocative 2D character turnarounds, environment mood boards, weapon concepts, and UI sprite sheets."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Agile milestone sprints with playtesting sessions, design documentation updates, and organized asset exports."
        }
      ]}
      techHighlight={{
        title1: "Player Psychology & Long-Term Retention",
        desc1: "Our game designers apply behavioral psychology, flow state theory, and retention loops (daily quests, milestones, leaderboards) to maximize player lifetime value (LTV) and organic word-of-mouth growth.",
        title2: "Engine-Ready Asset Preparation",
        desc2: "We deliver all creative assets with optimal texture atlasing, modular tilemaps, UI sprite slices, and 3D model scales configured specifically for seamless import into Unity and Unreal Engine."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "Flexible hourly and monthly hiring models with zero hidden overheads. Scale your game design bandwidth on demand."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "Your game lore, mechanics, and concept art are completely protected. We enforce strict bilateral NDAs."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "Accelerate your game production pipeline with dedicated game designers and concept artists ready to prototype mechanics."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Certified designers skilled in Unity, Unreal Engine, Photoshop, Blender, Figma, GDD Authoring, and Level Design."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "You retain 100% full intellectual property and ownership of all GDD documents, concept art, level maps, and UI assets."
        }
      ]}
    />
  );
};

export default GameDesigner;
