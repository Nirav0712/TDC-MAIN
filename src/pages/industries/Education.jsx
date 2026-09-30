import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Award, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { EducationData } from '../../data/industries/education';

const EducationVisual = () => (
  <div className="w-full bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl shadow-rose-950/10 border border-[#D9E7EF] overflow-hidden flex flex-col p-6 relative">
    {/* Header */}
    <div className="flex items-center justify-between pb-4 border-b border-[#D9E7EF]/80 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#061A2E]">EduStream NextGen LMS</h4>
          <span className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> SCORM & LTI Compliant
          </span>
        </div>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-rose-50 text-[11px] font-bold text-rose-700 border border-rose-200">
        48k Active
      </span>
    </div>

    {/* Metric Cards Row */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Completion Rate</span>
        <span className="text-base font-extrabold text-emerald-600 mt-0.5">92.4%</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Live Virtual Labs</span>
        <span className="text-base font-extrabold text-[#087EA4] mt-0.5">340+</span>
      </div>
      <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E7EF] flex flex-col">
        <span className="text-[10px] font-bold uppercase text-slate-500">Satisfaction</span>
        <span className="text-base font-extrabold text-rose-600 mt-0.5">4.9 / 5</span>
      </div>
    </div>

    {/* Live Module Progress */}
    <div className="p-4 rounded-2xl bg-[#061A2E] text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-1.5 text-[#18C5E8]">
          <PlayCircle className="w-4 h-4" /> Interactive AI Learning Track
        </span>
        <span className="text-emerald-400 font-bold">Module 4 of 6</span>
      </div>

      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '20%' }}
          animate={{ width: '78%' }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
          className="h-full bg-gradient-to-r from-rose-500 to-[#18C5E8] rounded-full"
        />
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
        <span>Adaptive Quizzing Engine</span>
        <span className="text-slate-300">Real-time Student Analytics</span>
      </div>
    </div>
  </div>
);

const educationSteps = [
  { step: '01', title: 'Pedagogy & Curriculum Audit', desc: 'Mapping learning paths, certification requirements, and instructor workflows.' },
  { step: '02', title: 'Engaging EdTech UX Design', desc: 'Creating gamified learner dashboards, interactive quizzes, and mobile apps.' },
  { step: '03', title: 'LMS Core & Video Streaming', desc: 'Developing low-latency video classrooms, assessment engine, and SCORM sync.' },
  { step: '04', title: 'Accessibility & Device Testing', desc: 'Validating WCAG 2.1 accessibility, screen readers, and low-bandwidth modes.' },
  { step: '05', title: 'School & Enterprise Rollout', desc: 'Seamless migration of historical student data with instructor onboarding.' }
];

const Education = () => {
  useSEO({
    title: "Education Digital Solutions | The Digital Connect",
    description: "Build engaging digital learning platforms that connect students, teachers and institutions through intuitive technology."
  });

  return (
    <div className="bg-white min-h-screen">
      <IndustryHero
        variant="education"
        eyebrow="EDTECH SOLUTIONS"
        headline="Technology That Makes Learning More Connected & Engaging."
        description="Build scalable digital learning platforms that empower educators, inspire students, and streamline institutional management through intuitive software."
        visual={EducationVisual}
        ctaText="Build Learning Platform"
      />

      <IndustryOverview
        title="Transforming Education with Interactive Digital Ecosystems"
        content={[
          EducationData.desc ? `"${EducationData.desc}"` : '""',
          "We engineer state-of-the-art Learning Management Systems (LMS), interactive virtual classrooms, and gamified edtech platforms for universities, academies, and corporate enterprises.",
          "Our platforms support adaptive learning algorithms, automated grading engines, SCORM/LTI compliance, and rich multi-device accessibility."
        ]}
      />

      <IndustryChallenges challenges={EducationData.challenges} />

      <IndustryUniqueSection title="The EdTech Engineering Lifecycle" variant="education">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {educationSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm hover:shadow-md hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-rose-700 px-2.5 py-1 rounded-lg bg-rose-50 inline-block mb-3">
                  Step {item.step}
                </span>
                <h4 className="text-base font-bold text-[#061A2E] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </IndustryUniqueSection>

      <IndustryCTA title="Ready to Build the Future of Learning?" variant="education" />
    </div>
  );
};

export default Education;
