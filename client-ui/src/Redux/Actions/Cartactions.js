
import { seterror,setloading,setshipping,additem,clearcart,removeitem} from '../Slice/Cartslice'
import apis from '../../Config/Apis'

import  axios  from 'axios';
import { salecalculator } from '../../Functions/Price';

export const addToCart = (id,qty) => async (dispatch) => {
 dispatch(setloading(false));
 try {
    const {data} = await axios.get(`${apis[1]}/${id}`);
    const {_id,title,price,description,image,category,brand,stock,instock,onsale,discount} = data;
    const newprice = salecalculator(onsale,price,discount)
    const item = {
        id : _id,
        title: title,
        price: newprice,
        description: description,
        image:image,
        category: category,
        brand: brand,
        stock: stock,
        instock: instock,
        onsale: onsale,
        discount: discount,
        qty,
    }
    dispatch(additem(item));
}
 catch(error){
    dispatch(seterror(error.message));
 }
}

export const removeFromCart = (id) => (dispatch) => {
   
    dispatch(removeitem(id));
}
export const shippingcost = (value) => (dispatch) => {
   
    dispatch(setshipping(value));
}
export const resetcart = () => (dispatch) => {
    dispatch(clearcart());
}