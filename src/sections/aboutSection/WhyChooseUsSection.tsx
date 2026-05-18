import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const Box = ({ children, className }: any) => <div className={className}>{children}</div>;
const Section = ({ children, className }: any) => <section className={className}>{children}</section>;
const Image = ({ src, alt, className }: any) => <img src={src} alt={alt} className={className} />;

const WhyChooseUs = () => {
  const features = [
    { title: "67+ units built",
       desc: "Expert Craftsmanship" },
    { title: "10+ years of experience",
       desc: "Timely Delivery" },
    { title: "BC Licensed Builder", 
      desc: "Modern Design" }
  ];

  return (
    <Section className="relative py-20 md:py-32 overflow-hidden text-white">
      <Box className="absolute inset-0 z-0">
        <Image 
          src="/home/heroSection/istockphoto-1016528726-1024x1024.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <Box className="absolute inset-0 bg-black/70"></Box> 
      </Box>

      <Container className="relative z-10">
        <Box className="flex flex-col md:flex-row gap-12 items-center">
          
        
          <Box className="flex-1 grid grid-cols-3 gap-4 text-center">
            {features.map((f, i) => (
              <Box key={i} className="flex flex-col items-center">
                <Box className="text-3xl mb-2 font-bold">{f.title.split(' ')[0]}</Box>
                <Paragraph 
                  text={f.title.split(' ').slice(1).join(' ')} 
                  className="text-[10px] uppercase tracking-tighter text-gray-300" 
                />
              </Box>
            ))}
          </Box>

          {/* Content Area */}
          <Box className="flex-1">
            <Paragraph 
              size='sm'
              text="Family Focused Communities" 
              className="text-[#02A652]" 
            />
            <Heading 
              text="Speedway Homes is dedicated to creating communities." 
              level="h2" 
              className="text-3xl font-bold mt-4 mb-6 text-white" 
            />
            <Paragraph 
              size='sm'
              text="We create environments that cater to every aspect of family life. Discover the perfect place to call home." 
              className="text-gray-300 leading-relaxed" 
            />
          </Box>
        </Box>
        <Box className="mt-24 pt-12 border-t border-white/20 text-center">
          <Heading 
            text="What Our Clients Have to Say"
            level="h2" 
            className="text-white mb-8" 
          />
          <Box className="max-w-2xl mx-auto">
            <Paragraph 
              text='"The whole building process was seamless and stress-free."' 
              className="italic text-lg text-gray-200" 
            />
            <Paragraph 
              text="— Homeowner" 
              className="mt-4 text-[#02A652] font-semibold text-sm" 
            />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;