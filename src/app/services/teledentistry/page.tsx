'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const features = [
  { icon: 'VideoCameraIcon', title: 'HD Video Consultations', desc: 'Crystal-clear video calls with our licensed dentists — from your home, office, or anywhere with a connection.' },
  { icon: 'DocumentTextIcon', title: 'Digital Prescriptions', desc: 'Receive prescriptions, referrals, and treatment plans electronically — sent directly to your pharmacy or specialist.' },
  { icon: 'ShieldCheckIcon', title: 'Secure & Private', desc: 'All consultations are conducted on HIPAA-compliant, end-to-end encrypted platforms. Your health data stays yours.' },
  { icon: 'ClockIcon', title: 'Same-Day Slots', desc: 'Urgent dental concern? We offer same-day teledentistry slots for triage, advice, and emergency prescriptions.' },
  { icon: 'CameraIcon', title: 'Photo Diagnosis', desc: 'Share photos of your concern before the call. Our dentists review them in advance for a more focused, efficient consultation.' },
  { icon: 'ArrowPathIcon', title: 'Seamless Follow-Up', desc: 'If in-person care is needed, we coordinate your transition to the clinic with zero friction — your records transfer instantly.' },
];

const faqs = [
  { q: 'What can teledentistry actually diagnose?', a: 'Our dentists can assess tooth pain, gum concerns, mouth sores, post-procedure healing, orthodontic progress, and general dental questions. For issues requiring physical examination or X-rays, we\'ll arrange a clinic visit.' },
  { q: 'How do I prepare for my video consultation?', a: 'Find a well-lit space, have a torch or phone flashlight ready, and take a few clear photos of the area of concern beforehand. Upload them when booking — it helps our dentist prepare.' },
  { q: 'Can I get a prescription through teledentistry?', a: 'Yes. Our dentists can prescribe antibiotics, pain relief, and other dental medications following a teledentistry consultation, subject to clinical assessment.' },
  { q: 'Is teledentistry covered by insurance?', a: 'Many insurance plans now cover teledentistry. We recommend checking with your provider. We provide detailed receipts and clinical notes for all consultations.' },
];

export default function TeledentistryPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('reveal-up'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background overflow-hidden">

        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-accent/6 blur-[140px] blob-1" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] blob-3" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Remote Care</span>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter text-primary leading-[1.0] mb-6">
                  Dental Care
                  <span className="block font-serif italic text-accent">From Anywhere.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  See a qualified dentist without leaving your home. Our teledentistry service connects you with our clinical team via secure video — for consultations, prescriptions, triage, and peace of mind, whenever you need it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Book a Video Consult
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Speak to Us
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
                  {[
                    { icon: 'LockClosedIcon', label: 'HIPAA Compliant' },
                    { icon: 'ClockIcon', label: 'Same-Day Slots' },
                    { icon: 'DevicePhoneMobileIcon', label: 'Any Device' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/70">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div
                className="relative transition-all duration-1000 delay-200"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-8 border border-primary/20 shadow-2xl shadow-primary/20">
                  {/* Mock video call UI */}
                  <div className="bg-white/10 rounded-2xl p-4 mb-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                        <Icon name="UserIcon" size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Dr. Mei Lin Tan</p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                          <p className="text-white/60 text-xs">In session · 12:34</p>
                        </div>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <Icon name="MicrophoneIcon" size={14} className="text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <Icon name="VideoCameraIcon" size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                          <Icon name="VideoCameraIcon" size={28} className="text-accent" />
                        </div>
                        <p className="text-white/60 text-sm">Secure Video Consultation</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['Prescription Ready', 'Notes Sent', 'Follow-up Booked'].map((label) => (
                      <div key={label} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                        <Icon name="CheckCircleIcon" size={18} className="text-accent mx-auto mb-1" />
                        <p className="text-white/70 text-xs font-medium">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-xs font-bold uppercase tracking-wider">Available</p>
                  <p className="text-lg font-bold">7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">What's Included</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter text-primary">
                Everything you need,
                <span className="font-serif italic text-accent"> remotely.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="animate-on-scroll opacity-0 group bg-secondary hover:bg-white border border-transparent hover:border-border rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon name={f.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Common Questions</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary">Your questions, answered</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter text-white mb-4">
              Your dentist is
              <span className="font-serif italic text-accent"> one click away.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Don't wait for a clinic slot. Book a teledentistry consultation today and get expert dental advice from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book Video Consult
                <Icon name="ArrowRightIcon" size={16} />
              </a>
              <Link
                href="/services/teeth-whitening"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200"
              >
                Explore Teeth Whitening
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="animate-on-scroll opacity-0 border border-border rounded-2xl overflow-hidden bg-white hover:border-accent/30 transition-colors duration-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-bold text-primary pr-4">{q}</span>
        <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 bg-accent/10' : ''}`}>
          <Icon name="ChevronDownIcon" size={16} className={open ? 'text-accent' : 'text-muted-foreground'} />
        </div>
      </button>
      {open && <div className="px-6 pb-6"><p className="text-muted-foreground leading-relaxed">{a}</p></div>}
    </div>
  );
}
