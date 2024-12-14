import React, { useEffect, useState } from "react";
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

const Banner = () => {
  const navigate = useNavigate();

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
    <>
      <div className="bg-[#C5EAD9C7]">
        <br></br>
        {/* Banner Section */}
        <div className="flex flex-col justify-center items-center rounded-md shadow-md bg-[url('/landing/banner-1.png')] bg-cover bg-center min-h-[500px] bg-no-repeat px-4 sm:px-10 lg:px-20">
          <div className="text-center sm:text-left max-w-[90%] sm:max-w-xl lg:max-w-3xl">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[55px] font-bold text-[#253D4E] leading-tight">
              Don’t miss our daily amazing deals.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#838383] mt-2">
              Save up to 60% off on your first order.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* After Banner */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-5 bg-white w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Free Shipping */}
            <div className="flex p-4 space-x-4 items-center text-center sm:text-left">
              <img
                src="/landing/top-footer-icon-3.png"
                alt="Best Prices & Deals Icon"
                className="w-12 h-12 mx-auto sm:mx-0"
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
                  Free Shipping
                </h4>
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
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
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
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
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
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
                  Money-Back Guarantee
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  30 days money-back
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="relative bg-white p-4 sm:p-6 md:p-8 mt-4 rounded-md shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 px-4 sm:px-6 lg:px-8">
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

          <Swiper
            slidesPerView={2} // Default for smaller screens
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next", // Custom next button class
              prevEl: ".custom-swiper-button-prev", // Custom prev button class
            }}
            modules={[Navigation]}
            breakpoints={{
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

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev left-0 absolute top-1/2 transform -translate-y-1/2 z-10">
              <img
                src="/landing/Left.png"
                alt="Previous"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
            </div>
            <div className="custom-swiper-button-next right-0 absolute top-1/2 transform -translate-y-1/2 z-10">
              <img
                src="/landing/right.png"
                alt="Next"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
            </div>
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
              <p className="cursor-pointer hover:text-green-500">
                Coffee & Teas
              </p>
              <p className="cursor-pointer hover:text-green-500">Meat</p>
            </div>
          </div>

          <Swiper
            slidesPerView={2} // Default for smaller screens
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".button-next", // Custom next button class
              prevEl: ".button-prev", // Custom prev button class
            }}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              412: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              734: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
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

            {/* Custom Navigation Buttons */}
            <div className="button-prev left-0 absolute top-1/2 transform -translate-y-1/2 z-10">
              <img
                src="/landing/Left.png"
                alt="Previous"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
            </div>
            <div className="button-next right-0 absolute top-1/2 transform -translate-y-1/2 z-10">
              <img
                src="/landing/right.png"
                alt="Next"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
            </div>
          </Swiper>
        </div>

        {/* Next Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-[#FFFFFF] gap-4 px-4 sm:px-6 lg:px-10 my-10 p-4">
          {/* First Banner */}
          <div className="flex flex-col justify-center bg-[url('landing/banner-2.png')] bg-cover min-h-[300px] p-6 sm:p-10">
            <button className="bg-[#FFD480] text-white p-2 w-32 sm:w-40 rounded-sm mb-4">
              Free delivery
            </button>
            <h1 className="text-[#253D4E] text-[20px] sm:text-[24px] lg:text-[28px] font-[600] mb-4">
              Free delivery over $50
            </h1>
            <p className="max-w-sm text-[#838383] text-[14px] sm:text-[16px] lg:text-[18px] font-[500] mt-6">
              Purchase $50 worth of products and get free delivery anywhere.
            </p>
            <button className="bg-[#3BB77E] text-white p-4 w-32 sm:w-40 mt-14">
              Shop Now &#8594;
            </button>
          </div>

          {/* Second Banner */}
          <div className="flex flex-col justify-center bg-[url('landing/banner-3.png')] bg-cover min-h-[300px] p-6 sm:p-10">
            <button className="bg-[#3BB77E] text-white p-2 w-32 sm:w-40 rounded-sm mb-4">
              60% off
            </button>
            <h1 className="text-[#253D4E] text-[20px] sm:text-[24px] lg:text-[28px] font-[600] mb-4">
              Organic Food
            </h1>
            <p className="max-w-sm text-[#838383] text-[14px] sm:text-[16px] lg:text-[18px] font-[500] mt-6">
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
        <div className="bg-black w-full mt-4">
          <div className="flex flex-col sm:flex-row justify-between mx-auto py-8 bg-white w-full mt-4 px-4">
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
    </>
  );
};

export default Banner;
