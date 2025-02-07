import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className=" mx-auto bg-white mt-4 py-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      {/* Left Text Section */}
      <div className="max-w-[500px]">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Subscribe to our Newsletter
        </h3>
        <p className="text-gray-500 text-sm">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>

      {/* Subscribe Form */}
      <div className="flex items-center w-full md:w-2/5 border rounded-full border-gray-300 overflow-hidden">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-3 text-sm focus:outline-none rounded-l-full"
        />
        <button className="bg-[#3BB77E] text-white px-6 py-3 rounded-full text-sm font-semibold ">
          Subscribe
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
          <FaFacebookF />
        </div>
        <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
          <FaTwitter />
        </div>
        <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
          <FaPinterestP />
        </div>
        <div className="p-2 hover:bg-[#3BB77E] transition-all rounded-full cursor-pointer hover:text-white ">
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
