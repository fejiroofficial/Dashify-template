import React from "react";
import click from '@/app/asset/svg/click.svg';
import Image from "next/image";

const CreateDas = () => {
  return (
    <div className="w-full bg-white cursor-pointer overflow-hidden">
      <div className="relative bottom-0 left-0 w-full md:h-[347px] bg-white text-black-BASE text-[80px] lg:text-[233px] overflow-hidden whitespace-nowrap">
        <h4 className="inline-block animate-marquee whitespace-nowrap ">
          Create a Dashboard
        </h4>
        <div className="absolute right-[50%] bottom-4">

<Image src={click} alt="mouse icon" className="w-[83px] h-[60px]"/>
</div>
      </div>

    </div>
  );
};

export default CreateDas;
