import { Link } from 'react-router-dom';
import Container from './Container';
import Paragraph from '../ui/paragraph';

const Box = ({ children, className }: any) => <div className={className}>{children}</div>;

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/40 backdrop-blur-md">
      <Container className="flex h-[96px] items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="no-underline flex items-center">
          <img 
            src="/home/heroSection/Left Nav.png" 
            alt="Estatery Logo" 
            className="w-40 h-40 object-contain cursor-pointer" 
          />
        </Link>

        {/* Links Section - Updated Order & Removed Rent */}
        <Box className="hidden gap-8 md:flex">
          {/* Buy Link */}
          <Link to="/buy" className="no-underline text-inherit">
            <Paragraph 
              text="Buy" 
              size="md" 
              className="cursor-pointer font-medium hover:text-blue-600 transition-colors" 
            />
          </Link>

          {/* Sell Link */}
          <Link to="/sell" className="no-underline text-inherit">
            <Paragraph 
              text="Sell" 
              size="md" 
              className="cursor-pointer font-medium hover:text-blue-600 transition-colors" 
            />
          </Link>
          
          {/* About Us Link */}
          <Link to="/about" className="no-underline text-inherit">
            <Paragraph 
              text="About Us" 
              size="md" 
              className="cursor-pointer font-medium hover:text-blue-600 transition-colors" 
            />
          </Link>
        </Box>

        {/* Buttons Section using Link for Navigation */}
        <Box className="flex gap-4 items-center">
          <Link to="/login" className="no-underline">
            <Paragraph 
               text="Login"
               className="px-4 py-2 font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
            />
          </Link>
          <Link to="/signup" className="no-underline">
            <Box className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-all active:scale-95 cursor-pointer shadow-md shadow-blue-100">
               <Paragraph text="Sign up" className="font-bold text-white" />
            </Box>
          </Link>
        </Box>

      </Container>
    </nav>
  );
};

export default Navbar;