'use client'
import React, { useState } from "react";
import Image from "next/image";
import product from "@/app/asset/svg/product.svg";

const Product = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setUploadedImage(imageUrl);
    }
  };

  return (
    <section className="container mb-[83px] mx-auto relative flex flex-col justify-center items-center text-center shadow-2xl px-6 top-0 cursor-pointer w-full max-w-5xl">
      <div className="absolute w-[88%] h-full md:w-[95%] lg:w-[991.382px] lg:h-[661.69px] rounded-[18.583px] bg-white/50 blur-[18.583px] top-[-3rem]"></div>

      <label className="relative flex justify-center items-center top-[-2rem]">
        {uploadedImage ? (
          <Image
            src={uploadedImage}
            alt="Uploaded Image"
            width={1200}
            height={661}
            className="object-cover"
          />
        ) : (
          <Image
            src={product}
            alt="Default SaaS Product"
            width={1200}
            height={661}
            className="object-contain cursor-pointer"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
    </section>
  );
};

export default Product;
