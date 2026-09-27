'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, ArrowUpRight, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenStoreCheck: () => void;
}

export default function Hero({ onOpenStoreCheck }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow Radial Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-purple-radial pointer-events-none blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] glow-gold-radial pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <Eye className="w-4 h-4 text-purple-400" />
              <span>Smarter Stores. Bigger Returns.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              We See What’s Costing <br className="hidden sm:block" />
              Your Store <span className="text-gradient-gold">Money.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              ROI finds the hidden problems in your online store — then fixes them with smart automation, so you sell more without doing more.
            </p>

            {/* CTA & Trust Badge */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenStoreCheck}
                  className="btn-gold-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 shadow-xl group"
                >
                  <span>Get My Free Store Check</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <a
                  href="#how-it-works"
                  className="btn-purple-outline px-6 py-4 rounded-xl text-base font-medium flex items-center justify-center gap-2"
                >
                  <span>See How We Spot Leaks</span>
                </a>
              </div>

              <p className="text-xs text-gray-400 flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Takes 2 minutes. No obligation. Zero jargon.</span>
              </p>
            </div>

            {/* Platform Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <span className="text-gray-500 uppercase font-mono tracking-wider">Built for:</span>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Shopify Stores
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                WordPress & WooCommerce
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic: Interactive Store Diagnostic Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-card p-6 border border-purple-500/30 overflow-hidden shadow-2xl">
              {/* Top Glass Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400">ROI-Scanner-v2.4 // Live Audit</span>
                </div>
                <span className="text-[11px] bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-mono">
                  EL-ROI DIAGNOSTIC ACTIVE
                </span>
              </div>

              {/* Central Logo Radar graphic */}
              <div className="relative flex items-center justify-center py-6 my-2 bg-purple-950/20 rounded-xl border border-purple-500/20">
                <div className="absolute inset-0 bg-radial from-purple-600/10 to-transparent rounded-xl" />
                
                {/* Logo Image in Center */}
                <div className="relative w-24 h-24 rounded-2xl bg-black/60 p-2 border-2 border-purple-500/50 shadow-2xl flex items-center justify-center">
                  <Image
                    src="/logo-mark.jpg"
                    alt="ROI Eye Aperture"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-black animate-ping" />
                </div>
              </div>

              {/* Simulated Live Leak Detections */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-semibold text-rose-200">
                      <span>Checkout Leak Detected</span>
                      <span className="text-rose-400">-34% Abandonment</span>
                    </div>
                    <p className="text-gray-400 mt-0.5">68 out of 100 buyers drop off at payment step.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-semibold text-amber-200">
                      <span>Manual Busywork Waste</span>
                      <span className="text-amber-400">14 hrs/week lost</span>
                    </div>
                    <p className="text-gray-400 mt-0.5">Stock & price updates handled by hand.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/40 flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-semibold text-white">
                      <span>ROI Automated Solution</span>
                      <span className="text-amber-400 font-bold">+28% Recovered Revenue</span>
                    </div>
                    <p className="text-gray-300 mt-0.5">Smart AI sequence & checkout automation ready.</p>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Non-invasive check
                </span>
                <span className="text-amber-400 font-mono">Spot The Leak • Keep The Profit</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
