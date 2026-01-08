import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { EASE_PREMIUM } from '../ui';

interface SolutionItem {
  question: string; // The title of the accordion item
  answer: string;   // The content
}

interface CustomSolutionsProps {
  items: SolutionItem[];
  className?: string;
}

export const CustomSolutions: React.FC<CustomSolutionsProps> = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 w-full ${className}`}>
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={false}
          whileHover={{ x: 4, backgroundColor: 'rgba(23, 23, 23, 0.8)' }}
          className={`border rounded-lg bg-neutral-900/20 overflow-hidden transition-colors duration-300 ${activeIndex === idx ? 'border-accent/30 bg-neutral-900/40' : 'border-white/5 hover:border-white/10'}`}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            aria-expanded={activeIndex === idx}
          >
            <span className={`font-medium text-base md:text-lg pr-4 transition-colors ${activeIndex === idx ? 'text-accent' : 'text-foreground'}`}>
              {item.question}
            </span>
            {activeIndex === idx ? (
              <Minus size={18} className="text-accent flex-shrink-0" />
            ) : (
              <Plus size={18} className="text-muted flex-shrink-0" />
            )}
          </button>
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              >
                <div className="p-6 pt-0 text-muted text-sm md:text-base leading-relaxed max-w-3xl">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
