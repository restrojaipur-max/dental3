'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';

const testimonials = [
{
  name: 'Priya Subramaniam',
  role: 'Marketing Manager, Tanjong Pagar',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3e38395-1774667865711.png",
  rating: 5,
  text: 'Had a cracked molar on a Wednesday morning. By 3pm the same day I had a new ceramic crown. The CEREC machine is genuinely impressive — no second appointment needed.'
},
{
  name: 'Wei Jian Chua',
  role: 'Software Engineer, Bishan',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f361236e-1777284345407.png",
  rating: 5,
  text: 'Dr. Rajesh walked me through my Invisalign treatment using a 3D simulation before I committed. 14 months later, my teeth are perfectly straight. Worth every cent.'
},
{
  name: 'Nurul Aisyah Binte Halim',
  role: 'Teacher, Tampines',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffccdcd7-1766771317401.png",
  rating: 5,
  text: 'Used the teledentistry service when I had a bad toothache over the long weekend. Dr. Sarah called me within the hour, prescribed medication, and I was seen properly the next day.'
},
{
  name: 'David Tan Keng Liang',
  role: 'Retired, Queenstown',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_148ef21c9-1773057576488.png",
  rating: 5,
  text: 'At 68 I was nervous about getting an implant. Dr. Mei Lin was patient, thorough, and the procedure was genuinely painless. My family dentist for the next generation.'
}];


const stats = [
{ value: '12,000+', label: 'Patients treated' },
{ value: '98%', label: 'Would recommend us' },
{ value: '4.9★', label: 'Google rating' },
{ value: '<2 hrs', label: 'Emergency response' }];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.testi-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 90);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF7F6 0%, #F5F3EF 60%, #FAFAF8 100%)' }}>
      
      <ToothDecoration
        size={110}
        color="#1A3C5E"
        className="absolute top-12 right-4 tooth-float opacity-[0.05]"
        style={{ '--rot': '18deg' } as React.CSSProperties} />
      
      <ToothDecoration
        size={75}
        color="#4ABFB5"
        className="absolute bottom-12 left-8 tooth-float-slow opacity-[0.06]"
        style={{ '--rot': '-25deg' } as React.CSSProperties} />
      

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
            Patient Stories
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter text-primary leading-[1.05]">
            Heard from
            <span className="font-serif italic text-accent"> our patients.</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) =>
          <div
            key={stat.label}
            className="testi-reveal text-center bg-white rounded-2xl border border-border p-6 shadow-sm"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: `${i * 0.07}s`
            }}>
            
              <div className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          )}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) =>
          <div
            key={t.name}
            className="testi-reveal bg-white rounded-3xl border border-border p-7 shadow-sm hover:shadow-lg hover:shadow-primary/6 hover:-translate-y-0.5 transition-all duration-400"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, translate 0.3s',
              transitionDelay: `${(i + 4) * 0.07}s`
            }}>
            
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) =>
              <Icon key={si} name="StarIcon" size={14} variant="solid" className="text-amber-400" />
              )}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 font-medium">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={`${t.name}, SmileDental patient review`}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <div className="font-bold text-sm text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary">
                    <Icon name="CheckBadgeIcon" size={12} className="text-accent" />
                    <span className="text-[10px] font-bold text-primary">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}