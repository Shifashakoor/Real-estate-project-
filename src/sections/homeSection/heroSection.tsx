import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Button from '../../components/ui/button';

const HeroSection = () => {
  return (
    <Container 
      as="section" 
      clean={true} 
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-[url('/home/heroSection/istockphoto-187718138-612x612.jpg')] bg-cover bg-center"
    >
      <Container clean={true} className="absolute inset-0 bg-black/55 z-0" />
      
      <Container className="relative z-10 text-white flex flex-col items-center text-center">
        <Container clean={true} className="max-w-4xl space-y-8 flex flex-col items-center">
          <Heading 
            text="Find a home that fits your life" 
            level="h1" 
            className="text-white drop-shadow-lg"
          />
          
          <Paragraph 
            text="Browse curated listings, compare neighborhoods, and move with confidence. Your next chapter starts with the right front door."
            size="lg"
            className="max-w-2xl mx-auto text-indigo-50/90"
          />
            
          <Container
           clean={true}
            className="flex flex-wrap gap-4 pt-4 justify-center">
            <Button 
              text="Browse homes" 
              variant="primary" 
              className="px-8 py-3.5 text-lg"
              onClick={() => window.location.href = '/buy'}
            />
            <Button 
              text="Sell Your Home" 
              variant="outline" 
              className="text-white border-white/80 px-8 py-3.5 text-lg hover:bg-white hover:text-indigo-600" 
              onClick={() => window.location.href = '/sell'}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default HeroSection;