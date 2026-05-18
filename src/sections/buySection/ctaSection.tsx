import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const BuyCTASection = () => {
  return (
    <section className="py-12 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        {/* Main Banner Card */}
        <div className="bg-[#000929] text-white rounded-3xl p-8 md:p-16 relative overflow-hidden text-center flex flex-col items-center justify-center border border-slate-800 shadow-xl">
          
          {/* Subtle Decorative Background Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#7065F0] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#7065F0] opacity-20 rounded-full blur-3xl"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#7065F0] text-xs font-bold uppercase tracking-widest bg-[#7065F0]/10 px-3 py-1.5 rounded-full">
              Get Started with Estatery
            </span>
            
            <Heading 
              text="Talk to Our Experts & Find Your Next Perfect Investment" 
              level="h2" 
              className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight tracking-tight"
            />
            
            <Paragraph 
              text="Whether you have questions about property evaluation, pricing, or locations, our top-rated agents are here to help you 24/7." 
              className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed"
            />

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-[#7065F0] text-white text-xs font-semibold px-6 py-4 rounded-xl hover:bg-[#5b51d8] transition-all shadow-md shadow-[#7065F0]/20">
                Contact an Agent
              </button>
              <button className="w-full sm:w-auto bg-transparent text-white border border-slate-700 text-xs font-semibold px-6 py-4 rounded-xl hover:bg-slate-800 transition-all">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BuyCTASection;