import { Link } from 'react-router-dom';
import { Bed, Bath, Square } from 'lucide-react';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img'; 

export const propertiesData = [
  {
    id: '1',
    name: 'Palm Harbor',
    price: '2,095',
    type: 'house',
    location: 'New York',
    address: '2699 Green Valley, NY',
    beds: 3,
    bathrooms: 2,
    area: '2,400 sqft',
    isPopular: true,
    image: '/home/heroSection/screen-shot-2025-04-29-at-9.12.16-am_m.webp'
  },
  {
    id: '2',
    name: 'Beverly Suites',
    price: '4,500',
    type: 'apartment',
    location: 'Los Angeles',
    address: '90210 Wilshire Blvd, LA',
    beds: 2,
    bathrooms: 2,
    area: '1,800 sqft',
    isPopular: false,
    image: '/home/heroSection/7535-front-photo_m.webp'
  },
  {
    id: '3',
    name: 'Faulkner Ave',
    price: '1,200',
    type: 'house',
    location: 'Chicago',
    address: '4528 Faulkner Ave, IL',
    beds: 4,
    bathrooms: 3,
    area: '3,100 sqft',
    isPopular: false,
    image: '/home/heroSection/dji_0481_1_m.webp'
  },
  {
    id: '4',
    name: 'St. Andrew Cottage',
    price: '2,400',
    type: 'house',
    location: 'New York',
    address: '789 St. Andrew Rd, NY',
    beds: 3,
    bathrooms: 3,
    area: '2,200 sqft',
    isPopular: true,
    image: '/home/heroSection/istockphoto-968025444-612x612.jpg'
  },
  {
    id: '5',
    name: 'The Grand Skyline',
    price: '6,000',
    type: 'apartment',
    location: 'Los Angeles',
    address: '101 Sunset Blvd, LA',
    beds: 3,
    bathrooms: 4,
    area: '4,200 sqft',
    isPopular: false,
    image: '/home/heroSection/lg130-front-gpt_m.webp'
  },
  {
    id: '6',
    name: 'Woodland Retreat',
    price: '1,850',
    type: 'house',
    location: 'Chicago',
    address: '882 Timberline Dr, IL',
    beds: 2,
    bathrooms: 2,
    area: '1,500 sqft',
    isPopular: false,
    image: '/home/heroSection/main-rendering-edit_55_m.webp'
  }
];

const PropertyGridSection = () => {
  return (
    <section className="py-12 bg-[#F7F7FD] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        
        <div className="mb-8">
          <Heading text="Search properties for sale" level="h2" className="text-2xl md:text-3xl font-bold text-[#000929]" />
          <Paragraph text="Find the best deal for your future home from our 6 premium listings." className="text-slate-500 text-sm mt-1" />
        </div>

        {/* Horizontal Card Layout Direct Loop */}
        <div className="flex flex-col gap-6">
          {propertiesData.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center w-full group p-4 md:p-6 gap-6">
              
              {/* Image side */}
              <div className="w-full md:w-1/3 h-56 md:h-48 overflow-hidden relative shrink-0 rounded-xl">
                <Image src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {property.isPopular && (
                  <span className="absolute top-4 left-4 bg-[#7065F0] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    ✨ POPULAR
                  </span>
                )}
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-between w-full md:flex-row md:items-center gap-4 flex-1">
                <div className="flex-1">
                  <span className="text-xl font-extrabold text-[#7065F0]">
                    ${property.price}
                    <span className="text-xs text-slate-400 font-normal">/month</span>
                  </span>
                  <Heading text={property.name} level="h3" className="text-lg font-bold text-[#000929] mt-1" />
                  <Paragraph text={property.address} className="text-slate-400 text-xs mt-1 mb-4" />

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-1">
                      <Bed size={16} className="text-[#7065F0]" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} className="text-[#7065F0]" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square size={14} className="text-[#7065F0]" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0 w-full md:w-auto">
                  <Link 
                    to={`/property/${property.id}`}
                    className="block text-center bg-white border border-[#7065F0] text-[#7065F0] hover:bg-[#7065F0] hover:text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default PropertyGridSection;