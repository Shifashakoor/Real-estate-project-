import { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertiesData } from './propertyData';
import { Bed, Bath, Square } from 'lucide-react';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Button from '../../components/ui/button';
import Image from '../../components/ui/img';
import Paragraph from '../../components/ui/paragraph';

const PropertyGridSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    // ID yahan di hai taake scroll yahan aaye
    <section id="propertySection" className="py-12 bg-[#F7F7FD]">
      <Container>
        <Heading text="Search properties for sale" level="h2" className="text-2xl font-bold mb-8" />
        <div className="grid grid-cols-1 gap-6">
          {propertiesData.slice(0, visibleCount).map((property) => (
            <div key={property.id} className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-[280px] w-full h-56 md:h-auto">
                <Image src={property.image} alt={property.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <Heading text={property.name} level="h3" className="text-xl font-bold text-[#000929]" />
                      <Paragraph text={property.address} className="text-slate-500 text-sm mt-1" />
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#7065F0] text-xl font-bold">${property.price}</span>
                      <span className="text-slate-400 text-xs">/month</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-600 mt-4">
                    <div className="flex items-center gap-1.5"><Bed size={16} className="text-[#7065F0]" /><span>{property.beds} Beds</span></div>
                    <div className="flex items-center gap-1.5"><Bath size={16} className="text-[#7065F0]" /><span>{property.bathrooms} Baths</span></div>
                    <div className="flex items-center gap-1.5"><Square size={15} className="text-[#7065F0]" /><span>{property.area}</span></div>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <Link to={`/buy/property/${property.id}`} className="bg-[#7065F0] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#5b51d8] transition-all text-sm">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
           <Button text={visibleCount < propertiesData.length ? "View More" : "View Less"} onClick={() => setVisibleCount(visibleCount < propertiesData.length ? visibleCount + 6 : 6)} className="bg-[#7065F0] text-white px-6 py-2 rounded" />
        </div>
      </Container>
    </section>
  );
};
export default PropertyGridSection;