import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useTheme } from "next-themes";

const TeamCard = ({ imgSrc, name, title, isLeadership = false }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="relative flex flex-col gap-2 sm:gap-3 md:hover:shadow-lg rounded-xl py-6 sm:py-8 md:py-10 team-card md:cursor-pointer px-4"
      onMouseEnter={isLeadership ? (e) => {
        const nameEl = e.currentTarget.querySelector('.team-name');
        const titleEl = e.currentTarget.querySelector('.team-title');
        const hoverColor = theme === 'dark' ? 'white' : 'black';
        if (nameEl) nameEl.style.color = hoverColor;
        if (titleEl) titleEl.style.color = hoverColor;
      } : undefined}
      onMouseLeave={isLeadership ? (e) => {
        const nameEl = e.currentTarget.querySelector('.team-name');
        const titleEl = e.currentTarget.querySelector('.team-title');
        if (nameEl) nameEl.style.color = '#d4ba7d';
        if (titleEl) titleEl.style.color = '#d4ba7d';
      } : undefined}
    >
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-16 sm:w-20 md:w-32 md:mb-5 mb-3 rounded-full border-2 mx-auto" style={{borderColor: '#d4ba7d'}}
      />
      <h2 
        className={`text-sm sm:text-base md:text-xl font-semibold text-center team-name ${isLeadership ? 'text-[#d4ba7d]' : ''}`}
        style={isLeadership ? {color: '#d4ba7d'} : {}}
      >
        {name}
      </h2>
      <p 
        className={`text-center text-xs sm:text-sm md:text-base team-title ${isLeadership ? 'text-[#d4ba7d]' : ''}`}
        style={isLeadership ? {color: '#d4ba7d'} : {}}
      >
        {title}
      </p>
      {/* <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100017192357822&sk"
        >
          <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="https://github.com/NaseemKhan005">
          <GitHubIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/naseem-khan-275275258/"
        >
          <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
      </div> */}
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center ">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/men.png"}
          name="LUKAS ENYIEW "
          title="GENERAL MANAGER"
          isLeadership={true}
        />
          <TeamCard
          imgSrc={"/team/men.png"}
          name=" ALEMAYEHU TSIGE"
          title="DEPUTY MANAGER"
          isLeadership={true}
        />
      
        <TeamCard
          imgSrc={"/team/women.png"}
          name="MEAZA FENTAHUN"
          title="FINANCE OFFICER"
        />
        <TeamCard
          imgSrc={"/team/women.png"}
          name="MESERET TSEGAW"
          title="MARKETING OFFICER"
        />
        <TeamCard
          imgSrc={"/team/women.png"}
          name="AZEB AYALEW"
          title="PURCHASE DEPARTMENT"
        />
          <TeamCard imgSrc={"/team/women.png"} name="EMINETA WUBALEM" title="SECRETARY" />
          <TeamCard imgSrc={"/team/men.png"} name="SISAYNEW ALEM" title="DRIVER" />
      </div>
    </section>
  );
};

export default Team;
