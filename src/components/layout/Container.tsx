import type { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  className?: string; 
  onClick?: () => void; 
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer'; 
  clean?: boolean; 
}

const Container = ({ children, className, onClick, as: Component = 'div', clean = false }: ContainerProps) => {

  const base = clean ? '' : 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';

  return (
    <Component onClick={onClick} className={[base, className].filter(Boolean).join(' ')}>
      {children}
    </Component>
  );
};

export default Container;