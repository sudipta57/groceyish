import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import Loading from "../component/Loading";
import { useEffect, useState } from "react";
import NewsLetter from "../component/NewsLetter";

export default function Contact() {
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="text-[#3BB77E] ml-2">Contact Us</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8 shadow-md rounded-md  ">
          {/* Contact Info Section */}
          <div className="md:col-span-1 flex flex-col items-center justify-between p-6 rounded-md shadow-xl ">
            {/* Address */}
            <div className="text-center flex flex-col items-center">
              <div className="text-green-500 mb-2">
                <img src="/location.png" alt="img" />{" "}
              </div>
              <p className="text-gray-700 font-medium">Jamshedpur, Jharkhand</p>
            </div>
            <hr className="my-4 w-full" />
            {/* Email */}
            <div className="text-center flex flex-col items-center">
              <div className="text-green-500 mb-2">
                <img src="/email.png" alt="img" />{" "}
              </div>
              <p className="text-gray-700 font-medium">groceyish@gmail.com</p>
              <p className="text-gray-700 font-medium">
                Help.groceyish@gmail.com
              </p>
            </div>
            <hr className="my-4 w-full" />
            {/* Phone */}
            <div className="text-center flex flex-col items-center">
              <div className="text-green-500 mb-2">
                <img src="/phone.png" alt="img" />{" "}
              </div>
              <p className="text-gray-700 font-medium">(219) 555-0114</p>
              <p className="text-gray-700 font-medium">(164) 333-0487</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:col-span-3 p-6 rounded-md shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Just Say Hello!</h2>
            <p className="text-gray-600 mb-6">
              Do you fancy saying hi to me or you want to get started with your
              project and need my help? Feel free to contact me.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Template Cookie"
                  className="border p-2 rounded-md w-full outline-[#3BB77E]"
                />
                {/* Email */}
                <input
                  type="email"
                  placeholder="jannat@gmail.com"
                  className="border p-2 rounded-md w-full outline-[#3BB77E]"
                />
              </div>
              {/* Message */}
              <input
                placeholder="Hello!"
                className="border p-2 rounded-md w-full resize-none outline-[#3BB77E]"
              />
              {/* Subject */}
              <textarea
                type="text"
                placeholder="Subjects"
                className="border p-2 rounded-md h-24 w-full outline-[#3BB77E]"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#3BB77E] text-white px-6 py-2 rounded-full "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="py-4 border ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096346!2d144.9630579153198!3d-37.814107979751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776df4aeda1454!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618228387269!5m2!1sen!2sau"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md"
        ></iframe>
        <NewsLetter />
      </div>
    </div>
  );
}
