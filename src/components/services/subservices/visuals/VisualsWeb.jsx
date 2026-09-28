import React from 'react';
import { Layout, Server, Database, Lock, Box, Cpu, FileText, Settings, Layers, Globe, Webhook, Code, Activity, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const FrontendVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-20">
            {/* Browser Header */}
            <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center px-4 sm:px-6 gap-4 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 max-w-[200px] h-6 bg-white rounded flex items-center px-4 sm:px-6 border border-slate-200 text-[10px] text-slate-400 font-mono">
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
                    <div className="w-full h-full flex items-end gap-2 px-4 sm:px-6 pt-8 pb-0">
                        {[40, 60, 30, 80, 50, 70, 90, 65].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.6 }} className="flex-1 bg-gradient-to-t from-cyan-400 to-cyan-200 rounded-t-sm"></motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -right-4 top-20 bg-white px-4 sm:px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
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
                    <div className="text-xs font-bold text-green-500 px-3.5 py-1 bg-green-50 rounded-full border border-green-100">Secured</div>
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

        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -left-4 top-1/2 bg-white px-4 sm:px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
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
                    <div className="w-full bg-white rounded-lg flex items-center px-4 sm:px-6 py-2 border border-slate-200 shadow-sm gap-2">
                        <FileText className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div className="w-full bg-transparent rounded-lg flex items-center px-4 sm:px-6 py-2 gap-2 opacity-50">
                        <Layers className="w-4 h-4 text-slate-600" />
                    </div>
                </div>
            </div>
            {/* Main Area */}
            <div className="flex-1 p-6 flex flex-col bg-white">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold text-[#0A1024]">Content Editor</h3>
                    <div className="bg-cyan-600 text-white text-[10px] font-bold px-3.5 py-2 rounded-full cursor-pointer hover:bg-cyan-500">Publish Now</div>
                </div>

                <div className="flex-1 border border-slate-200 rounded-2xl p-6 flex flex-col relative overflow-hidden bg-slate-50">
                    <div className="w-full bg-white border border-slate-200 h-10 rounded-xl mb-4 flex items-center px-4 sm:px-6">
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
                <div className="absolute -bottom-4 bg-cyan-600 text-white text-[10px] uppercase font-bold px-3.5 py-1 rounded-full">REST/GraphQL</div>
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
                    <div className="bg-cyan-50 text-cyan-600 px-4 sm:px-6 py-1 rounded border border-cyan-100 text-xs font-bold">Secure</div>
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

            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -left-6 bottom-10 bg-white px-4 sm:px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-30">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><Lock size={20} /></div>
                <div>
                    <p className="text-xs font-bold text-[#0A1024]">Enterprise Grade</p>
                    <p className="text-[10px] text-slate-500">Bank-Level Security</p>
                </div>
            </motion.div>
        </motion.div>
    </div>
);

export const CakePHPVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 font-black flex items-center justify-center text-sm border border-red-100">PHP</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">CakePHP MVC Engine</h4>
                        <p className="text-[10px] text-slate-500">Rapid CRUD & ORM Layer</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-red-50 text-red-700 rounded-full font-bold">Bake CLI Active</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4 flex-1">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"><Box size={16} /></div>
                    <div>
                        <p className="text-xs font-bold text-[#0A1024]">Models & Entities</p>
                        <p className="text-[10px] text-slate-500">Fast Data Validation</p>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"><Server size={16} /></div>
                    <div>
                        <p className="text-xs font-bold text-[#0A1024]">Controllers & CSRF</p>
                        <p className="text-[10px] text-slate-500">Built-in Auth Guards</p>
                    </div>
                </div>
            </div>
            <div className="bg-red-50/60 p-3.5 rounded-xl border border-red-100 flex items-center justify-between">
                <span className="text-xs font-bold text-red-900">Database Query Builder</span>
                <span className="text-[10px] font-mono text-red-700 bg-white px-2 py-0.5 rounded border border-red-200">0.04ms Response</span>
            </div>
        </motion.div>
    </div>
);

export const CodeigniterVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-black flex items-center justify-center text-sm border border-orange-100">CI4</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">CodeIgniter Core</h4>
                        <p className="text-[10px] text-slate-500">Lightweight High-Speed PHP</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full font-bold">&lt; 2MB Footprint</span>
            </div>
            <div className="flex-1 my-4 bg-slate-900 rounded-2xl p-4 flex flex-col justify-between font-mono text-[11px] text-slate-300 relative overflow-hidden">
                <div className="text-emerald-400">$ php spark serve --port 8080</div>
                <div className="text-slate-400">CodeIgniter v4.4 Development Server started</div>
                <div className="text-cyan-400">&#10003; Routes mapped (28 endpoints)</div>
                <div className="text-amber-400">&#10003; Memory Peak: 1.42MB</div>
                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-white flex justify-between">
                    <span>Throughput:</span>
                    <span className="text-emerald-400 font-bold">12,400 req/sec</span>
                </div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Zero Complex Config</span>
                <span className="text-orange-600">Pure Performance</span>
            </div>
        </motion.div>
    </div>
);

