'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const steps = [
{ number: '01', title: 'Digital Scan', desc: 'We take a precise 3D scan of your tooth — no messy impressions, no waiting.' },
{ number: '02', title: 'CAD Design', desc: 'Our software designs your custom restoration in minutes, tailored to your bite and smile.' },
{ number: '03', title: 'In-House Milling', desc: 'Your crown, inlay, or veneer is milled from premium ceramic right here in our clinic.' },
{ number: '04', title: 'Perfect Fit', desc: 'We bond your restoration and polish it to a flawless finish — all in one appointment.' }];


const faqs = [
{ q: 'How long does the entire procedure take?', a: 'Most same-day restorations are completed in 1–2 hours, from scan to final bonding. You walk in with a damaged tooth and walk out with a permanent, beautiful restoration.' },
{ q: 'Is CEREC ceramic as strong as traditional crowns?', a: 'Absolutely. CEREC restorations use high-strength lithium disilicate ceramic that matches the durability of traditional lab-made crowns — often lasting 15+ years with proper care.' },
{ q: 'Will my restoration look natural?', a: 'Yes. We colour-match your ceramic to your surrounding teeth with precision, ensuring your restoration is virtually indistinguishable from your natural enamel.' },
{ q: 'Is the procedure painful?', a: 'The tooth is fully numbed before any work begins. Most patients are surprised by how comfortable the experience is — many describe it as no different from a routine filling.' }];


export default function SameDayRestorationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-up');
          }
        });
      },
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
        <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 px-4 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] blob-1" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] blob-2" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Most Popular</span>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter text-primary leading-[1.0] mb-6">
                  Same Day
                  <span className="block font-serif italic text-accent">Restorations</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Cracked, chipped, or lost a filling? Walk in with a damaged tooth and walk out the same day with a permanent, precision-crafted ceramic restoration — no temporaries, no second appointments, no waiting weeks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95">
                    
                    Book Your Appointment
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200">
                    
                    <Icon name="PhoneIcon" size={16} />
                    Call Us Now
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
                  {[
                  { icon: 'ClockIcon', label: '1–2 Hour Procedure' },
                  { icon: 'ShieldCheckIcon', label: '15-Year Durability' },
                  { icon: 'SparklesIcon', label: 'CEREC Technology' }].
                  map((b) =>
                  <div key={b.label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/70">{b.label}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hero visual */}
              <div
                className="relative transition-all duration-1000 delay-200"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}>
                
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/5 to-accent/10 border border-border">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_119aa6d83-1777693928767.png"
                    alt="Dentist performing same-day CEREC crown restoration on a patient"
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  {/* Floating stat card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Avg. Procedure Time</p>
                        <p className="text-2xl font-bold text-primary">90 min</p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Icon name="ClockIcon" size={24} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-xs font-bold uppercase tracking-wider">No Temporaries</p>
                  <p className="text-lg font-bold">Permanent Same Day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">The Process</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter leading-tight">
                From damaged to restored
                <span className="block font-serif italic text-accent">in a single visit.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) =>
              <div
                key={step.number}
                className="animate-on-scroll opacity-0 group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}>
                
                  <div className="text-5xl font-bold text-white/10 group-hover:text-accent/20 transition-colors duration-300 mb-4 font-serif">{step.number}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 &&
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center z-10">
                      <Icon name="ArrowRightIcon" size={12} className="text-accent" />
                    </div>
                }
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll opacity-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Why CEREC?</span>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary leading-tight mb-6">
                  The gold standard in
                  <span className="font-serif italic text-accent"> single-visit dentistry.</span>
                </h2>
                <div className="space-y-5">
                  {[
                  { title: 'No Temporary Crowns', desc: 'Traditional crowns require two visits and an uncomfortable temporary. CEREC eliminates the wait entirely.' },
                  { title: 'Precision-Matched Ceramic', desc: 'Your restoration is colour-matched to your natural teeth using advanced shade analysis — virtually invisible.' },
                  { title: 'Stronger Than Amalgam', desc: 'Lithium disilicate ceramic bonds directly to your tooth structure, reinforcing it rather than just covering it.' },
                  { title: 'Less Chair Time, Less Anxiety', desc: 'One appointment means less time in the chair, less anaesthetic, and far less disruption to your day.' }].
                  map((item) =>
                  <div key={item.title} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
                        <Icon name="CheckIcon" size={14} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="animate-on-scroll opacity-0 grid grid-cols-2 gap-4">
                {[
                { value: '98%', label: 'Patient Satisfaction', icon: 'StarIcon' },
                { value: '15+', label: 'Years Durability', icon: 'ShieldCheckIcon' },
                { value: '90min', label: 'Average Visit', icon: 'ClockIcon' },
                { value: '0', label: 'Temporaries Needed', icon: 'CheckCircleIcon' }].
                map((stat) =>
                <div key={stat.label} className="bg-secondary rounded-3xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Common Questions</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary">Everything you need to know</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) =>
              <FAQItem key={i} q={faq.q} a={faq.a} />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection service="Same Day Restorations" />
      </main>
      <Footer />
    </>);

}

function FAQItem({ q, a }: {q: string;a: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="animate-on-scroll opacity-0 border border-border rounded-2xl overflow-hidden bg-white hover:border-accent/30 transition-colors duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left">
        
        <span className="font-bold text-primary pr-4">{q}</span>
        <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 bg-accent/10' : ''}`}>
          <Icon name="ChevronDownIcon" size={16} className={open ? 'text-accent' : 'text-muted-foreground'} />
        </div>
      </button>
      {open &&
      <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      }
    </div>);

}

function CTASection({ service }: {service: string;}) {
  return (
    <section className="py-20 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter text-white mb-4">
          Ready for your
          <span className="font-serif italic text-accent"> same-day smile?</span>
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Book your {service} consultation today. Our team will assess your tooth and have you smiling again before the day is out.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95">
            
            Book Appointment
            <Icon name="ArrowRightIcon" size={16} />
          </a>
          <Link
            href="/services/teledentistry"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200">
            
            Explore Teledentistry
          </Link>
        </div>
      </div>
    </section>);

}