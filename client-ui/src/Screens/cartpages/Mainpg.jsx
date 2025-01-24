import  { useState } from "react";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { TbTrashXFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../../Redux/Slice/Cartslice";
import {  resetcart } from "../../Redux/Actions/Cartactions";
import Prodpg from "./Prodpg";
import Ordersummary from "./Ordersummary";

const Mainpg = () => {
  const  {cartitems,loading,error,subtotal } =  useSelector(state => state.cart);
  const dispatch = useDispatch()
 
  const clearCart = () => dispatch(resetcart());

  return (
    <>
      <div className='p-8 bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 min-h-screen'>
        {/* Cart Items */}
        {cartitems.length > 0 ? (
          <div className='max-w-6xl mx-auto grid lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 bg-white p-6 rounded-lg shadow-lg'>
              <h2 className='text-[17px] tracking-tighter whitespace-nowrap  font-bold mb-4 dark:text-purple-700'>
                You have {cartitems.length} {cartitems.length === 1 ? "item" : "items"} in your cart.
              </h2>
              {cartitems.map((cartItem) => (
                <Prodpg key={cartItem.id}    cartItem={cartItem} />
              ))}
              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className='mt-6 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 flex items-center text-sm'>
                Clear Cart
                <TbTrashXFilled className='ml-2' />
              </button>
            </div>

            {/* Order Summary */}
            <Ordersummary subtotal={subtotal} />
            
          </div>
        ) : (
          // Empty cart message
          <div className='text-center mt-16'>
            <ImCart className='text-6xl text-red-500 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-red-500 mb-4'>Your cart is empty</h2>
            <Link to='/' className='dark:text-white text-purple-800 hover:underline font-bold'>
              Go to product page to add new items
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Mainpg;
  









































    // <div className='h-[550px] w-full flex items-center justify-center bg-orange-400'>
    //     <div className='flex flex-col items-center justify- relative bottom-32'>
    //         <ImCart className='text-5xl text-white' />
    //         <p className='text-white font-bold text-4xl'>YOUR CART IS EMPTY</p>
    //          <Link to='/'>
    //         <p className='text-white text-xl'>CHOOSE YOUR PRODUCTS</p>
    //         </Link>
    //     </div>
      
    // </div>
 