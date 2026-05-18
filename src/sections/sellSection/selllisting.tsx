import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import PropertyCard from '../../components/ui/propertycard';

import { propertiesData } from '../homeSection/propertyListingSection'; 

const SellListingSection = () => {
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
          {propertiesData.slice(0, 6).map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SellListingSection;