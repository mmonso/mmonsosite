import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}