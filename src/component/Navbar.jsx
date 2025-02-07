import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { FaBars, FaPhone, FaThLarge, FaTimes } from "react-icons/fa";
const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const restrictedRoutes = ["/log", "/reg", "/*"];

  return (
    <>
      {/* Navigation Bar and Header Section */}
      <nav className=" fixed font-quicksand top-0 right-0 left-0 z-20 bg-white shadow-md py-4 px-6 border-b border-gray-300 mb-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="right-0">
            <img src="/landing/company-logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Center - Search Bar */}

          <div className="hidden lg:flex items-center rounded-lg bg-[#F3F3F3]  w-full max-w-lg  h-9 ">
            <select className="bg-transparent text-gray-600 text-sm outline-none">
              <option>All Categories</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Dairy</option>
            </select>
            <span className="mx-2 text-gray-400">|</span>
            <input
              type="text"
              placeholder="Search for items..."
              className="flex-1 bg-[#F3F3F3] outline-none placeholder-gray-400"
            />

            <button className="bg-[#3BB77E] text-white p-2  flex right-[-10px]">
              <FaSearch size={21} />
            </button>
          </div>

          {/* Right Side - Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/my-wishlist"
              className="relative flex items-center text-gray-700"
            >
              <FaHeart className="text-xl" />
              <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-green-500 text-white text-xs rounded-full px-1">
                4
              </span>
              <span className="ml-2">Wishlist</span>
            </Link>
            <Link
              to="/my-cart"
              className="relative flex items-center text-gray-700"
            >
              <FaShoppingCart className="text-xl" />
              <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-green-500 text-white text-xs rounded-full px-1">
                1
              </span>
              <span className="ml-2">
                My cart <span className="text-green-500">$21</span>
              </span>
            </Link>
            {!restrictedRoutes.includes(location.pathname) && (
              <header>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
            )}
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="lg:hidden text-gray-700 text-2xl transition-all duration-300 ease-in-out transform"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Header Links (Merged Section for Large Screens) */}

        <div className="hidden lg:flex items-center border-t border-gray-300 justify-between mt-4">
          <Link to="/demo-us">
            <button className="flex items-center text-white mt-2 bg-[#3BB77E] px-4 py-2 rounded">
              <FaThLarge className="mr-2" /> Browse All Categories
            </button>
          </Link>

          <div className="flex space-x-6">
            <Link to="/" className="flex items-center text-gray-700">
              Home
            </Link>
            <Link to="/shop-filter" className="flex items-center text-gray-700">
              Shop
            </Link>
            <Link to="/about-us" className="flex items-center text-gray-700">
              About Us
            </Link>
            <Link to="/contact-us" className="flex items-center text-gray-700">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center text-green-500">
            <FaPhone className="mr-2" /> 1233-7777
            <span className="ml-2 text-gray-500">24/7 support center</span>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {menuOpen && (
          <div className="bg-white shadow-md py-4 px-1 z-30 border-b border-gray-300 lg:hidden fixed top-12 left-0 right-0 transition-all duration-300 ease-in-out transform">
            {/* Search Bar */}
            <div className="flex bg-gray-100 rounded-xl p-2 max-w-[400px]">
              <select className="bg-transparent text-gray-600 text-sm outline-none">
                <option>All Categories</option>
                <option>Fruits</option>
                <option>Vegetables</option>
                <option>Dairy</option>
              </select>
              <span className="mx-2 text-gray-400">|</span>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search for items..."
                className="flex-1 bg-transparent text-gray-700 outline-none placeholder-gray-400 py-1 px-2"
              />

              {/* Search Button (Icon inside Input Field) */}
              <button className="bg-green-500 rounded-full p-2 text-white">
                <FaSearch />
              </button>
            </div>

            {/* Links and Contact Info */}
            <div className="flex flex-col items-start mt-4 space-y-4 ps-10 md:ps-0">
              <Link
                to="/"
                className="flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/shop-filter"
                className="flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                Shop
              </Link>
              <Link
                to="/about-us"
                className="flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
              <Link
                to="/my-wishlist"
                className="relative flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                <FaHeart className="text-xl" />
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-green-500 text-white text-xs rounded-full px-1">
                  4
                </span>
                <span className="ml-2">Wishlist</span>
              </Link>
              <Link
                to="/my-cart"
                className="relative flex items-center text-gray-700"
                onClick={handleLinkClick}
              >
                <FaShoppingCart className="text-xl" />
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-green-500 text-white text-xs rounded-full px-1">
                  1
                </span>
                <span className="ml-2">
                  My cart <span className="text-green-500">$21</span>
                </span>
              </Link>
              <header>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
              <div className="text-green-500 flex items-center">
                <FaPhone className="mr-2" /> 1233-7777
                <span className="ml-2 text-gray-500">24/7 support center</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default TopBar;
