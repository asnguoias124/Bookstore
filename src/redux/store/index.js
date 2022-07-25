import { configureStore } from '@reduxjs/toolkit';
import { default as bookReducer } from '../reducers/bookSlice';
import FavoriteSlice from '../reducers/FavoriteSlice';
import {default as cartReducer, getTotal} from '../reducers/cartSlice';
// src/store.js
const store = configureStore({
    reducer: {
        books: bookReducer,
        cart: cartReducer,
        favoriteBook: FavoriteSlice,
    }
    
})

store.dispatch(getTotal());

export default store;