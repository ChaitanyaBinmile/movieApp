import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './feature/likeSlice/likeSlice'

export const store = configureStore({
  reducer: {
    FavArray: likeSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch