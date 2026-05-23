import { Link } from 'react-router-dom';
import Container from './Container';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const Footer = () => {
  const headingStyle = "text-xs font-[900] uppercase mb-6 text-[#101828] tracking-widest";

  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Intro */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src="/home/heroSection/Left Nav.png" 
                alt="Estatery Logo" 
                className="w-32 h-auto object-contain cursor-pointer" 
              /> 
            </Link>
            <Paragraph 
              text="The most trusted platform for buying, selling, and renting properties." 
              className="text-gray-400 text-xs leading-relaxed max-w-[200px]" 
            />
          </div>

          {/* Column 2: Pages */}
          <div>
            <Heading text="Pages" level="h4" className={headingStyle} />
            <ul className="space-y-3 list-none p-0">
              <li><Link to="/" className="no-underline"><Paragraph text="Home" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
              <li><Link to="/buy" className="no-underline"><Paragraph text="Buy" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
              <li><Link to="/sell" className="no-underline"><Paragraph text="Sell" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
              <li><Link to="/about" className="no-underline"><Paragraph text="About Us" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <Heading text="Policies" level="h4" className={headingStyle} />
            <ul className="space-y-3 list-none p-0">
              <li><Link to="/privacy" className="no-underline"><Paragraph text="Privacy Policy" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
              <li><Link to="/terms" className="no-underline"><Paragraph text="Terms & Condition" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
              <li><Link to="/faq" className="no-underline"><Paragraph text="FAQs" size="sm" className="text-gray-500 hover:text-[#7065F0] transition-colors" /></Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <Heading text="Get In Touch" level="h4" className={headingStyle} />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#7065F0] text-sm">📍</span>
                <Paragraph text="Surrey, BC V3S 1R2" className="text-gray-500 text-xs leading-snug" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7065F0] text-sm">📞</span>
                <a href="tel:5048971243" className="no-underline">
                  <Paragraph text="504-897-1243" className="text-gray-500 text-xs font-bold hover:text-[#7065F0]" />
                </a>
              </div>
              {/* Contact Us Button Added Back */}
              <div className="pt-2">
                <Link to="/contact" className="no-underline">
                  <button className="text-[#7065F0] text-xs font-bold border border-[#7065F0] px-4 py-2 rounded-lg hover:bg-[#7065F0] hover:text-white transition-all capitalize">
                    contact us 
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <Paragraph 
            text="©2026 Estatery. All rights reserved" 
            className="text-gray-400 text-[10px] uppercase font-bold tracking-wider" 
          />
          <div className="flex gap-6">
            <Link to="/privacy" className="no-underline"><Paragraph text="Privacy Policy" className="text-gray-400 text-[10px] uppercase font-bold hover:text-[#101828] cursor-pointer" /></Link>
            <Link to="/terms" className="no-underline"><Paragraph text="Terms" className="text-gray-400 text-[10px] uppercase font-bold hover:text-[#101828] cursor-pointer" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;