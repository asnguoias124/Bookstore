import React from 'react'
import PropTypes from 'prop-types'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { bookApiKey } from '../../api/bookApiKey'
import bookApi from '../../api/bookApi'
import { ToastContainer, toast } from 'react-toastify'

export const fetchAsyncBooks = createAsyncThunk('books/fetchAsyncBooks', async (term) =>{
    const search = 'javascript'
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
    cart:[],
    books: [],
    magazines: [],
    selectedBooks: [],
    TotalQuantity: 0,
    cartTotalAmount: 0,
}
 const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBooks: (state, action) =>{
            const ItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if(ItemIndex >= 0){
                state.cart[ItemIndex].cartQty += 1;
                toast.info(`Đã thêm số lượng sách của ${state.cart[ItemIndex].volumeInfo.title}`,{
                    position:  'bottom-left'
                })
            }else{
                const tempBook = {...action.payload, cartQty:1}
                state.cart.push(tempBook)
                toast.info(`Đã thêm sách ${action.payload.volumeInfo.title}  vào giỏ hàng`,{
                    position:  'bottom-left'
                })
            }

        },
        removeSelectedBook: (state) =>{
            state.selectedBooks = [];
        },
        removeFromCart: (state,action) =>{
           const nextCartItems =  state.cart.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            toast.error(`Đã loại ${action.payload.volumeInfo.title}  khỏi giỏ hàng`,{
                position:  'bottom-left'
            })
            state.cart = nextCartItems; 
        },
        decreaseCart: (state,action) =>{
            const itemIndex = state.cart.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cart[itemIndex].cartQty > 1){
                state.cart[itemIndex].cartQty -= 1

                toast.error(`Đã loại một ${action.payload.volumeInfo.title}  khỏi giỏ hàng`,{
                    position:  'bottom-left'
                })
            }else if(state.cart[itemIndex].cartQty === 1){
                const nextCartItems =  state.cart.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                toast.error(`Đã loại ${action.payload.volumeInfo.title}  khỏi giỏ hàng`,{
                    position:  'bottom-left'
                })
                state.cart = nextCartItems; 
            }
        },
        clearCart: (state) =>{
            state.cart = [];
            toast.error(`Đã loại hết sách khỏi giỏ hàng`,{
                position:  'bottom-left'
            })
        },
        Checkout: (state) =>{
            state.cart = [];
            toast.success(`Đã Checkout`,{
                position:  'bottom-left'
            })
        },
        getTotal(state,action){

           let {total, quantity} = state.cart.reduce((cartTotal,cartItem) =>{
                const { cartQty} = cartItem;
                const itemTotal= cartItem.saleInfo.listPrice.amount * cartQty
                
                cartTotal.total += itemTotal;
                cartTotal.quantity += 1;

                return cartTotal;
            },{
                total: 0,
                quantity: 0,
            })

            state.TotalQuantity = quantity;
            state.cartTotalAmount = total
        }
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

    }
})

export const {addBooks, removeFromCart, decreaseCart, clearCart,Checkout, getTotal} = bookSlice.actions;
export const {removeSelectedBook} = bookSlice.actions;
export const getAllBooks = (state) => state.books.books;
export const getAllMagazines = (state) => state.books.magazines;
export const getSelectedBook = (state) => state.books.selectedBooks;
export default bookSlice.reducer;