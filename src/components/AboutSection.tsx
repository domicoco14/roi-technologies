'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, Sparkles, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenStoreCheck: () => void;
}

export default function AboutSection({ onOpenStoreCheck }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm space-y-6">
              
              {/* Full Logo Display */}
              <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-full.jpg"
                  alt="ROI Technology Full Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* El-Roi Card */}
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm">
                  <Eye className="w-4 h-4 text-purple-700" />
                  <span>El-Roi (Hebrew Origin)</span>
                </div>
                <p className="text-xs text-purple-950 leading-relaxed font-medium">
                  <strong>“The God Who Sees”</strong> — A name for someone who notices what everyone else walks past without seeing.
                </p>
              </div>

              {/* ROI Card */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                  <Target className="w-4 h-4 text-amber-700" />
                  <span>Return On Investment</span>
                </div>
                <p className="text-xs text-amber-950 leading-relaxed font-medium">
                  The primary metric every business owner chases. We judge every technology system by what it earns you back.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Our Origin & Purpose
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We See What <span className="text-amber-600">Others Miss.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                The name <strong className="text-slate-900 font-bold">ROI</strong> means two things, on purpose. It stands for <strong className="text-amber-700 font-bold">Return on Investment</strong> — the exact number every business owner is striving to increase. And it comes from an older idea: <strong className="text-purple-700 font-bold">El-Roi</strong>, which means <em>“the God who sees.”</em> A name for someone who notices what everyone else walks past.
              </p>
              <p>
                That is the core mission of ROI Technology. We inspect your store closely enough to discover what is quietly holding it back — then we deploy smart technology to fix it, and we measure everything by the actual profit it earns you back.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 border-l-2 border-purple-500 pl-4 py-1">
                We work with Shopify and WordPress stores — brand new or established — across social media, email marketing, SEO, and automated workflows.
              </p>
            </div>

            {/* Quote Card */}
            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-xs space-y-2">
              <p className="text-sm sm:text-base font-bold italic text-slate-800">
                “We don’t just manage stores. We find what’s quietly costing you money — and turn it into what you gain.”
              </p>
              <span className="text-[11px] text-amber-700 font-mono tracking-wider uppercase block font-bold">
                — The ROI Technology Promise
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStoreCheck}
                className="btn-gold-primary px-7 py-3.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-sm"
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
