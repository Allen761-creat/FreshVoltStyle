import { createSlice } from "@reduxjs/toolkit";
import { updatelocalstorage } from "../../Functions/wishlist";

const initialState = {
    loading: false,
    error: null,
    favorite: JSON.parse(localStorage.getItem("wishlist"))?? [],
}

const favoriteSlice = createSlice({
    name: "favoritesitems",
    initialState,
    reducers:{
        setloading:(state)=>{
            state.loading = true
        },
        seterror:(state,{payload})=>{
            state.loading = false
            state.error = payload
        },
        addfavorite:(state,{payload})=>{
        const existitem = state.favorite.find((item)=> item.id === payload.id)
        if(existitem){
            state.favorite = state.favorite.map((item)=>item.id === existitem.id ? payload : item)
        }
        else{
            state.favorite = [...state.favorite, payload]
        }
           setloading(false)
           updatelocalstorage(state.favorite)

        },
        removefavorite:(state,{payload})=>{
                state.favorite = state.favorite.filter((item)=> item.id!== payload)
                setloading(false)
                updatelocalstorage(state.favorite)
        }
             }
})

export const { setloading, seterror, addfavorite, removefavorite } = favoriteSlice.actions

export default favoriteSlice.reducer;