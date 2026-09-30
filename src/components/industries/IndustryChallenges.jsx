import React from 'react';
import { AlertTriangle, ArrowUpRight } from 'lucide-react';

export const IndustryChallenges = ({ challenges = [], title = 'Key Industry Challenges We Solve' }) => (
  <section className="py-20 lg:py-28 bg-[#F0F5F9]/60 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D9E7EF]">
    <div className="max-w-[1400px] mx-auto relative z-10">
      
      {/* Header */}
      <div className="max-w-3xl mb-12 lg:mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase mb-3 block text-rose-600">
          Overcoming Friction
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#061A2E] leading-tight mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Transforming complex sector-specific hurdles into scalable competitive advantages.
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, i) => (
          <div
            key={i}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#18C5E8]/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Index & Warning Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-heading font-extrabold text-slate-300 group-hover:text-primary transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>

            {/* Title / Description */}
            <h3 className="text-lg sm:text-xl font-bold text-[#061A2E] mb-4 group-hover:text-primary transition-colors leading-snug">
              {challenge}
            </h3>

            {/* Bottom Solution Hint */}
            <div className="pt-4 border-t border-[#D9E7EF]/60 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
              <span>Engineered Solution Ready</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default IndustryChallenges;