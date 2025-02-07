import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { PiPinterestLogo } from "react-icons/pi";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "CEO & Founder",
    image: "/about/team2.png",
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
    <div className="w-full bg-white items-center mt-4 p-4 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-[48px] font-bold leading-[57px] text-[#1A1A1A] mb-4">
          Our Awesome Team
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl text-center mx-auto">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
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
              <div className="relative bg-white border rounded-xl pb-3 group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full mx-auto rounded-t-xl object-cover mb-4"
                />
                {/* Social icons */}
                <div className="absolute inset-0 bottom-[76px] bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="flex gap-3 text-white">
                    {member.socials.includes("facebook") && (
                      <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
                        <FaFacebook size={20} />
                      </div>
                    )}
                    {member.socials.includes("twitter") && (
                      <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
                        <BsTwitter size={20} />
                      </div>
                    )}
                    {member.socials.includes("pinterest") && (
                      <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
                        <PiPinterestLogo size={20} />
                      </div>
                    )}
                    {member.socials.includes("instagram") && (
                      <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
                        <BsInstagram size={20} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="ps-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <button className="custom-prev absolute top-1/2 -left-10 transform -translate-y-1/2 text-white rounded-full z-10">
          <img src="/about/left-arrow.png" alt="img" />
        </button>
        <button className="custom-next absolute top-1/2 -right-10 transform -translate-y-1/2 text-white rounded-full z-10">
          <img src="/about/right-arrow.png" alt="img" />
        </button>
      </div>
    </div>
  );
}
