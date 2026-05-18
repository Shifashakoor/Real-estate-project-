import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser'; 
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';

const Box = ({ children, className }: any) => (
  <div className={className}>{children}</div>
);

const Section = ({ children, className }: any) => (
  <main className={className}>{children}</main>
);

const Button = ({ children, onClick, type = "button", className, disabled }: any) => (
  <button type={type} onClick={onClick} className={className} disabled={disabled}>
    {children}
  </button>
);


const FormField = ({ label, register, name, error, placeholder, type = "text", isTextArea = false }: any) => (
  <Box className="mb-4">
    <label className="block text-xs font-bold text-[#101828] uppercase mb-2">{label}</label>
    {isTextArea ? (
      <textarea
        {...register(name)}
        rows={4}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-200'} outline-none text-sm resize-none focus:border-[#02A652]`}
      />
    ) : (
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-200'} outline-none text-sm focus:border-[#02A652]`}
      />
    )}
    {error && <Paragraph text={error.message} className="text-red-500 text-[10px] mt-1 font-semibold" />}
  </Box>
);

const contactSchema = z.object({
  fullName: z.string().min(3, "Too short").regex(/^[a-zA-Z\s]+$/, "Letters only"),
  email: z.string().email("Invalid email").endsWith(".com", "Must end with .com"),
  subject: z.string().min(10, "Min 10 chars"),
  message: z.string().min(20, "Min 20 chars"),
});

const ContactPage = () => {
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    setStatus('');


    const templateParams = {
      name: data.fullName,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs.send(
      'service_zi9f9gq',       // Aapki Service ID
      'template_r6029vn',      // Aapki Template ID
      templateParams,
      'CqaAGR1IwIf3edgFN'      // Aapki Public Key
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setStatus('Success! Your message has been sent.');
       reset(); // Form clear karne ke liye
    })
    .catch((err) => {
       console.error('FAILED...', err);
       setStatus('Something went wrong. Please try again.');
    })
    .finally(() => {
       setLoading(false);
    });
  };

  return (
    <Section className="pt-32 pb-20 bg-[#F9FAFB]">
      <Container>
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Form */}
          <Box className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <Heading text="Send us a Message" level="h3" className="text-xl font-bold mb-8 text-[#101828]" />
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField label="Full Name" name="fullName" register={register} error={errors.fullName} placeholder="Enter your name" />
              <FormField label="Email" name="email" type="email" register={register} error={errors.email} placeholder="Enter your email" />
              <FormField label="Subject" name="subject" register={register} error={errors.subject} placeholder="What is this about?" />
              <FormField label="Message" name="message" register={register} error={errors.message} placeholder="How can we help?" isTextArea />
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#02A652] hover:bg-[#028a44] text-white font-bold py-4 rounded-lg mt-4 transition-all disabled:bg-gray-400"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {/* Success ya Error Message UI par dikhane ke liye */}
            {status && (
              <p className={`mt-4 text-xs font-semibold text-center ${status.includes('Success') ? 'text-green-600' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </Box>
          <Box className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <Heading text="Contact/homeowner care" level="h3" className="text-xl font-bold mb-8 text-[#101828]" />
            
            <Box className="space-y-8">
              {/* 1. Location Card */}
              <Box className="flex items-start gap-4">
                <Box className="w-12 h-12 bg-[#E0F2E9] rounded-full flex items-center justify-center text-[#02A652]">
                  <span className="text-xl">📍</span>
                </Box>
                <Box>
                  <Heading text="Location" level="h4" className="font-bold text-[#101828] text-lg" />
                  <Paragraph text="Surrey, BC" className="text-gray-500 text-sm" />
                </Box>
              </Box>

              {/* 2. Email Card */}
              <Box className="flex items-start gap-4">
                <Box className="w-12 h-12 bg-[#E0F2E9] rounded-full flex items-center justify-center text-[#02A652]">
                  <span className="text-xl">✉️</span>
                </Box>
                <Box>
                  <Heading text="Email" level="h4" className="font-bold text-[#101828] text-lg" />
                  <Button className="mt-2 bg-[#02A652] hover:bg-[#028a44] text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
                    <span>✉️</span> Send Email
                  </Button>
                </Box>
              </Box>

              {/* 3. Phone Card */}
              <Box className="flex items-start gap-4">
                <Box className="w-12 h-12 bg-[#E0F2E9] rounded-full flex items-center justify-center text-[#02A652]">
                  <span className="text-xl">📞</span>
                </Box>
                <Box>
                  <Heading text="Phone" level="h4" className="font-bold text-[#101828] text-lg" />
                  <Paragraph text="(604) 807-6419" className="text-[#02A652] font-extrabold text-sm mt-1" />
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Section>
  );
};

export default ContactPage;