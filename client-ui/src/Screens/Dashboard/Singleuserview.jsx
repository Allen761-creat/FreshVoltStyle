


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader'
import Metadata from '../../Functions/Metadata';
import Singleuserdetails from '../../Layouts/Singleuserdetails';
import { fetchUserBYId } from '../../Redux/Actions/adminactions';

const Singleuserview = () => {
const [loading,setloading]=useState(true)
 
    const {id} = useParams()
    console.log(id)
    const dispatch = useDispatch();
    const { singleuser  } = useSelector(state => state.AdminSlice);
    console.log(singleuser)
    useEffect(()=>{
        dispatch(fetchUserBYId(id))
        
        const timer = setTimeout(() => {
          setloading(false);
        }, 1000);
    },[])
    
  return (
    <div>
    
      <Metadata title={ `${singleuser && singleuser.name} ` } />
     {
        loading ?<Loader/>:<>
        <Singleuserdetails user={singleuser} />
       
        </>
     }
    </div>
  )
}

export default Singleuserview

