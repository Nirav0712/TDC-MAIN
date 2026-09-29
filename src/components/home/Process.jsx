import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understanding business objectives, user needs, and market pain points.' },
  { num: '02', title: 'Strategize', desc: 'Defining tech architecture, scope, milestones, and measurable KPIs.' },
  { num: '03', title: 'Design', desc: 'Crafting intuitive UI/UX wireframes, interactive prototypes, and design systems.' },
  { num: '04', title: 'Build', desc: 'Clean, scalable frontend & backend development with modern frameworks.' },
  { num: '05', title: 'Test', desc: 'Rigorous cross-device testing, security audits, and performance tuning.' },
  { num: '06', title: 'Launch', desc: 'Zero-downtime deployment, server setup, and seamless production cutover.' },
  { num: '07', title: 'Grow', desc: 'Ongoing maintenance, performance monitoring, and feature scaling.' }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <div className="mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
          <SectionHeading title="Our Process" subtitle="How We Work" centered />
          <p className="text-muted-foreground text-lg md:text-xl mt-3">
            A proven methodology designed to deliver exceptional digital products on time and on budget.
          </p>
        </div>

        {/* Simple & Aesthetic Interactive Stepper Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-center border transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-cyan-500 shadow-md ring-2 ring-cyan-500/10 -translate-y-0.5'
                  : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
              }`}
            >
              <span className={`block text-xs font-black mb-1 ${activeStep === idx ? 'text-cyan-600' : 'text-slate-400'}`}>
                {step.num}
              </span>
              <span className={`text-sm font-bold block ${activeStep === idx ? 'text-[#0A1024]' : 'text-slate-600'}`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2 block">
            Phase {steps[activeStep].num}
          </span>
          <h3 className="text-2xl font-bold text-[#0A1024] mb-2.5">
            {steps[activeStep].title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
