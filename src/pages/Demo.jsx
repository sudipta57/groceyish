import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  GiFruitBowl,
  GiBroccoli,
  GiFishCooked,
  GiChickenOven,
  GiWaterBottle,
  GiIceCreamCone,
  GiCakeSlice,
  GiButter,
  GiCookingPot,
} from "react-icons/gi";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DailyBestSells from "../component/DailyBestSales";
import { useNavigate } from "react-router-dom";
import { categories, featureProducts } from "../component/demoData";
import ProductDetails from "../component/ProductDetails";
import Loading from "../component/Loading";
import { PiPlus } from "react-icons/pi";

// home component scetion
const CustomNavigation = () => {
  return (
    <>
      <div className="custom-swiper-button-prev swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow-md hover:bg-gray-200 transition">
        <FaChevronLeft className="text-gray-600" size={20} />
      </div>
      <div className="custom-swiper-button-next swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow-md hover:bg-gray-200 transition">
        <FaChevronRight className="text-gray-600" size={20} />
      </div>
    </>
  );
};
// fetured card
const Card = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-300 rounded-lg p-3 shadow-lg flex flex-col min-w-[150px] min-h-[230px]">
      <img
        src={product.img}
        alt={product.name}
        className="w-30 h-25 object-cover rounded-lg mb-2 cursor-pointer mx-auto"
        onClick={() => {
          navigate(`/product_quick`);
        }}
      />
      <h3 className="text-gray-500 mb-1 text-sm ">{product.category}</h3>
      <h2 className="text-base font-bold text-gray-800 ">{product.name}</h2>
      <div className="flex   text-yellow-500 my-1">
        {[...Array(5)].map((_, i) =>
          i < Math.floor(product.rating) ? (
            <FaStar key={i} />
          ) : i < product.rating ? (
            <FaStarHalfAlt key={i} />
          ) : (
            <FaRegStar key={i} />
          )
        )}
        <p className="text-xs text-gray-500 ml-1">
          ({product.ratingCount} {product.reviews})
        </p>
      </div>
      <p className="text-sm ">
        By <span className="text-[#3BB77E]">Mr. Food</span>
      </p>
      <div className="flex  my-2 justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-base text-green-500 font-bold">{product.price}</p>
          {product.oldPrice && (
            <p className="text-sm text-gray-500 line-through">
              {product.oldPrice}
            </p>
          )}
        </div>

        <button
          className="bg-[#DEF9EC] py-1 px-3 rounded-[4px] text-[#3BB77E] text-sm flex items-center space-x-2"
          onClick={() => {
            navigate(`/mycart`);
          }}
        >
          <img src="/landing/add.png" className="w-4 h-4" alt="Add" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

// top sales
const topSalesproducts = [
  {
    name: "Orange 1kg",
    price: "$2",
    oldPrice: "$3.99",
    rating: 4,
    reviews: 4,
    img: "/landing/fruits/img-1.png", // Update with the correct path
  },
  {
    name: "Vegetables 1kg",
    price: "$2",
    oldPrice: "$3.99",
    rating: 4,
    reviews: 4,
    img: "/landing/fruits/img-2.png", // Update with the correct path
  },
  {
    name: "Strawberry 1kg",
    price: "$2",
    oldPrice: "$3.99",
    rating: 4,
    reviews: 4,
    img: "/landing/fruits/img-3.png",
  },
  {
    name: "Carrot 1kg",
    price: "$2",
    oldPrice: "$3.99",
    rating: 4,
    reviews: 4,
    img: "/landing/fruits/img-4.png", // Update with the correct path
  },
];

