import React from 'react';
import { Layout, Server, Database, Lock, Box, Cpu, FileText, Settings, Layers, Globe, Webhook, Code, Activity, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const FrontendVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-20">
            {/* Browser Header */}
            <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center px-1 gap-4 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 max-w-[200px] h-6 bg-white rounded flex items-center px-1 border border-slate-200 text-[10px] text-slate-400 font-mono">
                    <Lock className="w-3 h-3 text-slate-400 mr-2" /> https://yoursite.com
                </div>
            </div>
            {/* Browser Body */}
            <div className="p-6 flex-1 bg-white flex flex-col gap-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-[#0A1024]">UI Dashboard</h4>
                    <div className="flex gap-4">
                        <div className="w-16 h-6 bg-cyan-50 text-cyan-600 rounded flex items-center justify-center text-[10px] font-bold">100 TTI</div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><Search className="w-4 h-4 text-slate-500" /></div>
                    </div>
                </div>
                <div className="flex gap-4 relative z-10">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-1/2 bg-slate-50 rounded-2xl border border-slate-100 p-4 pb-8 flex flex-col">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4"><Layout size={20} /></div>
                        <p className="text-xs font-bold text-[#0A1024]">Responsive Layout</p>
                        <p className="text-[10px] text-slate-500 mt-1">Tailwind CSS</p>
                    </motion.div>
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-1/2 bg-slate-50 rounded-2xl border border-slate-100 p-4 pb-8 flex flex-col">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4"><Code size={20} /></div>
                        <p className="text-xs font-bold text-[#0A1024]">React Engine</p>
                        <p className="text-[10px] text-slate-500 mt-1">Virtual DOM Active</p>
                    </motion.div>
                </div>
                <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 mt-auto relative overflow-hidden flex items-end">
                    <div className="w-full h-full flex items-end gap-2 px-1 pt-8 pb-0">
                        {[40, 60, 30, 80, 50, 70, 90, 65].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.6 }} className="flex-1 bg-gradient-to-t from-cyan-400 to-cyan-200 rounded-t-sm"></motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -right-4 top-20 bg-white px-1 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-green-50 text-green-600 p-2 rounded-xl"><Globe size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Core Web Vitals</p>
                <p className="text-[10px] text-slate-500">Perfect Score</p>
            </div>
        </motion.div>
    </div>
);

export const BackendVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <div className="w-full h-full bg-white rounded-3xl border border-slate-200 relative flex items-center justify-center p-8 overflow-hidden z-20 shadow-2xl">
            <div className="relative w-full h-full flex flex-col items-center justify-between">

                {/* Gateway Layer */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-200 flex justify-between items-center z-20">
                    <div>
                        <p className="text-xs font-bold text-[#0A1024] flex items-center gap-2"><Lock className="w-4 h-4 text-cyan-600" /> API Gateway</p>
                        <p className="text-[10px] text-slate-500 mt-1">Routing & Rate Limiting</p>
                    </div>
                    <div className="text-xs font-bold text-green-500 px-1 py-1 bg-green-50 rounded-full border border-green-100">Secured</div>
                </motion.div>

                {/* DB & Services */}
                <div className="flex w-full justify-between items-end gap-4 z-20 mt-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-1/2 bg-white p-5 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4"><Database size={24} /></div>
                        <span className="text-sm font-bold text-[#0A1024]">Primary Relational DB</span>
                        <span className="text-[10px] text-slate-500 mt-1">PostgreSQL</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-1/2 bg-white p-5 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4"><Server size={24} /></div>
                        <span className="text-sm font-bold text-[#0A1024]">Microservices Node</span>
                        <span className="text-[10px] text-slate-500 mt-1">Node.js Express Engine</span>
                    </motion.div>
                </div>

                <svg className="absolute inset-0 w-full h-full -z-10" style={{ zIndex: 10 }}>
                    <motion.path d="M 50% 10 L 50% 100%" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="3" strokeDasharray="6 6" fill="transparent" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
                </svg>
            </div>
        </div>

        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -left-4 top-1/2 bg-white px-1 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
            <div className="bg-blue-50 text-blue-600 p-2 rounded-xl"><Activity size={20} /></div>
            <div>
                <p className="text-xs font-bold text-[#0A1024]">Server Uptime</p>
                <p className="text-[10px] text-slate-500">99.99% Guaranteed</p>
            </div>
        </motion.div>
    </div>
);

