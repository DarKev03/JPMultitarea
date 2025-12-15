import React from 'react';



type GifCard = {
  title: string;
  description: string;
  gifUrl: string;
};

const gifCards: GifCard[] = [
  {
    title: 'SALONES',
    description: 'Renovamos salones para crear espacios amplios, Ya sea un estilo moderno, rústico o minimalista, nuestro equipo convierte tu salón en el centro acogedor y versátil que tu hogar necesita. Porque el salón no es solo un espacio más, es donde sucede la vida.',
    gifUrl: "/assets/Salon1.jpeg",
  },
  {
    title: 'BAÑOS',
    description: 'Diseñamos y renovamos baños con un enfoque integral, combinando funcionalidad, confort y diseño moderno. Porcelana, grifería en acabados mate y mamparas de vidrio para crear espacios elegantes, duraderos y lo mas importante facil de mantener. Baño renovado es mucho mas que una mejora estética, es una inversión en bienestar comfort y salud.',
    gifUrl: "/assets/Lavabo2.jpeg",
  },
  {
    title: 'COCINAS',
    description: 'Transformamos tu cocina en un espacio funcional, moderno y personalizado. Utilizamos materiales de alta calidad como la madera natural y el acero inoxidable para lograr una combinación perfecta entre calidez, resistencia y estilo contemporáneo. Porque una cocina no solo debe verse bien, también debe adaptarse a tu ritmo de vida.',
    gifUrl: "/assets/Cocina2.jpg",
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
