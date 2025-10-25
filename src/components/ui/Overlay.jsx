import React from 'react';
import { Link } from 'react-scroll';

const Overlay = ({navItems, setIsMobileMenuOpen}) => {
 

  return (
     <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <Link
                  duration={500}
                  to={item.href}
                  key={item.label}
                  onClick={() => {setIsMobileMenuOpen(false)}}
                  className="cursor-pointer text-2xl text-neutral-300 hover:text-neutral-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Overlay;
