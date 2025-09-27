import Image from "next/image";

const WorkCard = ({ num, title }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
     
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center" style={{backgroundColor: '#02333d'}}>
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-2xl tracking-widest text-center" style={{color: '#d4ba7d'}}>
           MILESTONE
          </span>
          <h2 className="text-2xl sm:text-xl font-semibold my-3 text-center ">
          Maintain commitment to high-quality
 products, excellent customer service, and
 sustainable growth throughout all years
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title=" Establish strong supplier relationships
 locally and internationally.
" />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Expand product range to include more
 high-demand items"
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <WorkCard num="03" title="Strengthen brand recognition in major
 Ethiopian cities." />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <WorkCard num="04" title=" Form strategic partnerships with key
 retailers and distributors." />
        </div>
      </div>
    </section>
  );
};

export default Work;
