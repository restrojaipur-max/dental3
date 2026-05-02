import ServicePageClient from './ServicePageClient';

export function generateStaticParams() {
  return [
    { slug: 'same-day-restorations' },
    { slug: 'teledentistry' },
    { slug: 'teeth-whitening' },
    { slug: 'invisalign' },
    { slug: 'dental-implants' },
  ];
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServicePageClient slug={params.slug} />;
}