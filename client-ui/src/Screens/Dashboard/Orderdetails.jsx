





import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader'
import Metadata from '../../Functions/Metadata';
import { fetchorderBYId,  } from '../../Redux/Actions/adminactions';
import SingleOrderDetail from '../../Layouts/SingleOrderDetail';

const OrderDetail = () => {
const [loading,setloading]=useState(true)
 
    const {id} = useParams()
    console.log(id)
    const dispatch = useDispatch();
    const { singleorder  } = useSelector(state => state.AdminSlice);
    console.log(singleorder)
    useEffect(()=>{
        dispatch(fetchorderBYId(id))
        
        const timer = setTimeout(() => {
          setloading(false);
        }, 1000);
    },[])
    
  return (
    <div>
    
      <Metadata title={ `${singleorder && singleorder.username} ` } />
     {
        loading ?<Loader/>:<>
                      <SingleOrderDetail order = {singleorder} />  
                      </>      
     } 
     
    </div>
  )
}

export default OrderDetail

