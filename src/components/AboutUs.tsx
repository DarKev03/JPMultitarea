import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#e5e7eb] py-12 px-6 md:py-20 md:px-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-5xl text-[rgba(3,31,40,1)] mb-6">
            Nuestra visión...
          </h2>
          <p className="text-[rgba(3,31,40,0.6)] text-base leading-relaxed mb-6">
            Tu hogar tiene algo que decir. Nosotros te ayudamos a hablar.
            Transformamos cada espacio en un reflejo de lo que eres y lo que sueñas. No se trata solo de decorar, sino de crear un lugar con alma, donde cada rincón cuente una historia —<strong>la tuya</strong>.
          </p>
          <p className="text-[rgba(3,31,40,0.6)] text-base leading-relaxed mb-6">
          Por eso, ofrecemos presupuestos detallados sin ningún compromiso, asegurando una total transparencia desde el inicio. Nuestra filosofía se centra en el cumplimiento estricto de plazos y la seriedad en cada presupuesto, garantizando que cada proyecto se complete con la máxima eficiencia.
          </p>
          <p className="text-[rgba(3,31,40,0.6)] text-base font-medium">
            ¡Contáctanos y empecemos a transformar tu espacio!
          </p>
        </div>

        {/* Imagen */}
        <div>
          <img
            src="/assets/Salon2.jpeg"
            alt="Cocina reformada"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
