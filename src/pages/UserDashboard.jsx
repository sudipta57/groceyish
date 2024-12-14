import React from "react";
import { HiHome } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
export default function UserDashboard() {
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />
          <p>Account /</p>
          <p className="text-[#3BB77E]"> Dashboard</p>
        </div>
      </div>
      <div className=" bg-gray-50 p-4 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="bg-white rounded-lg shadow-md p-6 h-auto">
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-4">
                <li className="text-green-600 font-semibold">
                  <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                </li>
                <li className="text-gray-600">
                  <i className="fas fa-history mr-2"></i> Order History
                </li>
                <li className="text-gray-600">
                  <i className="fas fa-heart mr-2"></i> Wishlist
                </li>
                <li className="text-gray-600">
                  <i className="fas fa-shopping-cart mr-2"></i> Shopping Cart
                </li>
                <li className="text-gray-600">
                  <i className="fas fa-cog mr-2"></i> Settings
                </li>
                <li className="text-gray-600">
                  <i className="fas fa-sign-out-alt mr-2"></i> Log-out
                </li>
              </ul>
            </div>

            {/* Profile and Address */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Section */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <img
                    src="/user/profile.png"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Ramzi Cherif</h3>
                    <p className="text-gray-500">Customer</p>
                    <a
                      href="#"
                      className="text-green-600 hover:underline text-sm mt-2 inline-block"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Billing Address
                  </h3>
                  <p>Dianne Russell</p>
                  <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                  <p>dianne.ressell@gmail.com</p>
                  <p>(671) 555-0110</p>
                  <a
                    href="#"
                    className="text-green-600 hover:underline text-sm mt-2 inline-block"
                  >
                    Edit Address
                  </a>
                </div>
              </div>

              {/* Recent Order History */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    Recent Order History
                  </h3>
                  <a
                    href="#"
                    className="text-green-600 hover:underline text-sm"
                  >
                    View All
                  </a>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left text-gray-600">
                      <th className="py-2 px-4 border-b">ORDER ID</th>
                      <th className="py-2 px-4 border-b">DATE</th>
                      <th className="py-2 px-4 border-b">TOTAL</th>
                      <th className="py-2 px-4 border-b">STATUS</th>
                      <th className="py-2 px-4 border-b"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "#738",
                        date: "8 Sep, 2020",
                        total: "$135.00 (5 Products)",
                        status: "Processing",
                      },
                      {
                        id: "#703",
                        date: "24 May, 2020",
                        total: "$25.00 (1 Product)",
                        status: "On the way",
                      },
                      {
                        id: "#130",
                        date: "22 Oct, 2020",
                        total: "$250.00 (4 Products)",
                        status: "Completed",
                      },
                      {
                        id: "#561",
                        date: "1 Feb, 2020",
                        total: "$35.00 (1 Product)",
                        status: "Completed",
                      },
                      {
                        id: "#536",
                        date: "21 Sep, 2020",
                        total: "$578.00 (13 Products)",
                        status: "Completed",
                      },
                    ].map((order, index) => (
                      <tr key={index} className="text-gray-800">
                        <td className="py-2 px-4 border-b">{order.id}</td>
                        <td className="py-2 px-4 border-b">{order.date}</td>
                        <td className="py-2 px-4 border-b">{order.total}</td>
                        <td className="py-2 px-4 border-b">
                          <span className="text-green-600">{order.status}</span>
                        </td>
                        <td className="py-2 px-4 border-b">
                          {" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:underline ml-4"
                          >
                            View Details
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
