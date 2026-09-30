import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import logo from '../../assets/logo/TDC.png';

const SocialIconLinkedIn = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.78a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
  </svg>
);

const SocialIconTwitter = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialIconInstagram = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const SocialIconGithub = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020B16] text-white pt-16 md:pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative border-t border-cyan-500/15">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00A9D6]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#18C5E8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="The Digital Connect"
                className="h-10 sm:h-11 w-auto bg-white/5 p-2 rounded-xl object-contain drop-shadow-md border border-white/10"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We design and develop high-end digital architecture that aggressively scales enterprise functionality, creates unmatched user experiences, and delivers high-ROI outcomes.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-400 hover:text-[#18C5E8] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <SocialIconLinkedIn />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-400 hover:text-[#18C5E8] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <SocialIconTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-400 hover:text-[#18C5E8] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <SocialIconInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-400 hover:text-[#18C5E8] flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <SocialIconGithub />
              </a>
            </div>
          </div>

          {/* Col 2: Company Links (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C5E8]"></span>
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Careers <span className="text-[10px] bg-cyan-500/20 text-[#18C5E8] px-2 py-0.5 rounded-full ml-1.5 border border-cyan-400/20">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C5E8]"></span>
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/services/web-development" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Mobile Engineering (iOS & Android)
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  UI/UX & Design Systems
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="hover:text-[#18C5E8] hover:translate-x-1 inline-block transition-all duration-200">
                  Cloud & Microservices
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18C5E8]"></span>
              Get In Touch
            </h4>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <a
                href="tel:+919925843531"
                className="flex items-center gap-3 text-sm font-semibold text-white hover:text-[#18C5E8] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#18C5E8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={14} />
                </div>
                <span>+91 9925843531</span>
              </a>

              <a
                href="mailto:info@thedigitalconnect.in"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#18C5E8] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-[#18C5E8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={14} />
                </div>
                <span className="truncate">info@thedigitalconnect.in</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for new client projects globally</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Digital Connect. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-[#18C5E8] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#18C5E8] transition-colors">
              Terms of Service
            </Link>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
