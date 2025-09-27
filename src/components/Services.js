"use client";

import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 md:gap-8 lg:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="flex-shrink-0 w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18"
      />
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-4 sm:px-5 md:px-16 mx-auto py-8 sm:py-12 md:py-16" id="services">
      <div className="flex gap-6 sm:gap-8 md:gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full rounded-lg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-3 sm:px-4 py-2 rounded-lg">
            <p className="text-xs sm:text-sm font-semibold">Company Overview Video</p>
            <p className="text-xs opacity-80">Coming Soon</p>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="service-name text-center lg:text-left block mb-2">
              OUR SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left px-2 lg:px-0">
            Operating as a sole proprietorship,
 enabling flexible ownership and
 management, and providing overall
 commercial and operational
 support across all activities
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/distribution.svg"}
            title="Wholesale Distribution:"
            desc="
 Supplying a wide range
 of products to retailers
 and businesses across
 Ethiopia."
          />
          <ServiceCard
            imgSrc={"/features/inventory.svg"}
            title=" Product Variety: "
            desc="Product Variety: Offering a broad and diverse selection of product lines designed to address different customer preferences and market demands, while ensuring consistent quality and accessibility across all categories."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
