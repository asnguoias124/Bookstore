import { configureStore} from '@reduxjs/toolkit';
import bookReducer from '../reducers/bookSlice';
// src/store.js
const store = configureStore({
    reducer: {
        books: bookReducer
    }
    ,
})

export default store;