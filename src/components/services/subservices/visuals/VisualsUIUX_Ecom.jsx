import React from 'react';
import { motion } from 'framer-motion';
import { Search, User, Target, Pointer, Palette, Component, Layers, Zap, ShoppingBag, ChevronRight, Store, ShoppingCart, CreditCard, Database, LockKeyhole, ChartBar, LayoutDashboard, PenTool, Sparkles, Monitor, Smartphone, Globe, Compass, CheckCircle2, ShieldCheck, Brush } from 'lucide-react';

export const GraphicDesignVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-6, 6, -6] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-600">
                        <Palette size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Creative Canvas</h4>
                        <p className="text-[10px] text-slate-500">Vector & Visual Artboard</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-pink-50 text-pink-700 border border-pink-100 rounded-full flex items-center gap-1">
                    <Sparkles size={10} /> 300 DPI Export
                </span>
            </div>

            {/* Artboard Canvas */}
            <div className="w-full flex-1 my-3 bg-gradient-to-br from-pink-50/50 via-purple-50/40 to-slate-50 rounded-2xl border border-dashed border-pink-200 p-4 relative flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                        <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/80 px-2 py-0.5 rounded border border-slate-100">CMYK / RGB</span>
                </div>

                <div className="flex items-center justify-center py-4 relative">
                    <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 shadow-xl flex items-center justify-center text-white relative">
                        <Brush size={36} />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 text-yellow-950 font-bold text-[9px] flex items-center justify-center shadow">
                            HD
                        </motion.div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/90 p-2 rounded-lg border border-slate-100 text-[10px] font-bold text-[#0A1024]">
                        <span className="text-pink-500">Typography:</span> Outfit & Inter
                    </div>
                    <div className="bg-white/90 p-2 rounded-lg border border-slate-100 text-[10px] font-bold text-[#0A1024]">
                        <span className="text-purple-500">Asset Pack:</span> Vector Assets
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-bold text-slate-600">Brand Collateral Ready</span>
                <span className="text-[10px] font-bold text-pink-600">Print & Digital</span>
            </div>
        </motion.div>
    </div>
);

export const LogoDesignVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                        <PenTool size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Brand Mark Studio</h4>
                        <p className="text-[10px] text-slate-500">Golden Ratio Construction</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full">
                    Vector Master
                </span>
            </div>

            {/* Geometric Grid Showcase */}
            <div className="w-full flex-1 my-3 bg-slate-900 rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
                
                <div className="flex justify-between relative z-10">
                    <span className="text-[9px] font-mono text-cyan-400">φ = 1.618 (Golden Ratio)</span>
                    <span className="text-[9px] font-mono text-slate-400">100% Scalable SVG</span>
                </div>

                <div className="flex items-center justify-center relative z-10 py-3">
                    <div className="relative flex items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-28 h-28 rounded-full border border-dashed border-cyan-400/40 absolute"></motion.div>
                        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center text-white font-black text-2xl tracking-tighter">
                            TDC
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-10">
                    <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700 text-center">
                        <span className="text-[9px] text-slate-400 block">Iconic Mark</span>
                        <span className="text-[10px] font-bold text-white">Monogram</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700 text-center">
                        <span className="text-[9px] text-slate-400 block">Lockup</span>
                        <span className="text-[10px] font-bold text-white">Horizontal</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700 text-center">
                        <span className="text-[9px] text-slate-400 block">Guideline</span>
                        <span className="text-[10px] font-bold text-cyan-400">Stylebook</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600">Trademark & Copyright Ready</span>
                <span className="text-[10px] font-bold text-indigo-600 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Full Ownership
                </span>
            </div>
        </motion.div>
    </div>
);

