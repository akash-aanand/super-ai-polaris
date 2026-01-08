import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Twitter, Github, Linkedin } from 'lucide-react';
import { Button, FadeIn } from './ui';
import { NAV_ITEMS } from '../data';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Logo } from './logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      style={{ 
        borderColor: `rgba(51, 51, 51, ${borderOpacity.get()})`,
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity.get()})`
      }}
      className="fixed top-0 w-full z-40 border-b border-transparent backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="h-10 md:h-12" />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link to={item.path} className="text-sm font-medium text-muted hover:text-accent flex items-center gap-1 transition-colors relative py-2">
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                </Link>
                {/* Dropdown for desktop */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 bg-[#050505] border border-white/10 rounded-xl shadow-2xl p-2 z-50">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="block px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-accent rounded-lg transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Log in</Link>
            <Button variant="primary" to="/contact" className="!h-9 !px-5 !text-sm !rounded-full">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted hover:text-foreground p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
               {NAV_ITEMS.map((item) => (
                 <div key={item.label}>
                   <Link to={item.path} className="block py-2 text-sm font-medium text-foreground border-b border-white/5">{item.label}</Link>
                   {item.children && (
                     <div className="pl-4 space-y-2 mt-2">
                       {item.children.map((child) => (
                         <Link key={child.label} to={child.path} className="block py-2 text-sm text-muted hover:text-accent">
                           {child.label}
                         </Link>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
               <div className="pt-4 flex flex-col space-y-3">
                  <Button to="/contact" variant="primary" className="w-full">Get Started</Button>
                  <Button to="/contact" variant="secondary" className="w-full">Log In</Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export const Footer = () => (
  <footer className="bg-background border-t border-white/10 pt-20 pb-10 w-full relative z-10">
    <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2 lg:col-span-2 pr-8">
          <Link to="/" className="flex items-center gap-2 mb-6">
             <Logo className="h-10" />
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
            Empowering the next generation of intelligence through scalable learning systems and research.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="text-muted hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-muted hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="#" className="text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-sm mb-6 tracking-wide uppercase">Product</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link to="/services/learning-systems" className="hover:text-accent transition-colors">Learning Systems</Link></li>
            <li><Link to="/services/edtech" className="hover:text-accent transition-colors">EdTech Stack</Link></li>
            <li><Link to="/services/collaborative-success" className="hover:text-accent transition-colors">Collaboration</Link></li>
            <li><Link to="/research" className="hover:text-accent transition-colors">Research</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-sm mb-6 tracking-wide uppercase">Company</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/founder" className="hover:text-accent transition-colors">Leadership</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground text-sm mb-6 tracking-wide uppercase">Legal</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Security</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-muted/60">© 2024 Super AI Polaris Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
          <span className="text-[10px] font-mono text-accent/80 tracking-widest">SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </FadeIn>
  </footer>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground selection:bg-accent selection:text-black w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};