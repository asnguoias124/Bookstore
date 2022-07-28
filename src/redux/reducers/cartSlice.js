import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cart:[],
    TotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addBooks: (state, action) =>{

            const ItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            const tempBook = {...action.payload, cartQty:1}

            if(ItemIndex >= 0){
                state.cart[ItemIndex].cartQty += 1;
                toast.info(`Đã thêm số lượng sách của ${state.cart[ItemIndex].volumeInfo.title}`,{
                    position:  'bottom-left'
                })
            }
            else{
               
                state.cart.push(tempBook)
                toast.info(`Đã thêm sách ${action.payload.volumeInfo.title}  vào giỏ hàng`,{
                    position:  'bottom-left'
                })
            }
           

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
            toast.error(`Đã loại hết sản phẩm khỏi giỏ hàng`,{
                position:  'bottom-left'
            })
        },

        Checkout: (state) =>{
            state.cart = [];
            toast.success(`Đã Checkout`,{
                position:  'bottom-left'
            })
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
        },

    }
})

export const {addBooks, removeFromCart, decreaseCart, clearCart,Checkout, getTotal} = cartSlice.actions;
export default cartSlice.reducer;