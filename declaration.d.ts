declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    // This helps TS recognize framer-motion props on standard tags
    whileHover?: any;
    whileTap?: any;
    transition?: any;
    variants?: any;
    initial?: any;
    animate?: any;
    exit?: any;
    viewport?: any;
    whileInView?: any;
  }
}