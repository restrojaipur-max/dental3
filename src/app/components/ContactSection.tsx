'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from './ToothDecoration';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 bg-white overflow-hidden"
    >
      <ToothDecoration
        size={100}
        color="#4ABFB5"
        className="absolute top-10 left-2 tooth-float opacity-[0.04]"
        style={{ '--rot': '-12deg' } as React.CSSProperties}
      />
      <ToothDecoration
        size={80}
        color="#1A3C5E"
        className="absolute bottom-10 right-4 tooth-float-slow opacity-[0.04]"
        style={{ '--rot': '28deg' } as React.CSSProperties}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter text-primary leading-[1.05] mb-4">
            Ready for your
            <span className="font-serif italic text-accent"> best smile?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium max-w-xl mx-auto">
            Book an appointment, ask a question, or request an emergency slot — we respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Info + Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact info cards */}
            <div
              className="contact-reveal bg-primary text-white rounded-3xl p-7 relative overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)' }}
            >
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <ToothDecoration size={70} color="#fff" />
              </div>
              <h3 className="font-bold text-lg mb-6 relative z-10">Clinic Details</h3>
              <div className="space-y-5 relative z-10">
                {[
                  {
                    icon: 'MapPinIcon',
                    label: 'Address',
                    value: '12 Orchard Link, #02-08\nSingapore 238823',
                  },
                  {
                    icon: 'PhoneIcon',
                    label: 'Phone',
                    value: '+65 6123 4567',
                  },
                  {
                    icon: 'EnvelopeIcon',
                    label: 'Email',
                    value: 'hello@smiledental.sg',
                  },
                  {
                    icon: 'ClockIcon',
                    label: 'Hours',
                    value: 'Mon–Fri: 9am–9pm\nSat: 9am–6pm\nEmergency: 24/7',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        name={item.icon as Parameters<typeof Icon>[0]['name']}
                        size={16}
                        className="text-accent"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-white/90 whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div
              className="contact-reveal rounded-3xl overflow-hidden border border-border shadow-md"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: '0.1s',
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7993613699217!2d103.83086031475403!3d1.302884999056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a2e7d0d0c5%3A0x1234567890abcdef!2sOrchard%20Link%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SmileDental Singapore location map"
                />
              </div>
              <div className="bg-secondary px-5 py-3 flex items-center gap-2">
                <Icon name="MapPinIcon" size={14} className="text-accent" />
                <span className="text-xs font-semibold text-primary">12 Orchard Link, Singapore 238823</span>
                <a
                  href="https://maps.google.com/?q=Orchard+Link+Singapore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs font-bold text-accent hover:underline flex items-center gap-1"
                >
                  Directions
                  <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Embedded Google Form */}
          <div
            className="contact-reveal lg:col-span-3 bg-background rounded-3xl border border-border overflow-hidden shadow-md"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: '0.2s',
            }}
          >
            <div className="bg-primary px-7 py-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Icon name="PencilSquareIcon" size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Book an Appointment</h3>
                <p className="text-white/60 text-xs font-medium">We respond within 2 hours</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Live</span>
              </div>
            </div>

            {/* Embedded Google Form */}
            <div className="gform-container w-full bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdjj09xzjHIX-awVFeFQ79xHXCRTwEMLpXUaAH-_lcV8oVpFA/viewform?embedded=true"
                width="100%"
                style={{ minHeight: '700px', border: 'none', display: 'block' }}
                title="SmileDental Appointment Booking Form"
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}