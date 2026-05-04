import type { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  /** Extra classes on the inner wrapper (max-width box) */
  className?: string;
}

/**
 * Centered content column, max width 1440px, responsive horizontal padding.
 * Typical pattern: wrap inside `<section>` for each page block.
 */
const Container = ({ children, className }: ContainerProps) => {
  const base =
    'mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';

  return (
    <div className={[base, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default Container;
