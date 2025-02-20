import React from "react";
import avater from "@/app/asset/svg/pm.svg";
import Image from "next/image";

const Testimonial = ({ rating = 5, name }) => {
  return (
    <div className="container mx-auto relative bg-black-50 flex flex-col items-center text-center py-6 px-6 lg:px-16 rounded-2xl gap-4 overflow-hidden mb-10 w-[95%] border-solid max-w-5xl">
      <p className="text-h4 md:text-[22px] font-medium text-gray-BASE lg:w-[756px] w-full">
        “As a PM who can't code, I used to spend my Mondays copying data between
        spreadsheets. Now I just tell the AI what I want to track and it builds
        exactly that.”
      </p>
      <div className="">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="text-orange-50">
            &#9733;
          </span>
        ))}
      </div>
      <Image src={avater} alt={`${name}'s picture`} className="" />
      <div>
        <h3 className="text-p1 font-medium">Mark Rodriguez</h3>
        <p className="text-p4 text-gray-BASE">Senior PM at TechFlow</p>
      </div>

      <div className="absolute bottom-[-8rem] left-0 w-full h-[35%] bg-gradient-to-r from-[#747474] to-transparent transform -translate-y-1/3 skew-y-6 rounded-b-2xl shadow-2xl"></div>
    </div>
  );
};

export default Testimonial;
