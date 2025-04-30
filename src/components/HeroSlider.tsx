"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop",
    title: "Welcome to Trust Family",
    subtitle: "Your trusted partner in education and career development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
    title: "Study in Russia",
    subtitle: "World-class education in prestigious Russian universities",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop",
    title: "Your Future Starts Here",
    subtitle: "Expert guidance for your academic journey in Russia",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/70" />
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next !text-white after:!text-2xl hover:!text-blue-300 transition-colors"></div>
        <div className="swiper-button-prev !text-white after:!text-2xl hover:!text-blue-300 transition-colors"></div>
        <div className="swiper-pagination !bottom-8 [&>.swiper-pagination-bullet]:!bg-white [&>.swiper-pagination-bullet-active]:!bg-blue-500"></div>
      </Swiper>
    </div>
  );
}
