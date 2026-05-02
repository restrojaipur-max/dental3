'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';

const cyclingWords = ['Confident', 'Healthy', 'Radiant', 'Beautiful', 'Bright'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animClass, setAnimClass] = useState('word-in');
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
    intervalRef.current = setInterval(() => {
      setAnimClass('word-out');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        setAnimClass('word-in');
      }, 420);
    }, 2400);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-4"
    >
      {/* Animated blobs */}
      <div
        className="blob-1 absolute top-1/4 left-1/4 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,191,181,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="blob-2 absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[480px] max-h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,60,94,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,191,181,0.05) 0%, transparent 60%)' }}
      />

      {/* Tooth decorations */}
      <ToothDecoration
        size={90}
        color="#1A3C5E"
        className="absolute top-24 right-8 md:right-20 tooth-float opacity-[0.04]"
        style={{ '--rot': '25deg' } as React.CSSProperties}
      />
      <ToothDecoration
        size={60}
        color="#4ABFB5"
        className="absolute bottom-32 left-6 md:left-20 tooth-float-slow opacity-[0.06]"
        style={{ '--rot': '-18deg' } as React.CSSProperties}
      />
      <ToothDecoration
        size={50}
        color="#1A3C5E"
        className="absolute top-40 left-8 tooth-float opacity-[0.04]"
        style={{ '--rot': '10deg' } as React.CSSProperties}
      />
      <ToothDecoration
        size={70}
        color="#4ABFB5"
        className="absolute bottom-20 right-12 md:right-32 tooth-float-slow opacity-[0.05]"
        style={{ '--rot': '-30deg' } as React.CSSProperties}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-white/80 backdrop-blur-sm mb-10 shadow-sm reveal-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
            Accepting New Patients · Singapore
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-bold leading-[0.88] tracking-tighter mb-6 reveal-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block text-[clamp(3rem,9vw,7.5rem)] text-primary">
            Your{' '}
            <span className="inline-block relative">
              <span
                className={`inline-block text-accent font-serif italic ${mounted ? animClass : ''}`}
                style={{ minWidth: '0.5em' }}
              >
                {cyclingWords[wordIndex]}
              </span>
            </span>
          </span>
          <span
            className="block text-[clamp(3rem,9vw,7.5rem)] text-primary"
          >
            Smile Starts Here.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium reveal-up"
          style={{ animationDelay: '0.35s' }}
        >
          From same-day restorations to teledentistry, we make exceptional dental care
          accessible, comfortable, and built around your schedule.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Icon name="CalendarDaysIcon" size={18} />
            Book Appointment
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base font-bold border border-border hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            Explore Services
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 reveal-up"
          style={{ animationDelay: '0.65s' }}
        >
          {[
            { value: '12,000+', label: 'Patients Treated' },
            { value: '15 yrs', label: 'Clinical Experience' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] text-primary font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-primary/20 relative overflow-hidden rounded-full">
          <div className="absolute left-0 w-full h-1/2 bg-accent rounded-full scroll-bar-anim" />
        </div>
      </div>
    </section>
  );
}