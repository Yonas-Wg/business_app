"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const highlights = [
    "Premium Quality Products",
    "Reliable Trading Solutions", 
    "Global Supply Network",
    "Trusted Business Partner"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section
      className="relative overflow-hidden text-center flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center justify-center h-full mt-24 sm:mt-32 md:mt-40 lg:mt-52 px-4 sm:px-0"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#d4ba7d'}}></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-10 md:right-20 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full opacity-15 animate-bounce" style={{backgroundColor: '#02333d'}}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-10 md:left-20 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full opacity-25 animate-pulse" style={{backgroundColor: '#d4ba7d'}}></div>
        <div className="absolute bottom-48 sm:bottom-60 right-2 sm:right-6 md:right-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full opacity-10 animate-bounce" style={{backgroundColor: '#02333d'}}></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-fade-in" style={{backgroundColor: '#d4ba7d20', color: '#d4ba7d'}}>
            🚀 Established 2025 - Growing Strong
          </span>
        </div>
        
        <h1 className="capitalize flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3.2rem] 2xl:text-6xl font-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-[#d4ba7d] to-[#02333d] bg-clip-text text-transparent">
            Four Brothers
          </span>
          <span>General Trading</span>
        </h1>

        {/* Rotating highlights */}
        <div className="h-6 sm:h-8 mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl font-semibold transition-all duration-500 transform" style={{color: '#d4ba7d'}}>
            {highlights[currentSlide]}
          </p>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose my-3 sm:my-4 md:my-6 px-2 sm:px-4 md:px-0 max-w-3xl mx-auto">
          Your trusted partner in Ethiopia's import and wholesale market. We connect global suppliers with local businesses, 
          delivering quality products and reliable service across multiple industries.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-6 sm:mt-8">
          <Link href="#about">
            <button className={`w-full sm:w-auto group relative overflow-hidden text-sm sm:text-base hover:border-2 border-2 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full transition-all transform hover:scale-105 ${theme === 'dark' ? 'bg-[#d4ba7d] text-[#02333d] border-[#d4ba7d] hover:bg-transparent hover:text-[#d4ba7d]' : 'bg-[#d4ba7d] text-white border-[#d4ba7d] hover:bg-transparent hover:text-[#d4ba7d]'}`}>
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4ba7d] to-[#02333d] opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </Link>
          
          <Link href="#contact">
            <button className={`w-full sm:w-auto text-sm sm:text-base border-2 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full transition-all transform hover:scale-105 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-[#02333d]' : 'border-[#02333d] text-[#02333d] hover:bg-[#02333d] hover:text-white'}`}>
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 opacity-70">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <span className="text-green-500">✓</span>
            <span>Registered Business</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <span className="text-green-500">✓</span>
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <span className="text-green-500">✓</span>
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        {/* Enhanced image container with floating elements */}
        <div className="relative">
          <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.svg')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.svg')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
            
            {/* Floating cards around the image */}
            <div className="absolute top-8 sm:top-10 left-2 sm:left-5 bg-white shadow-lg rounded-lg p-2 sm:p-3 transform -rotate-12 animate-float hidden sm:block">
              <div className="text-lg sm:text-2xl mb-1">📦</div>
              <div className="text-xs font-semibold">Import</div>
            </div>
            
            <div className="absolute top-16 sm:top-20 right-2 sm:right-5 bg-white shadow-lg rounded-lg p-2 sm:p-3 transform rotate-12 animate-float-delayed hidden sm:block">
              <div className="text-lg sm:text-2xl mb-1">🌍</div>
              <div className="text-xs font-semibold">Global</div>
            </div>
            
            <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-10 bg-white shadow-lg rounded-lg p-2 sm:p-3 transform rotate-6 animate-float hidden sm:block">
              <div className="text-lg sm:text-2xl mb-1">🤝</div>
              <div className="text-xs font-semibold">Trust</div>
            </div>

            <Image
              src={"/four.jpg"}
              width={600}
              height={500}
              alt="Four Brothers General Trading"
              className="object-contain mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
