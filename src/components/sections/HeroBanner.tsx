import React from 'react';
import { motion } from 'framer-motion';
import { Badge, ANIMATION_VARIANTS, EASE_PREMIUM } from '../ui';
import { config } from '../../config';

interface HeroBannerProps {
  title: React.ReactNode;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
  scene?: React.ReactNode;
  className?: string;
  pattern?: 'grid' | 'dots' | 'none';
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  badge,
  children,
  align = 'center',
  scene,
  className = '',
  pattern = 'grid'
}) => {
  const isLeft = align === 'left';

  return (
    <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-background w-full ${className}`}>
      
      {/* 3D Scene Layer */}
      {config.features.enable3DBackgrounds && scene && (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none h-full w-full overflow-hidden">
          {scene}
        </div>
      )}

      {/* Pattern Layer */}
      {!scene && pattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      )}
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isLeft ? 'text-left' : 'text-center'}`}>
        
        {badge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={`mb-6 md:mb-8 ${isLeft ? '' : 'flex justify-center'}`}
          >
            <Badge>{badge}</Badge>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInScale}
        >
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-5xl text-foreground break-words ${isLeft ? '' : 'mx-auto'}`}>
              {title}
            </h1>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
            className={`text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl leading-relaxed text-muted/80 ${isLeft ? '' : 'mx-auto'}`}
          >
            {subtitle}
          </motion.div>
        )}

        <motion.div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-5 ${isLeft ? '' : 'justify-center items-center'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_PREMIUM }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};