import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Loading from "./Loading";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
          <p>Account</p>
          <p className="text-[#3BB77E]">/ Create Account</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>

          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <i className="fas fa-eye" />
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4 relative">
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <i className="fas fa-eye" />
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Accept all terms & Conditions
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/log"
              className="text-green-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] mt-4 py-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
