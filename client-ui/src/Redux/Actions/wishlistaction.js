import axios from "axios";
import apis from "../../Config/Apis";
import { salecalculator } from "../../Functions/Price";
import { addfavorite, removefavorite } from "../Slice/wishlistslice";

export const Addtofavourite = (id)=>async(dispatch)=>{
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
        
    }
    dispatch(addfavorite(item));
}

export const Deletefromfavourite = (id)=>async(dispatch)=>{
  dispatch(removefavorite(id))
}