import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/asset/svg/logo.svg";
import rectangle from "@/app/asset/vector.png";
import Nav from "../Nav";
import Button from "../Button";

const Header = () => {
  return (
    <div className="container lg:mx-auto relative lg:top-10">
    <header className=" lg:bg-black lg:py-6 rounded-md lg:px-2 lg:mx-20">
      <Image
        src={rectangle}
        alt="background-image"
        className="absolute inset-0 w-full object-cover -z-10 top-2 lg:top-[-2rem] "
      />

      <div className="flex justify-between items-center px-2 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gray-500 flex items-center justify-center w-8 py-2 rounded">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex">
            <p className="text-white text-lg font-bold">Dashify</p>
            <span className="text-gray-400 text-[6px] flex">UI</span>
          </div>
        </Link>
        <Nav />
<div className="hidden lg:block">

        <Button>Create Dashboard</Button>
</div>
      </div>
    </header>
    </div>

  );
};

export default Header;
