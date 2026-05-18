import BuyHeroSection from '../../sections/buySection/heroSection'; 
import PropertyGridSection from '../../sections/buySection/propertySection';
import TestimonialsSection from '../../sections/buySection/testimationSection';
import BuyCTASection from '../../sections/buySection/ctaSection';

const BuyPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <BuyHeroSection />
      <PropertyGridSection />
      <TestimonialsSection />
      <BuyCTASection />
    </div>
  );
};

export default BuyPage;