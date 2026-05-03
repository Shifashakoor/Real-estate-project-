import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4'; 
  className?: string;
}

const Heading = ({ children, level = 'h1', className = '' }: HeadingProps) => {
  const Tag = level;
  const sizes = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-semibold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-medium',
  };

  return (
    <Tag className={`${sizes[level]} text-[#000929] ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;