import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {services} from '../utils/Data';



// Agrupar en bloques de 4
const chunkArray = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const ProductCarousel: React.FC = () => {
    const groupedServices = chunkArray(services, 4);

    return (
        <section className="bg-[#EDF1F2] py-16 px-4 shadow-inner">
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-50 sm:m-auto pb-8">
                                {group.map((service, i) => (
                                    <div key={i} className="px-6 py-12">
                                        <div className="flex gap-4 items-start">
                                            <span className="text-2xl text-[#031F28] shrink-0 p-1">
                                                {service.id}
                                            </span>
                                            <div>
                                                <h3 className="text-3xl text-[#031F28] mb-1">
                                                    {service.title}
                                                </h3>
                                                <p className="text-[rgba(3,31,40,0.6)] text-sm max-w-md break-words">
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
