import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import SocialProof from './sections/SocialProof/index';
import Product from './sections/Product/index';
import Problem from './sections/Problem/index';
import Solution from './sections/Solution/index';
import Testimonial from './sections/Testimonial/index';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 justify-self-center items-center sm:items-start">
        <Hero />
        <SocialProof />
        <Product />
        <Problem />
        <Solution />
        <Testimonial />
      </main>
    </div>
  );
}
