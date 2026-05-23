import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Button from '../../components/ui/button';
import PropertyCard from '../../components/ui/propertycard';
import { useState } from 'react';

export const propertiesData = [
  { id: "prop-1", image: "/home/heroSection/front_m.webp", price: "2,095", name: "Palm Harbor", address: "2699 Green Valley, Highland Lake, FL", beds: 3, bathrooms: 2, area: "5x7 m²", isPopular: true, location: "New York" },
  { id: "prop-2", image: "/home/heroSection/main-rendering-edit_117_m.webp", price: "2,700", name: "Beverly Springfield", address: "2821 Lake Sevilla, Palm Harbor, TX", beds: 4, bathrooms: 2, area: "6x7.5 m²", isPopular: false, location: "New York" },
  { id: "prop-3", image: "/home/heroSection/istockphoto-2175972607-612x612.jpg", price: "4,550", name: "Faulkner Ave", address: "909 Woodland St, Michigan, IN", beds: 4, bathrooms: 3, area: "8x10 m²", isPopular: true, location: "Chicago" },
  { id: "prop-4", image: "/home/heroSection/istockphoto-187718138-612x612.jpg", price: "2,400", name: "St. Crystal", address: "210 US Highway, Highland Lake, FL", beds: 4, bathrooms: 2, area: "6x8 m²", isPopular: false, location: "New York" },
  { id: "prop-5", image: "/home/heroSection/screen-shot-2025-04-29-at-9.12.16-am_m.webp", price: "1,500", name: "Cove Red", address: "243 Curlew Road, Palm Harbor, TX", beds: 2, bathrooms: 1, area: "5x7.5 m²", isPopular: false, location: "Palm Harbor" },
  { id: "prop-6", image: "/home/heroSection/istockphoto-856794604-612x612.jpg", price: "1,600", name: "Tarpon Bay", address: "103 Lake Shores, Michigan, IN", beds: 3, bathrooms: 1, area: "5x7.6 m²", isPopular: false, location: "Michigan" },

  { id: "prop-7", image: "/home/heroSection/istockphoto-968025444-612x612.jpg", price: "3,200", name: "Luxury Villa", address: "123 Sunset Blvd, Malibu, CA", beds: 5, bathrooms: 4, area: "10x12 m²", isPopular: true, location: "Malibu" },
  { id: "prop-8", image: "/home/heroSection/istockphoto-1364477107-612x612.jpg", price: "1,850", name: "Modern Loft", address: "456 Urban St, Downtown, IL", beds: 2, bathrooms: 2, area: "4x6 m²", isPopular: false, location: "Chicago" },
  { id: "prop-9", image: "/home/heroSection/Gemini_Generated_Image_2v44me2v44me2v44.png", price: "2,900", name: "Garden House", address: "789 Maple Ave, Austin, TX", beds: 3, bathrooms: 2, area: "7x8 m²", isPopular: false, location: "Austin" },
  { id: "prop-10", image: "/home/heroSection/main-rendering-edit-37_m.webp", price: "5,100", name: "Skyline Penthouse", address: "101 High Rise, Manhattan, NY", beds: 4, bathrooms: 4, area: "12x15 m²", isPopular: true, location: "New York" },
  { id: "prop-11", image: "/home/heroSection/istockphoto-519434778-612x612.jpg", price: "2,100", name: "Cozy Cottage", address: "222 Forest Path, Portland, OR", beds: 2, bathrooms: 1, area: "5x6 m²", isPopular: false, location: "Portland" },
  { id: "prop-12", image: "/home/heroSection/lg130-front-gpt_m.webp", price: "2,350", name: "Riverside Home", address: "333 River Rd, Denver, CO", beds: 3, bathrooms: 2, area: "6x7 m²", isPopular: false, location: "Denver" },
];

const PropertyListingSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section id="properties-section" className="py-20 bg-[#F7F7FD]">
      <Container>
        <div className="mb-12 text-center md:text-left">
          <Heading text="Based on your location" level="h2" className="text-4xl font-bold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.slice(0, visibleCount).map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleCount < propertiesData.length ? (
            <Button
              text="View More"
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#7065F0] text-white px-8 py-3 rounded-xl cursor-pointer"
            />
          ) : (
            <Button
              text="View Less"
              onClick={() => setVisibleCount(6)}
              className="bg-slate-400 text-white px-8 py-3 rounded-xl cursor-pointer"
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default PropertyListingSection;