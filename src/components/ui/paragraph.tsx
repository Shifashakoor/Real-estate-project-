import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string; 
  size?: 'sm' | 'md' | 'lg'; 
}
const Paragraph = ({ children, className = '', size = 'md' }: ParagraphProps) => {
  const sizes = {
    sm: 'text-sm',      
    md: 'text-base',    
    lg: 'text-lg',    
  };
  return (
    <p className={`${sizes[size]} text-[#4D5461] leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
export default Paragraph;