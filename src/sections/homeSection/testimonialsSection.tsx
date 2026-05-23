import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const testimonials = [
  {
    id: 0,
    name: "Mira Cole",
    role: "Renter",
    quote: "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes.",
    image: "/home/heroSection/Group 14073.png"
  },
  {
    id: 1,
    name: "John Smith",
    role: "Landlord",
    quote: "The best experience I've ever had! Selling my property was so seamless and fast using Estatery.",
    image: "/home/heroSection/image_1b7a0127.png"
  },
  {
    id: 2,
    name: "Sarah Jen",
    role: "Property Manager",
    quote: "Highly recommended! Their platform offers the most accurate market analysis I have seen so far.",
    image: "/home/heroSection/image_131cb701.png"
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slider logic: Har 4 second baad change hoga
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-white font-['Plus_Jakarta_Sans',sans-serif]"> {/* py ko kam kiya */}
      <Container>
        <div className="max-w-xl mx-auto text-center">
          {/* Header Area */}
          <div className="mb-4"> {/* Margin kam ki */}
            <Heading text="Testimonials" level="h2" className="text-3xl font-bold" />
            <Paragraph text="See what our property managers, landlords, and tenants have to say" className="text-slate-500 mt-1" />
          </div>

          {/* Slider Content - Left to Right motion ke liye logic */}
          <div className="relative min-h-[160px] overflow-hidden"> {/* Height kam ki aur overflow hidden kiya */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={testimonials[index].id}
                // Initial right se start, exit left par jayega
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -50 }} 
                transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth motion
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {/* Quote Container: py-1 kiya, extra space khatam */}
                <div className="py-1  w-full px-4">
                  <Paragraph 
                    text={`"${testimonials[index].quote}"`} 
                    className="text-base md:text-lg font-bold text-[#000929] leading-tight" 
                  />
                </div>
                
                {/* Name Container: mt-2 kiya */}
                <div className="mt-2">
                  <h4 className="font-bold text-xs text-[#000929]">
                    {testimonials[index].name}, <span className="text-slate-400 font-medium">{testimonials[index].role}</span>
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Avatars - Name aur images ke beech gap ko tight kiya */}
          <div className="flex justify-center items-center gap-2 mt-1"> {/* mt-1 aur gap-2 kiya */}
            {testimonials.map((t, i) => (
              <div 
                key={t.id}
                onClick={() => setIndex(i)}
                className={`w-9 h-9 rounded-full border p-0.5 cursor-pointer transition-all ${index === i ? 'border-[#7065F0] opacity-100' : 'border-transparent grayscale opacity-30 hover:grayscale-0'}`}
              >
                <img src={t.image} alt="user" className="w-full h-full rounded-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;