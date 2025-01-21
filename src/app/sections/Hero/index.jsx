import React from 'react';
import Button from '../../components/Button';

const Hero = () => {
    return (
        <section className="hero flex flex-col items-center text-center py-20">
            <h1 className="text-5xl font-bold mb-4">Welcome to Dashify</h1>
            <p className="text-xl mb-8">Your one-stop solution for all your dashboard needs.</p>
            <Button>Get Started</Button>
        </section>
    );
};

export default Hero;
