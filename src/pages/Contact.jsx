import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import Loading from "../component/Loading";
import { useEffect, useState } from "react";

export default function Contact() {
  // loading component

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />
          <p className="text-[#3BB77E]">/ Contact</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8 bg-white shadow-md rounded-md  ">
        {/* Contact Info Section */}
        <div className="flex flex-col items-center justify-between p-6 border rounded-md shadow-sm bg-gray-50">
          {/* Address */}
          <div className="text-center">
            <div className="text-green-500 mb-2">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <p className="text-gray-700 font-medium">Jamshedpur, Jharkhand</p>
          </div>
          <hr className="my-4 w-full" />
          {/* Email */}
          <div className="text-center">
            <div className="text-green-500 mb-2">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <p className="text-gray-700 font-medium">groceyish@gmail.com</p>
            <p className="text-gray-700 font-medium">
              Help.groceyish@gmail.com
            </p>
          </div>
          <hr className="my-4 w-full" />
          {/* Phone */}
          <div className="text-center">
            <div className="text-green-500 mb-2">
              <i className="fas fa-phone text-2xl"></i>
            </div>
            <p className="text-gray-700 font-medium">(219) 555-0114</p>
            <p className="text-gray-700 font-medium">(164) 333-0487</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-6 border rounded-md shadow-sm">
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
                className="border p-2 rounded-md w-full"
              />
              {/* Email */}
              <input
                type="email"
                placeholder="jannat@gmail.com"
                className="border p-2 rounded-md w-full"
              />
            </div>
            {/* Message */}
            <textarea
              placeholder="Hello!"
              className="border p-2 rounded-md w-full h-28 resize-none"
            ></textarea>
            {/* Subject */}
            <input
              type="text"
              placeholder="Subjects"
              className="border p-2 rounded-md w-full"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
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
        <div className="bg-[#F7F7F7]  py-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
      </div>
    </div>
  );
}
