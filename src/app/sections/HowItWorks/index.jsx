import React from "react";
import Image from "next/image";
import works from "@/app/asset/svg/works.svg";
import worksImg from "@/app/asset/svg/works2.svg";
import vector from "@/app/asset/svg/workVector.svg";

const HowItWorks = () => {
  const steps = [
    {
      title: "STEP 1",
      heading: "Describe What You Need",
      description:
        "Type your request in plain English, like 'Show me user engagement across teams since our last release' – no technical jargon needed.",
    },
    {
      title: "STEP 2",
      heading: "AI Creates Your Dashboard",
      description:
        "Watch as AI instantly transforms your request into a professional dashboard, automatically pulling real-time data from Gmail, GitHub, Calendar, and Trello.",
    },
    {
      title: "STEP 3",
      heading: "Refine With Natural Language",
      description:
        "Need changes? Simply tell the dashboard what to adjust. Want to see different metrics? Just ask. Your dashboard evolves as quickly as your questions do.",
    },
  ];

  return (
    <section className="container mx-auto flex flex-col items-center md:py-10" id="HowItWorks">
      <h2 className="text-[32px] md:text-[48px] font-medium mb-8 text-center lg:text-start">Here is how it works</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 justify-center lg:justify-between">
  
  <div className="flex flex-col items-center mx-2 px-6 lg:px-0">
          <Image src={worksImg} alt="How it works visual 1" width={455} height={10} className="w-[90%] lg:w-full"/>
          <Image src={works} alt="How it works visual 2" width={455} height={100} className="w-[90%] lg:w-full" />
        </div>
        <div className="flex items-center justify-center lg:pt-8">
          <Image src={vector} alt="Vector illustration" />
        </div>
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={index} className="px-2 md:px-6">
              <h3 className="text-[12px] font-medium text-[#888888]">{step.title}</h3>
              <h4 className="text-[22px] lg:text-[38px] font-medium">{step.heading}</h4>
              <p className="text-[#888888] text-[20px] lg:w-[482px] mt-6">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
