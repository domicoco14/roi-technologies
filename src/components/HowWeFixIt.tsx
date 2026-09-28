'use client';

import { motion } from 'framer-motion';
import { Search, Brain, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

interface HowWeFixItProps {
  onOpenStoreCheck: () => void;
}

export default function HowWeFixIt({ onOpenStoreCheck }: HowWeFixItProps) {
  const steps = [
    {
      num: "01",
      title: "We Look",
      icon: Search,
      description:
        "We go through your store the way a customer would, and find exactly where you’re losing sales or wasting time.",
    },
    {
      num: "02",
      title: "We Think",
      icon: Brain,
      description:
        "We bring in smart tools where they matter most — product pages, pricing, and personalization.",
    },
    {
      num: "03",
      title: "We Automate",
      icon: Cpu,
      description:
        "We set up systems that keep running without you — checkout, listings, and follow-ups, handled correctly, every time.",
    },
    {
      num: "04",
      title: "You Profit",
      icon: TrendingUp,
      description:
        "Everything we do is judged by one question: did it make you more money?",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#06070B] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            The ROI Method
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Here’s exactly <span className="text-gray-400">what we do.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/5 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-gray-700">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-7 py-3.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
          >
            <span>Start Step 1: Get Your Free Store Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
