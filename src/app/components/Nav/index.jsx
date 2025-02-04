"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import menu from "@/app/asset/svg/menu.svg";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <button
        className="text-white lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <Image src={menu} alt="menu-icon" />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-opacity-80 flex justify-center z-50 bg-[white]">
          <div className="flex flex-col justify-between items-center relative top-0 rounded-lg shadow-lg w-full h-1/2 p-6 bg-black">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <AiOutlineClose size={30} />
            </button>

            <ul className="space-y-6 text-center">
              <li>
                <Link href="/" className="block text-white hover:text-[#D4D4D4]" onClick={toggleMenu}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#HowItWorks" className="block text-white hover:text-[#D4D4D4]" onClick={toggleMenu}>
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="block text-white hover:text-[#D4D4D4]" onClick={toggleMenu}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="block text-white hover:text-[#D4D4D4]" onClick={toggleMenu}>
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="block lg:hidden">
              <Button>Create Dashboard</Button>
            </div>
          </div>
        </div>
      )}

      <ul className="hidden lg:flex gap-4">
        <li >
          <Link href="/" className="text-white hover:text-[#D4D4D4]">
            Features
          </Link>
        </li>
        <li>
          <Link href="#HowItWorks" className="text-white hover:text-[#D4D4D4]">
            How it Works
          </Link>
        </li>
        <li>
          <Link href="#pricing" className="text-white hover:text-[#D4D4D4]">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#faq" className="text-white hover:text-[#D4D4D4]">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;