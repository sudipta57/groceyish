import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";

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
      highlighted: true,
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
          <div className="flex items-center">
            <HiHome />

            <p>Category</p>
            <p className="text-[#3BB77E]">/ Chinese Cabbage</p>
          </div>
        </div>

        <div className="p-6 bg-white font-sans w-full mx-auto">
          {/* Product Layout */}
          <div className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto items-center">
            {/* Product Images */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
              {/* Thumbnail Images */}
              <div className="flex flex-wrap space-x-2 md:flex-col md:space-y-2">
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

              {/* Main Product Image */}
              <div className="border-2 border-green-500 p-2 rounded-md">
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
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                  In Stock
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600">4 Review</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 pb-8 border-b">
                <span className="text-gray-400 line-through">₹260.99</span>
                <span className="text-[#3BB77E] text-xl font-bold">
                  ₹140.99
                </span>
                <span className="text-green-600 tex-[#EA4B48] rounded-full p-1 bg-[#EA4B481A]">
                  64% Off
                </span>
              </div>

              {/* Brand */}
              <div className="flex items-center space-x-6 pt-8">
                <span className="font-semibold">Brand:</span>
                <span className="text-gray-600">
                  <img src="/product_quick/brand.png" className="w-16 h-8" />
                </span>

                {/* Social Share */}
                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Share item:</span>
                  <div className="flex space-x-2">
                    <a href="#" className="text-green-500">
                      <img src="/product_quick/item1.png" />
                    </a>
                    <a href="#" className="text-green-500">
                      <img src="/product_quick/item2.png" />
                    </a>
                    <a href="#" className="text-green-500">
                      <img src="/product_quick/item3.png" />
                    </a>
                    <a href="#" className="text-green-500">
                      <img src="/product_quick/item4.png" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-md text-left">
                <p className="text-gray-600">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
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
                  className="bg-[#3BB77E] text-white px-8 py-3 rounded-full hover:bg-green-600 flex items-center space-x-2 sm:px-10 sm:py-4"
                  onClick={toggleDrawer}
                >
                  <span className="text-sm sm:text-base">Add to Cart</span>
                  <span>
                    <img
                      src="/product_quick/cart.png"
                      alt="Cart Icon"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </span>
                </button>

                {/* Wishlist Button */}
                <button className="text-gray-500 hover:text-gray-700 mt-4 sm:mt-0 sm:ml-4">
                  <img
                    src="/product_quick/wish.png"
                    className="w-10 h-10 sm:w-10 sm:h-10"
                  />
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
          className={`relative border rounded-lg p-4 shadow-md ${
            product.highlighted ? "border-green-500" : "border-gray-200"
          }`}
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
            <button className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base bg-[#DEF9EC] text-[#3BB77E] rounded hover:bg-[#a9edcd]">
              🛒 Add
            </button>
          </div>
        </div>
      ))}
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
          ×
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Chinese Cabbage"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">Chinese Cabbage</p>
            <p className="text-sm text-gray-600">1 kg × ₹140.00</p>
          </div>
          <button className="text-red-500">×</button>
        </div>

        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Green Apple"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold">Green Apple</p>
            <p className="text-sm text-gray-600">1 kg × ₹1,187.00</p>
          </div>
          <button className="text-red-500">×</button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bottom-0 left-0 right-0 absolute">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">2 Product</span>
          <span className="font-bold text-lg">₹1,327.00</span>
        </div>
        <button
          className="w-full bg-green-500 text-white py-2 rounded-lg mb-2"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
        <button
          className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg"
          onClick={() => {
            navigate("/mycart");
          }}
        >
          Go To Cart
        </button>
      </div>
    </div>
  );
};
