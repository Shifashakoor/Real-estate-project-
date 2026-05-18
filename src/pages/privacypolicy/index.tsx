import { useEffect } from 'react';
import PrivacySection from '../../sections/privacySection/privacy'; 

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <PrivacySection />
    </div>
  );
};

export default PrivacyPolicyPage;