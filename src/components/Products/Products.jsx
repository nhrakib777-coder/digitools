import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products, addToCart }) => {

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {products.map(product=>(
        <ProductCard
        key={product.id}
        product={product}
        addToCart={addToCart}
        />
      ))}

    </div>
  );
};

export default Products;