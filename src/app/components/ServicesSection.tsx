'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: string;
  tag: string;
  colSpan: string;
  rowSpan?: string;
  accent?: boolean;
  image?: string;
  href?: string;
}

const services: Service[] = [
{
  title: 'Same Day Restorations',
  description:
  'Cracked, chipped, or lost a filling? We restore your tooth to full function in a single visit using CEREC technology — no temporaries, no second appointments.',
  icon: 'SparklesIcon',
  tag: 'Most Popular',
  colSpan: 'md:col-span-2',
  accent: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc601403-1772212900522.png",
  href: '/services/same-day-restorations'
},
{
  title: 'Teledentistry',
  description:
  'Consult our dentists from home via secure video. Get prescriptions, triage emergencies, and plan treatments without leaving your sofa.',
  icon: 'ComputerDesktopIcon',
  tag: 'Remote Care',
  colSpan: 'md:col-span-1',
  href: '/services/teledentistry'
},
{
  title: 'Teeth Whitening',
  description:
  'Professional-grade whitening that delivers results up to 8 shades brighter in 60 minutes, customised to your enamel sensitivity.',
  icon: 'SunIcon',
  tag: 'Cosmetic',
  colSpan: 'md:col-span-1',
  href: '/services/teeth-whitening'
},
{
  title: 'Invisalign',
  description:
  'Straighten teeth discreetly with clear aligners. We provide full digital scanning, 3D treatment previews, and fortnightly progress check-ins.',
  icon: 'AdjustmentsHorizontalIcon',
  tag: 'Orthodontics',
  colSpan: 'md:col-span-1',
  href: '/services/invisalign'
},
{
  title: 'Dental Implants',
  description:
  'Permanent tooth replacement that looks, feels, and functions like your natural teeth — titanium-grade, lifetime guaranteed.',
  icon: 'BuildingOffice2Icon',
  tag: 'Restorative',
  colSpan: 'md:col-span-1',
  href: '/services/dental-implants'
},
{
  title: 'Emergency & Night Dentistry',
  description:
  'Toothache at midnight? We offer evening and weekend emergency slots. Call our after-hours line and be seen within 2 hours.',
  icon: 'BoltIcon',
  tag: 'After Hours',
  colSpan: 'md:col-span-3',
  accent: true
}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden bg-white">
      
      {/* Tooth decorations */}
      <ToothDecoration
        size={120}
        color="#4ABFB5"
        className="absolute -top-8 right-0 tooth-float opacity-[0.04]"
        style={{ '--rot': '30deg' } as React.CSSProperties} />
      
      <ToothDecoration
        size={80}
        color="#1A3C5E"
        className="absolute bottom-20 left-4 tooth-float-slow opacity-[0.03]"
        style={{ '--rot': '-20deg' } as React.CSSProperties} />
      

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
            What We Offer
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter text-primary leading-[1.05] mb-4">
            Dental care that fits
            <span className="font-serif italic text-accent"> your life.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            From routine check-ups to advanced restorations — all under one roof, with
            evening and weekend availability.
          </p>
        </div>

        {/* Bento Grid */}
        {/* BENTO AUDIT:
             Row 1 (3 cols): [col-1+2: SameDayRestorations cs-2] [col-3: Teledentistry cs-1]
             Row 2 (3 cols): [col-1: TeethWhitening cs-1] [col-2: Invisalign cs-1] [col-3: DentalImplants cs-1]
             Row 3 (3 cols): [col-1+2+3: EmergencyNight cs-3]
             Placed 6/6 ✓
            */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const CardWrapper = service.href ? Link : 'div';
            const wrapperProps = service.href ? { href: service.href } : {};
            return (
              <CardWrapper
                key={service.title}
                {...wrapperProps as any}
                className={`service-card opacity-100 relative overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8 group cursor-pointer ${service.colSpan} ${
                service.accent ?
                'bg-primary text-primary-foreground' :
                'bg-white text-foreground'}`
                }
                style={{ animationDelay: `${index * 0.08}s` }}>
            
              {/* Background image for first card */}
              {service.image &&
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={`${service.title} dental procedure`}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
                  <div className="absolute inset-0 bg-primary/80" />
                </div>
                }

              {/* Shimmer overlay */}
              <div className="absolute inset-0 card-shimmer overflow-hidden rounded-3xl pointer-events-none" />

              {/* Tooth decoration inside card */}
              <div className={`absolute -bottom-4 -right-4 opacity-10 ${service.accent ? 'opacity-10' : 'opacity-5'}`}>
                <ToothDecoration
                    size={service.colSpan.includes('2') ? 80 : 60}
                    color={service.accent ? '#fff' : '#1A3C5E'} />
              
              </div>

              <div className="relative z-10 p-7 flex flex-col h-full min-h-[200px]">
                {/* Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      service.accent ?
                      'bg-white/15 text-white/90' : 'bg-secondary text-primary'}`
                      }>
                  
                    <span className={`w-1.5 h-1.5 rounded-full ${service.accent ? 'bg-accent' : 'bg-accent'}`} />
                    {service.tag}
                  </div>
                  <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      service.accent ? 'bg-white/15' : 'bg-secondary'}`
                      }>
                  
                    <Icon
                        name={service.icon as Parameters<typeof Icon>[0]['name']}
                        size={20}
                        className={service.accent ? 'text-white' : 'text-primary'} />
                  
                  </div>
                </div>

                <h3
                    className={`text-xl font-bold mb-3 tracking-tight ${
                    service.accent ? 'text-white' : 'text-primary'}`
                    }>
                
                  {service.title}
                </h3>
                <p
                    className={`text-sm leading-relaxed flex-grow ${
                    service.accent ? 'text-white/75' : 'text-muted-foreground'}`
                    }>
                
                  {service.description}
                </p>

                <div className="mt-5">
                  <span
                      className={`flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3 ${
                      service.accent ? 'text-accent' : 'text-primary'}`
                      }>
                  
                    Learn more
                    <Icon name="ArrowRightIcon" size={14} />
                  </span>
                </div>
              </div>
            </CardWrapper>);

          })}
        </div>
      </div>
    </section>);

}