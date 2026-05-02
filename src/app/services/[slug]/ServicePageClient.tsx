'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceBenefit {
  icon: string;
  title: string;
  desc: string;
}

interface ServiceStep {
  label: string;
  title: string;
  desc: string;
}

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  ctaLabel: string;
  duration: string;
  durationLabel: string;
  stats: ServiceStat[];
  intro: string;
  introImage: string;
  introImageAlt: string;
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  faqs: ServiceFAQ[];
  closingLine: string;
  galleryImages: {src: string;alt: string;caption: string;}[];
}

const servicesData: ServiceData[] = [
{
  slug: 'same-day-restorations',
  name: 'Same Day Restorations',
  tagline: 'Broken tooth? Fixed today.',
  heroSubtitle:
  'Walk in with a damaged tooth. Walk out with a permanent, precision-crafted ceramic restoration — all in a single appointment using CEREC technology.',
  category: 'Restorative Dentistry',
  heroImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_14e39c241-1777694657617.png",
  heroImageAlt:
  'Dentist using advanced CEREC milling technology to create a same-day ceramic crown restoration',
  ctaLabel: 'Book Same-Day Appointment',
  duration: '1–2 hrs',
  durationLabel: 'Single Visit',
  stats: [
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '15+', label: 'Years Lifespan' },
  { value: '1 Visit', label: 'Complete Treatment' },
  { value: '0', label: 'Temporary Crowns' }],

  intro:
  'Traditional crowns meant two visits, messy impressions, and weeks wearing an uncomfortable temporary. CEREC same-day restorations eliminate all of that. Using a chairside 3D scanner and in-house ceramic milling unit, we design, mill, and bond your permanent restoration in a single appointment — with results that are clinically indistinguishable from lab-made crowns.',
  introImage:
  "https://images.unsplash.com/photo-1660737216869-ad3d43c36500",
  introImageAlt:
  'Close-up of a perfectly crafted ceramic dental crown being placed on a patient tooth',
  benefits: [
  {
    icon: 'ClockIcon',
    title: 'One Visit, Done',
    desc: 'No temporaries, no second appointments, no waiting weeks for a lab. Your permanent crown is ready the same day.'
  },
  {
    icon: 'SparklesIcon',
    title: 'Precision-Milled Ceramic',
    desc: 'High-strength lithium disilicate ceramic — the same material used in premium lab crowns — milled to micron-level accuracy.'
  },
  {
    icon: 'CameraIcon',
    title: 'Digital Impressions',
    desc: 'A 3D intraoral scan replaces messy putty impressions entirely. Faster, more accurate, and far more comfortable.'
  },
  {
    icon: 'SwatchIcon',
    title: 'Perfect Colour Match',
    desc: 'We shade-match your ceramic to your surrounding teeth so your restoration blends seamlessly with your natural smile.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: '15+ Year Durability',
    desc: 'CEREC restorations are clinically proven to last as long as traditional lab-made crowns with proper oral hygiene.'
  },
  {
    icon: 'HeartIcon',
    title: 'Minimal Tooth Removal',
    desc: 'Digital design allows us to preserve more of your natural tooth structure compared to conventional crown preparation.'
  }],

  steps: [
  {
    label: 'Step 1',
    title: 'Digital 3D Scan',
    desc: 'We scan your tooth with our intraoral camera — capturing every contour in seconds. No impressions, no gagging.'
  },
  {
    label: 'Step 2',
    title: 'CAD Design',
    desc: 'Our software designs your custom restoration in minutes, perfectly shaped to your bite, adjacent teeth, and smile line.'
  },
  {
    label: 'Step 3',
    title: 'In-Clinic Milling',
    desc: 'Your crown, inlay, or veneer is milled from a solid ceramic block right here in our clinic — while you relax.'
  },
  {
    label: 'Step 4',
    title: 'Bond & Polish',
    desc: 'We bond your restoration, check your bite, and polish it to a flawless finish. You leave with a permanent tooth.'
  }],

  faqs: [
  {
    q: 'How long does the entire procedure take?',
    a: 'Most same-day restorations are completed in 1–2 hours, from scan to final bonding. You walk in with a damaged tooth and walk out with a permanent, beautiful restoration.'
  },
  {
    q: 'Is CEREC ceramic as strong as traditional crowns?',
    a: 'Absolutely. CEREC restorations use high-strength lithium disilicate ceramic that matches the durability of traditional lab-made crowns — often lasting 15+ years with proper care.'
  },
  {
    q: 'Will my restoration look natural?',
    a: 'Yes. We colour-match your ceramic to your surrounding teeth with precision, ensuring your restoration is virtually indistinguishable from your natural enamel.'
  },
  {
    q: 'Is the procedure painful?',
    a: 'The tooth is fully numbed before any work begins. Most patients are surprised by how comfortable the experience is — many describe it as no different from a routine filling.'
  }],

  closingLine: 'Your tooth can be restored today. No waiting, no temporaries, no second visit.',
  galleryImages: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_139727eb0-1772196098801.png",
    alt: 'Modern dental clinic with CEREC milling machine and digital scanning equipment',
    caption: 'In-Clinic CEREC Technology'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_187ac24e4-1772086697376.png",
    alt: 'Dentist performing a painless dental procedure on a relaxed patient',
    caption: 'Comfortable Single-Visit Experience'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_195554683-1764981454874.png",
    alt: 'High-quality ceramic dental crown perfectly matched to natural tooth color',
    caption: 'Precision Ceramic Restorations'
  }]

},
{
  slug: 'teledentistry',
  name: 'Teledentistry',
  tagline: 'Expert dental care, wherever you are.',
  heroSubtitle:
  'Consult our dentists from home, work, or anywhere in the world. Get professional assessments, prescriptions, and treatment plans — without stepping into a clinic.',
  category: 'Digital Dental Care',
  heroImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1a9419f57-1766820409769.png",
  heroImageAlt:
  'Patient having a teledentistry video consultation with a dentist on a laptop from home',
  ctaLabel: 'Start a Virtual Consultation',
  duration: '20 min',
  durationLabel: 'Online Session',
  stats: [
  { value: '24/7', label: 'Availability' },
  { value: '20 min', label: 'Avg. Consultation' },
  { value: '100%', label: 'Secure & Private' },
  { value: '5★', label: 'Patient Rating' }],

  intro:
  "Teledentistry brings our clinical expertise directly to your screen. Whether you're managing dental anxiety, seeking a second opinion, following up after treatment, or simply too busy to visit in person — our virtual consultations deliver the same quality of care and professional guidance you'd receive in the clinic, from the comfort of wherever you are.",
  introImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1ceb13964-1772087755854.png",
  introImageAlt:
  'Dentist conducting a professional teledentistry consultation via video call with a patient',
  benefits: [
  {
    icon: 'HomeIcon',
    title: 'Consult From Anywhere',
    desc: "No travel, no waiting rooms. Connect with our dentists from home, the office, or while travelling — on any device."
  },
  {
    icon: 'ClockIcon',
    title: 'Same-Day Appointments',
    desc: 'Virtual slots are available within hours. Urgent dental concerns get addressed the same day you reach out.'
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Prescriptions & Referrals',
    desc: 'Our dentists can issue digital prescriptions, referral letters, and medical certificates following your virtual consultation.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Encrypted & Confidential',
    desc: 'All consultations are conducted over a fully encrypted, HIPAA-compliant platform. Your health data is always protected.'
  },
  {
    icon: 'PhotoIcon',
    title: 'Photo-Based Assessment',
    desc: 'Share photos of your concern and our dentists will provide a thorough visual assessment with clear, actionable advice.'
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Seamless In-Clinic Handoff',
    desc: "If in-person treatment is needed, we'll schedule your clinic visit and brief the treating dentist — no repeating yourself."
  }],

  steps: [
  {
    label: 'Step 1',
    title: 'Book Your Slot',
    desc: "Choose a time that suits you — same-day slots are often available. You'll receive a secure video link by email."
  },
  {
    label: 'Step 2',
    title: 'Share Your Concern',
    desc: 'Upload photos of your dental concern before the call. Our dentist reviews them in advance for a more focused consultation.'
  },
  {
    label: 'Step 3',
    title: 'Video Consultation',
    desc: 'Connect with your dentist via secure video. Discuss symptoms, ask questions, and receive a professional assessment.'
  },
  {
    label: 'Step 4',
    title: 'Receive Your Plan',
    desc: 'Get a written summary, prescription (if needed), and next steps — all delivered digitally within 30 minutes of your call.'
  }],

  faqs: [
  {
    q: 'What can teledentistry actually diagnose?',
    a: "Our dentists can assess tooth sensitivity, gum concerns, post-treatment healing, dental anxiety, orthodontic progress, and provide second opinions. Some conditions require in-person examination, and we'll tell you clearly when that's the case."
  },
  {
    q: 'Can I get a prescription through teledentistry?',
    a: 'Yes. Following a virtual consultation, our dentists can issue digital prescriptions for antibiotics, pain relief, and other dental medications where clinically appropriate.'
  },
  {
    q: 'Is teledentistry covered by insurance?',
    a: 'Coverage varies by insurer. We provide detailed consultation receipts and clinical notes that you can submit to your insurance provider for reimbursement claims.'
  },
  {
    q: 'What technology do I need?',
    a: 'Just a smartphone, tablet, or computer with a camera and internet connection. Our platform works on all major browsers — no app download required.'
  }],

  closingLine: 'Expert dental advice is one click away. No commute, no waiting room, no stress.',
  galleryImages: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_12c789640-1764659114724.png",
    alt: 'Doctor using digital tablet for telemedicine consultation in a modern medical setting',
    caption: 'Digital-First Dental Care'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_10d3ff7de-1772074713388.png",
    alt: 'Patient smiling during a comfortable video call dental consultation from home',
    caption: 'Consult From Home'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_16bebe25b-1768306803802.png",
    alt: 'Secure encrypted teledentistry platform interface on a laptop screen',
    caption: 'Secure & Encrypted Platform'
  }]

},
{
  slug: 'teeth-whitening',
  name: 'Teeth Whitening',
  tagline: 'Luminous. Confident. Yours.',
  heroSubtitle:
  'Professional teeth whitening that delivers up to 8 shades brighter in a single session — safely, comfortably, and with results that last.',
  category: 'Cosmetic Dentistry',
  heroImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_14f62f28e-1772699838312.png",
  heroImageAlt:
  'Beautiful woman with a bright, radiant white smile after professional teeth whitening treatment',
  ctaLabel: 'Book Your Whitening Session',
  duration: '60–90 min',
  durationLabel: 'In-Chair Session',
  stats: [
  { value: '8 Shades', label: 'Brighter Results' },
  { value: '90 min', label: 'In-Chair Session' },
  { value: '2 yrs', label: 'Results Duration' },
  { value: '0%', label: 'Enamel Damage' }],

  intro:
  'Over-the-counter whitening strips deliver inconsistent, slow results — and often cause sensitivity. Our professional whitening system uses clinically calibrated hydrogen peroxide gel, activated by precision LED light, to break down deep-set stains safely and evenly. The result: a dramatically brighter smile in a single 90-minute appointment, with sensitivity managed throughout.',
  introImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1b37a010d-1772698673389.png",
  introImageAlt:
  'Professional teeth whitening procedure being performed with LED light activation in a dental clinic',
  benefits: [
  {
    icon: 'SunIcon',
    title: 'Up to 8 Shades Brighter',
    desc: 'Clinical-grade whitening gel delivers dramatic results in a single session — far beyond what any at-home product can achieve.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Enamel-Safe Formula',
    desc: 'Our gel is pH-balanced and enamel-safe. We monitor sensitivity throughout and adjust concentration for your comfort.'
  },
  {
    icon: 'SparklesIcon',
    title: 'LED Light Activation',
    desc: 'Precision LED light accelerates the whitening process, ensuring even coverage across all visible teeth simultaneously.'
  },
  {
    icon: 'HomeIcon',
    title: 'Take-Home Maintenance Kit',
    desc: 'Every in-chair treatment includes custom-fitted whitening trays and a maintenance gel to extend your results at home.'
  },
  {
    icon: 'CalendarIcon',
    title: 'Results Last 1–2 Years',
    desc: 'With the included maintenance kit and simple dietary habits, your brighter smile can last up to two years.'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Tailored to Your Shade',
    desc: "We assess your natural tooth shade and target a result that looks naturally bright — not artificially white."
  }],

  steps: [
  {
    label: 'Step 1',
    title: 'Shade Assessment',
    desc: 'We photograph and record your current tooth shade using a clinical shade guide — your baseline for measuring results.'
  },
  {
    label: 'Step 2',
    title: 'Gum Protection',
    desc: 'A protective barrier is applied to your gums and soft tissue before any whitening gel is placed — ensuring complete safety.'
  },
  {
    label: 'Step 3',
    title: 'Gel & LED Activation',
    desc: 'Whitening gel is applied in 15-minute cycles, activated by our precision LED light. Most patients complete 3–4 cycles.'
  },
  {
    label: 'Step 4',
    title: 'Reveal & Take-Home Kit',
    desc: 'We photograph your final shade, compare results, and send you home with your custom maintenance kit.'
  }],

  faqs: [
  {
    q: 'How long do whitening results last?',
    a: 'In-chair whitening results typically last 1–2 years with the included take-home maintenance kit. Avoiding staining foods and drinks (coffee, red wine, tea) and using your maintenance trays monthly will significantly extend your results.'
  },
  {
    q: 'Will whitening cause tooth sensitivity?',
    a: 'Some patients experience mild, temporary sensitivity during or after treatment. We use a desensitising agent throughout the procedure and can adjust gel concentration for sensitive teeth. Sensitivity typically resolves within 24–48 hours.'
  },
  {
    q: 'Does whitening work on crowns or veneers?',
    a: "Whitening gel only affects natural tooth enamel — it does not change the colour of crowns, veneers, or composite bonding. If you have existing restorations, we'll discuss how to achieve a consistent result during your consultation."
  },
  {
    q: 'How white will my teeth actually get?',
    a: "Results vary based on your starting shade and the nature of your staining. Most patients achieve 4–8 shades brighter. We'll give you a realistic expectation during your shade assessment before treatment begins."
  }],

  closingLine: 'A brighter smile changes how you feel in every room you walk into.',
  galleryImages: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_193eab5b9-1767020895787.png",
    alt: 'Before and after comparison showing dramatic teeth whitening results',
    caption: 'Dramatic Whitening Results'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1ee47fa-1772054604928.png",
    alt: 'Professional LED teeth whitening treatment in progress at a dental clinic',
    caption: 'LED-Activated Whitening'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1874a7162-1772074534697.png",
    alt: 'Happy patient with a bright white smile after professional dental whitening treatment',
    caption: 'Confident, Radiant Smiles'
  }]

},
{
  slug: 'invisalign',
  name: 'Invisalign',
  tagline: 'Straighter teeth, invisibly.',
  heroSubtitle:
  'Straighten your teeth discreetly with Invisalign clear aligners. No metal brackets, no dietary restrictions, no self-consciousness — just a confident smile on your terms.',
  category: 'Orthodontics',
  heroImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1888523c5-1772103454167.png",
  heroImageAlt:
  'Young woman holding Invisalign clear aligner trays with a confident smile showing straight teeth',
  ctaLabel: 'Get Your 3D Smile Preview',
  duration: '6–18 months',
  durationLabel: 'Treatment Duration',
  stats: [
  { value: '500+', label: 'Cases Completed' },
  { value: '6 mo', label: 'Fastest Treatment' },
  { value: '22 hrs', label: 'Daily Wear' },
  { value: '3D', label: 'Smile Preview' }],

  intro:
  "Invisalign uses a series of custom-made, virtually invisible clear aligners to gradually move your teeth into their ideal position. Each aligner is precision-engineered using SmartTrack material — applying gentle, controlled forces to move teeth predictably and comfortably. Before treatment even begins, you'll see a 3D simulation of your final smile.",
  introImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_170c4df3d-1772074598151.png",
  introImageAlt:
  'Dentist showing a patient their 3D digital smile simulation on a computer screen before Invisalign treatment',
  benefits: [
  {
    icon: 'EyeSlashIcon',
    title: 'Nearly Invisible',
    desc: "Clear aligners are virtually undetectable. Most people won't notice you're in treatment — even up close."
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Fully Removable',
    desc: 'Remove your aligners to eat, drink, brush, and floss. No food restrictions, no special cleaning tools required.'
  },
  {
    icon: 'ComputerDesktopIcon',
    title: '3D Treatment Preview',
    desc: 'See your projected final smile before committing to treatment. Our digital simulation shows every stage of your transformation.'
  },
  {
    icon: 'ChartBarIcon',
    title: 'Predictable Results',
    desc: 'SmartTrack material applies precise, controlled forces — moving teeth predictably and comfortably to their target positions.'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Certified Providers',
    desc: 'Our dentists are certified Invisalign providers with hundreds of completed cases across all complexity levels.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Refinements Included',
    desc: 'We stand behind every Invisalign case. If refinements are needed after treatment, we include them at no additional cost.'
  }],

  steps: [
  {
    label: 'Week 1',
    title: 'Digital Scan & 3D Preview',
    desc: 'We take a full digital scan of your teeth and generate a 3D simulation showing your smile transformation — before treatment begins.'
  },
  {
    label: 'Weeks 2–3',
    title: 'Custom Aligners Arrive',
    desc: 'Your precision-crafted aligner series is manufactured and delivered. Each set is trimmed to your gum line for maximum comfort.'
  },
  {
    label: 'Ongoing',
    title: 'Fortnightly Progress',
    desc: 'Every two weeks, you progress to the next aligner set. We monitor your progress via in-clinic visits or teledentistry check-ins.'
  },
  {
    label: 'Final',
    title: 'Retainer & Reveal',
    desc: 'Once treatment is complete, we fit your custom retainer to maintain your new smile — then take your "after" photos.'
  }],

  faqs: [
  {
    q: 'How long does Invisalign treatment take?',
    a: "Treatment duration varies by case complexity. Mild corrections can take as little as 6 months; comprehensive cases typically take 12–18 months. We'll give you a precise timeline after your digital scan."
  },
  {
    q: 'How many hours per day do I need to wear aligners?',
    a: 'For optimal results, aligners should be worn 20–22 hours per day. You remove them only to eat, drink (anything other than water), and perform oral hygiene.'
  },
  {
    q: 'Is Invisalign painful?',
    a: 'Most patients experience mild pressure for 1–2 days when switching to a new aligner set — a sign the aligners are working. This is significantly less discomfort than traditional braces.'
  },
  {
    q: 'Can Invisalign fix severe misalignment?',
    a: "Invisalign can treat a wide range of cases including crowding, spacing, overbite, underbite, and crossbite. During your consultation, we'll assess whether Invisalign or an alternative is best for your specific situation."
  }],

  closingLine: 'See your new smile before you start. No commitment required.',
  galleryImages: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_192da47b3-1772196049554.png",
    alt: 'Clear Invisalign aligner trays displayed on a clean white surface showing their transparency',
    caption: 'Virtually Invisible Aligners'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc2dce2c-1772074599368.png",
    alt: 'Dentist reviewing 3D digital treatment plan for Invisalign on a computer monitor',
    caption: '3D Digital Treatment Planning'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c019f9fc-1772376107144.png",
    alt: 'Patient with a beautiful straight smile after completing Invisalign orthodontic treatment',
    caption: 'Beautiful Straight Smiles'
  }]

},
{
  slug: 'dental-implants',
  name: 'Dental Implants',
  tagline: 'A permanent tooth. For life.',
  heroSubtitle:
  'Replace missing teeth with titanium implants that look, feel, and function exactly like your natural teeth — the gold standard in modern tooth replacement.',
  category: 'Implant Dentistry',
  heroImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_113567aef-1771898380052.png",
  heroImageAlt:
  'Dental implant model showing titanium post, abutment, and ceramic crown components in cross-section',
  ctaLabel: 'Book Implant Consultation',
  duration: '3–6 months',
  durationLabel: 'Full Treatment',
  stats: [
  { value: '2,000+', label: 'Implants Placed' },
  { value: '98%', label: 'Success Rate' },
  { value: 'Lifetime', label: 'Post Durability' },
  { value: '3D', label: 'Guided Surgery' }],

  intro:
  'A dental implant is the closest thing modern dentistry has to a natural tooth. A titanium post is surgically placed into your jawbone, where it fuses with the bone through a process called osseointegration — creating a foundation as strong as a natural tooth root. A custom ceramic crown is then attached, giving you a tooth that looks, feels, and functions exactly like the real thing.',
  introImage:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ac1389-1772087717060.png",
  introImageAlt:
  'Detailed dental implant procedure showing titanium post being placed into jawbone by an oral surgeon',
  benefits: [
  {
    icon: 'SparklesIcon',
    title: 'Looks & Feels Natural',
    desc: 'Custom ceramic crowns are colour-matched and shaped to blend seamlessly with your surrounding teeth — indistinguishable from natural.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Permanent Solution',
    desc: "The titanium post is designed to last a lifetime. Unlike dentures or bridges, implants don't shift, slip, or require adhesives."
  },
  {
    icon: 'HeartIcon',
    title: 'Preserves Jawbone',
    desc: 'Implants stimulate the jawbone just like natural tooth roots — preventing the bone loss that occurs with dentures and bridges.'
  },
  {
    icon: 'UserGroupIcon',
    title: 'No Impact on Adjacent Teeth',
    desc: "Unlike bridges, implants don't require grinding down healthy neighbouring teeth. Your natural teeth remain completely intact."
  },
  {
    icon: 'ComputerDesktopIcon',
    title: '3D Guided Surgery',
    desc: 'We use CBCT 3D imaging and guided surgery technology for precise, minimally invasive implant placement every time.'
  },
  {
    icon: 'StarIcon',
    title: '98% Success Rate',
    desc: 'Dental implants have one of the highest success rates of any surgical procedure in dentistry — backed by decades of clinical evidence.'
  }],

  steps: [
  {
    label: 'Phase 1',
    title: 'Consultation & 3D Scan',
    desc: 'Comprehensive CBCT 3D scan, bone density assessment, and personalised treatment plan. We map every millimetre before we begin.'
  },
  {
    label: 'Phase 2',
    title: 'Implant Placement',
    desc: 'The titanium post is placed under local anaesthetic in a precise, minimally invasive procedure. Most patients return to work the next day.'
  },
  {
    label: 'Phase 3',
    title: 'Osseointegration',
    desc: 'Over 3–6 months, your jawbone fuses with the titanium post — creating a foundation as strong as a natural tooth root.'
  },
  {
    label: 'Phase 4',
    title: 'Crown Fitting',
    desc: 'Your custom ceramic crown is attached and adjusted for perfect bite alignment. The result: a tooth that looks and functions like the real thing.'
  }],

  faqs: [
  {
    q: 'How long do dental implants last?',
    a: 'With proper care, dental implants can last a lifetime. The titanium post is designed to be permanent. The ceramic crown typically lasts 15–25 years before requiring replacement, depending on wear and oral hygiene.'
  },
  {
    q: 'Is the implant procedure painful?',
    a: "The procedure is performed under local anaesthetic, so you won't feel pain during placement. Post-operative discomfort is typically mild and managed with over-the-counter pain relief. Most patients are pleasantly surprised by how comfortable the recovery is."
  },
  {
    q: 'Am I a candidate for dental implants?',
    a: "Most adults with good general health are candidates. Key factors include sufficient jawbone density and healthy gums. If bone loss has occurred, bone grafting may be recommended first. We'll assess your suitability thoroughly during your consultation."
  },
  {
    q: 'How do implants compare to dentures or bridges?',
    a: "Implants are the gold standard for tooth replacement. Unlike dentures, they don't slip or require adhesives. Unlike bridges, they don't require grinding down adjacent healthy teeth. They also preserve jawbone, which dentures and bridges cannot."
  }],

  closingLine: 'The most natural tooth replacement available. Designed to last a lifetime.',
  galleryImages: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_13cadb6d3-1772311545902.png",
    alt: 'Detailed cross-section model of a dental implant showing titanium post and ceramic crown',
    caption: 'Titanium Implant Anatomy'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1de760c66-1767348935480.png",
    alt: 'Oral surgeon performing a precise dental implant placement procedure',
    caption: 'Precision Implant Surgery'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
    alt: 'Patient with a complete, natural-looking smile after dental implant restoration',
    caption: 'Natural-Looking Results'
  }]

}];


