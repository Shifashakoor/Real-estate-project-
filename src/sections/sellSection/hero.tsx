import { Link } from 'react-router-dom';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const SellHeroSection = () => {
  return (
    <section className="py-16 md:py-24 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/home/heroSection/dji_0481_1_m.webp" 
            alt="Sell Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:pl-12">
          <span className="text-[#7065F0] text-sm font-bold uppercase tracking-wider">Sell Property</span>
          <Heading 
            text="Sell Your House Seamlessly with Estatery" 
            level="h2" 
            className="text-4xl md:text-5xl font-bold text-[#000929] mt-2 leading-tight tracking-tight"
          />
          <Paragraph 
            text="We provide the best tools and verified buyers to help you sell your property faster without any stress." 
            className="text-slate-500 text-sm md:text-base mt-4 max-w-md leading-relaxed"
          />
          <Link to="/contact">
            <button className="mt-6 bg-[#7065F0] text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-[#5b51d8] transition-all shadow-sm">
              Contact with us 
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SellHeroSection;