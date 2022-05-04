import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import todoslice from '../slices/todoslice'

export const store = configureStore({
  reducer: {
      counterSlice:counterSlice,
      todoslicec:todoslice
  },
})