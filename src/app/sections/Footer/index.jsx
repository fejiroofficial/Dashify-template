import React from "react";
import Image from "next/image";
import Line from "@/app/asset/svg/footerLine.svg";
import Link from "next/link";
import logo from "@/app/asset/svg/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center">
      <Image src={Line} alt="line" />
      <div className="container mx-auto flex flex-row justify-between px-4 gap-6 pt-6">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gray-500 flex items-center justify-center w-8 py-2 rounded">
              <Image src={logo} alt="logo" />
            </div>
            <div className="flex">
              <p className="text-white text-lg font-bold">Dashify</p>
              <span className="text-gray-400 text-[6px] flex">UI</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6">
          <Link href="/" className="text-white hover:text-red-500">
            Features
          </Link>
          <Link href="#HowItWorks" className="text-white hover:text-red-500">
            How it Works
          </Link>
          <Link href="#pricing" className="text-white hover:text-red-500">
            Pricing
          </Link>
          <Link href="#faq" className="text-white hover:text-red-500">
            FAQ
          </Link>
          <div className="block sm:hidden">
            <Link href="#contact" className="text-white hover:text-red-500">
              Contact us
            </Link>
          </div>
        </div>

        <div className="hidden sm:block">
          <Link href="#contact" className="text-white hover:text-red-500">
            Contact us
          </Link>
        </div>
      </div>

      <div className="pt-8">
        <p className="text-[#6F6F6F] text-sm text-center">
          ©️ DesignOrah {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
