import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/mainLayout';
import Home from './pages/home';
import Buy from './pages/buy';
import Sell from './pages/sell';
import About from './pages/about';
import Contact from './pages/contact-us';
import Login from './pages/login';
import Signup from './pages/sign-up';
// 🔥 FIX: Ab yeh sahi wali detail file se link ho gaya ha
import PropertyDetails from './sections/buySection/propertyDetailSection'; 
import PrivacyPolicyPage from './pages/privacypolicy';
import TermsAndConditionPage from './pages/TermsAndCondition';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditionPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;