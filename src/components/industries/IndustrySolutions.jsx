import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const bgColors = [
  'bg-brand-cyan',
  'bg-brand-deep-blue',
  'bg-brand-blue',
  'bg-brand-electric-cyan',
  'bg-brand-soft-blue',
  'bg-brand-primary-navy'
];

export const IndustrySolutions = ({ solutions = [], variant = 'saas' }) => (
  <section id="solutions" className="py-20 lg:py-32 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#D9E7EF] relative">
    <div className="max-w-[1400px] mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-3 block text-primary">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#061A2E] leading-tight">
            What We Build
          </h2>
        </div>
        <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base sm:text-lg">
          Custom software architectures engineered to scale effortlessly with your enterprise growth.
        </p>
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {solutions.map((sol, i) => {
          const bgClass = bgColors[i % bgColors.length];
          return (
            <div
              key={i}
              className="group p-6 sm:p-8 rounded-[24px] lg:rounded-3xl bg-white border border-[#D9E7EF] hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle pastel background corner element */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${bgClass} opacity-20 group-hover:scale-150 group-hover:opacity-40 transition-transform duration-700 ease-out pointer-events-none`}
              ></div>

              {/* Top Row: Index Badge */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="text-xl font-heading font-extrabold text-muted-foreground/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={`p-3 rounded-2xl ${bgClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Middle: Title & Description */}
              <div className="relative z-10 mb-8 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#061A2E] mb-3 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {sol.desc}
                </p>
              </div>

              {/* Bottom: Interactive Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-[#D9E7EF]/60 relative z-10">
                <span className="text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
                  Custom Platform
                </span>
                <Link
                  to="/contact"
                  className="w-10 h-10 rounded-full border border-[#D9E7EF] flex items-center justify-center text-slate-700 group-hover:bg-[#061A2E] group-hover:border-[#061A2E] group-hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={`Get started with ${sol.title}`}
                >
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default IndustrySolutions;