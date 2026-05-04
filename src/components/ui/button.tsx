import { useState } from 'react';

const SlidingButton = () => {
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
            /* Background gradient ki speed mazeed slow (8s) */
            animation: moveGradient 8s ease infinite;
          }
        `}
      </style>

      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative w-72 h-16 rounded-xl overflow-hidden shadow-2xl
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
          animate-bg-flow active:scale-95 transition-all duration-700
        "
      >
        {/* Layer 1: Bottom Text (Gradient State) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold tracking-[2px] uppercase text-sm">
            Request a Demo
          </span>
        </div>

        {/* Layer 2: White Slide (Jo ab boht slow move karegi) */}
        <div 
          className={`
            absolute inset-0 bg-white z-20 flex items-center justify-center
            /* Duration ko 1500ms kar diya hai mazeed slow karne ke liye */
            transition-transform duration-[1500ms] ease-[cubic-bezier(0.2,1,0.2,1)]
            ${isHovered ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <span className="text-slate-900 font-bold tracking-[2px] uppercase text-sm">
            Request a Demo
          </span>
          
          <div className="absolute right-6">
            <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </button>

      <p className="text-slate-400 text-[10px] font-bold tracking-[3px] uppercase opacity-50">
        Super Smooth Transition
      </p>
    </div>
  );
};

export default SlidingButton;