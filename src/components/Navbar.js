"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#02333d]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            <span style={{color: '#d4ba7d'}}>F</span>our brothers general trading.
          </h2>
        </Link>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#02333d] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-full sm:w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-6 sm:px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "about", "services", "testimonial"].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? "" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-[#d4ba7d]`} style={selectedItem === link ? {color: '#d4ba7d'} : {}}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link
                href="https://www.facebook.com/fourbrothersgt"
                target="_blank"
              >
                <FacebookOutlinedIcon className="cursor-pointer hover:text-[#d4ba7d] text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/fourbrothersgt"}
              >
                <LinkedInIcon className="cursor-pointer hover:text-[#d4ba7d] text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/fourbrothersgt"}
              >
                <InstagramIcon className="cursor-pointer hover:text-[#d4ba7d] text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <Link href={"#contact"}>
            <button className={`capitalize text-xs sm:text-sm md:text-base border-2 hover:border-2 font-semibold py-2 sm:py-3 px-2 sm:px-4 md:px-6 rounded-full transition-all ${theme === 'dark' ? 'text-white border-[#d4ba7d] hover:bg-[#d4ba7d] hover:text-[#02333d]' : 'text-[#02333d] border-[#d4ba7d] hover:bg-[#d4ba7d] hover:text-white'}`}>
              Get Started
            </button>
          </Link>
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
