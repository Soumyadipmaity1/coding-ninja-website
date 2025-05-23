"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between w-full fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ease-in-out ${
        isScrolled ? 'bg-[#141819] bg-opacity-60 backdrop-blur-md' : 'bg-transparent '
      } text-white`}
      style={{ height: '80px' }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2 ml-3 sm:ml-5"
          />
        </Link>

        <div className="hidden lg:flex justify-center flex-1 space-x-4 nav-items">
          <NavItem href="/" text="Home" />
          <NavItem href="/" text="About Us" />
          <NavItem href="/" text="Domain" />
          <NavItem href="/" text="Events" />
          {/* <NavItem href="/" text="Contact us" / */}
          <NavItem href="/register/metron" text="Register" />
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center absolute top-[80px] left-0 right-0 bg-[#141819] bg-opacity-60 blur-nav z-10 py-4">
          <NavItem href="/" text="Home" />
          <NavItem href="/" text="About Us" />
          <NavItem href="/" text="Domain" />
          <NavItem href="/" text="Events" />
          <NavItem href="/" text="Register" />
        </div>
      )}
    </nav>
  );
};


const NavItem = ({ href, text }) => (
  <Link href={href} className="group relative px-2 py-2 md:py-1 md:px-2 lg:px-4">
    <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-40"></div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-white -translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="relative z-10 text-[15px] font-medium sm:text-base md:text-lg lg:text-xl transition-colors duration-300 ease-in-out">
      {text}
    </div>
  </Link>
);

export default Navbar;
