import React from 'react';

const Overlay = ({navItems}) => {
 

  return (
     <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {}}
                  className="text-2xl text-neutral-300 hover:text-neutral-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Overlay;
