import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Button from '../../components/ui/button';
import PropertyCard from '../../components/ui/propertycard';
export const propertiesData = [
  {
    id: "palm-harbor", 
    image: "/home/heroSection/front_m.webp",
    price: "2,095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7 m²",
    isPopular: true
  },
  {
    id: "beverly-springfield",
    image: "/home/heroSection/main-rendering-edit_117_m.webp",
    price: "2,700",
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    beds: 4,
    bathrooms: 2,
    area: "6x7.5 m²",
    isPopular: false
  },
  {
    id: "faulkner-ave", 
    image: "/home/heroSection/istockphoto-2175972607-612x612.jpg",
    price: "4,550",
    name: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    bathrooms: 3,
    area: "8x10 m²",
    isPopular: true
  },
  {
    id: "st-crystal", 
    image: "/home/heroSection/istockphoto-187718138-612x612.jpg",
    price: "2,400",
    name: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    beds: 4,
    bathrooms: 2,
    area: "6x8 m²",
    isPopular: false
  },
  {
    id: "cove-red", 
    image: "/home/heroSection/screen-shot-2025-04-29-at-9.12.16-am_m.webp", 
    price: "1,500",
    name: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    beds: 2,
    bathrooms: 1,
    area: "5x7.5 m²",
    isPopular: false
  },
  {
    id: "tarpon-bay", 
    image: "/home/heroSection/istockphoto-856794604-612x612.jpg",
    price: "1,600",
    name: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    beds: 3,
    bathrooms: 1,
    area: "5x7.6 m²",
    isPopular: false
  },
];

const PropertyListingSection = () => {
  return (
    <section className="py-20 bg-[#F7F7FD]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-lg">
            <Heading 
              text="Based on your location"
              level="h2"
              className="text-4xl font-bold" 
            />
            <Paragraph 
              text="Some of our picked properties near your location."
              className="mt-4" 
            />
          </div>

          <Button
            text="Browse more properties"
            variant="primary"
            className="bg-[#7065F0]" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PropertyListingSection;