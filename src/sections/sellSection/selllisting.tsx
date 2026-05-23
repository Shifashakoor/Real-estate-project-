import { useState } from 'react';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import PropertyCard from '../../components/ui/propertycard';
import Button from '../../components/ui/button'; // Button component import kiya
import { propertiesData } from '../homeSection/propertyListingSection'; 

const SellListingSection = () => {

  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="py-16 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="mb-10">
          <Heading 
            text="Your Recently Managed Properties" 
            level="h2" 
            className="text-2xl md:text-3xl font-bold text-[#000929] tracking-tight"
          />
          <Paragraph 
            text="Check out some of our standard listed homes in your market area." 
            className="text-slate-500 text-xs mt-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesData.slice(0, visibleCount).map((property) => (
            <PropertyCard 
              key={property.id} 
              {...property} 
              from="sell" 
            />
          ))}
        </div>
        <div className="text-center mt-12">
          {visibleCount < propertiesData.length ? (
            <Button 
              text="View More" 
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#7065F0] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5b51d8] transition-all"
            />
          ) : (
            <Button 
              text="View Less" 
              onClick={() => setVisibleCount(6)}
              className="bg-slate-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-500 transition-all"
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default SellListingSection;