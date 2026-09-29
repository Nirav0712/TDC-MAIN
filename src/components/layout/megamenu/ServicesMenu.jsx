import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code, Smartphone, PenTool, ShoppingCart, Monitor, TrendingUp,
    Terminal, Layers, Globe, Database, ShieldCheck, Cpu, Layout,
    Search, Share2, FileText, ArrowRight, Sparkles, CheckCircle2, Gamepad2
} from 'lucide-react';

const getSubIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('game') || t.includes('unity') || t.includes('unreal') || t.includes('metaverse')) return Gamepad2;
    if (t.includes('ios') || t.includes('android') || t.includes('mobile') || t.includes('hybrid')) return Smartphone;
    if (t.includes('design') || t.includes('ui') || t.includes('ux') || t.includes('logo') || t.includes('graphic')) return PenTool;
    if (t.includes('shop') || t.includes('commerce') || t.includes('magento') || t.includes('opencart')) return ShoppingCart;
    if (t.includes('seo') || t.includes('marketing') || t.includes('ppc') || t.includes('social')) return TrendingUp;
    if (t.includes('api') || t.includes('backend') || t.includes('database') || t.includes('cloud')) return Database;
    if (t.includes('crm') || t.includes('erp') || t.includes('saas') || t.includes('automation')) return Layers;
    return Code;
};

const ServicesMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0]?.id || 'web-development');

    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];

    return (
        <div className="flex w-full min-h-[460px] bg-white overflow-hidden">
            {/* Left Categories Sidebar (Navy/Blue) */}
            <div className="w-[280px] shrink-0 bg-[#0B3A60] py-6 px-3 flex flex-col justify-start relative z-20 gap-1.5 shadow-[inset_-8px_0_16px_rgba(0,0,0,0.15)]">
                {data.items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className="w-full"
                        >
                            <Link
                                to={item.href}
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-center px-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-white text-[#0B3A60] font-bold shadow-md'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <span>{item.label}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Right Main Content Area */}
            <div className="flex-1 bg-white p-8 lg:p-10 relative z-10 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col w-full h-full"
                    >
                        {/* Heading */}
                        <div className="mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-[#0B3A60] tracking-tight">
                                {currentItem.heading}
                            </h3>
                            <Link
                                to={currentItem.href}
                                onClick={() => setActiveMenu(null)}
                                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors uppercase tracking-wider"
                            >
                                View All Services <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Content Grid: 2 Columns of Subservices + Featured Framed Image */}
                        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-8 items-start flex-1">
                            {/* 2-Column Subservices List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-2">
                                {currentItem.subServices?.map((sub, idx) => {
                                    const SubIcon = getSubIcon(sub.title);
                                    return (
                                        <Link
                                            key={idx}
                                            to={sub.href}
                                            onClick={() => setActiveMenu(null)}
                                            className="group flex items-center gap-3.5 p-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-[#0B3A60] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-cyan-600 group-hover:scale-105 transition-all">
                                                <SubIcon className="w-4 h-4" />
                                            </div>
                                            <span className="font-semibold text-[14px] text-slate-800 group-hover:text-cyan-600 transition-colors">
                                                {sub.title}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Right Featured Image with Offset Floating Frame */}
                            {currentItem.image && (
                                <div className="relative w-[280px] lg:w-[310px] shrink-0 self-center hidden lg:block my-auto">
                                    {/* Offset floating border box */}
                                    <div className="absolute -top-2.5 -right-2.5 w-full h-full border-2 border-[#0B3A60]/40 rounded-2xl pointer-events-none"></div>
                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ServicesMenu;
