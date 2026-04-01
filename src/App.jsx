import { useState } from "react";
import "./App.css";
import productsData from "./data/products.json";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Price";
import Footer from "./components/Footer/Footer";
import "../src/index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [cart,setCart] = useState([])
  const [tab,setTab] = useState("products")

  const addToCart = (product)=>{
    setCart([...cart,product])
    toast.success("Added to cart")
  }

  const removeFromCart = (id)=>{
    setCart(cart.filter(item=>item.id !== id))
    toast.error("Removed from cart")
  }

  const checkout = ()=>{
    setCart([])
    toast.info("Checkout complete")
  }

  return (

    <div>

      <Navbar cartCount={cart.length}/>

      <Banner/>

      <Stats/>
      {/* products */}
       <div className="products my-16 text-center space-y-6 ">
      <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      <div className="text-center my-10 border-2 border-base-200 w-fit mx-auto rounded-full flex gap-2 justify-center items-center p-1">

        <button
        className={`btn px-7 rounded-full ${
      tab === "products"
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none"
        : "btn-outline"
    }`}
        onClick={()=>setTab("products")}
        >
          Products
        </button>

        <button
         className={`btn px-7 rounded-full ${
      tab === "cart"
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none"
        : "btn-outline"
    }`}
        onClick={()=>setTab("cart")}
        >
          Cart
          <span className="badge badge-sm">{cart.length}</span>
        </button>

      </div>
    </div>
      

      <div className="max-w-6xl mx-auto px-4">

        {tab === "products"
          ? <Products
            products={productsData}
            addToCart={addToCart}
            />
          : <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            checkout={checkout}
            />
        }

      </div>

      <Steps/>

      <Pricing/>

      <Footer/>

      <ToastContainer/>

    </div>
  )
}

export default App