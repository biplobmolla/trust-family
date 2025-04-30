"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Testimonial {
  quote: string;
  name: string;
  university: string;
  image?: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-8 rounded-xl h-full shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100 flex items-center justify-center bg-blue-50">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-blue-800 font-bold text-2xl">
                      {getInitials(testimonial.name)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.university}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !bottom-0 [&>.swiper-pagination-bullet]:!bg-gray-300 [&>.swiper-pagination-bullet-active]:!bg-blue-800"></div>
        <div className="swiper-button-next !text-blue-800 after:!text-2xl hover:!text-blue-600 transition-colors"></div>
        <div className="swiper-button-prev !text-blue-800 after:!text-2xl hover:!text-blue-600 transition-colors"></div>
      </Swiper>
    </div>
  );
}
