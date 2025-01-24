
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/Auth";
import { errorToast, successToast } from "../../Functions/Message";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import apis from "../../Config/Apis";

const UpdateProfile = () => {
  const [auth, setauth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    name: Yup.string().required("Full Name is required"),
    gender: Yup.string().required("Gender is required"),  // Added gender validation
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
    shortdescription: Yup.string().required("Short Description is required"),
   
  
  });

  // Formik hook to manage form state and validation
  const formik = useFormik({
    initialValues: {
      city: auth?.user?.city || "",
      name: auth?.user?.name || "",
      gender: auth?.user?.gender || "",  // Add this field for gender
      address: auth?.user?.address || "",
      phone: auth?.user?.phone || "",
      role: auth?.user?.role || "buyer",
      shortdescription: auth?.user?.shortdescription || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await axios.put(`${apis[0]}/updateprofile`, values);

        if (data?.error) {
          setLoading(false);
          errorToast(data.error);
        } else {
          setauth({ ...auth, user: data });
          const authDataFromLS = JSON.parse(localStorage.getItem("auth"));
          authDataFromLS.user = data;
          localStorage.setItem("auth", JSON.stringify(authDataFromLS));
          setLoading(false);
          successToast("Profile updated successfully");
          navigate("/dashboard/ProfileView");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        errorToast("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div>
      <div className="flex items-center justify-center mt-3 w-full h-full p-4">
        <div className="w-full max-w-4xl dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold  mb-6 dark:text-white text-center">
            {loading ? <Loader /> : "Update User Profile"}
          </h1>
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First column: city, Full Name, Gender */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="City"
                  className={`w-full px-3 py-2 border ${
                    formik.touched.city && formik.errors.city ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-500 text-sm">{formik.errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Full Name"
                  className={`w-full px-3 py-2 border ${
                    formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
              {/* Gender Field (Dropdown) */}
              <div>
                <select
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-3 py-2 border ${
                    formik.touched.gender && formik.errors.gender ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-500 text-sm">{formik.errors.gender}</p>
                )}
              </div>
            </div>

            {/* Second column: Address, Phone, Short Description */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Address"
                  className={`w-full px-3 py-2 border ${
                    formik.touched.address && formik.errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm">{formik.errors.address}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Phone"
                  className={`w-full px-3 py-2 border ${
                    formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>

              {/* Admin Status Dropdown */}
              <div className="flex items-center space-x-4">
                <select
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  disabled={auth?.user?.isAdmin}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {auth?.user?.isAdmin ? (
                    <option value="admin">Admin</option>
                  ) : (
                    <>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Short Description Field */}
            <div>
              <textarea
                name="shortdescription"
                value={formik.values.shortdescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Short Description"
                className={`w-[210%] px-3 py-2 border ${
                  formik.touched.shortdescription && formik.errors.shortdescription
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg`}
              />
              {formik.touched.shortdescription && formik.errors.shortdescription && (
                <p className="text-red-500 text-sm">{formik.errors.shortdescription}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

