import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-neutral-content pt-12">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">

        {/* Logo */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold">DigiTools</h1>
          <p className="text-sm text-gray-300">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Social Links</h3>
          <div className="flex gap-4">
            <a href="#"><AiFillInstagram size={28} /></a>
            <a href="#"><FaFacebookSquare size={28} /></a>
            <a href="#"><FaXTwitter size={28} /></a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8 max-w-6xl mx-auto" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 pb-6 text-sm text-gray-300">

        <span>© 2026 DigiTools. All rights reserved.</span>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;