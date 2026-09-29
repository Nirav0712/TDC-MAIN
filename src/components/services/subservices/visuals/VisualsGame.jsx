import React from 'react';
import { motion } from 'framer-motion';
import {
    Gamepad2, Sparkles, Zap, Smartphone, Globe, Cpu, Layers,
    Activity, Play, CheckCircle2, Trophy, Eye, Box, RefreshCw
} from 'lucide-react';

// 1. Game Development Main Service Visual
export const GameDevOverviewVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 font-bold">
                        <Gamepad2 size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Game Studio Viewport</h4>
                        <p className="text-[10px] text-slate-500">Cross-Platform 3D/2D Engine</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full flex items-center gap-1">
                    <Trophy size={10} className="text-purple-600" /> AAA Graphics
                </span>
            </div>

            {/* 3D Game World Canvas Wireframe */}
            <div className="w-full flex-1 my-3 bg-[#0B0F19] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-purple-950/60 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-purple-300">Viewport: MainScene.unity</span>
                    </div>
                    <span className="text-emerald-400 font-bold">120 FPS</span>
                </div>

                <div className="relative flex-1 flex items-center justify-center my-2">
                    {/* Wireframe Grid / Rotating 3D Object */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        className="w-24 h-24 rounded-2xl border-2 border-dashed border-purple-500/60 flex items-center justify-center relative"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-16 h-16 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 shadow-xl flex items-center justify-center text-white"
                        >
                            <Gamepad2 size={28} />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-900/90 border border-purple-900/30 p-1.5 rounded-lg text-center">
                        <span className="text-purple-400 font-bold block">Unity 6 & UE5</span>
                        <span className="text-slate-400 text-[9px]">Dual Engines</span>
                    </div>
                    <div className="bg-slate-900/90 border border-purple-900/30 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">&lt; 8.3ms</span>
                        <span className="text-slate-400 text-[9px]">Frame Time</span>
                    </div>
                    <div className="bg-slate-900/90 border border-purple-900/30 p-1.5 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">Multiplatform</span>
                        <span className="text-slate-400 text-[9px]">iOS/Android/PC</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-purple-500" /> End-to-End Game Production
                </span>
                <span className="text-[10px] font-bold text-purple-600">Cross-Platform Ready</span>
            </div>
        </motion.div>
    </div>
);

// 2. Android Game Development Visual
export const AndroidGameVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 font-bold">
                        <Smartphone size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Android Mobile Gaming</h4>
                        <p className="text-[10px] text-slate-500">Vulkan API & Google Play Games</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full flex items-center gap-1">
                    <Zap size={10} className="text-green-600" /> Vulkan 1.3
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0A160F] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-green-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-green-900/40 pb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                        <span className="text-green-300">Android Touch Pipeline</span>
                    </div>
                    <span className="text-green-400">60-120 Hz Target</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-green-400">VulkanRenderer</span>.initContext(&#123; lowLatency: <span className="text-cyan-300">true</span> &#125;);
                    </div>
                    <div className="text-slate-400">
                        <span className="text-amber-300">GooglePlayServices</span>.leaderboards.<span className="text-green-300">syncScore</span>();
                    </div>
                    <div className="text-slate-400">
                        <span className="text-purple-400">TouchInputSystem</span>.multiTouch(&#123; joystick: <span className="text-green-300">'Active'</span> &#125;);
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-green-900/40 text-[10px]">
                    <div className="bg-green-950/80 border border-green-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-green-400 font-bold block">15,000+</span>
                        <span className="text-slate-400 text-[9px]">Devices Scaled</span>
                    </div>
                    <div className="bg-green-950/80 border border-green-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">0ms Lag</span>
                        <span className="text-slate-400 text-[9px]">Touch Response</span>
                    </div>
                    <div className="bg-green-950/80 border border-green-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">IAP Ready</span>
                        <span className="text-slate-400 text-[9px]">Play Billing</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-green-500" /> Fragment-Free Android Gameplay
                </span>
                <span className="text-[10px] font-bold text-green-600">Google Play Certified</span>
            </div>
        </motion.div>
    </div>
);

