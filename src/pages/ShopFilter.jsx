import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NewsLetter from "../component/NewsLetter";
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
    rating: 3,
  },
  {
    id: 3,
    img: "/shop-filter/products/p-3.png",
    name: "Corn",
    price: 180.99,
    image: "path-to-image",
    rating: 2,
    outOfStock: true,
  },
  {
    id: 4,
    img: "/shop-filter/products/p-4.png",
    name: "Brinjal",
    price: 140.99,
    image: "path-to-image",
    rating: 3,
  },
  {
    id: 5,
    img: "/shop-filter/products/p-5.png",
    name: "Fresh Cauliflower",
    price: 140.99,
    image: "path-to-image",
    rating: 2,
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
    rating: 5,
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

const ratings = [
  { stars: 5, label: "5.0" },
  { stars: 4, label: "4.0 & up" },
  { stars: 3, label: "3.0 & up" },
  { stars: 2, label: "2.0 & up" },
  { stars: 1, label: "1.0 & up" },
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
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(1500);

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };
  const [activeTags, setActiveTags] = useState([]);

  const tags = [
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
  ];

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover mt-36 min-h-[120px] items-center flex ps-32">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="mx-3">Account </p>
          <FaChevronRight />

          <p className="text-[#3BB77E] ml-2">Vegetables</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1500px] mx-auto min-h-screen mt-4 grid md:grid-cols-4">
          {/* Left Section */}
          <div className="md:col-span-1 bg-white  px-6 py-8">
            {/* Filter Button */}
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded-full shadow-md">
                <span>Filter</span>
                <img src="/shop-filter/Filter.png" alt="filter" />
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
                    <FaChevronUp className="text-[#1A1A1A]" />
                  </div>
                ) : (
                  <div>
                    <FaChevronDown className="text-[#1A1A1A]" />
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
                      className="flex space-x-2 items-center text-[#1A1A1A]"
                    >
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={prod.name}
                          checked={prod.name === category}
                          onChange={handleCategory}
                          className="hidden" // Hide the input
                        />
                        <span
                          className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                            prod.name === category
                              ? "border-[#3BB77E] after:w-3 after:h-3 after:bg-[#3BB77E] after:rounded-full"
                              : "border-gray-300"
                          }`}
                        ></span>
                        {prod.name}
                      </label>

                      <span className="text-gray-400">({prod.count})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price Range Section */}
            <div className="mb-8 border-t pt-5">
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
                  <div className="relative flex items-center gap-2 mt-4">
                    {/* Minimum Price Slider */}
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      className="w-full accent-green-500"
                    />
                    {/* Maximum Price Slider */}
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      className="w-full accent-green-500"
                    />
                  </div>

                  {/* Price Display */}
                  <p className="text-gray-600 mt-2">
                    Price: ₹{minPrice} — ₹{maxPrice}
                  </p>
                </>
              )}
            </div>
            {/* Rating Section */}
            <div className="mb-8 border-t pt-5">
              {/* Header */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setisRatingExpanded(!isRatingExpanded)}
              >
                <h4 className="text-lg font-bold mb-4">Rating</h4>
                {isRatingExpanded ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </div>

              {/* Rating Options */}
              {isRatingExpanded &&
                ratings.map((rating, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox accent-green-500 text-white border-gray-300 rounded"
                    />
                    <span className="flex items-center gap-1">
                      {/* Stars */}
                      {Array.from({ length: 5 }).map((_, starIndex) =>
                        starIndex > rating.stars ? (
                          <img src="/shop-filter/gray-star.png" alt="img" />
                        ) : (
                          <img src="/shop-filter/yellow-star.png" alt="img" />
                        )
                      )}
                      {/* Label */}
                      <span className="ml-2 text-sm text-gray-600">
                        {rating.label}
                      </span>
                    </span>
                  </div>
                ))}
            </div>
            {/* Popular Tag Section */}
            <div className="mb-8 border-t pt-5">
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
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
                        activeTags.includes(tag)
                          ? "bg-[#3BB77E] text-white"
                          : "bg-[#F2F2F2] text-[#1A1A1A]"
                      }`}
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
                  Shop Now &gt;
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
                  className={`flex items-center gap-4 p-4 bg-white border-2 rounded-lg mb-4 hover:shadow-lg hover:border-[#3BB77E] transition duration-500 ${
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
                        <img src="/shop-filter/start.png" alt="rating" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="md:col-span-3 flex-grow p-6">
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
              <div className="text-gray-600 font-[400]">
                <strong className="text-black">52</strong> Results Found
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-md p-4 bg-white relative group hover:shadow-lg hover:border-[#3BB77E] transition duration-500"
                >
                  {/* Badges */}
                  {product.outOfStock && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
                      Out of Stock
                    </div>
                  )}
                  {product.sale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                      Sale 50%
                    </div>
                  )}

                  {/* Hover Icons */}
                  <div className="absolute right-3 top-3 space-y-1 hidden group-hover:flex flex-col items-center z-10">
                    <img
                      src="/shop-filter/wishlist-icon.png"
                      alt="wishlist icon"
                      className="cursor-pointer"
                    />
                    <img
                      src="/shop-filter/view-icon.png"
                      alt="view icon"
                      className="cursor-pointer"
                    />
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover mb-4 cursor-pointer w-full h-48 rounded-md"
                    onClick={() => navigate("/product_quick")}
                  />

                  {/* Bottom Content */}
                  <div className="mt-2">
                    <h3 className="text-[#4D4D4D] font-[500] text-[12px] truncate group-hover:text-[#2C742F]">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <div>
                        <span className="text-black font-[600] text-[12px]">
                          ₹{product.price}
                        </span>
                        <div className="text-yellow-400 text-sm flex">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <img
                              key={starIndex}
                              src={
                                starIndex < product.rating
                                  ? "/shop-filter/yellow-star2.png"
                                  : "/shop-filter/gray-star2.png"
                              }
                              alt="rating"
                            />
                          ))}
                        </div>
                      </div>
                      <button
                        className="bg-green-100 group-hover:bg-[#3BB77E] group-hover:text-white text-green-700 px-4 py-2 rounded-md hover:bg-green-200 transition duration-500"
                        onClick={() => navigate("/mycart")}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <br></br>
    </div>
  );
}
