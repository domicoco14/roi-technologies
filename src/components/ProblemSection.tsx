'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Moon, AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenStoreCheck: () => void;
}

export default function ProblemSection({ onOpenStoreCheck }: ProblemSectionProps) {
  const painPoints = [
    {
      icon: ShoppingBag,
      quote: "Where did that sale go?",
      description:
        "Most stores lose the majority of shoppers right before they buy, and never find out why.",
      impact: "Lost checkout revenue every single day",
      color: "purple",
    },
    {
      icon: Clock,
      quote: "There’s never enough time.",
      description:
        "Updating listings, prices, and stock by hand eats hours you don’t have.",
      impact: "Hours wasted on manual repetitive busywork",
      color: "gold",
    },
    {
      icon: Moon,
      quote: "Your store never sleeps. You do.",
      description:
        "Without automation, your business stops working the moment you log off.",
      impact: "Zero customer follow-up overnight",
      color: "purple",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#0B0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>The Hidden Reality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Every store is losing money somewhere. <br className="hidden sm:block" />
            <span className="text-gradient-purple">Most owners just can’t see it.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Maybe it’s shoppers leaving at checkout. Maybe it’s hours lost updating products by hand. Maybe it’s a store that goes quiet the moment you log off. Small leaks like these add up fast — and they’re easy to miss if you’re not looking for them.
          </p>
        </div>

        {/* 3 Core Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-8 rounded-2xl relative flex flex-col justify-between group hover:border-purple-500/40"
              >
                <div className="space-y-4">
                  {/* Card Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Pain Point Quote */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    “{item.quote}”
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Impact Indicator */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Impact:</span>
                  <span className="text-rose-400 font-semibold bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                    {item.impact}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-16 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg font-bold text-white">Want to find out where your store is leaking?</h4>
            <p className="text-sm text-gray-400">Our free 2-minute store check pinpoints exact revenue leaks.</p>
          </div>
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0"
          >
            <span>Check My Store Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
