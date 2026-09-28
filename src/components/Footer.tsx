'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenStoreCheck: () => void;
}

export default function Footer({ onOpenStoreCheck }: FooterProps) {
  const phoneNumber = "08088103400";
  const whatsappNumber = "2348088103400";
  const emailAddress = "roismarttechnologiesltd@gmail.com";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-purple-950/80 p-1 border border-purple-500/40">
                <Image
                  src="/logo-mark.jpg"
                  alt="ROI Logo Eye"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                roi<span className="text-purple-400 font-extrabold">technology</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Uncovering hidden revenue leaks in online Shopify and WordPress stores and fixing them with smart AI & automation. Built for ambitious store owners.
            </p>

            <p className="text-xs text-amber-400 font-mono italic">
              “We don’t just manage stores. We find what’s quietly costing you money — and turn it into what you gain.”
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#problem" className="hover:text-amber-400 transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  How We Fix It
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-amber-400 transition-colors">
                  ROI Profit Calculator
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  About (El-Roi)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Orders */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Direct Contact & Orders
            </h4>
            <p className="text-xs text-slate-400">
              Send in your store orders or audit requests directly to our team:
            </p>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ROI Technology team, I would like to make an inquiry / order for my store.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800/80 text-slate-200 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[10px] text-emerald-400 uppercase font-bold block">WhatsApp & Direct Orders</span>
                  <span className="font-mono font-bold text-white group-hover:text-emerald-300">{phoneNumber}</span>
                </div>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-500 hover:bg-slate-800/80 text-slate-200 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[10px] text-amber-400 uppercase font-bold block">Call Us Directly</span>
                  <span className="font-mono font-bold text-white group-hover:text-amber-300">{phoneNumber}</span>
                </div>
              </a>

              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent("Store Audit / Order Inquiry - ROI Technology")}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-slate-800/80 text-slate-200 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs overflow-hidden">
                  <span className="text-[10px] text-purple-300 uppercase font-bold block">Email Support</span>
                  <span className="font-mono text-white truncate block group-hover:text-purple-200">{emailAddress}</span>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenStoreCheck}
              className="w-full btn-gold-primary py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm mt-2"
            >
              <span>Get Free Store Check</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} ROI Smart Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 font-mono">08088103400</span>
            <span className="text-amber-400 font-mono">El-Roi • Return On Investment</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
