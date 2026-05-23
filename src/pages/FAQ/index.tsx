import { useEffect } from 'react';
import HeroSection from '../../sections/FaqSection/heroSection';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <HeroSection />;
};

export default FAQ;