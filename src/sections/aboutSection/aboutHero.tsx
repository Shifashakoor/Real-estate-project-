import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const AboutHero = () => {
  return (
    <section className="pt-10 pb-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Heading 
              text="SPEEDWAY HOMES: EVOLVING SPACES. ENDURING VALUES." 
              level="h2" 
              className="text-sm md:text-5xl font-extrabold text-[#101828] mb-6 leading-tight" 
            />
            <Paragraph 
              text="Speedway Homes is a Canadian family-owned and managed company... providing building and development services for the Fraser Valley since 1990." 
              className="text-gray-600 text-sm leading-relaxed mb-4" 
            />
          </div>
          <div className="flex-1 w-full">
            <img 
              src="public/home/heroSection/istockphoto-519434778-612x612.jpg" 
              alt="Modern Building" 
              className="w-full h-auto rounded-xl shadow-lg object-cover" 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;