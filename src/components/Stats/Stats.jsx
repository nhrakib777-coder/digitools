import React from "react";
import "../../index.css";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center text-white divide-y md:divide-y-0 md:divide-x">

          {/* Stat 1 */}
          <div className="stat text-center py-6 md:px-10">
            <div className="text-3xl md:text-4xl font-bold">50K+</div>
            <div className="text-sm opacity-80">Active Users</div>
          </div>

          {/* Stat 2 */}
          <div className="stat text-center py-6 md:px-10">
            <div className="text-3xl md:text-4xl font-bold">200+</div>
            <div className="text-sm opacity-80">Premium Tools</div>
          </div>

          {/* Stat 3 */}
          <div className="stat text-center py-6 md:px-10">
            <div className="text-3xl md:text-4xl font-bold">4.9</div>
            <div className="text-sm opacity-80">Rating</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;