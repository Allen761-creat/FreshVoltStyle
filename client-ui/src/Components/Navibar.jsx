import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,   NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import {   FaCartPlus  } from "react-icons/fa";
import Mode from "../Functions/Mode";
import {  useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { useAuth } from "../Context/Auth";
import { errorToast } from "../Functions/Message";
import { useSelector } from "react-redux";
import Logo from "../Functions/Logo";
import Searchbar from "./Searchbar";
const Navibar = () => {
  /* circlecart setting */
  const  {cartitems} =  useSelector(state => state.cart);
/* dropedown setting */
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };const handleMouseleave = () => {
    setIsHovered(false);
  };
  const navigate = useNavigate()
  const [auth ,setauth] = useAuth()
  const logout=()=>{
errorToast('you are logged out')
setauth('')
localStorage.removeItem('auth')
navigate("/login")
}
  return (
    <div>
      <Navbar expand="lg" className="bg-orange-500 p-[4px] dark:bg-orange-600  ">
        <Container fluid>
          <Navbar.Brand>
            {/* <img src="Logo.svg" className="h-[70px] w-[70px] inline" alt="" />{" "} */}
            <h1 className="text-[18px]  font-extrabold   ">
            {/* <img src="Logo.svg" className="h-[30px] w-[30px] inline " alt="" />{" "} */}
            <Logo/> &nbsp;
            FRESHVOLTSTYLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-[#fefe28]">
                <NavLink to="/">
                  <p className="font-bold text-[22px]">Home</p>
                </NavLink>
              </Nav.Link>
              <Nav.Link className="text-[#fefe28]">
                <NavLink to="/aboutus">
                  <p className="font-bold text-[22px]">Aboutus</p>
                </NavLink>
              </Nav.Link>
              <Nav.Link className="text-[#fefe28]">
                <NavLink to="/contactus">
                  <p className="font-bold text-[22px]">Contactus</p>
                </NavLink>
              </Nav.Link>
            </Nav>
            <div className="d-lg-block d-xl-block d-xxl-block d-none">
              <div className="flex gap-2 ">
                <div className="relative top-[2px]">               
                  <Searchbar/>
                </div>
                <div className=" flex gap-2 ">
                <Mode/>
                {/* profile or dropedown system   */}
                <div
      className="profile-pic-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseleave}
    >
      <div className="profile-pic">
      <div className=" object-center object-cover   overflow-hidden rounded-full w-[35px] border border-black h-[35px]" >
         
         <img 
  src={auth.user && auth.user.profilepic ? `http://localhost:8080${auth.user.profilepic}` :"http://localhost:8080/uploads/3afe18deea4097c7ba9b640c.png" } 
  alt="" 
/>
      </div>
{isHovered && (
  <>
    {auth.token || auth.user ? (
      <div className="dropdown z-10 absolute right-20 flex flex-col  duration-300 p-2 rounded-md bg-orange-400">
        <Link to="/dashboard/profileview">
        
        <span className="tracking-tighter">{auth?.user.name =='' ? "User" :auth.user.name   }</span>
        </Link>
        <Link to="/dashboard/profileview">
        <span className="hover:bg-orange-300 p-1 rounded-md">{auth?.user.email}</span>
        </Link>
        <div className="hover:bg-orange-300 rounded-md">
          <Link to="/dashboard">
            <IoLogIn className="inline" /> Setting
          </Link>
        </div>
        <div className="hover:bg-orange-300  rounded-md">
        <Link to="/wishlist">
          <IoLogIn className="inline "/> Wishlist&nbsp;
        </Link>
      </div>
        <div className="hover:bg-orange-300 rounded-md">
          <div onClick={logout} className="cursor-pointer">
            <IoLogIn className="inline" /> Log out
          </div>
        </div>
      </div>
    ) : (

      <div className="dropdown z-10 absolute right-20 flex flex-col  duration-300 p-2 rounded-md  bg-orange-400">
      <span className="tracking-tighter"></span>
      <div className="hover:bg-orange-300  rounded-md">
        <Link to="/wishlist">
          <IoLogIn className="inline "/> Wishlist&nbsp;
        </Link>
      </div>
      <div className="hover:bg-orange-300 rounded-md">
        <Link to="/signup">
          <IoLogIn className="inline" /> Sign In
        </Link>
      </div>
      <div className="hover:bg-orange-300 rounded-md">
        <Link to="/login">
          <IoLogIn className="inline" /> Log In
        </Link>
      </div>
      
    </div>
    )
    }
  </>
)}
                </div>
                </div>
                {/* Cart system */}
                <div className=" relative top-[6px] flex ">
                  <Link to="/cart"><FaCartPlus className="w-[30px]  h-[30px] text-[white] " /></Link>
                  {
                    cartitems.length > 0? (
                      <Link to="/cart"><span className="text-[15px] text-white bg-red-700 animate-bounce relative right-4 bottom-3 flex items-center justify-center h-[17px] w-[17px] rounded-full" >
                        {cartitems.length}
                      </span>
                      </Link>
                    ) : null
                  }
                </div>
                </div>
                <Nav.Link>
                  
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ------------------------------------small screen----------------------------------------- */}
      <div className="flex  bg-green-500 w-full h-[50px] justify-between d-md-none d-lg-none d-xl-none d-xxl-none">
      <div className="  ">

<Searchbar/>
      </div>
     
      <div className="flex justify-center items-center p-2 gap-2 ">
      <Mode/>
      <NavLink to="/signup">
<AiOutlineUser className="w-[25px] h-[25px] font-extrabold text-white" />
</NavLink>
<Link to="/cart">
<FaCartPlus className="w-[25px] h-[25px] relative top-1 font-extrabold text-[white]" />
</Link>
{
                    cartitems.length > 0? (
                      <Link to="/cart"><span className="h-[17px] animate-bounce w-[17px] relative right-5  bottom-3 span-2 rounded-full bg bg-red-700 text-[white] flex justify-center items-center">                  
                        {cartitems.length}
                      </span></Link>
                    ) : null
                  }

      
      </div>
      </div>
    </div>
  );
};

export default Navibar;

