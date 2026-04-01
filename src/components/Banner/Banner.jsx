import React from "react";
import BannerImage from "../../assets/banner.png";
import badgeImg from "../../assets/badge.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="hero py-12 lg:py-16 px-4 ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">

        {/* TEXT SECTION */}
        <div className="text-center lg:text-left lg:max-w-[50%] space-y-5">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#E1E7FF] text-primary px-4 py-2 rounded-full text-sm">
            <img src={badgeImg} className="w-5" alt="" />
            New: AI-Powered Tools Available
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#101727] leading-tight">
            Supercharge Your <br className="hidden lg:block" />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] text-[#627382] max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6">
              Explore Products
            </button>

            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block p-[1px] rounded-full">
              <button className="btn bg-white rounded-full w-full md:px-7  lg:px-6">
                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-2">
                  <CiPlay1 size={20} className="text-[#4F39F6]" />
                  Watch Demo
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <img
            className="w-[280px] md:w-[380px] lg:w-[500px]"
            src={BannerImage}
            alt="banner"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;