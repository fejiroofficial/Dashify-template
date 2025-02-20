import React from "react";
import Button from "../../components/Button";
import Image from "next/image";
import icon from "@/app/asset/svg/heroicon.svg";
import leftIcon from "@/app/asset/svg/icon.svg";
import wave from "@/app/asset/svg/herowave.svg";
import leftWave from "@/app/asset/svg/wave.svg";
import vector from "@/app/asset/svg/vector.svg";
import SocialProof from "../SocialProof";

const Hero = () => {
  return (
    <section className="hero container mx-auto relative flex flex-col items-center text-center w-full lg:mb-8 px-4">
      <div className="relative z-10">
        <div className="absolute top-[4rem] left-[-10rem] justify-between hidden lg:block">
          <Image src={icon} alt="icon" className="" />
        </div>
        <div className="absolute top-[4rem] right-[-10rem] justify-between hidden lg:block">
          <Image src={leftIcon} alt="icon" />
        </div>
        <h1 className="text-h2 tracking-tighter lg:text-h1 pt-8 lg:pt-6 text-center flex-wrap">
          One prompt away from a <br className="hidden lg:block" /> personalized <span className="font-[400] font-[family-name:var(--font-pacifico)]"> Dashboard </span>
        </h1>
        <div className="absolute bottom-[5rem] left-[-1rem] justify-between hidden lg:block">
          <Image src={wave} alt="icon" />
        </div>
        <div className="absolute bottom-[4rem] right-[-1rem] justify-between hidden lg:block">
          <Image src={leftWave} alt="icon" />
        </div>
        <p className="text-p2 md:text-h4 mb-8 text-[#D4D4D4] flex-wrap px-6 lg:px-0">
          Seamlessly integrate with <br /> Gmail, GitHub, Google Calendar,
          Trello, and more.
        </p>
        <Button size="large">Create a Dashboard</Button>
        <div className="relative py-6">
          <div className="absolute right-[50%]">
            <Image src={vector} alt="vector" />
          </div>
          <p className="pt-12 text-p3 font-medium text-gray-BASE pl-6 rotate-[-25deg]">
            No code required!
          </p>
        </div>
      </div>
      <SocialProof />
    </section>
  );
};

export default Hero;
