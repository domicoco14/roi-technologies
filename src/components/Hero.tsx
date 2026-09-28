'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenStoreCheck: () => void;
}

export default function Hero({ onOpenStoreCheck }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#222222] text-gray-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Smarter Stores. Bigger Returns.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              We See What’s Costing <br className="hidden sm:block" />
              Your Store <span className="text-amber-400">Money.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              ROI finds the hidden problems in your online store — then fixes them with smart automation, so you sell more without doing more.
            </p>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenStoreCheck}
                  className="btn-gold-primary px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group"
                >
                  <span>Get My Free Store Check</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href="#how-it-works"
                  className="btn-purple-outline px-6 py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              <p className="text-xs text-gray-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Takes 2 minutes. No obligation. Zero jargon.</span>
              </p>
            </div>

            {/* Platforms */}
            <div className="pt-6 border-t border-[#1C1C1C] flex items-center gap-6 text-xs text-gray-400">
              <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider">Built for:</span>
              <span className="text-gray-300 font-medium">Shopify</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-300 font-medium">WordPress & WooCommerce</span>
            </div>
          </motion.div>

          {/* Right Clean Graphic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#1C1C1C] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black p-0.5 border border-[#333333]">
                    <Image src="/logo-mark.jpg" alt="ROI Logo" fill className="object-contain" />
                  </div>
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">ROI Store Scanner</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Ready
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-xs text-gray-300">Checkout Drop-off Recovery</span>
                  <span className="text-xs font-mono font-bold text-amber-400">+24% Sales</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-xs text-gray-300">Automated Product Sync</span>
                  <span className="text-xs font-mono font-bold text-purple-300">14 hrs/wk saved</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-xs text-gray-300">Overnight Customer Response</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">100% Active</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-gray-500 font-mono">
                Spot The Leak • Keep The Profit
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
