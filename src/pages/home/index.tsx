import HeroSection from '../../sections/homeSection/heroSection';
import CardSection from '../../sections/homeSection/cardSection';
import BenifitSection from "../../sections/homeSection/benefitSection";
import PropertyListingSection from '../../sections/homeSection/propertyListingSection';
import TestimonialsSection from "../../sections/homeSection/testimonialsSection";
import CtaSection from "../../sections/homeSection/ctaSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <CardSection />
      <BenifitSection /> 
      <PropertyListingSection/>
      <TestimonialsSection/>
      <CtaSection/>
    </>
  );
};

export default Home;