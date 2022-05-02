import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
items:[]

}

const todoslice=createSlice({
    name: 'todo',

    initialState,
    reducers:{

        addItems:(state,action)=>{
            state.items.push(action.payload);

        }
        
    }




})


// slice is composed of two things -->reducer /action

console.log("Todoslice----",todoslice)


// Action creators are generated for each case reducer function
export const { addItems } = todoslice.actions

export default todoslice.reducer