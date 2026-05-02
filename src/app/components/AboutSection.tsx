'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';

const equipment = [
{
  icon: 'CpuChipIcon',
  title: 'CEREC Same-Day CAD/CAM',
  desc: 'Mill ceramic crowns and inlays on-site in under 90 minutes.'
},
{
  icon: 'CameraIcon',
  title: '3D Cone Beam CT Scanner',
  desc: 'Full-mouth imaging with 80% less radiation than traditional CT.'
},
{
  icon: 'WifiIcon',
  title: 'Digital Impressions',
  desc: 'No more gooey molds — our iTero scanner captures your bite in seconds.'
},
{
  icon: 'ShieldCheckIcon',
  title: 'Hospital-Grade Sterilisation',
  desc: 'Class B autoclave sterilisation with documented traceability for every instrument.'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 bg-white overflow-hidden">
      
      <ToothDecoration
        size={130}
        color="#4ABFB5"
        className="absolute -right-8 top-1/3 tooth-float opacity-[0.04]"
        style={{ '--rot': '35deg' } as React.CSSProperties} />
      
      <ToothDecoration
        size={85}
        color="#1A3C5E"
        className="absolute left-4 bottom-16 tooth-float-slow opacity-[0.04]"
        style={{ '--rot': '-10deg' } as React.CSSProperties} />
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div
            className="about-reveal relative"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)' }}>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10 border border-border group">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ebf5c838-1772071123066.png"
                alt="Modern dental clinic interior with advanced equipment at SmileDental Singapore"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl border border-border px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Icon name="CheckBadgeIcon" size={24} className="text-accent" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">MOH</div>
                <div className="text-xs font-semibold text-muted-foreground">Licensed Clinic</div>
              </div>
            </div>

            {/* Second floating card */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-primary text-white rounded-2xl shadow-xl px-5 py-3">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs font-semibold text-white/70">Years Serving SG</div>
            </div>
          </div>

          {/* Right: Text + Equipment */}
          <div>
            <div
              className="about-reveal"
              style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)', transitionDelay: '0.1s' }}>
              
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                Our Equipment
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tighter text-primary leading-[1.1] mb-5">
                Technology that puts
                <span className="font-serif italic text-accent"> you first.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 font-medium">
                We invest in clinical technology so that your visits are shorter, more comfortable,
                and more precise. Our clinic is equipped with tools typically found only in
                specialist centres — available to every patient, every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipment.map((item, i) =>
              <div
                key={item.title}
                className="about-reveal group p-5 rounded-2xl border border-border bg-background hover:bg-secondary hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s',
                  transitionDelay: `${(i + 2) * 0.08}s`
                }}>
                
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                    <Icon
                    name={item.icon as Parameters<typeof Icon>[0]['name']}
                    size={20}
                    className="text-primary group-hover:text-accent transition-colors" />
                  
                  </div>
                  <h4 className="font-bold text-sm text-primary mb-1.5">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}