import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/mainLayout';
import Home from './pages/home';
import Rent from './pages/rent';
import Buy from './pages/buy';
import Sell from './pages/sell';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </MainLayout>
  );
}

export default App;