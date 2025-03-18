import React from 'react'
import WaitListHeader from '../components/waitlist/header'
import WaitListHero from '../sections/waitlist/hero'
import Benefit from '../sections/waitlist/benefit'
import HowItStarted from '../sections/waitlist/howItStarted'
import Footer from '../sections/Footer'
import WaitlistCover from '../sections/waitlist/waitlist'

export default function WaitList() {
  return (
    <div>
        <WaitListHeader />
        <main className="flex flex-col gap-8 lg:row-start-2 justify-center items-center" >
        <WaitListHero />
        <HowItStarted />
        <Benefit />
        <WaitlistCover />
        <Footer />
        </main>
    
    </div>
  )
}
