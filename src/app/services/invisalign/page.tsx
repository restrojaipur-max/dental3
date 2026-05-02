'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const timeline = [
  { week: 'Week 1', title: 'Digital Scan & 3D Preview', desc: 'We take a full digital scan of your teeth and generate a 3D simulation showing your smile transformation — before treatment even begins.' },
  { week: 'Weeks 2–3', title: 'Custom Aligners Arrive', desc: 'Your precision-crafted aligner series is manufactured and delivered. Each set is trimmed to your gum line for maximum comfort.' },
  { week: 'Ongoing', title: 'Fortnightly Check-ins', desc: 'Every two weeks, you progress to the next aligner set. We monitor your progress via in-clinic visits or teledentistry check-ins.' },
  { week: 'Final', title: 'Retainer & Reveal', desc: 'Once treatment is complete, we fit your custom retainer to maintain your new smile. Then we take your "after" photos — the best part.' },
];

const benefits = [
  { icon: 'EyeSlashIcon', title: 'Nearly Invisible', desc: 'Clear aligners are virtually undetectable. Most people won\'t notice you\'re in treatment — even up close.' },
  { icon: 'ArrowPathIcon', title: 'Removable', desc: 'Remove your aligners to eat, drink, brush, and floss. No food restrictions, no special cleaning tools.' },
  { icon: 'ComputerDesktopIcon', title: '3D Treatment Preview', desc: 'See your projected final smile before committing to treatment. Our digital simulation shows every stage of your transformation.' },
  { icon: 'ChartBarIcon', title: 'Predictable Results', desc: 'Invisalign\'s SmartTrack material applies precise, controlled forces — moving teeth predictably and comfortably.' },
  { icon: 'UserGroupIcon', title: 'Certified Providers', desc: 'Our dentists are certified Invisalign providers with hundreds of completed cases across all complexity levels.' },
  { icon: 'ShieldCheckIcon', title: 'Lifetime Guarantee', desc: 'We stand behind every Invisalign case we complete. If refinements are needed, we include them at no additional cost.' },
];

const faqs = [
  { q: 'How long does Invisalign treatment take?', a: 'Treatment duration varies by case complexity. Mild corrections can take as little as 6 months; comprehensive cases typically take 12–18 months. We\'ll give you a precise timeline after your digital scan.' },
  { q: 'How many hours per day do I need to wear aligners?', a: 'For optimal results, aligners should be worn 20–22 hours per day. You remove them only to eat, drink (anything other than water), and perform oral hygiene.' },
  { q: 'Is Invisalign painful?', a: 'Most patients experience mild pressure for 1–2 days when switching to a new aligner set — a sign the aligners are working. This is significantly less discomfort than traditional braces.' },
  { q: 'Can Invisalign fix severe misalignment?', a: 'Invisalign can treat a wide range of cases including crowding, spacing, overbite, underbite, and crossbite. During your consultation, we\'ll assess whether Invisalign or an alternative is best for your specific situation.' },
];

export default function InvisalignPage() {
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[140px] blob-1" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] blob-3" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Orthodontics</span>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter text-primary leading-[1.0] mb-6">
                  Straighter Teeth,
                  <span className="block font-serif italic text-accent">Invisibly.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Straighten your teeth discreetly with Invisalign clear aligners. No metal brackets, no dietary restrictions, no self-consciousness. Just a confident smile — achieved on your terms, at your pace.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Get Your 3D Preview
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Free Consultation
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
                  {[
                    { icon: 'EyeSlashIcon', label: 'Nearly Invisible' },
                    { icon: 'ComputerDesktopIcon', label: '3D Smile Preview' },
                    { icon: 'ArrowPathIcon', label: 'Removable Aligners' },
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
                <div className="relative bg-gradient-to-br from-secondary to-white rounded-3xl p-8 border border-border shadow-xl shadow-primary/5">
                  {/* Aligner stages visual */}
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Your Transformation Journey</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Before', progress: 15, desc: 'Crowded / misaligned' },
                      { label: 'Month 3', progress: 40, desc: 'Visible improvement' },
                      { label: 'Month 9', progress: 75, desc: 'Significant alignment' },
                      { label: 'Final', progress: 100, desc: 'Perfect smile achieved' },
                    ].map((stage) => (
                      <div key={stage.label} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-bold text-primary">{stage.label}</span>
                          <span className="text-xs text-muted-foreground">{stage.desc}</span>
                        </div>
                        <div className="h-3 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent transition-all duration-1000"
                            style={{ width: `${stage.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-primary/5 rounded-2xl p-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon name="StarIcon" size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">Certified Invisalign Provider</p>
                        <p className="text-xs text-muted-foreground">500+ completed cases</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-xs font-bold uppercase tracking-wider">From</p>
                  <p className="text-lg font-bold">6 Months</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Timeline */}
        <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Your Journey</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter">
                From scan to
                <span className="font-serif italic text-accent"> stunning smile.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((step, i) => (
                <div
                  key={step.week}
                  className="animate-on-scroll opacity-0 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">{step.week}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Why Invisalign</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter text-primary">
                The clear choice for
                <span className="font-serif italic text-accent"> modern orthodontics.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="animate-on-scroll opacity-0 group bg-secondary hover:bg-white border border-transparent hover:border-border rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
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
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary">Invisalign, explained</h2>
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
              See your new smile
              <span className="font-serif italic text-accent"> before you start.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Book a free Invisalign consultation and receive your personalised 3D smile simulation — no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Free Consultation
                <Icon name="ArrowRightIcon" size={16} />
              </a>
              <Link
                href="/services/dental-implants"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200"
              >
                Explore Dental Implants
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
