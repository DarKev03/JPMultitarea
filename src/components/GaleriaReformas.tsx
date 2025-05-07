import React from 'react';
import gifPlaceholder from '../assets/giphy.gif';

type GifCard = {
  title: string;
  description: string;
  gifUrl: string;
};

const gifCards: GifCard[] = [
  {
    title: 'Ref',
    description: 'Instalación moderna de baño con acabados personalizados.',
    gifUrl: gifPlaceholder,
  },
  {
    title: 'Ref',
    description: 'Parquet y pintura en sala de estar con iluminación cálida.',
    gifUrl: gifPlaceholder,
  },
  {
    title: 'Ref',
    description: 'Cocina integral con detalles en madera y acero.',
    gifUrl: gifPlaceholder,
  },
];

const GaleriaReformas: React.FC = () => {
    return (
      <div className="w-screen bg-[#0F3D38] py-20 px-4 sm:px-10 md:px-16" id="galeria">
        <div className="max-w-7xl mx-auto grid gap-8 justify-center" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(341.33px, 0fr))'
        }}>
          {gifCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* GIF */}
              <div className="w-[341.33px] h-[400px] bg-[#112f2a] overflow-hidden shadow-md flex items-center justify-center">
                <img
                  src={card.gifUrl}
                  alt={card.title}
                  className="w-[280px] h-full object-cover"
                />
              </div>
  
              <div className="h-6" />
            <div className="w-[340px] h-[320px] bg-[#112f2a] border border-white/10 shadow-md px-6 py-4 text-white">
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-gray-300 overflow-hidden text-ellipsis">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaReformas;
