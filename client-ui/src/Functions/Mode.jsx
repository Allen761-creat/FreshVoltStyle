

import React, { useEffect, useState } from 'react';
import { IoBulb } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";

const Mode = () => {
   
    const [isdarkmode, setIsdarkmode] = useState(false)
    
    useEffect(() => {
        const mode = window.document.documentElement;

        if (isdarkmode) {
            mode.classList.add('dark');
        } else {
            mode.classList.remove('dark');
        }

       
    }, [isdarkmode]);

    const toggleMode = (e) => {
        e.preventDefault();
        setIsdarkmode(!isdarkmode); 
    };

    return (
        <div>
            <button 
                onClick={toggleMode} 
                className="w-[35px] h-[35px] bg-white relative top-[2px] border flex justify-center items-center rounded-full"
            >
                {isdarkmode ? (
                     <HiOutlineLightBulb className="w-[25px] h-[25px] text-[gray]" />
                  
                ) : (
                    <IoBulb className="w-[25px] h-[25px] text-[yellow]" />
                )}
            </button>
        </div>
    );
};

export default Mode;