export const DrupalVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm border border-blue-100"><Globe size={20} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">Drupal Enterprise</h4>
                        <p className="text-[10px] text-slate-500">Decoupled & Headless CMS</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-bold">JSON:API Ready</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4 flex-1">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-[#0A1024] mb-1">Taxonomy & Fields</p>
                    <p className="text-[10px] text-slate-500">Multilingual & multi-site governance</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-[#0A1024] mb-1">Enterprise Security</p>
                    <p className="text-[10px] text-slate-500">Granular role-based ACL permissions</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-[#0A1024] mb-1">GraphQL & REST</p>
                    <p className="text-[10px] text-slate-500">Seamless frontend omnichannel delivery</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-[#0A1024] mb-1">Twig Templating</p>
                    <p className="text-[10px] text-slate-500">Fast rendering and caching engine</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Government & Fortune 500 Grade</span>
                <span className="text-blue-600">Drupal 10+ Ready</span>
            </div>
        </motion.div>
    </div>
);

export const JoomlaVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 font-black flex items-center justify-center text-sm border border-amber-100"><Layers size={20} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">Joomla CMS Portal</h4>
                        <p className="text-[10px] text-slate-500">Modular Extensions & Templates</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full font-bold">Joomla 5 Core</span>
            </div>
            <div className="my-4 flex-1 bg-gradient-to-br from-amber-50/50 to-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#0A1024]">Article & Content Hub</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-amber-200 font-bold text-amber-700">70+ Languages</span>
                </div>
                <div className="space-y-2">
                    <div className="w-full bg-white p-2.5 rounded-lg border border-slate-100 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#0A1024]">Custom Components</span>
                        <span className="text-[10px] text-emerald-600 font-bold">Active</span>
                    </div>
                    <div className="w-full bg-white p-2.5 rounded-lg border border-slate-100 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#0A1024]">Access Control Levels</span>
                        <span className="text-[10px] text-blue-600 font-bold">RBAC Configured</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500">Native SEO, schema markup, and caching optimization enabled.</div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Flexible Corporate Portals</span>
                <span className="text-amber-600">Zero License Fees</span>
            </div>
        </motion.div>
    </div>
);

export const LaravelVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 font-black flex items-center justify-center text-sm border border-rose-100">LV</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">Laravel Ecosystem</h4>
                        <p className="text-[10px] text-slate-500">Eloquent ORM & Artisan</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full font-bold">Laravel 11 Ready</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4 flex-1">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <p className="text-xs font-bold text-[#0A1024]">Horizon & Queues</p>
                    <p className="text-[10px] text-slate-500">Redis async background jobs</p>
                    <div className="w-full h-1.5 bg-rose-200 rounded-full overflow-hidden mt-2">
                        <div className="w-4/5 h-full bg-rose-500"></div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <p className="text-xs font-bold text-[#0A1024]">Livewire & Inertia</p>
                    <p className="text-[10px] text-slate-500">Reactive full-stack frontend</p>
                    <div className="w-full h-1.5 bg-indigo-200 rounded-full overflow-hidden mt-2">
                        <div className="w-full h-full bg-indigo-500"></div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-[11px] flex justify-between items-center">
                <span className="text-rose-400">php artisan test --parallel</span>
                <span className="text-emerald-400 font-bold">&#10003; 142 Passed</span>
            </div>
        </motion.div>
    </div>
);

export const RubyOnRailsVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 font-black flex items-center justify-center text-sm border border-red-100">RoR</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">Ruby on Rails Core</h4>
                        <p className="text-[10px] text-slate-500">Convention Over Configuration</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-red-50 text-red-700 rounded-full font-bold">Rails 7+ Turbo</span>
            </div>
            <div className="my-4 flex-1 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#0A1024]">Hotwire / Turbo Streams</span>
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">Zero JS SPA</span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">ORM</span>
                        <span className="text-xs font-bold text-[#0A1024]">Active Record</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">Workers</span>
                        <span className="text-xs font-bold text-[#0A1024]">Sidekiq Async</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500">Rapid MVP-to-Enterprise scalability used by GitHub, Shopify & Airbnb.</div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Fastest Time to Market</span>
                <span className="text-red-600">Battle-Tested Engine</span>
            </div>
        </motion.div>
    </div>
);

export const WordPressVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 font-black flex items-center justify-center text-sm border border-blue-100">WP</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">WordPress & WooCommerce</h4>
                        <p className="text-[10px] text-slate-500">Custom Gutenberg & REST API</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-bold">PageSpeed 98+</span>
            </div>
            <div className="my-4 flex-1 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#0A1024]">Custom Block Theme</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Zero Bloat</span>
                </div>
                <div className="space-y-2">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#0A1024]">Headless WP + Next.js</span>
                        <span className="text-[10px] text-blue-600 font-bold">GraphQL Enabled</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#0A1024]">Security Hardening</span>
                        <span className="text-[10px] text-emerald-600 font-bold">WAF & 2FA Active</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-500">Redis Object Cache and CDN asset distribution for million+ monthly visits.</div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Powering 43% of the Web</span>
                <span className="text-blue-700">Enterprise Customized</span>
            </div>
        </motion.div>
    </div>
);

export const WebflowVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-6 relative z-20">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm border border-blue-100">WF</div>
                    <div>
                        <h4 className="text-sm font-bold text-[#0A1024]">Webflow Visual CMS</h4>
                        <p className="text-[10px] text-slate-500">Clean Semantic Code & Hosting</p>
                    </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-bold">Global AWS / Fastly</span>
            </div>
            <div className="my-4 flex-1 bg-slate-900 rounded-2xl p-4 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-cyan-400">Client-First Framework (Relume)</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Auto Layout</span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">CMS Collections</span>
                        <span className="text-xs font-bold text-white">Dynamic Bindings</span>
                    </div>
                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <span className="text-[10px] text-slate-400 block">Interactions</span>
                        <span className="text-xs font-bold text-cyan-400">GSAP / 3D Canvas</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-400">Zero backend maintenance with instant staging and marketing publishing.</div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                <span>Enterprise Marketing Velocity</span>
                <span className="text-blue-600">Webflow Certified</span>
            </div>
        </motion.div>
    </div>
);

