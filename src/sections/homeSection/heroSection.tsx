import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Button from '../../components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* --- Full-Screen Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img
          // Referencing image_0.png as a placeholder image path. Use your correct path.
          src="/home/heroSection/istockphoto-187718138-612x612.jpg" // Replace with your image_0.png path
          alt="Luxurious estate exterior"
          className="w-full h-full object-cover object-center"
        />
        {/* --- Dark Overlay for Text Readability --- */}
        <div className="absolute inset-0 bg-black/55" />
      </div>
     
      {/* --- Content Container (Centered Over Image) --- */}
      <Container className="relative z-10 text-white flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-8">
          <Heading 
            text="Find a home that fits your life" 
            level="h1" 
            className="text-white drop-shadow-lg" // Text shadow added for contrast
          />
          
          <Paragraph 
            text="Browse curated listings, compare neighborhoods, and move with confidence. Your next chapter starts with the right front door."
            size="lg"
            className="max-w-2xl mx-auto text-indigo-50/90" // Slightly lighter text for readability
          />
            
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <Button 
              text="Browse homes" 
              variant="primary" 
              className="px-8 py-3.5 text-lg" // Larger primary button
            />
            <Button 
              text="Sell Your Home" // Changed second button text for variety
              variant="outline" 
              className="text-white border-white/80 px-8 py-3.5 text-lg hover:bg-white hover:text-indigo-600" 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;