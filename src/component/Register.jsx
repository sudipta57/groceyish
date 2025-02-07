import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import NewsLetter from "./NewsLetter";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="mx-3">Account </p>
          <FaChevronRight />

          <p className="text-[#3BB77E] ml-2">Create Account</p>
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
              className="w-full bg-[#3BB77E] text-white rounded-full py-2 font-medium"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/log" className=" font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <NewsLetter />
      <br></br>
    </div>
  );
}
