import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SpotlightCard } from '../ui';

interface ModuleData {
  title: string;
  description: string;
  features: string[];
  icon: any; // LucideIcon or similar
  image: string;
}

interface ProductModulesProps {
  modules: ModuleData[];
}

export const ProductModules: React.FC<ProductModulesProps> = ({ modules }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {modules.map((mod, idx) => (
        <SpotlightCard key={idx} backgroundImage={mod.image}>
          <div className="p-4 w-fit bg-neutral-950 text-accent rounded-xl border border-white/10 mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
            <mod.icon size={28} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{mod.title}</h3>
          <p className="text-muted text-sm mb-6 leading-relaxed min-h-[60px]">{mod.description}</p>
          <div className="space-y-2 border-t border-white/5 pt-4">
            {mod.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center text-xs text-muted/80">
                <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                {feat}
              </div>
            ))}
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};
