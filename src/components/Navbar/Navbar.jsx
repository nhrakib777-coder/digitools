import React from "react"
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ cartCount, setTab }) => {
  return (
   <div className="shadow-sm fixed w-full bg-white z-50">
     <div className="navbar bg-base-100 flex justify-between items-center  max-w-[1200px] mx-auto">
  <div className=" ">
    
    <a className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
  </div>
  <div className="navbar-center ">
    <button className="hidden"><IoIosMenu size={22}/></button>
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Testimonials</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
    </ul>
  </div>
  <div className="flex justify-between gap-2 items-center">
    <div className="indicator">
       <button
        onClick={() => setTab("cart")}
        className="relative ml-auto"
      >
        <CiShoppingCart size={30} />

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
      </div>
  <div className="navbar-end flex gap-2">
    <a className="btn bg-transparent shadow-none">Login</a>
    <a className="btn bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-white">Get Started</a>
  </div>
  </div>
</div>
   </div>
  );
};

export default Navbar;