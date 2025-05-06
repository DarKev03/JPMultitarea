import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const services = [
    { id: '01', title: 'Fontanería', description: 'Solucionamos averías, mejoramos instalaciones y modernizamos sistemas de agua...' },
    { id: '02', title: 'Electricidad', description: 'Realizamos instalaciones, mantenimiento y reparaciones eléctricas con total seguridad...' },
    { id: '03', title: 'Reforma de baño', description: 'Transformamos tu baño en un espacio funcional, cómodo y estético...' },
    { id: '04', title: 'Montaje de cocina', description: 'Instalamos tu cocina con precisión y cuidado en cada detalle...' },
    { id: '05', title: 'Parquet', description: 'Instalación de suelos laminados, vinílicos o de madera con acabados profesionales.' },
    { id: '06', title: 'Pintura', description: 'Pintamos interiores y exteriores, con materiales de calidad y resultados duraderos.' },
    { id: '07', title: 'Albañilería', description: 'Reformas estructurales, tabiques, suelos, paredes y más.' },
    { id: '08', title: 'Aire acondicionado', description: 'Instalamos y mantenemos equipos de climatización.' },
];

// Agrupar en bloques de 4
const chunkArray = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const ProductCarousel: React.FC = () => {
    const groupedServices = chunkArray(services, 4);

    return (
        <section className="bg-[#edf1f2] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    loop={true}
                    spaceBetween={40}
                >
                    {groupedServices.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-12">
                                {group.map((service, i) => (
                                    <div key={i} className="px-6 py-12">
                                        <div className="flex gap-4 items-start">
                                            <span className="text-2xl font-bold text-green-900 shrink-0">
                                                {service.id}
                                            </span>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm max-w-md break-words">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCarousel;
