// import apis from '../../Config/Apis'
import apis from '../../Config/Apis'
import  {seterror,setloading,setproducts,setproduct, setPagination, setFavorites, setFavoritesToggle } from '../Slice/Productslice'
import axios from 'axios'
export const fetchProducts = () => async (dispatch) => {
     dispatch(setloading())
    


try {

    const resp =await axios.get(`${apis[1]}`)
    const data = resp.data
    dispatch(setproducts(data))
    dispatch(setPagination(data.pagination))
    
   

    
} catch (error) {
    dispatch(seterror("Something went wrong while fetching products" + error.message))
    dispatch(setloading(false))

    
}

}


export const fetchProductsBYId = (id) => async (dispatch) => {
    dispatch(setloading())
    
try {
   const resp =await axios.get(`${apis[1]}/${id}`)
   const data = resp.data
   dispatch(setproduct(data))
   

   
} catch (error) {
   dispatch(seterror("Something went wrong while fetching products" + error.message))
   dispatch(setloading(false))

   
}

}



  
  
  
  