const ProductList = ({ title }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
      {/* Title Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-[2px] mb-4">
        <div
          className="bg-[#3BB77E] h-[2px] rounded-full"
          style={{ width: "30%" }} // Example width (can be dynamic)
        ></div>
      </div>

      {/* Product List */}
      {topSalesproducts.map((product, index) => (
        <div key={index} className="flex items-center mb-6">
          <img
            src={product.img}
            alt={product.name}
            className="w-16 h-16 rounded-md shadow-sm mr-4"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {product.name}
            </h3>
            <div className="flex items-center text-yellow-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < product.rating ? (
                    <FaStar />
                  ) : i === Math.floor(product.rating) &&
                    product.rating % 1 !== 0 ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaRegStar />
                  )}
                </span>
              ))}
              <span className="text-gray-500 text-xs ml-2">
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center">
              <div className="text-green-600 font-bold mr-2">
                {product.price}
              </div>
              <div className="text-gray-400 line-through text-sm">
                {product.oldPrice}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const categorie = [
  {
    id: 1,
    name: "Peach",
    count: 20,
    img: "/landing/explore/img-1.png",
    bg: "#FEEFEA",
  },
  {
    id: 2,
    name: "Vegetables",
    count: 220,
    img: "/landing/explore/img-2.png",
    bg: "#FFF3FF",
  },
  {
    id: 3,
    name: "Strawberry",
    count: 10,
    img: "/landing/explore/img-3.png",
    bg: "#DEF9EC",
  },
  {
    id: 4,
    name: "Apple",
    count: 40,
    img: "/landing/explore/img-4.png",
    bg: "#F2FCE4",
  },
  {
    id: 5,
    name: "Orange",
    count: 23,
    img: "/landing/explore/img-5.png",
    bg: "#FEEFEA",
  },
  {
    id: 6,
    name: "Potato",
    count: 3,
    img: "/landing/explore/img-6.png",
    bg: "#ECFFEC",
  },
  {
    id: 7,
    name: "Carrot",
    count: 9,
    img: "/landing/explore/img-7.png",
    bg: "#FFFCEB",
  },
];

// end home component section

