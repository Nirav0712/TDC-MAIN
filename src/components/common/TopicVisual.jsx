import React from 'react';
import { motion } from 'framer-motion';
import {
    Code, Terminal, Cpu, Database, Server, Layers, Globe, Zap,
    ShieldCheck, CheckCircle2, Sparkles, Layout, Box, GitBranch,
    RefreshCw, Play, Activity, ArrowRight, Binary, Smartphone,
    Search, TrendingUp, BarChart3, PieChart, DollarSign, Target,
    Share2, MessageSquare, Heart, ThumbsUp, Eye, FileText,
    BookOpen, CheckCircle, Edit3, Gamepad2, Trophy, Compass,
    ShoppingBag, ShoppingCart, CreditCard, Lock, Palette, PenTool,
    Monitor, MousePointer, Award, Sliders, SmartphoneNfc, Radio,
    Send, FastForward, Check, FileCheck, Layers2, Code2
} from 'lucide-react';

export const TopicVisual = ({ title = '', index = 0, cta = '' }) => {
    const t = title.toLowerCase();

    // 1. MOBILE APP DEVELOPMENT (iOS, Android, Hybrid, Flutter, Swift, Kotlin, iPad)
    if (t.includes('mobile') || t.includes('ios') || t.includes('android') || t.includes('hybrid') || t.includes('ipad') || t.includes('swift') || t.includes('kotlin') || t.includes('flutter')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#F0F8FF] via-[#F6FAFF] to-[#EBF5FE] p-6 flex items-center justify-center relative select-none">
                {/* Background Ambient Glow */}
                <div className="absolute w-48 h-48 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none"></div>

                {/* Smartphone Mockup */}
                <div className="relative">
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[200px] sm:w-[220px] bg-[#0E1726] rounded-[42px] p-2.5 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.25)] border-4 border-[#1E293B] relative z-10"
                    >
                        {/* Dynamic Island Notch */}
                        <div className="flex items-center justify-between px-3 pt-0.5 pb-2">
                            <span className="text-[9px] font-bold text-slate-400 font-mono">9:41</span>
                            <div className="w-16 h-4 bg-black rounded-full border border-slate-800 flex items-center justify-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            </div>
                            <span className="text-[9px] font-bold text-cyan-400 font-mono">5G</span>
                        </div>

                        {/* Internal Screen Content */}
                        <div className="bg-white rounded-[32px] p-3 flex flex-col justify-between h-[190px] border border-slate-100 shadow-inner">
                            <div className="space-y-2.5">
                                <span className="text-xs font-bold text-slate-800 block truncate">
                                    {title.replace(/development|developer|services|service/gi, '').trim() || "Dashboard"}
                                </span>

                                {/* Primary Cyan Card */}
                                <div className="bg-cyan-50/90 border border-cyan-100 rounded-2xl p-2.5 space-y-1.5">
                                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-600">
                                        <Smartphone size={11} />
                                    </div>
                                    <div className="h-2 w-16 bg-cyan-300/60 rounded-full"></div>
                                    <div className="h-1.5 w-10 bg-cyan-200 rounded-full"></div>
                                </div>

                                {/* Mini Dual Cards */}
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                                        <div className="h-1.5 w-8 bg-slate-300 rounded-full"></div>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                                        <div className="h-1.5 w-8 bg-slate-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="w-16 h-1 bg-slate-300 rounded-full mx-auto"></div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">App Store Ready</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Zero Rejections</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                            <Sparkles size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Native Fluid UI</span>
                            <span className="text-[9px] text-slate-400 font-medium block">SwiftUI & Flutter</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 2. SEO & SEARCH VISIBILITY (SEO, Search, Audit, Technical SEO, Local SEO)
    if (t.includes('seo') || t.includes('search') || t.includes('audit')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#10b98118_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#F0FDF4] via-[#F7FEFA] to-[#EAFCF1] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Central SERP & Score Card */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-white rounded-[28px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-slate-100 relative z-10 space-y-3"
                    >
                        {/* Search Pill */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-inner">
                            <Search size={13} className="text-emerald-500" />
                            <span className="text-[10px] text-slate-600 font-medium truncate flex-1">
                                {title.replace(/service|services/gi, '').trim()}
                            </span>
                            <span className="text-[9px] font-black bg-emerald-500 text-white px-1.5 py-0.5 rounded-full">#1</span>
                        </div>

                        {/* Result Preview */}
                        <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-2xl p-2.5 space-y-1">
                            <span className="text-[9px] text-emerald-700 font-semibold block">tdc.agency › solutions</span>
                            <span className="text-xs font-bold text-slate-800 block truncate">Rank #1 Global Search</span>
                            <div className="h-1.5 w-full bg-emerald-200/60 rounded-full"></div>
                        </div>

                        {/* Lighthouse Metric */}
                        <div className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-700">Lighthouse Score</span>
                            <span className="text-xs font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">99/100</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <TrendingUp size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">+380% Organic</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Google Top 3</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Award size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Core Web Vitals</span>
                            <span className="text-[9px] text-slate-400 font-medium block">100% Passed</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 3. PPC & PAID ADS (PPC, Google Ads, Meta Ads, Display Ads, Social Ads, Performance Max)
    if (t.includes('ppc') || t.includes('ad') || t.includes('pay-per-click') || t.includes('bidding') || t.includes('campaign')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#3b82f618_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#EFF6FF] via-[#F6F9FE] to-[#E9F2FE] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Live Campaign Dashboard Mockup */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-white rounded-[28px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-slate-100 relative z-10 space-y-3"
                    >
                        {/* Status Header */}
                        <div className="flex items-center justify-between bg-blue-50/80 px-3 py-1.5 rounded-full border border-blue-100">
                            <span className="text-[10px] font-bold text-blue-700 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                Live Campaign
                            </span>
                            <span className="text-[9px] font-black text-blue-800 bg-white px-2 py-0.5 rounded-full shadow-sm">
                                ROAS 4.8x
                            </span>
                        </div>

                        {/* Central Metric */}
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center space-y-1">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Target CPA Optimised</span>
                            <span className="text-2xl font-black text-slate-800 block">$14.20</span>
                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                                -38% Cost Reduction
                            </span>
                        </div>

                        {/* Spend Growth Bars */}
                        <div className="flex items-end justify-between gap-1.5 px-2 pt-1">
                            {[35, 50, 70, 60, 90, 100].map((h, i) => (
                                <div key={i} style={{ height: `${h * 0.22}px` }} className={`w-6 rounded-t-md ${i === 5 ? 'bg-blue-600 shadow-md' : 'bg-blue-200'}`}></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <DollarSign size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">4.8x Active ROAS</span>
                            <span className="text-[9px] text-slate-400 font-medium block">High Intent Leads</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Sliders size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Smart AI Bidding</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Zero Ad Waste</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 4. SOCIAL MEDIA & INFLUENCER (Facebook, Instagram, LinkedIn, Twitter, SMM)
    if (t.includes('social') || t.includes('facebook') || t.includes('instagram') || t.includes('linkedin') || t.includes('twitter') || t.includes('smm')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#ec489918_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#FDF2F8] via-[#FEF7FB] to-[#FCE7F3] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Social Post Feed Mockup */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[220px] sm:w-[240px] bg-white rounded-[32px] p-3.5 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-pink-100 relative z-10 space-y-2.5"
                    >
                        {/* Profile Row */}
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-0.5">
                                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[9px] font-black text-pink-600">
                                    TDC
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-xs font-bold text-slate-800 block truncate flex items-center gap-1">
                                    {title.slice(0, 14)} <CheckCircle size={10} className="text-cyan-500 fill-cyan-500" />
                                </span>
                                <span className="text-[8px] text-slate-400 font-medium">Global Viral Reach</span>
                            </div>
                        </div>

                        {/* Media Visual Area */}
                        <div className="bg-gradient-to-tr from-pink-50 via-purple-50 to-blue-50 border border-pink-100 rounded-2xl p-3 space-y-1.5">
                            <div className="h-2 w-28 bg-pink-300/70 rounded-full"></div>
                            <div className="h-1.5 w-20 bg-purple-200 rounded-full"></div>
                        </div>

                        {/* Engagement Bar */}
                        <div className="flex items-center justify-between text-xs font-bold pt-1 border-t border-slate-100">
                            <span className="text-pink-500 flex items-center gap-1"><Heart size={12} className="fill-pink-500" /> 28.4K</span>
                            <span className="text-blue-500 flex items-center gap-1"><MessageSquare size={12} /> 1.8K</span>
                            <span className="text-purple-500 flex items-center gap-1"><Share2 size={12} /> 6.2K</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                            <Heart size={14} className="fill-pink-600" />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">+820% Viral</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Audience Surge</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Sparkles size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Trending #1</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Reels & TikTok</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 5. CONTENT MARKETING & COPYWRITING (Whitepapers, Case Studies, eBooks, Blogs, Scripts)
    if (t.includes('content') || t.includes('writing') || t.includes('blog') || t.includes('white paper') || t.includes('case stud') || t.includes('ebook') || t.includes('script')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#f59e0b18_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#FFFBEB] via-[#FEFDF6] to-[#FEF3C7] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-amber-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Notion / Editorial Sheet Mockup */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-white rounded-[26px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-amber-100 relative z-10 space-y-2.5"
                    >
                        {/* Header Pill */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                            <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                {title.slice(0, 18)}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400">2,450 Words</span>
                        </div>

                        {/* Highlighted text block */}
                        <div className="space-y-1.5 py-1">
                            <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                            <div className="h-4 w-4/5 bg-amber-100/90 rounded-lg px-2 flex items-center">
                                <span className="text-[8px] font-bold text-amber-900 uppercase">Thought Leadership Voice</span>
                            </div>
                            <div className="h-2 w-3/5 bg-slate-100 rounded-full"></div>
                        </div>

                        {/* Footer Quality Verification */}
                        <div className="flex items-center justify-between text-[9px] pt-1.5 border-t border-slate-100">
                            <span className="text-slate-500 font-medium">E-E-A-T Verified</span>
                            <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full">100% Original</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                            <FileCheck size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">E-E-A-T Score</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Google Approved</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                            <BookOpen size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">High Conversion</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Semantic NLP Flow</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 6. ECOMMERCE & STOREFRONTS (Shopify, WooCommerce, Magento, OpenCart, BigCommerce)
    if (t.includes('ecommerce') || t.includes('e-commerce') || t.includes('shopify') || t.includes('woocommerce') || t.includes('magento') || t.includes('opencart') || t.includes('bigcommerce') || t.includes('store') || t.includes('marketplace') || t.includes('payment')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#10b98118_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#ECFDF5] via-[#F6FEFA] to-[#D1FAE5] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Modern Storefront & Instant Checkout Card */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-white rounded-[28px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-emerald-100 relative z-10 space-y-3"
                    >
                        {/* Store Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Daily Revenue Surge</span>
                                <span className="text-xl font-black text-slate-800 block">$48,290.00</span>
                            </div>
                            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs">
                                +42%
                            </div>
                        </div>

                        {/* Instant 1-Click Buy Button */}
                        <div className="w-full bg-[#0A1024] text-white py-2 rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2 shadow-md">
                            <CreditCard size={13} className="text-emerald-400" />
                            1-Click Apple Pay / Stripe
                        </div>

                        {/* Security Uptime Footer */}
                        <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-100">
                            <span>99.99% Uptime</span>
                            <span className="font-bold text-emerald-600">Sub-Second Checkout</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <ShoppingBag size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">+42% Checkout</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Instant Conversion</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                            <ShieldCheck size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">PCI-DSS Level 1</span>
                            <span className="text-[9px] text-slate-400 font-medium block">100% Encrypted</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 7. UI / UX DESIGN & GRAPHIC (Web Design, Logo, Prototyping, Wireframing)
    if (t.includes('ui') || t.includes('ux') || t.includes('design') || t.includes('logo') || t.includes('graphic') || t.includes('wireframe') || t.includes('prototype')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#8b5cf618_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#F5F3FF] via-[#FAF8FF] to-[#EDE9FE] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Figma Artboard & Design Canvas */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-white rounded-[28px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-purple-100 relative z-10 space-y-3"
                    >
                        {/* Figma Header */}
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                            <span className="text-[10px] font-bold text-purple-700 flex items-center gap-1.5">
                                <Palette size={12} /> Figma Design System
                            </span>
                            <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#08BFE8]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#7928CA]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                            </div>
                        </div>

                        {/* Interactive UI Frame with Selection Handles */}
                        <div className="bg-purple-50/70 rounded-2xl p-3 border-2 border-dashed border-purple-300/70 relative space-y-2">
                            <div className="h-5 bg-white rounded-lg border border-purple-200 shadow-sm flex items-center px-2">
                                <div className="h-2 w-16 bg-purple-400/60 rounded-full"></div>
                            </div>
                            <div className="h-2 w-24 bg-purple-200 rounded-full"></div>

                            {/* Designer Cursor */}
                            <div className="absolute -bottom-2 right-2 bg-purple-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                                <MousePointer size={9} /> Lead UI/UX
                            </div>
                        </div>

                        {/* WCAG Rating */}
                        <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1">
                            <span>Pixel-Perfect Rig</span>
                            <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">WCAG AAA</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Palette size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Pixel-Perfect UI</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Modern Design System</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Layout size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Human-Centric UX</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Interactive Prototypes</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 8. GAME DEV / UNREAL / UNITY / METAVERSE / AR VR / 3D
    if (t.includes('game') || t.includes('unity') || t.includes('unreal') || t.includes('metaverse') || t.includes('ar/vr') || t.includes('ar & vr') || t.includes('simulation') || t.includes('3d')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#ec489918_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#FDF2F8] via-[#F8FAFC] to-[#F1F5F9] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Gaming Handheld Console Viewport Mockup */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[240px] sm:w-[260px] bg-[#0F172A] rounded-[36px] p-2.5 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.3)] border-4 border-slate-700 flex items-center justify-between relative z-10"
                    >
                        {/* Left D-Pad */}
                        <div className="flex flex-col items-center gap-1 pl-1">
                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-sm"></div>
                            <div className="flex gap-1">
                                <div className="w-2.5 h-2.5 bg-slate-600 rounded-sm"></div>
                                <div className="w-2.5 h-2.5 bg-slate-600 rounded-sm"></div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-600 mt-1"></div>
                        </div>

                        {/* Center Viewport */}
                        <div className="bg-[#020617] rounded-2xl p-2.5 flex flex-col items-center justify-center border border-cyan-500/40 w-[140px] h-[130px] relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                                className="w-14 h-14 rounded-full border-2 border-dashed border-cyan-400 flex items-center justify-center"
                            >
                                {t.includes('metaverse') ? <Globe className="w-7 h-7 text-cyan-300" /> : <Box className="w-7 h-7 text-pink-400" />}
                            </motion.div>
                            <span className="text-[9px] font-mono font-bold text-cyan-300 mt-1">120 FPS • 4K</span>
                        </div>

                        {/* Right Buttons */}
                        <div className="flex flex-col items-center gap-1 pr-1">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-pink-500 text-[6px] text-white flex items-center justify-center">X</div>
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 text-[6px] text-white flex items-center justify-center">Y</div>
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 text-[6px] text-white flex items-center justify-center">A</div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 text-[6px] text-white flex items-center justify-center">B</div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-600 mt-1"></div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                            <Gamepad2 size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">120 FPS 4K</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Unreal 5 & Unity</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                            <Box size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Spatial 3D Engine</span>
                            <span className="text-[9px] text-slate-400 font-medium block">AR/VR & Metaverse</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 9. BACKEND / APIS / MICROSERVICES / DATABASE / CLOUD / SAAS / CRM / ERP
    if (t.includes('api') || t.includes('backend') || t.includes('database') || t.includes('microservices') || t.includes('cloud') || t.includes('crm') || t.includes('erp') || t.includes('saas') || t.includes('automation') || t.includes('server')) {
        return (
            <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#0284c718_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#F0F9FF] via-[#F8FAFC] to-[#E0F2FE] p-6 flex items-center justify-center relative select-none">
                <div className="absolute w-48 h-48 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    {/* Cloud Microservices Architecture Console */}
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[230px] sm:w-[250px] bg-[#0B132B] rounded-[28px] p-4 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.3)] border-2 border-slate-700 text-white relative z-10 space-y-3 font-mono"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between pb-1 border-b border-slate-700">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            </div>
                            <span className="text-[9px] font-bold text-emerald-400 font-sans">200 OK (12ms)</span>
                        </div>

                        {/* Pipeline Node Diagram */}
                        <div className="flex items-center justify-between gap-1 py-1 font-sans">
                            <div className="bg-white/10 p-2 rounded-xl text-center flex-1">
                                <Globe size={13} className="text-cyan-400 mx-auto" />
                                <span className="text-[8px] font-bold block mt-0.5">Gateway</span>
                            </div>
                            <span className="text-cyan-400 font-bold text-[10px]">➔</span>
                            <div className="bg-cyan-950/80 border border-cyan-400/50 p-2 rounded-xl text-center flex-1 shadow">
                                <Zap size={13} className="text-amber-400 mx-auto" />
                                <span className="text-[8px] font-bold block mt-0.5">API Hub</span>
                            </div>
                            <span className="text-emerald-400 font-bold text-[10px]">➔</span>
                            <div className="bg-white/10 p-2 rounded-xl text-center flex-1">
                                <Database size={13} className="text-emerald-400 mx-auto" />
                                <span className="text-[8px] font-bold block mt-0.5">Clusters</span>
                            </div>
                        </div>

                        {/* Fault Tolerance Footer */}
                        <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 font-sans">
                            <span>99.999% Reliability</span>
                            <span className="text-emerald-400 font-bold">100k+ req/sec</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 (Top Right) */}
                    <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                            <Server size={14} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">Cloud Scale API</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Microservices Engine</span>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 (Bottom Left) */}
                    <motion.div
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                    >
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <ShieldCheck size={15} />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-slate-800 block leading-tight">99.999% Faultless</span>
                            <span className="text-[9px] text-slate-400 font-medium block">Zero Downtime Sync</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 10. FRONTEND / JAVASCRIPT / REACT / VUE / ANGULAR / PHP / WORDPRESS / CMS
    return (
        <div className="w-full h-full min-h-[300px] bg-[radial-gradient(#3b82f618_1px,transparent_1px)] [background-size:16px_16px] bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-[#E6F0FA] p-6 flex items-center justify-center relative select-none">
            <div className="absolute w-48 h-48 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative">
                {/* Modern Browser Window Mockup */}
                <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[230px] sm:w-[250px] bg-white rounded-[26px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] border-2 border-slate-200/90 overflow-hidden relative z-10"
                >
                    {/* Browser Nav */}
                    <div className="bg-slate-100/90 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <div className="bg-white px-2 py-0.5 rounded-full text-[8px] text-slate-600 font-mono border border-slate-200 flex items-center gap-1 flex-1 mx-1.5 shadow-sm">
                            <Lock size={8} className="text-emerald-500" /> https://app.dev
                        </div>
                    </div>

                    {/* Web Content */}
                    <div className="p-3.5 space-y-2 bg-[#FAFCFF]">
                        <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-2 flex items-center justify-between">
                            <div>
                                <span className="text-[9px] font-bold text-slate-800 block truncate">{title.slice(0, 16)}</span>
                                <span className="text-[7px] text-blue-600">High-Velocity SPA</span>
                            </div>
                            <span className="text-[8px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-md shadow-sm">Build OK</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                            <div className="h-6 bg-slate-100 rounded-lg border border-slate-200/60"></div>
                            <div className="h-6 bg-slate-100 rounded-lg border border-slate-200/60"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Badge 1 (Top Right) */}
                <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 -right-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                >
                    <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Zap size={14} />
                    </div>
                    <div className="text-left">
                        <span className="text-xs font-bold text-slate-800 block leading-tight">Fast-Refresh</span>
                        <span className="text-[9px] text-slate-400 font-medium block">0.3s Build Time</span>
                    </div>
                </motion.div>

                {/* Floating Badge 2 (Bottom Left) */}
                <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2.5 z-20"
                >
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Code2 size={14} />
                    </div>
                    <div className="text-left">
                        <span className="text-xs font-bold text-slate-800 block leading-tight">Clean Codebase</span>
                        <span className="text-[9px] text-slate-400 font-medium block">Zero Memory Leak</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export { TopicCard } from './TopicCard';
export default TopicVisual;
