'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenStoreCheck: () => void;
}

export default function Hero({ onOpenStoreCheck }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-44 md:pb-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Smarter Stores • Bigger Returns</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              We See What’s Costing <br className="hidden sm:block" />
              Your Store <span className="text-amber-600">Money.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              ROI uncovers hidden leaks in your online store — then fixes them with smart AI & automation, so you sell more without doing more work.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenStoreCheck}
                  className="btn-gold-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group shadow-sm"
                >
                  <span>Get My Free Store Check</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href="#how-it-works"
                  className="btn-purple-outline px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>See How We Fix Leaks</span>
                </a>
              </div>

              <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Takes 2 minutes. No obligation. Zero consultant jargon.</span>
              </p>
            </div>

            {/* Platform Trust Row */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-6 text-xs text-slate-500">
              <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider font-semibold">Specialized for:</span>
              <span className="text-slate-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Shopify Stores
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> WordPress & WooCommerce
              </span>
            </div>
          </motion.div>

          {/* Right Clean Preview Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-purple-50 p-0.5 border border-purple-200">
                    <Image src="/logo-mark.jpg" alt="ROI Logo" fill className="object-contain" />
                  </div>
                  <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider">Live Leak Diagnostic</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Checkout Drop-off Recovery</span>
                    <span className="text-[11px] text-slate-500">Recovers abandoned carts</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">+24% Sales</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Automated Catalog Sync</span>
                    <span className="text-[11px] text-slate-500">Price & stock updates</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md border border-purple-200">14 hrs/wk saved</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">24/7 Overnight Support</span>
                    <span className="text-[11px] text-slate-500">Instant AI customer response</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">100% Online</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400 font-mono font-medium">
                Spot The Leak • Keep The Profit
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
