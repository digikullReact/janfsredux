import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
items:[],
address:""

}

const todoslice=createSlice({
    name: 'todo',

    initialState,
    reducers:{

        addItems:(state,action)=>{
         
            state.items.push(action.payload);

        },
        deleteItem:(state,action)=>{

           const filteredItems= state.items.filter(ele=>ele.id!=action.payload)
           state.items=filteredItems;

        
            // your delete logic will go 

        }
        
    }




})


// slice is composed of two things -->reducer /action

console.log("Todoslice----",todoslice)


// Action creators are generated for each case reducer function
export const { addItems ,deleteItem} = todoslice.actions

export default todoslice.reducer