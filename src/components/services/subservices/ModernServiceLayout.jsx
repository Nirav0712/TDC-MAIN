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
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="max-w-4xl mx-auto text-center lg:text-left">
                                {intro.eyebrow && <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">{intro.eyebrow}</h2>}
                                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024] mb-8">
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
                    <section className="py-20 lg:py-32 bg-slate-50 relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                                {services.eyebrow && <h2 className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">{services.eyebrow}</h2>}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1024]">{services.title}</h3>
                            </div>
                            <div className="space-y-12 lg:space-y-24">
                                {services.items.map((svc, i) => (
                                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-stretch py-4`}>
                                        <div className="flex-1 space-y-6 w-full lg:max-w-[560px]">
                                            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-2xl flex items-center justify-center">
                                                {svc.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl md:text-3xl font-bold text-[#0A1024]">{svc.title}</h4>
                                                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-cyan-500 rounded-full mt-4 mb-6"></div>
                                            </div>
                                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                                {svc.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                                            </div>
                                            {svc.cta && (
                                                <div className="pt-4">
                                                    <Link to="/contact" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link text-lg">
                                                        {svc.cta}
                                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, x: i % 2 !== 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            className="flex-1 w-full lg:max-w-[560px] relative group"
                                        >
                                            <div className="absolute -inset-4 bg-cyan-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
                                            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] bg-slate-100 border border-slate-100 rounded-[18px] shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                                <img src={svc.imgUrl} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {industries && (
                    <section className="py-20 lg:py-32 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-bold text-[#0A1024] mb-3">{contact.title || "GET A FREE QUOTE"}</h3>
                                    <p className="text-slate-600">{contact.description || "We will get back to you within 24 hours"}</p>
                                </div>
                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted smoothly!"); }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">First Name <span className="text-red-500">*</span></label>
                                            <input required type="text" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Last Name <span className="text-red-500">*</span></label>
                                            <input required type="text" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Email Address <span className="text-red-500">*</span></label>
                                            <input required type="email" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-[#0A1024]">Phone Number <span className="text-red-500">*</span></label>
                                            <input required type="tel" className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#0A1024]">Message <span className="text-red-500">*</span></label>
                                        <textarea required rows={4} className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your project requirements..."></textarea>
                                    </div>
                                    <div className="pt-4">
                                        <button type="submit" className="w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
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
