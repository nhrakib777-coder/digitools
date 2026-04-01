import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products = [], addToCart }) => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products available
          </p>
        )}

      </div>

    </div>
  );
};

export default Products;