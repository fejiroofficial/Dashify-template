import React from 'react';

const SocialProof = () => {
    return (
        <section className="social-proof py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Our customers work at:</h2>
            <div className="logos flex items-center gap-4 overflow-y-auto h-64">
                <img src="/logo1.png" alt="Company 1" className="h-12" />
                <img src="/logo2.png" alt="Company 2" className="h-12" />
                <img src="/logo3.png" alt="Company 3" className="h-12" />
                <img src="/logo4.png" alt="Company 4" className="h-12" />
                <img src="/logo5.png" alt="Company 5" className="h-12" />
            </div>
        </section>
    );
};

export default SocialProof;
