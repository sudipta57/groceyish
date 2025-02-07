import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import NewsLetter from "./NewsLetter";

export default function PageNotFound() {
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="text-[#3BB77E] ml-2">Not found</p>
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
            className="bg-[#3BB77E] text-white px-6 py-3 rounded-full shadow "
          >
            Back to Home
          </a>
        </div>
      </div>
      <NewsLetter />
      <br></br>
    </div>
  );
}
