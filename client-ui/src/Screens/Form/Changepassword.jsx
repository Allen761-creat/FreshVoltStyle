
import { useState } from 'react';
import { errorToast, successToast, warningToast } from '../../Functions/Message';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apis from '../../Config/Apis';

const Changepassword = () => {
  const [oldpassword, setOldpassword] = useState('');
  const [changepassword, setChangepassword] = useState('');

  // Object to store the password data
  const userdata = {
    oldpassword:oldpassword,
    changePassword:changepassword
     };
  // Handle password change form submission
  const psdHandler = async (e) => {
    e.preventDefault();
    try {
      // Post the data to the backend
      const { data } = await axios.post(`${apis[0]}/changepassword`, userdata);
      
      if (data.error) {
        errorToast(data.error); // Show error message if any
      } else {
        successToast("your password is updated"); // Show success message
      }
    } catch (error) {
      warningToast("Something went wrong");
      console.log(error);
    }
     
  };
  // setChangepassword('')
  // setOldpassword('')
  return (
    <div>
      <section className="dark:bg-black mt-3 ml-10">
        <div className=" flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h1>
              <form onSubmit={psdHandler} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                  <input
                    value={oldpassword}
                    onChange={(e) => setOldpassword(e.target.value)}
                    type="password"  // Updated to password type
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your old password"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input
                    value={changepassword}
                    onChange={(e) => setChangepassword(e.target.value)}
                    type="password"  // Updated to password type
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your new password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Back to <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Changepassword;
