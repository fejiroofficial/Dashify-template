import React from "react";
import Card from "../../components/Card";
import line from "@/app/asset/svg/line.svg";
import Image from "next/image";
import dev from "@/app/asset/svg/dev.svg";
import Ab from "@/app/asset/svg/Ab.svg";
import Dependency from "@/app/asset/svg/dependency.svg";
import view from "@/app/asset/svg/views.svg";
const Solution = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center pt-20 text-center">
        <div className="flex justify-center bg-black items-center px-10 py-3">

<Image src={line} alt="line-icon" className="bg-white" />
</div>
      <p className="text-[12px] font-medium text-gray-500 mb-2 pt-10">
        TELL AI WHAT YOU NEED TO KNOW 💡
      </p>
      <h2 className="text-[32px] lg:text-[48px] font-bold mb-4 lg:w-[653px]">
        Build headache-free dashboards with Dashify{" "}
      </h2>
      <p className="text-xl mb-8 text-[#D4D4D4]">
        Watch as your scattered data transforms into clear, actionable insights. <br/>
        No code. No waiting. No hassle{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card imageSrc={dev} title="Seamless Third party integration" subtext="Your product's complete story, automatically pulled from the tools you already use" />
        <Card imageSrc={Ab} title="Instant dashboard with Plain Language" subtext="Turn your questions into dashboards as easily as having a conversation" />
        <Card imageSrc={Dependency} title="Zero Developer dependency" subtext="Make data-driven decisions instantly, without waiting for engineering support" />
        <Card imageSrc={view} title="Customizable views" subtext="Dashboards that adapt to your changing questions, not the other way around" />
      </div>
    </section>
  );
};

export default Solution;
