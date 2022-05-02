import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,

}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
      //action
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    addItems: (state) => {
      state.value -= 1
    },
    multipliyByAmounty:(state)=>{
      state.value *= 2
    },
    incrementByAmount: (state, action) => {
      debugger;
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,multipliyByAmounty } = counterSlice.actions

export default counterSlice.reducer