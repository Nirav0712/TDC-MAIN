import React from 'react';
import { motion } from 'framer-motion';
import {
    Code, Terminal, Cpu, Database, Server, Layers, Globe, Zap,
    ShieldCheck, CheckCircle2, Sparkles, Layout, Box, GitBranch,
    RefreshCw, Play, FastForward, Activity, ArrowRight, Binary
} from 'lucide-react';

// 1. Full-Stack JavaScript Visual
export const JavascriptVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            {/* Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold font-mono text-sm">
                        JS
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">JavaScript Ecosystem</h4>
                        <p className="text-[10px] text-slate-500">V8 Runtime & Full-Stack Engine</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full flex items-center gap-1">
                    <Zap size={10} className="text-amber-500" /> ESNext / TypeScript
                </span>
            </div>

            {/* Interactive JS Playground / Terminal */}
            <div className="w-full flex-1 my-3 bg-[#0A1024] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800/80 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-amber-400">app.config.mjs</span>
                    <span className="text-slate-500">Node v20.x</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400 flex items-center gap-2">
                        <span className="text-amber-400">const</span>
                        <span className="text-cyan-300">stack</span> = [
                        <span className="text-emerald-400">'React'</span>,
                        <span className="text-red-400">'Angular'</span>,
                        <span className="text-green-400">'Vue'</span>,
                        <span className="text-yellow-400">'Node'</span>];
                    </div>
                    <div className="text-slate-400 flex items-center gap-2">
                        <span className="text-amber-400">async function</span>
                        <span className="text-blue-300">launchApp</span>() &#123;
                    </div>
                    <div className="pl-4 text-emerald-400 flex items-center gap-2">
                        <span className="text-purple-400">await</span> engine.<span className="text-amber-300">optimizeThroughput</span>();
                    </div>
                    <div className="pl-4 text-slate-400 flex items-center gap-1.5">
                        <span className="text-amber-400">return</span>
                        <span className="text-cyan-300">&#123; status: <span className="text-emerald-400">'100% Scalable'</span>, latency: <span className="text-amber-400">'&lt;15ms'</span> &#125;</span>;
                    </div>
                    <div className="text-slate-400">&#125;</div>
                </div>

                {/* Floating Metrics Badge */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-[10px]">
                    <div className="bg-slate-800/60 p-1.5 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">100k+</span>
                        <span className="text-slate-400 text-[9px]">RPS Capable</span>
                    </div>
                    <div className="bg-slate-800/60 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">&lt; 10ms</span>
                        <span className="text-slate-400 text-[9px]">Event Loop</span>
                    </div>
                    <div className="bg-slate-800/60 p-1.5 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">99.99%</span>
                        <span className="text-slate-400 text-[9px]">Uptime SLA</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-500" /> Senior JS Architects
                </span>
                <span className="text-[10px] font-bold text-amber-600">Enterprise Ready</span>
            </div>
        </motion.div>
    </div>
);

// 2. Angular Developer Visual
export const AngularVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600 font-bold font-mono text-sm">
                        🅰️
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Angular Enterprise Engine</h4>
                        <p className="text-[10px] text-slate-500">TypeScript & RxJS Architecture</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full flex items-center gap-1">
                    <Sparkles size={10} className="text-red-500" /> Angular 17+
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0D1527] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-red-400">dashboard.component.ts</span>
                    <span className="text-slate-500">Standalone: true</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-red-400">@Component</span>(&#123; selector: <span className="text-emerald-400">'app-dashboard'</span> &#125;)
                    </div>
                    <div className="text-slate-300">
                        <span className="text-blue-400">export class</span> <span className="text-yellow-300">EnterpriseApp</span> &#123;
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">readonly</span> state$ = inject(<span className="text-cyan-300">StoreService</span>).<span className="text-red-300">selectStream</span>();
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">signals</span> = signal(&#123; secure: <span className="text-emerald-400">true</span>, rbac: <span className="text-amber-400">'Active'</span> &#125;);
                    </div>
                    <div className="text-slate-300">&#125;</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-red-400 font-bold block">100%</span>
                        <span className="text-slate-400 text-[9px]">Type-Safe</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">RxJS</span>
                        <span className="text-slate-400 text-[9px]">Reactive State</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">AOT</span>
                        <span className="text-slate-400 text-[9px]">Compiled Fast</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-red-500" /> Scalable Modular Architecture
                </span>
                <span className="text-[10px] font-bold text-red-600">Enterprise Grade</span>
            </div>
        </motion.div>
    </div>
);

