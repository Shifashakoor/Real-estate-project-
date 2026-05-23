import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const CtaSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    if (form.current) {
      emailjs.sendForm(
        'service_zi9f9gq',   
        'template_r6029vn',  
        form.current,
        'CqaAGR1IwIf3edgFN'   
      )
      .then(() => {
        setStatus('Success! Thank you for subscribing.');
        form.current?.reset();
      }, () => {
        setStatus('Failed to send. Please try again.');
      })
      .finally(() => setLoading(false));
    }
  };

  return (
    <section className="py-12 md:py-16 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="bg-[#100A55] py-12 px-6 text-center text-white shadow-2xl shadow-indigo-100">
          <div className="max-w-xl mx-auto">
            <h5 className="text-[#7065F0] font-[800] text-[11px] tracking-[0.2em] uppercase mb-3">
              No Spam Promise
            </h5>
            
            <Heading 
              text="Are you a landlord?" 
              level="h2" 
              className="text-2xl md:text-3xl font-[800] text-white tracking-tighter" 
            />
            
            <Paragraph 
              text="Discover ways to increase your home's value and get listed. No Spam." 
              className="text-indigo-100/60 text-sm md:text-base mt-2 font-medium"
            />


            <form ref={form} onSubmit={sendEmail} className="mt-8 flex flex-col items-center">
              <div className="bg-white p-1.5 rounded-xl flex items-center w-full max-w-md shadow-inner">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-2 text-[#000929] text-sm md:text-base outline-none placeholder:text-slate-400 rounded-l-lg font-medium"
                  required
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#7065F0] hover:bg-[#5f54d8] text-white px-6 py-2.5 rounded-lg font-[800] text-sm transition-all shadow-md active:scale-95 disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
            {status && (
              <p className={`mt-3 text-xs font-bold ${status.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}

            <p className="text-indigo-200/40 text-[12px] mt-4 font-medium">
              Join <span className="text-white font-bold">10,000+</span> other landlords in our estatery community.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;