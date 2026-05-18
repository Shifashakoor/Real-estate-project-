import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const TestimonialsSection = () => {
  // Dummy Reviews Data
  const reviews = [
    {
      id: 1,
      name: 'Sarah Connor',
      role: 'Home Buyer',
      feedback: 'Estatery made finding my dream home so effortless. The verified listings gave me peace of mind throughout the whole process!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Scott',
      role: 'Property Investor',
      feedback: 'The advanced filtering options are unmatched. I could easily narrow down exactly what I needed within minutes. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-16 bg-[#F7F7FD] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-[#7065F0] text-xs font-bold uppercase tracking-wider">Testimonials</span>
          <Heading 
            text="What Our Customers Say" 
            level="h2" 
            className="text-3xl font-extrabold text-[#000929] mt-2"
          />
          <Paragraph 
            text="Don't just take our word for it, see how Estatery has helped thousands of buyers find their perfect space." 
            className="text-slate-500 text-sm mt-3"
          />
        </div>

        {/* Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              
              {/* Review Text */}
              <p className="text-slate-600 text-sm italic leading-relaxed">
                "{review.feedback}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#7065F0]/20"
                />
                <div>
                  <h4 className="text-[#000929] font-bold text-sm">{review.name}</h4>
                  <span className="text-slate-400 text-xs">{review.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default TestimonialsSection;