import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const TeamSection = () => {
  const team = [
    { 
      name: "Sarbjit Taggar", 
      role: "Founder", 
      desc: "With over three decades of construction experience, Sarbjit is a true visionary leader in the industry. Since founding Speedway Homes in 1990, Sarbjit has led the company to build hundreds of residential and commercial units across the Fraser Valley. His commitment to quality and enduring values has been the foundation of the company's success.",
      image: "/home/heroSection/image_131cb701.png"
    },
    { 
      name: "Manveer Taggar", 
      role: "Vice President", 
      desc: "Manveer brings a wealth of knowledge in project management and strategic growth to the team. He oversees the day-to-day operations and ensures that every project meets the high standards of Speedway Homes. His focus on innovation and efficiency has helped the company expand its footprint in the region.",
      image: "/home/heroSection/image_1b7a0127.png" 
    },
    { 
      name: "Jasah Taggar", 
      role: "Vice President", 
      desc: "Jasah is dedicated to community development and ensuring that every home we build contributes positively to its surroundings. Her passion for sustainable design and community engagement has led to the creation of vibrant and thriving neighborhoods.",
      image: "/home/heroSection/image_c4641343.png" 
    }
  ];

  return (
    <section className="pt-8 pb-16 md:py-24 bg-[#F9FAFB]">
      <Container>
        <div className="text-center mb-10">
          <Heading text="Meet the Team" level="h2" className="text-3xl font-bold mb-4 text-[#101828]" />
          <Paragraph text="Our experienced leadership team brings decades of expertise in construction, development, and finance." className="text-gray-500 text-sm max-w-2xl mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all">
              
              <div className="relative w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <Heading text={m.name} level="h3" className="text-xl font-bold mb-1 text-[#101828]" />
              <Paragraph text={m.role} className="text-[#02A652] font-semibold text-sm mb-6" /> 
              
              <Paragraph 
                text={m.desc} 
                className="text-gray-500 text-[12px] leading-relaxed text-justify" 
              />
            </div>
          ))}
        </div> 
      </Container>
    </section>
  );
};

export default TeamSection;