"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import menu from "@/app/asset/svg/menu.svg";
import Image from "next/image";
import Button from "../Button";

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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-50">
          <div className="flex flex-col justify-between items-center relative top-0 rounded-lg shadow-lg w-full h-1/2 p-6">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <AiOutlineClose size={24} />
            </button>
            <ul className="space-y-6 text-center ">
              <li>
                <a
                  href="/"
                  className="block text-white hover:text-red-500"
                  onClick={toggleMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#HowItWorks"
                  className="block text-white hover:text-red-500"
                  onClick={toggleMenu}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-white hover:text-red-500"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block text-white hover:text-red-500"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="block lg:hidden">
              <Button>Create Dashboard</Button>
            </div>
          </div>
        </div>
      )}
      <ul className="hidden lg:flex gap-4">
        <li>
          <a href="/" className="text-white hover:text-red-500">
            Features
          </a>
        </li>
        <li>
          <a href="#HowItWorks" className="text-white hover:text-red-500">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-white hover:text-red-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="text-white hover:text-red-500">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
