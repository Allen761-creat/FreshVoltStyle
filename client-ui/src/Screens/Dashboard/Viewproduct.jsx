


import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchProducts, removeproduct } from "../../Redux/Actions/adminactions";
import Loader from '../../Components/Loader'
const Viewproduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
const [loading,setloading]=useState(true)
  // Dispatch to get products from Redux
  const dispatch = useDispatch();
  const { productslist } = useSelector(state => state.AdminSlice);

  const [visibleUsers, setVisibleUsers] = useState(3); // Initially show 3 users

  useEffect(() => {
    dispatch(fetchProducts());
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [dispatch]);

  // Function to handle scroll event and load more products
  const loadMoreUsers = () => {
    setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 3); // Load 3 more products
  };

  const deletehandler = async (ID) => {
    dispatch(removeproduct(ID))
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  // Filter products based on search query
  const filteredProducts = productslist && productslist.filter((product) => 
    product && product .title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product && product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product && product.price.toString().includes(searchQuery)
  );

  return (

    <>
    {
      loading ? <Loader/>:<>
       <div className="py-6 dark:bg-slate-500 mt-4 rounded-lg shadow-2xl">
      <div className="flex justify-between mb-4 text-center">
        <h2 className="text-4xl font-extrabold text-center dark:text-yellow-500 text-gray-900">
          &nbsp;&nbsp;&nbsp;Products
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
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
              <th className="p-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2 relative left-"> Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Render the filtered products based on search query */}
            {filteredProducts.slice(0, visibleUsers).map((product) => (
              <tr key={product._id} className="border-t dark:border-gray-700 dark:hover:bg-purple-500 hover:bg-indigo-200">
                <td className="p-2 relative left-3">
                  <img className="w-[60px] h-[60px] object-center object-scale-down rounded-lg" src={product && product.image[0]} alt="" />
                </td>
                <td className="p-3 text-[13px] font-semibold tracking-tighter ">{product.title}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-6">
                  {product && product.stock ? (
                    <span className="font-bold text-[13px] text-green-600">
                      {product.stock ? (
                        product.stock === 1 ? (
                          <span className="font-bold text-[13px] whitespace-nowrap tracking-tighter text-red-600">
                            Only {product.stock} item left
                          </span>
                        ) : product.stock < 30 ? (
                          <span className="font-bold text-purple-600">
                            {product.stock} items left
                          </span>
                        ) : (
                          <span className="font-bold text-orange-500">
                            {product.stock} items left
                          </span>
                        )
                      ) : null}
                    </span>
                  ) : (
                    <span className="font-bold text-[13px] tracking-tighter whitespace-nowrap text-red-600">OUT OF STOCK</span>
                  )}
                </td>
                <td className="p-2 flex items-center space-x-4">
                  <Link to={`/dashboard/singleproductdetail/${product._id}`}>
                    <FaEye className="text-blue-500 mt-4 text-xl hover:text-blue-700 cursor-pointer transition-colors" />
                  </Link>
                  {/* <FaEdit className="text-green-800 mt-4 text-xl hover:text-green-700 cursor-pointer transition-colors" /> */}
                  <p></p>
                  <FaTrash onClick={() => deletehandler(product._id)} className="text-red-500 mt-4 text-xl hover:text-red-700 cursor-pointer transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load more button */}
      {visibleUsers < filteredProducts.length && (
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

export default Viewproduct;
