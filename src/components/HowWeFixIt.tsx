'use client';

import { motion } from 'framer-motion';
import { Search, Brain, Cpu, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface HowWeFixItProps {
  onOpenStoreCheck: () => void;
}

export default function HowWeFixIt({ onOpenStoreCheck }: HowWeFixItProps) {
  const steps = [
    {
      num: "1",
      title: "We Look",
      icon: Search,
      description:
        "We go through your store the way a customer would, and find exactly where you’re losing sales or wasting time.",
      detail: "Audit checkout flow, listing load times & customer drops.",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      num: "2",
      title: "We Think",
      icon: Brain,
      description:
        "We bring in smart tools where they matter most — product pages, pricing, and personalization.",
      detail: "Formulate store strategy with AI & automated workflows.",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      num: "3",
      title: "We Automate",
      icon: Cpu,
      description:
        "We set up systems that keep running without you — checkout, listings, and follow-ups, handled correctly, every time.",
      detail: "Deploy self-running inventory, email sequences & SEO.",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      num: "4",
      title: "You Profit",
      icon: TrendingUp,
      description:
        "Everything we do is judged by one question: did it make you more money?",
      detail: "Track actual revenue returns and hours saved every week.",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#08090E] relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-purple-radial pointer-events-none opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>The ROI Method</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Here’s exactly <span className="text-gradient-gold">what we do.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            No jargon. Four steps that turn a leaking store into a growing one.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card p-6 rounded-2xl relative flex flex-col justify-between border border-white/10 hover:border-amber-500/50 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-gray-700/60 font-mono group-hover:text-amber-400/40 transition-colors">
                      0{step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {step.num}. {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Detail Badge */}
                <div className="pt-4 border-t border-white/10">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md border inline-block ${step.badgeColor}`}>
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 group shadow-xl"
          >
            <span>Start Step 1: Get Your Free Store Check</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
