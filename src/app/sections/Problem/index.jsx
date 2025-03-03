import Image from "next/image";
import React from "react";
import pm from "@/app/asset/svg/pm.svg";
import avater from "@/app/asset/svg/developer.svg";
import one from "@/app/asset/svg/one.svg";
import two from "@/app/asset/svg/two.svg";
import three from "@/app/asset/svg/three.svg";
import container from "@/app/asset/svg/solution.svg";

const Problem = () => {
  return (
    <section className="lg:container mx-auto flex flex-col lg:items-center text-center lg:px-2 font-[Figtree] relative">
      <div className="mb-8 flex flex-col justify-center items-center text-center px-4 relative">
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(-10%, 50%)",
            width: "100%",
            height: "24px",
            background: "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.37))",
            filter: "blur(37.5px)",
            zIndex: "-1",
            borderRadius: "12px",
          
          }}
        ></div>

        <h2>
          Stop spending hours gathering data 🤕
        </h2>

        <p className="text-[18px] lg:text-xl font-medium text-gray-300 max-w-[679.46px] text-center px-2 pb-6 lg:pb-0 relative">
          You are drowning in scattered data. Your product's story is
          fragmented across Gmail, GitHub, Calendar, and Trello – and you're
          spending hours every week just trying to piece it together.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:items-center lg:justify-center gap-12 lg:py-16 px-4">
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-[22px] font-medium text-[#D4D4D4] lg:text-left">
            Is this you every time you need a new dashboard?
          </h3>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={one} alt="one" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4] text-wrap">
              Chasing developers who are already swamped
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={two} alt="two" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4] text-wrap">
              Wait days (or weeks) for a simple metric change
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={three} alt="three" width={50} height={31} className="w-[22px] md:w-[50px]" />
            <p className="text-[18px] lg:text-[22px] font-medium text-[#D4D4D4]">
              Manually copy-paste data between tools
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-2">
        <Image src={container} alt="box" />
        </div>
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="text-[22px] lg:text-[28px]">
          Meanwhile, decisions need to be made, stakeholders are waiting, and your
          valuable time is being wasted on dashboard setup instead of product
          strategy.
        </p>
      </div>
    </section>
  );
};

export default Problem;
