import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className="footer p-10 bg-[#101727] text-neutral-content">

      <div className="grid grid-cols-1  md:grid-cols-5 gap-16 max-w-[1200px] mx-auto items-start px-4">
        <div className="space-y-3 col-span-1">
          <h1 className="text-4xl font-extrabold
          ">DigiTools</h1>
          <p className="text-[12px] text-justify">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div className="space-y-3 col-span-1">
          <h3 className="text-lg font-bold">Product</h3>
          <ul className="space-y-2 text-[12px]">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div className="space-y-3 col-span-1">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="space-y-2 text-[12px]">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="space-y-3 col-span-1">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="space-y-2 text-[12px]">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-3 col-span-1">
          <h3 className="text-lg font-bold">Social Links</h3>
          <div className="flex space-x-4">
            <a href="#"><AiFillInstagram size={32}/></a> 
            <a href="#"><FaFacebookSquare size={32}/></a>
            <a href="#"><FaXTwitter size={32}/></a>
          </div>
        </div>
      </div>
      <hr className="border-sm border-[#627382] w-[1200px] mx-auto mt-5" />
      <div className="flex justify-between items-center  w-[1200px] mx-auto py-0 px-4">
        <div className="text-left"><span className="text-[12px] text-[#fafafa]">© 2026 Digitools. All rights reserved.</span></div>
        <div className="flex gap-8">
          <a href="#" className="text-[12px] text-[#fafafa] hover:text-blue-500">Privacy Policy</a>

          <a href="#" className="text-[12px] text-[#fafafa] hover:text-blue-500">Terms of Service</a>
          <a href="#" className=" text-[12px] text-[#fafafa] hover:text-blue-500">Cookie Policy</a>
        </div>
      </div>

    </footer>

  );
};

export default Footer;