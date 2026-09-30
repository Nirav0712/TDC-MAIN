import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FeatureRow = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative flex flex-col justify-between rounded-3xl p-7 lg:p-8 bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-cyan-500/40 shadow-[0_4px_20px_-4px_rgba(6,26,46,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(24,197,232,0.18)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
    >
      {/* Background Gradient Bloom on Hover */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-cyan-400/10 via-sky-300/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:scale-110" />
      
      {/* Subtle top-light border accent */}
      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

      {/* Top Section: Icon + Number Badge */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#E6F7FA] to-[#EDF6FD] text-[#00A9D6] group-hover:text-white group-hover:from-[#00A9D6] group-hover:to-[#087EA4] flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-[0_8px_18px_-2px_rgba(0,169,214,0.35)] group-hover:scale-105">
          <Icon className="w-6 h-6 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors duration-300">
            {item.highlight}
          </span>
          <span className="text-2xl font-heading font-black text-slate-200 group-hover:text-cyan-500/30 transition-colors duration-300 select-none">
            {item.num}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading font-bold text-[#061A2E] group-hover:text-[#00A9D6] transition-colors duration-300 mb-2.5">
            {item.title}
          </h3>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            {item.desc}
          </p>
        </div>

        {/* Bottom Section: Tags + Arrow */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-wrap items-center gap-1.5">
            {item.tags?.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-medium text-slate-500 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 group-hover:border-cyan-100 group-hover:bg-cyan-50/40 group-hover:text-cyan-800 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-cyan-600 group-hover:bg-cyan-50 transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureRow;
