import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import { Link } from 'react-router-dom';

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
              className="text-slate-400 text-sm mt-2 leading-relaxed" 
            />
          </div>

          <div className="flex flex-col items-center">
            {/* Main Action Button */}
            <Link to="/contact">
              <button className="bg-[#7065F0] text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-[#5b51d8] transition-all shadow-sm whitespace-nowrap">
                Start Selling Today
              </button>
            </Link>

            {/* Terms Link (Chota sa niche) */}
            <Link to="/terms" className="text-slate-500 text-[10px] mt-3 hover:underline">
              Read our Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SellCTASection;