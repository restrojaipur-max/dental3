'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const shadeSteps = [
  { shade: 'B4', label: 'Starting Shade', color: '#E8D5A3' },
  { shade: 'A3', label: 'After 20 min', color: '#EFE0B8' },
  { shade: 'A2', label: 'After 40 min', color: '#F5EDD0' },
  { shade: 'A1', label: 'Final Result', color: '#FBF7EC' },
];

const options = [
  {
    title: 'In-Clinic Power Whitening',
    tag: 'Most Effective',
    accent: true,
    desc: 'Our flagship 60-minute treatment uses professional-grade hydrogen peroxide gel activated by our LED whitening lamp. Results of up to 8 shades brighter — guaranteed.',
    features: ['Up to 8 shades brighter', '60-minute session', 'Immediate results', 'Sensitivity-managed protocol'],
  },
  {
    title: 'Take-Home Whitening Kit',
    tag: 'Flexible',
    accent: false,
    desc: 'Custom-fitted whitening trays made from your dental impressions, paired with professional-grade gel. Whiten at your own pace over 10–14 days.',
    features: ['Custom-fitted trays', 'Professional gel included', 'Whiten at your pace', 'Touch-up friendly'],
  },
  {
    title: 'Combination Treatment',
    tag: 'Best Value',
    accent: false,
    desc: 'Start with an in-clinic session for dramatic immediate results, then maintain and enhance with your take-home kit. The most comprehensive whitening experience we offer.',
    features: ['In-clinic + take-home', 'Maximum brightness', 'Long-lasting results', 'Maintenance kit included'],
  },
];

const faqs = [
  { q: 'How long do whitening results last?', a: 'In-clinic results typically last 12–24 months with good oral hygiene and dietary habits. Avoiding staining foods (coffee, red wine, berries) and using your take-home maintenance kit extends results significantly.' },
  { q: 'Is teeth whitening safe for sensitive teeth?', a: 'Yes. We conduct a thorough sensitivity assessment before treatment and use a desensitising protocol throughout. Most patients with mild sensitivity tolerate the procedure comfortably. We also offer a lower-concentration option for highly sensitive teeth.' },
  { q: 'Will whitening work on crowns or veneers?', a: 'Whitening gel only affects natural tooth enamel — it won\'t change the colour of crowns, veneers, or fillings. We\'ll discuss this during your consultation and advise on the best approach for your specific smile.' },
  { q: 'How many shades whiter can I expect?', a: 'Most patients achieve 4–8 shades of improvement in a single in-clinic session. Results vary based on your starting shade, tooth structure, and lifestyle factors. We\'ll give you a realistic expectation during your consultation.' },
];

export default function TeethWhiteningPage() {
  const [visible, setVisible] = useState(false);
  const [activeShade, setActiveShade] = useState(3);

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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-yellow-100/40 blur-[140px] blob-1" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] blob-2" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-6">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">Cosmetic</span>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter text-primary leading-[1.0] mb-6">
                  Brilliantly
                  <span className="block font-serif italic text-accent">Whiter Teeth.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Professional-grade whitening that delivers results up to 8 shades brighter in just 60 minutes — customised to your enamel sensitivity and smile goals. No over-the-counter guesswork. Just clinical precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Book Whitening Session
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Ask a Question
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
                  {[
                    { icon: 'SunIcon', label: 'Up to 8 Shades Brighter' },
                    { icon: 'ClockIcon', label: '60-Minute Treatment' },
                    { icon: 'ShieldCheckIcon', label: 'Sensitivity-Safe Protocol' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-yellow-50 flex items-center justify-center">
                        <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-yellow-500" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/70">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shade visualiser */}
              <div
                className="relative transition-all duration-1000 delay-200"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div className="bg-white rounded-3xl border border-border p-8 shadow-xl shadow-primary/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Shade Progression Visualiser</p>
                  <div className="flex gap-3 mb-8">
                    {shadeSteps.map((s, i) => (
                      <button
                        key={s.shade}
                        onClick={() => setActiveShade(i)}
                        className={`flex-1 rounded-2xl p-4 border-2 transition-all duration-300 ${activeShade === i ? 'border-accent shadow-md shadow-accent/20 scale-105' : 'border-border hover:border-accent/40'}`}
                      >
                        <div
                          className="w-full aspect-square rounded-xl mb-2 transition-colors duration-500"
                          style={{ backgroundColor: s.color }}
                        />
                        <p className="text-xs font-bold text-primary">{s.shade}</p>
                        <p className="text-[10px] text-muted-foreground">{s.label}</p>
                      </button>
                    ))}
                  </div>
                  <div className="bg-secondary rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-primary">Current Selection</span>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{shadeSteps[activeShade].shade}</span>
                    </div>
                    <div
                      className="w-full h-16 rounded-xl transition-colors duration-500 border border-border"
                      style={{ backgroundColor: shadeSteps[activeShade].color }}
                    />
                    <p className="text-xs text-muted-foreground mt-3 font-medium">{shadeSteps[activeShade].label}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-xs font-bold uppercase tracking-wider">Results In</p>
                  <p className="text-lg font-bold">60 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Treatment Options</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter">
                Choose your
                <span className="font-serif italic text-accent"> whitening journey.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {options.map((opt, i) => (
                <div
                  key={opt.title}
                  className={`animate-on-scroll opacity-0 rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 group ${opt.accent ? 'bg-accent/20 border-accent/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 ${opt.accent ? 'bg-accent text-white' : 'bg-white/10 text-white/70'}`}>
                    {opt.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{opt.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{opt.desc}</p>
                  <ul className="space-y-2">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <Icon name="CheckIcon" size={14} className="text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary">Whitening, demystified</h2>
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
              Your brightest smile
              <span className="font-serif italic text-accent"> starts today.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Book your professional whitening consultation and walk out with a smile that turns heads.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book Whitening Session
                <Icon name="ArrowRightIcon" size={16} />
              </a>
              <Link
                href="/services/invisalign"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200"
              >
                Explore Invisalign
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
