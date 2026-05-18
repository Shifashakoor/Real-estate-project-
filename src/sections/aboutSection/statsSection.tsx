import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const StatsSection = () => {
  const stats = [
    { number: "67+", 
      label: "UNITS BUILT", 
      desc: "Successfully delivered residential and commercial units." },
    { number: "30+",
       label: "YEARS EXPERIENCE",
        desc: "Decades of excellence in the construction industry." },
    { number: "100%",
       label: "CLIENT SATISFACTION", desc: "Our commitment to quality and enduring values." }
  ];

  return (
    <section className="bg-[#101828] py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left border-l-2 border-[#7065F0] pl-6">
              <Heading 
                text={stat.number} 
                level="h2" 
                className="text-4xl font-extrabold text-white mb-2" 
              />
              <Heading 
                text={stat.label} 
                level="h4" 
                className="text-[#7065F0] text-sm font-bold tracking-widest mb-3" 
              />
              <Paragraph 
                text={stat.desc} 
                className="text-gray-400 text-xs leading-relaxed" 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;