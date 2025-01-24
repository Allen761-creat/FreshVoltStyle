import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { FaHeart } from "react-icons/fa";
import { Deletefromfavourite } from '../Redux/Actions/wishlistaction'
const Wishlist = () => {
  const  {favorite} = useSelector(state=>state.favoritesitems)
   const dispatch = useDispatch()
 const removehandler =(id)=>{
dispatch(Deletefromfavourite(id))
 }

  return (
    <div className='dark:bg-black w-full h-full'>&nbsp;
    {favorite.length == 0 ? null :<span><p className='text-center mb-2 font-extrabold dark:text-white'>you have {favorite.length} {favorite.length > 1 ? "products":"product" } in your wishlist </p></span>}
    
    
      {
        favorite.length > 0 ? favorite.map((item, index) => (
          <div key={index} className='dark:bg-black flex items-center justify-center'>
           
           <Container className='p-0 m-0'>
            
            <Row className='p-0 m-0'>
            <hr/>

            <div className='p-2  flex items-center  dark:text-white dark:bg-[purple] gap-10 shadow-lg '>
            
            <img src={item.image[0]} alt={item.name} className='w-[50px] h-[50px]' />
            <p className='text-[13px] tracking-tighter  font-semibold w-[200px] '>{item.title}</p>
            <p className='text-[13px] font-semibold w-[120px] text-center '>{item.price}<p className='inline text-[8px]'>(pkr)</p></p>
            <p className='text-[13px] d-lg-block d-xl-block d-xxl-block d-md-block d-none  w-[120px] text-center tracking-tighter whitespace-nowrap  font-semibold'>
            {item && item.stock ? (
                    <span className="font-bold text-[13px] text-green-600">
                      {item.stock ? (
                        item.stock === 1 ? (
                          <span className="font-bold text-[13px] whitespace-nowrap tracking-tighter text-red-600">
                            Only {item.stock} item left
                          </span>
                        ) : item.stock < 30 ? (
                          <span className="font-bold text-purple-600">
                            {item.stock} items left
                          </span>
                        ) : (
                          <span className="font-bold text-orange-500">
                            {item.stock} items left
                          </span>
                        )
                      ) : null}
                    </span>
                  ) : (
                    <span className="font-bold text-[13px] tracking-tighter whitespace-nowrap text-red-600">OUT OF STOCK</span>
                  )}
            </p>
            <p className='text-[13px] d-lg-block d-xl-block d-xxl-block d-md-block d-none  font-semibold w-[120px] text-center tracking-tighter whitespace-nowrap '>{item. category}</p>
           <button onClick={()=>removehandler(item.id)} className='p-1 border d-lg-block d-xl-block d-xxl-block d-md-block d-none border-black  rounded-lg bg-[#35d078] hover:bg-[seagreen]'>Remove</button>
           <Link to={`/singleproduct/${item.id}`}>
           <button className='p-1 border d-lg-block d-xl-block d-xxl-block d-md-block d-none border-black  rounded-lg bg-[#35d078] hover:bg-[seagreen]'>Details</button>
           </Link>
           <button onClick={()=>removehandler(item.id)} className='p-1 border d-lg-none d-xl-none d-xxl-none d-md-none text-[8px] font-semibold d-sm-block d-xs-block border-black  rounded-lg bg-[#35d078] hover:bg-[seagreen]'>Remove</button>
           
           </div>
            </Row>
           </Container>

          </div>
        )) : (
          <div className='max-h-screen dark:bg-black '>
          <div className='text-center mt-16  '>
            <FaHeart className='text-6xl text-red-500 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-red-500 mb-4'>Your wish list is empty </h2>
            <Link to='/' className=' text-purple-800 hover:underline font-bold'>
              Go to product page to add new items
            </Link>
          </div>
          </div>
        )
      }
    </div>
  )
}

export default Wishlist
