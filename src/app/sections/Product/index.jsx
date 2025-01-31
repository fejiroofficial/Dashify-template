import React from 'react';
import Image from 'next/image';
import product from "@/app/asset/svg/product.svg";

const Product = () => {
    return (
        <section className="container mx-auto relative flex flex-col justify-center items-center text-center shadow-2xl px-6 top-0">
            <div className="absolute w-[88%] h-full md:w-[95%] lg:w-[991.382px] lg:h-[661.69px] rounded-[18.583px] bg-white/50 blur-[18.583px]"></div>
    
            <div className="relative">
                <Image 
                    src={product}
                    alt="SaaS Product" 
                    width={1200} 
                    className="object-contain cursor-pointer w-full"
                />
            </div>
        </section>
    );
};

export default Product;
