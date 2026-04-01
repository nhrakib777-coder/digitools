import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ cartCount, setTab }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-sm  w-full bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <a className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
          DigiTools
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium">
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <button
            onClick={() => setTab("cart")}
            className="relative"
          >
            <CiShoppingCart size={28} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <button className="btn bg-transparent shadow-none">
              Login
            </button>
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-4">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            <IoIosMenu size={28} />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>

            <button className="btn bg-transparent shadow-none">
              Login
            </button>

            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;