export const WebDesignVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                        <Monitor size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Responsive Web View</h4>
                        <p className="text-[10px] text-slate-500">Desktop & Mobile Optimized</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={10} /> 99+ PageSpeed
                </span>
            </div>

            {/* Desktop Mockup Frame */}
            <div className="w-full flex-1 my-3 bg-slate-50 rounded-2xl border border-slate-200 p-3 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 pb-2 border-b border-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    <div className="flex-1 max-w-[200px] h-4 bg-white rounded border border-slate-200 ml-2 px-2 flex items-center">
                        <span className="text-[8px] text-slate-400">https://yourbrand.com</span>
                    </div>
                </div>

                {/* Web content wireframe */}
                <div className="flex-1 py-2 flex flex-col gap-2 justify-center">
                    <div className="w-3/4 h-5 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-md"></div>
                    <div className="w-1/2 h-2.5 bg-slate-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded"></div>

                    <div className="grid grid-cols-3 gap-2 mt-1">
                        <div className="h-12 bg-white rounded-lg border border-slate-200 p-1.5 flex flex-col justify-between">
                            <div className="w-4 h-4 rounded bg-cyan-100"></div>
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-12 bg-white rounded-lg border border-slate-200 p-1.5 flex flex-col justify-between">
                            <div className="w-4 h-4 rounded bg-indigo-100"></div>
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-12 bg-white rounded-lg border border-slate-200 p-1.5 flex flex-col justify-between">
                            <div className="w-4 h-4 rounded bg-pink-100"></div>
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                    <span className="text-[9px] font-bold text-slate-500">Fluid Grid & Auto-Layout</span>
                    <button className="px-3 py-1 bg-[#0A1024] text-white font-bold text-[9px] rounded-lg">Live Preview</button>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600">Cross-Device Pixel Perfect</span>
                <span className="text-[10px] font-bold text-cyan-600">High-Conversion UX</span>
            </div>
        </motion.div>
    </div>
);

export const UIUXDesignVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex gap-6">
            <div className="w-1/3 flex flex-col gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
                    <span className="font-bold text-xs text-[#0A1024]">Primary</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0A1024]"></div>
                    <span className="font-bold text-xs text-[#0A1024]">Dark</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1 items-start">
                    <div className="font-serif font-bold text-lg text-[#0A1024]">Inter</div>
                    <span className="font-bold text-[10px] text-slate-500">Typography</span>
                </div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div className="w-full p-5 bg-white rounded-xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4"><Palette size={20} /></div>
                    <div className="text-sm font-bold text-[#0A1024] mb-2">Design Tokens</div>
                    <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
                <button className="w-full py-4 bg-cyan-600 text-white rounded-xl shadow-lg font-bold text-sm hover:scale-105 transition-transform">
                    Interactive Button
                </button>
            </div>
        </motion.div>
    </div>
);

export const UXResearchVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-8 flex flex-col justify-between">
            <h4 className="text-xl font-bold text-[#0A1024] mb-6">User Journey Maps</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-50 p-4 shadow-sm border border-slate-100 rounded-xl">
                    <User className="text-cyan-600 mb-2" size={24} />
                    <p className="font-bold text-sm text-[#0A1024]">User Persona A</p>
                    <p className="text-[10px] text-slate-500">High intent buyer</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-indigo-50 p-4 shadow-sm border border-indigo-100 rounded-xl">
                    <Target className="text-indigo-600 mb-2" size={24} />
                    <p className="font-bold text-sm text-[#0A1024]">Conversion Goal</p>
                    <p className="text-[10px] text-slate-500">Checkout Success</p>
                </motion.div>
            </div>
            {/* Journey Map */}
            <div className="w-full mt-8 bg-slate-50 border border-slate-100 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-cyan-200 -z-10"></div>
                <div className="flex justify-between relative z-10 w-full">
                    {[1, 2, 3, 4].map(i => (
                        <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }} className="w-10 h-10 rounded-full bg-white shadow-md border border-cyan-100 flex items-center justify-center text-cyan-600 font-bold">{i}</motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
);