const Demo = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: false, // Disable left/right navigation buttons
  };

  const categories1 = [
    { name: "Fresh Fruit", icon: "/landing/category/icon1.png" },
    { name: "Vegetables", icon: "/landing/category/icon2.png" },
    { name: "River Fish", icon: "/landing/category/icon3.png" },
    { name: "Chicken & Meat", icon: "/landing/category/icon4.png" },
    { name: "Drink & Water", icon: "/landing/category/icon5.png" },
    { name: "Yogurt & Ice Cream", icon: "/landing/category/icon6.png" },
    { name: "Cake & Bread", icon: "/landing/category/icon7.png" },
    { name: "Butter & Cream", icon: "/landing/category/icon8.png" },
    { name: "Cooking", icon: "/landing/category/icon9.png" },
  ];

  return (
    <div className="bg-[#C5EAD9C7]">
      <div className="flex bg-[#FFFFFF] flex-col md:flex-row mt-36 items-stretch">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white border-gray-300 border-b border-r mr-6 flex-shrink-0 min-h-[400px] flex flex-col">
          <ul className="space-y-4 p-4 w-full">
            {categories1.map((category, index) => (
              <li
                key={index}
                className={`flex items-center space-x-3 text-gray-700 cursor-pointer p-2 rounded-lg ${
                  selectedCategory === index
                    ? "bg-[#3BB77E] text-white"
                    : "hover:text-green-600"
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                <span className="text-xl">
                  <img src={category.icon} alt="icon" className="w-6 h-6" />
                </span>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>

          {/* Horizontal Line */}
          <hr className="border-t border-gray-300 mx-auto w-full" />

          {/* "All Categories" Section */}
          <div className="flex items-center space-x-3 p-4 cursor-pointer hover:text-green-600">
            <span className="text-xl">
              <img
                src="/landing/category/icon10.png"
                alt="All Categories"
                className="w-6 h-6"
              />
            </span>
            <span className=" text-[#1A1A1A]">View All Category</span>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full md:w-3/4 flex flex-1 min-h-[400px]">
          <Slider {...settings} className="w-full">
            {[...Array(3)].map((_, index) => (
              <div className="relative w-full max-h-[600px]" key={index}>
                <img
                  src="/all-categories/banner-1.png"
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/4 left-8 text-white md:max-w-[500px]">
                  <h1 className="text-[48px] font-[600]">
                    Fresh & Healthy Organic Food
                  </h1>
                  <p className="mt-8 text-lg max-w-[150px] tracking-widest text-[#FFFFFF99]">
                    SALE UP TO <span className="text-white">48%</span> OFF
                  </p>
                  <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-3xl">
                    Shop now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* After Banner */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {/* Free Shipping */}
          <div className="flex p-4 space-x-4 items-center text-center sm:text-left">
            <img
              src="/landing/delivery.png"
              alt="Best Prices & Deals Icon"
              className="w-12 h-12 mx-auto sm:mx-0"
            />
            <div>
              <h4 className="text-[18px]  font-semibold mb-1">Free Shipping</h4>
              <p className="text-sm sm:text-base text-gray-600">
                Free shipping with discount
              </p>
            </div>
          </div>
          {/* Great Support */}
          <div className="flex p-4 space-x-4 items-center text-center sm:text-left">
            <img
              src="/landing/banner-icon-1.png"
              alt="Great Support Icon"
              className="w-12 h-12 mx-auto sm:mx-0"
            />
            <div>
              <h4 className="text-[18px] sm:text-xl font-semibold mb-1">
                Great Support 24/7
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Instant access to Contact
              </p>
            </div>
          </div>
          {/* Secure Payment */}
          <div className="flex p-4 space-x-4 items-center text-center sm:text-left">
            <img
              src="/landing/banner-icon-2.png"
              alt="Secure Payment Icon"
              className="w-12 h-12 mx-auto sm:mx-0"
            />
            <div>
              <h4 className="text-[18px] font-semibold mb-1">
                100% Secure Payment
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                We ensure your money is safe
              </p>
            </div>
          </div>
          {/* Money-Back Guarantee */}
          <div className="flex p-4 space-x-4 items-center text-center sm:text-left">
            <img
              src="/landing/banner-icon-3.png"
              alt="Money-Back Guarantee Icon"
              className="w-12 h-12 mx-auto sm:mx-0"
            />
            <div>
              <h4 className="text-[18px] font-semibold mb-1">
                Money-Back Guarantee
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                30 days money-back
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* home Section */}

      {/* Categories Section */}
      <div className="relative bg-white p-4 sm:p-6 md:p-8 mt-4 rounded-md shadow-md">
        <div className="relative max-w-[1100px] mx-auto flex items-center md:flex-row justify-between items-center md:items-start mb-6 ">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-0 text-center md:text-left">
            Explore Categories
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap justify-center md:justify-evenly py-2 space-x-2 sm:space-x-4 md:space-x-6 text-sm sm:text-base lg:text-lg mt-2 md:mt-0">
            <p className="cursor-pointer hover:text-green-500 transition">
              All
            </p>
            <p className="cursor-pointer hover:text-green-500 transition">
              Vegetables
            </p>
            <p className="cursor-pointer hover:text-green-500 transition">
              Fruits
            </p>
            <p className="cursor-pointer hover:text-green-500 transition">
              Coffee & Teas
            </p>
            <p className="cursor-pointer hover:text-green-500 transition">
              Meat
            </p>
          </div>
        </div>

        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col items-center p-4 rounded-lg shadow-sm cursor-pointer"
                  style={{ backgroundColor: category.bg }}
                  onClick={() => {
                    navigate(`/product_quick`);
                  }}
                >
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover mb-2"
                  />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {category.count} items
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-button-prev absolute -left-10 top-1/2 transform -translate-y-1/2 z-2">
            <img
              src="/landing/Left.png"
              alt="Previous"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
          <div className="custom-swiper-button-next absolute -right-10 top-1/2 transform -translate-y-1/2 z-2">
            <img
              src="/landing/right.png"
              alt="Next"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-md shadow-md mt-6 ">
        <div className="relative max-w-[1100px] mx-auto flex items-center md:flex-row justify-between items-center md:items-start mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Featured Products
          </h1>
          <div className="flex flex-wrap justify-center md:justify-evenly space-x-3 sm:space-x-6 text-sm md:text-base">
            <p className="cursor-pointer hover:text-[#3BB77E]">All</p>
            <p className="cursor-pointer hover:text-[#3BB77E]">Vegetables</p>
            <p className="cursor-pointer hover:text-[#3BB77E]">Fruits</p>
            <p className="cursor-pointer hover:text-[#3BB77E]">Coffee & Teas</p>
            <p className="cursor-pointer hover:text-[#3BB77E]">Meat</p>
          </div>
        </div>

        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            navigation={{
              nextEl: ".button-next", // Custom next button class
              prevEl: ".button-prev", // Custom prev button class
            }}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              375: { slidesPerView: 1, spaceBetween: 15 },
              412: { slidesPerView: 1, spaceBetween: 15 },
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              734: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
              1280: { slidesPerView: 5, spaceBetween: 10 },
            }}
          >
            {featureProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="button-prev absolute -left-10 top-1/2 transform -translate-y-1/2 z-2">
            <img
              src="/landing/Left.png"
              alt="Previous"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
          <div className="button-next absolute -right-10 top-1/2 transform -translate-y-1/2 z-2">
            <img
              src="/landing/right.png"
              alt="Next"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>

        {/* Next Section */}

        <div className="bg-[#FFFFFF] my-4">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-[#FFFFFF]  gap-4  mt-[-5px]">
            {/* First Banner */}
            <div className="flex flex-col bg-[url('landing/banner-2.png')] w-full h-full p-4 bg-contain bg-no-repeat bg-center">
              <div className="flex flex-col justify-center p-6 mt-10 mb-4">
                <button className="bg-[#FFD480] text-[12px] text-white  w-[86px] h-[26px]">
                  Free delivery
                </button>
                <h1 className=" max-w-[600px]  text-[#253D4E] text-[20px] sm:text-[24px] lg:text-[28px] font-[600] mt-4">
                  Free delivery over $50
                </h1>
                <p className="max-w-[300px] text-[#838383] text-[14px] sm:text-[16px] lg:text-[18px] font-[500] mt-4">
                  Purchase $50 worth of products and get free delivery anywhere.
                </p>
                <button className="bg-[#3BB77E] text-[16px] text-white p-2 w-[143px] h-[52px] mt-4">
                  Shop Now &#8594;
                </button>
              </div>
            </div>

            {/* Second Banner */}
            <div className="flex flex-col bg-[url('landing/banner-3.png')] bg-contain bg-no-repeat p-4 bg-center w-full h-full">
              <div className="flex flex-col justify-center p-6 mt-10 mb-4">
              <button className="bg-[#3BB77E] text-[12px] text-white  w-[86px] h-[26px]">
                 60% off
                </button>
                <h1 className="text-[#253D4E] text-[20px] sm:text-[24px] lg:text-[28px] font-[600] mt-4">
                  Organic Food
                </h1>
                <p className="max-w-[300px] text-[#838383] text-[18px] font-[500] mt-4">
                  Save up to 60% off on your first order
                </p>
                <button className="bg-[#3BB77E] text-[16px] text-white p-2 w-[143px] h-[52px] mt-4">
                  Order Now &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* daily sales */}

      <DailyBestSells />

      {/* Top Sales */}
      <div className="bg-[#FFFFFF] w-full mt-4">
          <div className="flex max-w-[1100px] mx-auto flex-col sm:flex-row justify-between mx-auto py-8 bg-white w-full mt-4 ">
            <ProductList title="Top Sells" />
            <ProductList title="Top Rated" />
            <ProductList title="Trending Items" />
            <ProductList title="Recently Added" />
          </div>
        </div>

      {/* Footer Above Section */}
      <div>
        <img
          src="/landing/last-banner.png"
          alt="Footer Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Demo;
