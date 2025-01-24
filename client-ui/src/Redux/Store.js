 import { combineReducers,configureStore } from '@reduxjs/toolkit'
import products from '../Redux/Slice/Productslice'
import cart from '../Redux/Slice/Cartslice'
import AdminSlice from '../Redux/Slice/admin'
import favoritesitems from '../Redux/Slice/wishlistslice'


 const reducer = combineReducers({

products,
cart,
AdminSlice,
favoritesitems,
    
 });


 const store = configureStore({ reducer });




 export default store;