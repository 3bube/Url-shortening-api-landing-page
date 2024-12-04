"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-6 md:p-12 sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-10">
            <Image src="/images/logo.svg" alt="Logo" width={110} height={110} />

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-8 text-grayishViolet font-bold">
                <li className="hover:text-veryDarkBlue cursor-pointer">
                  Features
                </li>
                <li className="hover:text-veryDarkBlue cursor-pointer">
                  Pricing
                </li>
                <li className="hover:text-veryDarkBlue cursor-pointer">
                  Resources
                </li>
              </ul>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-grayishViolet font-bold hover:text-veryDarkBlue">
              Login
            </button>
            <button className="bg-cyan hover:bg-opacity-70 transition-all text-white px-6 py-2 rounded-full font-bold">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-grayishViolet hover:text-veryDarkBlue"
              size={24}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-4 right-4 top-24 bg-darkViolet rounded-lg p-6 mt-4">
            <nav className="flex flex-col items-center">
              <ul className="flex flex-col items-center gap-6 text-white font-bold w-full">
                <li className="cursor-pointer hover:text-gray">Features</li>
                <li className="cursor-pointer hover:text-gray">Pricing</li>
                <li className="cursor-pointer hover:text-gray">Resources</li>
                <li className="w-full h-[1px] bg-grayishViolet opacity-25" />
                <li className="cursor-pointer hover:text-gray">Login</li>
                <li className="w-full">
                  <button className="w-full bg-cyan hover:bg-opacity-70 transition-all text-white py-2 rounded-full font-bold">
                    Sign Up
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
