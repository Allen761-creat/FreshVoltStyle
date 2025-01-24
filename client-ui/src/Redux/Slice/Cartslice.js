import { createSlice } from '@reduxjs/toolkit'
import { subtotalCalc,updatelocalstorage } from '../../Functions/Cart'

const initialState ={

    loading: false,
    error: null,
    cartitems : JSON.parse(localStorage.getItem('cart')) ??  [],
   shipping:JSON.parse(localStorage.getItem('shipping')) ?? 300,
   subtotal: localStorage.getItem("cart") ? subtotalCalc(JSON.parse(localStorage.getItem("cart"))) : 0 ,
  

}

const cartSlice = createSlice({
name: 'cart',
    initialState,
    reducers: {
        setloading:(state)=>{
            state.loading = true
        },
        seterror:(state,{payload})=>{
            state.loading = false
            state.error = payload
        },
        additem:(state,{payload})=>{
            const existitem = state.cartitems.find((item)=> item.id === payload.id)
            if(existitem){
                state.cartitems = state.cartitems.map((item)=>item.id === existitem.id ? payload : item)
               
            }
            else{
                state.cartitems = [...state.cartitems, payload]
                
            }
            setloading(false)
            seterror(null)
            updatelocalstorage(state.cartitems)
            state.subtotal =Number(subtotalCalc(state.cartitems))
           

        },
        removeitem:(state,{payload})=>{
            state.cartitems = state.cartitems.filter((item)=> item.id!== payload)
            setloading(false)
            seterror(null)
            updatelocalstorage(state.cartitems)
            state.subtotal =Number(subtotalCalc(state.cartitems))

        },
        clearcart:(state)=>{
            localStorage.removeItem("cart");
            localStorage.removeItem('shipping');
            localStorage.removeItem('subtotal');
            state.cartitems = [];
            state.shipping = 200;
            state.subtotal = 0;
            state.total = 0;
            setloading(false);
            seterror(null);
        },
        setshipping:(state,{payload})=>{
          state.shipping = payload
         localStorage.setItem('shipping', state.shipping)
        },



        
    }

})

export const { setloading, seterror, additem, removeitem, clearcart, setshipping } = cartSlice.actions

export default cartSlice.reducer