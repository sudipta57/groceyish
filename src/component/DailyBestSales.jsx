import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";

const DailyBestSells = () => {
  const sliderRef = useRef(null); // Reference to the Slider

  // Renderer function for customizing the display
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Expired!</span>;
    } else {
      return (
        <div className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded">
          Expires in: {hours} : {minutes} : {seconds}
        </div>
      );
    }
  };

  // Set expiration to the end of the day
  const expirationTime = new Date().setHours(23, 59, 59, 999);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false, // Disable default arrows
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#FFFFFF]">
      {/* Header Section */}
      <div className="relative max-w-[1100px] mx-auto flex items-center md:flex-row justify-between items-center md:items-start mb-6 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0 ml-0">

          Daily Best Sells
        </h2>

        <div className="flex space-x-4 sm:space-x-10 text-sm sm:text-base font-semibold text-gray-600 ml-0">
          <span className="text-green-600 cursor-pointer">Featured</span>
          <span className="cursor-pointer">Popular</span>
          <span className="cursor-pointer">New</span>

          {/* Countdown and Arrows */}
          <div className="flex items-center space-x-4">
            <Countdown date={expirationTime} renderer={renderer} />
          </div>
        </div>
        <div className="flex items-center space-x-4 right-0">
          {/* Custom Previous Arrow */}
          <div
            onClick={() => sliderRef.current?.slickPrev()}
            className="cursor-pointer"
          >
            <img src="/landing/Left.png" alt="Previous" className="w-8 h-8" />
          </div>

          {/* Custom Next Arrow */}
          <div
            onClick={() => sliderRef.current?.slickNext()}
            className="cursor-pointer"
          >
            <img src="/landing/right.png" alt="Next" className="w-8 h-8" />

          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row max-w-[1100px] mx-auto items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Product Cards Slider */}
        <div className="w-full sm:w-3/4">
          <Slider ref={sliderRef} {...settings}>
            <ProductCard
              image="/landing/daily-1.png"
              category="Coffee & Teas"
              title="Coffee 1kg"
              rating={4}
              price="$20"
              originalPrice="$25"

              sold="20/50"
            />
            <ProductCard
              image="/landing/daily-2.png"
              category="Meat"
              title="Halal Sausage 350g"
              rating={4}
              price="$4"
              originalPrice="$10"

              sold="7/20"
            />
            <ProductCard
              image="/landing/daily-3.png"
              category="Coffee & Teas"
              title="Green Tea 250g"
              rating={4}
              price="$3"
              originalPrice="$7"

              sold="32/50"
            />
            <ProductCard
              image="/landing/daily-4.png"
              category="Vegetables"
              title="Onion 1kg"
              rating={4}
              price="$0.50"
              originalPrice="$2"

              sold="2/10"
            />
          </Slider>
        </div>

        {/* Sidebar Section */}
        <div className="w-full sm:w-1/4 bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-2xl text-[#253D4E] font-bold mb-4 text-center">
            10% OFF
          </h3>

          <p className="text-gray-600 mb-4">
            For new members, sign up at the first time
          </p>
          <form className="space-y-4">
            <div className="relative w-full">
              <label className="text-sm font-medium">Email address</label>

              {/* Wrapper for Input Field and Icon */}
              <div className="relative">
                {/* Mail Icon */}
                <img
                  src="/landing/mail.png"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  alt="Mail Icon"
                />

                {/* Input Field */}
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>

            <div className="relative w-full">
              <label className="text-sm font-medium">Password</label>
              {/* Wrapper for Input Field and Icon */}
              <div className="relative">
                {/* Mail Icon */}
                <img
                  src="/landing/key.png"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  alt="Mail Icon"
                />

                <input
                  type="password"
                  placeholder="Maximum 8 characters"
                  className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <button className="w-full bg-[#3BB77E] text-white py-2 rounded mt-4 font-semibold">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  image,
  category,
  title,
  rating,
  price,
  originalPrice,
  sold,
}) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white relative mx-2 cursor-pointer">
      {/* Save Badge */}
      <div className="absolute top-0 left-0 bg-[#FFD480] text-[#FFFFFF] text-xs font-semibold px-2 py-1 rounded-md">
        Save 10%
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded"
        onClick={() => navigate(`/product_quick`)}
      />

      {/* Category */}
      <div className="text-xs text-gray-500 mb-1">{category}</div>

      {/* Title */}
      <h4 className="font-semibold text-gray-800 text-base mb-2">{title}</h4>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-2">
        <Stars rating={rating} />
        <span className="text-xs text-gray-500">({rating})</span>
      </div>

      {/* Price Section */}
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-lg font-bold text-[#3BB77E]">{price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            {originalPrice}
          </span>
        )}
      </div>

      {/* Sold Information */}
      <div className="text-sm text-gray-500 mb-4">
        Sold: <span className="font-semibold">{sold}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
        <div
          className="bg-[#3BB77E] h-1 rounded-full"
          style={{
            width: `${(parseInt(sold.split("/")[0]) /
              parseInt(sold.split("/")[1])) *
              100}%`,
          }}
        ></div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full bg-[#3BB77E] text-white py-2 rounded font-semibold flex items-center justify-center space-x-2 hover:bg-[#2a9f65] transition"
        onClick={() => navigate(`/mycart`)}
      >
        <img src="/landing/add2.png" className="w-4 h-4" alt="Add to cart" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};


const Stars = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ₹{
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.362 2.447a1 1 0 00-.363 1.118l1.287 3.946c.3.921-.755 1.688-1.54 1.118l-3.362-2.447a1 1 0 00-1.175 0l-3.362 2.447c-.784.57-1.84-.197-1.54-1.118l1.287-3.946a1 1 0 00-.363-1.118L2.723 8.373c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
      </svg>
    ))}
  </div>
);

export default DailyBestSells;
