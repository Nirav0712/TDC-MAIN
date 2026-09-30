import React from 'react';
import DeveloperHireTemplate from '../../../components/hire/DeveloperHireTemplate';
import { RefreshCw, Lock, Zap, Cpu, Shield } from 'lucide-react';

const PhpDeveloper = () => {
  return (
    <DeveloperHireTemplate
      techName="PHP"
      pageCategory="Web Developers"
      categoryUrl="/hire-team/web-developers"
      pageTitle="Hire Dedicated PHP Developers | Certified PHP Web Experts | The Digital Connect"
      metaDescription="Hire certified and gifted PHP developers from The Digital Connect. 6+ years experience, 100+ projects delivered, 24/7 technical support, and flexible hiring models."
      tagline="We successfully enhance your online presence"
      heroDescription="We have a group of gifted and dedicated PHP developers who have experience building PHP applications. Get in touch with us for your free quote."
      heroBullets={[
        "Expertise in the latest PHP development and trends",
        "Increased scalability and flexibility of applications",
        "Reduced risk of errors or bugs in the website & application"
      ]}
      stats={[
        { value: "6+", label: "Years of Experience" },
        { value: "100+", label: "PHP Projects Delivered" },
        { value: "24/7", label: "Technical Support" }
      ]}
      whyHireIntro={{
        card1Title: "Cutting-Edge, All-Inclusive PHP Programming Solutions",
        card1Text1: "Does your company need PHP developers? We at The Digital Connect provide cutting-edge, all-inclusive PHP programming solutions. We help organizations worldwide by generating high returns on investment through successful deployment.",
        card1Text2: "Utilizing extensive industry knowledge and skills, we offer adaptable experienced PHP developers, allowing you to take advantage of our availability as your Offshore Development Center. Your company can make significant savings and improve the effectiveness of its IT strategy by using fewer resources and merging them with our skilled team in this scenario.",
        card2Title: "Trained Engineers & Contractual Services",
        card2Text1: "One of the finest PHP development firms, we at The Digital Connect provide you with a dedicated team of PHP developers. To create some of the most sophisticated applications, our certified PHP developers are trained engineers with a wealth of expertise dealing with this technology.",
        card2Text2: "Their potential enables us to provide effective contractual services in this area to meet your unique company demands with high precision, high code quality, and strict performance metrics."
      }}
      whyChoosePoints={[
        {
          title: "Work with Professionals",
          desc: "Work with professionals who are familiar with common approaches and clean architectural standards."
        },
        {
          title: "Bespoke PHP Applications",
          desc: "Development of individual bespoke applications crafted precisely around your business logic and workflows."
        },
        {
          title: "Real-Time Project Management",
          desc: "Project management that is efficient, transparent, and tracked in real-time with daily and weekly milestones."
        },
        {
          title: "PHP Upgrades & Migrations",
          desc: "Knowledgeable about modern PHP upgrades, legacy refactoring, and seamless database migrations."
        },
        {
          title: "Flexible Engagement Models",
          desc: "A project's flexible engagement models allowing you to scale hours and developer bandwidth on demand."
        },
        {
          title: "Guaranteed On-Time Delivery",
          desc: "Proven agile sprint delivery ensuring your web apps and backend modules launch strictly on schedule."
        }
      ]}
      techHighlight={{
        title1: "Broad Range of PHP & Web Programming Skills",
        desc1: "We at The Digital Connect provide top PHP developers with a broad range of skills, enabling them to work on everything from the most straightforward PHP programs to complex websites. Our affordable PHP developers can help create a satisfying user experience for your application or website users because they are knowledgeable about programming languages and online solutions.",
        title2: "Full-Stack Synergy & Background Web Services",
        desc2: "Hire Indian PHP developers to create dynamic and functional websites and online applications. We at The Digital Connect would be in charge of building the framework for online apps and carrying out background web services. All of our PHP developers can work with the other developers on the project team because they all have a basic understanding of the front-end development process. We can offer a variety of PHP-related services thanks to our technical expertise in PHP front-end, PHP developer tools, eCommerce solutions, and web apps."
      }}
      benefits={[
        {
          icon: RefreshCw,
          title: "100% Transparency and Flexibility",
          desc: "We don't have any hidden fees when you employ PHP developers from us. We remain open for the duration of our engagement. Hire seasoned PHP developers according to your requirements, with the flexibility to quickly ramp up or scale down as necessary to adapt to shifting business demands."
        },
        {
          icon: Lock,
          title: "Security and Discretion",
          desc: "With The Digital Connect, your data is entirely secure, and we value your privacy. Our team uses strict data protection methods and signed Non-Disclosure Agreements (NDAs) to guarantee total confidentiality of ongoing projects."
        },
        {
          icon: Zap,
          title: "Opt for Operational Agility",
          desc: "We give you all the tools and engineering support you need to strengthen your company while assisting you in constructing a scalable, modern technology ecosystem."
        },
        {
          icon: Cpu,
          title: "Skilled Programmers",
          desc: "Total accessibility with our knowledgeable PHP engineers in your frameworks. Our PHP developers offer deep domain expertise to create custom web solutions tailored to specific industries."
        },
        {
          icon: Shield,
          title: "Possession of the Project",
          desc: "Hire PHP developer strategy gives our team direct control of projects, enabling them to be finished on schedule. 100% source code, repository, and intellectual property ownership is entirely transparent to you."
        }
      ]}
    />
  );
};

export default PhpDeveloper;
