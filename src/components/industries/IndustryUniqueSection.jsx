import React from 'react';

export const IndustryUniqueSection = ({ title, children, variant = 'saas' }) => (
  <section className="py-20 lg:py-28 bg-[#FAFBFD] px-4 sm:px-6 lg:px-8 border-b border-[#D9E7EF] overflow-hidden relative">
    <div className="max-w-[1400px] mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase mb-3 block text-[#087EA4]">
          Methodology & Delivery
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#061A2E] mb-4">
          {title}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          A systematic engineering lifecycle built around iterative testing, regulatory compliance, and high availability.
        </p>
      </div>

      <div className="w-full">
        {children}
      </div>
    </div>
  </section>
);

export default IndustryUniqueSection;