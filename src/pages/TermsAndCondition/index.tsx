import { useEffect } from 'react';
import TermsSection from '../../sections/TermsandconditionSection/terms'; 

const TermsAndConditionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <TermsSection />
    </div>
  );
};

export default TermsAndConditionPage;