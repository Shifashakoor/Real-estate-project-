

interface HeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  className?: string;
}

const Heading = ({ text, level = 'h1', className = '' }: HeadingProps) => {
  const Tag = level;

  const sizes = {

    h1: 'text-[42px] leading-[56px] font-[700]',
    h2: 'text-[34px] leading-[44px] font-[600]',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-medium',
    h5: 'text-lg md:text-xl font-medium',
    h6: 'text-base md:text-lg font-medium',
  };

  return (
    <Tag className={`${sizes[level]} text-[#000929] ${className}`}>
      {text}
    </Tag>
  );
};

export default Heading;