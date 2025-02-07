import React, { useState } from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="mx-3">Account </p>
          <FaChevronRight />

          <p className="text-[#3BB77E] ml-2">Login</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

          {/* Email Input */}
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

          {/* Password Input */}
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
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              />
            </button>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="mb-6 flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#808080] hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#3BB77E] text-white rounded-full py-2 font-medium"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/reg" className="font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <NewsLetter />
      <br></br>
    </div>
  );
}