// 3. Unity Game Development Visual
export const UnityGameVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-sm font-mono">
                        ⬡
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Unity 6 Production Engine</h4>
                        <p className="text-[10px] text-slate-500">C# Gameplay & DOTS Architecture</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-full flex items-center gap-1">
                    <Sparkles size={10} className="text-slate-700" /> Unity DOTS
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0B132B] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-cyan-400">PlayerController.cs</span>
                    </div>
                    <span className="text-amber-400">Physics3D: PhysX</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-purple-400">public class</span> <span className="text-cyan-300">HeroController</span> : <span className="text-green-400">MonoBehaviour</span> &#123;
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">void</span> <span className="text-blue-300">FixedUpdate</span>() &#123;
                    </div>
                    <div className="pl-8 text-emerald-400">
                        rigidbody.<span className="text-yellow-300">AddForce</span>(moveDirection * speed);
                    </div>
                    <div className="pl-4 text-slate-400">&#125;</div>
                    <div className="text-slate-400">&#125;</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">URP / HDRP</span>
                        <span className="text-slate-400 text-[9px]">Custom Shaders</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">DOTS ECS</span>
                        <span className="text-slate-400 text-[9px]">High Entity Count</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">Cross-Platform</span>
                        <span className="text-slate-400 text-[9px]">Mobile / Console</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-slate-800" /> C# Scripting & Physics Mastery
                </span>
                <span className="text-[10px] font-bold text-slate-800">Ultra Scalable</span>
            </div>
        </motion.div>
    </div>
);

// 4. iOS Game Development Visual
export const IOSGameVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 font-bold">
                        
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Apple iOS & Metal Gaming</h4>
                        <p className="text-[10px] text-slate-500">Metal 3 & Apple Silicon Acceleration</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full flex items-center gap-1">
                    <Zap size={10} className="text-cyan-600" /> 120Hz ProMotion
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#0A121E] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-cyan-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-cyan-900/40 pb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                        <span className="text-cyan-300">Apple MetalFX Upscaling</span>
                    </div>
                    <span className="text-cyan-400">A17 Pro / M3 GPU</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-cyan-400">MTLDevice</span>.makeDefaultDevice();
                    </div>
                    <div className="text-slate-400">
                        <span className="text-purple-400">GameCenter</span>.authenticatePlayer(&#123; cloudSync: <span className="text-cyan-300">true</span> &#125;);
                    </div>
                    <div className="text-slate-400">
                        <span className="text-emerald-400">SpatialAudioEngine</span>.trackHeadPose();
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-cyan-900/40 text-[10px]">
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">Metal 3</span>
                        <span className="text-slate-400 text-[9px]">Hardware RT</span>
                    </div>
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">120 FPS</span>
                        <span className="text-slate-400 text-[9px]">Smooth ProMotion</span>
                    </div>
                    <div className="bg-cyan-950/80 border border-cyan-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-amber-400 font-bold block">Game Controller</span>
                        <span className="text-slate-400 text-[9px]">MFi & PS/Xbox</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-cyan-500" /> Premium iOS & iPadOS Architecture
                </span>
                <span className="text-[10px] font-bold text-cyan-600">App Store Featured</span>
            </div>
        </motion.div>
    </div>
);

