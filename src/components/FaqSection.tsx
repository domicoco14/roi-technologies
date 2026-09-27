'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenStoreCheck: () => void;
}

export default function FaqSection({ onOpenStoreCheck }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the Free Store Check work?",
      a: "We go through your store the way a real customer would, and run a complete non-invasive audit of your checkout speed, product pages, and abandoned sales flow. Zero code changes are made until you approve.",
    },
    {
      q: "Do you work with Shopify or WordPress?",
      a: "Both! We specialize in Shopify stores and WordPress/WooCommerce platforms — whether your store is brand new or already doing high sales volume.",
    },
    {
      q: "Will setting up automation slow down my store?",
      a: "Never. In fact, one of our main priorities during the store health check is removing bloated scripts and optimizing page load speeds so your store runs faster and converts better.",
    },
    {
      q: "What if I’m just starting out and don't have high traffic yet?",
      a: "That’s actually the best time to build a leak-free store! Setting up automated checkout follow-ups and AI workflows early means every visitor you get has a much higher chance of converting.",
    },
    {
      q: "How quickly do we see results?",
      a: "Checkout recovery sequences and automated email flows start capturing abandoned sales within hours of being turned on.",
    },
    {
      q: "Is there any long-term contract or sales pressure?",
      a: "None. No consultant jargon, no long contracts, and no pressure. Everything we do is plain English and judged by one question: did it make you more money?",
    },
  ];

  return (
    <section className="py-24 bg-[#08090E] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-purple">Questions.</span>
          </h2>

          <p className="text-base text-gray-300">
            No jargon. Plain answers to help you understand exactly what we do.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
          <p className="text-sm text-gray-300">Have a specific question about your Shopify or WordPress store?</p>
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
          >
            <span>Ask Us In Your Free Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
