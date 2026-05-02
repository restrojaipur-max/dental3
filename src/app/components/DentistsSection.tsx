'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';
import Link from 'next/link';

const dentists = [
{
  slug: 'dr-mei-lin-tan',
  name: 'Dr. Mei Lin Tan',
  title: 'Principal Dentist & Oral Surgeon',
  speciality: 'Implants & Complex Extractions',
  experience: '18 years',
  education: 'NUS Faculty of Dentistry, M.Orth RCS Edinburgh',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b53539c0-1766927211204.png",
  tags: ['Implants', 'Surgery']
},
{
  slug: 'dr-rajesh-nair',
  name: 'Dr. Rajesh Nair',
  title: 'Specialist in Orthodontics',
  speciality: 'Invisalign & Braces',
  experience: '12 years',
  education: 'University of Melbourne, MFDS RCS Ireland',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_179ebd6f2-1763294255544.png",
  tags: ['Invisalign', 'Orthodontics']
},
{
  slug: 'dr-sarah-lim',
  name: 'Dr. Sarah Lim',
  title: 'Cosmetic & Restorative Dentist',
  speciality: 'Whitening & Veneers',
  experience: '9 years',
  education: 'King\'s College London, GDC Registered',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd0fe175-1763294912822.png",
  tags: ['Cosmetic', 'Veneers']
},
{
  slug: 'dr-james-wong',
  name: 'Dr. James Wong',
  title: 'Paediatric & Family Dentist',
  speciality: 'Children & Family Care',
  experience: '11 years',
  education: 'NUS, Diploma in Child Dental Health',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16461b1c1-1777693279713.png",
  tags: ['Paediatric', 'Family']
}];


export default function DentistsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.dentist-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
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
      id="dentists"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 bg-background overflow-hidden">
      
      {/* Tooth decorations */}
      <ToothDecoration
        size={100}
        color="#1A3C5E"
        className="absolute top-10 left-0 tooth-float opacity-[0.04]"
        style={{ '--rot': '-15deg' } as React.CSSProperties} />
      
      <ToothDecoration
        size={70}
        color="#4ABFB5"
        className="absolute bottom-10 right-6 tooth-float-slow opacity-[0.05]"
        style={{ '--rot': '22deg' } as React.CSSProperties} />
      

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
              Our Team
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter text-primary leading-[1.05]">
              Dentists who
              <span className="font-serif italic text-accent"> listen.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base font-medium max-w-sm leading-relaxed border-l-2 border-accent/30 pl-4">
            Every dentist on our team is registered with the Singapore Dental Council and committed to continuous education.
          </p>
        </div>

        {/* Dentist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((dentist, index) =>
          <Link
            key={dentist.name}
            href={`/dentists/${dentist.slug}`}
            className="dentist-card group relative bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-500 block"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transitionDelay: `${index * 0.08}s`
            }}>
            
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-secondary">
                <AppImage
                src={dentist.image}
                alt={`${dentist.name}, ${dentist.title} at SmileDental Singapore`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Experience badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-primary">
                  {dentist.experience}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {dentist.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wide">
                  
                      {tag}
                    </span>
                )}
                </div>
                <h3 className="font-bold text-base text-primary mb-0.5">{dentist.name}</h3>
                <p className="text-xs font-semibold text-accent mb-2">{dentist.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{dentist.education}</p>

                <div className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-border text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200">
                  <Icon name="UserCircleIcon" size={14} />
                  View Profile
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}