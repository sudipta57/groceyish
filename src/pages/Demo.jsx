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
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col min-h-[450px]">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
        onClick={() => {
          navigate(`/product_quick`);
        }}
      />
      <h3 className="text-gray-500 mb-2">{product.category}</h3>
      <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
      <div className="flex items-center text-yellow-500 my-2">
        {[...Array(5)].map((_, i) =>
          i < Math.floor(product.rating) ? (
            <FaStar key={i} />
          ) : i < product.rating ? (
            <FaStarHalfAlt key={i} />
          ) : (
            <FaRegStar key={i} />
          )
        )}
        <p className="text-sm text-gray-500 ml-2">
          ({product.ratingCount} {product.reviews})
        </p>
      </div>
      <p>
        By <span className="text-[#3BB77E]">Mr. Food</span>
      </p>
      <div className="flex items-center my-2 justify-between">
        <div>
          <p className="text-lg text-green-500 font-bold">{product.price}</p>
          {product.oldPrice && (
            <p className="text-sm text-gray-500 line-through ml-2">
              {product.oldPrice}
            </p>
          )}
        </div>
        <button
          className="bg-[#DEF9EC] py-2 px-4 rounded-[4px] text-[#3BB77E]"
          onClick={() => {
            navigate(`/mycart`);
          }}
        >
          Add
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
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="border-b-2 border-green-500 w-10 mb-4"></div>
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
            <div className="text-green-600 font-bold">{product.price}</div>
            <div className="text-gray-400 line-through text-sm">
              {product.oldPrice}
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

  const categories = [
    { name: "Fresh Fruit", icon: <GiFruitBowl /> },
    { name: "Vegetables", icon: <GiBroccoli /> },
    { name: "River Fish", icon: <GiFishCooked /> },
    { name: "Chicken & Meat", icon: <GiChickenOven /> },
    { name: "Drink & Water", icon: <GiWaterBottle /> },
    { name: "Yogurt & Ice Cream", icon: <GiIceCreamCone /> },
    { name: "Cake & Bread", icon: <GiCakeSlice /> },
    { name: "Butter & Cream", icon: <GiButter /> },
    { name: "Cooking", icon: <GiCookingPot /> },
    { name: "View All Category", icon: <PiPlus /> },
  ];

  return (
    <div className="bg-[#C5EAD9C7]">
      <div className="flex flex-col md:flex-row mt-36">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white border-b border-r mr-6">
          <ul className="space-y-4 p-4">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`flex items-center space-x-3 text-gray-700 cursor-pointer p-2 rounded-lg ${
                  selectedCategory === index
                    ? "bg-[#3BB77E] text-white"
                    : "hover:text-green-600"
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Slider */}
        <div className="w-full md:w-3/4">
          <Slider {...settings}>
            <div className="relative">
              <img
                src="/all-categories/banner-1.png"
                alt="Slide 1"
                className="w-full h-auto"
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
            <div>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Slide 2"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Slide 3"
                className="w-full h-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className=" mx-auto px-6 mb-5 bg-white w-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="flex p-4 space-x-4 items-center">
            <img
              src="/landing/top-footer-icon-3.png"
              alt="Best Prices & Deals Icon"
              className="w-12 h-12"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">Free Shipping </h4>
              <p className="text-gray-600">Free shipping with discount</p>
            </div>
          </div>{" "}
          <div className="flex p-4 space-x-4 items-center">
            <img
              src="/landing/banner-icon-1.png"
              alt="Best Prices & Deals Icon"
              className="w-12 h-12"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">Great Support 24/7</h4>
              <p className="text-gray-600">Instant access to Contact</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 items-center">
            <img
              src="/landing/banner-icon-2.png"
              alt="Refundable Icon"
              className="w-12 h-12"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">
                100% Sucure Payment
              </h4>
              <p className="text-gray-600">We ensure your money is save</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 items-center">
            <img
              src="/landing/banner-icon-3.png"
              alt="Free Delivery Icon"
              className="w-12 h-12"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Money-Back Guarantee
              </h4>
              <p className="text-gray-600">30 days money-back</p>
            </div>
          </div>
        </div>
      </div>

      {/* home Section */}

      {/* Categories Section */}
      <div className="relative bg-white p-4 sm:p-6 md:p-8 mt-4 rounded-md shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Explore Categories
          </h1>
          <div className="flex flex-wrap justify-center md:justify-evenly space-x-3 sm:space-x-6 text-sm md:text-base">
            <p className="cursor-pointer hover:text-green-500">All</p>
            <p className="cursor-pointer hover:text-green-500">Vegetables</p>
            <p className="cursor-pointer hover:text-green-500">Fruits</p>
            <p className="cursor-pointer hover:text-green-500">Coffee & Teas</p>
            <p className="cursor-pointer hover:text-green-500">Meat</p>
          </div>
        </div>

        <Swiper
          slidesPerView={2} // Default for smaller screens
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            // Adjust the number of slides per view at different breakpoints
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {categorie.map((category, index) => (
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
          <CustomNavigation />
        </Swiper>
      </div>

      {/* Featured Product Section */}
      <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-md shadow-md mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Featured Products
          </h1>
          <div className="flex flex-wrap justify-center md:justify-evenly space-x-3 sm:space-x-6 text-sm md:text-base">
            <p className="cursor-pointer hover:text-green-500">All</p>
            <p className="cursor-pointer hover:text-green-500">Vegetables</p>
            <p className="cursor-pointer hover:text-green-500">Fruits</p>
            <p className="cursor-pointer hover:text-green-500">Coffee & Teas</p>
            <p className="cursor-pointer hover:text-green-500">Meat</p>
          </div>
        </div>

        <Swiper
          slidesPerView={2} // Default for smaller screens
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              // iPhone 5S, Android smaller phones
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              // iPhone 6, 7, 8, Portrait
              slidesPerView: 1,
              spaceBetween: 15,
            },
            412: {
              // Android Pixel 2, Portrait
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              // Small tablets in portrait mode
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              // iPhone 6-8 Landscape, smaller tablets in portrait
              slidesPerView: 2,
              spaceBetween: 20,
            },
            734: {
              // iPhone X Landscape
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              // iPad Portrait, Android Landscape
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              // iPad Landscape, larger Android Tablets
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              // Desktop and larger devices
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {featureProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <Card product={product} />
            </SwiperSlide>
          ))}
          <CustomNavigation />
        </Swiper>
      </div>

      {/* Next Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#FFFFFF] gap-4 px-4 sm:px-10 my-10 p-4">
        {/* First Banner */}
        <div className="flex flex-col justify-center bg-[url('landing/banner-2.png')] bg-cover min-h-[300px] p-6 sm:p-10">
          <button className="bg-[#FFD480] text-white p-2 w-32 rounded-sm mb-4">
            Free delivery
          </button>
          <h1 className="text-[#253D4E] text-[24px] sm:text-[28px] font-[600] mb-4">
            Free delivery over $50
          </h1>
          <p className="max-w-sm text-[#838383] text-[16px] sm:text-[18px] font-[500] mt-6">
            Purchase $50 worth of products and get free delivery anywhere.
          </p>
          <button className="bg-[#3BB77E] text-white p-4 w-32 sm:w-40 mt-14">
            Shop Now &#8594;
          </button>
        </div>

        {/* Second Banner */}
        <div className="flex flex-col justify-center bg-[url('landing/banner-3.png')] bg-cover min-h-[300px] p-6 sm:p-10">
          <button className="bg-[#3BB77E] text-white p-2 w-32 rounded-sm mb-4">
            60% off
          </button>
          <h1 className="text-[#253D4E] text-[24px] sm:text-[28px] font-[600] mb-4">
            Organic Food
          </h1>
          <p className="max-w-sm text-[#838383] text-[16px] sm:text-[18px] font-[500] mt-6">
            Save up to 60% off on your first order
          </p>
          <button className="bg-[#3BB77E] text-white p-4 w-32 sm:w-40 mt-14">
            Order Now &#8594;
          </button>
        </div>
      </div>

      {/* daily sales */}

      <DailyBestSells />

      {/* Top Sales */}
      <div className="bg-white w-full mt-4">
        <div className="flex flex-wrap justify-between mx-auto py-8 bg-white w-full mt-4 ml-10">
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