// 5. Metaverse Development Visual
export const MetaverseVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 font-bold">
                        <Globe size={18} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Metaverse & Spatial Worlds</h4>
                        <p className="text-[10px] text-slate-500">WebXR, 3D Avatars & Spatial Audio</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-violet-50 text-violet-700 border border-violet-200 rounded-full flex items-center gap-1">
                    <Eye size={10} className="text-violet-600" /> WebXR / AR / VR
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#110B24] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-violet-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-violet-900/40 pb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
                        <span className="text-violet-300">SpatialInstance: World_01</span>
                    </div>
                    <span className="text-cyan-400">Sync: 10,000 Users</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-violet-400">SpatialServer</span>.spawnAvatar(&#123; rig: <span className="text-cyan-300">'ReadyPlayerMe'</span> &#125;);
                    </div>
                    <div className="text-slate-400">
                        <span className="text-amber-300">WebXRSession</span>.enablePassthrough(&#123; arMode: <span className="text-emerald-400">true</span> &#125;);
                    </div>
                    <div className="text-slate-400">
                        <span className="text-pink-400">SmartContract</span>.verifyVirtualAssetOwnership();
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-violet-900/40 text-[10px]">
                    <div className="bg-violet-950/80 border border-violet-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-violet-400 font-bold block">WebXR</span>
                        <span className="text-slate-400 text-[9px]">Browser 3D</span>
                    </div>
                    <div className="bg-violet-950/80 border border-violet-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">Spatial 3D</span>
                        <span className="text-slate-400 text-[9px]">Dolby Audio</span>
                    </div>
                    <div className="bg-violet-950/80 border border-violet-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-pink-400 font-bold block">Quest / Vision</span>
                        <span className="text-slate-400 text-[9px]">VR Ready</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-violet-500" /> Decentralized Virtual Environments
                </span>
                <span className="text-[10px] font-bold text-violet-600">Next-Gen Spatial</span>
            </div>
        </motion.div>
    </div>
);

// 6. Unreal Game Development Visual
export const UnrealGameVisual = () => (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8 z-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-6 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 font-bold font-mono text-sm">
                        UE
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-[#0A1024]">Unreal Engine 5.4 Lumen & Nanite</h4>
                        <p className="text-[10px] text-slate-500">Photorealistic AAA Raytracing & C++</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full flex items-center gap-1">
                    <Trophy size={10} className="text-orange-600" /> Nanite + Lumen
                </span>
            </div>

            <div className="w-full flex-1 my-3 bg-[#150F08] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden font-mono text-xs border border-orange-950 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-orange-900/40 pb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                        <span className="text-orange-300">UE5.4 World Partition</span>
                    </div>
                    <span className="text-amber-400">DirectX 12 / Vulkan</span>
                </div>

                <div className="space-y-1.5 py-2">
                    <div className="text-slate-400">
                        <span className="text-orange-400">LumenGlobalIllumination</span>.<span className="text-cyan-300">enableRealTimeBounces</span>();
                    </div>
                    <div className="text-slate-400">
                        <span className="text-amber-300">NaniteGeometry</span>.<span className="text-yellow-300">renderBillionsOfPolygons</span>();
                    </div>
                    <div className="text-slate-400">
                        <span className="text-purple-400">ChaosPhysics</span>.simulateDestruction(&#123; realism: <span className="text-emerald-400">'Ultra'</span> &#125;);
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-orange-900/40 text-[10px]">
                    <div className="bg-orange-950/80 border border-orange-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-orange-400 font-bold block">Nanite</span>
                        <span className="text-slate-400 text-[9px]">Micro-Polygon</span>
                    </div>
                    <div className="bg-orange-950/80 border border-orange-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-cyan-400 font-bold block">Lumen RT</span>
                        <span className="text-slate-400 text-[9px]">Dynamic Lights</span>
                    </div>
                    <div className="bg-orange-950/80 border border-orange-900/40 p-1.5 rounded-lg text-center">
                        <span className="text-emerald-400 font-bold block">4K 60FPS</span>
                        <span className="text-slate-400 text-[9px]">Console / PC</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-orange-500" /> Photorealistic AAA Game Production
                </span>
                <span className="text-[10px] font-bold text-orange-600">Cinema Quality</span>
            </div>
        </motion.div>
    </div>
);