export const WireframingVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col">
            <h4 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">Wireframe Prototype</h4>
            <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-xl relative p-4 grid grid-rows-[auto_1fr_auto] gap-4">
                <div className="w-full h-12 border border-slate-200 rounded-lg flex items-center justify-between px-4 sm:px-6 bg-slate-50">
                    <div className="w-8 h-8 rounded-full border border-slate-200 bg-white"></div>
                    <div className="flex gap-2">
                        <div className="w-12 h-3 bg-slate-200 rounded-full"></div>
                        <div className="w-12 h-3 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
                <div className="w-full h-full border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-8 rounded-lg gap-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
                    <div className="w-48 h-4 bg-slate-200 rounded-full"></div>
                    <div className="w-32 h-4 bg-slate-200 rounded-full"></div>
                </div>
            </div>
            <motion.div animate={{ x: [0, 50, 0], y: [0, 50, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute top-1/3 left-1/3 text-cyan-600 z-30 drop-shadow-lg">
                <Pointer size={32} fill="currentColor" />
            </motion.div>
        </motion.div>
    </div>
);

export const PrototypingVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-[80%] flex justify-between items-center relative">
            <svg className="absolute w-full h-[40px] top-1/2 -z-10 -translate-y-1/2">
                <motion.path d="M 0 20 Q 50% 0 100% 20" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="3" fill="none" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
            </svg>
            <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-[45%] h-full bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                <div className="h-10 bg-slate-100 flex items-center px-4 sm:px-6"><span className="text-[10px] font-bold text-slate-400">Screen 1</span></div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                    <div className="w-full h-24 bg-cyan-50 rounded-xl border border-cyan-200 cursor-pointer flex items-center justify-center font-bold text-cyan-600 text-xs">Tap Target</div>
                    <div className="w-full h-24 bg-slate-50 rounded-xl border border-slate-100"></div>
                </div>
            </motion.div>
            <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="w-[45%] h-[110%] bg-white rounded-3xl shadow-2xl border border-cyan-200 overflow-hidden flex flex-col relative z-10">
                <div className="h-40 bg-cyan-50 flex items-center justify-center border-b border-cyan-100"><Zap className="text-cyan-600" size={32} /></div>
                <div className="p-6">
                    <div className="text-sm font-bold text-[#0A1024] mb-2">Result Interaction</div>
                    <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-slate-100 rounded-full"></div>
                </div>
            </motion.div>
        </div>
    </div>
);

export const UIDesignVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex gap-6">
            <div className="w-1/3 flex flex-col gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
                    <span className="font-bold text-xs text-[#0A1024]">Primary</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0A1024]"></div>
                    <span className="font-bold text-xs text-[#0A1024]">Dark</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1 items-start">
                    <div className="font-serif font-bold text-lg text-[#0A1024]">Inter</div>
                    <span className="font-bold text-[10px] text-slate-500">Typography</span>
                </div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div className="w-full p-5 bg-white rounded-xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4"><Palette size={20} /></div>
                    <div className="text-sm font-bold text-[#0A1024] mb-2">Design Tokens</div>
                    <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
                <button className="w-full py-4 bg-cyan-600 text-white rounded-xl shadow-lg font-bold text-sm hover:scale-105 transition-transform">
                    Interactive Button
                </button>
            </div>
        </motion.div>
    </div>
);

export const DesignSystemsVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full h-full relative z-20">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
                <div className="px-3.5 py-2 bg-cyan-50 text-cyan-700 font-bold text-xs rounded-full border border-cyan-100">Design Token</div>
                <code className="text-xs text-slate-500 bg-slate-50 px-4 sm:px-6 py-1 rounded-md border border-slate-100">--color-primary</code>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex items-center justify-center">
                <button className="px-4 sm:px-6 py-3 bg-[#0A1024] text-white rounded-xl shadow-md font-bold flex items-center gap-2 hover:scale-105 transition-transform"><Component size={16} /> Base Button</button>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col justify-center gap-3">
                <div className="w-full h-10 bg-white border border-slate-200 rounded-lg flex items-center px-4 sm:px-6 gap-2"> <div className="w-3 h-3 rounded-full bg-slate-300"></div> <span className="text-xs font-bold text-slate-400">Input Default</span></div>
                <div className="w-full h-10 bg-cyan-50 border border-cyan-300 rounded-lg flex items-center px-4 sm:px-6 gap-2 shadow-sm"> <div className="w-3 h-3 rounded-full bg-cyan-500"></div> <span className="text-xs font-bold text-cyan-700">Input Active</span></div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-slate-50 rounded-2xl shadow-inner border border-slate-200 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Layers className="text-slate-200 w-24 h-24 absolute -right-2 -bottom-2" />
                <span className="font-extrabold text-sm text-[#0A1024] z-10 w-full text-center">Figma to React<br />Component Library</span>
            </motion.div>
        </div>
    </div>
);

