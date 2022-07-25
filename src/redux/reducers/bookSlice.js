import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { bookApiKey } from '../../api/bookApiKey'

export const fetchAsyncBooks = createAsyncThunk('books/fetchAsyncBooks', async (term) =>{
 
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term  +'&key=' + bookApiKey + '&maxResults=20 ')

  return response.data.items;
})

export const fetchAsyncMagazine = createAsyncThunk('books/fetchAsyncMagazines', async () =>{

    const search = 'javascript'
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search  +'&key=' + bookApiKey + '&maxResults=19')

  return response.data.items;
})

export const fetchAsyncBookDetail = createAsyncThunk('books/fetchAsyncSelectedBook', async (id) =>{

  
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes/' + id  +'?key=' + bookApiKey )

  return response.data;
})


const initialState ={
    books: [],
    magazines: [],
    selectedBooks: [],
}
 const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        removeSelectedBook: (state) =>{
            state.selectedBooks = [];
        },


    },
    extraReducers:{
        [fetchAsyncBooks.pending]: () =>{
            console.log("Pending");
        },
        [fetchAsyncBooks.fulfilled]: (state, {payload}) =>{
            console.log("Fetch Succesfully");
            return {...state, books: payload.filter(curr => !!curr.saleInfo.isEbook  )}
        },
        [fetchAsyncBooks.rejected]: () =>{
            console.log("Reject");
        },
      
        [fetchAsyncMagazine.fulfilled]: (state, {payload}) =>{
            console.log("Fetch Succesfully");
            return {...state, magazines: payload.filter(curr => !!curr.saleInfo.isEbook  )}
        },
        [fetchAsyncBookDetail.fulfilled]: (state, {payload}) =>{
            console.log("Fetch Succesfully");
            return {...state, selectedBooks: payload}
        },

    },
})

export const {removeSelectedBook} = bookSlice.actions;
export const getAllBooks = (state) => state.books.books;
export const getAllMagazines = (state) => state.books.magazines;
export const getSelectedBook = (state) => state.books.selectedBooks;
export default bookSlice.reducer;