import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const SellCTASection = () => {
  return (
    <section className="py-12 mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="max-w-4xl mx-auto bg-[#000929] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="max-w-lg">
            <Heading 
              text="You are in good hands" 
              level="h3" 
              className="text-xl md:text-2xl font-bold text-white tracking-tight" 
            />
            <Paragraph 
              text="Tell us about your property and let us handle the rest. We will find the perfect buyer for your home." 
              className="text-slate-400 text-xs mt-1.5 leading-relaxed" 
            />
          </div>
          <div className="w-full md:w-auto">
            <button className="bg-[#7065F0] text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-[#5b51d8] transition-all w-full md:w-auto whitespace-nowrap shadow-sm">
              List Your Property
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SellCTASection;