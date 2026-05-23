import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const TestimonialsSection = () => {
  const reviews = [
    { id: 1, 
      name: 'Sarah Connor', 
      role: 'Home Buyer', 
      feedback: 'Estatery made finding my dream home so effortless. The verified listings gave me peace of mind throughout the whole process!', 
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    { id: 2, 
      name: 'Michael Scott', 
      role: 'Property Investor', 
      feedback: 'The advanced filtering options are unmatched. I could easily narrow down exactly what I needed within minutes. Highly recommended!',
       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    { id: 3, 
      name: 'Emily Blunt',
       role: 'Tenant', 
      feedback: 'The process was so transparent and fast. I found my rental apartment in just 2 days. Truly a great experience!', 
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" bg-[#F7F7FD] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="text-center max-w-lg mx-auto mb-10">

          <Paragraph 
          text="TESTIMONIALS" className="text-[#7065F0] text-xs font-bold uppercase tracking-[0.2em]" />
          <Heading 
          text="What Our Customers Say" 
          level="h2" className="text-3xl font-extrabold text-[#000929] mt-2" />
          <Paragraph 
          text="See how Estatery has helped thousands." 
          className="text-slate-500 text-sm mt-2" />
        </div>
        <div className="relative max-w-lg mx-auto h-[240px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 flex flex-col justify-between h-[220px]">
                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
                  "{reviews[index].feedback}"
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img src={reviews[index].avatar} alt={reviews[index].name} className="w-12 h-12 rounded-full object-cover border-2 border-[#7065F0]/20" />
                  <div>
                    <h4 className="text-[#000929] font-bold text-sm">{reviews[index].name}</h4>
                    <span className="text-slate-400 text-xs">{reviews[index].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;