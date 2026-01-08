import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EnterpriseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  stats?: string;
}

interface EnterpriseScroll3DProps {
  items: EnterpriseItem[];
}

const Enterprise3DCard: React.FC<{ item: EnterpriseItem; index: number }> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // 3D Tilt Effect based on scroll position
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Parallax for image content
  const yParallax = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  
  // Scanline effect
  const scanLineTop = useTransform(smoothProgress, [0, 1], ["0%", "200%"]);

  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="min-h-[70vh] flex items-center justify-center py-10 md:py-20 perspective-1000">
      <motion.div 
        style={{ 
          rotateX, 
          scale, 
          opacity,
          transformStyle: "preserve-3d" 
        }}
        className="relative w-full max-w-7xl mx-auto px-4"
      >
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          
          {/* Visual Column */}
          <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`} style={{ transform: "translateZ(20px)" }}>
             {/* Main Image Container */}
             <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl group-hover:border-accent/30 transition-colors duration-500 aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                {/* Image with Parallax */}
                <motion.div style={{ y: yParallax }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                </motion.div>
                
                {/* Holographic Overlay Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                
                {/* Animated Scanline */}
                <motion.div 
                    style={{ top: scanLineTop }}
                    className="absolute left-0 w-full h-1 bg-accent/50 shadow-[0_0_20px_rgba(197,160,89,0.5)] z-20 blur-[1px]" 
                />

                {/* Floating Stat Badge */}
                {item.stats && (
                    <motion.div 
                        className="absolute top-6 right-6 z-30 bg-black/60 backdrop-blur-md border border-accent/30 px-4 py-2 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                           {item.stats}
                        </span>
                    </motion.div>
                )}
             </div>

             {/* Background Glow */}
             <div className="absolute -inset-10 bg-accent/5 blur-[80px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Content Column */}
          <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`} style={{ transform: "translateZ(0px)" }}>
             {/* Number Watermark */}
             <div className="absolute -top-20 -left-10 text-[180px] font-black text-white/5 select-none pointer-events-none z-0 leading-none">
                 0{index + 1}
             </div>

             <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                     <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                         <item.icon size={24} />
                     </div>
                     <span className="text-sm font-mono text-accent uppercase tracking-widest border-l border-accent/30 pl-4">{item.subtitle}</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{item.title}</h2>
                 
                 <p className="text-lg text-muted leading-relaxed mb-8 border-l-2 border-white/5 pl-6">
                     {item.description}
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {item.features.map((feat, fIdx) => (
                         <motion.div 
                            key={fIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: fIdx * 0.1 }}
                            className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/10 transition-colors"
                         >
                             <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_5px_#C5A059]"></div>
                             <span className="text-sm text-white/90">{feat}</span>
                         </motion.div>
                     ))}
                 </div>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export const EnterpriseScroll3D: React.FC<EnterpriseScroll3DProps> = ({ items }) => {
  return (
    <div className="w-full relative z-10">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block -translate-x-1/2"></div>
        
        {items.map((item, idx) => (
            <Enterprise3DCard key={idx} item={item} index={idx} />
        ))}
    </div>
  );
};
