
import Signup from "./Screens/Form/Signup"
import Login from "./Screens/Form/Login"
import Changepassword from "./Screens/Form/Changepassword"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import Home from './Screens/Home'
import ActivateAccount from './Screens/Auth/ActivateAccount'
import AcessAccount from './Screens/Auth/AcessAccount'
import Navibar from "./Components/Navibar";

import Singleproductview from "./Screens/Dashboard/Singleproductview";
import { Authprovider } from "./Context/Auth";
import Forgetpassword from "./Screens/Form/Forgetpassword";
import Footer from "./Components/Footer";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Protectroute from "./SHIELD/Protectroute";

import Resetpassword from "./Screens/Form/Resetpassword";
import Mainpg from "./Screens/cartpages/Mainpg";
import P404 from "./Screens/P404";
import UserView from "./Screens/Dashboard/UserView";
import ProfileForm from "./Screens/Form/ProfileForm";
import ProfileView from "./Screens/Dashboard/ProfileView";
import Uploadimg from "./Screens/Dashboard/Uploadimg";
import Status from "./Screens/Dashboard/Status";
import Singleuserview from "./Screens/Dashboard/Singleuserview";
import Viewproduct from "./Screens/Dashboard/Viewproduct";
import Singleproduct from "./Screens/Singleproduct";
import Contactus from "./Screens/Contactus";
import Aboutus from "./Screens/Aboutus";
import Addnewproductform from "./Screens/Form/Addnewproductform";
import Wishlist from "./Screens/Wishlist";
import OrderView from "./Screens/Dashboard/OrderView";
import Deliverdorderview from "./Screens/Dashboard/Deliverdorderview";
import Orderdetails from "./Screens/Dashboard/Orderdetails";


const App = () => {
  return (

    <div>
     
      <Authprovider  >
      <BrowserRouter>
      <Navibar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/auth/verify/:token" element={<ActivateAccount />} />
        <Route path="/auth/Acess/:token" element={<AcessAccount />} />
        <Route path="/singleproduct/:id" element={<Singleproduct/>} />
        <Route path="/resetpassword" element={<Resetpassword />}/>
        <Route path="/cart" element={<Mainpg />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<P404/>} />

{/* protected routes */}
<Route element={<Protectroute/>}>
          <Route path="/dashboard" element={<Dashboard />} >
                   <Route path="changepassword" element={<Changepassword />} />
                   <Route path="usersview" element={<UserView />} />
                   <Route path="profileform" element={<ProfileForm />} />
                   <Route path="profileview" element={<ProfileView />} />
                   <Route path="uploadimg" element={<Uploadimg />} />
                   <Route path="status" element={<Status />} />
                   <Route path="singleuserdetails/:id" element={<Singleuserview/>}/>
                   <Route path="singleproductdetail/:id" element={<Singleproductview/>}/>
                   <Route path="productview" element={<Viewproduct/>}/>
                   <Route path="pendingorderview" element={<OrderView/>}/>
                   <Route path="deliverdorderview" element={<Deliverdorderview/>}/>
                   <Route path="addnewproduct" element={<Addnewproductform/>}/>
                   <Route path="orderdetail/:id" element={<Orderdetails/>}/>
                   




                   
           </Route>
</Route> 
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Authprovider>
    </div>
  )
}

export default App


