"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Business categories images - matched with materials folder
const images = [
  {
    src: "/materials/con_mat.jpg",
    alt: "Construction Materials",
    title: "Construction Materials",
    description: "Quality building supplies and construction essentials"
  },
  {
    src: "/materials/elec_mat.png", 
    alt: "Electronics Materials",
    title: "Electronics Materials",
    description: "Modern electronic components and devices"
  },
  {
    src: "/materials/kitchen.webp",
    alt: "Kitchen Set Materials", 
    title: "Kitchen Set Materials",
    description: "Complete kitchen solutions and appliances"
  },
  {
    src: "/materials/plastic.jpg",
    alt: "Plastic Materials",
    title: "Plastic Materials",
    description: "Jerry cans, basins, buckets, and tires"
  },
  {
    src: "/materials/textile.jpeg",
    alt: "Textile Materials",
    title: "Textile Materials", 
    description: "Quality fabrics and textile products"
  },
  {
    src: "/materials/stationary.jpg",
    alt: "Stationary",
    title: "Stationary",
    description: "Office supplies and stationery items"
  },
  {
    src: "/materials/sanity.jpg",
    alt: "Sanitary Materials",
    title: "Sanitary Materials",
    description: "Hygiene and sanitary products"
  }
].filter(Boolean); 

const HeroSection = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
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

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);
  
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
        {/* Image Slider Container - Enhanced Width */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.svg')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.svg')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
            
            {/* Floating cards around the slider */}
            <div className={`absolute top-8 sm:top-10 left-2 sm:left-5 shadow-lg rounded-lg p-2 sm:p-3 transform -rotate-12 animate-float hidden sm:block ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <div className="text-lg sm:text-2xl mb-1">📦</div>
              <div className="text-xs font-semibold">Import</div>
            </div>
            
            <div className={`absolute top-16 sm:top-20 right-2 sm:right-5 shadow-lg rounded-lg p-2 sm:p-3 transform rotate-12 animate-float-delayed hidden sm:block ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <div className="text-lg sm:text-2xl mb-1">🌍</div>
              <div className="text-xs font-semibold">Global</div>
            </div>
            
            <div className={`absolute bottom-8 sm:bottom-10 left-4 sm:left-10 shadow-lg rounded-lg p-2 sm:p-3 transform rotate-6 animate-float hidden sm:block ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <div className="text-lg sm:text-2xl mb-1">🤝</div>
              <div className="text-xs font-semibold">Trust</div>
            </div>

            {/* Enhanced Image Slider */}
            <div 
              className="relative group overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative w-full h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImageSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4ba7d] to-[#02333d] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Enhanced Image Title Overlay - Mobile Optimized */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-5 text-white border border-white/20">
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-[#d4ba7d] to-white bg-clip-text text-transparent">
                    {images[currentImageSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-tight sm:leading-relaxed">
                    {images[currentImageSlide].description}
                  </p>
                </div>
              </div>

              {/* Enhanced Navigation Arrows */}
              <button
                onClick={() => setCurrentImageSlide((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#d4ba7d]/80 to-[#02333d]/80 hover:from-[#d4ba7d] hover:to-[#02333d] text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-white/20 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentImageSlide((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#d4ba7d]/80 to-[#02333d]/80 hover:from-[#d4ba7d] hover:to-[#02333d] text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-white/20 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Enhanced Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-gradient-to-r from-[#d4ba7d]/80 to-[#02333d]/80 hover:from-[#d4ba7d] hover:to-[#02333d] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-white/20 backdrop-blur-sm"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 shadow-lg ${
                    index === currentImageSlide 
                      ? 'bg-gradient-to-r from-[#d4ba7d] to-[#02333d] scale-125 shadow-[#d4ba7d]/50' 
                      : 'bg-gray-400 hover:bg-gray-600 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
