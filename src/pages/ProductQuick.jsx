import React, { useEffect, useState, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Loading from "../component/Loading";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome, HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import NewsLetter from "../component/NewsLetter";

export default function ProductQuick() {
  const [mainImage, setMainImage] = useState("/product_quick/Product_main.png");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [Quantity, setQuantity] = useState(1);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const thumbnails = [
    "/product_quick/Product_main.png", // Large image 350x350
    "/product_quick/Product2.png", // Thumbnail 1
    "/product_quick/Product3.png?1", // Thumbnail 2
    "/product_quick/Product4.png?2", // Thumbnail 3
  ];

  const products = [
    {
      id: 1,
      name: "Big Potato's",
      price: "₹140",
      image: "/shop-filter/products/p-1.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Chanise Cabbage",
      price: "₹1,187",
      originalPrice: "₹2,187",
      image: "/shop-filter/products/p-2.png",
      rating: 5,
      sale: true,
    },
    {
      id: 3,
      name: "Corn",
      price: "₹170",
      image: "/shop-filter/products/p-3.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Brinjal",
      price: "₹340",
      image: "/shop-filter/products/p-4.png",
      rating: 4,
    },
  ];

  // loading component
  const scrollRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 80; // Adjust based on thumbnail size
      scrollRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
      <div
        onClick={() => {
          isDrawerOpen && toggleDrawer();
        }}
      >
        <br></br>
        <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
          <div className="flex items-center text-gray-700">
            <HiHome className="text-xl" />

            <p className="mx-2 text-[#999999]">Category</p>

            <HiChevronRight className="text-gray-500" />

            <p className="mx-2 text-[#999999]">Vegetables</p>

            <HiChevronRight className="text-gray-500" />

            <p className="text-[#3BB77E]">Chinese Cabbage</p>
          </div>
        </div>

        <div className="p-6 bg-white font-sans w-full mx-auto">
          {/* Product Layout */}
          <div className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto items-center">
            {/* Product Images */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
              {/* Thumbnail Images */}
              <div className="relative flex flex-col items-center w-20">
                {/* Top Arrow */}
                <button
                  className="absolute -top-10 bg-white p-1 rounded-full shadow-md z-10"
                  onClick={() => scrollThumbnails("up")}
                >
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                </button>

                {/* Thumbnail List */}
                <div
                  ref={scrollRef}
                  className="flex flex-col space-y-2 overflow-hidden overflow-y-hidden max-h-60 scrollbar-hide"
                >
                  {thumbnails.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 cursor-pointer border rounded-md ${
                        mainImage === image
                          ? "border-green-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setMainImage(image)}
                    />
                  ))}
                </div>

                {/* Bottom Arrow */}
                <button
                  className="absolute -bottom-10 bg-white p-1 rounded-full shadow-md z-10"
                  onClick={() => scrollThumbnails("down")}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Main Product Image */}
              <div className=" p-2 rounded-md">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-[450px] h-[450px] object-cover md:w-[500px] md:h-[500px]"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 md:max-w-lg mt-4 md:mt-0">
              {/* Title and Status */}
              <div className="flex items-center space-x-2">
                <h1 className="text-[28px] sm:text-[36px] font-[600]">
                  Chinese Cabbage
                </h1>
                <span className="bg-[#20B52633] text-[#2C742F] px-2 py-1 rounded">
                  In Stock
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600">4 Review</span>

                <div className="text-[#333333] text-[14px]">
                  SKU: <span className="text-[#666666]">2,51,349</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 pb-4 border-b">
                <span className="text-gray-400 line-through">₹260.99</span>
                <span className="text-[#3BB77E] text-xl font-bold">
                  ₹140.99
                </span>
                <span className="text-[#EA4B48] text-[12px] font-[500] tex-[#EA4B48] rounded-full p-2 bg-[#EA4B481A]">
                  64% Off
                </span>
              </div>

              {/* Brand */}
              <div className="flex items-center space-x-20 pt-2">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Brand:</span>
                  <img src="/product_quick/brand.png" className="w-12 h-17" />
                </div>

                {/* Social Share */}
                <div className="flex items-center space-x-4 mr-0">
                  <span className="font-semibold">Share item:</span>
                  <div className="flex space-x-2">
                    {["item1.png", "item2.png", "item3.png", "item4.png"].map(
                      (item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="group relative flex items-center justify-center w-10 h-10 rounded-full transition duration-300 hover:bg-[#3BB77E]"
                        >
                          <img
                            src={`/product_quick/${item}`}
                            alt="Social Icon"
                            className="w-8 h-8 transition duration-300 group-hover:scale-110"
                          />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className=" text-left border-b pb-4">
                <p className="text-gray-600">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 border-b pb-4">
                <div className="flex items-center border border-gray-300 rounded-full p-1">
                  <button
                    className="px-4 p-2 bg-gray-200 rounded-full"
                    onClick={() => {
                      Quantity > 1 && setQuantity(Quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={Quantity}
                    readOnly
                    className="w-12 text-center border-0"
                  />
                  <button
                    className="px-4 p-2 bg-gray-200 rounded-full"
                    onClick={() => {
                      setQuantity(Quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="bg-[#3BB77E] text-white text-center w-[358px] h-[50px] px-8 py-2 rounded-full hover:bg-green-600 flex items-center justify-center gap-2 sm:px-10 sm:py-4"
                  onClick={toggleDrawer}
                >
                  <span className="text-[16px] sm:text-base">Add to Cart</span>
                  <img
                    src="/product_quick/cart.png"
                    alt="Cart Icon"
                    className="w-5 h-5"
                  />
                </button>

                {/* Wishlist Button */}
                <button className="text-gray-500 hover:text-gray-700 mt-4 sm:mt-0 sm:ml-4">
                  <img src="/product_quick/wish.png" className="w-13 h-14" />
                </button>
              </div>

              {/* Category and Tags */}
              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <span className="font-semibold">Category:</span> Vegetables
                </p>
                <p>
                  <span className="font-semibold">Tags:</span> Vegetables,
                  Healthy, Chinese, Cabbage, Green Cabbage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Product Section */}
        <div className="bg-white w-full mt-4">
          <div className="p-6 font-sans max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-4 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`relative border rounded-lg p-4  transition-all duration-300 
            ${
              product.highlighted
                ? "border-green-500"
                : "border-gray-200 hover:border-green-500"
            } 
            hover:shadow-lg hover:scale-105 cursor-pointer`}
                >
                  {/* Sale Badge */}
                  {product.sale && (
                    <span className="absolute top-2 left-2 text-xs sm:text-sm text-white bg-red-500 px-2 py-1 rounded">
                      Sale 50%
                    </span>
                  )}
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover rounded mb-4"
                  />
                  {/* Product Details */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-xs sm:text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-green-600 text-sm sm:text-xl font-bold">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`text-yellow-400 ${
                              index < product.rating ? "" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Add to Cart Button */}
                    <button className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base bg-[#DEF9EC] text-[#3BB77E] rounded hover:bg-[#a9edcd] flex items-center space-x-2">
                      <img
                        src="/landing/add.png"
                        className="w-5 h-5"
                        alt="Add Icon"
                      />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NewsLetter />
        <br></br>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}

const Drawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Shopping Cart (2)</h2>

        <button onClick={onClose} className="text-gray-500 text-lg">
          X
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src="/product_quick/Product_main.png"
            alt="Chinese Cabbage"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">Chinese Cabbage</p>
            <p className="text-sm text-gray-600">1 kg × ₹140.00</p>
          </div>
          <button className="text-red-500 px-2 border rounded-full">×</button>
        </div>

        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src="/shop-filter/products/p-4.png"
            alt="Green Apple"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">Brinjal</p>
            <p className="text-sm text-gray-600">1 kg × ₹1,187.00</p>
          </div>
          <button className="text-red-500 px-2 border rounded-full">×</button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bottom-0 left-0 right-0 absolute">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">2 Product</span>
          <span className="font-bold text-lg">₹1,327.00</span>
        </div>
        <button
          className="w-full bg-[#3BB77E] text-white py-2 rounded-full font-bold mb-2"
          onClick={() => {
            navigate("/my-checkout");
          }}
        >
          Checkout
        </button>
        <button
          className="w-full bg-[#3BB77E1A] text-[#3BB77E] font-bold py-2 rounded-full"
          onClick={() => {
            navigate("/my-cart");
          }}
        >
          Go To Cart
        </button>
      </div>
    </div>
  );
};
