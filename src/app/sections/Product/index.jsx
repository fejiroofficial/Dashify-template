import React from 'react';
import Image from 'next/image';

const Product = () => {
    return (
        <section className="product py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Product</h2>
            <div className="banner-image">
                <Image 
                    src="/product-banner.png" 
                    alt="SaaS Product" 
                    width={1200} 
                    height={600} 
                    className="mx-auto"
                />
            </div>
        </section>
    );
};

export default Product;
