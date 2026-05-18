import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const SellBenefitsSection = () => {
  return (
    <section className="py-16 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side Text */}
        <div>
          <Heading 
            text="Why list your property with us?" 
            level="h2" 
            className="text-2xl md:text-3xl font-bold text-[#000929] tracking-tight"
          />
          <div className="mt-6 space-y-5">
            <div>
              <Heading text="Verified Buyers Only" level="h5" className="text-sm font-bold text-[#000929]" />
              <Paragraph text="No waste of time. Every single lead or buyer on our platform goes through security verification." className="text-slate-400 text-xs mt-1" />
            </div>
            <div>
              <Heading text="Maximum Exposure" level="h5" className="text-sm font-bold text-[#000929]" />
              <Paragraph text="Your property will be displayed to thousands of local and international users looking for home listings." className="text-slate-400 text-xs mt-1" />
            </div>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="h-80 rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="/home/heroSection/istockphoto-2175972607-612x612.jpg" 
            alt="Benefits" 
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default SellBenefitsSection;