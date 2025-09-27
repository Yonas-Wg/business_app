import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div className="px-2 sm:px-4">
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto mb-3 sm:mb-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24"
      />
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-4 sm:px-5 md:px-16 py-8 sm:py-12 md:py-16" id="features">
      <span className="service-name text-center block mb-3 sm:mb-4">WHATS THE PROCESS</span>
      <h2 className="title text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-12 md:mb-16 px-2"> Business Management & Operations:</h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center">
        <FeatureProduct
          imgSrc="/features/business-management.svg"
          title="Business Management:"
          desc="
Overseeing all company activities, ensuring smooth coordination between importing, distribution, and product management, and maintaining efficiency across operations."
        />
        <FeatureProduct
          imgSrc="/features/distribution.svg"
          title="Wholesale Distribution:"
          desc="  Efficiently
 delivering products to retailers and
 businesses across Ethiopia."
        />
        <FeatureProduct
          imgSrc="/features/inventory.svg"
          title=" Product Management:"
          desc=" Maintaining a
 diverse range of products, ensuring
 quality, availability, and meeting market
 demand"
        />
        <FeatureProduct
          imgSrc="/features/importing.svg"
          title="Importing:"
          desc=" Identifying and sourcing high
quality products from international
 suppliers"
        />
      </div>
    </section>
  );
};

export default Features;
