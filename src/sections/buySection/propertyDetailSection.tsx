import { useParams, Link, useNavigate } from 'react-router-dom'; // 🔥 useNavigate import kiya
import { ArrowLeft, Bed, Bath, Square, PhoneCall } from 'lucide-react';
import { propertiesData } from './propertySection'; 
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img'; 
import { useEffect } from 'react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // 🔥 navigate function banaya
  
  const property = propertiesData?.find((p) => p.id.toString() === id?.toString());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <Container className="py-20 text-center">
        <Heading
          text="Property Not Found!" 
          level="h2" 
          className="text-2xl font-bold text-slate-800" 
        />
        <p className="text-sm text-slate-400 mt-2">Requested ID: {id}</p>
        <Link to="/buy" className="text-[#7065F0] mt-4 inline-block hover:underline font-semibold">Go back to Buy Page</Link>
      </Container>
    );
  }

  return (
    <Container className="bg-[#F7F7FD] min-h-screen py-10 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-2">
        {/* 🔥 Link ki jagah button lagaya jo history mein 1 step piche (-1) le jayega */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-600 hover:text-[#7065F0] mb-5 transition-colors w-fit cursor-pointer bg-transparent border-none p-0"
        >
          <ArrowLeft size={18} />
          <Paragraph text="Back to Listings" className="text-sm font-semibold !text-inherit m-0" />
        </button>
      </div>

      {/* Main Showcase Full Detail Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 p-5 md:p-6">
        
        {/* Image portion */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden mb-5 shadow-sm">
          <Image src={property.image} alt={property.name} className="object-cover w-full h-full" />
          {property.isPopular && (
            <div className="absolute top-4 left-4 bg-[#7065F0] text-white rounded-lg shadow px-3 py-1.5 z-10">
              <Paragraph text="✨ POPULAR" className="text-xs font-bold text-white m-0" />
            </div>
          )}
        </div>

        {/* Title & Price */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 border-b border-slate-100 pb-5">
          <div>
            <Heading text={property.name} level="h1" className="text-2xl font-bold text-[#000929] tracking-tight" />
            <Paragraph text={property.address} className="text-slate-500 text-xs mt-0.5" />
          </div>
          <div className="text-left sm:text-right flex items-baseline gap-1">
            <Paragraph text={`$${property.price}`} className="text-2xl font-extrabold text-[#7065F0] m-0" />
            <Paragraph text=" /month" className="text-slate-400 text-xs font-medium m-0" />
          </div>
        </div>

        {/* Specs and Contact Action Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#F8F9FA] p-3 rounded-xl mb-6">
          <div className="grid grid-cols-3 gap-2 text-[#4D5461] w-full md:max-w-md">
            <div className="flex flex-col items-center gap-0.5 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100/50">
              <Bed size={18} className="text-[#7065F0]" />
              <Paragraph text="Bedrooms" className="text-[10px] text-slate-400 m-0 font-medium" />
              <Paragraph text={`${property.beds} Beds`} className="text-xs font-bold text-slate-800 m-0" />
            </div>
            <div className="flex flex-col items-center gap-0.5 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100/50">
              <Bath size={18} className="text-[#7065F0]" />
              <Paragraph text="Bathrooms" className="text-[10px] text-slate-400 m-0 font-medium" />
              <Paragraph text={`${property.bathrooms} Baths`} className="text-xs font-bold text-slate-800 m-0" />
            </div>
            <div className="flex flex-col items-center gap-0.5 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100/50">
              <Square size={16} className="text-[#7065F0]" />
              <Paragraph text="Total Area" className="text-[10px] text-slate-400 m-0 font-medium" />
              <Paragraph text={property.area} className="text-xs font-bold text-slate-800 m-0" />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-[#7065F0] text-xs font-semibold px-5 py-3 rounded-lg hover:bg-[#5b51d8] transition-all text-white shadow-sm w-full md:w-auto whitespace-nowrap">
              <PhoneCall size={14} /> Contact Us
            </Link>
          </div>
        </div>

        {/* Description Text */}
        <div>
          <Heading text="Description" level="h3" className="text-base font-bold text-[#000929] mb-1.5" />
          <Paragraph 
            text={`This beautiful ${property.name} is located at ${property.address}. It offers a premium living experience with ${property.beds} spacious bedrooms, ${property.bathrooms} modern bathrooms, and a total area of ${property.area}. Perfect for anyone looking for comfort and luxury.`} 
            className="text-slate-500 text-xs leading-relaxed" 
          />
        </div>

      </div>
    </Container>
  );
};
  
export default PropertyDetails;