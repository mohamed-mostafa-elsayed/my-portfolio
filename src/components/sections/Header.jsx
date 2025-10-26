import React, { useEffect, useState } from 'react';
import Overlay from '../ui/Overlay';
import MobileButton from '../ui/MobileButton';
import { Link, Element } from 'react-scroll';
import {navItems} from "@/data/portfolio";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])

  return (
    <Element name='#home'>
      <nav className={`h-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card shadow-lg " : "bg-transparent"
        }`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="text-4xl font-bold gradient-text">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-bold">
              {navItems.map((item) => (
                <Link
                  duration={500}
                  to={item.href}
                  key={item.label}

                  onClick={() => {
                    console.log("🚀 ~ Header ~ onClick:");
                  }}
                  className=" cursor-pointer text-2xl relative group px-6 py-4  text-neutral-300 hover:text-neutral-50"
                >
                  {item.label}
                  <span className={" absolute bottom-0 left-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] h-[3px] w-0 group-hover:w-full transition-all duration-300"}></span>
                </Link>

              ))}
            </div>

            {/* Mobile Menu Button */}
            <MobileButton isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <Overlay navItems={navItems} setIsMobileMenuOpen={setIsMobileMenuOpen} />}
    </Element>
  );
};

export default Header;