// 3. Express.js Developer Visual
export const ExpressjsVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold font-mono text-sm">
                        ex
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Express.js REST & Microservices</h4>
                        <p className="text-[10px] text-slate-500">High-Performance Routing & Middleware</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-full flex items-center gap-1">
                    <Server size={10} className="text-slate-800" /> REST / GraphQL API
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0B1120] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-emerald-400">routes/api/v1.js</span>
                    <span className="text-cyan-400">200 OK</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-purple-400">app</span>.<span className="text-blue-400">use</span>(cors(), helmet(), rateLimiter());
                    </div>
                    <div className="text-slate-400">
                        <span className="text-purple-400">router</span>.<span className="text-emerald-400">post</span>(<span className="text-amber-300">'/v1/checkout'</span>, authGuard, <span className="text-cyan-300">async</span> (req, res) =&gt; &#123;
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-amber-400">const</span> payload = <span className="text-purple-400">await</span> orders.<span className="text-blue-300">process</span>(req.body);
                    </div>
                    <div className="pl-4 text-emerald-400">
                        res.<span className="text-yellow-300">status</span>(201).<span className="text-yellow-300">json</span>(&#123; success: <span className="text-cyan-300">true</span>, payload &#125;);
                    </div>
                    <div className="text-slate-400">&#125;);</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">&lt; 8ms</span>
                        <span className="text-slate-400 text-[9px]">API Latency</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">JWT + OAuth</span>
                        <span className="text-slate-400 text-[9px]">Security Guard</span>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">50k+</span>
                        <span className="text-slate-400 text-[9px]">Concurrent Req</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-slate-800" /> Enterprise RESTful Architecture
                </span>
                <span className="text-[10px] font-bold text-slate-800">Secure & Scalable</span>
            </div>
        </motion.div>
    </div>
);

// 4. Node.js Developer Visual
export const NodejsVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold font-mono text-sm">
                        ⬢
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Node.js Runtime & V8 Engine</h4>
                        <p className="text-[10px] text-slate-500">Non-Blocking I/O & Event Loop</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center gap-1">
                    <Cpu size={10} className="text-emerald-600" /> High-Concurreny V8
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0A1813] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-emerald-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-emerald-900/50 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-300/30"></div>
                    </div>
                    <span className="text-emerald-400">server.cluster.js</span>
                    <span className="text-emerald-300">Threads: 16 (Active)</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-emerald-400">import</span> cluster <span className="text-emerald-400">from</span> <span className="text-amber-300">'node:cluster'</span>;
                    </div>
                    <div className="text-slate-400">
                        <span className="text-emerald-400">if</span> (cluster.isPrimary) &#123;
                    </div>
                    <div className="pl-4 text-emerald-400">
                        os.cpus().forEach(() =&gt; cluster.<span className="text-cyan-300">fork</span>());
                    </div>
                    <div className="text-slate-400">&#125; <span className="text-emerald-400">else</span> &#123;</div>
                    <div className="pl-4 text-slate-300">
                        http.<span className="text-blue-300">createServer</span>(app).<span className="text-yellow-300">listen</span>(process.env.PORT);
                    </div>
                    <div className="text-slate-400">&#125;</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-900/50 text-[10px]">
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">120k+</span>
                        <span className="text-slate-400 text-[9px]">RPS Peak</span>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">0.05ms</span>
                        <span className="text-slate-400 text-[9px]">I/O Non-Block</span>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">Microservices</span>
                        <span className="text-slate-400 text-[9px]">Ready</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-500" /> High-Throughput Microservices
                </span>
                <span className="text-[10px] font-bold text-emerald-600">Enterprise Backend</span>
            </div>
        </motion.div>
    </div>
);

// 5. React Developer Visual
export const ReactVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold font-mono text-sm">
                        ⚛️
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">React 18+ & Next.js Architecture</h4>
                        <p className="text-[10px] text-slate-500">Virtual DOM & Server Components</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full flex items-center gap-1">
                    <Zap size={10} className="text-cyan-500" /> Fiber Virtual DOM
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#08121E] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-cyan-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-cyan-900/40 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                    </div>
                    <span className="text-cyan-400">AppContainer.tsx</span>
                    <span className="text-cyan-200">SSR / RSC Mode</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-cyan-400">export function</span> <span className="text-amber-300">ModernReactApp</span>() &#123;
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">const</span> [state, setState] = <span className="text-blue-300">useTransition</span>();
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">const</span> data = <span className="text-cyan-300">useQuery</span>([<span className="text-emerald-400">'realtime-metrics'</span>]);
                    </div>
                    <div className="pl-4 text-cyan-300">
                        return &lt;<span className="text-amber-300">InteractiveDashboard</span> data=&#123;data&#125; /&gt;;
                    </div>
                    <div className="text-slate-400">&#125;</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-cyan-900/40 text-[10px]">
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-2 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">120 FPS</span>
                        <span className="text-slate-400 text-[9px]">Fluid UI</span>
                    </div>
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-2 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">Next.js 14</span>
                        <span className="text-slate-400 text-[9px]">App Router</span>
                    </div>
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-2 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">0ms</span>
                        <span className="text-slate-400 text-[9px]">Re-render Lag</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-cyan-500" /> High-Performance Single-Page Apps
                </span>
                <span className="text-[10px] font-bold text-cyan-600">Dynamic & Reactive</span>
            </div>
        </motion.div>
    </div>
);

// 6. Vue.js Developer Visual
export const VuejsVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold font-mono text-sm">
                        🟢
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Vue 3 Composition API & Pinia</h4>
                        <p className="text-[10px] text-slate-500">Reactivity System & Vite Engine</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center gap-1">
                    <Sparkles size={10} className="text-emerald-500" /> Vue 3 + Pinia
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0A141A] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-emerald-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-emerald-900/40 pb-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-emerald-400">DashboardView.vue</span>
                    <span className="text-emerald-300">&lt;script setup&gt;</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-emerald-400">&lt;script setup lang="ts"&gt;</span>
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">const</span> store = <span className="text-blue-300">useAnalyticsStore</span>();
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">const</span> metrics = <span className="text-emerald-300">computed</span>(() =&gt; store.liveFeed);
                    </div>
                    <div className="pl-4 text-cyan-300">
                        <span className="text-amber-300">watchEffect</span>(() =&gt; updateChart(metrics.value));
                    </div>
                    <div className="text-slate-400">&lt;/script&gt;</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-900/40 text-[10px]">
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">16kb</span>
                        <span className="text-slate-400 text-[9px]">Gzipped Core</span>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">Vite HMR</span>
                        <span className="text-slate-400 text-[9px]">Sub-50ms</span>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-900/40 p-2 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">Pinia</span>
                        <span className="text-slate-400 text-[9px]">State Mgmt</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-500" /> Lightweight Reactive Architecture
                </span>
                <span className="text-[10px] font-bold text-emerald-600">Clean & Ultra-Fast</span>
            </div>
        </motion.div>
    </div>
);