export const ShopifyVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 5 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative z-20">
            <div className="h-16 border-b border-slate-100 flex justify-between items-center px-4 sm:px-6 bg-slate-50">
                <div className="font-bold text-sm text-[#0A1024]">Shopify Plus Store</div>
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center"><Search size={14} className="text-slate-500" /></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white shadow-sm"><ShoppingBag size={14} /></div>
                </div>
            </div>
            <div className="w-full h-40 bg-cyan-50 flex items-center px-2 relative overflow-hidden border-b border-cyan-100">
                <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-200/50 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
                <div className="z-10">
                    <div className="w-32 h-4 bg-cyan-600/20 rounded-full mb-3"></div>
                    <div className="w-48 h-8 bg-cyan-600 rounded-md mb-4"></div>
                    <div className="w-24 h-8 bg-cyan-600/30 rounded-full border border-cyan-600/50"></div>
                </div>
            </div>
            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map(i => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 flex flex-col cursor-pointer hover:shadow-md hover:border-cyan-300 transition-all">
                        <div className="w-full h-24 bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-300"><Layers size={24} /></div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="font-bold text-xs text-[#0A1024]">Product {i}</div>
                            <div className="text-xs font-bold text-cyan-600">$120</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
);

export const WooCommerceVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full bg-white rounded-3xl shadow-xl flex border border-slate-200 overflow-hidden relative">
            <div className="w-[140px] bg-slate-50 p-4 flex flex-col gap-2 border-r border-slate-200">
                <div className="w-full h-8 mb-4 flex items-center gap-2 text-[#0A1024] font-black"><Store size={20} className="text-indigo-600" /> WOO</div>
                {['Dashboard', 'Orders', 'Products', 'Analytics', 'Marketing'].map((t, i) => (
                    <div key={i} className={`w-full py-2 px-4 sm:px-6 rounded-lg text-xs font-bold ${i === 1 ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'text-slate-500 hover:bg-slate-100'} cursor-pointer`}>{t}</div>
                ))}
            </div>
            <div className="flex-1 p-6 flex flex-col gap-6 bg-white">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-[#0A1024]">Orders Overview</h3>
                    <div className="px-3.5 py-1 bg-slate-50 rounded-full text-xs text-slate-500 border border-slate-200 flex items-center gap-1 font-bold cursor-pointer">Today <ChevronRight size={14} /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden">
                        <div className="text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-wider">Total Sales</div>
                        <div className="text-[#0A1024] font-bold text-2xl mb-1">$12,450</div>
                        <div className="text-green-500 text-xs font-bold">+14% vs yesterday</div>
                    </div>
                    <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden">
                        <div className="text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-wider">Orders</div>
                        <div className="text-[#0A1024] font-bold text-2xl mb-1">184</div>
                        <div className="text-green-500 text-xs font-bold">+5% vs yesterday</div>
                    </div>
                </div>
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl flex items-end px-4 sm:px-6 gap-2 pb-0 pt-8 relative overflow-hidden">
                    <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">Revenue Trend</div>
                    {[30, 70, 50, 90, 60, 40, 80].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-sm"></motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const CustomEcommerceVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 z-20">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <path d="M 125 125 L 375 125 L 375 375 L 125 375 Z" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                <motion.circle cx="125" cy="125" r="5" fill="#0EA5E9" animate={{ cx: [125, 375, 375, 125, 125], cy: [125, 125, 375, 375, 125] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
            </svg>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer relative z-10">
                <div className="bg-cyan-50 p-4 rounded-full mb-3"><Store className="text-cyan-600 w-8 h-8" /></div>
                <span className="font-bold text-[#0A1024] text-center">Global Catalog Engine</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer relative z-10">
                <div className="bg-blue-50 p-4 rounded-full mb-3"><ShoppingCart className="text-blue-600 w-8 h-8" /></div>
                <span className="font-bold text-[#0A1024] text-center">Cart & Checkout</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer relative z-10">
                <div className="bg-indigo-50 p-4 rounded-full mb-3"><CreditCard className="text-indigo-600 w-8 h-8" /></div>
                <span className="font-bold text-[#0A1024] text-center">Secure Vault</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer relative z-10">
                <div className="bg-purple-50 p-4 rounded-full mb-3"><Database className="text-purple-600 w-8 h-8" /></div>
                <span className="font-bold text-[#0A1024] text-center">ERP Sync</span>
            </motion.div>
        </div>
    </div>
);


export const PaymentIntegrationVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-full max-w-[320px] bg-white rounded-3xl shadow-2xl relative border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col items-center pb-8 border-b-dashed">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-3"><Store size={24} /></div>
                <span className="font-bold text-[#0A1024] mb-1">Total Payment</span>
                <div className="text-3xl font-extrabold text-[#0A1024]">$1,450.00</div>
            </div>
            <div className="p-6 flex flex-col gap-4 bg-white">
                <div className="w-full h-14 bg-white border border-cyan-200 shadow-sm rounded-xl flex items-center px-4 sm:px-6 gap-3">
                    <CreditCard size={20} className="text-cyan-600" />
                    <div>
                        <div className="text-sm font-bold text-[#0A1024]">•••• •••• •••• 4242</div>
                        <div className="text-[10px] text-slate-500 font-bold">Expires 12/28</div>
                    </div>
                </div>
                <button className="w-full py-4 mt-2 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-500/20 text-white font-bold text-sm flex justify-center items-center gap-2 hover:bg-cyan-500 transition-colors">
                    Pay Securely <LockKeyhole size={16} />
                </button>
                <div className="text-center text-[10px] text-slate-400 font-bold uppercase mt-2 flex items-center justify-center gap-2">
                    <LockKeyhole size={10} /> 256-Bit Encryption
                </div>
            </div>
        </motion.div>
    </div>
);

export const MarketplaceVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="flex flex-col items-center justify-center w-full h-full relative">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-36 h-36 bg-indigo-50 border border-indigo-200 rounded-full shadow-lg flex flex-col items-center justify-center text-indigo-700 z-20 relative">
                <Store size={40} className="mb-2" />
                <span className="font-extrabold text-xs">MARKETPLACE</span>
            </motion.div>

            <div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] bg-slate-200 -z-10"></div>

            <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-all z-20">
                    <User className="text-cyan-600 mb-2 w-8 h-8" />
                    <div className="text-xs font-bold text-[#0A1024]">Buyer</div>
                </motion.div>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-all z-20">
                    <Store className="text-indigo-600 mb-2 w-8 h-8" />
                    <div className="text-xs font-bold text-[#0A1024]">Vendor</div>
                </motion.div>
            </div>

            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 bg-white px-3.5 py-2 rounded-full shadow-md border border-slate-200 text-xs font-bold text-slate-500 flex items-center gap-2">
                <ChartBar size={14} className="text-green-500" /> Revenue Split Core
            </motion.div>
        </div>
    </div>
);

