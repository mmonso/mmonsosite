import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  trackWhatsApp?: boolean; // Nova prop para rastrear cliques no WhatsApp
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
  // Removed hover:-translate-y and added active:scale-[0.98] for a more grounded, tactile feel
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium tracking-wide active:scale-[0.98]";

  const variants = {
    // Significantly lightened hover color (#529e82) to ensure the highlight effect is obvious
    primary: "bg-[#356a57] text-white hover:bg-[#529e82] focus:ring-[#356a57] shadow-md shadow-[#356a57]/10 hover:shadow-lg hover:shadow-[#356a57]/20 border border-transparent",
    secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200 focus:ring-stone-400 border border-stone-200",
    outline: "border-2 border-sage-600 text-sage-800 hover:bg-sage-50 focus:ring-sage-500"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (trackWhatsApp) {
      trackWhatsAppClick();
    }
    // Chama o onClick original se existir
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