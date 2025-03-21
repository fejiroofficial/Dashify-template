import React from "react";
 import Image from "next/image";
 import icon from "@/app/asset/svg/heroicon.svg";
 import leftIcon from "@/app/asset/svg/icon.svg";
 import star from "@/app/asset/svg/waitlist/star.svg";
 import Bg from "@/app/asset/svg/waitlist/background.svg";
 import dark from "@/app/asset/svg/waitlist/dark.svg";
 
 const WaitListHero = () => {
   return (
     <section className="hero container mx-auto relative flex flex-col items-center justify-center text-center w-full lg:mb-8 px-4 pb-8">
       <div className="relative z-10">
         <div className="absolute top-[4rem] left-[-10rem] justify-between hidden lg:block">
           <Image src={icon} alt="icon" className="" />
         </div>
         <div className="absolute top-[4rem] right-[-10rem] justify-between hidden lg:block">
           <Image src={leftIcon} alt="icon" />
         </div>
         <h2 className="pt-8 lg:pt-6 text-center flex-wrap">
           Create Powerful AI <br className="hidden lg:block" /> Dashboards Using
           prompt
         </h2>
 
         <p className="mb-8 flex-wrap px-6 lg:px-0 pb-6 text-[18px] md:text-xl text-[#D4D4D4]">
           Seamless integration with <br />
           Gmail, GitHub, Google Calendar, Trello and lots more.
         </p>
         <div className="relative  flex flex-col items-center bg-white text-black gap-8 rounded-lg mt-10 h-[416px] px-16 overflow-hidden">
           <div className="flex pt-3">
             <Image src={star} alt="star-icon" className="absolute left-2" />
             <Image
               src={Bg}
               alt="bg-icon"
               className="absolute top-[-4rem] right-[-4.6rem]"
             />
           </div>
           <div className="">
             <h2 className="text-[30px] font-medium text-center">Join the Waitlist + FREE BONUS</h2>
             <p className="max-w-[533px] text-[18px] ">
               Sign up for an early notification upon launch and get a Free ebook
               on product management resources
             </p>
           </div>
           <div className="flex flex-col gap-2 pb-6 justify-end items-end">
             <input
               placeholder="Enter your best Email"
               className="w-[408px] h-[50px] outline-none p-4"
             />
             <button className="bg-black text-white w-full md:w-[408px] md:h-[63px] rounded-lg text-[18px]">
               Sign up for Waitlist <br />{" "}
               <span className="text-[12px]">Free ebook inclusive</span>{" "}
             </button>
           </div>
         </div>
         <div className="hidden lg:flex justify-center items-center pt-8">
 
         <Image
   src={dark}
   alt="dark"
   className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 h-[100px] object-cover"
 />
 
         </div>
       </div>
     </section>
   );
 };
 
 export default WaitListHero;