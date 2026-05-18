import { useEffect } from 'react';
// Folder structure ke mutabiq sections ke paths connect kiye hain
import SellHeroSection from '../../sections/sellSection/hero';
import SellBenefitsSection from '../../sections/sellSection/benefit';
import SellListingSection from '../../sections/sellSection/selllisting';
import SellCTASection from '../../sections/sellSection/sellcta';

const SellPage = () => {
  // Jab bhi user is page par aaye, screen automatically top par scroll ho jaye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F7FD] min-h-screen">
      
      {/* Section 1: Hero Section (Title + Hero Image) */}
      <SellHeroSection />

      {/* Section 2: Benefits Section (Left Text + Right Image) */}
      <SellBenefitsSection />

      {/* Section 3: Property Listings (Cards Grid) */}
      <SellListingSection />

      {/* Section 4: Chota Simple CTA Card Container */}
      <SellCTASection />

    </div>
  );
};

export default SellPage;