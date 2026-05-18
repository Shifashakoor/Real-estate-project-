import type { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  className?: string; 
  onClick?: () => void; 
}

const Container = ({ children, className, onClick }: ContainerProps) => {
  const base = 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';

  return (
    
    <div onClick={onClick} className={[base, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default Container;