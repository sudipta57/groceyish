import { FaChevronRight } from "react-icons/fa";
import NewsLetter from "../component/NewsLetter";
import TeamSliding from "../component/TeamSliding";
import Testimonial from "../component/Testimonial";

export default function About() {
  return (
    <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
      <br></br>
      <div className="mt-16 md:mt-36 text-[#ADADAD] bg-[url('/shop-filter/bg-banner.png')] bg-cover  min-h-[120px] items-center flex ps-10 md:ps-32 mb-6 ">
        <div className="flex items-center">
          <img src="/home-icon.png" alt="img" className="me-3" />
          <FaChevronRight />
          <p className="text-[#3BB77E] ml-2"> About Us</p>
        </div>
      </div>

      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-[48px] font-bold leading-[57px] text-[#1A1A1A] mb-4">
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
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
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
            <h2 className="text-3xl sm:text-[48px] font-bold leading-[57px] text-[#002603] mb-4">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
                  <h4 className="text-[16px] font-[600] text-[#1A1A1A]">
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
            <h2 className="text-3xl sm:text-[48px] font-bold leading-[57px] text-[#1A1A1A] mb-4">
              We Delivered, You <br /> Enjoy Your Order.
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
                <img
                  src="/about/check.png"
                  alt="checked"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-gray-700">
                  Sed in metus pellentesque.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/about/check.png"
                  alt="checked"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-gray-700">
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/about/check.png"
                  alt="checked"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-gray-700">
                  Maecenas ut nunc fringilla erat varius.
                </span>
              </li>
            </ul>

            {/* Call to Action */}
            <button className="bg-[#3BB77E] text-white px-6 py-3 rounded-full shadow transition">
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
      <NewsLetter />
      <br></br>
    </div>
  );
}
