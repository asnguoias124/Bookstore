import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    favoriteBook:[],
}

const favoriteBookSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        addFavoriteBooks: (state, action) =>{

            const FavIndex = state.favoriteBook.findIndex(item => item.id === action.payload.id);
            const tempFavBook = {...action.payload}

            if(FavIndex >= 0){
                toast.error(`Đã loại  ${state.favoriteBook[FavIndex].volumeInfo.title} khỏi mục ưa thích`,{
                    position:  'bottom-left'
                })
                state.favoriteBook.pop(tempFavBook)
               
            }
            else{
               
                state.favoriteBook.push(tempFavBook)
                toast.info(`Đã thêm  ${action.payload.volumeInfo.title}  vào mục ưa thích`,{
                    position:  'bottom-left'
                })
            }
           

        },
    }
})

export const { addFavoriteBooks} = favoriteBookSlice.actions;
export default favoriteBookSlice.reducer;