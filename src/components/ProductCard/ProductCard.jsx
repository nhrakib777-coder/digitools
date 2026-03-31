const ProductCard = ({ product, addToCart }) => {

  const { name, description, price, period, tag, tagType, features, icon } = product;

  return (
    <div className="card bg-base-100 shadow">

      <div className="card-body">

        <div className={`badge ${tagType}`}>{tag}</div>

        <h2 className="card-title text-2xl">
          {icon} {name}
        </h2>

        <p>{description}</p>

        <p className="text-xl font-bold">
          ${price} / {period}
        </p>

        <ul className="text-sm mt-2">
          {features.map((f,i)=>(
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <button
          onClick={()=>addToCart(product)}
          className="btn btn-primary mt-4"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;