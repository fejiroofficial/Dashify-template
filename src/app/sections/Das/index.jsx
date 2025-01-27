import React from 'react';
import Image from 'next/image';
import das from "@/app/asset/svg/reviewBanner.svg";
 
const CreateDas = () => {
    return (
        <section className="flex flex-col justify-center py-8 overflow-hidden">
            <div className="justify-center" >
                <Image 
                    src={das}
                    alt="SaaS CreateDas" 
                    width={1400} 
                    // height={600} 
                    className="object-cover w-full"
                />
            </div>
        </section>
    );
};

export default CreateDas;
