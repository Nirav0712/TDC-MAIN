import React from 'react';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const SubServiceShared = {
    Hero: ({ parentTitle, parentRoute, title, eyebrow, description, theme, visual: Visual, ctaText = "Start a Project" }) => (
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F5FAFD]">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            <div className={`absolute top-0 right-0 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full blur-[100px] lg:blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 ${theme.bg}`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col pt-12 lg:pt-6">

                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold mb-6 md:mb-10 text-slate-500">
                    <Link to="/" className="hover:text-cyan-600 transition-colors shrink-0">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <Link to="/services" className="hover:text-cyan-600 transition-colors shrink-0">Services</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <Link to={parentRoute} className="hover:text-cyan-600 transition-colors shrink-0 whitespace-nowrap">{parentTitle}</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-cyan-600 font-bold shrink-0">{eyebrow}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col space-y-6">
                        <div className="inline-flex items-center space-x-2 border border-cyan-200 bg-white shadow-sm rounded-full px-3.5 py-1.5 w-max">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">{eyebrow}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1024] leading-[1.15]">
                            {title.split('.').map((part, i, arr) =>
                                i === arr.length - 1 ? part : <React.Fragment key={i}>{part}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">.</span></React.Fragment>
                            )}
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            {description}
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-6 py-3.5 font-bold text-white transition-all duration-300 bg-cyan-600 rounded-full hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                <span className="relative z-10 flex items-center">
                                    {ctaText}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link to="/portfolio" className="group hidden lg:inline-flex items-center justify-center px-6 py-3.5 font-bold text-[#0A1024] bg-white border border-slate-200 transition-all duration-300 rounded-full hover:border-cyan-300 hover:text-cyan-600">
                                View Work
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full flex justify-center items-center h-auto min-h-[400px]">
                        {Visual ? <Visual /> : (
                            <div className="w-full aspect-[4/3] bg-white border border-slate-200 rounded-3xl shadow-xl flex items-center justify-center text-slate-400 font-bold">
                                Visual Representation
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    ),

    Overview: ({ title, content, theme }) => (
        <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-5 relative">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">Overview</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1024] leading-tight lg:sticky lg:top-32">{title}</h2>
                </div>
                <div className="lg:col-span-7">
                    <div className="prose prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
                        {content.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>
            </div>
        </section>
    ),

    Capabilities: ({ theme, capabilities, title = "What We Build", eyebrow = "Capabilities" }) => (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 lg:mb-20">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">{eyebrow}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A1024] leading-tight max-w-2xl">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 hover:border-cyan-200 hover:shadow-lg transition-all group flex flex-col">
                            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 duration-500">
                                {cap.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1024] mb-3">{cap.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Technology: ({ technologies, theme, title = "Technology Stack", eyebrow = "Engineering Core" }) => (
        <section className="py-12 md:py-20 bg-white px-4 sm:px-6 lg:px-8 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/3 shrink-0">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">{eyebrow}</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#0A1024] mb-4">{title}</h2>
                    <p className="text-slate-500 text-sm md:text-lg">Industry-leading tools ensuring performance and scalability.</p>
                </div>
                <div className="w-full lg:w-2/3 flex flex-wrap gap-3 justify-center lg:justify-start">
                    {technologies.map((tech, i) => (
                        <div key={i} className="px-3.5 py-2.5 rounded-full border border-slate-200 text-sm md:text-base font-bold text-slate-700 bg-slate-50 hover:bg-white hover:border-cyan-300 hover:text-cyan-700 hover:shadow-md transition-all cursor-default">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Process: ({ process, theme, title = "Methodology", eyebrow = "How We Work", description }) => (
        <section className="py-16 md:py-24 bg-[#FAFCFF] relative overflow-hidden border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-2 block">{eyebrow}</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1024]">{title}</h2>
                    {description && (
                        <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Simple, Unique, Interactive & Aesthetic Process Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {process.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-extrabold text-sm flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300">
                                        0{idx + 1}
                                    </span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">
                                        Step 0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[#0A1024] mb-2.5 group-hover:text-cyan-700 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Benefits: ({ benefits, theme }) => (
        <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 lg:mb-16">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">Business Value</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A1024]">Why This Matters</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {benefits.map((ben, i) => (
                        <div key={i} className="flex gap-5 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all">
                            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold bg-cyan-50 text-cyan-600">
                                {(i + 1)}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0A1024] mb-2">{ben.title}</h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{ben.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    FAQ: ({ faqs, theme }) => (
        <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 text-center">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3 block">Common Questions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1024]">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-[#0A1024] hover:text-cyan-600 transition-colors select-none">
                                {faq.q}
                                <span className="transition group-open:rotate-180 text-slate-400 group-open:text-cyan-600">
                                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-slate-600 px-4 sm:px-6 pb-6 text-sm md:text-base font-medium leading-relaxed">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    ),

    Related: ({ links, theme }) => (
        <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1024] mb-8 text-center md:text-left">Related Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {links.map((link, i) => (
                        <Link key={i} to={link.href} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 relative flex items-center justify-between">
                            <h3 className="font-bold text-[#0A1024] pr-4">{link.title}</h3>
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-cyan-600 group-hover:rotate-0 -rotate-45 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    ),

    CTA: ({ theme }) => (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-cyan-900 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[80px] bg-cyan-400/20 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
                <p className="text-cyan-100 text-lg md:text-xl mb-10">
                    Let's build something meaningful. Tell us what you're tracking and we'll engineer the solution collaboratively.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contact" className="bg-cyan-500 text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:bg-cyan-400 hover:-translate-y-1 transition-all flex justify-center items-center gap-3 w-full sm:w-auto">
                        Get a Free Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    ),

    QuoteForm: ({ theme, title = "GET A FREE QUOTE", subtitle = "We will get back to you within 24 hours", serviceName }) => (
        <section className="py-16 md:py-24 lg:py-32 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-slate-50 rounded-[32px] shadow-sm overflow-hidden border border-slate-200 p-8 lg:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-[#0A1024] mb-3">{title}</h3>
                        <p className="text-slate-600">{subtitle}</p>
                    </div>
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your quote request has been received. Our team will contact you shortly."); }}>
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
                            <textarea required rows={4} className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none placeholder:text-slate-400" placeholder={serviceName ? `Tell us about your ${serviceName} requirements...` : "Tell us about your project requirements..."}></textarea>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="w-full md:w-auto px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-600/20 flex justify-center items-center group mx-auto">
                                Submit Request
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SubServiceShared;
