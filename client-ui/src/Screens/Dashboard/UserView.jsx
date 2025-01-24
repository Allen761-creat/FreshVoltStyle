

import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchallusers, removeuser } from "../../Redux/Actions/adminactions";
import axios from "axios";
import apis from "../../Config/Apis";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
const UserView = () => {
  const dispatch = useDispatch();
  const { userlist,deleteuser } = useSelector(state => state.AdminSlice);
  
  const [visibleUsers, setVisibleUsers] = useState(3); // Initially show 3 users
  const [clickedUsers, setClickedUsers] = useState({}); // Store clicked status for each user
  const [loading,setloading]=useState(true)

  useEffect(() => {
    dispatch(fetchallusers());
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [dispatch]);

  // Function to handle scroll event and load more users
  const loadMoreUsers = () => {
    setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 3); // Load 3 more users
  };

  const statushandler = async (ID) => {
    const userdata = {
      id: ID
    };
   
    const { data } = await axios.put(`${apis[2]}/status`, userdata);
    // Toggle the clicked status for the specific user
    setClickedUsers(prev => ({
      ...prev,
      [ID]: !prev[ID] // Toggle the clicked state
    }));
  };


  const deletehandler = async (ID) => {
      dispatch(removeuser(ID))
     
  }
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  const filtereduser = userlist.filter((user) => 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.toString().includes(searchQuery)
  );

  return (
    <>
    {
      loading ?<Loader/>:<>
      <div className="py-6 dark:bg-slate-500 mt-4 rounded-lg shadow-2xl">
      <div className="flex justify-between mb-4 text-center">
        <h2 className="text-4xl font-extrabold text-center dark:text-yellow-500 text-gray-900">
          &nbsp;&nbsp;&nbsp;Users
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search users..."
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
              <th className="p-2">Email</th>
              <th className="p-2">Username</th>
              <th className="p-2 relative left-24"> Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtereduser.slice(0, visibleUsers).map((user) => (
              <tr key={user._id} className="border-t dark:border-gray-700 dark:hover:bg-purple-500 hover:bg-indigo-200">
                <td className="p-2 relative left-3">
                  <img
                    src={
                      user && user.profilepic
                        ? `http://localhost:8080${user.profilepic}`
                        : user.gender === 'male'
                        ? '/img/men avtar.jpg'
                        : user.gender === 'female'
                        ? '/img/women avtar.jpg'
                        : '/img/dp.png'
                    }
                    alt={user.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.status}</td>
                <td className="p-2 flex items-center space-x-4">
                  <Link to={`/dashboard/singleuserdetails/${user._id}`}>
                  <FaEye className="text-blue-500 mt-4 text-xl hover:text-blue-700 cursor-pointer transition-colors" />
                  </Link>
                  <MdBlock
                    onClick={() => statushandler(user._id)}
                    className={`font-extrabold cursor-pointer mt-4 ${clickedUsers[user._id] ? 'text-red-500' : 'text-green-700'}`}
                  />
                  <FaTrash onClick={() => deletehandler(user._id)} className="text-red-500 mt-4 text-xl hover:text-red-700 cursor-pointer transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load more button */}
      {visibleUsers < userlist.length && (
        <div className="mt-4 text-center">
          <button
            onClick={loadMoreUsers}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            View more
          </button>
        </div>
      )}
    </div>
      </>
    }
    </>
  );
};
export default UserView;
