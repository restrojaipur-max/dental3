'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Services',
    dropdown: [
      { label: 'Same Day Restorations', href: '/services/same-day-restorations' },
      { label: 'Teledentistry', href: '/services/teledentistry' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
      { label: 'Invisalign', href: '/services/invisalign' },
      { label: 'Dental Implants', href: '/services/dental-implants' },
    ],
  },
  {
    label: 'Dentists',
    dropdown: [
      { label: 'Dr. Mei Lin Tan', href: '/dentists/dr-mei-lin-tan' },
      { label: 'Dr. Rajesh Nair', href: '/dentists/dr-rajesh-nair' },
      { label: 'Dr. Sarah Lim', href: '/dentists/dr-sarah-lim' },
      { label: 'Dr. James Wong', href: '/dentists/dr-james-wong' },
    ],
  },
  {
    label: 'About Us',
    dropdown: [
      { label: 'Our Equipment', href: '#about' },
      { label: 'Emergency & Night Dentistry', href: '#services' },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <nav
            className={`flex items-center justify-between px-4 py-2 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5 border border-border'
                : 'bg-white/70 backdrop-blur-md border border-white/60'
            }`}
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 flex-shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <AppLogo size={36} />
              <span
                className="font-bold text-xl tracking-tight text-primary hidden sm:block"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                SmileDental
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.href && !item.dropdown ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-foreground/70 hover:text-primary hover:bg-secondary/60"
                    >
                      {item.label}
                    </a>
                  ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'bg-secondary text-primary' :'text-foreground/70 hover:text-primary hover:bg-secondary/60'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <Icon
                        name="ChevronDownIcon"
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  )}

                  {item.dropdown && activeDropdown === item.label && (
                    <div
                      className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border overflow-hidden"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="p-2">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNavClick(sub.href)}
                            className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-xl transition-colors duration-150"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book Appointment
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 right-0 z-40 mobile-menu-open md:hidden">
          <div className="bg-white/95 backdrop-blur-xl border-b border-border shadow-xl pt-24 pb-6 px-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href && !item.dropdown ? (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-foreground hover:bg-secondary/60 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-foreground hover:bg-secondary/60 transition-colors"
                  >
                    {item.label}
                    {item.dropdown && (
                      <Icon
                        name="ChevronDownIcon"
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  )}
                  {item.dropdown && mobileExpanded === item.label && (
                    <div className="ml-4 flex flex-col gap-0.5 mb-1">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.href)}
                          className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/40 rounded-xl transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-2xl text-base font-bold hover:bg-primary/90 transition-all"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}