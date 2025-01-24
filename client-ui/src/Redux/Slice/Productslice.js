import {createSlice } from '@reduxjs/toolkit'
  



const initialState ={

 loading: false,
 error: null,
 products :[],
 product:null,
 paginations:{},
 favoritesToggled: false,
favorites: JSON.parse(localStorage.getItem("favorites")) ?? [],
 }


const productslice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       setloading:(state)=>{
       state.loading = true;
       },
       setproducts:(state,{payload})=>{
        state.loading = false;
        state.products = payload;
        state.error = false;

      },
    seterror:(state,{payload})=>{
        state.loading = false;
        state.error = payload;
    },
      setproduct:(state,{payload})=>{
            state.loading = false;
            state.product = payload;
            state.error = false;
      },
      setPagination:(state,{payload})=>{
        state.paginations = payload;
      },
      setFavorites: (state, { payload }) => {
        state.favorites = payload;
      },
      setFavoritesToggle: (state, { payload }) => {
        state.favoritesToggled = payload;
      },
}

}) 




export const {setloading, setproducts, setFavorites,setFavoritesToggle, seterror ,setPagination,setproduct} = productslice.actions;
export default productslice.reducer;