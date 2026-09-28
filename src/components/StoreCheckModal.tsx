'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Store, Send, MessageSquare, Mail } from 'lucide-react';

interface StoreCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoreCheckModal({ isOpen, onClose }: StoreCheckModalProps) {
  const [platform, setPlatform] = useState<'shopify' | 'wordpress' | 'other'>('shopify');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    storeUrl: '',
    name: '',
    contact: '',
    note: '',
  });

  const phoneNumber = "08088103400";
  const whatsappNumber = "2348088103400";
  const emailAddress = "roismarttechnologiesltd@gmail.com";

  if (!isOpen) return null;

  const generatedMsg = `Hello ROI Technology! My name is ${formData.name || 'a store owner'}. I would like to request a free store check / order for my store (${formData.storeUrl || 'Store Link'}). Platform: ${platform}. Contact: ${formData.contact}.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generatedMsg)}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent("Store Audit / Order Request - ROI Technology")}&body=${encodeURIComponent(generatedMsg)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                  <Store className="w-3.5 h-3.5 text-amber-600" />
                  <span>Free Non-Invasive Audit</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Get My Free Store Check
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Find out what’s quietly costing your store money — zero pressure, no sales pitch. Just direct answers.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Platform selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. What platform is your store built on?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPlatform('shopify')}
                      className={`py-2.5 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        platform === 'shopify'
                          ? 'bg-purple-50 border-purple-400 text-purple-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Shopify
                    </button>

                    <button
                      type="button"
                      onClick={() => setPlatform('wordpress')}
                      className={`py-2.5 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        platform === 'wordpress'
                          ? 'bg-purple-50 border-purple-400 text-purple-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      WordPress
                    </button>

                    <button
                      type="button"
                      onClick={() => setPlatform('other')}
                      className={`py-2.5 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        platform === 'other'
                          ? 'bg-purple-50 border-purple-400 text-purple-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Other / New
                    </button>
                  </div>
                </div>

                {/* Store Link */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    2. Store Website Link / Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. mystore.com"
                    value={formData.storeUrl}
                    onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm font-medium"
                  />
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      3. Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      4. Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 08088103400"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-gold-primary py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-sm mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Store Check Request</span>
                </button>

                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                  Takes 2 minutes. We respect your privacy.
                </p>
              </form>
            </div>
          ) : (
            /* Success & Auto Send Options screen */
            <div className="py-4 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Store Check Ready To Send!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
                  Thank you, <strong className="text-amber-700">{formData.name}</strong>! You can automatically send your store details directly to our team now:
                </p>
              </div>

              {/* Direct Messaging Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold-primary py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Send Message via WhatsApp ({phoneNumber})</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="w-full btn-purple-outline py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-slate-700" />
                  <span>Send Email ({emailAddress})</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-emerald-700 font-bold">Call Us: {phoneNumber}</span>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-slate-500 hover:text-slate-900 underline font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
