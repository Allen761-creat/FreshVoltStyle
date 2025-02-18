

import axios from 'axios';
import apis from '../../Config/Apis';
import { useAuth } from "../../Context/Auth";
import { useNavigate } from 'react-router-dom';
import Deleteimg from './Deleteimg';

const Uploadimg = () => {
  const navigate = useNavigate();

  const [auth, setauth] = useAuth(); // Using the Auth context hook to get user data
  const imghandler = async (e) => {
    const img = e.target.files[0]; // Correcting to access the file correctly
    console.log(img);
    
    const formData = new FormData();  // Use FormData for file uploads
    formData.append("file", img);  // Append file to form data

    try {
      const { data } = await axios.post(`${apis[0]}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Set header for file upload
        },
      });
      setauth({ ...auth, user: data });
      const authDataFromLS = JSON.parse(localStorage.getItem("auth"));
          authDataFromLS.user = data;
          localStorage.setItem("auth", JSON.stringify(authDataFromLS));
          navigate("/dashboard/ProfileView");
      console.log(data);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <>
    <div className='mt-24 text-center '>
      <label 
        htmlFor="uploadFile1"
        className=" dark:bg-gray-900 text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 mb-2 fill-gray-500"
          viewBox="0 0 32 32"
        >
          <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" data-original="#000000" />
          <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" data-original="#000000" />
        </svg>
        Upload file
        <input 
        
          type="file"
          onChange={imghandler}
          id="uploadFile1"
          className="hidden"
        />
        <p className="text-xs font-medium text-gray-400 mt-2">
          PNG, JPG SVG, 
        </p>
      </label>
      <Deleteimg/>
    </div>
    
    
    </>
  );
};

export default Uploadimg;


