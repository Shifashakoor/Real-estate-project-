import { useState } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/25',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline:
    'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent',
};

export default function Button({
  text ,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:opacity-50';

  return (
    <button
      type={type}
      className={`${base} ${variantClasses[variant]} ${className}`.trim()}
      {...rest}
    >
      {text}
    </button>
  );
}

export function SlidingButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-bg-flow {
            background-size: 200% 200%;
            animation: moveGradient 8s ease infinite;
          }
        `}
      </style>

      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative h-16 w-72 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
          shadow-2xl animate-bg-flow transition-all duration-700 active:scale-95
        "
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold uppercase tracking-[2px] text-white">
            Request a Demo
          </span>
        </div>

        <div
          className={`
            absolute inset-0 z-20 flex items-center justify-center bg-white
            transition-transform duration-[1500ms] ease-[cubic-bezier(0.2,1,0.2,1)]
            ${isHovered ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <span className="text-sm font-bold uppercase tracking-[2px] text-slate-900">
            Request a Demo
          </span>

          <div className="absolute right-6">
            <svg
              className="h-5 w-5 text-slate-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </button>

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-slate-400 opacity-50">
        Super Smooth Transition
      </p>
    </div>
  );
}
