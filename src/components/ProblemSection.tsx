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
        "Most stores lose the majority of shoppers right before they complete payment — and never find out why.",
      impact: "Lost checkout revenue",
    },
    {
      icon: Clock,
      quote: "There’s never enough time.",
      description:
        "Updating product listings, inventory levels, and prices by hand eats hours you don’t have.",
      impact: "Wasted manual hours",
    },
    {
      icon: Moon,
      quote: "Your store never sleeps. You do.",
      description:
        "Without automation, your online business stops engaging buyers the moment you log off.",
      impact: "Zero overnight sales follow-up",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            The Hidden Leak
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Every store is losing money somewhere. <br className="hidden sm:block" />
            <span className="text-slate-500">Most owners just can’t see it.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Maybe it’s shoppers abandoning carts at checkout. Maybe it’s hours wasted updating products by hand. Maybe it’s a store that goes quiet when you log off. Small leaks add up fast — and they are easy to miss until someone looks closely.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    “{item.quote}”
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">Core Impact:</span>
                  <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{item.impact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Want to find out where your store is quietly leaking money?</h4>
            <p className="text-xs text-slate-500">Our free 2-minute store check pinpoints revenue leaks with zero obligation.</p>
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
