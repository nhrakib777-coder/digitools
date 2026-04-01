import React from "react"
import "../../index.css";
const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full py-3">
      <div className="flex justify-center items-center text-white  lg:w-[70%] mx-auto">
        <div className="stats text-center divide-x ">

          <div className="stat min-w-[150px] lg:min-w-[300px] mx-auto">
            <div className="stat-value">50K+</div>
            <div className="stat-title">Active Users</div>
          </div>
            
          <div className="stat min-w-[150px] lg:min-w-[300px] mx-auto">
            <div className="stat-value">200+</div>
            <div className="stat-title">Premium Tools</div>
            
          </div>

          <div className="stat min-w-[150px] lg:min-w-[300px] mx-auto">
            <div className="stat-value">4.9</div>
            <div className="stat-title">Rating</div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;