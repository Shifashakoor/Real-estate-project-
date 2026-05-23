import { useEffect } from 'react';
import SellHeroSection from '../../sections/sellSection/hero';
import SellBenefitsSection from '../../sections/sellSection/benefit';
import SellListingSection from '../../sections/sellSection/selllisting';
import SellCTASection from '../../sections/sellSection/sellcta';

const SellPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F7FD] min-h-screen">
      <SellHeroSection />
      <SellBenefitsSection />
      <SellListingSection />
      <SellCTASection />
    </div>
  );
};

export default SellPage;