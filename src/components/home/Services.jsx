import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/services';

const bgColors = [
  'bg-brand-cyan',
  'bg-brand-deep-blue',
  'bg-brand-blue',
  'bg-brand-electric-cyan',
  'bg-brand-soft-blue',
  'bg-brand-primary-navy'
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  const bgClass = bgColors[index % bgColors.length];

  return (
    <Link
      to={service.link}
      className="group flex flex-col justify-between h-full p-6 lg:p-8 rounded-[24px] lg:rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden bg-white border border-[#D9E7EF]"
    >
      {/* Subtle pastel background element */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${bgClass} opacity-20 group-hover:scale-150 group-hover:opacity-40 transition-transform duration-700 ease-out pointer-events-none`}
      ></div>

      <div className="flex justify-between items-start mb-10 relative z-10">
        <span className="text-xl font-heading font-extrabold text-muted-foreground/30">
          {service.id}
        </span>
        <div className={`p-4 rounded-2xl ${bgClass} transition-colors`}>
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-8 line-clamp-3 text-lg leading-relaxed">
          {service.desc}
        </p>
      </div>

      <div className="flex justify-end mt-auto relative z-10">
        <div className="w-12 h-12 rounded-full flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Total cards visible at once in desktop is 3
  const visibleCards = 3;
  const maxIndex = Math.max(0, servicesData.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Autoplay for desktop slider when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-soft to-transparent opacity-50 h-[80px] lg:h-32 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title & Desktop Navigation Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12">
          <SectionHeading title="What we do" subtitle="Our Services" />

          {/* Desktop Slider Controls */}
          <div className="hidden lg:flex items-center gap-4 mb-12">
            {/* Page indicator badge */}
            <div className="px-4 py-2 rounded-full bg-[#F0F5F9] text-sm font-semibold text-[#486275] tracking-wider border border-[#D9E7EF]">
              <span className="text-primary font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-muted-foreground/50 mx-1.5">/</span>
              <span>{String(maxIndex + 1).padStart(2, '0')}</span>
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous services"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-[#D9E7EF] bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next services"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-[#D9E7EF] bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP VIEW: SMOOTH 1-ROW 3-CARD SLIDER ================= */}
        <div
          className="hidden lg:block overflow-hidden py-4 -my-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(-${currentIndex} * ((100% + 1.5rem) / 3)))`,
              gap: '1.5rem'
            }}
          >
            {servicesData.map((service, i) => (
              <div
                key={service.id || i}
                className="flex-shrink-0"
                style={{ width: 'calc((100% - 3rem) / 3)' }}
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>

          {/* Desktop Pagination Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-9 bg-primary'
                    : 'w-2.5 bg-[#D9E7EF] hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= MOBILE / TABLET VIEW: STANDARD GRID (NOT SLIDER) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id || i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
