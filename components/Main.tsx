import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from './subcomponents/Slide1';

export default function Main() {
  return (
    <>
   
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}  
        loop={true}
        autoplay={{ delay: 5500 }} 
        effect="fade"
        speed={900}
        modules={[Navigation, Pagination, Autoplay]} >
 
        <SwiperSlide>
          <section className="flex bgMain2 bg-center h-[100vh] lg:h-[80vh] lg:bg-contain lg:bg-right">
            <div className="maxW flex items-center">
              <article className="lg:w-[60%]">
                <h1 className="text-5xl font-bold text-center text-white lg:text-BrownD lg:text-left">
                  Cuidar da mente é o primeiro passo para uma <span className="font-normal italic">vida mais leve.</span>
                </h1>
                <p className="mt-6 text-lg text-white text-center lg:text-BrownC lg:text-left">
                  Acolha suas emoções, fortaleça sua mente e encontre equilíbrio no seu dia a dia.
                </p>
                <div className="mt-8 flex flex-col text-center gap-4 justify-center lg:justify-start lg:flex-row lg:text-left">
                  <a className="px-6 py-4 bg-BlueC rounded-tr-lg rounded-br-lg rounded-tl-lg text-BrownD font-semibold" href="">
                    Fale com a psicóloga
                  </a>
                  <a className="px-6 py-4 bg-BlueC rounded-tr-lg rounded-br-lg rounded-tl-lg text-BrownD font-semibold" href="">
                    Nossos serviços
                  </a>
                </div>
              </article>
            </div>
          </section>
        </SwiperSlide>


        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
