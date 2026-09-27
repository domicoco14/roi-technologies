'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Shield, Sparkles, Target, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenStoreCheck: () => void;
}

export default function AboutSection({ onOpenStoreCheck }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-[#08090E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] glow-purple-radial pointer-events-none opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Graphic - Brand Logo & Vision Concept */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative glass-card p-8 rounded-3xl border border-purple-500/40 shadow-2xl text-center space-y-6">
              
              {/* Full Logo Display */}
              <div className="relative w-full h-36 bg-black/50 rounded-2xl border border-purple-500/30 p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-full.jpg"
                  alt="ROI Technology Full Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* El-Roi Meaning Card */}
              <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-left space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>El-Roi (Hebrew Origin)</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white">“The God Who Sees”</strong> — A name for someone who notices what everyone else walks past.
                </p>
              </div>

              {/* ROI Meaning Card */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-left space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Return On Investment</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  The metric every store owner chases. We measure every system by what it earns you back.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Text Content - Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We See What <span className="text-gradient-gold">Others Miss.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                The name <strong className="text-white">ROI</strong> means two things, on purpose. It’s <strong className="text-amber-400">Return on Investment</strong> — the number every business owner is chasing. And it comes from an older idea: <strong className="text-purple-300">El-Roi</strong>, which means <em>“the God who sees.”</em> A name for someone who notices what everyone else walks past.
              </p>
              <p>
                That’s the whole point of ROI. We look at your store closely enough to find what’s actually holding it back — then we use smart technology to fix it, and we measure everything by what it earns you back.
              </p>
              <p className="text-sm text-gray-400 border-l-2 border-purple-500 pl-4 py-1">
                We work with Shopify and WordPress stores — brand new or already running — across social media, email, SEO, and the automation that ties it all together.
              </p>
            </div>

            {/* Featured Quote Box */}
            <div className="p-6 rounded-2xl glass-panel border-l-4 border-amber-400 border-y border-r border-white/10 space-y-2">
              <p className="text-base sm:text-lg font-semibold italic text-amber-100">
                “We don’t just manage stores. We find what’s quietly costing you money — and turn it into what you gain.”
              </p>
              <span className="text-xs text-amber-400 font-mono tracking-wider uppercase block">
                — The ROI Technology Promise
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStoreCheck}
                className="btn-gold-primary px-7 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-lg"
              >
                <span>Get Your Free Store Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
