import React from "react";

const ProductCard = ({ product, addToCart }) => {

  const { name, description, price, period, tag, tagType, features = [], icon } = product;

  const tagStyles = {
    popular: "bg-purple-200 text-purple-800",
    new: "bg-green-200 text-green-800",
    "best seller": "bg-yellow-200 text-yellow-800"
  };

  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">

      <div className="card-body relative space-y-4">

        {/* Tag */}
        {tag && (
          <div className={`absolute top-4 right-4 badge ${tagStyles[tagType] || "bg-gray-200"}`}>
            {tag}
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <span className="text-2xl border rounded-full w-10 h-10 flex items-center justify-center">
            {icon}
          </span>

          <h2 className="card-title text-xl md:text-2xl font-bold text-[#101727]">
            {name}
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-[#627382] leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <p className="text-lg md:text-xl font-bold text-[#101727]">
          ${price} <span className="text-[#627382] text-sm">/ {period}</span>
        </p>

        {/* Features */}
        <ul className="text-sm space-y-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-4 w-full"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;