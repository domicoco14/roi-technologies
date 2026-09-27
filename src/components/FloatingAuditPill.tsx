'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';

interface FloatingAuditPillProps {
  onOpenStoreCheck: () => void;
}

export default function FloatingAuditPill({ onOpenStoreCheck }: FloatingAuditPillProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:block"
        >
          <button
            onClick={onOpenStoreCheck}
            className="btn-gold-primary px-5 py-3 rounded-full text-xs font-bold flex items-center gap-2.5 shadow-2xl border border-amber-300/40 group hover:scale-105 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <Eye className="w-4 h-4 text-black" />
            <span>Free Store Leak Check</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
