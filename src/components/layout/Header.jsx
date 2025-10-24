import React, {useState} from 'react';
import Overlay from '../ui/Overlay';
import MobileButton from '../ui/MobileButton';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 $}`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="text-4xl font-bold gradient-text">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                
                  onClick={() => {
                    console.log("🚀 ~ Header ~ onClick:");
                  }}
                  className=" text-2xl relative group px-6 py-4  text-neutral-300 hover:text-neutral-50"
                >
                  {item.label}
                   <span className={" absolute bottom-0 left-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] h-[3px] w-0 group-hover:w-full transition-all duration-300"}></span>
                </button>

              ))}
            </div>

            {/* Mobile Menu Button */}
            <MobileButton isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <Overlay navItems={navItems}/>}
    </>
  );
};

export default Header;