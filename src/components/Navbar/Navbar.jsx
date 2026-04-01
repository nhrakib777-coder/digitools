import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ cartCount }) => {
  return (
   <div className="shadow-sm">
     <div className="navbar bg-base-100 flex justify-between items-center  max-w-7xl mx-auto">
  <div className=" ">
    
    <a className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
  </div>
  <div className="navbar-center ">
    <button className="lg:hidden"><IoIosMenu size={22}/></button>
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
        <span className="indicator-item badge bg-transparent text-gray-700 border-gray-700 cursor-pointer">
          {cartCount}
        </span>
        <CiShoppingCart size={22}/>
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