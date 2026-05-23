import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const BuyHeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById('propertySection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 font-['Plus_Jakarta_Sans',sans-serif] bg-[#F7F7FD]">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="md:pr-12">
          <span className="text-[#7065F0] text-sm font-bold uppercase tracking-wider">Buy Property</span>
          <Heading text="Find & Buy Your Dream Home with Estatery" level="h1" className="text-2xl md:text-5xl font-[700] text-[#000929] mt-2 leading-tight tracking-tight" />
          <Paragraph text="Browse through thousands of verified properties, use advanced smart filters, and connect with trusted agents easily." className="text-slate-500 text-sm md:text-base mt-4 max-w-md leading-relaxed" />
  
          <button 
            onClick={handleScroll}
            className="mt-6 bg-[#7065F0] text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-[#5b51d8] transition-all shadow-sm"
          >
            Browse Properties
          </button>
        </div>

        <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md">
          <img src="/home/heroSection/istockphoto-1494221275-612x612.jpg" alt="Buy Hero" className="w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
};
export default BuyHeroSection;