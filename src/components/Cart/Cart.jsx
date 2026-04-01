import React from "react"
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cart, removeFromCart, checkout }) => {

  if(cart.length === 0){
    return <div>
      <CiShoppingCart className="mx-auto text-7xl text-[#627382]"/>

      <p className="text-center text-xl">Cart is Empty</p>
    </div>
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (

    <div className="bg-white p-4 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.06)] rounded-md space-y-4">

      {cart.map(item=>(
        <div
        key={item.id}
        className="flex bg-base-200 justify-between items-center p-4 shadow rounded-md"
        >

          <div className="flex gap-3 items-center">
            <span className="bg-white p-2 rounded-full shadow-md">{item.icon}</span>
            <div>
              <h3 className="font-bold">
               {item.name}
            </h3>
            <p>${item.price}</p>
            </div>
          </div>

          <button
           onClick={()=>removeFromCart(item.id)}
           className="btn text-red-500 p-2 btn-sm shadow-md hover:shadow-inner"
          >
           Remove
          </button>

        </div>
      ))}

      <div className="flex justify-between text-[#627382]">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button
       onClick={checkout}
       className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full"
      >
       Proceed to Checkout
      </button>

    </div>
  );
};

export default Cart;