function FAQItem({ q, a }: {q: string;a: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
      open ? 'border-accent/40 bg-accent/5' : 'border-border bg-white hover:border-accent/20'}`
      }
      onClick={() => setOpen(!open)}>
      
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-semibold text-primary text-sm md:text-base leading-snug">{q}</span>
        <div
          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-accent text-white rotate-45' : 'bg-secondary text-primary'}`
          }>
          
          <Icon name="PlusIcon" size={16} />
        </div>
      </div>
      {open &&
      <div className="px-6 pb-5">
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </div>
      }
    </div>);

}

export default function ServicePageClient({ slug }: {slug: string;}) {
  const service = servicesData.find((s) => s.slug === slug);

  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('reveal-up');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.anim-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!service) return;
    const interval = setInterval(() => {
      setActiveStep((p) => (p + 1) % service.steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [service]);

  if (!service) return notFound();

  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-background overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/6 blur-[160px] blob-1" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px] blob-3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[80px] blob-2" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* Left: Text */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)'
                }}>
                
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</Link>
                  <Icon name="ChevronRightIcon" size={12} className="text-muted-foreground" />
                  <Link href="/#services" className="text-xs text-muted-foreground hover:text-primary transition-colors">Services</Link>
                  <Icon name="ChevronRightIcon" size={12} className="text-muted-foreground" />
                  <span className="text-xs text-accent font-semibold">{service.name}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{service.category}</span>
                </div>

                <h1
                  className="font-bold tracking-tighter text-primary leading-[1.0] mb-4"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                  
                  {service.name.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="block font-serif italic text-accent">
                    {service.name.split(' ').slice(-1)[0]}
                  </span>
                </h1>

                <p className="text-xl font-semibold text-primary/60 mb-4 italic">&ldquo;{service.tagline}&rdquo;</p>

                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {service.heroSubtitle}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                    
                    {service.ctaLabel}
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="tel:+6561234567"
                    className="inline-flex items-center gap-2 border border-border text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-all duration-200">
                    
                    <Icon name="PhoneIcon" size={16} />
                    Call Us
                  </a>
                </div>

                <div className="inline-flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name="ClockIcon" size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{service.durationLabel}</p>
                    <p className="text-sm font-bold text-primary">{service.duration}</p>
                  </div>
                </div>
              </div>

              {/* Right: Hero image */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s'
                }}
                className="relative">
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/15 aspect-[4/3]">
                  <AppImage
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    className="object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border px-5 py-4">
                  <p className="text-2xl font-bold text-primary">{service.stats[0].value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{service.stats[0].label}</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-accent text-white rounded-2xl shadow-xl shadow-accent/30 px-5 py-4">
                  <p className="text-2xl font-bold">{service.stats[1].value}</p>
                  <p className="text-xs font-medium opacity-80">{service.stats[1].label}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="py-10 px-4 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[200px] rounded-full bg-accent/10 blur-[80px]" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.stats.map((stat, i) =>
              <div
                key={i}
                className="text-center group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`
                }}>
                
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="anim-scroll opacity-0 relative">
                <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10 aspect-[4/3]">
                  <AppImage
                    src={service.introImage}
                    alt={service.introImageAlt}
                    fill
                    className="object-cover" />
                  
                </div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-3xl bg-accent/10 border border-accent/20 -z-10" />
                <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 -z-10" />
              </div>

              <div className="anim-scroll opacity-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">About This Treatment</span>
                <h2
                  className="font-bold tracking-tighter text-primary mb-6 leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  
                  What is{' '}
                  <span className="font-serif italic text-accent">{service.name}?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-8">{service.intro}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.stats.slice(2).map((stat, i) =>
                  <div key={i} className="bg-secondary rounded-2xl p-4 border border-border">
                      <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
                      <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS BENTO GRID ── */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 anim-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Why Choose This</span>
              <h2
                className="font-bold tracking-tighter text-primary"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                
                The{' '}
                <span className="font-serif italic text-accent">{service.name}</span> advantage.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Large card — spans 2 cols */}
              <div className="anim-scroll opacity-0 md:col-span-2 group relative bg-primary rounded-3xl p-8 overflow-hidden min-h-[220px] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[60px] blob-1" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                    <Icon name={service.benefits[0].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.benefits[0].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">{service.benefits[0].desc}</p>
                </div>
                <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                  <span className="w-6 h-px bg-accent" />
                  Key Benefit
                </div>
              </div>

              {/* Tall card — spans 2 rows */}
              <div className="anim-scroll opacity-0 md:row-span-2 group bg-accent/5 border border-accent/20 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:bg-accent/10">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                    <Icon name={service.benefits[1].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{service.benefits[1].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.benefits[1].desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-accent/20">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4">
                    <Icon name={service.benefits[2].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{service.benefits[2].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.benefits[2].desc}</p>
                </div>
              </div>

              {/* Regular cards */}
              {service.benefits.slice(3).map((b, i) =>
              <div
                key={i}
                className="anim-scroll opacity-0 group bg-white border border-border rounded-3xl p-7 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                
                  <div className="w-11 h-11 rounded-2xl bg-secondary group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2 text-sm">{b.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="py-24 px-4 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 anim-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">How It Works</span>
              <h2
                className="font-bold tracking-tighter text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                
                Your journey,{' '}
                <span className="font-serif italic text-accent">step by step.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-3">
                {service.steps.map((step, i) =>
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 ${
                  activeStep === i ?
                  'bg-white/10 border border-accent/40' : 'bg-white/5 border border-white/10 hover:bg-white/8'}`
                  }>
                  
                    <div className="flex items-start gap-4">
                      <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all duration-300 ${
                      activeStep === i ? 'bg-accent text-white' : 'bg-white/10 text-white/50'}`
                      }>
                      
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeStep === i ? 'text-accent' : 'text-white/40'}`}>
                          {step.label}
                        </p>
                        <p className={`font-bold text-sm ${activeStep === i ? 'text-white' : 'text-white/60'}`}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </button>
                )}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent">{String(activeStep + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
                  {service.steps[activeStep].label}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">{service.steps[activeStep].title}</h3>
                <p className="text-white/60 leading-relaxed">{service.steps[activeStep].desc}</p>
                <div className="flex gap-2 mt-8">
                  {service.steps.map((_, i) =>
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStep ? 'w-8 bg-accent' : 'w-3 bg-white/20'}`
                    } />

                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 anim-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Gallery</span>
              <h2
                className="font-bold tracking-tighter text-primary"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                
                See it in{' '}
                <span className="font-serif italic text-accent">action.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {service.galleryImages.map((img, i) =>
              <div
                key={i}
                className="anim-scroll opacity-0 group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg shadow-primary/8 hover:shadow-xl hover:shadow-primary/15 transition-all duration-500 hover:-translate-y-2">
                
                  <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold">{img.caption}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 anim-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Common Questions</span>
              <h2
                className="font-bold tracking-tighter text-primary"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                
                {service.name},{' '}
                <span className="font-serif italic text-accent">explained.</span>
              </h2>
            </div>
            <div className="space-y-3">
              {service.faqs.map((faq, i) =>
              <FAQItem key={i} q={faq.q} a={faq.a} />
              )}
            </div>
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 anim-scroll opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Explore More</span>
              <h2
                className="font-bold tracking-tighter text-primary"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                
                Other{' '}
                <span className="font-serif italic text-accent">services.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {otherServices.map((s, i) =>
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="anim-scroll opacity-0 group block bg-secondary hover:bg-white border border-transparent hover:border-border rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                    {s.category}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors duration-200">
                    {s.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">{s.heroSubtitle}</p>
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                    Learn More
                    <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Begin?</span>
            </div>
            <h2
              className="font-bold tracking-tighter text-white mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              
              {service.closingLine.split('.')[0]}.
              <span className="block font-serif italic text-accent mt-1">
                {service.closingLine.split('.').slice(1).join('.').trim()}
              </span>
            </h2>
            <p className="text-white/60 text-base mb-10 leading-relaxed max-w-xl mx-auto">
              Book a consultation with our specialists and take the first step towards the smile you deserve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30">
                
                {service.ctaLabel}
                <Icon name="ArrowRightIcon" size={18} />
              </a>
              <a
                href="tel:+6561234567"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200">
                
                <Icon name="PhoneIcon" size={18} />
                Call Now
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>);

}