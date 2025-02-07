import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Customer",
    image: "about/testi1.png", // Replace with actual image URL
    rating: 5,
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
  },
  {
    name: "Dianne Russell",
    role: "Customer",
    image: "about/testi2.png",
    rating: 5,
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
  },
  {
    name: "Eleanor Pena",
    role: "Customer",
    image: "about/testi3.png",
    rating: 5,
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
  },
  {
    name: "Eleanor Pena",
    role: "Customer",
    image: "about/testi3.png",
    rating: 5,
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
  },
];
export default function Testimonial() {
  return (
    <div>
      <div className="bg-gray-50 py-12 my-4">
        <div className="ml-4 mb-8">
          <div className="flex justify-between">
            <h2 className="text-[48px] font-[700] font-bold">
              Client Testimonial
            </h2>
            <div className="space-x-2">
              <button className="custom-prev2 text-white rounded-full z-10 ">
                <img src="/about/left-arrow.png" alt="img" />
              </button>
              <button className="custom-next2 text-white rounded-full z-10 ">
                <img src="/about/right-arrow.png" alt="img" />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next2",
            prevEl: ".custom-prev2",
          }}
          // pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-green-400 text-4xl font-bold">“</div>
                </div>
                <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#FF8A00] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
