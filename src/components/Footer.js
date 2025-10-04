"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <span style={{color: '#d4ba7d'}}>F</span>our Brothers General Trading.
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              Your trusted partner for quality products and reliable trading services. We provide comprehensive solutions for all your business needs.
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/fourbrothersgt"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:-translate-y-1 transition-all" style={{'&:hover': {color: '#d4ba7d'}}} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fourbrothersgt"
                target="_blank"
              >
                <LinkedInIcon className="hover:-translate-y-1 transition-all hover:text-[#d4ba7d]" />
              </Link>
              <Link href="https://twitter.com/fourbrothersgt" target="_blank">
                <TwitterIcon className="hover:-translate-y-1 transition-all hover:text-[#d4ba7d]" />
              </Link>
              <Link
                href="https://www.instagram.com/fourbrothersgt"
                target="_blank"
              >
                <InstagramIcon className="hover:-translate-y-1 transition-all hover:text-[#d4ba7d]" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-1 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="#home"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About Us
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="#features"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Products
                </Link>
                <Link
                  href="#services"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Trading Services
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Contact</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="#contact"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Get in Touch
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium text-xs text-gray-500">Developer</p>
              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                <a
                  className="hover:opacity-75 cursor-pointer hover:border-b hover:border-neutral-400 w-fit"
                >
                  📧 yoniman.wg@gmail.com
                </a>
                <a
                  className="hover:opacity-75 cursor-pointer hover:border-b hover:border-neutral-400 w-fit"
                >
                  📞 +251922711274
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2025 Four Brothers General Trading - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
