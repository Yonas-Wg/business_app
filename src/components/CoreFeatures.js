"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const CoreFeatures = () => {
  const { theme } = useTheme();
  
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1">
        <span className="uppercase block font-semibold tracking-widest" style={{color: '#d4ba7d'}}>
          VISION
        </span>
        <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
        To become a leading importing and
 wholesale company in Ethiopia,
 
        </h2>
        <p className="text-lg leading-loose">
        recognized for providing a wide
 range of high-quality products and
 exceptional service, while driving
 sustainable growth and creating
 value for our customers and
 partners
        </p>
        <button className={`mt-5 w-fit md:text-base text-sm hover:border-2 border-2 font-semibold py-3 px-8 md:px-10 rounded-full transition-all hover:shadow-2xl ${theme === 'dark' ? 'bg-[#d4ba7d] text-[#02333d] border-[#d4ba7d] hover:bg-transparent hover:text-[#d4ba7d]' : 'bg-[#d4ba7d] text-white border-[#d4ba7d] hover:bg-transparent hover:text-[#d4ba7d]'}`}>
          Explore
        </button>
      </div>

      <div className="flex-1 relative w-full">
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"/features/core-features.png"}
            width={300}
            height={300}
            alt="core features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
