import React, { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { HiHome } from "react-icons/hi";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";
import NewsLetter from "../component/NewsLetter";
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

  return (
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div className="bg-[#C5EAD9C7] md:mt-36 mt-16">
      <br></br>
      <div className="text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover min-h-[120px] items-center flex ps-10 md:ps-32 mb-6">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="text-[#3BB77E] ml-2"> My Cart</p>
        </div>
      </div>
      <div className="mx-auto p-8 bg-white">
        <h1 className="text-center text-2xl font-bold mb-6">My Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left Section: Product List */}
          <div className="lg:col-span-2">
            <div className="overflow-x-auto border-collapse border rounded-md">
              <table className="w-full border-gray-200">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 text-[#808080] text-[14px] font-[600]">
                      PRODUCT
                    </th>
                    <th className="text-left p-4 text-[#808080] text-[14px] font-[600]">
                      PRICE
                    </th>
                    <th className="text-left p-4 text-[#808080] text-[14px] font-[600]">
                      QUANTITY
                    </th>
                    <th className="text-left p-4 text-[#808080] text-[14px] font-[600]">
                      SUBTOTAL
                    </th>
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
                          className="bg-[#F2F2F2] px-4 py-2 rounded-3xl text-[#4D4D4D] text-[14px] font-[700]"
                          onClick={() => {
                            navigate("/shop-filter");
                          }}
                        >
                          Return to shop
                        </button>
                        <button className="bg-[#F2F2F2] px-4 py-2 rounded-3xl text-[#4D4D4D] text-[14px] font-[700]">
                          Update Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 border rounded-md px-2 py-4">
              <label className="flex justify-between items-center gap-4">
                <h2 className="text-[20px] font-[600] text-[#1A1A1A]">
                  Coupon Code
                </h2>
                <div className="flex flex-grow border rounded-full overflow-hidden">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="p-2 flex-grow outline-none"
                  />
                  <button className="bg-black rounded-full text-white px-6 py-2">
                    Apply Coupon
                  </button>
                </div>
              </label>
            </div>
          </div>

          {/* Right Section: Cart Total */}
          <div className="p-4 border border-collapse rounded-md self-start">
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
              className="bg-[#3BB77E] font-bold text-white w-full py-2 mt-4 rounded-3xl"
              onClick={() => {
                navigate("/my-checkout");
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
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
        <div className="flex items-center justify-between gap-2 border rounded-full w-[60%] px-2 py-1">
          <button
            className="border rounded-full px-2  bg-[#F2F2F2]"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="border rounded-full px-2 bg-[#F2F2F2]"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4 font-bold">{`₹${quantity * product.price}`}</td>
      <td className=" text-center">
        <button className="text-gray-400 hover:text-red-600 border rounded-full px-2">
          &times;
        </button>
      </td>
    </tr>
  );
};
