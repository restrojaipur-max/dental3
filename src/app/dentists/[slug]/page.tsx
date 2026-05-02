'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ToothDecoration from '@/app/components/ToothDecoration';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface DentistData {
  slug: string;
  name: string;
  title: string;
  speciality: string;
  experience: string;
  education: string;
  image: string;
  tags: string[];
  bio: string;
  qualifications: string[];
  expertise: { area: string; description: string; icon: string }[];
  languages: string[];
  availability: string;
  funFact: string;
  achievements: string[];
  accentColor: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
}

const dentistsData: DentistData[] = [
  {
    slug: 'dr-mei-lin-tan',
    name: 'Dr. Mei Lin Tan',
    title: 'Principal Dentist & Oral Surgeon',
    speciality: 'Implants & Complex Extractions',
    experience: '18 years',
    education: 'NUS Faculty of Dentistry, M.Orth RCS Edinburgh',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10feb2f99-1768529513270.png',
    tags: ['Implants', 'Surgery', 'Oral Surgeon'],
    bio: 'Dr. Mei Lin Tan is our Principal Dentist and a highly respected oral surgeon with over 18 years of clinical experience. She completed her undergraduate dental degree at the National University of Singapore and went on to earn her Membership in Orthodontics from the Royal College of Surgeons Edinburgh. Known for her calm, reassuring manner and meticulous precision, Dr. Tan has helped thousands of patients regain confidence through transformative dental implant procedures and complex oral surgeries.',
    qualifications: [
      'BDS (Hons), NUS Faculty of Dentistry',
      'M.Orth RCS Edinburgh',
      'Diploma in Implantology, ITI Singapore',
      'Fellow, Academy of Medicine Singapore',
      'Registered with Singapore Dental Council',
    ],
    expertise: [
      {
        area: 'Dental Implants',
        description: 'Full-arch and single-tooth implant placement using guided surgery technology for precise, minimally invasive outcomes.',
        icon: 'SparklesIcon',
      },
      {
        area: 'Complex Extractions',
        description: 'Surgical removal of impacted wisdom teeth, retained roots, and complex multi-rooted teeth with minimal discomfort.',
        icon: 'ShieldCheckIcon',
      },
      {
        area: 'Bone Grafting',
        description: 'Advanced bone augmentation procedures to restore jaw volume and prepare sites for implant placement.',
        icon: 'BeakerIcon',
      },
      {
        area: 'Sinus Lifts',
        description: 'Maxillary sinus augmentation to create adequate bone height for upper jaw implants.',
        icon: 'AcademicCapIcon',
      },
    ],
    languages: ['English', 'Mandarin', 'Cantonese'],
    availability: 'Mon – Fri: 9am – 6pm',
    funFact: 'Dr. Tan volunteers at community dental outreach programmes every quarter, providing free dental screenings to seniors.',
    achievements: [
      'SDC Outstanding Dentist Award 2021',
      'Over 2,000 successful implant placements',
      'Published researcher in implant biomechanics',
      'Mentor for NUS dental students since 2015',
    ],
    accentColor: '#4ABFB5',
    stat1Label: 'Implants Placed',
    stat1Value: '2,000+',
    stat2Label: 'Years Experience',
    stat2Value: '18',
  },
  {
    slug: 'dr-rajesh-nair',
    name: 'Dr. Rajesh Nair',
    title: 'Specialist in Orthodontics',
    speciality: 'Invisalign & Braces',
    experience: '12 years',
    education: 'University of Melbourne, MFDS RCS Ireland',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c667b37f-1770508058361.png',
    tags: ['Invisalign', 'Orthodontics', 'Braces'],
    bio: 'Dr. Rajesh Nair is a passionate orthodontist who believes that a well-aligned smile is both a health investment and a confidence booster. After graduating from the University of Melbourne, he earned his Membership of the Faculty of Dental Surgery from the Royal College of Surgeons Ireland. With 12 years of dedicated orthodontic practice, Dr. Nair is an Invisalign Platinum Provider and has treated patients ranging from children to adults, tailoring each treatment plan to individual lifestyle needs.',
    qualifications: [
      'BDSc, University of Melbourne',
      'MFDS RCS Ireland',
      'Invisalign Platinum Provider Certification',
      'Diploma in Orthodontics, Singapore',
      'Registered with Singapore Dental Council',
    ],
    expertise: [
      {
        area: 'Invisalign Clear Aligners',
        description: 'Custom-designed clear aligner therapy for mild to complex cases, with digital treatment planning and 3D outcome previews.',
        icon: 'SparklesIcon',
      },
      {
        area: 'Metal & Ceramic Braces',
        description: 'Traditional and aesthetic bracket systems for precise tooth movement, suitable for all ages and case complexities.',
        icon: 'WrenchScrewdriverIcon',
      },
      {
        area: 'Retainers & Retention',
        description: 'Custom fixed and removable retainers to maintain your results long-term after active orthodontic treatment.',
        icon: 'ShieldCheckIcon',
      },
      {
        area: 'Early Interceptive Orthodontics',
        description: 'Proactive treatment for children aged 7–12 to guide jaw development and reduce the need for complex treatment later.',
        icon: 'HeartIcon',
      },
    ],
    languages: ['English', 'Tamil', 'Hindi', 'Malay'],
    availability: 'Mon, Wed, Fri: 10am – 7pm | Sat: 9am – 2pm',
    funFact: 'Dr. Nair completed a marathon in under 4 hours and applies the same discipline and patience to every orthodontic case.',
    achievements: [
      'Invisalign Platinum Provider since 2018',
      'Over 800 Invisalign cases completed',
      'Speaker at Asia Pacific Orthodontic Conference 2022',
      'Voted "Most Patient Dentist" by clinic patients 3 years running',
    ],
    accentColor: '#4ABFB5',
    stat1Label: 'Invisalign Cases',
    stat1Value: '800+',
    stat2Label: 'Years Experience',
    stat2Value: '12',
  },
  {
    slug: 'dr-sarah-lim',
    name: 'Dr. Sarah Lim',
    title: 'Cosmetic & Restorative Dentist',
    speciality: 'Whitening & Veneers',
    experience: '9 years',
    education: "King's College London, GDC Registered",
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f57e31b7-1772996769740.png',
    tags: ['Cosmetic', 'Veneers', 'Whitening'],
    bio: "Dr. Sarah Lim trained at King's College London, one of the world's leading dental schools, and is registered with the General Dental Council (UK). With 9 years of experience in cosmetic and restorative dentistry, she has a keen artistic eye and a deep understanding of facial aesthetics. Dr. Lim is passionate about creating natural-looking smiles that complement each patient's unique features, using the latest materials and digital smile design technology.",
    qualifications: [
      "BDS (Hons), King's College London",
      'GDC Registered (UK)',
      'Diploma in Aesthetic Dentistry, AADFA',
      'Certified in Digital Smile Design (DSD)',
      'Registered with Singapore Dental Council',
    ],
    expertise: [
      {
        area: 'Porcelain Veneers',
        description: 'Ultra-thin, custom-crafted porcelain veneers designed using digital smile planning for a natural, luminous result.',
        icon: 'SparklesIcon',
      },
      {
        area: 'Teeth Whitening',
        description: 'In-chair and take-home whitening systems calibrated to your enamel sensitivity for safe, lasting brightness.',
        icon: 'SunIcon',
      },
      {
        area: 'Composite Bonding',
        description: 'Chairside tooth-coloured resin sculpting to repair chips, close gaps, and reshape teeth in a single visit.',
        icon: 'PaintBrushIcon',
      },
      {
        area: 'Smile Makeovers',
        description: 'Comprehensive multi-treatment smile transformations combining veneers, whitening, bonding, and gum contouring.',
        icon: 'StarIcon',
      },
    ],
    languages: ['English', 'Mandarin', 'Hokkien'],
    availability: 'Tue – Sat: 9am – 6pm',
    funFact: 'Dr. Lim is an amateur watercolour artist — a hobby she says sharpens the same attention to colour and proportion she uses in smile design.',
    achievements: [
      'Digital Smile Design Certified Practitioner',
      'Featured in Singapore Tatler Beauty Guide 2023',
      'Over 500 veneer cases with 5-star patient reviews',
      'Lecturer in Aesthetic Dentistry, SDC CPD Programme',
    ],
    accentColor: '#4ABFB5',
    stat1Label: 'Veneer Cases',
    stat1Value: '500+',
    stat2Label: 'Years Experience',
    stat2Value: '9',
  },
  {
    slug: 'dr-james-wong',
    name: 'Dr. James Wong',
    title: 'Paediatric & Family Dentist',
    speciality: 'Children & Family Care',
    experience: '11 years',
    education: 'NUS, Diploma in Child Dental Health',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c667b37f-1770508058361.png',
    tags: ['Paediatric', 'Family', 'Children'],
    bio: 'Dr. James Wong is the warm, friendly face that children and families look forward to seeing. A graduate of NUS with a Diploma in Child Dental Health, Dr. Wong has spent 11 years building a practice rooted in trust, gentleness, and education. He believes that positive early dental experiences shape a lifetime of good oral health habits. His clinic room is designed to be welcoming for young patients, and he uses tell-show-do techniques and child-friendly language to make every visit comfortable.',
    qualifications: [
      'BDS, NUS Faculty of Dentistry',
      'Diploma in Child Dental Health, NUS',
      'Advanced Paediatric Behaviour Management Certificate',
      'Certified in Nitrous Oxide Sedation for Children',
      'Registered with Singapore Dental Council',
    ],
    expertise: [
      {
        area: 'Paediatric Dentistry',
        description: 'Comprehensive dental care for children from infancy through adolescence, including preventive, restorative, and emergency treatment.',
        icon: 'HeartIcon',
      },
      {
        area: 'Fissure Sealants & Fluoride',
        description: 'Preventive treatments to protect developing teeth from decay, applied gently and quickly in a single appointment.',
        icon: 'ShieldCheckIcon',
      },
      {
        area: 'Family Dentistry',
        description: 'Holistic dental care for the whole family under one roof — from toddlers to grandparents — with coordinated appointment scheduling.',
        icon: 'UserGroupIcon',
      },
      {
        area: 'Dental Anxiety Management',
        description: 'Specialised techniques including distraction therapy, tell-show-do, and nitrous oxide sedation for anxious young patients.',
        icon: 'FaceSmileIcon',
      },
    ],
    languages: ['English', 'Mandarin', 'Malay'],
    availability: 'Mon – Thu: 9am – 6pm | Sat: 9am – 1pm',
    funFact: 'Dr. Wong has a collection of over 50 different flavoured dental polishing pastes — he lets kids pick their favourite flavour at every visit.',
    achievements: [
      'SDC Community Dentistry Award 2020',
      'School dental health educator for 6 primary schools',
      'Trained in Special Needs Dentistry (SND)',
      'Parent-voted "Most Child-Friendly Dentist" 4 consecutive years',
    ],
    accentColor: '#4ABFB5',
    stat1Label: 'Schools Served',
    stat1Value: '6',
    stat2Label: 'Years Experience',
    stat2Value: '11',
  },
];

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <p className="text-3xl sm:text-4xl font-bold text-white leading-none">{value}</p>
      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function DentistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const dentist = dentistsData.find((d) => d.slug === slug);

  if (!dentist) notFound();

  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const otherDentists = dentistsData.filter((d) => d.slug !== slug);

  return (
    <>
      <Header />
      <main className="bg-background overflow-hidden">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[100svh] flex flex-col justify-end bg-primary overflow-hidden">

          {/* Layered background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="blob-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />
            <div className="blob-2 absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
            <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/3 blur-[80px]" />
          </div>

          {/* Tooth decorations */}
          <ToothDecoration size={260} color="#ffffff" className="absolute -top-8 right-8 opacity-[0.025] tooth-float" style={{ '--rot': '18deg' } as React.CSSProperties} />
          <ToothDecoration size={140} color="#4ABFB5" className="absolute bottom-40 left-6 opacity-[0.06] tooth-float-slow" style={{ '--rot': '-12deg' } as React.CSSProperties} />
          <ToothDecoration size={80} color="#ffffff" className="absolute top-40 left-1/3 opacity-[0.04] tooth-float" style={{ '--rot': '30deg' } as React.CSSProperties} />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />

          {/* Full-bleed photo — desktop right side */}
          <div className="absolute inset-0 lg:left-[45%] overflow-hidden">
            <div className="relative w-full h-full">
              <AppImage
                src={dentist.image}
                alt={`${dentist.name} — ${dentist.title} at SmileDental Singapore`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              {/* Gradient fade left */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent lg:via-primary/40" />
              {/* Gradient fade bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
            </div>
          </div>

          {/* Hero content */}
          <div
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-16 pt-36"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Link href="/" className="text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-wider transition-colors">Home</Link>
              <Icon name="ChevronRightIcon" size={12} className="text-white/25" />
              <Link href="/#dentists" className="text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-wider transition-colors">Our Dentists</Link>
              <Icon name="ChevronRightIcon" size={12} className="text-white/25" />
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">{dentist.name}</span>
            </div>

            <div className="max-w-xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {dentist.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-4">
                {dentist.name.split(' ').slice(0, 2).join(' ')}<br />
                <span className="font-serif italic text-accent">{dentist.name.split(' ').slice(2).join(' ')}</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg font-medium mb-1">{dentist.title}</p>
              <p className="text-accent/80 text-sm mb-8">{dentist.speciality}</p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name="ClockIcon" size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Experience</p>
                    <p className="text-white font-bold text-sm">{dentist.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name="LanguageIcon" size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Languages</p>
                    <p className="text-white font-bold text-sm">{dentist.languages.join(' · ')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name="CalendarDaysIcon" size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Available</p>
                    <p className="text-white font-bold text-xs leading-snug max-w-[180px]">{dentist.availability}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30"
                >
                  <Icon name="CalendarDaysIcon" size={16} />
                  Book with {dentist.name.split(' ')[1]}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  <Icon name="PhoneIcon" size={15} />
                  Call Clinic
                </a>
              </div>
            </div>

            {/* Stats row — bottom */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              <AnimatedCounter value={dentist.stat1Value} label={dentist.stat1Label} />
              <AnimatedCounter value={dentist.stat2Value} label={dentist.stat2Label} />
              <AnimatedCounter value={dentist.qualifications.length.toString()} label="Credentials" />
              <AnimatedCounter value={dentist.languages.length.toString()} label="Languages" />
            </div>
          </div>
        </section>

        {/* ── BIO + QUALIFICATIONS ──────────────────────────────── */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-accent/8 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-accent/6 pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Bio — left */}
              <RevealSection className="lg:col-span-7" delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-5">
                  <span className="w-6 h-px bg-accent" />
                  About
                </span>
                <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tighter text-primary mb-6 leading-tight">
                  Meet <span className="font-serif italic text-accent">{dentist.name.split(' ')[1]}</span>
                </h2>
                <p className="text-foreground/65 leading-[1.85] text-base sm:text-[17px]">{dentist.bio}</p>

                {/* Fun fact card */}
                <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary/60 border border-accent/15 p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/8 blur-2xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <Icon name="LightBulbIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-2">Did you know?</p>
                      <p className="text-sm text-foreground/65 leading-relaxed">{dentist.funFact}</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-primary/4 border border-primary/8">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="AcademicCapIcon" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Education</p>
                    <p className="text-sm font-semibold text-primary">{dentist.education}</p>
                  </div>
                </div>
              </RevealSection>

              {/* Qualifications + Achievements — right */}
              <RevealSection className="lg:col-span-5" delay={150}>
                {/* Qualifications */}
                <div className="bg-primary rounded-3xl p-7 sm:p-8 relative overflow-hidden mb-5">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/10 blur-2xl" />
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-white/3 blur-xl" />
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-5">
                    <span className="w-4 h-px bg-accent" />
                    Qualifications
                  </span>
                  <ul className="space-y-3 relative z-10">
                    {dentist.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckIcon" size={10} className="text-accent" />
                        </div>
                        <span className="text-sm text-white/70 leading-snug">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-7 border border-accent/15 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-xl" />
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
                    <span className="w-4 h-px bg-primary/40" />
                    Achievements
                  </span>
                  <ul className="space-y-3 relative z-10">
                    {dentist.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="StarIcon" size={10} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground/70 leading-snug">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ── EXPERTISE BENTO GRID ──────────────────────────────── */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 bg-background relative overflow-hidden">
          <ToothDecoration size={200} color="#1A3C5E" className="absolute top-10 right-0 opacity-[0.03] tooth-float" style={{ '--rot': '20deg' } as React.CSSProperties} />
          <ToothDecoration size={100} color="#4ABFB5" className="absolute bottom-10 left-0 opacity-[0.05] tooth-float-slow" style={{ '--rot': '-15deg' } as React.CSSProperties} />

          <div className="max-w-7xl mx-auto relative z-10">
            <RevealSection>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-5">
                <span className="w-6 h-px bg-accent" />
                Specialisations
              </span>
              <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold tracking-tighter text-primary mb-3 leading-tight">
                Areas of{' '}
                <span className="font-serif italic text-accent">expertise.</span>
              </h2>
              <p className="text-muted-foreground text-base mb-12 max-w-lg">
                {dentist.name.split(' ')[1]} brings deep, focused knowledge across these clinical disciplines.
              </p>
            </RevealSection>

            {/* Bento grid — varied sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dentist.expertise.map((item, i) => (
                <RevealSection
                  key={i}
                  delay={i * 80}
                  className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
                >
                  <div
                    className={`group relative overflow-hidden rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1.5 transition-all duration-500 ${
                      i === 0 ? 'p-8 sm:p-10' : 'p-7'
                    }`}
                  >
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-transparent" />
                    </div>

                    {/* Number */}
                    <span className="absolute top-5 right-6 text-[clamp(3rem,6vw,5rem)] font-bold text-primary/4 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative z-10">
                      <div className={`${i === 0 ? 'w-14 h-14' : 'w-11 h-11'} rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300`}>
                        <Icon name={item.icon as any} size={i === 0 ? 26 : 20} className="text-accent" />
                      </div>
                      <h3 className={`font-bold text-primary mb-3 ${i === 0 ? 'text-xl sm:text-2xl' : 'text-base'}`}>{item.area}</h3>
                      <p className={`text-muted-foreground leading-relaxed ${i === 0 ? 'text-base' : 'text-sm'}`}>{item.description}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Diagonal split background */}
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1A3C5E 0%, #0d2540 50%, #1a4a5e 100%)' }} />
          <div className="blob-1 absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/15 blur-[80px]" />
          <div className="blob-2 absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-[80px]" />

          <ToothDecoration size={220} color="#ffffff" className="absolute -bottom-10 right-10 opacity-[0.03] tooth-float-slow" style={{ '--rot': '-25deg' } as React.CSSProperties} />
          <ToothDecoration size={100} color="#4ABFB5" className="absolute top-8 left-1/4 opacity-[0.05] tooth-float" style={{ '--rot': '10deg' } as React.CSSProperties} />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
            <RevealSection>
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-5">
                    <span className="w-4 h-px bg-accent" />
                    Book a Consultation
                  </span>
                  <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold tracking-tighter text-white mb-4 leading-tight">
                    Ready to meet<br />
                    <span className="font-serif italic text-accent">{dentist.name.split(' ')[1]}?</span>
                  </h2>
                  <p className="text-white/55 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                    {dentist.name.split(' ')[1]} will take the time to understand your needs and craft a personalised treatment plan just for you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 flex-shrink-0">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 whitespace-nowrap"
                  >
                    <Icon name="CalendarDaysIcon" size={16} />
                    Book Appointment
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={15} />
                    Send a Message
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── MEET THE TEAM ─────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white relative overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full border border-primary/5 pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-5">
                <span className="w-6 h-px bg-accent" />
                Our Team
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tighter text-primary mb-12 leading-tight">
                Meet the rest of the <span className="font-serif italic text-accent">team.</span>
              </h2>
            </RevealSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherDentists.map((d, i) => (
                <RevealSection key={d.slug} delay={i * 100}>
                  <Link
                    href={`/dentists/${d.slug}`}
                    className="group block relative overflow-hidden rounded-3xl border border-border bg-background hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Photo */}
                    <div className="relative h-52 overflow-hidden">
                      <AppImage
                        src={d.image}
                        alt={`${d.name} — ${d.title}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        {d.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p className="font-bold text-base text-primary mb-0.5">{d.name}</p>
                      <p className="text-xs text-accent font-semibold mb-1">{d.title}</p>
                      <p className="text-xs text-muted-foreground">{d.experience} experience</p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-bold text-primary/50 uppercase tracking-wider">View Profile</span>
                        <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Icon name="ArrowRightIcon" size={13} className="text-accent group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}