
interface ParagraphProps {
  text: String;
  className?: string; 
  size?: 'sm' | 'md' | 'lg'; 
}
const Paragraph = ({ text, className = "" , size = 'md' , }: ParagraphProps) => {
  const sizes = {
    sm: 'text-sm',      
    md: 'text-base',    
    lg: 'text-lg',    
  };
  return (
    <p className={`${sizes[size]} text-[#4D5461] leading-relaxed ${className}`}>
      {text} 
    </p>
  );
};
export default Paragraph;