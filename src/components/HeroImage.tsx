import React from 'react';

const HeroImage: React.FC = () => {
    return (
        <section className="w-full shadow-lg">
            <img
                src={'src/assets/Mi imagen de ChatGPT.png'}
                alt="Banner Reformas Integrales"
                className="w-full h-100 object-contain cursor-pointer transition duration-300 hover:brightness-95"
            />
        </section>
    );
};

export default HeroImage;
