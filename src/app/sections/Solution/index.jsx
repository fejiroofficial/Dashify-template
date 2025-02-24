import React from "react";
import Card from "../../components/Card";
import Image from "next/image";
import line from "@/app/asset/svg/line.svg";
import dev from "@/app/asset/svg/dev.svg";
import Ab from "@/app/asset/svg/Ab.svg";
import Dependency from "@/app/asset/svg/dependency.svg";
import view from "@/app/asset/svg/views.svg";

const Solution = () => {
  return (
    <section
      id="features"
      className="container mx-auto relative flex flex-col justify-center items-center text-center px-6 w-full"
    >
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[753px] h-[753px] rounded-full bg-white blur-[460px] -z-10"></div>

      <div className="flex justify-center items-center px-10 py-3">
        <Image src={line} alt="line-icon" className="bg-white" />
      </div>

      <p className="text-p4 font-medium text-gray-300 mb-2 pt-10">
        TELL AI WHAT YOU NEED TO KNOW 💡
      </p>

      <h2>
        Build headache-free dashboards <br /> with Dashify
      </h2>

      <p className="sub-header">
        Watch as your scattered data transforms into clear, actionable insights.{" "}
        <br />
        No code. No waiting. No hassle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card
          imageSrc={dev}
          title="Seamless Third-party integration"
          subtext="Your product's complete story, automatically pulled from the tools you already use"
        />
        <Card
          imageSrc={Ab}
          title="Instant dashboard with Plain Language"
          subtext="Turn your questions into dashboards as easily as having a conversation"
        />
        <Card
          imageSrc={Dependency}
          title="Zero Developer dependency"
          subtext="Make data-driven decisions instantly, without waiting for engineering support"
        />
        <Card
          imageSrc={view}
          title="Customizable views"
          subtext="Dashboards that adapt to your changing questions, not the other way around"
        />
      </div>
    </section>
  );
};

export default Solution;
