import React from 'react';

const Button = ({ clickHandler, children }) => {
    return (
        <button onClick={clickHandler} className="btn">
            {children}
        </button>
    );
};

export default Button;
