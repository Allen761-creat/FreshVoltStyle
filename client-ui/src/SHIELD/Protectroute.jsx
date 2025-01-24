// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { useAuth } from "../../src/Context/Auth";
// import apis from "../Config/Apis";
// import P404 from "../Screens/P404";
// import Loader from '../Components/Loader'
// const Protectroute = () => {
//   const [ok, setok] = useState(false);
//   const [auth, setauth] = useAuth();
//   const [loading, setloading] = useState(true)

//   useEffect(() => {
//     auth?.token && fetchedloggeduser();
//   }, [auth?.token]);

  
//   const fetchedloggeduser = async () => {
//     try {
//       await axios.get(`${apis[0]}/fetchloggedIn`, {
//         headers: { Authorization: auth?.token },
//       });
//       setloading(false);
//       setok(true);
//     }
//     catch (err) {
//       console.log(err);
//       setloading(false);
//       setok(false);
//     }
//   };

//   return (
//     loading ? <Loader/> :  ok ? <Outlet/>  :  <P404/>   
                           
//   )
// };

// export default Protectroute;


import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../src/Context/Auth";
import apis from "../Config/Apis";
import P404 from "../Screens/P404";
import Loader from '../Components/Loader'

const Protectroute = () => {
  const [ok, setok] = useState(false);        // Check if the user is authenticated
  const [auth, setauth] = useAuth();          // Get the auth context
  const [loading, setloading] = useState(false); // Loading state while fetching data

  useEffect(() => {
    if (auth?.token) {
      fetchedloggeduser(); // Fetch logged-in user details if token exists
    }
  }, [auth?.token]); // Dependency on auth token

  // Function to fetch the logged-in user and verify the token
  const fetchedloggeduser = async () => {
    try {
      setloading(true);
      // Sending a request to verify if the user is authenticated using the token
      await axios.get(`${apis[0]}/fetchloggedIn`, {
        headers: { Authorization: auth?.token },
      });
      // setloading(true); // Data fetched successfully
      setok(true);        // User is authenticated
      setloading(false); // Set loading to false
    } catch (err) {
      console.log(err);  // Log any error
      setok(false);      // User is not authenticated
      setloading(false); // Set loading to false
     
    }
  };
 
  // Conditionally render based on loading and authentication state
  return (
    loading ? <Loader/> :   // If loading is true, show the loader
    ok ? <Outlet/> :         // If ok is true, render the protected route
    <P404/>                  // If ok is false, show the 404 page (unauthorized)
  );
};

export default Protectroute;
