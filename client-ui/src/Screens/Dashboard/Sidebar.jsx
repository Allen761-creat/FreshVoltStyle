
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);
//   const [ordersOpen, setOrdersOpen] = useState(false);
//   const [userOpen , setUserOpen] = useState(false);

//   const toggleDropdown = (dropdown) => {
//     if (dropdown === 'settings') {
//       setSettingsOpen(!settingsOpen);
//     } else if (dropdown === 'products') {
//       setProductsOpen(!productsOpen);
//     } else if (dropdown === 'orders') {
//       setOrdersOpen(!ordersOpen);
//       } else if (dropdown === 'user') {
//         setUserOpen(!userOpen);
//     }
//   };
//   return (
//     <div className="flex bg-gradient-to-t">
//       <aside className="w-80 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-md h-screen">
//         <div className="p-5">
//           <h2 className="text-4xl font-bold text-center ">Dashboard</h2>
//           <ul className="mt-8 space-y-4">
//             <li>
//               <button
//                 className="flex items-center justify-between w-full text-left text-red-100  text-xl font-bold hover:text-red-800"
//                 onClick={() => toggleDropdown('settings')}
//               >
//                 Settings
//                 <span className="text-xs text-black">{settingsOpen ? '▲' : '▼'}</span>
//               </button>
//               {settingsOpen && (
//                 <ul className="pl-4 space-y-2">
//                   <li><Link to="profile" className="block text-gray-100 text-lg hover:text-red-800">View Profile</Link></li>
//                   <li><Link to="editprofile" className="block text-gray-100 text-lg hover:text-red-800">Update Profile</Link></li>
//                   <li><Link to="uploadimage" className="block text-gray-100 text-lg hover:text-red-800">Upload Image</Link></li>
//                   <li><Link to="changepassword" className="block text-gray-100 text-lg hover:text-red-800">Change Password</Link></li>
//                   <li><Link to="resetPasswordform" className="block text-gray-100 text-lg hover:text-red-800">Reset Password</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 className="flex items-center justify-between text-red-100  text-xl font-bold w-full text-left  hover:text-red-800"
//                 onClick={() => toggleDropdown('products')}
//               >
//                 Products
//                 <span className="text-xs text-black">{productsOpen ? '▲' : '▼'}</span>
//               </button>
//               {productsOpen && (
//                 <ul className="pl-4 space-y-2">
//                   <li><Link to="Viewproduct" className="block text-gray-100 text-lg hover:text-red-800">View Products</Link></li>
//                   <li><Link to="UpdateProduct" className="block text-gray-100 text-lg hover:text-red-800">Update Product</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 className="flex items-center  text-red-100 text-xl font-bold justify-between w-full text-left  hover:text-red-800"
//                 onClick={() => toggleDropdown('orders')}
//               >
//                 Orders
//                 <span className="text-xs text-black">{ordersOpen ? '▲' : '▼'}</span>
//               </button>
//               {ordersOpen && (
//                 <ul className="pl-4 space-y-2">
//                   {/* Add order-related links here */}
//                   <li><Link to="ViewOrders" className="block text-gray-100 text-lg hover:text-red-800">View Orders</Link></li>
//                   <li><Link to="ManageOrders" className="block text-gray-100 text-lg hover:text-red-800">Manage Orders</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 className="flex items-center justify-between  text-red-100  text-xl font-bold w-full text-left  hover:text-red-800"
//                 onClick={() => toggleDropdown('user')}
//               >
//                 Users
//                 <span className="text-xs text-black">{productsOpen ? '▲' : '▼'}</span>
//               </button>
//               {userOpen && (
//                 <ul className="pl-4 space-y-2">
//                   <li><Link to="ViewUsers" className="block text-gray-100 text-lg hover:text-red-800">View users</Link></li>
//                   <li><Link to="UpdateUsers" className="block text-gray-100 text-lg hover:text-red-800">Update users</Link></li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { RiLuggageCartFill } from "react-icons/ri";
import { PiUsersFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { FaUserPen, FaUsersViewfinder  } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaKey } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits,  } from "react-icons/md";
import { LiaCartPlusSolid } from "react-icons/lia";
import { SiShopify } from "react-icons/si";

