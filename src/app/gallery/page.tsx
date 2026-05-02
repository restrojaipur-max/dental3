'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToothDecoration from '@/app/components/ToothDecoration';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Transformation {
  id: number;
  patientLabel: string;
  treatment: string;
  category: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  description: string;
  highlight: string;
}

const transformations: Transformation[] = [
{
  id: 1,
  patientLabel: 'Patient A',
  treatment: 'Dental Implants',
  category: 'Implants',
  duration: '3 months',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_156759942-1772376106553.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_156759942-1772376106553.png",
  beforeAlt: 'Patient A before dental implant procedure showing missing tooth gap',
  afterAlt: 'Patient A after dental implant procedure showing natural-looking replacement tooth',
  description: 'Full arch restoration with titanium implants, restoring complete bite function and natural aesthetics.',
  highlight: 'Full Arch Restored'
},
{
  id: 2,
  patientLabel: 'Patient B',
  treatment: 'Teeth Whitening',
  category: 'Whitening',
  duration: '1 session',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc8c482a-1767668446181.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc8c482a-1767668446181.png",
  beforeAlt: 'Patient B before teeth whitening showing yellowed and stained teeth',
  afterAlt: 'Patient B after professional teeth whitening showing bright white smile',
  description: 'Professional in-chair whitening achieving 8 shades brighter in a single 90-minute session.',
  highlight: '8 Shades Brighter'
},
{
  id: 3,
  patientLabel: 'Patient C',
  treatment: 'Porcelain Veneers',
  category: 'Veneers',
  duration: '2 weeks',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_139c2ef58-1774523046973.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_139c2ef58-1774523046973.png",
  beforeAlt: 'Patient C before porcelain veneers showing chipped and uneven front teeth',
  afterAlt: 'Patient C after porcelain veneers showing perfectly shaped and aligned smile',
  description: 'Eight ultra-thin porcelain veneers crafted to correct chips, gaps, and discolouration for a Hollywood smile.',
  highlight: '8 Veneers Placed'
},
{
  id: 4,
  patientLabel: 'Patient D',
  treatment: 'Invisalign',
  category: 'Orthodontics',
  duration: '14 months',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ad353ff4-1772376105001.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ad353ff4-1772376105001.png",
  beforeAlt: 'Patient D before Invisalign treatment showing crowded and misaligned teeth',
  afterAlt: 'Patient D after Invisalign treatment showing straight and perfectly aligned teeth',
  description: 'Clear aligner therapy correcting severe crowding and crossbite without any metal brackets.',
  highlight: 'Zero Metal Braces'
},
{
  id: 5,
  patientLabel: 'Patient E',
  treatment: 'Composite Bonding',
  category: 'Restorations',
  duration: '1 day',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10c8d3521-1766774074195.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10c8d3521-1766774074195.png",
  beforeAlt: 'Patient E before composite bonding showing cracked and worn front teeth',
  afterAlt: 'Patient E after composite bonding showing repaired and natural-looking teeth',
  description: 'Same-day composite bonding to repair cracked, worn, and chipped teeth with colour-matched resin.',
  highlight: 'Same Day Results'
},
{
  id: 6,
  patientLabel: 'Patient F',
  treatment: 'Gum Contouring',
  category: 'Gum Care',
  duration: '1 session',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_155755ce2-1772073845755.png",
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_155755ce2-1772073845755.png",
  beforeAlt: 'Patient F before gum contouring showing uneven gum line and gummy smile',
  afterAlt: 'Patient F after gum contouring showing balanced gum line and improved smile aesthetics',
  description: 'Laser gum contouring to reshape an uneven gum line and reduce excessive gum display for a balanced smile.',
  highlight: 'Laser Precision'
}];


const categories = ['All', 'Implants', 'Whitening', 'Veneers', 'Orthodontics', 'Restorations', 'Gum Care'];

const categoryColors: Record<string, string> = {
  Implants: 'bg-blue-100 text-blue-800',
  Whitening: 'bg-yellow-100 text-yellow-800',
  Veneers: 'bg-purple-100 text-purple-800',
  Orthodontics: 'bg-teal-100 text-teal-800',
  Restorations: 'bg-orange-100 text-orange-800',
  'Gum Care': 'bg-green-100 text-green-800'
};

// ─── Interactive Before/After Slider ────────────────────────────────────────
function BeforeAfterSlider({ item }: {item: Transformation;}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos(x / rect.width * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) getPos(e.clientX);
    },
    [isDragging, getPos]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging) getPos(e.touches[0].clientX);
    },
    [isDragging, getPos]
  );

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-col-resize select-none"
      onMouseDown={onMouseDown}
      onTouchStart={(e) => {setIsDragging(true);getPos(e.touches[0].clientX);}}>
      
      {/* After image (base layer) */}
      <div className="absolute inset-0">
        <AppImage
          src={item.afterImage}
          alt={item.afterAlt}
          fill
          className="object-cover" />
        
        {/* After label */}
        <div className="absolute bottom-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          AFTER
        </div>
      </div>

      {/* Before image (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        
        <AppImage
          src={item.beforeImage}
          alt={item.beforeAlt}
          fill
          className="object-cover" />
        
        {/* Before label */}
        <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          BEFORE
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }} />
      

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-accent z-10"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={onMouseDown}>
        
        <div className="flex items-center gap-0.5">
          <Icon name="ChevronLeftIcon" size={14} className="text-primary" />
          <Icon name="ChevronRightIcon" size={14} className="text-primary" />
        </div>
      </div>

      {/* Drag hint overlay (fades after first interaction) */}
      {sliderPos === 50 && !isDragging &&
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full animate-pulse">
            ← Drag to compare →
          </div>
        </div>
      }
    </div>);

}

