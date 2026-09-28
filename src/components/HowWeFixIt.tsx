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
        "We audit your store from a customer's perspective to discover exactly where you're losing buyers or wasting valuable hours.",
    },
    {
      num: "02",
      title: "We Think",
      icon: Brain,
      description:
        "We select smart AI and automation tools tailored for product listings, pricing updates, and personalized buyer journeys.",
    },
    {
      num: "03",
      title: "We Automate",
      icon: Cpu,
      description:
        "We build self-running systems for checkout recovery, inventory syncing, and customer email follow-ups.",
    },
    {
      num: "04",
      title: "You Profit",
      icon: TrendingUp,
      description:
        "Everything we build is measured by one strict test: did it generate more revenue and save you hours?",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            The ROI 4-Step Method
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Here’s exactly <span className="text-slate-500">what we do.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Zero consultant fluff. Four direct steps that turn a leaking store into a high-earning asset.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-300">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
            className="btn-gold-primary px-7 py-3.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-sm"
          >
            <span>Start Step 1: Get Your Free Store Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