export const MagentoVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative z-20 p-5 justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 font-black text-sm">
                        M
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Magento 2 / Adobe Commerce</h4>
                        <p className="text-[10px] text-slate-500">Enterprise B2B & B2C Engine</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full flex items-center gap-1">
                    <Sparkles size={10} /> PWA Studio
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-gradient-to-br from-orange-50/40 via-amber-50/30 to-slate-50 rounded-2xl border border-orange-100 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-orange-800 bg-white/90 px-2.5 py-0.5 rounded shadow-sm">Multi-Store Catalog</span>
                    <span className="text-[10px] font-mono text-slate-500">Varnish Cache 99.4%</span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-2">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SKU Volume</span>
                        <span className="text-lg font-black text-[#0A1024]">500,000+</span>
                        <span className="text-[9px] text-emerald-600 font-semibold mt-0.5">Instant ElasticSearch</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Checkout Load</span>
                        <span className="text-lg font-black text-[#0A1024]">0.42s</span>
                        <span className="text-[9px] text-orange-600 font-semibold mt-0.5">High-Concurrency Ready</span>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-slate-900 text-white p-2.5 rounded-xl text-xs font-bold">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-[11px]">B2B Custom Pricing & Tiered Quotes</span>
                    </div>
                    <span className="text-[10px] text-orange-400 font-mono">REST / GraphQL</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px]">
                <span className="font-bold text-slate-600">Headless Adobe Commerce</span>
                <span className="font-bold text-orange-600">Enterprise SLA</span>
            </div>
        </motion.div>
    </div>
);

