import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Gallery from "../Components/Gallery";
import { addcomma, salecalculator } from "../Functions/Price";
import Rating from "../Functions/Rating";
import Btn from "../Components/Btn";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/Cartactions";
import { cartToast } from "../Functions/Message";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Productdetail = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const  {cartitems} =  useSelector(state => state.cart);
  const dispatch = useDispatch()
  const additem = (id3 ,amount)=>{
    if(cartitems && cartitems.some((cartitem1) => cartitem1.id === id3)){
       const  item = cartitems.find((cartitem2)=>cartitem2.id === id3);
       if(item.qty < item.stock)
       dispatch(addToCart(id3,item.qty + amount ))
       cartToast(" item added to cart")
      }
      else{
       
          dispatch(addToCart(id3,amount))
          cartToast(" item added to cart")
      }
    }
    const changeAmount = (input) => {
      if (input === "plus") {
        setAmount(amount + 1);
       
      }
      if (input === "minus") {
        setAmount(amount - 1);
      }
    };
  const finalPrice = salecalculator(
    product && product.onsale,
    product && product.price,
    product && product.discount
  );
  const saleprice = addcomma(finalPrice);
  const img = product && product.image;
  const sale = product && product.onsale;
 

  return (
    <div className="dark:bg-black dark:text-gray-300">
    <div >
      <Container>
        <Row >
          <Col className="mt-4" xs={12} sm={12} lg={6} md={6} xl={6} xxl={6}>
            {img ? (
              <Gallery images={img} /> 
            ) : (
              <img src={product && product.image[0].url} alt="" />
            )}
          </Col>
          <Col xs={12} sm={12} lg={6} md={6} xl={6} xxl={6} className="mt-4">
            <div>
              <h1 className="font-extrabold text-[35px] text-center ">
                {product && product.brand}
              </h1>
              <h1 className="font-bold text-[25px] uppercase text-center">
                {product && product.title}
              </h1>
              <br />
              <p className="text-[20px] dark:text-gray-300 inline font-semibold">
                <p className="inline text-[25px]  ">Category: </p>{" "}
                {product && product.category}
              </p>
              <p className="tracking-tighter dark:text-gray-300 ">
                <p className="font-semibold text-[25px] ">Detail</p>{" "}
                {product && product.description}
              </p>
              <Rating product={product && product && product} />
              <p className="text-red-600 font-extrabold dark:text-gray-300 text-[25px]">
                <h1 className="font-semibold text-[25px] inline   ">
                  Price
                </h1>{" "}
                &nbsp;&nbsp;&nbsp;
                {sale ? (
                  <div className="inline ">
                    <strike className="font-normal text-red-600 ">
                      {product && product.price}
                    </strike>
                    <div className="inline text-green-600 relative left-3">
                      {saleprice}
                      <p className="text-[10px] inline text-black relative ">
                        PKR
                      </p>
                    </div>
                  </div>
                ) : (
                  <span className=" text-red-600 font-bold ">
                    {product && product.price}
                    <p className="text-[10px] inline text-black relative ">
                      PKR
                    </p>
                  </span>
                )}
              </p>

              <p>Reviews: {product && product.reviews}</p>

              {product && product.stock ? (
                <span className="font-bold text-green-600">
                  In STOCK &nbsp;&nbsp;&nbsp;
                  {product.stock ? (
                    product.stock === 1 ? (
                      <span className="font-bold text-red-600">
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
                <span className="font-bold text-red-600">OUT OF STOCK</span>
              )}
            </div>
            <br />
            {/* <Btn/> */}

            <div className="flex items-center my-2 ">
            <div className="flex items-center ml-4">
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-l"
                disabled={amount <= 1} onClick={() => changeAmount("minus")}>
                <FaMinus />
              </button>
              <div className="bg-gray-100 dark:bg-yellow-400 dark:text-white text-gray-700 py-1 px-4">{amount}</div>
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-r"
               onClick={() => changeAmount("plus")}
               disabled={product&&product.stock <= amount}
               >
                <FaPlus />
              </button>
            </div>
          </div>

            <br />
            <button onClick={()=>additem(product && product._id , amount )} 
            disabled ={ product && product.stock < 1  }
            title={ product && product.stock < 1 && "out of stock"}
            className="  bg-orange-500  text-white text-[25px]  font-extrabold flex justify-center items-center p-2 w-full">ADD TO CART</button>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Productdetail;
