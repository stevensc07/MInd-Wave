import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      text: "En mi primera sesión me brindó toda la comodidad y confianza para hablar y expresarme. Es excelente 👌",
      img: "https://selia.co/wp-content/uploads/2023/08/testimonial.svg",
    },
    {
      text: "Lina me ha ayudado TANTO! Con sus tareas, psicoeducación y herramientas para enfrentar mi día a día. La recomiendo 100%!!!",
      img: "https://selia.co/wp-content/uploads/2023/08/testimonial.svg",
    },
    {
      text: "Me encantó, es una persona super empática, te saca una sonrisa y es super lúdica.",
      img: "https://selia.co/wp-content/uploads/2023/08/testimonial.svg",
    },
    {
      text: "Reconfortante, siento que tiene las habilidades necesarias para reconocer lo que a veces no logramos nosotros mismos.",
      img: "https://selia.co/wp-content/uploads/2023/08/testimonial.svg",
    },
    {
      text: "Me encantó su metodología para este proceso de reconocimiento y sanación. Totalmente recomendada.",
      img: "https://selia.co/wp-content/uploads/2023/08/testimonial.svg",
    },
  ];

  return (
    <div className="bg-white py-12 max-w-[300px] sm:max-w-2xl mx-auto">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#091D3E] max-w-[300px] sm:max-w-3xl mx-auto">
          Historias de Transformación Gracias a la Terapia Online de MindWave
        </h2>
        <p className="text-base sm:text-lg mt-4 text-[#091D3E] max-w-[300px] sm:max-w-2xl mx-auto">
          Estos testimonios nos reafirman que estamos cambiando el mundo,{" "}
          <b>una vida a la vez</b>.
        </p>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#FBDDD9] shadow-lg rounded-lg p-4 md:p-6 max-w-[300px] mx-auto">
                  <p className="text-gray-800 text-sm sm:text-base mb-4 text-center">
                    {testimonial.text}
                  </p>
                  <div className="flex justify-center">
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                      src={testimonial.img}
                      alt="testimonial"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
