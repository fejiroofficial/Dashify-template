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
      <div className="flex flex-row justify-between px-4 gap-6 pt-6">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={26} />
        </Link>

        <div className="flex flex-col md:flex-row justify-between lg:items-center gap-2 md:gap-6">
          <Link href="#features" className="text-white hover:text-[#D4D4D4]">
            Features
          </Link>
          <Link href="#HowItWorks" className="text-white hover:text-[#D4D4D4]">
            How it Works
          </Link>
          <Link href="#pricing" className="text-white hover:text-[#D4D4D4]">
            Pricing
          </Link>
          <Link href="#faq" className="text-white hover:text-[#D4D4D4]">
            FAQ
          </Link>
          <div className="block md:hidden">
            <Link href="mailto:contact@designorah.com" className="text-white hover:text-[#D4D4D4]">
              Contact us
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <Link href="mailto:contact@designorah.com" className="text-white hover:text-[#D4D4D4]">
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