export const OpencartVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [4, -4, 4] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative z-20 p-5 justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 font-bold">
                        <Store size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">OpenCart Engine</h4>
                        <p className="text-[10px] text-slate-500">Lightweight MVC Storefront</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full">
                    OCMOD / VQMOD
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-gradient-to-br from-cyan-50/50 via-sky-50/30 to-slate-50 rounded-2xl border border-cyan-100 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-cyan-800 bg-white px-2 py-0.5 rounded shadow-sm">Multi-Currency & Tax</span>
                    <span className="text-[10px] font-mono text-slate-500">14,000+ Extensions</span>
                </div>

                <div className="space-y-2 my-2">
                    <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShoppingCart size={15} className="text-cyan-600" />
                            <span className="text-xs font-bold text-[#0A1024]">Global Order Management</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Synced</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CreditCard size={15} className="text-indigo-600" />
                            <span className="text-xs font-bold text-[#0A1024]">Multi-Gateway Payment Checkout</span>
                        </div>
                        <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">Active</span>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-slate-900 text-white p-2.5 rounded-xl text-xs font-bold">
                    <span className="text-[11px] text-slate-300">Fast Lightweight Performance</span>
                    <span className="text-[10px] text-cyan-400 font-mono">PHP / MySQL</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px]">
                <span className="font-bold text-slate-600">Open Source Agility</span>
                <span className="font-bold text-cyan-600">Custom Modules</span>
            </div>
        </motion.div>
    </div>
);

export const BigcommerceVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-6, 6, -6] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative z-20 p-5 justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 font-black text-sm">
                        B
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">BigCommerce Enterprise</h4>
                        <p className="text-[10px] text-slate-500">SaaS Scalability & Stencil Engine</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full flex items-center gap-1">
                    <Zap size={10} /> B2B Edition
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-blue-900 bg-white px-2 py-0.5 rounded shadow-sm">Multi-Storefront (MSF)</span>
                    <span className="text-[10px] font-mono text-slate-500">99.99% Uptime SLA</span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-2">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Catalyst Next.js</span>
                        <span className="text-base font-black text-[#0A1024]">Headless API</span>
                        <span className="text-[9px] text-blue-600 font-semibold mt-0.5">GraphQL Storefront</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Zero Host Fees</span>
                        <span className="text-base font-black text-[#0A1024]">PCI Tier 1</span>
                        <span className="text-[9px] text-emerald-600 font-semibold mt-0.5">Auto-Scaling Cloud</span>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-slate-900 text-white p-2.5 rounded-xl text-xs font-bold">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        <span className="text-[11px]">Wholesale Portals & Custom Price Lists</span>
                    </div>
                    <span className="text-[10px] text-blue-400 font-mono">B2B Core</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px]">
                <span className="font-bold text-slate-600">Enterprise Composability</span>
                <span className="font-bold text-blue-600">Certified Partner</span>
            </div>
        </motion.div>
    </div>
);
