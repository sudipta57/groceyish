import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { HiHome } from "react-icons/hi";
import Loading from "../component/Loading";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
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
      <div className=" text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />
          <p> Shopping Cart </p>
          <p className="text-[#3BB77E] ml-2">/ Checkout</p>
        </div>
      </div>
      <div className="bg-white my-6 ">
        <div className="flex flex-col lg:flex-row gap-8 p-4 ">
          {/* Billing Information */}
          <div className="flex-1 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium mb-1"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Your first name"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium mb-1"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Your last name"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="lg:col-span-2">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium mb-1"
                >
                  Company Name (optional)
                </label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Company name (optional)"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="lg:col-span-2">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium mb-1"
                >
                  Street Address
                </label>
                <input
                  id="street-address"
                  type="text"
                  placeholder="Street Address"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-1"
                >
                  Country / Region
                </label>
                <select id="country" className="border p-2 rounded-md w-full">
                  <option>Country / Region</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium mb-1"
                >
                  States
                </label>
                <select id="state" className="border p-2 rounded-md w-full">
                  <option>States</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="lg:col-span-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="different-address" />
                  <span>Ship to a different address</span>
                </label>
              </div>
            </form>

            <h3 className="text-lg font-semibold mt-6">Additional Info</h3>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="border p-2 rounded-md w-full mt-2"
              rows="3"
            ></textarea>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {/* Order Items */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/shop-filter/products/p-2.png"
                    alt="Chinese Cabbage"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p>Chinese Cabbage x5</p>
                    <p className="text-sm text-gray-500">₹140.00</p>
                  </div>
                </div>
                <p className="font-semibold">₹140.00</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/shop-filter/products/p-1.png"
                    alt="Green Apple"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p>Green Apple x1</p>
                    <p className="text-sm text-gray-500">₹1,187.00</p>
                  </div>
                </div>
                <p className="font-semibold">₹1,187.00</p>
              </div>

              {/* Subtotal, Shipping, Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p className="text-gray-500">Subtotal:</p>
                  <p className="font-semibold">₹1,327.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Shipping:</p>
                  <p className="font-semibold">Free</p>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-2">
                  <p>Total:</p>
                  <p>₹1,327.00</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <h3 className="text-lg font-semibold mt-6">Payment Method</h3>
            <form className="space-y-2 mt-2">
              {["Cash on Delivery", "Paypal", "Amazon Pay"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={handlePaymentChange}
                    className="form-radio text-green-500"
                  />
                  {method}
                </label>
              ))}
            </form>

            <button className="w-full bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white  py-4 px-14 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
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
