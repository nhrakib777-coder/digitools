import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cart = [], removeFromCart, checkout }) => {

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
        <CiShoppingCart className="text-6xl text-[#627382]" />
        <p className="text-lg font-medium text-[#627382]">
          Your cart is empty
        </p>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white p-4 md:p-6 shadow-md rounded-lg space-y-4 max-w-lg mx-auto">

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-base-200 p-4 rounded-md"
        >

          {/* Item Info */}
          <div className="flex items-center gap-3">

            <span className="bg-white p-2 rounded-full shadow">
              {item.icon}
            </span>

            <div>
              <h3 className="font-semibold text-[#101727]">
                {item.name}
              </h3>

              <p className="text-sm text-[#627382]">
                ${item.price}
              </p>
            </div>

          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="btn btn-sm text-red-500 bg-white hover:bg-red-50"
          >
            Remove
          </button>

        </div>
      ))}

      {/* Total */}
      <div className="flex justify-between items-center font-semibold text-[#627382] pt-2 border-t">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      {/* Checkout */}
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