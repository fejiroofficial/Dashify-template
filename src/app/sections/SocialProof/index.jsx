import React from 'react';
import andela from '@/app/asset/svg/andela.svg';
import health from '@/app/asset/svg/center-health.svg';
import getquin from '@/app/asset/svg/getquin.svg';
import crypto from '@/app/asset/svg/crypto.svg';
import rock from '@/app/asset/svg/rocketbc.svg';
import livelink from "@/app/asset/svg/livelink.svg";
import Image from 'next/image';

const SocialProof = () => {
  const customerLogos = [andela, health, getquin, crypto, rock, livelink];
 
    return (
        <section className="md:py-6 text-center">
               <h2 className="mt-12 text-lg text-gray-BASE">Our customers work at:</h2>
               <div className="flex justify-between gap-16 overflow-x-scroll h-[64px]">
        {customerLogos.map((logo, index) => (
          <Image key={index} src={logo} alt={`customer-logo-${index}`} width={70} height={24} className="w-[80px] h-auto" />
        ))}
      </div>
        </section>
    );
};

export default SocialProof;
