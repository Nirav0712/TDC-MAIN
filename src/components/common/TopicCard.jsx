import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import TopicVisual from './TopicVisual';

export const TopicCard = ({
    svc,
    title,
    cta,
    icon,
    link,
    index = 0,
    className = ''
}) => {
    // Resolve props from svc object or direct props
    const cardTitle = svc?.title || title || '';
    const cardCta = svc?.cta || cta || 'Get Started';
    const cardIcon = svc?.icon || icon || <Sparkles className="w-6 h-6" />;
    const cardLink = svc?.link || link || '/contact';

    // 6 Distinct Non-Square Chassis Geometries
    const variants = [
        // 0: Cyber Capsule Dock
        {
            outer: 'bg-gradient-to-b from-white via-slate-50/70 to-slate-100/90 rounded-t-[44px] rounded-br-[16px] rounded-bl-[44px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border border-slate-200/80',
            visual: 'rounded-t-[36px] rounded-br-[12px] rounded-bl-[36px]',
            cta: 'rounded-b-[12px] rounded-bl-[36px] rounded-t-[10px]',
            glow: 'bg-cyan-400/20',
        },
        // 1: Asymmetric Chamfer Blade
        {
            outer: 'bg-white rounded-tl-[48px] rounded-br-[48px] rounded-tr-[18px] rounded-bl-[18px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border-2 border-slate-100',
            visual: 'rounded-tl-[40px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]',
            cta: 'rounded-br-[40px] rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px]',
            glow: 'bg-emerald-400/20',
        },
        // 2: Diagonal Studio Deck
        {
            outer: 'bg-gradient-to-tr from-white to-purple-50/40 rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[18px] rounded-br-[18px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border border-purple-100/90',
            visual: 'rounded-tr-[40px] rounded-tl-[14px] rounded-br-[14px] rounded-bl-[14px]',
            cta: 'rounded-bl-[40px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px]',
            glow: 'bg-purple-400/20',
        },
        // 3: Architectural Shield Notch
        {
            outer: 'bg-white rounded-[32px] rounded-tl-[56px] rounded-br-[14px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border border-slate-200/90',
            visual: 'rounded-[24px] rounded-tl-[48px]',
            cta: 'rounded-[18px] rounded-br-[10px]',
            glow: 'bg-orange-400/20',
        },
        // 4: Curved Retail Arc Folio
        {
            outer: 'bg-white rounded-t-[24px] rounded-b-[48px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border-b-4 border-emerald-400/40 border-t border-l border-r border-slate-100',
            visual: 'rounded-t-[18px] rounded-b-[18px]',
            cta: 'rounded-b-[40px] rounded-t-[14px]',
            glow: 'bg-teal-400/20',
        },
        // 5: Organic Hex Neo-Morph
        {
            outer: 'bg-white rounded-[40px] rounded-tr-[14px] rounded-bl-[14px] shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] border border-indigo-100/90',
            visual: 'rounded-[32px] rounded-tr-[10px] rounded-bl-[10px]',
            cta: 'rounded-[18px] rounded-bl-[10px]',
            glow: 'bg-indigo-400/20',
        }
    ];

    const v = variants[index % variants.length];

    return (
        <div className={`w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col ${className}`}>
            {/* Dynamic ambient halo */}
            <div className={`absolute -inset-4 sm:-inset-6 ${v.glow} rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700`}></div>

            {/* Asymmetrical Custom Parent Container */}
            <div className={`relative w-full flex-1 p-2.5 flex flex-col transition-all duration-300 ${v.outer}`}>
                {/* Visual Area with Matching Organic Contour */}
                <div className={`relative w-full flex-1 min-h-[250px] overflow-hidden ${v.visual}`}>
                    <TopicVisual title={cardTitle} index={index} cta={cardCta} />
                </div>

                {/* Customized Organic Bottom Action Bar */}
                <Link
                    to={cardLink}
                    className={`group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 transition-all hover:bg-slate-900 gap-4 mt-1.5 shrink-0 shadow-md ${v.cta}`}
                >
                    <div className="text-orange-400 shrink-0">
                        {React.isValidElement(cardIcon)
                            ? React.cloneElement(cardIcon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })
                            : cardIcon}
                    </div>
                    <span className="font-semibold text-sm sm:text-base leading-snug flex-1">
                        {cardCta}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/50 group-hover/link:text-white group-hover/link:translate-x-1 transition-all shrink-0" />
                </Link>
            </div>
        </div>
    );
};

export default TopicCard;
