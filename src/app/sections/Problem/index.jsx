import Image from "next/image";
import React from "react";
import pm from "@/app/asset/svg/pm.svg";
import avater from "@/app/asset/svg/developer.svg";
import one from "@/app/asset/svg/one.svg";
import two from "@/app/asset/svg/two.svg";
import three from "@/app/asset/svg/three.svg";


const Problem = () => {
  return (
    <section className="problem flex flex-col items-center text-center lg:pt-28 px-2 font-[Figtree]">
      <div className="mb-8 flex flex-col justify-center text-center lg:mt-8">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-4">
          Stop spending hours gathering data 🤕
        </h2>


        <p className="text-[18px] lg:text-xl text-gray-300 max-w-[679.46px] text-center px-2">
          Product managers are drowning in scattered data.Your product's story is
          fragmented across Gmail, GitHub, Calendar, and Trello  and you're
          spending hours every week just trying to piece it together.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:py-16 w-full max-w-5xl">
        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-[22px] font-medium text-gray-400 text-left">
            Is this you every time you need a new dashboard?
          </h3>
          <div className="flex items-center gap-1 md:gap-4">
            <Image src={one} alt="one" width={50} height={31} className="w-[22px] md:w-[50px]"/>
            <p className="text-[18px] lg:text-[22px] font-medium text-gray-400">
              Chasing developers who are already swamped
            </p>
          </div>
          <div className="flex items-center md:gap-4">
            <Image src={two} alt="two" width={50} height={31} className="w-[22px] md:w-[50px]"/>
            <p className="text-[18px] lg:text-[22px] font-medium text-gray-400">
              Wait days (or weeks) for a simple metric change
            </p>
          </div>
          <div className="flex items-center gap-1 md:gap-4">
            <Image src={three} alt="three" width={50} height={31}  className="w-[22px] md:w-[50px]"/>
            <p className="text-[18px] lg:text-[22px] font-medium text-gray-400">
              Manually copy-paste data between tools
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4">
          <div className="flex items-center md:p-3 p-1 gap-2 bg-white text-black rounded-md shadow-md">
            <Image src={pm} alt="avatar" />
            <p className="text-[12px] md:text-[13px] font-medium">
              Hey! It's been days. Where is the dashboard feature?
            </p>
          </div>
          <div className="flex items-center p-3 gap-2 bg-white text-black rounded-md shadow-md ml-8 lg:ml-16 lg:pl-20">
            <p className="text-[13px] font-medium">☹️ So sorry PM, would be ready soon</p>
            <Image src={avater} alt="avatar" />
          </div>
          <div className="flex items-center p-3 gap-2 bg-white text-black rounded-md shadow-md">
            <Image src={pm} alt="avatar" />
            <p className="text-[13px] font-medium">Wt???? 🤯🤯🤯🤯🤯🤯🤯🤯🤯</p>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="text-[22px] lg:text-[28px] text-gray-400">
          Meanwhile, decisions need to be made, stakeholders are waiting, and your
          valuable time is being wasted on dashboard setup instead of product
          strategy.
        </p>
      </div>
    </section>
  );
};

export default Problem;
