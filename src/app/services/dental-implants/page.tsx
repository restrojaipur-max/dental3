'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const implantParts = [
  { label: 'Titanium Post', desc: 'The implant root — surgically placed into the jawbone. Titanium is biocompatible and fuses with bone over time through osseointegration.' },
  { label: 'Abutment', desc: 'The connector piece that links the implant post to the crown. Custom-shaped to support your specific restoration.' },
  { label: 'Ceramic Crown', desc: 'The visible tooth — crafted from high-strength ceramic, colour-matched to your natural teeth for a seamless, beautiful result.' },
];

const phases = [
  { phase: 'Phase 1', title: 'Consultation & Planning', desc: 'Comprehensive 3D CBCT scan, bone density assessment, and personalised treatment plan. We map every millimetre before we begin.' },
  { phase: 'Phase 2', title: 'Implant Placement', desc: 'The titanium post is placed under local anaesthetic in a precise, minimally invasive procedure. Most patients return to work the next day.' },
  { phase: 'Phase 3', title: 'Osseointegration', desc: 'Over 3–6 months, your jawbone fuses with the titanium post — creating a foundation as strong as a natural tooth root.' },
  { phase: 'Phase 4', title: 'Crown Fitting', desc: 'Your custom ceramic crown is attached and adjusted for perfect bite alignment. The result: a tooth that looks, feels, and functions like the real thing.' },
];

