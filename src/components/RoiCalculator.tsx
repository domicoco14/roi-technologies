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
    <section id="calculator" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Interactive Profit Estimator
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Much Money Is Your Store <br className="hidden sm:block" />
            <span className="text-slate-500">Quietly Losing Each Month?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Drag the slider to your store's estimated monthly sales to see how much revenue you could recover.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-8">
          
          {/* Slider input */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Estimated Monthly Store Revenue
              </label>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono bg-slate-50 px-4 py-1 rounded-lg border border-slate-200">
                ${monthlyRevenue.toLocaleString()} <span className="text-xs text-slate-500 font-sans">/mo</span>
              </span>
            </div>

            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 focus:outline-none"
            />

            <div className="flex justify-between text-[11px] text-slate-500 font-mono font-medium">
              <span>$2,000 / mo</span>
              <span>$50,000 / mo</span>
              <span>$100,000+ / mo</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            
            <div className="p-5 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700">
                Estimated Monthly Leak
              </div>
              <div className="text-2xl font-extrabold text-rose-900 font-mono">
                ~${estimatedLeak.toLocaleString()} <span className="text-xs text-rose-600 font-sans">/mo</span>
              </div>
              <p className="text-xs text-rose-700 pt-1">
                Lost via abandoned carts & unoptimized store steps.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                Annual Profit Opportunity
              </div>
              <div className="text-2xl font-extrabold text-amber-900 font-mono">
                +${annualLoss.toLocaleString()} <span className="text-xs text-amber-700 font-sans">/year</span>
              </div>
              <p className="text-xs text-amber-800 pt-1">
                Recoverable income with automated systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700">
                Manual Hours Saved
              </div>
              <div className="text-2xl font-extrabold text-purple-900 font-mono">
                ~{hoursSaved} hrs <span className="text-xs text-purple-600 font-sans">/wk</span>
              </div>
              <p className="text-xs text-purple-700 pt-1">
                Saved on repetitive listings & catalog updates.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600 font-medium">Want to verify your store's exact profit leak numbers?</span>
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
