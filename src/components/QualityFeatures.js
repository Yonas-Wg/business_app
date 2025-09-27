import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">OUR GOALS</span>
      <h1 className="title text-xl text-center "> Sustainable Growth and Excellence:
 </h1>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/expansion.svg"
          title=" Market Expansion:"
          desc=" Expand product
 range and strengthen the company's
 presence across Ethiopia and
 eventually the East African region"
        />
        <QualityFeature
          imgSrc="/features/efficiency.svg"
          title=" Operational Efficiency: "
          desc="Build robust
 supply chains, streamline processes,
 and improve overall business
 management to maximize
 productivity and profitability.
"
        />
       
      </div>
    </section>
  );
};

export default QualityFeatures;
