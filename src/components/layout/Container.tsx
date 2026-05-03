import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Taake hum extra classes bhi add kar saken
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div 
      className={`
        max-w-[1440px] 
        mx-auto 
        px-4 
        sm:px-8 
        md:px-12 
        lg:px-16 
        w-full 
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
};

export default Container;