const faqs = [
  { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime. The titanium post is designed to be permanent. The ceramic crown typically lasts 15–25 years before requiring replacement, depending on wear and oral hygiene.' },
  { q: 'Is the implant procedure painful?', a: 'The procedure is performed under local anaesthetic, so you won\'t feel pain during placement. Post-operative discomfort is typically mild and managed with over-the-counter pain relief. Most patients are pleasantly surprised by how comfortable the recovery is.' },
  { q: 'Am I a candidate for dental implants?', a: 'Most adults with good general health are candidates. Key factors include sufficient jawbone density and healthy gums. If bone loss has occurred, bone grafting may be recommended first. We\'ll assess your suitability thoroughly during your consultation.' },
  { q: 'How do implants compare to dentures or bridges?', a: 'Implants are the gold standard for tooth replacement. Unlike dentures, they don\'t slip or require adhesives. Unlike bridges, they don\'t require grinding down adjacent healthy teeth. They also preserve jawbone, which dentures and bridges cannot.' },
];

export default function DentalImplantsPage() {
  const [visible, setVisible] = useState(false);
  const [activePart, setActivePart] = useState(0);

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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px] blob-1" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] blob-2" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Restorative</span>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter text-primary leading-[1.0] mb-6">
                  A Tooth That
                  <span className="block font-serif italic text-accent">Lasts a Lifetime.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Dental implants are the gold standard in permanent tooth replacement — titanium-grade, bone-preserving, and indistinguishable from your natural teeth. Restore your smile, your bite, and your confidence with a solution built to last.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Book Implant Consultation
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Ask a Specialist
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
                  {[
                    { icon: 'ShieldCheckIcon', label: 'Lifetime Guarantee' },
                    { icon: 'BuildingOffice2Icon', label: 'Titanium-Grade' },
                    { icon: 'StarIcon', label: '98% Success Rate' },
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

              {/* Implant anatomy visual */}
              <div
                className="relative transition-all duration-1000 delay-200"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="bg-white rounded-3xl border border-border p-8 shadow-xl shadow-primary/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Implant Anatomy</p>
                  {/* Visual implant diagram */}
                  <div className="flex justify-center mb-8">
                    <div className="relative flex flex-col items-center gap-0">
                      {/* Crown */}
                      <div
                        onClick={() => setActivePart(2)}
                        className={`w-20 h-14 rounded-t-full cursor-pointer transition-all duration-300 flex items-center justify-center border-2 ${activePart === 2 ? 'bg-accent/20 border-accent scale-110' : 'bg-secondary border-border hover:border-accent/40'}`}
                      >
                        <span className="text-xs font-bold text-primary">Crown</span>
                      </div>
                      {/* Abutment */}
                      <div
                        onClick={() => setActivePart(1)}
                        className={`w-8 h-8 cursor-pointer transition-all duration-300 flex items-center justify-center border-2 ${activePart === 1 ? 'bg-accent/20 border-accent scale-110' : 'bg-muted border-border hover:border-accent/40'}`}
                      >
                        <span className="text-[8px] font-bold text-primary text-center leading-tight">Abut.</span>
                      </div>
                      {/* Post */}
                      <div
                        onClick={() => setActivePart(0)}
                        className={`w-6 h-20 rounded-b-lg cursor-pointer transition-all duration-300 flex items-end justify-center pb-2 border-2 ${activePart === 0 ? 'bg-accent/20 border-accent scale-110' : 'bg-primary/10 border-border hover:border-accent/40'}`}
                      >
                        <span className="text-[8px] font-bold text-primary">Post</span>
                      </div>
                    </div>
                  </div>
                  {/* Info panel */}
                  <div className="bg-secondary rounded-2xl p-5 min-h-[100px] transition-all duration-300">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{implantParts[activePart].label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{implantParts[activePart].desc}</p>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3">Click each part to learn more</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-xs font-bold uppercase tracking-wider">Success Rate</p>
                  <p className="text-lg font-bold">98%+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Phases */}
        <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">The Process</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter">
                Precision from
                <span className="font-serif italic text-accent"> scan to smile.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {phases.map((phase, i) => (
                <div
                  key={phase.phase}
                  className="animate-on-scroll opacity-0 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">{phase.phase}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Why Implants</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter text-primary">
                The permanent
                <span className="font-serif italic text-accent"> difference.</span>
              </h2>
            </div>
            <div className="animate-on-scroll opacity-0 overflow-hidden rounded-3xl border border-border">
              <div className="grid grid-cols-4 bg-primary text-white">
                <div className="p-5 font-bold text-sm">Feature</div>
                <div className="p-5 font-bold text-sm text-center bg-accent/20">Implants</div>
                <div className="p-5 font-bold text-sm text-center opacity-70">Bridges</div>
                <div className="p-5 font-bold text-sm text-center opacity-70">Dentures</div>
              </div>
              {[
                { feature: 'Longevity', implant: 'Lifetime', bridge: '10–15 yrs', denture: '5–10 yrs' },
                { feature: 'Bone Preservation', implant: '✓ Yes', bridge: '✗ No', denture: '✗ No' },
                { feature: 'Adjacent Teeth', implant: 'Untouched', bridge: 'Ground down', denture: 'Unaffected' },
                { feature: 'Feel & Function', implant: 'Natural', bridge: 'Near-natural', denture: 'Reduced' },
                { feature: 'Maintenance', implant: 'Normal hygiene', bridge: 'Floss threader', denture: 'Daily removal' },
              ].map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-4 ${i % 2 === 0 ? 'bg-white' : 'bg-secondary/40'}`}>
                  <div className="p-5 text-sm font-semibold text-primary">{row.feature}</div>
                  <div className="p-5 text-sm text-center font-bold text-accent bg-accent/5">{row.implant}</div>
                  <div className="p-5 text-sm text-center text-muted-foreground">{row.bridge}</div>
                  <div className="p-5 text-sm text-center text-muted-foreground">{row.denture}</div>
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
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary">Implants, explained</h2>
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
              Invest in a tooth
              <span className="font-serif italic text-accent"> that lasts forever.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Book your dental implant consultation today. We'll assess your suitability, walk you through the process, and answer every question — with no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book Consultation
                <Icon name="ArrowRightIcon" size={16} />
              </a>
              <Link
                href="/services/same-day-restorations"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200"
              >
                Explore Same Day Restorations
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
