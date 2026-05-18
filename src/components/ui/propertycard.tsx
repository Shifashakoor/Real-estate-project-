import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Square, ArrowUpRight } from 'lucide-react';
import Heading from './heading';
import Paragraph from './paragraph';
import Badge from './Badge';

interface PropertyProps {
  id: string; 
  image: string;
  price: string;
  name: string;
  address: string;
  beds: number;
  bathrooms: number;
  area: string;
  isPopular?: boolean;
}

const PropertyCard = ({ id, image, price, name, address, beds, bathrooms, area, isPopular }: PropertyProps) => {
  return (
    <Link 
      to={`/property/${id}`} 
      className="block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] h-full cursor-pointer group"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden"> 
        <img
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {isPopular && (
          <div className="absolute bottom-0 left-[-4px]">
            <Badge 
              text="✨ POPULAR" 
              className="bg-[#7065F0] text-white rounded-r-lg rounded-tl-none py-1.5 px-3 text-[10px] font-bold tracking-wider" 
            />
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div>
      
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[#7065F0] text-lg font-bold tracking-tight">${price}</span>
              <span className="text-slate-400 text-[12px] font-medium">/month</span>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault(); 
                e.stopPropagation();
              }} 
              className="p-2 border border-slate-100 rounded-full hover:bg-slate-50 transition-colors shadow-sm relative z-10"
            >
              <Heart size={16} className="text-[#7065F0] fill-none hover:fill-[#7065F0] transition-all" />
            </button>
          </div>
          <div className="mb-3">
            <Heading 
              text={name} 
              level="h6" 
              className="text-base font-bold text-[#000929] leading-tight tracking-tight group-hover:text-[#7065F0] transition-colors" />
            <Paragraph 
              text={address} 
              className="text-slate-400 text-[11px] font-medium mt-1 leading-snug" />
          </div>
        </div>

        <div>
          {/* Separator */}
          <hr className="border-slate-100/70 mb-3" />

          {/* Property Features & View Details Button */}
          <div className="flex justify-between items-center gap-2">
            
            {/* Left Specs Side */}
            <div className="flex gap-2.5 text-slate-500">
              <div className="flex items-center gap-1">
                <Bed size={14} className="text-[#7065F0]/80" />
                <span className="text-[11px] font-medium text-slate-700">{beds} <span className="hidden sm:inline">Beds</span></span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={14} className="text-[#7065F0]/80" />
                <span className="text-[11px] font-medium text-slate-700">{bathrooms} <span className="hidden sm:inline">Bath</span></span>
              </div>
              <div className="flex items-center gap-1">
                <Square size={12} className="text-[#7065F0]/80" />
                <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">{area}</span>
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-[#7065F0] text-[11px] font-bold bg-[#7065F0]/5 px-2.5 py-1.5 rounded-lg group-hover:bg-[#7065F0] group-hover:text-white transition-all duration-300 whitespace-nowrap">
              <span>View Detail</span>
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

          </div>
        </div>

      </div>
    </Link>
  );
}

export default PropertyCard;