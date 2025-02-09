import React from "react";
import Button from "../../components/Button";
import Image from "next/image";
import background from "@/app/asset/svg/background.svg";
import icon from "@/app/asset/svg/heroicon.svg";
import leftIcon from "@/app/asset/svg/icon.svg";
import wave from "@/app/asset/svg/herowave.svg";
import leftWave from "@/app/asset/svg/wave.svg";
import vector from "@/app/asset/svg/vector.svg";
import SocialProof from "../SocialProof";

const Hero = () => {
  return (
    <section className="container mx-auto relative flex flex-col items-center text-center w-full lg:mb-8 px-4">
      <Image
        src={background}
        alt="background-image"
        className="absolute inset-0 w-full h-full object-cover -z-10 lg:top-[2rem]"
      />

      <div className="relative z-10 lg:pt-24">
        <div className="absolute top-[8rem] left-[-10rem] justify-between hidden lg:block">
          <Image src={icon} alt="icon" className="" />
        </div>
        <div className="absolute top-[10rem] right-[-10rem] justify-between hidden lg:block">
          <Image src={leftIcon} alt="icon" />
        </div>
        <h1 className="text-[48px] tracking-tighter lg:text-[64px] pt-8 lg:pt-6 text-center flex-wrap">
          One prompt away from a <br className="hidden lg:block" /> personalized <span className="font-[400] font-[family-name:var(--font-hand)]"> Dashboard </span>
        </h1>
        <div className="absolute bottom-[5rem] left-[-1rem] justify-between hidden lg:block">
          <Image src={wave} alt="icon" />
        </div>
        <div className="absolute bottom-[4rem] right-[-1rem] justify-between hidden lg:block">
          <Image src={leftWave} alt="icon" />
        </div>
        <p className="text-[18px] md:text-xl mb-8 text-[#D4D4D4] flex-wrap px-6 lg:px-0">
          Seamlessly integrate with <br /> Gmail, GitHub, Google Calendar,
          Trello, and more.
        </p>
        <Button>Create a Dashboard</Button>
        <div className="relative py-6">
          <div className="absolute right-[50%]">
            <Image src={vector} alt="vector" />
          </div>
          <p className="pt-12 text-[14px] font-medium text-[#D4D4D4] pl-6 rotate-[-25deg]">
            No code required!
          </p>
        </div>
      </div>
      <SocialProof />
    </section>
  );
};

export default Hero;
