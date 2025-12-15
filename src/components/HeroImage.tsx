import React from 'react';

const HeroImage: React.FC = () => {
    return (
        <section className="w-full shadow-md">
            <img
                src={'/assets/HeroImageN.jpg'}
                alt="Banner Reformas Integrales"                
                className="w-full h-120 object-cover cursor-pointer transition duration-300 hover:brightness-95"
            />
        </section>
    );
};

export default HeroImage;
