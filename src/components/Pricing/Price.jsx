import React from "react"
import { useState } from "react";
import pricingData from "../../data/product-pricing.json";

const Pricing = () => {
  // Default active is the middle card
  const [activePlan, setActivePlan] = useState(pricingData[1]?.id || null);

  return (
    <div className="max-w-[1200px] grid md:grid-cols-3 gap-4 my-20 mx-auto ">
      {pricingData.map((plan, index) => {
        const isActive = activePlan === plan.id;
        const isMiddle = index === 1; // middle card

        return (
       
           <div
            key={plan.id}
            onClick={() => setActivePlan(plan.id)}
            className={`relative min-w-[320px] mx-auto card shadow space-y-4 cursor-pointer transition-all duration-300 
              ${isActive ? "bg-purple-500 text-white" : "bg-base-200 text-gray-700 "}`}
          >
            {/* Badge on top middle */}
            {isMiddle && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#FEF3C6] text-[#BB4D00] font-bold rounded-full text-sm shadow-lg">
                Popular
              </div>
            )}

            <div className="card-body">
              <h2 className="card-title">{plan.name}</h2>

              <p className="text-xl font-bold">
                ${plan.price}/
                <span className={`text-sm ${isActive ? "text-white/70" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </p>

              <p className={`${isActive ? "text-white/90" : "text-gray-500"}`}>
                {plan.description}
              </p>

              <ul className="space-y-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={`mr-2 ${isActive ? "text-white" : "text-green-500"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn rounded-full mt-4 
                  ${isActive ? "bg-white text-black" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
              >
                {plan.button}
              </button>
            </div>
          </div>
         
        );
      })}
    </div>
  );
};

export default Pricing;