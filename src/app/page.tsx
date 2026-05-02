import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DentistsSection from './components/DentistsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
  title: 'SmileDental — Trusted Dental Care in Singapore',
  description:
    'SmileDental offers same-day restorations, teledentistry, and emergency dental care in Singapore. Book your appointment with our experienced dentists today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmileDental — Dental Care SG',
    description: 'Modern dental care in Singapore. Same-day crowns, Invisalign, teledentistry.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: 'SmileDental',
            url: 'https://smiledental.sg',
            telephone: '+6561234567',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '12 Orchard Link, #02-08',
              addressLocality: 'Singapore',
              postalCode: '238823',
              addressCountry: 'SG',
            },
            openingHours: ['Mo-Fr 09:00-21:00', 'Sa 09:00-18:00'],
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '847',
            },
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <DentistsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}