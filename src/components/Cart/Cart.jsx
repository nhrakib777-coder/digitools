const Cart = ({ cart, removeFromCart, checkout }) => {

  if(cart.length === 0){
    return <p className="text-center text-xl">Cart is Empty</p>
  }

  return (

    <div className="space-y-4">

      {cart.map(item=>(
        <div
        key={item.id}
        className="flex justify-between items-center p-4 shadow"
        >

          <div>
            <h3 className="font-bold">
              {item.icon} {item.name}
            </h3>
            <p>${item.price}</p>
          </div>

          <button
           onClick={()=>removeFromCart(item.id)}
           className="btn btn-error btn-sm"
          >
           Remove
          </button>

        </div>
      ))}

      <button
       onClick={checkout}
       className="btn btn-success w-full"
      >
       Proceed to Checkout
      </button>

    </div>
  );
};

export default Cart;