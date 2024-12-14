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
    image: "https://via.placeholder.com/100", // Replace with the real image URL
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 140,
    originalPrice: 160,
    stock: "In Stock",
    image: "https://via.placeholder.com/100", // Replace with the real image URL
  },
  {
    id: 3,
    name: "Fresh Sujapuri Mango",
    price: 140,
    originalPrice: 160,
    stock: "Out of Stock",
    image: "https://via.placeholder.com/100", // Replace with the real image URL
  },
];

export default function MyCart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      image: "/shop-filter/products/p-7.png",
      originalPrice: 160,
      price: 140,
      quantity: 1,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      image: "/shop-filter/products/p-2.png",
      originalPrice: 160,
      price: 140,
      quantity: 1,
    },
  ]);
  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

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
      <div className="text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover min-h-[120px] items-center flex ps-10 md:ps-32 mb-6">
        <div className="flex items-center">
          <HiHome />
          <p className="text-[#3BB77E] ml-2">/ My Cart</p>
        </div>
      </div>
      <div className="mx-auto p-8 bg-white">
        <h1 className="text-center text-2xl font-bold mb-6">My Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Product List */}
          <div className="lg:col-span-2">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">PRODUCT</th>
                  <th className="text-left p-4">PRICE</th>
                  <th className="text-left p-4">QUANTITY</th>
                  <th className="text-left p-4">SUBTOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <CartRow
                    key={product.id}
                    product={product}
                    onRemove={handleRemove}
                  />
                ))}
                {/* Buttons Row */}
                <tr>
                  <td colSpan="5" className="p-4">
                    <div className="flex justify-between">
                      <button
                        className="bg-gray-200 px-4 py-2 rounded-3xl"
                        onClick={() => {
                          navigate("/shop-filter");
                        }}
                      >
                        Return to shop
                      </button>
                      <button className="bg-gray-200 px-4 py-2 rounded-3xl">
                        Update Cart
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <label className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="border p-2 rounded-3xl flex-grow"
                />
                <button className="bg-black text-white px-6 py-2 rounded-3xl">
                  Apply Coupon
                </button>
              </label>
            </div>
          </div>

          {/* Right Section: Cart Total */}
          <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Subtotal:</span>
              <span>₹840.00</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹840.00</span>
            </div>
            <button
              className="bg-green-500 text-white w-full py-2 mt-4 rounded-3xl"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Proceed to checkout
            </button>
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

const CartRow = ({ product, onRemove }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  // Function to increase quantity
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Function to decrease quantity (with a minimum value of 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <tr className="border-b">
      <td className="p-4 flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />
        <span>{product.name}</span>
      </td>
      <td className="p-4">
        <span className="line-through text-gray-400">{`₹${product.originalPrice}`}</span>{" "}
        {`₹${product.price}`}
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <button
            className="border px-2 py-1"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button className="border px-2 py-1" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </td>
      <td className="p-4">{`₹${quantity * product.price}`}</td>
      <td className="p-4 text-right">
        <button className="text-red-500" onClick={() => onRemove(product.id)}>
          ×
        </button>
      </td>
    </tr>
  );
};
