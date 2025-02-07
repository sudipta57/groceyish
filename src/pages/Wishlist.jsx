import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import NewsLetter from "../component/NewsLetter";
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

  return (
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div className="bg-[#C5EAD9C7] md:mt-36 mt-16">
      <br></br>
      <div className=" text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="text-[#3BB77E] ml-2"> Wishlist</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-[32px] font-[700] text-center mb-6">
            My Wishlist
          </h1>
          <div className="rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b text-[#808080] text-[14px] font-[600]">
                    <th className="p-4 text-left">PRODUCT</th>
                    <th className="p-4">PRICE</th>
                    <th className="p-4">STOCK STATUS</th>
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
                      <td className="p-4 text-center ">
                        <span className="text-lg font-semibold">
                          ₹{product.price}
                        </span>
                        <span className="text-gray-400 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`px-2 py-1 rounded-md text-sm font-medium ${
                            product.stock === "In Stock"
                              ? "bg-[#20B52633] text-[#2C742F]"
                              : "bg-[#EA4B4833] text-[#EA4B48]"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          className={`px-4 py-2 rounded-full font-semibold text-sm ${
                            product.stock === "In Stock"
                              ? "bg-[#3BB77E] text-white"
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
                      <td className=" text-center">
                        <button className="text-[#B3B3B3] hover:text-red-600 border rounded-full px-2">
                          &times;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex justify-start items-center space-x-4">
              <span className="font-semibold">Share:</span>
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
          </div>
        </div>
      </div>
      <NewsLetter />
      <br></br>
    </div>
  );
}
