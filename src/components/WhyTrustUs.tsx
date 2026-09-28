'use client';

import { motion } from 'framer-motion';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface WhyTrustUsProps {
  onOpenStoreCheck: () => void;
}

export default function WhyTrustUs({ onOpenStoreCheck }: WhyTrustUsProps) {
  const stats = [
    {
      value: "2+ Years",
      label: "Hands-on E-Commerce Experience",
      desc: "Running & growing real Shopify & WordPress stores.",
    },
    {
      value: "Zero Jargon",
      label: "100% Plain English Guarantees",
      desc: "No confusing consultant buzzwords.",
    },
    {
      value: "24/7",
      label: "Automated Systems Active",
      desc: "Your store never stops capturing sales.",
    },
    {
      value: "100%",
      label: "Non-Invasive Store Check",
      desc: "Zero code changes until you approve.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Real Experience
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built from real stores, <span className="text-slate-500">not theory.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Over two years spent running and growing real Shopify and WordPress stores. ROI Technology wasn’t built in a classroom — it was built by watching what actually makes stores win or lose money.
          </p>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-slate-200 bg-white text-left space-y-2 shadow-xs"
            >
              <span className="text-3xl font-extrabold text-amber-600 block font-mono">
                {stat.value}
              </span>
              <h3 className="text-sm font-extrabold text-slate-900">{stat.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Conversion CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center relative shadow-sm space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold text-purple-700 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Free Diagnostic Check
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Is Your Store Missing?
            </h3>
            <p className="text-sm text-slate-600">
              Find out in one free check — no pressure, no sales pitch. Just direct answers.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenStoreCheck}
              className="btn-gold-primary px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Get My Free Store Check</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Takes 2 minutes. 100% free. No obligation.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
