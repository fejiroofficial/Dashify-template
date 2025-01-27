import React from 'react';
import Image from 'next/image';
import product from "@/app/asset/svg/product.svg";
 
const Product = () => {
    return (
        <section className="container mx-auto relative flex flex-col justify-center items-center text-center shadow-2xl py-8 lg:mt-[10rem] mb-[4rem] md:mb-[12rem] ">
            <div className="absolute rounded-xl justify-center" >
                <Image 
                    src={product}
                    alt="SaaS Product" 
                    width={1200} 
                    // height={600} 
                    className="object-contain cursor-pointer w-full"
                />
            </div>
        </section>
    );
};

export default Product;
