import React from "react";

const Button = ({ clickHandler, children, size = 'regular' }) => {
    const buttonSizes = {
        large: 'h-[70px] w-[285px] text-[22px]',
        regular: 'h-[45px] w-[180px] text-[16px]'
    };

    return (
        <button
            onClick={clickHandler}
            className={`btn ${buttonSizes[size]} bg-white rounded-lg text-black font-medium`}
        >
            {children}
        </button>
    );
};

export default Button;
