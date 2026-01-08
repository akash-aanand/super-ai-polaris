import React from 'react';
import { Mail, Phone, MapPin, LucideIcon, ExternalLink } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin
};

interface ContactItemProps {
  type: string;
  icon: string;
  values: string[];
}

export const ContactItem: React.FC<ContactItemProps> = ({ type, icon, values }) => {
  const Icon = ICON_MAP[icon] || Mail;
  const isEmail = type === 'EMAIL';
  const isPhone = type === 'PHONE';
  const isAddress = type === 'REGISTERED OFFICE';

  // Determine the primary link for the icon based on the first value
  let iconLink = '';
  let target = '';
  
  if (isEmail && values.length > 0) {
    iconLink = `mailto:${values[0]}`;
  } else if (isPhone && values.length > 0) {
    // Strip non-numeric characters for tel link, keep +
    iconLink = `tel:${values[0].replace(/[^0-9+]/g, '')}`;
  } else if (isAddress && values.length > 0) {
    iconLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(values.join(' '))}`;
    target = '_blank';
  }

  const baseClass = "p-3 bg-neutral-900 rounded-lg border border-white/10 text-accent mr-4 shrink-0 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] group-hover:text-white transition-all duration-300 flex items-center justify-center";

  return (
    <div className="flex items-start group">
      {iconLink ? (
        <a 
            href={iconLink} 
            target={target || undefined} 
            rel={target === '_blank' ? "noopener noreferrer" : undefined}
            className={`${baseClass} cursor-pointer hover:bg-white/5 active:scale-95`}
            aria-label={`Action for ${type}`}
            title={`Click to ${isEmail ? 'email' : isPhone ? 'call' : 'view map'}`}
        >
            <Icon size={20} />
        </a>
      ) : (
        <div className={baseClass}>
            <Icon size={20} />
        </div>
      )}
      
      <div className="flex-1">
        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">{type}</h3>
        <div className="text-muted text-sm leading-relaxed">
          {values.map((val, idx) => {
            if (isEmail) {
                return (
                    <a key={idx} href={`mailto:${val}`} className="block hover:text-accent transition-colors mb-0.5 break-all">
                        {val}
                    </a>
                );
            }
            if (isPhone) {
                return (
                    <a key={idx} href={`tel:${val.replace(/[^0-9+]/g, '')}`} className="block hover:text-accent transition-colors mb-0.5">
                        {val}
                    </a>
                );
            }
            return <p key={idx} className="mb-0.5">{val}</p>;
          })}
          
          {isAddress && (
             <a 
                href={iconLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent mt-2 inline-flex items-center hover:text-white transition-colors font-medium"
             >
                Get Directions <ExternalLink size={10} className="ml-1" />
             </a>
          )}
        </div>
      </div>
    </div>
  );
};
