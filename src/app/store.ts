import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './feature/likeSlice/likeSlice'
import langSlice from './feature/langSlice/langSlice'
import authSlice from './feature/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    FavArray: likeSlice,
    Lang: langSlice,
    auth: authSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch