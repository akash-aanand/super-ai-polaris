
import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon, ArrowRight, Star, Plus, Minus, Check, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate, Variants } from 'framer-motion';

// --- Motion Tokens & Variants ---

export const EASE_PREMIUM: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // "The Apple Ease"

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: EASE_PREMIUM }
    }
  },
  fadeInScale: { // For Hero Sections
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: EASE_PREMIUM }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    }
  },
  pageTransition: {
    initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: EASE_PREMIUM }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: 'blur(4px)',
      transition: { duration: 0.4, ease: [0.4, 0, 1, 1] as const } 
    }
  }
};

// --- Layout Components ---

export const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-0 w-full ${className}`}>
    {children}
  </section>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  center = false,
  className = '',
  badge
}: { 
  title: string; 
  subtitle?: string; 
  center?: boolean;
  className?: string;
  badge?: string;
}) => (
  <FadeIn className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
    {badge && <Badge className={`mb-4 ${center ? 'mx-auto' : ''}`}>{badge}</Badge>}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 bg-clip-text">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl text-muted leading-relaxed ${center ? 'mx-auto' : ''} max-w-2xl`}>
        {subtitle}
      </p>
    )}
  </FadeIn>
);

// --- Motion Wrappers ---

export const MotionPage = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={ANIMATION_VARIANTS.pageTransition}
    className={`w-full relative overflow-x-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// Standard Fade In Up
export const FadeIn: React.FC<{ children?: React.ReactNode, delay?: number, className?: string, width?: "full" | "auto" }> = ({ 
  children, 
  delay = 0, 
  className = '',
  width = "full"
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }} // Trigger slightly before element is fully in view
    variants={{
      hidden: ANIMATION_VARIANTS.fadeInUp.hidden,
      visible: { 
        ...ANIMATION_VARIANTS.fadeInUp.visible,
        transition: { ...ANIMATION_VARIANTS.fadeInUp.visible.transition, delay }
      }
    }}
    className={`${width === "full" ? "w-full" : "inline-block"} ${className}`}
  >
    {children}
  </motion.div>
);

// Zoom In (Great for Hero visuals or key images)
export const ZoomIn: React.FC<{ children?: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: ANIMATION_VARIANTS.fadeInScale.hidden,
      visible: { 
        ...ANIMATION_VARIANTS.fadeInScale.visible,
        transition: { ...ANIMATION_VARIANTS.fadeInScale.visible.transition, delay }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger Container for Lists/Grids
export const Stagger = ({ children, className = '', delay = 0 }: { children?: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: delay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScrollReveal3D: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <motion.div 
            ref={ref}
            style={{ 
                rotateX, 
                opacity,
                scale,
                transformPerspective: 1000 
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const LogoMarquee = ({ items, speed = 40 }: { items: string[], speed?: number }) => {
  return (
    <div className="w-full overflow-hidden bg-background py-10 relative">
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max">
             <motion.div 
                className="flex items-center"
                animate={{ x: "-50%" }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
             >
                {[...items, ...items].map((item, i) => (
                   <div key={i} className="mx-8 group cursor-default">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-neutral-900/50 border border-white/10 flex flex-col items-center justify-center p-4 text-center shadow-lg group-hover:border-accent/50 group-hover:bg-neutral-900 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all duration-300 backdrop-blur-sm">
                          <div className="w-2 h-2 rounded-full bg-accent/20 mb-2 group-hover:bg-accent transition-colors"></div>
                          <span className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-wider group-hover:text-white transition-colors leading-tight">
                              {item}
                          </span>
                      </div>
                   </div>
                ))}
             </motion.div>
        </div>
     </div>
  )
}

// --- Atoms ---

export const Badge = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-bold tracking-widest bg-accent/10 text-accent border border-accent/20 uppercase ${className}`}>
    {children}
  </span>
);

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  to
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  className?: string;
  onClick?: () => void;
  to?: string;
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none tracking-wide";
  const variants = {
    primary: "bg-foreground text-background hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] px-6 py-3",
    secondary: "bg-background text-foreground border border-border hover:border-accent/50 hover:text-accent px-6 py-3",
    outline: "border border-border bg-transparent text-muted hover:text-foreground hover:border-foreground px-5 py-2",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-neutral-900 px-4 py-2",
    gold: "bg-accent text-black hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] px-6 py-3 font-semibold"
  };

  const content = (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (to) return <Link to={to} className="inline-block">{content}</Link>;
  return content;
};

export interface CardProps {
  children?: React.ReactNode; 
  className?: string; 
  hover?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, noPadding = false }) => (
  <motion.div 
    className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F]/80 backdrop-blur-md h-full flex flex-col ${noPadding ? 'p-0' : 'p-6 md:p-8'} ${className}`}
    variants={ANIMATION_VARIANTS.fadeInUp}
    whileHover={hover ? { 
      y: -8, 
      scale: 1.01, 
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
      borderColor: "rgba(197,160,89, 0.4)",
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    } : {}}
    whileTap={hover ? { scale: 0.98 } : {}}
  >
    {hover && (
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 rounded-2xl transition-colors duration-500 pointer-events-none" />
    )}
    {hover && (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    )}
    
    <div className={`relative z-10 h-full w-full ${noPadding ? '' : 'flex flex-col'}`}>
      {children}
    </div>
  </motion.div>
);

// --- Spotlight 3D Card ---
interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  enableTilt?: boolean;
  enableScrollReveal?: boolean;
  noPadding?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  backgroundImage,
  enableTilt = true,
  enableScrollReveal = true,
  noPadding = false
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const opacityRaw = useMotionValue(0);
  const opacity = useSpring(opacityRaw, { stiffness: 50, damping: 10 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tighter springs for a more "premium/heavy" feel
  const mouseX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 });
  const mouseY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 });

  // Reduced tilt range for subtlety
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  
  // Sheen effect tokens
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "200%"]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "200%"]);
  const sheenGradient = useMotionTemplate`linear-gradient(115deg, transparent, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(197,160,89,0.1) 50%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();

    // Tilt calculations
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    opacityRaw.set(1);
  };

  const handleMouseLeave = () => {
    opacityRaw.set(0);
    x.set(0);
    y.set(0);
  };

  const Content = (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl ${className}`}
      style={{
         perspective: 1000,
      }}
      variants={ANIMATION_VARIANTS.fadeInUp}
      whileHover={{ scale: 1.01 }}
    >
       <motion.div 
         className="h-full relative preserve-3d"
         style={{
            rotateX: enableTilt ? rotateX : 0,
            rotateY: enableTilt ? rotateY : 0,
            transformStyle: "preserve-3d"
         }}
       >
        {/* Cursor Follower Gradient (Spotlight) */}
        <motion.div
            className="pointer-events-none absolute -inset-[150%] opacity-0"
            style={{
                opacity,
                background: useMotionTemplate`radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], ["30%", "70%"])} ${useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"])}, rgba(197, 160, 89, 0.08), transparent 25%)`,
            }}
        />
        
        {/* Light Sweep (Sheen) */}
        <motion.div 
             className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
             style={{
                 opacity: useTransform(opacity, [0, 1], [0, 0.6]),
                 background: sheenGradient,
                 backgroundSize: "200% 200%",
                 backgroundPosition: useMotionTemplate`${sheenX} ${sheenY}`
             }}
        />

        {/* Background Image Layer */}
        {backgroundImage && (
            <div className="absolute inset-0 z-0">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
        )}

        {/* Content */}
        <div className={`relative z-10 h-full ${noPadding ? 'p-0' : 'p-6 md:p-8'} flex flex-col transform-gpu`}>
            {children}
        </div>

        {/* Border Glow */}
        <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
                background: useMotionTemplate`radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], ["40%", "60%"])} ${useTransform(mouseY, [-0.5, 0.5], ["40%", "60%"])}, rgba(197, 160, 89, 0.3), transparent 40%)`,
                opacity: opacity,
                maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px'
            }}
        />
      </motion.div>
    </motion.div>
  );

  return enableScrollReveal ? (
    <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="h-full">
      {Content}
    </motion.div>
  ) : (
    <div className="h-full">{Content}</div>
  );
};

export const TeamCard: React.FC<{ name: string; role: string; bio: string; image: string }> = ({ name, role, bio, image }) => {
  return (
    <SpotlightCard noPadding className="h-full flex flex-col bg-neutral-900 border-white/10" enableTilt={false}>
        {/* Image Section */}
        <div className="relative w-full aspect-[4/5] overflow-hidden group">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e: any) => {
                    e.target.src = "/img/placeholder-user.png";
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white leading-tight mb-1">{name}</h3>
                <p className="text-xs font-mono text-accent uppercase tracking-widest">{role}</p>
            </div>
        </div>
        {/* Bio Section */}
        <div className="p-6 pt-4 flex-grow bg-black/20 border-t border-white/5">
            <p className="text-sm text-muted leading-relaxed border-l-2 border-accent/20 pl-3">
                {bio}
            </p>
        </div>
    </SpotlightCard>
  )
}

