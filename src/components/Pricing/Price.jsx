import React, { useState } from "react";
import pricingData from "../../data/product-pricing.json";

const Pricing = () => {

  const [activePlan, setActivePlan] = useState(pricingData[1]?.id || null);

  return (
    <section className="px-4 py-16">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {pricingData.map((plan, index) => {

          const isActive = activePlan === plan.id;
          const isMiddle = index === 1;

          return (
            <div
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`relative card shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1
              
              ${isActive
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-base-200 text-gray-700"
              }`}
            >

              {/* Badge */}
              {isMiddle && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FEF3C6] text-[#BB4D00] font-semibold rounded-full text-xs md:text-sm shadow">
                  Popular
                </div>
              )}

              <div className="card-body space-y-3">

                {/* Title */}
                <h2 className="card-title text-lg md:text-xl">
                  {plan.name}
                </h2>

                {/* Price */}
                <p className="text-2xl font-bold">
                  ${plan.price}/
                  <span className={`${isActive ? "text-white/80" : "text-gray-400"} text-sm`}>
                    {plan.period}
                  </span>
                </p>

                {/* Description */}
                <p className={`${isActive ? "text-white/90" : "text-gray-500"} text-sm`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={`mr-2 ${isActive ? "text-white" : "text-green-500"}`}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`btn rounded-full mt-4 w-full
                  ${isActive
                    ? "bg-white text-black"
                    : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  }`}
                >
                  {plan.button}
                </button>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Pricing;