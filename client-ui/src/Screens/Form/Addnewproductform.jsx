import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addnewproduct } from "../../Redux/Actions/adminactions";

const Addnewproductform = () => {
  const [img1, setimg1] = useState();
  const [img2, setimg2] = useState();
  const [img3, setimg3] = useState();
  const [img4, setimg4] = useState();
  const [title, settitle] = useState();
  const [subtitle, setsubtitle] = useState();
  const [category, setcategory] = useState();
  const [brand, setbrand] = useState();
  const [price, setprice] = useState();
  const [stock, setstock] = useState();
  const [disscount, setdisscount] = useState();
  const [rating, setrating] = useState();
  const [description, setdescription] = useState();
  const [sale, setsale] = useState();
  const formdata = new FormData();
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    if (!title ||!subtitle ||!category ||!brand ||!price ||!stock ||!disscount ||!rating ||!description) {
      alert("All fields are required");
      // setShowError(true);
      return;
    }

    formdata.append("title", title);
    formdata.append("subtitle", subtitle);
    formdata.append("category", category);
    formdata.append("brand", brand);
    formdata.append("price", price);
    formdata.append("stock", stock);
    formdata.append("discount", disscount);
    formdata.append("rating", rating);
    formdata.append("description", description);
    formdata.append("onsale", sale == "SALE" ? true:false);
    formdata.append("image", img1);
    formdata.append("image", img2);
    formdata.append("image", img3);
    formdata.append("image", img4);
    dispatch(addnewproduct(formdata));
  };
  return (
    <div className=" p-[3px] bg-orange-400 rounded-md mt-3 dark:bg-orange-700 dark:text-white  ">
      <form onSubmit={submithandler} className="  shadow-2xl ">
        <div className="text-center font-bold text-[30px]">
          ADD PRODUCT DETAIL
        </div>
        <div>
          <p className="font-semibold mb-1">UPLOAD IMAGES</p>
        </div>
        <div className="flex items-center gap-1">
          <label
            htmlFor="img1"
            className="cursor-pointer border border-black w-[60px] h-[60px] overflow-hidden"
          >
            <img
              className="object-center  w-full h-full "
              src={
                img1 && img1 ? URL.createObjectURL(img1) : "/img/uploadpic.png"
              }
              alt=""
            />
            <input
              onChange={(e) => setimg1(e.target.files[0])}
              type="file"
              id="img1"
              hidden
            />
          </label>
          <label
            htmlFor="img2"
            className="cursor-pointer border border-black w-[60px] h-[60px] overflow-hidden"
          >
            <img
              className="object-center  w-full h-full "
              src={
                img2 && img2 ? URL.createObjectURL(img2) : "/img/uploadpic.png"
              }
              alt=""
            />
            <input
              onChange={(e) => setimg2(e.target.files[0])}
              type="file"
              id="img2"
              hidden
            />
          </label>
          <label
            htmlFor="img3"
            className="cursor-pointer border border-black w-[60px] h-[60px] overflow-hidden"
          >
            <img
              className="object-center  w-full h-full "
              src={
                img3 && img3 ? URL.createObjectURL(img3) : "/img/uploadpic.png"
              }
              alt=""
            />
            <input
              onChange={(e) => setimg3(e.target.files[0])}
              type="file"
              id="img3"
              hidden
            />
          </label>
          <label
            htmlFor="img4"
            className="cursor-pointer border border-black w-[60px] h-[60px] overflow-hidden"
          >
            <img
              className="object-center  w-full h-full "
              src={
                img4 && img4 ? URL.createObjectURL(img4) : "/img/uploadpic.png"
              }
              alt=""
            />
            <input
              onChange={(e) => setimg4(e.target.files[0])}
              type="file"
              id="img4"
              hidden
            />
          </label>
        </div>
        <div className="mt-2 flex  justify-between items-center">
          <input
            type="text"
            onChange={(e) => settitle(e.target.value)}
            required
            placeholder="PRODUCT TITTLE"
            className="px-3 py-1 rounded-lg border w-[300px] border-black"
          />
          <input
            type="text"
            onChange={(e) => setsubtitle(e.target.value)}
            required
            placeholder="PRODUCT SUBTITTLE"
            className="px-3 py-1 rounded-lg w-[300px]  border border-black"
          />
        </div>
        <div className="mt-2 flex  justify-between items-center">
          <select
            onChange={(e) => setcategory(e.target.value)}
            required
            className="px-3 py-1 rounded-lg w-[300px]  border border-black"
          >
            <option value="electronics">SELECT CATOGERY</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
          </select>
          <input
            type="text"
            onChange={(e) => setbrand(e.target.value)}
            placeholder="BRAND NAME"
            required
            className="px-3 py-1 rounded-lg w-[300px]  border border-black"
          />
        </div>
        <div className="mt-2">
          <textarea
            aria-required
            onChange={(e) => setdescription(e.target.value)}
            className="w-full px-3 py-1 rounded-lg  border border-black"
            placeholder="ADD PRODUCT DESCRIPTION"
          />
        </div>
        <div className="mt-2 flex  justify-between items-center">
          <input
            type="number"
            onChange={(e) => setprice(e.target.value)}
            required
            placeholder="PRICE"
            className="px-3 py-1 rounded-lg w-[120px]  border border-black"
          />
          <input
            type="number"
            onChange={(e) => setstock(e.target.value)}
            required
            placeholder="STOCK"
            className="px-3 py-1 rounded-lg w-[120px]  border border-black"
          />
          <select
            required
            onChange={(e) => setsale(e.target.value)}
            className="px-3 py-1 rounded-lg w-[120px]  border border-black"
          >
            <option>SELECT</option>
            <option>SALE</option>
            <option>NO SALE </option>
          </select>
          <input
            type="number"
            onChange={(e) => setdisscount(e.target.value)}   
            placeholder="Disscount"
            className="px-3 py-1 rounded-lg w-[120px]  border border-black"
          />
          <input
            type="number"
            onChange={(e) => setrating(e.target.value)}
            required
            placeholder="RATING"
            className="px-3 py-1 rounded-lg w-[120px]  border border-black"
          />
        </div>
        <div className="flex items-center mt-2">
          &nbsp;&nbsp;
          <input type="checkbox" required />
          <p className="font-semibold">Confirm all details</p>
        </div>
        <div className="mt-2">
          <button className=" rounded-lg w-full p-2 dark:bg-yellow-600 bg-orange-800 border border-black">
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addnewproductform;
