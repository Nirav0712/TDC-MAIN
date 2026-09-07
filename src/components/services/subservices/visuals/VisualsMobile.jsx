import React from 'react';
import { Smartphone, Apple, Terminal, Play, Layers, Box, Cpu, SplitSquareHorizontal, CheckCircle, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const IOSVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 15 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-[85%] max-w-[280px] h-[520px] bg-slate-900 rounded-[40px] shadow-2xl p-2 relative z-20 border-[4px] border-slate-800">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-30"></div>
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative flex flex-col">
                <div className="h-6 w-full flex justify-between items-center px-6 pt-2 text-[#0A1024]">
                    <div className="text-[10px] font-bold">9:41</div>
                    <div className="flex gap-1 items-center">
                        <div className="w-3 h-2 rounded-sm bg-[#0A1024]"></div>
                        <div className="w-4 h-2 rounded-sm bg-[#0A1024]"></div>
                    </div>
                </div>
                <div className="p-6 pt-8 text-[#0A1024]">
                    <h4 className="text-xl font-bold mb-4">Dashboard</h4>
                    <div className="h-32 bg-cyan-50 rounded-2xl p-4 mb-4 border border-cyan-100 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600"><Apple size={16} /></div>
                        <div>
                            <div className="w-24 h-4 bg-cyan-200 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-cyan-100 rounded"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="h-20 bg-slate-50 rounded-xl p-3 border border-slate-100">
                            <div className="w-12 h-3 bg-slate-200 rounded mb-2 mt-6"></div>
                            <div className="w-8 h-2 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-20 bg-slate-50 rounded-xl p-3 border border-slate-100">
                            <div className="w-12 h-3 bg-slate-200 rounded mb-2 mt-6"></div>
                            <div className="w-8 h-2 bg-slate-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -left-4 lg:-left-12 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-cyan-50 text-cyan-600 p-2 rounded-xl"><Smartphone size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Native iOS UI</p>
                <p className="text-[10px] text-slate-500">SwiftUI Engine</p>
            </div>
        </motion.div>

        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute top-20 -right-4 lg:-right-8 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-green-50 text-green-600 p-2 rounded-xl"><CheckCircle size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">App Store Ready</p>
                <p className="text-[10px] text-slate-500">Zero Rejections</p>
            </div>
        </motion.div>
    </div>
);

export const AndroidVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-[85%] max-w-[280px] h-[520px] bg-slate-800 rounded-[24px] shadow-2xl relative z-20 border-[3px] border-slate-700 flex items-center justify-center overflow-hidden">
            <div className="w-[98%] h-[99%] bg-white rounded-[20px] overflow-hidden relative flex flex-col">
                <div className="h-6 w-full flex justify-between items-center px-4 text-[#0A1024] border-b border-slate-100 pt-1">
                    <div className="text-[10px] font-bold">12:00</div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#0A1024]"></div>
                    </div>
                </div>
                <div className="p-6 bg-cyan-50 shadow-sm border-b border-cyan-100 flex flex-col text-[#0A1024]">
                    <div className="w-8 h-8 bg-cyan-200 text-cyan-700 rounded-full items-center flex justify-center mb-4"><Terminal size={14} /></div>
                    <div className="w-32 h-6 bg-cyan-200 rounded-md mb-2"></div>
                    <div className="w-20 h-3 bg-cyan-100 rounded-full"></div>
                </div>
                <div className="p-4 pt-6 flex flex-col gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 p-3 flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-lg bg-slate-200 shrink-0"></div>
                            <div className="flex-col gap-1 w-full flex">
                                <div className="w-1/2 h-3 bg-slate-200 rounded-full"></div>
                                <div className="w-1/4 h-2 bg-slate-100 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-20 -left-2 lg:-left-6 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-cyan-50 text-cyan-600 p-2 rounded-xl"><Layers size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Native Performance</p>
                <p className="text-[10px] text-slate-500">Kotlin Optimized</p>
            </div>
        </motion.div>
    </div>
);

export const FlutterVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 15 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-[85%] max-w-[280px] h-[520px] bg-cyan-900 rounded-[40px] shadow-2xl p-2 relative z-20 border-[4px] border-cyan-800">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-cyan-900 rounded-b-xl z-30"></div>
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative flex flex-col">
                <div className="h-6 w-full flex justify-between items-center px-6 pt-2 text-[#0A1024]">
                    <div className="text-[10px] font-bold">10:00</div>
                    <div className="flex gap-1 items-center">
                        <div className="w-3 h-2 rounded-sm bg-[#0A1024]"></div>
                    </div>
                </div>
                <div className="p-6 pt-8">
                    <h4 className="text-xl font-bold mb-4 text-[#0A1024]">Flutter Dashboard</h4>
                    <div className="h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-6 mb-4 shadow-lg flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-20"><Smartphone size={80} /></div>
                        <div className="text-sm font-medium">Monthly Active</div>
                        <div className="text-3xl font-bold">12K+</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="h-24 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center">
                            <Layers className="text-cyan-500 mb-2" size={20} />
                            <div className="w-full h-2 bg-slate-200 rounded"></div>
                        </div>
                        <div className="h-24 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center">
                            <SplitSquareHorizontal className="text-cyan-500 mb-2" size={20} />
                            <div className="w-full h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -left-6 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-cyan-50 text-cyan-600 p-2 rounded-xl"><Terminal size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Flutter Powered</p>
                <p className="text-[10px] text-slate-500">Cross-Platform</p>
            </div>
        </motion.div>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute top-20 -right-6 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-blue-50 text-blue-600 p-2 rounded-xl"><Cpu size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Fast Performance</p>
                <p className="text-[10px] text-slate-500">60 FPS Render</p>
            </div>
        </motion.div>
    </div>
);

