import { Link } from 'react-router-dom';
import Container from './Container';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/40 backdrop-blur-md">
      <Container className="flex h-[96px] items-center justify-between">
        <Link to="/" className="no-underline text-inherit">
          <Heading level="h3" className="cursor-pointer">
            Estatery
          </Heading>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link to="/rent" className="no-underline text-inherit">
            <Paragraph size="md" className="cursor-pointer font-medium hover:text-indigo-600">
              Rent
            </Paragraph>
          </Link>
          <Link to="/buy" className="no-underline text-inherit">
            <Paragraph size="md" className="cursor-pointer font-medium hover:text-indigo-600">
              Buy
            </Paragraph>
          </Link>
          <Link to="/sell" className="no-underline text-inherit">
            <Paragraph size="md" className="cursor-pointer font-medium hover:text-indigo-600">
              Sell
            </Paragraph>
          </Link>
        </div>

        <div className="flex gap-4">
          <button type="button" className="px-4 py-2 font-semibold">
            Login
          </button>
          <button type="button" className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
            Sign up
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;