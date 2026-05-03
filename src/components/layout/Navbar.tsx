import { useState } from 'react';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';
const Navbar = () => {
  return (
    <nav className="w-full h-[96px] bg-white/40 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 fixed top-0 z-50">
      
      {/* Logo: Yahan hum Heading ko REUSE kar rahe hain */}
      <Heading level="h3" className="cursor-pointer">
        Estatery
      </Heading>

      {/* Menu Links: Yahan Paragraph ko REUSE kar rahe hain */}
      <div className="hidden md:flex gap-8">
        <Paragraph size="md" className="font-medium hover:text-indigo-600 cursor-pointer">
          Rent
        </Paragraph>
        <Paragraph size="md" className="font-medium hover:text-indigo-600 cursor-pointer">
          Buy
        </Paragraph>
        <Paragraph size="md" className="font-medium hover:text-indigo-600 cursor-pointer">
          Sell
        </Paragraph>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 font-semibold">Login</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Sign up</button>
      </div>
      
    </nav>
  );
};

export default Navbar;