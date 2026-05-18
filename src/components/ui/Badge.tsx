interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${className}`}>
      {text}
    </div>
  );
};

export default Badge;