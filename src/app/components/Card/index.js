import React from 'react';
import Image from 'next/image';
// import './styles.css';

const Box = ({ imageSrc, title, subtext }) => {
    return (
        <div className="box-container">
            <div className="image-container">
                <Image src={imageSrc} alt={title} width={300} height={200} />
            </div>
            <div className="text-container">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{subtext}</p>
            </div>
        </div>
    );
};

export default Box;
