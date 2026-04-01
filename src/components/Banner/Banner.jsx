import React from "react"
import BannerImage from "../../assets/banner.png";
import badgeImg from "../../assets/badge.png";
import { CiPlay1 } from "react-icons/ci";
import "../../index.css";
const Banner = () => {
  return (
    <div className="hero  py-16">
      <div className="hero-content flex-col lg:flex-row justify-between items-center space-y-5">
        <div className="banner-content text-center lg:text-left lg:max-w-[50%] space-y-4">
          <span className="badge bg-[#E1E7FF] text-primary p-4 rounded-full"><img src={badgeImg} alt="" />New: AI-Powered Tools Available</span>
          <h1 className="text-6xl font-bold text-[#101727] leading-[84px]">Supercharge Your <br /> Digital Workflow</h1>
          <p className="text-[18px] text-[#627382] text-justify">Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.

            Explore Products
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-white p-4 rounded-full">Explore Products</button>
            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block ml-2 p-[1px] rounded-full">
              <button className="btn  bg-white px-6 py-2 rounded-full font-medium">
                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-2">
                  <CiPlay1 size={22} className="text-[#4F39F6]"/>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img className="w-[500px] h-auto" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;