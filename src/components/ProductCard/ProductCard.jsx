import React from "react"
const ProductCard = ({ product, addToCart }) => {

  const { name, description, price, period, tag, tagType, features, icon } = product;

  const tagStyles = {
    popular : "bg-purple-200 text-purple-800",
    new : "bg-green-200 text-green-800",
    'best seller' : "bg-yellow-200 text-yellow-800"
  };

  return (
    <div className="card bg-base-100 shadow space-y-4">

      <div className="card-body relative ">

        <div className={`absolute top-3 right-3 badge ${tagStyles[tagType]}`}>{tag}</div>

      <div className="flex flex-col gap-3 ">
        <span className="text-2xl border rounded-full w-[40px] h-[40px] flex items-center justify-center ">{icon}</span>
        <h2 className="card-title text-[24px] font-bold text-[#101727]">
           {name}
        </h2>
      </div>
        

        <p className="text-[16px] text-[#627382] text-justify">{description}</p>

        <p className="text-xl font-bold text-[#101727]">
          ${price} / <span className="text-[#627382]">{period}</span>
        </p>

        <ul className="text-sm mt-2">
          {features.map((f,i)=>(
            <li key={i}><span className="text-green-500 mr-2">✔</span> {f}</li>
          ))}
        </ul>

        <button
          onClick={()=>addToCart(product)}
          className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-4"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;