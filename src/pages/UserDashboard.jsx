import React from "react";
import { HiHome } from "react-icons/hi";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import {
  FaTachometerAlt,
  FaHistory,
  FaHeart,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import NewsLetter from "../component/NewsLetter";
export default function UserDashboard() {
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="mx-3">Account </p>
          <FaChevronRight />

          <p className="text-[#3BB77E] ml-2"> My Cart</p>
        </div>
      </div>
      <div className="p-4 mt-5 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="bg-white border py-6 self-start">
              <h3 className="text-lg font-semibold mb-6 ps-4">Navigation</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 py-3 px-4 border-l-2 border-[#3BB77E] bg-green-100 font-semibold text-[black]">
                  <FaTachometerAlt size={18} />
                  <span>Dashboard</span>
                </li>
                <li className="flex items-center space-x-3 py-3 px-4 border-b hover:bg-gray-100 hover:text-gray-800 transition text-[#666666]">
                  <FaHistory size={18} color={"#CCCCCC"} />
                  <span>Order History</span>
                </li>
                <li className="flex items-center space-x-3 py-3 px-4 border-b hover:bg-gray-100 hover:text-gray-800 transition text-[#666666]">
                  <FaHeart size={18} color={"#CCCCCC"} />
                  <span>Wishlist</span>
                </li>
                <li className="flex items-center space-x-3 py-3 px-4 border-b hover:bg-gray-100 hover:text-gray-800 transition text-[#666666]">
                  <FaShoppingCart size={18} color={"#CCCCCC"} />
                  <span>Shopping Cart</span>
                </li>
                <li className="flex items-center space-x-3 py-3 px-4 border-b hover:bg-gray-100 hover:text-gray-800 transition text-[#666666]">
                  <FaCog size={18} color={"#CCCCCC"} />
                  <span>Settings</span>
                </li>
                <li className="flex items-center space-x-3 pt-3 px-4 hover:bg-gray-100 hover:text-gray-800 transition text-[#666666]">
                  <FaSignOutAlt size={18} color={"#CCCCCC"} />
                  <span>Log-out</span>
                </li>
              </ul>
            </div>

            {/* Profile and Address */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Section */}
                <div className="bg-white rounded-lg border p-6 flex flex-col items-center text-center">
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
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-[14px] font-semibold mb-4 text-[#999999]">
                    Billing Address
                  </h3>
                  <p className="text-[#1A1A1A] text-[18px] font-[600] mb-2">
                    Dianne Russell
                  </p>
                  <p className="text-[#666666]">4140 Parker Rd. Allentown,</p>
                  <p className="text-[#666666] mb-2"> New Mexico 31134</p>
                  <p className="text-[#1A1A1A] text-[16px] font-[500]">
                    dianne.ressell@gmail.com
                  </p>
                  <p className="text-[#1A1A1A] text-[16px] font-[600]">
                    (671) 555-0110
                  </p>
                  <a
                    href="#"
                    className="text-[#3BB77E] hover:underline text-sm mt-2 inline-block"
                  >
                    Edit Address
                  </a>
                </div>
              </div>

              {/* Recent Order History */}
              <div className="bg-white rounded-lg border mt-6">
                <div className="flex justify-between items-center mb-4 px-6 pt-3">
                  <h3 className="text-lg font-semibold">
                    Recent Order History
                  </h3>
                  <a
                    href="#"
                    className="text-[#3BB77E] hover:underline text-sm font-[600]"
                  >
                    View All
                  </a>
                </div>
                {/* Scrollable Wrapper for Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-[#F2F2F2]">
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
                        <tr key={index} className="text-gray-800 font-[500]">
                          <td className="py-2 px-4 border-b">{order.id}</td>
                          <td className="py-2 px-4 border-b">{order.date}</td>
                          <td className="py-2 px-4 border-b">{order.total}</td>
                          <td className="py-2 px-4 border-b">
                            <span>{order.status}</span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <a
                              href="#"
                              className="text-[#3BB77E] hover:underline ml-4"
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
      </div>
      <NewsLetter />
      <br></br>
    </div>
  );
}
