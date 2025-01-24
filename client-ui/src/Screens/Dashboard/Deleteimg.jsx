
import axios from 'axios';
import  { useState } from 'react';
import apis from '../../Config/Apis';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Context/Auth";
const Deleteimg = () => {
    const [auth, setauth] = useAuth();
    const navigate = useNavigate();
  // State to track button color
  const [isClicked, setIsClicked] = useState(false);
  // Handle button click
  const handleClick =async () => {
    // Change color to green when clicked
    setIsClicked(true);

    // Reset back to original color after 1 second
    setTimeout(() => {
      setIsClicked(false);
    }, 2000); // 1000ms = 1 second
    try {
        const {data} = await axios.delete(`${apis[0]}/deleteimg`,)
        console.log(data)
        setauth({ ...auth, user: data });
      const authDataFromLS = JSON.parse(localStorage.getItem("auth"));
          authDataFromLS.user = data;
          localStorage.setItem("auth", JSON.stringify(authDataFromLS));
          navigate("/dashboard/ProfileView");
    } catch (error) {
        console.error(error);
        
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`p-2 mt-2 w-[300px] text-[25px] font-bold rounded-md 
          ${isClicked ? 'bg-green-500' : 'bg-red-500'} 
          dark:${isClicked ? 'bg-green-300' : 'bg-yellow-500'} 
          dark:hover:${isClicked ? 'bg-green-200' : 'bg-yellow-300'} 
          hover:${isClicked ? 'bg-green-400' : 'bg-red-400'}`}
      >
        Delete file
      </button>
    </div>
  );
};

export default Deleteimg;
