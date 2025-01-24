import React from 'react'
import { FaStar } from "react-icons/fa";
const Rating = ({product}) => {
  const rating = product&& product.rating;
  return (
    <div className='flex'>
{
[...Array(5)].map((_, index) =>{
   return(
    <svg  key={index}
    className={`h-[20px] w-[20px] ${(index < rating ? "text-yellow-400" : "text-gray-500")}`}viewBox='0 0 20 20' >
<FaStar   />
    </svg>

   )


})

}
    </div>
  )
}

export default Rating
