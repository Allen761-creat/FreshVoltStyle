import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   userlist : [],
   deleteuser:{},
   singleuser:null,
   error: null,
   productslist :[],
   product:null,
   deleteproduct:{},
   addproduct:{},
   deliverdorderlist:[],
   allorders:[],
   deleteorder:{},
   AllOrders:[],
   singleorder:null
  
   
   
}

const userSlice = createSlice({
    name:'AdminSlice',
    initialState,
reducers: {
  setuserlist (state,{payload}){
    state.userlist = payload
    
    },
    seterror (state,{payload}){
    state.error = payload
    },
    setdeleteuser(state,{payload}){
      state.deleteuser = payload
      state.userlist = state.userlist.filter((user)=> user._id !== state.deleteuser.user._id )
    
      },
      setsingleuser (state,{payload}){
        state.singleuser = payload
      },
      setproducts:(state,{payload})=>{
        state.loading = false;
        state.productslist = payload;
        state.error = false;

      },
      setproduct:(state,{payload})=>{
        state.loading = false;
        state.product = payload;
        state.error = false;
  },
  setdeleteproduct(state,{payload}){
    state.deleteproduct = payload
    state.productslist = state.productslist.filter((product)=> product._id !== state.deleteproduct.product._id )
  
    },
    setaddproduct(state,{payload}){
      state.addproduct = payload
      state.productslist = [...state.productslist, payload]
    },
    setdeliverdorderlist(state,{payload}){
      state.deliverdorderlist = payload
    },


    setallorders(state,{payload}){
      state.allorders = payload
    },
    setdeleteorder(state,{payload}){
      state.deleteorder = payload
      state.allorders = state.allorders.filter((order)=> order._id !==payload._id)
      state.deliverdorderlist = state.deliverdorderlist.filter((order)=> order._id !== payload._id)

     console.log(state.deleteorder)
    },
     setAllOrders(state,{payload}){
      state.AllOrders = payload
    },
    setsingleorder(state,{payload}){
      state.singleorder = payload
    }


    
    

    

   
   
      
      
    } /* reducerend */


  /* sliceend */







})



export const {setuserlist,setdeleteorder,setsingleorder, setdeliverdorderlist,setallorders,setsingleuser,setaddproduct,setdeleteproduct, seterror,setdeleteuser,setproducts,setproduct} = userSlice.actions;

export default userSlice.reducer;