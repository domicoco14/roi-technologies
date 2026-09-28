'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenStoreCheck: () => void;
}

export default function Navbar({ onOpenStoreCheck }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
          : 'bg-white py-4 sm:py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-xl bg-purple-50 p-1 border border-purple-200 group-hover:border-purple-400 transition-colors shrink-0 shadow-xs">
            <Image
              src="/logo-mark.jpg"
              alt="ROI Technology Eye Logo"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-0.5">
              roi<span className="text-purple-600 font-extrabold">technology</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-600 font-semibold tracking-widest uppercase">
              El-Roi • Return On Investment
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 bg-slate-50 px-6 py-2 rounded-full border border-slate-200">
          <Link href="#home" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="#problem" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            The Problem
          </Link>
          <Link href="#how-it-works" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            How We Fix It
          </Link>
          <Link href="#calculator" className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors">
            ROI Calculator
          </Link>
          <Link href="#services" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            About (El-Roi)
          </Link>
          <Link href="#why-us" className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors">
            Why Trust Us
          </Link>
        </nav>

        {/* Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 group shadow-sm"
          >
            <span>Get Free Store Check</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 sm:hidden"
          >
            <span>Free Check</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-50 bg-white/98 backdrop-blur-xl border-b border-slate-200 flex flex-col justify-between p-6 overflow-y-auto lg:hidden">
          <nav className="space-y-1.5">
            {[
              { label: 'Home', href: '#home' },
              { label: 'The Problem', href: '#problem' },
              { label: 'How We Fix It', href: '#how-it-works' },
              { label: 'Profit Calculator', href: '#calculator' },
              { label: 'Services', href: '#services' },
              { label: 'About (El-Roi Story)', href: '#about' },
              { label: 'Why Trust Us', href: '#why-us' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-100 text-base font-bold text-slate-800 hover:text-purple-600 border border-transparent transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200 space-y-3 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoreCheck();
              }}
              className="w-full btn-gold-primary py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get My Free Store Check</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Takes 2 minutes. 100% free. No obligation.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
