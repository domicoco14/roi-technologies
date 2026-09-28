'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenStoreCheck: () => void;
}

export default function FaqSection({ onOpenStoreCheck }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the Free Store Check work?",
      a: "We inspect your store the way a real buyer would, and run non-invasive speed, mobile formatting, and checkout diagnostics. Zero code changes are made until you explicitly approve.",
    },
    {
      q: "Do you specialize in Shopify or WordPress?",
      a: "Both! We specialize in Shopify stores and WordPress/WooCommerce platforms — whether your store is brand new or generating high sales volume.",
    },
    {
      q: "Will setting up automation slow down my store?",
      a: "Never. In fact, optimizing store loading speed and removing bloated scripts is a key part of our audit so your pages load faster and convert better.",
    },
    {
      q: "What if I’m just starting out and don't have high sales yet?",
      a: "That is the best time to set up a leak-free store! Setting up automated cart recovery and AI customer support early ensures every visitor you get has the highest chance of buying.",
    },
    {
      q: "How quickly do we see results?",
      a: "Automated cart recovery emails and checkout triggers start capturing abandoned sales within hours of being activated.",
    },
    {
      q: "Is there any long-term contract or sales pressure?",
      a: "None at all. No jargon, no long contracts, and no sales pitch. Everything we build is judged by one test: did it generate more revenue for your store?",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers. <span className="text-slate-500">Zero Jargon.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Direct explanations to help you understand exactly how ROI Technology operates.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:text-purple-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-700' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Have a specific question about your Shopify or WordPress store?</p>
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
          >
            <span>Ask Us In Your Free Store Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
