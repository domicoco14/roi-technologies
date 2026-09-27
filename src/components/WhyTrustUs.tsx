'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Users, ArrowUpRight } from 'lucide-react';

interface WhyTrustUsProps {
  onOpenStoreCheck: () => void;
}

export default function WhyTrustUs({ onOpenStoreCheck }: WhyTrustUsProps) {
  const stats = [
    {
      value: "2+ Years",
      label: "Hands-on E-Commerce Experience",
      desc: "Running & scaling real Shopify & WordPress stores.",
    },
    {
      value: "Zero Jargon",
      label: "100% Plain English Guarantees",
      desc: "No confusing consultant buzzwords.",
    },
    {
      value: "24/7",
      label: "Automated Systems Active",
      desc: "Your store never stops capturing revenue.",
    },
    {
      value: "100%",
      label: "Non-Invasive Store Check",
      desc: "Zero code changes until you approve.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B0D14] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] glow-gold-radial pointer-events-none opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Trust Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built from real stores, <span className="text-gradient-gold">not theory.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Over two years spent running and growing real Shopify and WordPress stores. ROI wasn’t built in a classroom — it was built by watching what actually makes stores win and lose money.
          </p>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 text-left space-y-3"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block font-mono">
                {stat.value}
              </span>
              <h3 className="text-base font-bold text-white">{stat.label}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Conversion Section */}
        <div className="mt-20 p-10 rounded-3xl glass-card border border-purple-500/40 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute inset-0 glow-purple-radial pointer-events-none opacity-30" />
          
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-mono text-purple-300 uppercase tracking-widest bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
              Final Call-to-Action
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              What Is Your Store Missing?
            </h3>
            <p className="text-base text-gray-300">
              Find out in one free check — no pressure, no sales pitch. Just answers.
            </p>
          </div>

          <div className="pt-2 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStoreCheck}
              className="btn-gold-primary px-9 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 group shadow-2xl"
            >
              <span>Get My Free Store Check</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <p className="text-xs text-gray-400 flex items-center justify-center gap-2 relative z-10">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Takes 2 minutes. 100% free. No obligation.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
