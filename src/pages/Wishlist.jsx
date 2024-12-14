import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { HiHome } from "react-icons/hi";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 140,
    originalPrice: 160,
    stock: "In Stock",
    image: "/shop-filter/products/p-7.png", // Replace with the real image URL
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 140,
    originalPrice: 160,
    stock: "In Stock",
    image: "/shop-filter/products/p-2.png", // Replace with the real image URL
  },
  {
    id: 3,
    name: "Onion",
    price: 140,
    originalPrice: 160,
    stock: "Out of Stock",
    image: "/shop-filter/products/p-6.png", // Replace with the real image URL
  },
];

export default function Wishlist() {
  const navigate = useNavigate();

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
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div className="bg-[#C5EAD9C7] md:mt-36 mt-16">
      <br></br>
      <div className=" text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />
          <p className="text-[#3BB77E] ml-2">/ Wishlist</p>
        </div>
      </div>
      <div className="mx-auto p-4 bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">My Wishlist</h1>
        <div className="shadow-md rounded-lg">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">PRODUCT</th>
                <th className="p-4">PRICE</th>
                <th className="p-4">STOCK STATUS</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-4 flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-lg font-semibold">
                      ₹{product.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-lg text-sm font-medium ${
                        product.stock === "In Stock"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        product.stock === "In Stock"
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={product.stock !== "In Stock"}
                      onClick={() => {
                        navigate("/mycart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-gray-400 hover:text-red-600">
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-start items-center space-x-4">
            <span className="font-semibold">Share:</span>
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
