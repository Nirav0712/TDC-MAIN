import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SubServiceProcess = ({ process, theme = {} }) => (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
            <div className="mb-16 max-w-3xl">
                <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 ${theme.accent || 'text-cyan-700'}`}>
                    Agile Delivery Workflow
                </span>
                <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-[#0A1024]">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((step, i) => (
                    <div key={i} className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-2xl font-black text-[#0A1024] group-hover:text-cyan-600 transition-colors">
                                    0{i + 1}
                                </span>
                                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>
                            </div>
                            <div className="w-8 h-[2px] bg-cyan-500 rounded-full mb-3 group-hover:w-12 transition-all"></div>
                            <h3 className="text-lg font-bold text-[#0A1024] mb-2 group-hover:text-cyan-800 transition-colors">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SubServiceProcess;