import { createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../../../utilities/constant/MovielistData";

const initialState = {
    favArr: MovieList
}

export const likeSlice = createSlice({
    name: 'FavArray',
    initialState,
    reducers:{
        setFavourite: (state,action) => {
            const movieIndex = state.favArr.findIndex((movie) => movie.id === action.payload) ;
            state.favArr[movieIndex].like = !state.favArr[movieIndex].like
        }
    }
})

export const {setFavourite} = likeSlice.actions
export default likeSlice.reducer