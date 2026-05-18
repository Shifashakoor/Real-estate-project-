import { PlayCircle } from 'lucide-react'; 
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img';
import Button from '../../components/ui/button';

const CardSection = () => {
  return (
    <section className="bg-white overflow-hidden py-10 md:py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          <div className="relative flex justify-center"> 
            {/* Image size ko yahan control kiya gaya hai max-w-sm se */}
            <div className="w-full max-w-[600px] md:max-w-[500px] p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <Image 
                src="/home/heroSection/istockphoto-1214971896-612x612.jpg" 
                alt="Property Image" 
                className="relative z-10 w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]" 
                width={600} 
                height={550} 
                loading="eager"
              />
            </div>
          </div>

          <div className="space-y-4 md:pl-6">
            <div className="inline-flex p-1 bg-[#F7F7FD] rounded-lg w-fit border border-slate-100">
              <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-[#7065F0] font-semibold text-xs md:text-sm">
                For tenants
              </button>
              <button className="px-4 py-1.5 text-slate-400 font-medium text-xs md:text-sm">
                For landlords
              </button>
            </div>

            <Heading 
              text="We make it easy for tenants and landlords."
              level="h2"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#000929] leading-[1.2] max-w-sm"
            />

            <Paragraph 
              text="Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time."
              className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[420px]" 
            />

            <div className="pt-2">
              <Button text="See more" variant="primary" className="bg-[#7065F0] hover:bg-[#5e54d6] transition-colors px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm">
                <PlayCircle size={16} />
              </Button>
            </div>
          </div>

        </div> 
      </Container>
    </section>
  );
};

export default CardSection;