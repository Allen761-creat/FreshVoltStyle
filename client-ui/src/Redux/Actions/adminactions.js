import { setuserlist,seterror, setdeleteuser,  setsingleuser, setproducts, setproduct, setdeleteproduct, setaddproduct,   setdeliverdorderlist, setallorders, setdeleteorder, setsingleorder } from "../Slice/admin";
import apis from '../../Config/Apis'
import  axios  from 'axios';
export const fetchallusers =  ()=>async (dispatch) =>{

try {
    const {data} = await axios.get(`${apis[2]}/users`)
    dispatch(setuserlist(data))
} catch (error) {
    console.log(error);
    dispatch(seterror("Something went wrong while fetching users"))
}

}
export const fetchUserBYId = (id) => async (dispatch) => {
    try {
        console.log(id ,"action")
       const resp =await axios.get(`${apis[2]}/user/${id}`)
       const data = resp.data
      dispatch(setsingleuser(data))
       
    
    } catch (error) {
       dispatch(seterror("Something went wrong while fetching products" + error.message))
    }
    
}
export const removeuser =  (ID)=>async (dispatch) =>{
    try {
        const userdata = {
            id: ID
          };
        const {data} = await axios.post(`${apis[2]}/deleteuser`,userdata)
        dispatch(setdeleteuser(data))  
        
    } catch (error) {
        console.log(error);
        
    }
}

export const fetchProducts = () => async (dispatch) => {
   
try {
   const resp =await axios.get(`${apis[1]}`)
   const data = resp.data
   dispatch(setproducts(data))
   console.log(data)

   
} catch (error) {
   dispatch(seterror("Something went wrong while fetching products" + error.message))
  

   
}

}
export const removeproduct =  (ID)=>async (dispatch) =>{
    try {
        const userdata = {
            id: ID
          };
        const {data} = await axios.post(`${apis[2]}/deleteproduct`,userdata)
        dispatch(setdeleteproduct(data))  
        
    } catch (error) {
        console.log(error);
        
    }
}
export const fetchProductsBYId = (id) => async (dispatch) => {
   
    
try {
   const resp =await axios.get(`${apis[1]}/${id}`)
   const data = resp.data
   dispatch(setproduct(data))
   console.log(data)

   
} catch (error) {
   dispatch(seterror("Something went wrong while fetching products" + error.message))
  

   
}

}
export const addnewproduct =(formData)=>async(dispatch)=>{
    try {
const data = await axios.post(`${apis[2]}/addproduct`,
    formData,{
        headers: {
            'Content-Type':'multipart/form-data'
        }
    }
)
dispatch(setaddproduct(data));
    }
    catch (error) {
        console.log(error);  
    }
}
export const DeliverdOrders =()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`${apis[3]}/deliverd`)
    dispatch((setdeliverdorderlist(data)));
    console.log(data)

    } catch (error) {
        console.log(error);
    }

}
export const PendingOrders =()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`${apis[3]}/pending`)
    dispatch((setallorders(data)));

    } catch (error) {
        console.log(error);
    }

}
export const removeorder =  (ID)=>async (dispatch) =>{
    try {
        
        const {data} = await axios.delete(`${apis[3]}/${ID}`)
        dispatch(setdeleteorder(data)) 
        console.log(data) 
        
    } catch (error) {
        console.log(error);
        
    }
}
export const fetchorderBYId = (id) => async (dispatch) => {
    try {
       const resp =await axios.get(`${apis[3]}/singleorder/${id}`)
       const data = resp.data
       dispatch(setsingleorder(data))
       console.log(data)
    
       
    } catch (error) {
       dispatch(seterror("Something went wrong while fetching products" + error.message))
      
    
       
    }
    
}



