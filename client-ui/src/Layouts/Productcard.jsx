import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Functions/Rating";
import { addcomma, salecalculator } from "../Functions/Price";
import { TiShoppingCart } from "react-icons/ti";
import { addToCart } from "../Redux/Actions/Cartactions";
import {cartToast} from "../Functions/Message"
import { useDispatch, useSelector } from 'react-redux';
import { addfavorite, removefavorite } from "../Redux/Slice/wishlistslice";
import { Addtofavourite, Deletefromfavourite } from "../Redux/Actions/wishlistaction";

const Productcard = ({ product }) => {
// -------------------------------------cart system--------------------------------------
const  {cartitems} =  useSelector(state => state.cart);
const  {favorite} =  useSelector(state => state.favoritesitems);
const isfavourite = favorite.some((wishItem) => wishItem.id === product?._id);

const dispatch = useDispatch()
const additem = (id3)=>{
if(cartitems && cartitems.some((cartitem1) => cartitem1.id === id3)){
   const  item = cartitems.find((cartitem2)=>cartitem2.id === id3);
   if(item.qty < item.stock)
   dispatch(addToCart(id3,item.qty + 1 ))
   cartToast(" item added to cart")
  }
  else{
    dispatch(addToCart(id3,1))
    cartToast(" item added to cart")
  }
 
}

const togglefavouritebtn =(id)=>{
// var isfavourite = favorite&&favorite.some((favoriteitem) => favoriteitem.id === id)

  if(isfavourite){
    dispatch(Deletefromfavourite(id));
    cartToast(" item removed from wishlist")
  }
  else{
    dispatch(Addtofavourite(id));
    cartToast(" item added to wishlist")
  }
  
}

  const finalPrice = salecalculator(
    product.onsale,
    product.price,
    product.discount
  );
  const price = addcomma(finalPrice);
  const sale = product.onsale;
  return (
    <div>
     
      <div className="w-[295px] h-[520px] p-2 dark:bg-gray-900   shadow-lg rounded-lg   duration-500 hover:scale-105 hover:shadow-xl">
        <div className="  border-gray-200 bg-white  dark:bg-black p-6  ">
          <div className="h-56 w-full">
            <Link to={`/singleproduct/${product._id}`}>
              <img
                className="mx-auto  h-full dark:block  "
                src={`${product.image[0]}`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {sale ? (
                product.discount ? (
                  product.discount > 50 ? (
                    <span className="bg-red-600 p-1  rounded-md">
                      Up to {product.discount}% off
                    </span>
                  ) : product.discount > 30 ? (
                    <span className="bg-green-500 p-1  rounded-md">
                      Up to {product.discount}% off
                    </span>
                  ) : product.discount < 30 ? (
                    <span className="bg-sky-500 p-1 rounded-md">
                      Up to {product.discount}% off
                    </span>
                  ) : null
                ) : null
              ) : null}
            </span>
            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                data-tooltip-target="tooltip-quick-look"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only"> Quick look </span>
                <Link to={`/singleproduct/${product._id}`}>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                </Link>
              </button>
              <div
                id="tooltip-quick-look"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Quick look
                <div className="tooltip-arrow" data-popper-arrow />
              </div>
              <button
              onClick={()=>togglefavouritebtn(product._id)}
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                // className=  {`color ? red : rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                className={isfavourite ? 'text-red-700' : 'rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}

              >
                <span className="sr-only"> Add to Favorites </span>
                
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isfavourite ? "red" : "none"}
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>
              
              <div
                id="tooltip-add-to-favorites"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow />
              </div>
            </div>
          </div>
          <Link to={`/singleproduct/${product._id}`} className=" text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white ">
            {product.subtitle}
          </Link>
          <div className="mt-2 flex items-center gap-4">
            <Rating product={product && product} />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            
            {product.stock ? `(${product.stock})` : null}

              
            </p>
          </div>
          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fast Delivery
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul>
          <div className="mt-1 flex items-center justify-between ">
            <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              {price ? price : product && product.price}{" "}
              <span className="text-[10px]">PKR</span>
            </p>
            <button
             onClick={()=>additem(product && product._id )}
             disabled ={product.stock < 1  }
             title={product.stock < 1 && "out of stock"}
             >
            <TiShoppingCart className="h-10 w-10 hover:animate-bounce dark:text-white dark:hover:text-red-600 hover:text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
