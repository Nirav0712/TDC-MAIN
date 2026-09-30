import React from 'react';
import { CheckCircle2, TrendingUp, Layers, Zap } from 'lucide-react';

export const IndustryOverview = ({ title, content }) => (
  <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D9E7EF]">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
      
      {/* Left Column: Heading & Highlight Cards */}
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#087EA4]">
          Domain Overview
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#061A2E] leading-tight mb-8">
          {title}
        </h2>
        
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col gap-2">
            <Zap className="w-6 h-6 text-[#18C5E8]" />
            <h4 className="font-bold text-sm text-[#061A2E]">High Performance</h4>
            <p className="text-xs text-slate-500">Sub-second response and optimized latency</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col gap-2">
            <Layers className="w-6 h-6 text-[#087EA4]" />
            <h4 className="font-bold text-sm text-[#061A2E]">Modular Stack</h4>
            <p className="text-xs text-slate-500">Easily extensible microservice architecture</p>
          </div>
        </div>
      </div>

      {/* Right Column: Detailed Narrative with Quote Accent */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-[#F8FAFC] border-l-4 border-primary rounded-r-2xl p-6 sm:p-8 border border-y-[#D9E7EF] border-r-[#D9E7EF] shadow-sm">
          {content && content[0] && (
            <p className="text-lg sm:text-xl font-medium text-[#061A2E] leading-relaxed italic">
              {content[0]}
            </p>
          )}
        </div>

        {content && content.slice(1).map((p, i) => (
          <p key={i} className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {p}
          </p>
        ))}

        <div className="flex flex-wrap gap-4 pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#061A2E]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Tailored Domain Workflows</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#061A2E]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Legacy System Modernization</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#061A2E]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Compliance & Data Protection</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default IndustryOverview;