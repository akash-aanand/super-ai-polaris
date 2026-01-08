import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface FeatureProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface ServicePageData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
}

export interface Partner {
  name: string;
  logo: string; // text fallback or url
}
