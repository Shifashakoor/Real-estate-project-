import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import StatItem from '../../components/ui/statitem'; 
const BenifitSection = () => {
  const statsData = [
    {
      icon: "/home/heroSection/Icon (1).svg",
      value: 9, 
      suffix: ".4%",
      label: "Property Return Rate"
    },
    {
      icon: "/home/heroSection/Icon (2).svg",
      value: 45876,
      suffix: "",
      label: "Property in Sell & Rent"
    },
    {
      icon: "/home/heroSection/Icon.svg",
      value: 6789,
      suffix: "",
      label: "Daily Completed Transactions"
    }
  ];

  return (
    <section className="bg-[#FBFAFF] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="max-w-md">
              <Heading 
                text="The new way to find your new home" 
                level="h2" 
              
              />
              <Paragraph 
              text="Find your dream place to live in with more than 10k+ properties listed."
               />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <StatItem 
                  key={index}
                  icon={stat.icon}
                  targetValue={stat.value} 
                  suffix={stat.suffix}  
                  label={stat.label}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
             <img src="/home/heroSection/Illustration.png" alt="..." />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenifitSection; 