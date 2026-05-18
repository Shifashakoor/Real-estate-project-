import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Header area - Spacing tight kar di hai */}
          <div className="mb-6">
            <Heading 
              text="Testimonials" 
              level="h2" 
              className="text-2xl md:text-3xl font-[800] text-[#101828] tracking-tighter" 
            />
            <Paragraph 
              text="See what our property managers, landlords, and tenants have to say" 
              className="text-slate-500 text-sm font-medium mt-1"
            />
          </div>

          {/* Quote Section - Padding kam ki hai aur weight barhaya hai */}
          <div className="py-6 border-y border-slate-50">
            <Paragraph 
              text='"Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home-shopping and comparative analyzing, Estatery!"' 
              className="text-lg md:text-xl font-[700] text-[#000929] leading-snug tracking-tight"
            />
          </div>

          {/* User Info - Name ko bold kiya hai */}
          <div className="mt-6">
            <h4 className="font-[800] text-sm text-[#000929]">
              Mira Cole, <span className="text-slate-400 font-medium">Renter</span>
            </h4>
          </div>

          {/* Avatars - Inko thora chota aur neat kiya hai */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full border-2 border-[#7065F0] p-0.5 shadow-md">
              <img 
                src="/home/heroSection/Group 14073.png" 
                alt="user"
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
            <div className="w-10 h-10 rounded-full grayscale opacity-30">
              <img 
                src="/home/heroSection/Group 14073.png" 
                alt="user" 
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
            <div className="w-10 h-10 rounded-full grayscale opacity-30">
              <img 
                src="/home/heroSection/Image.png" 
                alt="user" 
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;