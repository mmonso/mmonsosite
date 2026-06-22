import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  trackWhatsApp?: boolean;
}

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  as = 'button',
  className = '',
  trackWhatsApp = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium tracking-wide active:scale-[0.98]";

  const variants = {
    primary: "bg-[#2d7a5f] text-white hover:bg-[#3d9972] focus:ring-[#2d7a5f] shadow-md shadow-[#2d7a5f]/20 hover:shadow-lg hover:shadow-[#2d7a5f]/30 border border-transparent",
    secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200 focus:ring-stone-400 border border-stone-200",
    outline: "border-2 border-sage-600 text-sage-800 hover:bg-sage-50 focus:ring-sage-500"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (trackWhatsApp) {
      trackWhatsAppClick();
    }
    if (as === 'a') {
      (props as React.AnchorHTMLAttributes<HTMLAnchorElement>).onClick?.(e as React.MouseEvent<HTMLAnchorElement>);
    } else {
      (props as React.ButtonHTMLAttributes<HTMLButtonElement>).onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (as === 'a') {
    return (
      <a className={combinedClassName} onClick={handleClick} {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={handleClick} {...(props as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
