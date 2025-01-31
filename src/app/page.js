import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Product from './sections/Product/index';
import Problem from './sections/Problem/index';
import Solution from './sections/Solution/index';
import Testimonial from './sections/Testimonial/index';
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import Faq from "./sections/Faq";
import CustomerReviews from "./sections/review";
import CreateDas from "./sections/Das";
import SocialProof from "./sections/SocialProof";


export default function Home() {
  return (
    <div className="lg:grid lg:grid-rows-[20px_1fr_20px] items-center justify-center lg:min-h-screen py-6 font-[family-name:var(--font-geist-sans)] overflow-hidden">
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
