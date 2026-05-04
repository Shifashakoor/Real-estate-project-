import Container from './Container';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
      <Container>
        {/* Top Section: Grid with 4 Columns */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Column 1: Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">E</div>
              <Heading level="h4" className="text-xl">Estatery</Heading>
            </div>
          </div>

          {/* Column 2: SELL A HOME & BUY A HOME */}
          <div>
            <div className="mb-10">
              <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">Sell a Home</Heading>
              <ul className="space-y-3">
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Request an offer</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Pricing</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Reviews</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Stories</Paragraph></li>
              </ul>
            </div>
            <div>
              <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">Buy a Home</Heading>
              <ul className="space-y-3">
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Buy</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Finance</Paragraph></li>
              </ul>
            </div>
          </div>

          {/* Column 3: BUY, RENT AND SELL & TERMS */}
          <div>
            <div className="mb-10">
              <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">Buy, Rent and Sell</Heading>
              <ul className="space-y-3">
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Buy and sell properties</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Rent home</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Builder trade-up</Paragraph></li>
              </ul>
            </div>
            <div>
              <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">Terms & Privacy</Heading>
              <ul className="space-y-3">
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Trust & Safety</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Terms of Service</Paragraph></li>
                <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Privacy Policy</Paragraph></li>
              </ul>
            </div>
          </div>

          {/* Column 4: ABOUT */}
          <div>
            <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">About</Heading>
            <ul className="space-y-3">
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Company</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">How it works</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Contact</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Investors</Paragraph></li>
            </ul>
          </div>

          {/* Column 5: RESOURCES */}
          <div>
            <Heading level="h4" className="text-sm font-bold uppercase mb-4 text-gray-900">Resources</Heading>
            <ul className="space-y-3">
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Blog</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Guides</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">FAQ</Paragraph></li>
              <li><Paragraph size="sm" className="text-gray-500 cursor-pointer">Help Center</Paragraph></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <Paragraph size="sm" className="text-gray-400">©2021 Estatery. All rights reserved</Paragraph>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;