export const CMSVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex z-20">
            {/* Sidebar */}
            <div className="w-[120px] bg-slate-50 border-r border-slate-100 p-4 flex flex-col gap-6">
                <h4 className="text-xs font-black text-[#0A1024] tracking-widest pl-2">ADMIN</h4>
                <div className="flex flex-col gap-3">
                    <div className="w-full bg-white rounded-lg flex items-center px-1 py-2 border border-slate-200 shadow-sm gap-2">
                        <FileText className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div className="w-full bg-transparent rounded-lg flex items-center px-1 py-2 gap-2 opacity-50">
                        <Layers className="w-4 h-4 text-slate-600" />
                    </div>
                </div>
            </div>
            {/* Main Area */}
            <div className="flex-1 p-6 flex flex-col bg-white">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold text-[#0A1024]">Content Editor</h3>
                    <div className="bg-cyan-600 text-white text-[10px] font-bold px-1 py-2 rounded-full cursor-pointer hover:bg-cyan-500">Publish Now</div>
                </div>

                <div className="flex-1 border border-slate-200 rounded-2xl p-6 flex flex-col relative overflow-hidden bg-slate-50">
                    <div className="w-full bg-white border border-slate-200 h-10 rounded-xl mb-4 flex items-center px-1">
                        <span className="text-sm font-bold text-[#0A1024]">Digital Transformation Strategy 2026</span>
                    </div>

                    <div className="flex-1 w-full bg-white border border-slate-200 rounded-xl p-4 flex gap-4 flex-col">
                        <div className="flex gap-2 border-b border-slate-100 pb-2 text-slate-400">
                            <span className="font-bold text-xs">B</span>
                            <span className="italic text-xs">I</span>
                            <span className="underline text-xs">U</span>
                        </div>
                        <div className="space-y-3">
                            <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                            <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                            <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const APIVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <div className="relative w-full h-full bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center z-20 border border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-slate-50 opacity-50 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] border-2 border-dashed border-cyan-200 rounded-full flex items-center justify-center">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-6 w-12 h-12 bg-white border border-cyan-100 rounded-2xl shadow-lg flex items-center justify-center"><Database size={20} className="text-cyan-600" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -bottom-6 w-12 h-12 bg-white border border-cyan-100 rounded-2xl shadow-lg flex items-center justify-center"><Globe size={20} className="text-cyan-600" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -left-6 w-12 h-12 bg-white border border-cyan-100 rounded-2xl shadow-lg flex items-center justify-center"><Server size={20} className="text-cyan-600" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -right-6 w-12 h-12 bg-white border border-cyan-100 rounded-2xl shadow-lg flex items-center justify-center"><Webhook size={20} className="text-cyan-600" /></motion.div>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-28 h-28 bg-white border border-slate-200 rounded-3xl shadow-xl flex items-center justify-center text-cyan-600 relative z-30">
                <Code size={48} />
                <div className="absolute -bottom-4 bg-cyan-600 text-white text-[10px] uppercase font-bold px-1 py-1 rounded-full">REST/GraphQL</div>
            </motion.div>
        </div>
    </div>
);

export const CustomWebVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col p-6 z-20 relative">
            <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-bold text-[#0A1024]">Application Core</h4>
                <div className="flex gap-2">
                    <div className="bg-cyan-50 text-cyan-600 px-1 py-1 rounded border border-cyan-100 text-xs font-bold">Secure</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 text-cyan-600 shadow-sm">
                        <Cpu size={24} />
                    </div>
                    <p className="text-sm font-bold text-[#0A1024]">Custom Logic</p>
                    <p className="text-[10px] text-slate-500">Business Rules Engine</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 text-cyan-600 shadow-sm">
                        <Layers size={24} />
                    </div>
                    <p className="text-sm font-bold text-[#0A1024]">Modular Systems</p>
                    <p className="text-[10px] text-slate-500">Scalable Microservices</p>
                </div>
            </div>

            <div className="flex-1 bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 rounded-2xl relative overflow-hidden flex items-end">
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M 0 100 L 0 50 Q 25 30 50 60 T 100 20 L 100 100 Z" fill="rgba(14, 165, 233, 0.1)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                    <motion.path d="M 0 50 Q 25 30 50 60 T 100 20" stroke="rgba(14, 165, 233, 0.5)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                </svg>
            </div>

            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -left-6 bottom-10 bg-white px-1 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><Lock size={20} /></div>
                <div>
                    <p className="text-xs font-bold text-[#0A1024]">Enterprise Grade</p>
                    <p className="text-[10px] text-slate-500">Bank-Level Security</p>
                </div>
            </motion.div>
        </motion.div>
    </div>
);
