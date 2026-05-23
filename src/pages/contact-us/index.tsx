import ContactSection from '../../sections/contactSection/contact';
import { useEffect } from 'react';
const ContactPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <ContactSection />
    </>
  );
};

export default ContactPage;