import { useAuth } from "../../Context/Auth";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [auth ,setauth] = useAuth()
  const data = auth && auth.user
  const {isAdmin, role} = data
  // console.log(data)
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    profile: false,
    products: false,
    orders: false,
    users: false
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (section) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const { allorders } = useSelector(state => state.AdminSlice);

  return (
    <div
      className={` h-[500px]   bg-orange-800 dark:bg-slate-900 text-white ${
        isOpen ? "w-64" : "w-24"
      } duration-300`}>
      <div className='p-4 flex gap-5  items-center '>
        <button onClick={toggleSidebar} className='text-white text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && <h2 className='text-xl   font-bold'>WELCOM </h2>}
        {/* <button onClick={toggleDarkMode} className='text-white text-xl ml-4'>
          {darkMode ? <GiSun className="text-yellow-400 text-3xl" /> : <BsMoonStarsFill className="text-blue-100 text-2xl" />}
        </button> */}
      </div>
      <div className='flex-1 overflow-y-auto'>

        {/* Profile/Settings Section */}
        <div>
          <button
            onClick={() => toggleDropdown("profile")}
            className='flex items-center justify-between w-full px-4 py-3 hover:bg-purple-600 dark:hover:bg-gray-800'>
            <span className='flex items-center'>
              <LuUsers className='mr-2 text-2xl' />
              {isOpen && <span>Settings</span>}
            </span>
            {isOpen && (
              <FaChevronDown className={`${isDropdownOpen.profile ? "rotate-180" : ""} transition-transform`} />
            )}
          </button>
          <div
            className={`overflow-hidden ${
              isDropdownOpen.profile ? "max-h-40" : "max-h-0"
            } transition-max-height duration-300`}>
            <ul className='px-4 space-y-2'>
              <li className='py-2 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer'>
                <Link to='/dashboard/profileview' className='flex items-center space-x-2'>
                  <span className='flex items-center'>View Profile</span>
                  <FaUsersViewfinder  className='text-lg' />
                </Link>
              </li>
              <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer'>
                <Link to='/dashboard/profileform' className='flex items-center space-x-2'>
                  <span className='flex items-center'>Update Profile</span>
                  <FaUserPen className='text-lg' />
                </Link>
              </li>
              <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer'>
                <Link to='/dashboard/uploadimg' className='flex items-center space-x-2'>
                  <span className='flex items-center'>Upload Image</span>
                  <RiUploadCloud2Line className='text-lg' />
                </Link>
              </li>
              <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer'>
                <Link to='/dashboard/changepassword' className='flex items-center space-x-2'>
                  <span className='flex items-center'>Change Password</span>
                  <FaKey className='text-lg' />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Products Section */}
        {isAdmin && (
          <div className='mt-4'>
            <button
              onClick={() => toggleDropdown("products")}
              className='flex items-center justify-between w-full px-4 py-3 hover:bg-purple-800 dark:hover:bg-gray-800'>
              <span className='flex items-center'>
                <RiLuggageCartFill className='mr-2 text-2xl' />
                {isOpen && <span>Products</span>}
              </span>
              {isOpen && (
                <FaChevronDown className={`${isDropdownOpen.products ? "rotate-180" : ""} transition-transform`} />
              )}
            </button>
            <div
              className={`overflow-hidden ${
                isDropdownOpen.products ? "max-h-40" : "max-h-0"
              } transition-max-height duration-300`}>
              <ul className='px-4 space-y-2'>
                <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer flex items-center justify-between'>
                  <Link to='/dashboard/addnewproduct' className='flex items-center space-x-3'>
                    <span>Add New Product</span>
                    <LiaCartPlusSolid className='text-lg' />
                  </Link>
                </li>
                <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer flex items-center justify-between'>
                  <Link to='/dashboard/productview' className='flex items-center space-x-3'>
                    <span>View Products</span>
                    <SiShopify className='text-lg' />
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        )}

         {/* Orders Section */}
         {isAdmin && (
          <div className='mt-4'>
            <button
              onClick={() => toggleDropdown("orders")}
              className='flex items-center justify-between w-full px-4 py-3 hover:bg-purple-800 dark:hover:bg-gray-800'>
              <span className='flex items-center'>
                <TbShoppingBagPlus className='mr-2 text-2xl' />
                
                {isOpen && <span>Orders</span>}
              </span>
              {isOpen && (
                <FaChevronDown className={`${isDropdownOpen.orders ? "rotate-180" : ""} transition-transform`} />
              )}
            </button>
            <div
              className={`overflow-hidden ${
                isDropdownOpen.orders ? "max-h-40" : "max-h-0"
              } transition-max-height duration-300`}>
              <ul className='px-4 space-y-2'>
                <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer flex items-center justify-between'>
                  <Link to='/dashboard/deliverdorderview' className='flex items-center space-x-3'>
                    <span>Delivered Order</span>
                    <LiaCartPlusSolid className='text-lg' />
                  </Link>
                </li>
              
                <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer flex items-center justify-between'>
                  <Link to='/dashboard/pendingorderview' className='relative flex items-center space-x-3'>
                    <span>View Orders</span>
                    <MdOutlineProductionQuantityLimits className='text-lg' />

                    {allorders.length > 0 && (
                      <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center'>
                        {allorders.length}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

         {/* Users Section */}
         {isAdmin && (
          <div className='mt-4'>
            <button
              onClick={() => toggleDropdown("users")}
              className='flex items-center justify-between w-full px-4 py-3 hover:bg-purple-800 dark:hover:bg-gray-800'>
              <span className='flex items-center'>
                <HiUsers className='mr-2 text-2xl' />
                
                {isOpen && <span>Users</span>}
              </span>
              {isOpen && (
                <FaChevronDown className={`${isDropdownOpen.users ? "rotate-180" : ""} transition-transform`} />
              )}
            </button>
            <div
              className={`overflow-hidden ${
                isDropdownOpen.users ? "max-h-40" : "max-h-0"
              } transition-max-height duration-300`}>
              <ul className='px-4 space-y-2'>
                <li className='py-1 px-3 hover:bg-purple-800 dark:hover:bg-gray-900 cursor-pointer flex items-center justify-between'>
                  <Link to='/dashboard/usersview' className='flex items-center space-x-3'>
                    <span>View Users</span>
                    <PiUsersFill className='text-lg' />
                  </Link>
                </li>
              
            

              </ul>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default Sidebar;
