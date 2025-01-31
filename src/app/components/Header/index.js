import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/asset/svg/logo.svg";
import Nav from "../Nav";
import Button from "../Button";

const Header = () => {
  return (
    <div className="lg:container lg:mx-auto relative lg:top-2">
    <header className="relative lg:py-3 lg:px-2 lg:mx-20">
      <div className="absolute inset-0 w-full object-cover -z-10 top-0 md:top-2 rounded-[8px]"  style={{
          height: "115.24px",
          flexShrink: 0,
          background: "linear-gradient(180deg, #000 -2.51%, rgba(255, 255, 255, 0.38) 46.02%, #000 100%)",
          filter: "blur(25px)"
        }}></div>

      <div className="flex justify-between items-center px-6 lg:bg-black lg:py-3 lg:mt-4 rounded-[8px]">
        <Link href="/">
        
            <Image src={logo} alt="logo" width={100} height={26}/>
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
