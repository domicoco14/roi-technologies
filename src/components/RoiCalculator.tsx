'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenStoreCheck: () => void;
}

export default function RoiCalculator({ onOpenStoreCheck }: RoiCalculatorProps) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(15000);

  // Estimations logic based on standard e-commerce leak averages (15-28% dropoff + manual busywork)
  const estimatedLeak = Math.round(monthlyRevenue * 0.18);
  const annualLoss = estimatedLeak * 12;
  const hoursSaved = Math.min(25, Math.round(8 + (monthlyRevenue / 5000)));

  return (
    <section className="py-24 bg-[#090A10] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-gold-radial pointer-events-none opacity-25 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Profit Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How Much Money Is Your Store <br className="hidden sm:block" />
            <span className="text-gradient-gold">Quietly Losing Each Month?</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Drag the slider to your estimated monthly sales to see how much revenue you could be recovering with automated store optimization.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-10">
          
          {/* Slider input section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Current Estimated Monthly Store Revenue
              </label>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono bg-white/5 px-4 py-1.5 rounded-xl border border-white/10">
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
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
            />

            <div className="flex justify-between text-xs text-gray-500 font-mono">
              <span>$2,000 / mo</span>
              <span>$50,000 / mo</span>
              <span>$100,000+ / mo</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            
            {/* Card 1: Estimated Monthly Leak */}
            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2 text-left">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <DollarSign className="w-4 h-4" />
                <span>Estimated Monthly Leak</span>
              </div>
              <div className="text-3xl font-extrabold text-rose-200 font-mono">
                ~${estimatedLeak.toLocaleString()} <span className="text-xs font-sans text-gray-400">/mo</span>
              </div>
              <p className="text-xs text-gray-400">
                Lost via abandoned checkouts, slow product pages & unoptimized follow-ups.
              </p>
            </div>

            {/* Card 2: Annual Recoverable Revenue */}
            <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-2 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 glow-gold-radial pointer-events-none opacity-50" />
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Annual Profit Opportunity</span>
              </div>
              <div className="text-3xl font-extrabold text-amber-300 font-mono">
                +${annualLoss.toLocaleString()} <span className="text-xs font-sans text-gray-400">/year</span>
              </div>
              <p className="text-xs text-amber-100/80">
                Potential recovered revenue keeping your profit where it belongs.
              </p>
            </div>

            {/* Card 3: Hours Saved per week */}
            <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2 text-left">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Manual Hours Saved</span>
              </div>
              <div className="text-3xl font-extrabold text-purple-200 font-mono">
                ~{hoursSaved} hrs <span className="text-xs font-sans text-gray-400">/week</span>
              </div>
              <p className="text-xs text-gray-400">
                Automated listing updates, inventory sync & AI customer support.
              </p>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-base font-bold text-white">Ready to stop losing this revenue?</h4>
              <p className="text-xs text-gray-300">We inspect your store for free to verify your exact numbers.</p>
            </div>

            <button
              onClick={onOpenStoreCheck}
              className="btn-gold-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-xl"
            >
              <span>Verify My Store Leaks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
