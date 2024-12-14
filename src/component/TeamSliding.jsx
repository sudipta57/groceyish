import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "CEO & Founder",
    image: "/about/team2.png", // Replace with real image URLs
    socials: ["facebook", "twitter", "pinterest", "instagram"],
  },
  {
    name: "Jane Cooper",
    role: "Worker",
    image: "/about/team2.png",
    socials: ["facebook", "twitter", "pinterest", "instagram"],
  },
  {
    name: "Cody Fisher",
    role: "Security Guard",
    image: "/about/team3.png",
    socials: ["facebook", "twitter", "pinterest", "instagram"],
  },
  {
    name: "Robert Fox",
    role: "Senior Farmer Manager",
    image: "/about/team4.png",
    socials: ["facebook", "twitter", "pinterest", "instagram"],
  },
  {
    name: "Cody Fisher",
    role: "Security Guard",
    image: "/about/team3.png",
    socials: ["facebook", "twitter", "pinterest", "instagram"],
  },
];
export default function TeamSliding() {
  return (
    <div className="w-full bg-white items-center mt-4 p-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Awesome Team</h2>
        <p className="text-gray-600 mt-4">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full mx-auto  object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
