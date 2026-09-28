'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Moon, ArrowRight } from 'lucide-react';

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
      impact: "Lost checkout revenue",
    },
    {
      icon: Clock,
      quote: "There’s never enough time.",
      description:
        "Updating listings, prices, and stock by hand eats hours you don’t have.",
      impact: "Wasted manual hours",
    },
    {
      icon: Moon,
      quote: "Your store never sleeps. You do.",
      description:
        "Without automation, your business stops working the moment you log off.",
      impact: "Zero overnight follow-up",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-24 bg-[#08090E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
            The Hidden Leak
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every store is losing money somewhere. <br className="hidden sm:block" />
            <span className="text-gray-400">Most owners just can’t see it.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Maybe it’s shoppers leaving at checkout. Maybe it’s hours lost updating products by hand. Maybe it’s a store that goes quiet the moment you log off. Small leaks like these add up fast.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    “{item.quote}”
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span>Impact:</span>
                  <span className="font-mono text-gray-300">{item.impact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Want to find out where your store is leaking?</h4>
            <p className="text-xs text-gray-400">Our free 2-minute store check pinpoints revenue leaks.</p>
          </div>
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0"
          >
            <span>Check My Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
