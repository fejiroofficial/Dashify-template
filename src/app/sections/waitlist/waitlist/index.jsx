import React from 'react'
import Box from "@/app/asset/svg/boxes.svg";

export default function WaitlistCover() {
  return (
     <div
         className=" flex flex-col items-center justify-center pt-10 pb-20 relative bg-cover bg-center w-full px-6"
         style={{ backgroundImage: `url(${Box.src})` }}
       >     <div className="relative flex flex-col items-center text-center bg-white text-black-BASE gap-6 rounded-lg mt-10 p-8 mx-16">
        
       <div>
       <h2 className="header">Join the Waitlist + FREE BONUS</h2>
               <p className="max-w-[533px] text">Sign up for an early notification upon launch and get a Free ebook
               on product management resources</p>
       </div>
             <div className="flex flex-col gap-2 pb-6" >
             <input placeholder="Enter your best Email" className="w-[408px] h-[50px] outline-none p-4" />
             <button className="bg-black-BASE text-white w-[408px] h-[63px] rounded-lg text">Sign up for Waitlist <br/> <span className="small">Free ebook inclusive</span>  </button>
             </div>
       
              </div>
        </div>
  )
}