// ─── Gallery Card ────────────────────────────────────────────────────────────
function GalleryCard({ item, index }: {item: Transformation;index: number;}) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s, box-shadow 0.3s ease`
      }}>
      
      {/* Slider */}
      <div className="p-4 pb-0">
        <BeforeAfterSlider item={item} />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-primary text-lg leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
              {item.treatment}
            </h3>
            <p className="text-muted-foreground text-sm mt-0.5">{item.patientLabel}</p>
          </div>
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 ${categoryColors[item.category] ?? 'bg-secondary text-primary'}`}>
            {item.category}
          </span>
        </div>

        <p className="text-foreground/70 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-accent">
            <Icon name="SparklesIcon" size={16} />
            <span className="text-sm font-bold text-accent">{item.highlight}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Icon name="ClockIcon" size={14} />
            <span>{item.duration}</span>
          </div>
        </div>
      </div>
    </div>);

}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleHero, setVisibleHero] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisibleHero(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filtered = activeCategory === 'All' ?
  transformations :
  transformations.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ToothDecoration />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 blob-1"
        style={{ background: 'radial-gradient(circle, #4ABFB5 0%, #1A3C5E 70%)' }} />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10 blob-2"
        style={{ background: 'radial-gradient(circle, #1A3C5E 0%, #4ABFB5 70%)' }} />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ opacity: visibleHero ? 1 : 0, transform: visibleHero ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)' }}>
            
            <Icon name="SparklesIcon" size={16} />
            Real Patient Results
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-fraunces)',
              opacity: visibleHero ? 1 : 0,
              transform: visibleHero ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s'
            }}>
            
            Smile{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Transformations</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8 Q100 2 198 8" stroke="#4ABFB5" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            <br />Gallery
          </h1>

          <p
            className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: visibleHero ? 1 : 0,
              transform: visibleHero ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s'
            }}>
            
            Drag the slider on each photo to reveal the remarkable difference our treatments make.
            Every smile tells a story of renewed confidence.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-6 mt-10"
            style={{
              opacity: visibleHero ? 1 : 0,
              transform: visibleHero ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s'
            }}>
            
            {[
            { value: '2,400+', label: 'Smiles Transformed' },
            { value: '6', label: 'Treatment Types' },
            { value: '98%', label: 'Patient Satisfaction' }].
            map((stat) =>
            <div key={stat.label} className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl px-6 py-4 shadow-sm">
                <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-fraunces)' }}>{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-0.5">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-xl border-b border-border py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat ?
              'bg-primary text-white shadow-md scale-105' :
              'bg-white text-foreground/70 border border-border hover:border-primary/30 hover:text-primary hover:bg-secondary/50'}`
              }>
              
                {cat}
                {cat !== 'All' &&
              <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'opacity-70' : 'opacity-50'}`}>
                    ({transformations.filter((t) => t.category === cat).length})
                  </span>
              }
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground text-sm">
              Showing <span className="font-semibold text-primary">{filtered.length}</span> transformation{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' && <span> in <span className="font-semibold text-accent">{activeCategory}</span></span>}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Icon name="CursorArrowRaysIcon" size={14} />
              <span>Drag sliders to compare</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) =>
            <GalleryCard key={item.id} item={item} index={i} />
            )}
          </div>

          {/* Empty state */}
          {filtered.length === 0 &&
          <div className="text-center py-24">
              <div className="text-6xl mb-4">🦷</div>
              <h3 className="text-xl font-bold text-primary mb-2">No results found</h3>
              <p className="text-muted-foreground">Try selecting a different treatment category.</p>
            </div>
          }
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #1A3C5E 0%, #0F2A42 50%, #1A3C5E 100%)' }}>
            
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blob-1"
            style={{ background: 'radial-gradient(circle, #4ABFB5, transparent)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blob-2"
            style={{ background: 'radial-gradient(circle, #4ABFB5, transparent)' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon name="SparklesIcon" size={15} />
                Your Transformation Awaits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Ready to write your own<br />smile story?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Book a consultation with our specialists and discover which treatment is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  onClick={(e) => {e.preventDefault();window.location.href = '/#contact';}}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-base hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30">
                  
                  <Icon name="CalendarDaysIcon" size={18} />
                  Book Consultation
                </a>
                <a
                  href="/dentists/dr-mei-lin-tan"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all duration-200">
                  
                  Meet Our Dentists
                  <Icon name="ArrowRightIcon" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}