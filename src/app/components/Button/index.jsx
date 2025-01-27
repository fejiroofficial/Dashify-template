import React from 'react';
import './styles.css';

const Button = ({ clickHandler, children }) => {
    return (
        <button onClick={clickHandler} className="btn box rectangle cursor-pointer" >
            {children}
        </button>
    );
};

export default Button;

