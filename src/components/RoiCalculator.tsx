'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenStoreCheck: () => void;
}

export default function RoiCalculator({ onOpenStoreCheck }: RoiCalculatorProps) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(15000);

  const estimatedLeak = Math.round(monthlyRevenue * 0.18);
  const annualLoss = estimatedLeak * 12;
  const hoursSaved = Math.min(25, Math.round(8 + (monthlyRevenue / 5000)));

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-[#08090E] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
            Profit Opportunity Calculator
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Much Money Is Your Store <br className="hidden sm:block" />
            <span className="text-gray-400">Quietly Losing Each Month?</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Drag the slider to your estimated monthly sales to see how much revenue you could be recovering.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/5 space-y-8">
          
          {/* Slider input */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Current Estimated Monthly Revenue
              </label>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                ${monthlyRevenue.toLocaleString()} <span className="text-xs text-gray-400 font-sans">/mo</span>
              </span>
            </div>

            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
            />

            <div className="flex justify-between text-[11px] text-gray-500 font-mono">
              <span>$2,000 / mo</span>
              <span>$50,000 / mo</span>
              <span>$100,000+ / mo</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
            
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                Estimated Monthly Leak
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">
                ~${estimatedLeak.toLocaleString()} <span className="text-xs text-gray-500 font-sans">/mo</span>
              </div>
              <p className="text-xs text-gray-400 pt-1">
                Lost via checkout drop-offs & missing cart recovery.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-amber-500/20 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                Annual Profit Opportunity
              </div>
              <div className="text-2xl font-extrabold text-amber-300 font-mono">
                +${annualLoss.toLocaleString()} <span className="text-xs text-gray-500 font-sans">/year</span>
              </div>
              <p className="text-xs text-amber-100/70 pt-1">
                Potential recovered revenue with automated fixes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                Manual Hours Saved
              </div>
              <div className="text-2xl font-extrabold text-purple-300 font-mono">
                ~{hoursSaved} hrs <span className="text-xs text-gray-500 font-sans">/wk</span>
              </div>
              <p className="text-xs text-gray-400 pt-1">
                Automated listing updates & inventory sync.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">Ready to verify your store's exact numbers?</span>
            <button
              onClick={onOpenStoreCheck}
              className="btn-gold-primary px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <span>Verify My Store Leaks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
