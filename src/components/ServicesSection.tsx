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
      whatItIs: "A non-invasive audit of your entire online store sales funnel.",
      theProblem: "You know sales should be higher, but can't tell if it's slow load times, checkout friction, or broken mobile layouts.",
      howWeFixIt: "We inspect your checkout steps, page speeds, mobile responsiveness, and tracking tags as a real buyer.",
      whatYouGet: "A direct, zero-jargon report detailing every revenue leak and exact steps to fix them.",
      stats: "Average leak found: 18-35% lost sales",
    },
    {
      id: "ai-automation",
      title: "AI & Automation Setup",
      icon: Bot,
      tagline: "We make your store run itself, error-free, day and night.",
      whatItIs: "We automate the repetitive manual busywork of managing your store.",
      theProblem: "Updating prices, inventory listings, order updates, and product tags by hand eats hours and causes errors.",
      howWeFixIt: "We build custom automated workflows and AI tools designed specifically for Shopify or WordPress.",
      whatYouGet: "Fewer mistakes. Zero hours spent on busywork. A store that keeps capturing revenue even while you sleep.",
      stats: "Saves 10-15 hours every week",
    },
    {
      id: "social-media",
      title: "Social Media Management",
      icon: Share2,
      tagline: "We keep your brand active and consistent without you lifting a finger.",
      whatItIs: "Full-service social media management focused on driving store sales.",
      theProblem: "Posting constantly takes hours you don't have, leaving your profiles quiet and making your store look inactive.",
      howWeFixIt: "We create high-converting visual assets, write compelling store copy, and publish regularly across channels.",
      whatYouGet: "Strong brand presence, customer trust, and continuous buyer traffic back to your product listings.",
      stats: "100% automated posting schedule",
    },
    {
      id: "email-marketing",
      title: "Email Marketing & Recovery",
      icon: Mail,
      tagline: "We win back lost sales and turn one-time buyers into regulars.",
      whatItIs: "Automated cart recovery and customer repeat-buyer retention flows.",
      theProblem: "Over 70% of shoppers add products to cart and leave without buying, never coming back.",
      howWeFixIt: "We set up automated 3-stage email recovery sequences and repeat purchase flows.",
      whatYouGet: "Automatic recovery of lost sales and higher long-term customer revenue.",
      stats: "Recovers up to 25% of abandoned carts",
    },
    {
      id: "seo",
      title: "SEO (Search Engine Growth)",
      icon: Search,
      tagline: "We help new customers actually find your store on Google.",
      whatItIs: "Product catalog and store optimization for high-intent Google search traffic.",
      theProblem: "Your store isn't appearing when ready-to-buy customers search for your products online.",
      howWeFixIt: "We optimize product titles, descriptions, meta tags, and site speed structure.",
      whatYouGet: "Consistent organic search rankings that bring free buyer traffic to your store every month.",
      stats: "Long-term organic traffic growth",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Our Core Services
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything your store needs, <br className="hidden sm:block" />
            <span className="text-slate-500">in one place.</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed px-2">
            Whether you’re launching a new store or growing an existing one, we plug in wherever you need help most.
          </p>
        </div>

        {/* Mobile Horizontal Carousel Tabs */}
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
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
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
          
          {/* Left Vertical Menu */}
          <div className="hidden lg:block lg:col-span-5 space-y-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isSelected = activeService === idx;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-50 border-purple-300 shadow-sm text-slate-900'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-amber-600 text-white font-bold' : 'bg-slate-100 text-purple-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-amber-600' : 'text-slate-400'}`} />
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
                transition={{ duration: 0.2 }}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white space-y-5 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">
                      Service Offering 0{activeService + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold self-start sm:self-auto">
                    {services[activeService].stats}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">What it is:</span>
                    <p className="text-sm sm:text-base text-slate-800 font-medium mt-0.5">{services[activeService].whatItIs}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50 border border-rose-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">The Problem:</span>
                    <p className="text-xs sm:text-sm text-rose-900 mt-1">{services[activeService].theProblem}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50 border border-purple-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800">How We Fix It:</span>
                    <p className="text-xs sm:text-sm text-purple-950 mt-1">{services[activeService].howWeFixIt}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">What You Get:</span>
                    <p className="text-xs sm:text-sm text-amber-950 font-medium mt-1 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{services[activeService].whatYouGet}</span>
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium text-center sm:text-left">Ready to activate this service for your store?</span>
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
