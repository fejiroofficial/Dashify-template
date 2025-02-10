import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Testimonial from "./sections/Testimonial";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import Faq from "./sections/Faq";
import CustomerReviews from "./sections/review";
import CreateDas from "./sections/Das";
import dynamic from "next/dynamic";
import background from "@/app/asset/svg/ray-background.svg";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-figtree)]">
      <Image
        src={background}
        alt="background-image"
        className="hidden md:block absolute w-full h-full -left-[2rem]"
      />
      <Header />
      <main className="flex flex-col gap-8 lg:row-start-2 justify-center items-center ">
        <Hero />
        <Product />
        <Problem />
        <Solution />
        <Testimonial />
        <HowItWorks />
        <Pricing />
        <CustomerReviews />
        <CreateDas />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
