import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'sliding'| 'heroOutline' | 'transparent';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode; 
  variant?: ButtonVariant;
  to?: string; 
}

const variantClasses: Record<Exclude<ButtonVariant, 'sliding'>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/25',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent',
  heroOutline: 'text-white border-2 border-white/80 hover:bg-white hover:text-indigo-600 bg-transparent',
  transparent: 'bg-transparent border-none shadow-none',
};

export default function Button({
  text,
  variant = 'primary',
  className = '',
  type = 'button',
  to, 
  onClick,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e); 
    if (to) navigate(to); 
  };

  if (variant === 'sliding') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-bg-flow {
            background-size: 200% 200%;
            animation: moveGradient 8s ease infinite;
          }
        `}} />

        <button
          type={type}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick} 
          className="relative h-12 w-64 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl animate-bg-flow transition-all duration-700 active:scale-95"
          {...rest}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold uppercase tracking-[2px] text-white">{text}</span>
          </div>
          <div className={`absolute inset-0 z-20 flex items-center justify-center bg-white transition-transform duration-[1000ms] ease-[cubic-bezier(0.2,1,0.2,1)] ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}>
            <span className="text-sm font-bold uppercase tracking-[2px] text-slate-900">{text}</span>
            <div className="absolute right-4">
              <svg className="h-4 w-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick} // Click handler lagaya
className={`${'inline-flex items-center justify-center cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:pointer-events-none disabled:opacity-50 active:scale-95'} ${variantClasses[variant as Exclude<ButtonVariant, 'sliding'>]} ${className}`.trim()}      {...rest}
    >
      {text}
    </button>
  );
}