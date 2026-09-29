import { Code, Smartphone, PenTool, ShoppingCart, Cpu, TrendingUp, Gamepad2 } from 'lucide-react';

export const servicesData = [
    {
        id: '01',
        title: 'Web & CMS Development',
        desc: 'Custom, scalable web applications and high-performance CMS platforms built with modern frameworks.',
        icon: Code,
        link: '/services/web-development'
    },
    {
        id: '02',
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile solutions for iOS, Android, Flutter, and React Native.',
        icon: Smartphone,
        link: '/services/mobile-app-development'
    },
    {
        id: '03',
        title: 'Designing Services',
        desc: 'User-centered UI/UX design, brand identity, and intuitive digital interfaces that drive conversion.',
        icon: PenTool,
        link: '/services/ui-ux-design'
    },
    {
        id: '04',
        title: 'eCommerce Development',
        desc: 'Secure, high-converting digital storefronts, Shopify, Magento, WooCommerce, and B2B portals.',
        icon: ShoppingCart,
        link: '/services/ecommerce-development'
    },
    {
        id: '05',
        title: 'JavaScript Development',
        desc: 'Enterprise full-stack JavaScript, React, Next.js, Node.js, and modern SPA architecture.',
        icon: Cpu,
        link: '/hire/javascript-developers'
    },
    {
        id: '06',
        title: 'Game Development',
        desc: 'Immersive 2D/3D games, Unreal Engine, Unity 3D, AR/VR, and Metaverse experiences.',
        icon: Gamepad2,
        link: '/services/game-development'
    },
    {
        id: '07',
        title: 'Digital Marketing',
        desc: 'Data-driven SEO, PPC campaigns, social media marketing, and growth strategies to scale your brand.',
        icon: TrendingUp,
        link: '/services/digital-marketing'
    }
];

export default servicesData;
