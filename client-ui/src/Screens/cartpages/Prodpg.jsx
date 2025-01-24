import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../../Redux/Actions/Cartactions";
import { useDispatch } from "react-redux";
import { removeitem } from "../../Redux/Slice/Cartslice";
const Prodpg = ({ cartItem }) => {
  const { name, image, price, stock, qty, id, brand, category } = cartItem;
const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleIncrement = () => {
    if (qty < stock) {
      dispatch(addToCart(id, qty + 1)); 
      setErrorMessage(''); 
      setShowError(false);
    } else {
     
      setErrorMessage('Cannot add more than available stock!');
      setShowError(true);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      dispatch(addToCart(id, qty - 1)); 
    } else {
      dispatch(removeitem(id)); 
    }
    setErrorMessage(''); 
    setShowError(false);
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);
  return (
    <>
    <div className='flex items-center justify-between border-b pb-4 mb-4'>
      <Link to={`/singleproduct/${cartItem.id}`}>
      <img src={cartItem.image[0]} alt={cartItem.name} className='w-14 h-14 rounded-lg  object-center ' />
      </Link>
      <div className='flex-1 ml-4'>
      <Link to={`/singleproduct/${cartItem.id}`}>
        <h3 className='text-normal font-semibold dark:text-purple-900 
        '>
          {cartItem.brand} 
        </h3>
        </Link>
        <p className='text-gray-600 tracking-tighter whitespace-nowrap text-[10px] dark:text-purple-900'>{cartItem.category}</p>
        {errorMessage && showError && (
        <div className={`mt-2 text-red-600 text-[8px] tracking-tighter whitespace-nowrap font-semibold transition-opacity duration-500 ease-out ${!showError ? 'opacity-0' : 'opacity-100'}`}>
          {errorMessage}
          </div>
      )}
      </div>
      
      {/* Show price with quantity, e.g., "3000 x 2" */}
      <div className='text-[12px]  d-lg-block d-md-block d-xl-block d-xxl-block d-none font-bold italic text-blue-600 mx-2 dark:text-orange-500'>
        Rs.{cartItem.price} <span className='text-gray-600'>x {cartItem.qty}</span>
      </div>

      <div className='flex items-center'>
        <button
          onClick={handleDecrement}
          className='px-1  bg-gray-200 rounded-md hover:bg-gray-300 transition'>
          -
        </button>
        <span className='px-2'>{cartItem.qty}</span>
        <button
          onClick={handleIncrement}
          className='px-1  bg-gray-200 rounded-md hover:bg-gray-300 transition'>
          +
        </button>
      </div>
      
      {/* Show the total price for the item */}
      <div className='text-[12px] d-md-block d-xl-block d-xxl-block d-none font-bold italic text-blue-600 dark:text-orange-500 mx-2'>
        Rs.{(cartItem.price * cartItem.qty)}
      </div>
    </div>
   
    
   
    </>
  );
};

export default Prodpg;
