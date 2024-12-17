import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 mt-4">
      {/* Bottom Section */}
      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-10">
        {/* Company Info */}
        <div className="p-4">
          <img
            src="/landing/company-logo.png"
            alt="Groceyish Logo"
            className="mb-4 mx-auto md:mx-0"
          />
          {/* Update with the correct path to the logo */}

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/landing/mid-footer-icon-1.png" alt="" />

              <p>
                Address :{" "}
                <span className="font-bold">1762 School House Road</span>
              </p>
            </div>
            {/* Call Us Section */}

            <div className="flex items-center space-x-2">
              <img
                src="/landing/mid-footer-icon-2.png"
                alt="Phone Icon"
                className="w-6 h-6"
              />
              <p>
                Call Us: <span className="font-bold">1233-777</span>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-2">
              <img
                src="/landing/mid-footer-icon-3.png"
                alt="Email Icon"
                className="w-6 h-6"
              />
              <p>
                Email: <span className="font-bold">groceyish@contact.com</span>
              </p>
            </div>

            {/* Work Hours Section */}
            <div className="flex items-center space-x-2">
              <img
                src="/landing/mid-footer-icon-4.png"
                alt="Clock Icon"
                className="w-6 h-6"
              />
              <p>
                Work hours:{" "}
                <span className="font-bold">
                  8:00 - 20:00, Sunday - Thursday
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Account Links */}
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">Account</h4>
          <ul className="space-y-2">
            <li>Wishlist</li> <li>Cart</li> <li>Track Order</li>
            <li>Shipping Details</li>
          </ul>
        </div>
        {/* Useful Links */}
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-2">
            <li>About Us</li> <li>Contact</li> <li>Hot deals</li>
            <li>Promotions</li> <li>New products</li>
          </ul>
        </div>
        {/* Help Center */}
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">Help Center</h4>
          <ul className="space-y-2">
            <li>Payments</li> <li>Refund</li> <li>Checkout</li>
            <li>Shipping</li> <li>Q&A</li> <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      {/* Footer Information */}
      <div className="py-4">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center text-center md:text-left">
          Design by Secwebxperts. All Rights Reserved
          <img src="/landing/footer-img.png" alt="" />
          <div className="flex space-x-4">
            <img src="/landing/footer-icon1.png" alt="" />
            <img src="/landing/footer-icon2.png" alt="" />
            <img src="/landing/footer-icon3.png" alt="" />
            <img src="/landing/footer-icon4.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
