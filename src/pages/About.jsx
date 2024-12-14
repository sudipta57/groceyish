import { HiHome } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import TeamSliding from "../component/TeamSliding";
import Testimonial from "../component/Testimonial";

export default function About() {
   
  return (
    <div className="bg-[#C5EAD9C7]">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <HiHome />

          <p className="text-[#3BB77E]">/ About Us</p>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus ut accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/about/about1.png" // Replace with your image URL
              alt="Farmer holding vegetables"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* organic store */}
      <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <img
              src="/about/about2.png" // Replace with your image URL
              alt="Farmer holding organic vegetables"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon1.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    100% Organic Food
                  </h4>
                  <p className="text-gray-600 text-sm">
                    100% healthy & fresh food.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon2.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Customer Feedback
                  </h4>
                  <p className="text-gray-600 text-sm">Our happy customer</p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon3.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Free Shipping
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Free shipping with discount.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon4.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Great Support 24/7
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Instant access to contact.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon5.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    100% Secure Payment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We ensure your money is safe.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <div className="">
                  <img src="/about/Icon6.png" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    100% Organic Food
                  </h4>
                  <p className="text-gray-600 text-sm">
                    100% healthy & fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Delivery Section */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              We Delivered, <br />
              You Enjoy Your Order.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>

            {/* List of Features */}
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Sed in metus pellentesque.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Maecenas ut nunc fringilla erat varius.
                </span>
              </li>
            </ul>

            {/* Call to Action */}
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Shop Now →
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/about/delivery.png" // Replace with your image URL
              alt="Delivery person with order"
              className="max-w-full rounded-lg "
            />
          </div>
        </div>
      </section>

      {/* Team Section */}

      <TeamSliding />


<Testimonial />
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
