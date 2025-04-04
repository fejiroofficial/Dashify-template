import React from 'react'
import cover from '@/app/asset/svg/waitlist/cover.svg';
import Image from 'next/image';
export default function HowItStarted() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center px-6'>
        <h2>How it started (Hook)</h2>
        <div className='flex flex-col lg:flex-row gap-16 items-center pt-6'>
        <div className='flex flex-col gap-6 flex-1'>
            <p className='text-[20px] font-medium'>In this section, you are going to share how you came across the idea or problem, acknowledging the problem, showing empathy and why you felt led to create this solution.</p>
            <p className='text-[20px] font-medium'>In this section, you are going to share how you came across the idea or problem, acknowledging the problem, showing empathy and why you felt led to create this solution.</p>
            <p className='text-[20px] font-medium'>In this section, you are going to share how you came across the idea or problem, acknowledging the problem, showing empathy and why you felt led to create this solution.</p>
        </div>
        <div className='flex-1'>
    <Image src={cover} alt='' className='w-[504px] h-[336.35px] object-contain'/>
        </div>
        </div>
    
    </div>
  )
}
