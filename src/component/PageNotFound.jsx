import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";

export default function PageNotFound() {
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />
          <p className="text-[#3BB77E]">/ 404 Error Page</p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-white md:mt-5 mb-6">
        <div className="text-center">
          {/* Image at the top */}

          {/* 404 Content */}
          <div className="relative inline-block">
            <img
              src="/landing/pageNotFound.png"
              alt="Top illustration"
              className="mx-auto mb-6"
            />
          </div>

          <p className="text-xl font-medium mt-4">Oops! Page not found</p>
          <p className="text-gray-600 mb-6">
            The page you are looking for doesn’t exist or another error
            occurred. Go back to the home page.
          </p>

          <a
            href="/"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
      <div className="bg-[#F7F7F7] py-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
        <div className="flex items-center w-full md:w-2/5">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 text-sm border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-3 rounded-r-lg text-sm font-semibold hover:bg-green-600">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <div className="p-2 bg-green-100 rounded-full text-green-600">
            <FaFacebookF />
          </div>
          <div className="p-2 bg-green-100 rounded-full text-green-600">
            <FaTwitter />
          </div>
          <div className="p-2 bg-green-100 rounded-full text-green-600">
            <FaPinterestP />
          </div>
          <div className="p-2 bg-green-100 rounded-full text-green-600">
            <FaInstagram />
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
