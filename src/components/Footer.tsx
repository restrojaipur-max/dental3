import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Dentists', href: '#dentists' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  { icon: 'GlobeAltIcon', label: 'Facebook', href: '#' },
  { icon: 'ChatBubbleLeftEllipsisIcon', label: 'Instagram', href: '#' },
  { icon: 'EnvelopeIcon', label: 'Email', href: 'mailto:hello@smiledental.sg' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground">
      {/* Tooth decorations */}
      <div className="absolute top-8 right-16 opacity-5 tooth-float-slow" style={{ '--rot': '20deg' } as React.CSSProperties}>
        <ToothSVG size={80} color="#fff" />
      </div>
      <div className="absolute bottom-4 left-24 opacity-5 tooth-float" style={{ '--rot': '-15deg' } as React.CSSProperties}>
        <ToothSVG size={60} color="#fff" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <AppLogo size={36} />
              <span className="font-bold text-xl tracking-tight text-white">SmileDental</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Gentle, modern dental care for the whole family in Singapore.
            </p>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot"></span>
              <span className="text-xs text-white/50 font-semibold uppercase tracking-wider">Open Today · Mon–Sat 9am–9pm</span>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-medium">
            © 2026 SmileDental Pte. Ltd. · 12 Orchard Link, Singapore 238823
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ToothSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 10 C10 10 5 20 5 32 C5 44 10 54 15 62 C18 70 20 80 22 90 C23 95 25 98 28 98 C31 98 33 94 34 88 C35 82 36 74 40 74 C44 74 45 82 46 88 C47 94 49 98 52 98 C55 98 57 95 58 90 C60 80 62 70 65 62 C70 54 75 44 75 32 C75 20 70 10 60 10 C54 10 50 14 40 14 C30 14 26 10 20 10Z"
        fill={color}
      />
    </svg>
  );
}