import { useState, useEffect } from 'react';
import Heading from './heading';
import Paragraph from './paragraph';

interface StatItemProps {
  icon: string;
  targetValue: number; 
  suffix?: string;    
  label: string;
}

const StatItem = ({ icon, targetValue, suffix = "", label }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); 
    
    let start = 0;
    const duration = 2000; 
    const totalFrames = duration / 16; 
    const increment = targetValue / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16); 

    return () => clearInterval(timer);
  }, [targetValue]); 

  return (
    <div className="flex flex-col items-start space-y-3">
      <div className="w-16 h-16">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </div>
      <Heading 
        text={`${count.toLocaleString()}${suffix}`} 
        level="h3" 
        className="text-2xl font-bold text-[#101828]" 
      />
      <Paragraph 
        text={label} 
        size="sm" 
        className="text-[#667085] leading-tight" 
      />
    </div>
  );
};

export default StatItem;