export const FeatureItem = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex flex-col items-start h-full w-full">
    <div className="h-12 w-12 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center mb-6 text-accent shadow-lg group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] transition-all duration-300">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
    <p className="text-muted leading-relaxed text-sm">{description}</p>
  </div>
);

export const ReviewCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <Card className="h-full flex flex-col justify-between !bg-neutral-950/50">
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#C5A059" className="text-accent" />
        ))}
      </div>
      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-8 italic">"{quote}"</p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-sm font-bold text-accent border border-white/10">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{author}</p>
        <p className="text-xs text-muted uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </Card>
);

// --- COMPLEX BUSINESS COMPONENTS ---

export const BookCard = ({ image, title }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (!isHovered) {
        const time = Date.now() / 2000;
        // Stronger swaying effect
        x.set(Math.sin(time) * 0.35);
        y.set(Math.cos(time * 0.7) * 0.25);
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, x, y]);

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeInUp}
      className="relative w-[280px] h-[400px] flex-shrink-0 perspective-1000 group cursor-pointer"
      onMouseMove={(e) => {
        setIsHovered(true);
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ translateZ: 50, scale: 1.08 }}
      >
        {/* Shadow floor */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute inset-0 bg-neutral-900 shadow-2xl rounded-r-xl overflow-hidden border-l-[6px] border-black/60">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})`, backfaceVisibility: 'hidden' }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/20 z-10" />
        </div>

        {/* 3D Spine and Pages */}
        <div className="absolute left-0 top-0 bottom-0 w-[16px] bg-neutral-950 origin-left border-r border-white/5" 
             style={{ transform: "rotateY(-90deg) translateX(-8px)" }} />
        <div className="absolute inset-0 bg-neutral-950 rounded-l-xl" 
             style={{ transform: "translateZ(-16px) rotateY(180deg)" }} />
      </motion.div>
    </motion.div>
  );
};

export const Input = ({ label, type = "text", rows, placeholder, className = "" }: { label: string; type?: string; rows?: number; placeholder?: string; className?: string }) => (
  <div className={`mb-6 ${className}`}>
    <label className="block text-xs font-mono font-bold text-muted mb-2 uppercase tracking-widest">{label}</label>
    {rows ? (
      <textarea rows={rows} placeholder={placeholder} className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground outline-none placeholder-neutral-700 resize-none" />
    ) : (
      <input type={type} placeholder={placeholder} className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground outline-none placeholder-neutral-700" />
    )}
  </div>
);

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start text-sm text-muted">
        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(197,160,89,0.5)]"></div>
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export const TechCard = ({ title, description, icon: Icon, image }: { title: string; description: string; icon: any; image: string }) => (
    <SpotlightCard backgroundImage={image}>
        <div className="flex flex-col h-full relative z-10">
            <div className="h-12 w-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 text-accent backdrop-blur-md">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
        </div>
    </SpotlightCard>
);
export const BookShelf = ({ books }: { books: any[] }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-20 px-4">
      {/* Decorative center container background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      {/* Fade Gradients for scroll signal */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div 
        className="flex flex-row flex-nowrap gap-10 md:gap-14 overflow-x-auto pb-16 pt-10 px-[10%] no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map((book, idx) => (
          <div key={idx} className="snap-center">
            <BookCard {...book} />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-12 h-1 bg-accent/30 rounded-full">
          <motion.div 
            className="h-full bg-accent rounded-full"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '40%' }}
          />
        </div>
      </div>
    </div>
  );
};

export const InteractiveFeature = ({ title, subtitle, description, items, image, align = 'left', ctaLink, ctaText }: any) => {
    const isLeft = align === 'left';
    return (
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-12 md:py-20 border-b border-white/5 last:border-0`}>
            <FadeIn className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${isLeft ? 'from-accent/20 to-transparent' : 'from-transparent to-accent/20'} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-full`}></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl bg-neutral-800" style={{ aspectRatio: '16/9' }}>
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                             <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Active Module</span>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2} className="w-full lg:w-1/2">
                <div className="mb-2 flex items-center gap-3">
                    <span className="h-px w-8 bg-accent"></span>
                    <span className="text-accent font-mono text-xs uppercase tracking-widest">{subtitle}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">{description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {items.map((item: string, i: number) => (
                        <div key={i} className="flex items-center text-sm text-white/80">
                            <Check size={14} className="text-accent mr-2" />
                            {item}
                        </div>
                    ))}
                </div>
                <Button to={ctaLink} variant="outline" className="group">
                    {ctaText} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </FadeIn>
        </div>
    );
};
