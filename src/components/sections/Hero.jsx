import React from 'react';
import Button from '../ui/Overlay';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-yellow-300">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          A passionate developer creating amazing web experiences with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            Download CV
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
