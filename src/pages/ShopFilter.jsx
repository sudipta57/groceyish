import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Vegetables = [
  {
    id: 1,
    img: "/shop-filter/products/p-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/shop-filter/products/p-2.png",
    name: "Chanise Cabbage",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 3,
    img: "/shop-filter/products/p-3.png",
    name: "Corn",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 4,
    img: "/shop-filter/products/p-4.png",
    name: "Brinjal",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 5,
    img: "/shop-filter/products/p-5.png",
    name: "Fresh Cauliflower",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 6,
    img: "/shop-filter/products/p-6.png",
    name: "Onion",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 7,
    img: "/shop-filter/products/p-7.png",
    name: "Green Capsicum",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 8,
    img: "/shop-filter/products/p-8.png",
    name: "Green Chili",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 9,
    img: "/shop-filter/products/p-9.png",
    name: "Green Cucumber",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 10,
    img: "/shop-filter/products/p-10.png",
    name: "Green Lettuce",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 11,
    img: "/shop-filter/products/p-11.png",
    name: "Ladies Finger",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 12,
    img: "/shop-filter/products/p-12.png",
    name: "Red Capsicum",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 13,
    img: "/shop-filter/products/p-13.png",
    name: "Red Chili",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 14,
    img: "/shop-filter/products/p-14.png",
    name: "Red Tomato",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 15,
    img: "/shop-filter/products/p-15.png",
    name: "Red Cabbage",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 16,
    img: "/shop-filter/products/p-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  // Add the rest of the products
];
const FreshFruits = [
  {
    id: 1,
    img: "/shop-filter/fruits/fr-1.png",
    name: "Orange",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/shop-filter/fruits/fr-2.png",
    name: "Apple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 3,
    img: "/shop-filter/fruits/fr-3.png",
    name: "Banana",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 4,
    img: "/shop-filter/fruits/fr-4.png",
    name: "Kiwi",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 5,
    img: "/shop-filter/fruits/fr-5.png",
    name: "Mango",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 6,
    img: "/shop-filter/fruits/fr-6.png",
    name: "PineApple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 7,
    img: "/shop-filter/fruits/fr-7.png",
    name: "Grapes",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 8,
    img: "/shop-filter/fruits/fr-8.png",
    name: "Green Apple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 9,
    img: "/shop-filter/fruits/fr-9.png",
    name: "StrawBerry",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 10,
    img: "/shop-filter/fruits/fr-10.png",
    name: "Avocado",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 11,
    img: "/shop-filter/fruits/fr-11.png",
    name: "Pomegrante",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 12,
    img: "/shop-filter/fruits/fr-12.png",
    name: "Dragon Fruit",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 13,
    img: "/shop-filter/fruits/fr-13.png",
    name: "Pear",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 14,
    img: "/shop-filter/fruits/fr-14.png",
    name: "Papaya",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 15,
    img: "/shop-filter/fruits/fr-15.png",
    name: "Pine Apple",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 16,
    img: "/shop-filter/fruits/fr-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  // Add the rest of the products
];
export default function ShopFilter() {
  const navigate = useNavigate();
  const [isCategoryExpanded, setisCategoryExpanded] = useState(true);
  const [isPriceExpanded, setPriceExpanded] = useState(true);
  const [isRatingExpanded, setisRatingExpanded] = useState(true);
  const [isPopularExpanded, setisPopularExpanded] = useState(true);
  const [saleProductSelected, setsaleProductSelected] = useState(null);
  // State to track the selected category and corresponding products
  const [category, setCategory] = useState("Vegetables"); // Default is "Vegetables"
  const [products, setProducts] = useState(Vegetables); // Default products

  // Handler for radio button change
  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory); // Update selected category

    // Update products based on the selected category
    if (selectedCategory === "Vegetables") {
      setProducts(Vegetables);
    } else if (selectedCategory === "Fresh Fruit") {
      setProducts(FreshFruits);
    }
  };

  return (
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover mt-36 min-h-[120px] items-center flex ps-32">
        <div className="flex items-center">
          <HiHome />
          <p>/ Categories / </p>
          <p className="text-[#3BB77E]"> Vegetables</p>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen flex mt-4">
        {/* Left Section */}
        <div className="w-1/4 bg-white  px-6 py-8">
          {/* Filter Button */}
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md">
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-.293.707l-1.414 1.414a1 1 0 01-1.414 0L10 19.586a1 1 0 01-.293-.707V13a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
          </div>

          {/* Categories Section */}
          <div className="mb-8">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setisCategoryExpanded(!isCategoryExpanded)}
            >
              <h4 className="text-lg font-bold mb-4">All Categories</h4>
              {isCategoryExpanded ? (
                <div>
                  <FaChevronUp className="text-gray-600" />
                </div>
              ) : (
                <div>
                  <FaChevronDown className="text-gray-600" />
                </div>
              )}
            </div>
            {isCategoryExpanded && (
              <ul className="space-y-2">
                {[
                  { name: "Fresh Fruit", count: 25 },
                  { name: "Vegetables", count: 150 },
                  { name: "Cooking", count: 54 },
                  { name: "Snacks", count: 47 },
                  { name: "Beverages", count: 43 },
                  { name: "Beauty & Health", count: 38 },
                  { name: "Bread & Bakery", count: 15 },
                ].map((prod, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-600"
                  >
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        className="form-radio text-green-500"
                        value={prod.name}
                        checked={prod.name === category} // Make the radio selected
                        onChange={handleCategory} // Trigger handler on change
                      />
                      {prod.name}
                    </label>
                    <span className="text-gray-400">({prod.count})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price Range Section */}
          <div className="mb-8">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPriceExpanded(!isPriceExpanded)}
            >
              <h4 className="text-lg font-bold mb-4">Price</h4>

              {isPriceExpanded ? (
                <div>
                  <FaChevronUp className="text-gray-600" />
                </div>
              ) : (
                <div>
                  <FaChevronDown className="text-gray-600" />
                </div>
              )}
            </div>
            {isPriceExpanded && (
              <>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    className="w-full accent-green-500"
                  />
                </div>
                <p className="text-gray-600 mt-2">Price: ₹50 — ₹1,500</p>
              </>
            )}
          </div>

          {/* Rating Section */}
          <div className="mb-8">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setisRatingExpanded(!isRatingExpanded)}
            >
              <h4 className="text-lg font-bold mb-4">Rating</h4>

              {isRatingExpanded ? (
                <div>
                  <FaChevronUp className="text-gray-600" />
                </div>
              ) : (
                <div>
                  <FaChevronDown className="text-gray-600" />
                </div>
              )}
            </div>
            {isRatingExpanded &&
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          starIndex <= index
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.368 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.648 8.385c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                      </svg>
                    ))}
                  </span>
                </div>
              ))}
          </div>

          {/* Popular Tag Section */}
          <div className="mb-8">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setisPopularExpanded(!isPopularExpanded)}
            >
              <h4 className="text-lg font-bold mb-4">Popular Tag</h4>
              {isPopularExpanded ? (
                <div>
                  <FaChevronUp className="text-gray-600" />
                </div>
              ) : (
                <div>
                  <FaChevronDown className="text-gray-600" />
                </div>
              )}
            </div>
            {isPopularExpanded && (
              <div className="flex flex-wrap gap-2">
                {[
                  "Healthy",
                  "Low Fat",
                  "Vegetarian",
                  "Kid Foods",
                  "Vitamins",
                  "Bread",
                  "Meat",
                  "Snacks",
                  "Lunch",
                  "Dinner",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Discount Section */}
          <div className="relative text-center">
            {/* Background Image */}
            <img
              src="/shop-filter/discount.png" // Replace with the actual image URL
              alt="Discount Banner"
              className="w-full object-cover rounded-t-lg"
            />
            {/* Overlay Content */}
            <div className="absolute top-10 left-0 right-0 ">
              <h4 className="text-2xl font-bold text-green-600">
                79% Discount
              </h4>
              <p className="text-gray-600 mt-2">on your first order</p>
              <div className="mt-4 text-green-500 font-semibold flex items-center justify-center gap-1 cursor-pointer">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sale Products Section */}
          <div className="mt-5">
            <h4 className="text-lg font-bold mb-4">Sale Products</h4>
            {[
              {
                name: "Red Capsicum",
                price: "₹1,697",
                oldPrice: "₹2,715",
                image: "/shop-filter/sale1.png", // Replace with the actual image URL
                rating: 4,
              },
              {
                name: "Chanise Cabbage",
                price: "₹1,781",
                oldPrice: "₹2,036",
                image: "/shop-filter/sale2.png", // Replace with the actual image URL
                rating: 4,
              },
              {
                name: "Green Capsicum",
                price: "₹1,697",
                oldPrice: "₹2,799",
                image: "/shop-filter/sale3.png", // Replace with the actual image URL
                rating: 3,
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 bg-white border-2 rounded-lg mb-4 hover:border-[#3BB77E] ${
                  saleProductSelected &&
                  product.name == saleProductSelected.name
                    ? "border-[#3BB77E]"
                    : ""
                }`}
                onClick={() => {
                  setsaleProductSelected(product);
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-grow">
                  <h5 className="font-semibold text-gray-700">
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-500">
                    <span className="text-green-600 font-bold">
                      {product.price}
                    </span>{" "}
                    <s className="text-gray-400">{product.oldPrice}</s>
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          starIndex < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .587l3.668 7.425 8.174 1.196-5.914 5.757 1.396 8.134L12 18.563 4.676 23l1.396-8.134-5.914-5.757 8.174-1.196z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-grow bg-gray-50 p-6">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-gray-600 font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md p-2 text-sm text-gray-700"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            <div className="text-gray-600 font-medium">52 Results Found</div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-md p-4 bg-white relative group"
              >
                {product.outOfStock && (
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Out of Stock
                  </div>
                )}
                {product.sale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale 50%
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className=" object-cover mb-4 cursor-pointer"
                  onClick={() => {
                    navigate("/product_quick");
                  }}
                />
                <h3 className="text-gray-700 font-medium text-lg truncate">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-500 font-semibold">
                    ₹{product.price}
                  </span>
                  <button
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200"
                    onClick={() => {
                      navigate("/mycart");
                    }}
                  >
                    Add
                  </button>
                </div>
                <div className="text-yellow-400 text-sm mt-2">
                  {"\u2605".repeat(Math.round(product.rating))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white my-4 py-4 mt-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
