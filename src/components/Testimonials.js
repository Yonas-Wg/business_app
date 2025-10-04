import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import PersonIcon from "@mui/icons-material/Person";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, icon, name, role, description }) => {
  return (
    <div className="mx-1 sm:mx-2 flex flex-col gap-3 sm:gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg hover:shadow-xl transition-all">
      <div style={{color: '#d4ba7d'}} className="text-sm sm:text-base">
        <StarRoundedIcon className="text-base sm:text-lg" />
        <StarRoundedIcon className="text-base sm:text-lg" />
        <StarRoundedIcon className="text-base sm:text-lg" />
        <StarRoundedIcon className="text-base sm:text-lg" />
        {star}
      </div>
      <h2 className="text-base sm:text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-relaxed sm:leading-loose text-sm sm:text-base">
        {description}
      </p>
      <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5">
        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#d4ba7d] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
          <p className="font-[500] text-xs sm:text-sm" style={{color: '#d4ba7d'}}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-4 sm:px-5 md:px-16 flex flex-col gap-4 sm:gap-5 py-8 sm:py-12 md:py-16"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Reliable Partner for Our Business"
            icon={<ManIcon className="text-white text-lg sm:text-xl" />}
            name="Abebe Tesfaye"
            role="Construction Company Owner"
            description="Four Brothers General Trading has been a consistent supplier. Their timely deliveries and quality products have made a huge difference in keeping our business running smoothly. We have been working with them for over two years and their reliability has never wavered."
          />
        </div>
        <div>
          <Card
            title="Wide Product Range and Great Service"
            icon={<WomanIcon className="text-white text-lg sm:text-xl" />}
            name="Hirut Alemayehu"
            role="Office Supplies Manager"
            description="The variety of products available through Four Brothers is impressive. From construction materials to office supplies, they have everything we need under one roof with excellent customer service. Their customer support team is always available to help with any questions or concerns."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Trustworthy and Professional"
            icon={<ManIcon className="text-white text-lg sm:text-xl" />}
            name="Dawit Mengistu"
            role="Retail Business Owner"
            description="Working with Four Brothers General Trading has been a pleasure. Their professional approach and commitment to quality has earned our trust and long-term partnership. They consistently deliver on their promises and have become an invaluable partner for our business operations."
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Exceptional Service and Support"
            icon={<WomanIcon className="text-white text-lg sm:text-xl" />}
            name="Selamawit Gebre"
            role="Import/Export Manager"
            description="The team at Four Brothers goes above and beyond to ensure customer satisfaction. Their organized approach and attention to detail makes every transaction smooth and efficient. We have been working with them for over two years and their reliability has never wavered."
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
