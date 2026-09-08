import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../common/PageTransition';
import { SubServiceShared } from './SubServiceShared';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ModernServiceLayout = ({
    seo,
    theme,
    hero,
    intro,
    process,
    services,
    industries,
    reasons,
    contact
}) => {
    useSEO(seo);

    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero
                    parentTitle={hero.parentTitle}
                    parentRoute={hero.parentRoute}
                    eyebrow={hero.eyebrow}
                    title={hero.title}
                    description={hero.description}
                    theme={theme}
                    visual={hero.visual}
                    ctaText={hero.ctaText || "GET FREE QUOTE NOW"}
                />

                {intro && (
                    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-1 relative z-10">
                            <div className="max-w-4xl mx-auto text-center lg:text-left">
                                {intro.eyebrow && <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">{intro.eyebrow}</h2>}
                                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] mb-8">
                                    {intro.title}
                                </motion.h2>
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-600">
                                    {intro.paragraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )}

                {process && (
                    <SubServiceShared.Process
                        theme={theme}
                        title={process.title}
                        eyebrow={process.eyebrow}
                        description={process.description}
                        process={process.steps}
                    />
                )}

                {services && (
                    <section>
                        {/* TOP HEADING AREA */}
                        <div className="bg-white py-12 md:py-16 lg:py-20">
                            <div className="max-w-7xl mx-auto px-1 text-center flex flex-col items-center">
                                {services.eyebrow && (
                                    <div className="bg-[#EAF4FE] text-[#05408A] font-bold text-sm tracking-wide uppercase px-1 py-2 rounded-full mb-6">
                                        {services.eyebrow}
                                    </div>
                                )}
                                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024] ${services.description ? 'mb-4' : ''}`}>
                                    {services.title}
                                </h3>
                                {services.description && (
                                    <p className="text-slate-600 max-w-3xl">
                                        {services.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* MAIN SERVICE CONTENT AREA */}
                        <div className="w-full bg-white py-12 md:py-16">
                            <div className="max-w-7xl mx-auto px-1">
                                <div className="space-y-12 lg:space-y-16">
                                    {services.items.map((svc, i) => (
                                        <motion.div
                                            key={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-50px" }}
                                            variants={fadeIn}
                                            className={`group relative flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-between gap-10 lg:gap-14 w-full p-6 lg:p-10 rounded-[32px] transition-colors duration-500 hover:bg-[#F0F7FF]`}
                                        >

                                            {/* LEFT COLUMN: Height determined organically by paragraph text */}
                                            <div className="w-full lg:w-[49%] flex flex-col justify-center">
                                                <div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                    <div className="w-20 h-[2px] bg-orange-500 mt-4 mb-6"></div>
                                                </div>
                                                <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                                                    {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                                </div>
                                            </div>

                                            {/* RIGHT COLUMN: Stretches matching left side through cascading flex layout */}
                                            <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col">
                                                {/* Decorative Orange Shape (Absolute behind card) */}
                                                <div className="absolute -inset-4 sm:-inset-6 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 transition-colors"></div>

                                                {/* Outer Card (Given flex-1 to consume the full stretched column height) */}
                                                <div className="relative w-full flex-1 bg-white rounded-[24px] shadow-lg border border-slate-100 p-2 flex flex-col">
                                                    {/* Image Space (Takes all remaining inner vertical height pushing CTA flush) */}
                                                    <div className="relative w-full flex-1 min-h-[250px] overflow-hidden rounded-t-[18px]">
                                                        <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover block" />
                                                    </div>

                                                    {/* Rigid CTA Link positioned below fluid image limit */}
                                                    <Link to="/contact" className="group/link flex items-center w-full bg-[#0A1024] text-white p-4 sm:p-5 rounded-b-[18px] transition-colors hover:bg-slate-900 gap-4 mt-0.5 shrink-0">
                                                        <div className="text-orange-400 shrink-0">
                                                            {React.cloneElement(svc.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
                                                        </div>
                                                        <span className="font-semibold text-sm sm:text-base leading-snug flex-1">
                                                            {svc.cta || "Get Started"}
                                                        </span>
                                                        <ArrowRight className="w-5 h-5 text-white/50 group-hover/link:text-white group-hover/link:translate-x-1 transition-all shrink-0" />
                                                    </Link>
                                                </div>
                                            </div>

                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {industries && (
                    <section className="py-20 lg:py-32 bg-white">
                        <div className="max-w-7xl mx-auto px-1">
                            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                                {industries.eyebrow && <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">{industries.eyebrow}</h2>}
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0A1024] mb-4">{industries.title}</h3>
                                {industries.description && <p className="text-slate-600">{industries.description}</p>}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {industries.items.map((ind, i) => (
                                    <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-cyan-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4">
                                        <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-colors">
                                            {React.cloneElement(ind.icon, { className: 'w-6 h-6' })}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#0A1024] mb-2">{ind.name}</h5>
                                            <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {reasons && (
                    <section className="py-20 lg:py-32 bg-[#F5FAFD]">
                        <div className="max-w-7xl mx-auto px-1">
                            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                                {reasons.eyebrow && <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">{reasons.eyebrow}</h2>}
                                <h3 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight mb-6">
                                    {reasons.title}
                                </h3>
                                {reasons.description && <p className="text-slate-600">{reasons.description}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {reasons.items.map((reason, i) => (
                                    <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                                        <span className="text-[#0A1024] font-bold">{reason}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {contact && (
                    <section className="py-16 md:py-24 lg:py-32 bg-white relative">
                        <div className="max-w-4xl mx-auto px-1 relative z-10">
                            <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-bold text-[#0A1024] mb-3">{contact.title || "GET A FREE QUOTE"}</h3>
                                    <p className="text-slate-600">{contact.description || "We will get back to you within 24 hours"}</p>
                                </div>
                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted smoothly!"); }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">First Name <span className="text-red-500">*</span></label>
                                            <input required type="text" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Last Name <span className="text-red-500">*</span></label>
                                            <input required type="text" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Email Address <span className="text-red-500">*</span></label>
                                            <input required type="email" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Phone Number <span className="text-red-500">*</span></label>
                                            <input required type="tel" className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Message <span className="text-red-500">*</span></label>
                                        <textarea required rows={4} className="w-full px-1 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your project requirements..."></textarea>
                                    </div>
                                    <div className="pt-4">
                                        <button type="submit" className="w-full md:w-auto px-2 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
                                            Submit Request
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </PageTransition>
    );
};
