import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const VisionSection = () => {
  const visions = [
    { title: "Design Focused", desc: "Thoughtful architecture and functional layouts." },
    { title: "Community First", desc: "Building spaces that foster connections." },
    { title: "Sustainable Living", desc: "Eco-friendly materials and designs." },
    { title: "Enduring Value", desc: "Homes built to last for generations." }
  ];

  return (
    
<section className="bg-gray-50 pt-8 pb-4 md:pt-24 md:pb-12">    
    <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          
          <div className="flex-[1.5]"> 
             <img 
              src="/home/heroSection/istockphoto-1364477107-612x612.jpg"
              alt="Our Vision" 
              className="w-full rounded-2xl shadow-xl" />
          </div>

          <div className="flex-1">
            <Heading 
              text="Our Vision" 
              level="h2"
              className="text-[10px] font-bold mb-6 text-[#101828]" 
            />
            <Paragraph 
              text="To create thriving communities where families flourish. We are committed to excellence in every brick we lay." 
              className="text-gray-600 mb-8 text-sm" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[420px]">
              {visions.map((v, i) => (
                <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-start">
                  <Heading 
                    text={v.title} 
                    level="h6" 
                    className="text-[10px] font-bold mb-0.5 text-[#7065F0] uppercase tracking-widest leading-none" 
                  />
                  <Paragraph 
                    text={v.desc} 
                    className="text-[9px] text-gray-500 leading-tight" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div> 
      </Container>
    </section>
  );
};

export default VisionSection;