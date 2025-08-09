"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

const ATDigitalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "SERVICES", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CONTACT US", href: "#" },
    { name: "CAREERS", href: "#" },
  ];

  const renderNavItems = (mobile = false) =>
    navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={`${
          mobile
            ? "block px-3 py-2 hover:bg-purple-600 rounded-md"
            : "hover:text-blue-200"
        } 
          text-white transition-colors duration-200 font-medium text-sm tracking-wide
          ${mobile ? "" : "whitespace-nowrap"}`}
        onClick={() => mobile && setIsMenuOpen(false)}
      >
        {item.name}
      </a>
    ));

  return (
    <header className="bg-[#4F46E5] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              className="w-auto h-9 object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {renderNavItems()}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-blue-200 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#4F46E5]">
          <div className="px-2 pt-2 pb-4 space-y-1">{renderNavItems(true)}</div>
        </div>
      )}
    </header>
  );
};

export default ATDigitalHeader;
