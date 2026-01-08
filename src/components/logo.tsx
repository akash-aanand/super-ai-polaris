
import React from 'react';

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon Symbol */}
      <img 
        src="/img/logo.png" 
        alt="Super AI Polaris Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if image doesn't load immediately to avoid broken UI
          e.currentTarget.style.display = 'none';
        }}
      />
      
      {/* Text Brand */}
      <div className="flex flex-col justify-center h-full">
        <span className="text-white font-sans font-bold leading-none tracking-tight text-xl">
          SUPER <span className="text-accent">AI</span> P
        </span>
        <span className="text-muted text-[10px] font-mono tracking-[0.2em] uppercase leading-none mt-1">
          POLARIS
        </span>
      </div>
    </div>
  );
};
