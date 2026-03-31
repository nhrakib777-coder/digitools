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

      <div className="text-center my-10">

        <button
        className="btn btn-primary mr-4"
        onClick={()=>setTab("products")}
        >
          Products
        </button>

        <button
        className="btn btn-outline"
        onClick={()=>setTab("cart")}
        >
          Cart
        </button>

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