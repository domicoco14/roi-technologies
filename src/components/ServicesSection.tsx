'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Bot, Share2, Mail, Search, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenStoreCheck: () => void;
}

export default function ServicesSection({ onOpenStoreCheck }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "store-health",
      title: "Store Health Check",
      icon: Activity,
      tagline: "We find out exactly what’s costing you sales.",
      whatItIs: "A complete non-invasive audit of your entire online store funnel.",
      theProblem: "You know sales are lower than they should be, but can't pinpoint if it's slow loading, broken checkout buttons, or poor mobile formatting.",
      howWeFixIt: "We go line-by-line through your checkout flow, page speeds, mobile responsiveness, and tracking scripts as a real buyer.",
      whatYouGet: "A clear, zero-jargon breakdown of every leak + priority action steps to fix them immediately.",
      stats: "Average leak found: 18-35% lost revenue",
    },
    {
      id: "ai-automation",
      title: "AI & Automation Setup",
      icon: Bot,
      tagline: "We make your store run itself, error-free, day and night.",
      whatItIs: "We take the repetitive parts of running your store off your plate.",
      theProblem: "Updating prices, inventory listings, order updates, and checkout steps by hand wastes time and causes mistakes.",
      howWeFixIt: "We map your store’s workflow, then set up custom automation and AI tools built specifically for Shopify or WordPress.",
      whatYouGet: "Fewer errors. Fewer hours spent on busywork. A store that keeps working even when you’re offline.",
      stats: "Saves 10-15 hours of manual work every week",
    },
    {
      id: "social-media",
      title: "Social Media Management",
      icon: Share2,
      tagline: "We keep your brand active and consistent, without you lifting a finger.",
      whatItIs: "Full-service content creation and brand management tailored to store growth.",
      theProblem: "Posting constantly takes hours you don't have, leaving your social pages quiet and store looking inactive to new buyers.",
      howWeFixIt: "We design high-converting visual assets, write compelling store copy, and schedule posts across all active channels.",
      whatYouGet: "Consistent brand presence, build customer trust, and drive continuous traffic back to your product listings.",
      stats: "100% automated posting schedule",
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      icon: Mail,
      tagline: "We win back lost sales and turn one-time buyers into regulars.",
      whatItIs: "Automated abandon-cart recovery and customer retention sequences.",
      theProblem: "Over 70% of shoppers add items to cart and walk away without buying, never to return.",
      howWeFixIt: "We set up automated 3-part email recovery triggers and repeat-buyer nurture flows.",
      whatYouGet: "Automatic recovery of abandoned carts and higher customer lifetime value on autopilot.",
      stats: "Recovers up to 25% of abandoned carts",
    },
    {
      id: "seo",
      title: "SEO (Search Optimization)",
      icon: Search,
      tagline: "We help new customers actually find your store on Google.",
      whatItIs: "Product and store optimization for high-intent Google search traffic.",
      theProblem: "Your store isn’t showing up when buyers search for your exact products online.",
      howWeFixIt: "We optimize product titles, meta descriptions, image ALT tags, and store speed structure.",
      whatYouGet: "Organic Google search rankings that bring consistent, free buyer traffic every month.",
      stats: "Long-term organic traffic growth",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0B0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <span>What We Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything your store needs, <br className="hidden sm:block" />
            <span className="text-gradient-purple">in one place.</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed px-2">
            Whether you’re just starting out or already selling, we plug in wherever you need help most.
          </p>
        </div>

        {/* Mobile Horizontal Carousel Tabs (Visible on screens < lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none snap-x">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = activeService === idx;

            return (
              <button
                key={service.id}
                onClick={() => setActiveService(idx)}
                className={`snap-start shrink-0 px-4 py-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-black border-amber-300 shadow-lg'
                    : 'bg-white/5 text-gray-300 border-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop & Mobile Responsive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Vertical Menu (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 space-y-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isSelected = activeService === idx;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-950/50 border-purple-500/60 shadow-xl text-white'
                      : 'glass-card border-white/10 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-purple-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-amber-400' : 'text-gray-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Service Active Details Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/40 relative space-y-5 shadow-2xl"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-amber-400 uppercase tracking-wider">
                      Service Offering 0{activeService + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-0.5">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium self-start sm:self-auto">
                    {services[activeService].stats}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">What it is:</span>
                    <p className="text-sm sm:text-base text-gray-200 font-medium mt-0.5">{services[activeService].whatItIs}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-rose-950/30 border border-rose-500/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">The Problem:</span>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">{services[activeService].theProblem}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-purple-950/40 border border-purple-500/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">How We Fix It:</span>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1">{services[activeService].howWeFixIt}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">What You Get:</span>
                    <p className="text-xs sm:text-sm text-amber-100 font-medium mt-1 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{services[activeService].whatYouGet}</span>
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-gray-400 text-center sm:text-left">Ready to activate this service?</span>
                  <button
                    onClick={onOpenStoreCheck}
                    className="btn-gold-primary px-5 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span>Get Free Store Check</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
