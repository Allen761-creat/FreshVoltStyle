
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader'
import { fetchProductsBYId } from '../../Redux/Actions/Productaction'
import Metadata from '../../Functions/Metadata';
import Singleproductdetail from '../../Layouts/Singleproductdetail';

const Singleproduct = () => {

 
    const {id} =useParams()
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.products);
    console.log(product)
    useEffect(()=>{
        dispatch(fetchProductsBYId(id))
    },[])
    
  return (
    <div>
      
      <Metadata title={ `${product && product.title} ` } />
     {
        loading?<Loader/>:<>
        <Singleproductdetail product={product} />
       
        </>
     }
    </div>
  )
}

export default Singleproduct

