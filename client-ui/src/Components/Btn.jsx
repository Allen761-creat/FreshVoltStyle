import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const Btn = () => {
const [count, setcount] = useState(1)

    const plus=()=>{
        setcount(count+1)
    }
 const minus=()=>{
    if(count>1){
        setcount(count-1)
    }
 }
  return (
    <div>
      <div className='flex gap-4 overflow-hidden bg-white rounded-md dark:text-gray-900 items-center justify-center border border-black p-2 h-[30px] w-[120px]'>
        <button onClick={minus}><FaMinus/></button>
        <span className='font-semibold text-[25px]'>{count}</span>
        <button onClick={plus}><FaPlus/></button>
       
      </div>
    </div>
  )
}

export default Btn
