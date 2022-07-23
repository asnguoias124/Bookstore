import { configureStore, createReducer} from '@reduxjs/toolkit';
import bookReducer, { getTotal } from '../reducers/bookSlice';
import cartReducer from '../reducers/bookSlice';
// src/store.js
const store = configureStore({
    reducer: {
        books: bookReducer,
        cart: cartReducer,
    }
    ,
})

store.dispatch(getTotal());

export default store;