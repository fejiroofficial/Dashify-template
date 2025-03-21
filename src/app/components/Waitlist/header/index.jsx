import React from "react";
 import Link from "next/link";
 import Image from "next/image";
 import logo from "@/app/asset/svg/logo.svg";
 import Navbar from "../navbar";
 import Button from "../../Button";

const WaitListHeader = () => {
    return (
      <div className="container mx-auto mt-[33px] mb-[50px] relative flex flex-col justify-center max-w-5xl">
        <header className="relative">
          <div
            className="hidden lg:block absolute inset-0 w-full object-cover -z-10 rounded-[8px]"
            style={{
              height: "122px",
              background: "linear-gradient(180deg, #000 -111.51%, rgba(255, 255, 255, 0.38) 37.02%, #000 109%)",
              filter: "blur(25px)",
              marginLeft: "-31px",
              top: "-5px",
              width: "1084px"
            }}
          ></div>
  
          <div className="flex justify-between items-center px-6 w-full lg:bg-black rounded-[8px] lg:h-[80px]">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={26} />
            </Link>
            <Navbar />
  
            <div className="hidden lg:block">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </header>
      </div>
    );
  };
  
  export default WaitListHeader;