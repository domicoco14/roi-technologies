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

  // Lock body scroll when mobile drawer is open
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
          ? 'bg-[#08090E]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-xl bg-purple-950/40 p-1 border border-purple-500/30 group-hover:border-purple-500/60 transition-colors shrink-0">
            <Image
              src="/logo-mark.jpg"
              alt="ROI Technology Eye Logo"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
              roi<span className="text-gradient-purple font-extrabold">technology</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-400 font-medium tracking-widest uppercase">
              El-Roi • Return On Investment
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 glass-panel px-6 py-2 rounded-full border border-white/10">
          <Link href="#home" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="#problem" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            The Problem
          </Link>
          <Link href="#how-it-works" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            How We Fix It
          </Link>
          <Link href="#calculator" className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors">
            ROI Calculator
          </Link>
          <Link href="#services" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            About
          </Link>
          <Link href="#why-us" className="text-xs font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Why Trust Us
          </Link>
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 group shadow-xl"
          >
            <span>Get Free Store Check</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 sm:hidden"
          >
            <span>Free Check</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-50 bg-[#08090E]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in slide-in-from-top duration-300">
          <nav className="space-y-2">
            {[
              { label: 'Home', href: '#home' },
              { label: 'The Problem', href: '#problem' },
              { label: 'How We Fix It', href: '#how-it-works' },
              { label: 'Profit Calculator', href: '#calculator' },
              { label: 'Services', href: '#services' },
              { label: 'About (El-Roi Story)', href: '#about' },
              { label: 'Why Trust Us', href: '#why-us' },
              { label: 'FAQ', href: '#faq' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-white/5 text-base font-semibold text-gray-200 hover:text-amber-400 border border-transparent hover:border-white/10 transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoreCheck();
              }}
              className="w-full btn-gold-primary py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 shadow-2xl active:scale-98"
            >
              <span>Get My Free Store Check</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              Takes 2 minutes. 100% free. No obligation.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