export const ReactNativeVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-[85%] max-w-[280px] h-[520px] bg-slate-800 rounded-[30px] shadow-2xl p-2 relative z-20 border-[3px] border-slate-700">
            <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative flex flex-col">
                <div className="h-10 w-full flex items-center justify-center text-[#0A1024] bg-slate-50 border-b border-slate-100 font-bold text-sm shadow-sm relative">
                    App Feed
                    <div className="absolute right-4 w-5 h-5 rounded-full bg-[#61DAFB]/20 flex items-center justify-center"><CheckCircle size={10} className="text-[#61DAFB]" /></div>
                </div>
                <div className="p-4 flex flex-col gap-4 overflow-hidden">
                    <div className="w-full h-32 bg-gradient-to-tr from-[#61DAFB] to-blue-500 rounded-xl p-4 text-white flex flex-col justify-end shadow-md">
                        <div className="text-2xl font-bold">Performance</div>
                        <div className="text-xs opacity-90">Native-like feel</div>
                    </div>
                    {[1, 2].map(i => (
                        <div key={i} className="flex gap-4 items-center bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex shrink-0"></div>
                            <div className="flex-col w-full space-y-2">
                                <div className="h-3 bg-slate-200 rounded-full w-2/3"></div>
                                <div className="h-2 bg-slate-100 rounded-full w-1/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 w-full h-16 bg-white border-t border-slate-100 flex items-center justify-around">
                    <div className="w-8 h-8 rounded-md bg-[#61DAFB]/20"></div>
                    <div className="w-8 h-8 rounded-md bg-slate-100"></div>
                    <div className="w-8 h-8 rounded-md bg-slate-100"></div>
                </div>
            </div>
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-24 -left-6 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-[#61DAFB]/10 text-cyan-500 p-2 rounded-lg"><Code size={18} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Cross-Platform</p>
                <p className="text-[10px] text-slate-500">React Architecture</p>
            </div>
        </motion.div>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute top-16 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-blue-50 text-blue-500 p-2 rounded-lg"><Database size={18} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">API Data Card</p>
                <p className="text-[10px] text-slate-500">Real-time sync</p>
            </div>
        </motion.div>
    </div>
);

export const CrossPlatformVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
        {/* Desktop Screen */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute top-12 left-4 w-64 h-40 bg-white rounded-lg shadow-2xl border-4 border-slate-800 z-10 flex flex-col overflow-hidden">
            <div className="h-4 bg-slate-100 w-full flex items-center px-2 gap-1 border-b border-slate-200">
                <div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="flex p-3 gap-3 w-full h-full">
                <div className="w-1/4 h-full bg-purple-100 rounded"></div>
                <div className="flex-1 flex flex-col gap-2"><div className="h-3 w-1/2 bg-slate-800 rounded"></div><div className="flex-1 bg-slate-100 rounded"></div></div>
            </div>
        </motion.div>

        {/* Tablet Screen */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute top-28 right-8 w-40 h-52 bg-white rounded-xl shadow-2xl border-4 border-slate-300 z-20 overflow-hidden">
            <div className="w-full h-1/3 bg-gradient-to-br from-purple-500 to-indigo-500"></div>
            <div className="p-3 space-y-2">
                <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
                <div className="h-2 w-full bg-slate-200 rounded"></div>
                <div className="h-2 w-full bg-slate-200 rounded"></div>
            </div>
        </motion.div>

        {/* Mobile Screen */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-56 bg-white rounded-2xl shadow-2xl border-[3px] border-slate-800 z-30 flex flex-col overflow-hidden">
            <div className="h-3 w-12 bg-slate-800 rounded-b-xl mx-auto mb-2"></div>
            <div className="px-3 flex-1 flex flex-col gap-2">
                <div className="w-full h-12 bg-purple-100 rounded-lg"></div>
                <div className="w-full h-8 bg-slate-100 rounded flex items-center justify-center"><Apple size={12} className="text-slate-400" /></div>
                <div className="w-full h-8 bg-slate-100 rounded flex items-center justify-center"><Smartphone size={12} className="text-slate-400" /></div>
            </div>
        </motion.div>

        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-4 right-2 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100 z-40">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Layers size={18} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Unified Product</p>
                <p className="text-[10px] text-slate-500">Multiple Platforms</p>
            </div>
        </motion.div>
    </div>
); 
