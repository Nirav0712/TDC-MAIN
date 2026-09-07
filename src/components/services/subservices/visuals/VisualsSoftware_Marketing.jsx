import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, Globe, User } from 'lucide-react';

// SOFTWARE DEVELOPMENT VISUALS

export const CRMVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ y: 0 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 flex flex-col p-6 gap-4">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-4 bg-slate-50 p-4 -mt-6 -mx-6 rounded-t-3xl">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100"><Building2 size={20} className="text-indigo-600" /></div>
                    <div>
                        <div className="text-[#0A1024] font-bold text-sm">CRM Hub Dashboard</div>
                        <div className="text-slate-500 text-[10px] font-bold">Active Pipelines</div>
                    </div>
                </div>
                <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-[#0A1024] font-bold shadow-sm">342 Leads</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 mt-2">
                {/* Column 1 */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col gap-3">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest pl-1">New</div>
                    {[1, 2, 3].map(i => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:border-cyan-200 transition-colors">
                            <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                            <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
                {/* Column 2 */}
                <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3 flex flex-col gap-3 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 blur-2xl"></div>
                    <div className="text-[10px] text-cyan-700 uppercase font-bold tracking-widest pl-1">Closing</div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="bg-white p-3 rounded-lg border border-cyan-300 shadow-lg cursor-pointer relative z-10">
                        <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                        <div className="w-2/3 h-2 bg-cyan-200 rounded-full"></div>
                    </motion.div>
                </div>
                {/* Column 3 */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col gap-3">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest pl-1">Won</div>
                    {[1].map(i => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm opacity-50">
                            <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                            <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
);

export const ERPVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full h-full relative z-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col p-6 relative overflow-hidden group hover:border-cyan-300 transition-colors">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4"><Database size={24} className="text-cyan-600" /></div>
                <div className="text-[#0A1024] font-bold text-sm mb-1">Central Ledger</div>
                <div className="text-slate-500 text-[10px] font-bold">Real-time transactional sync.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4"><Cog size={24} className="text-blue-600" /></div>
                <div className="text-[#0A1024] font-bold text-sm mb-1">Procurement</div>
                <div className="text-slate-500 text-[10px] font-bold">Automated vendor routing.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col p-6 relative overflow-hidden group hover:border-indigo-300 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4"><Workflow size={24} className="text-indigo-600" /></div>
                <div className="text-[#0A1024] font-bold text-sm mb-1">HR & Payroll</div>
                <div className="text-slate-500 text-[10px] font-bold">Compliance & shift logic.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col p-6 relative overflow-hidden group hover:border-green-300 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4"><BarChart2 size={24} className="text-green-600" /></div>
                <div className="text-[#0A1024] font-bold text-sm mb-1">Intelligence</div>
                <div className="text-slate-500 text-[10px] font-bold">Global forecasting matrix.</div>
            </motion.div>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center shadow-2xl z-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Server size={32} className="text-white" />
            </motion.div>
        </div>
    </div>
);

export const SaaSVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col">
            <div className="w-full h-16 border-b border-slate-100 flex items-center justify-between pb-4 mb-4">
                <div className="flex gap-4 flex-1 items-center">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl"></div>
                    <div>
                        <div className="w-24 h-3 bg-slate-200 rounded-full mb-2"></div>
                        <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                    </div>
                </div>
                <div className="w-28 h-8 bg-slate-50 rounded-full flex items-center justify-center text-xs font-bold text-[#0A1024] border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow">Upgrade Plan</div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-4">
                    <div className="w-1/2 h-28 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center flex-col gap-2">
                        <span className="text-3xl font-bold text-[#0A1024]">42.8k</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Users</span>
                    </div>
                    <div className="w-1/2 h-28 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center flex-col gap-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-50 opacity-20"></div>
                        <span className="text-3xl font-bold text-cyan-600 relative z-10">$18k</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest relative z-10">MRR</span>
                    </div>
                </div>
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden p-6 flex flex-col justify-end gap-2 shadow-inner">
                    <div className="absolute top-4 left-6 text-xs font-bold text-[#0A1024]">Growth Trajectory</div>
                    <div className="flex items-end justify-between w-full h-24 gap-2">
                        {[20, 30, 25, 40, 35, 60, 50, 80, 75, 100].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="w-full bg-cyan-400 rounded-t-sm"></motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const BusinessAutomationVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full relative z-20 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.path d="M 80 80 L 250 250 L 420 80" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="2" fill="none" strokeDasharray="5 5" animate={{ strokeDashoffset: -100 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
                <motion.path d="M 80 250 L 250 250 L 420 250" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="2" fill="none" strokeDasharray="5 5" animate={{ strokeDashoffset: 100 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
            </svg>

            <div className="col-start-1 row-start-1 bg-white border border-slate-200 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-2 z-10">
                <Mail size={32} className="text-cyan-600" />
                <div className="text-[10px] font-bold text-slate-600">Email Trigger</div>
            </div>

            <div className="col-start-3 row-start-1 bg-white border border-slate-200 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-2 z-10">
                <Database size={32} className="text-indigo-600" />
                <div className="text-[10px] font-bold text-slate-600">Data Parser</div>
            </div>

            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="col-start-2 row-start-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center gap-2 z-20 relative overflow-hidden">
                <div className="absolute w-32 h-32 bg-cyan-500/20 blur-xl"></div>
                <Cog size={40} className="text-cyan-400 relative z-10" />
                <div className="text-[10px] font-bold text-white uppercase tracking-widest text-center relative z-10">Logic Core</div>
            </motion.div>

            <div className="col-start-1 row-start-3 bg-white border border-slate-200 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-2 z-10">
                <MessageSquare size={32} className="text-blue-600" />
                <div className="text-[10px] font-bold text-slate-600">Team Alert</div>
            </div>

            <div className="col-start-3 row-start-3 bg-white border border-slate-200 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center gap-2 z-10">
                <Server size={32} className="text-purple-600" />
                <div className="text-[10px] font-bold text-slate-600">CRM Post</div>
            </div>
        </div>
    </div>
);

export const APIVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center bg-slate-50 border-b border-slate-100 p-4 -mt-6 -mx-6 mb-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="px-3 py-1 bg-white border border-slate-200 rounded shadow-sm font-mono text-[10px] text-green-600 font-bold">POST /api/v1/auth/token</div>
            </div>

            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-6 font-mono text-[10px] md:text-sm text-slate-300 overflow-hidden relative shadow-inner">
                <motion.div initial={{ y: 0 }} animate={{ y: -50 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                    <div className="text-cyan-400">{"{"}</div>
                    <div className="pl-4"><span className="text-indigo-300">"status"</span>: <span className="text-orange-400">200</span>,</div>
                    <div className="pl-4"><span className="text-indigo-300">"data"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-indigo-300">"uid"</span>: <span className="text-green-300">"usr_9f82kd"</span>,</div>
                    <div className="pl-8"><span className="text-indigo-300">"access_token"</span>: <span className="text-green-300">"eyJhbGciOiJIUzI1NiIsIn..."</span>,</div>
                    <div className="pl-8"><span className="text-indigo-300">"permissions"</span>: [</div>
                    <div className="pl-12 text-green-300">"read:users"</div>
                    <div className="pl-12 text-green-300">"write:database"</div>
                    <div className="pl-8">]</div>
                    <div className="pl-4">{"}"}</div>
                    <div className="text-cyan-400">{"}"}</div>
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
            </div>

            <div className="flex gap-4">
                <div className="px-4 py-3 bg-cyan-50 border border-cyan-200 rounded-xl text-[#0A1024] text-xs font-bold flex items-center gap-2 flex-1 justify-center"><ShieldCheck size={16} className="text-cyan-600" /> OAUTH 2.0</div>
                <div className="px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-xl text-[#0A1024] text-xs font-bold flex items-center gap-2 flex-1 justify-center"><Globe size={16} className="text-indigo-600" /> GRAPHQL</div>
            </div>
        </div>
    </div>
);


// DIGITAL MARKETING VISUALS

export const SEOVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div className="text-lg font-bold font-heading text-[#0A1024] flex items-center gap-2"><Search className="text-cyan-600 w-5 h-5" /> Organic Traffic</div>
                <div className="px-3 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full text-xs font-bold whitespace-nowrap">SERP #1</div>
            </div>

            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl flex items-end px-6 gap-2 pb-0 pt-10 relative overflow-hidden">
                <div className="absolute top-4 left-6 text-3xl font-black text-[#0A1024]">482,000</div>
                <div className="absolute top-14 left-6 text-[10px] font-bold text-green-500 uppercase flex items-center gap-1"><ArrowUpRight size={12} /> +245% YOY</div>

                {[10, 15, 25, 45, 60, 85, 75, 95].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className={`flex-1 rounded-t-md ${i === 7 ? 'bg-cyan-500' : 'bg-cyan-200'} `}></motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center md:text-left">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Domain Auth</div>
                    <div className="text-2xl font-bold text-[#0A1024]">DA 84</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center md:text-left">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Core Vitals</div>
                    <div className="text-2xl font-bold text-green-500">99 / 100</div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const PPCVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between pt-8">
            <div className="flex justify-between items-center mb-6 px-2">
                <div className="w-32 h-6 bg-slate-100 rounded-full"></div>
                <div className="w-24 h-6 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-[10px] font-bold text-green-600">Active Campaign</div>
            </div>

            {/* Google Search Mock */}
            <motion.div whileHover={{ scale: 1.02 }} className="w-full bg-white border border-slate-200 shadow-lg rounded-2xl p-5 cursor-pointer relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="flex gap-2 items-center mb-2">
                    <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-[#0A1024]">Sponsored</span>
                    <span className="text-xs text-slate-500 font-bold">https://yoursite.com</span>
                </div>
                <div className="text-lg font-bold text-blue-600 hover:underline mb-1">Enterprise Digital Marketing | Maximize Conversions</div>
                <div className="text-xs text-slate-500 leading-relaxed font-bold">Data-driven performance marketing strategies. Connect with our dedicated internal sales team today.</div>
            </motion.div>

            <div className="w-full mt-6 grid grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">CPC</div>
                    <div className="text-lg font-bold text-[#0A1024]">$2.45</div>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-cyan-600 font-bold uppercase">CTR</div>
                    <div className="text-lg font-bold text-cyan-700">12.4%</div>
                </div>
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-green-600 font-bold uppercase">ROAS</div>
                    <div className="text-lg font-bold text-green-700">4.5x</div>
                </div>
            </div>
        </div>
    </div>
);

export const SocialMediaVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full relative z-20 flex gap-4">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="flex-1 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col relative z-20">
                <div className="h-40 bg-gradient-to-br from-indigo-500 to-cyan-500 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="px-6 relative pb-6 flex-1 flex flex-col justify-between">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg -mt-8 flex items-center justify-center overflow-hidden border-2 border-white border-dashed">
                        <User size={32} className="text-slate-300" />
                    </div>
                    <div className="h-4 w-32 bg-slate-200 rounded-full mt-4 font-bold text-xs flex items-center pl-2 text-slate-500">Brand Page</div>
                    <div className="h-2 w-24 bg-slate-100 rounded-full mt-2 mb-4"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-auto">
                        <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl"></div>
                        <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl"></div>
                        <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl"></div>
                    </div>
                </div>
            </motion.div>

            <div className="w-[140px] flex flex-col justify-center gap-4 relative z-10 pt-10">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600"><Megaphone size={16} /></div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Reach</div>
                        <div className="font-bold text-[#0A1024] text-lg">2.4M</div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600"><MessageSquare size={16} /></div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Engage</div>
                        <div className="font-bold text-[#0A1024] text-lg">18.2%</div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
);

export const ContentMarketingVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-6 flex gap-6">
            <div className="w-40 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-inner relative z-20 overflow-hidden">
                <div className="w-full h-24 bg-white rounded-xl border border-slate-200 flex flex-col justify-end p-3 cursor-pointer shadow-sm">
                    <div className="w-full h-2 bg-slate-200 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-cyan-50 border border-cyan-200 rounded-xl flex flex-col justify-end p-3 cursor-pointer shadow-md">
                    <div className="w-full h-2 bg-cyan-200 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-cyan-100 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-white rounded-xl border border-slate-200 flex flex-col justify-end p-3 cursor-pointer shadow-sm">
                    <div className="w-full h-2 bg-slate-200 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
            </div>

            <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-lg p-6 relative flex flex-col z-20">
                <div className="text-sm font-bold text-[#0A1024] mb-4">Editorial Draft View</div>
                <div className="w-full h-4 bg-slate-200 rounded-full mb-4"></div>
                <div className="w-3/4 h-4 bg-slate-200 rounded-full mb-8"></div>

                <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-100 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Layers size={32} className="text-slate-300" />
                </div>

                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-4/5 h-2 bg-slate-100 rounded-full mb-2"></div>

                <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-4">
                    <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 transition-colors text-white rounded-lg text-xs font-bold shadow-md">Publish</button>
                    <div className="text-[10px] text-green-600 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded">SEO: 98/100</div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const PerformanceMarketingVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="w-full h-full bg-white rounded-3xl shadow-xl relative border border-slate-200 p-6 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <div className="text-[#0A1024] font-bold font-heading text-lg">Omnichannel Results</div>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full text-xs font-bold">Live Data</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
                <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">CPA (Blended)</div>
                    <div className="text-3xl font-bold text-[#0A1024]">$14.50</div>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 shadow-sm p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-200/50 rounded-full blur-xl"></div>
                    <div className="text-[10px] text-cyan-700 uppercase font-bold tracking-widest mb-1 relative z-10">Total Conversions</div>
                    <div className="text-3xl font-bold text-cyan-600 relative z-10">14,204</div>
                </div>
            </div>

            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden flex items-end pt-8 shadow-inner">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M 0 100 Q 25 20 50 80 T 100 20 L 100 100 Z" fill="rgba(14, 165, 233, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                    <motion.path d="M 0 100 Q 25 20 50 80 T 100 20" fill="none" stroke="rgba(14, 165, 233, 1)" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" animate={{ strokeDashoffset: 0 }} transition={{ duration: 2, ease: "easeInOut" }} />
                </svg>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Oct 1</span> <span>Oct 15</span> <span>Oct 31</span>
                </div>
            </div>
        </div>
    </div>
);
