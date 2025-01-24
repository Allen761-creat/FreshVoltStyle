import  { useEffect, useState } from 'react'
import Loader from '../../Components/Loader';
import { FaEye, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { DeliverdOrders, removeorder } from '../../Redux/Actions/adminactions';
import { Link } from 'react-router-dom';
import { PiFlagPennantFill } from "react-icons/pi";

const Deliverdorderview = () => {
  const dispatch = useDispatch();
  const { deliverdorderlist,deleteorder } = useSelector(state => state.AdminSlice);
  const [visibleorderss, setVisibleorderss] = useState(3); 
      const [loading,setloading]=useState(true)     
 useEffect(() => {
     dispatch(DeliverdOrders());

     const timer = setTimeout(() => {
       setloading(false);
     }, 1000);
   }, [dispatch]);
   const loadMoreorderss = () => {
    setVisibleorderss(prevVisibleorderss => prevVisibleorderss + 3); // Load 3 more orderss
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  const filterorder = deliverdorderlist.filter((Order) => 
    Order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    Order.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
    Order.subtotal.toString().includes(searchQuery)
    
  );
const deletehandler= (id)=>{
    dispatch(removeorder(id));
}
      return (
    <div>
       {
      loading ?<Loader/>:<>
      <div className="py-6 dark:bg-slate-500 mt-4 rounded-lg shadow-2xl">
      <div className="flex justify-between mb-4 text-center">
        <h2 className="text-4xl font-extrabold text-center dark:text-yellow-500 text-gray-900">
          &nbsp;&nbsp;&nbsp;DeliverdOrders
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search orderss..."
            className="p-2 border-2 text-black border-gray-300 rounded-lg mr-2 focus:outline-none"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-y-auto max-h-80">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="p-2">Image</th>
              <th className="p-2">Products</th>
              <th className="p-2">Usersname</th>
              <th className="p-2">Subtotal</th>
              <th className="p-2  ">Actions</th>
            </tr>
          </thead>
          <tbody>

            
              
              {
              filterorder.slice(0, visibleorderss).map((orders) => (
                <tr key={orders._id} className="border-t dark:border-gray-700 dark:hover:bg-purple-500 hover:bg-indigo-200">
                  <td className="p-2 relative left-3">
                    <img
                      src={
                        orders.oderitems[0].image
                      }
                      alt={orders.name}
                      className="w-16 h-16 object-center object-scale-down rounded-lg"
                    />
                  </td>
                  <td className="p-3">{orders.oderitems.length}&nbsp;{orders.oderitems.length==1?" product" :"products"}</td>
                  <td className="p-2">{orders.username}</td>
                  <td className="p-2">{orders.subtotal}</td>
                  <td className="p-2 flex items-center space-x-4">
                    <Link to={`/dashboard/orderdetail/${orders._id}`}>
                    <FaEye className="text-blue-500 mt-4 text-xl hover:text-blue-700 cursor-pointer transition-colors" />
                    </Link>
                    <PiFlagPennantFill
                     
                      className="font-extrabold cursor-pointer mt-4 text-green-500 hover:text-green-700"
                    />
                    <FaTrash
                     onClick={() => deletehandler(orders._id)}
                     className="text-gray-500 mt-4 text-xl dark:text-red-400 hover:dark:text-red-600 hover:text-red-700 cursor-pointer transition-colors " />
                  </td>
                </tr>
              ))} 
            
            
          </tbody>
        </table>
      </div>
      

      {/* Load more button */}
      {visibleorderss < deliverdorderlist.length && (
        <div className="mt-4 text-center">
          <button
            onClick={loadMoreorderss}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            View more
          </button>
        </div>
      )}
    </div>
      </>
    }
    </div>
  )
}

export default Deliverdorderview
