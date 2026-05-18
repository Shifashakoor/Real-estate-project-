import AboutHero from '../../sections/aboutSection/aboutHero';
import VisionSection from '../../sections/aboutSection/visionSection';
import TeamSection from '../../sections/aboutSection/teamSection';
import StatsSection from '../../sections/aboutSection/statsSection';
import WhyChooseUs from '../../sections/aboutSection/WhyChooseUsSection';
const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <VisionSection />
      <TeamSection />
      <WhyChooseUs/>
      <StatsSection /> 
    </>
  );
};

export default AboutPage;
