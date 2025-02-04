import React from 'react';
import Image from 'next/image';
// import './styles.css';

const Box = ({ imageSrc, title, subtext }) => {
    return (
        <div className="flex flex-col items-center max-w-[494px] bg-[#000000] py-6 rounded-[16px]">
            <div className="py-6">
                <Image src={imageSrc} alt={title} width={300} height={200} className='w-[379px] h-[284px] object-contain' />
            </div>
            <div className="pt-8 pl-6 text-start">
                <h3 className="text-xl font-semibold pb-3">{title}</h3>
                <p className="text-sm text-gray-500 ">{subtext}</p>
            </div>
        </div>
    );
};

export default Box;
