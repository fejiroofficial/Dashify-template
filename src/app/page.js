import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
