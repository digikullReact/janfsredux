import { createSlice } from '@reduxjs/toolkit'

import { toDo,getTodo } from '../thunks/todo';

const initialState = {
 
items:[],
address:"",

obj:{}

}

const todoslice=createSlice({
    name: 'todo',

    initialState,
    reducers:{

        addItems:(state,action)=>{
         
            state.items.push(action.payload);

        },
        deleteItem:(state,action)=>{

            // here the action would contain the data from the user --->

           const filteredItems= state.items.filter(ele=>ele.id!=action.payload)
           state.items=filteredItems;

        
            // your delete logic will go 

        }
        
    },
    extraReducers: (builder) => {

        //the 

        builder.addCase(toDo.pending,(state,action)=>{




        }),

        builder.addCase(toDo.fulfilled,(state,action)=>{
            
            state.obj=action.payload;

        }),


         builder.addCase(toDo.rejected,(state,action)=>{
           

         }),

         // Get To do Actions REducer

         builder.addCase(getTodo.pending,(state,action)=>{

            debugger;




        }),

        builder.addCase(getTodo.fulfilled,(state,action)=>{
            debugger;
            state.obj=action.payload;

        }),
         builder.addCase(getTodo.rejected,(state,action)=>{

         })
    
      
      },




})


// slice is composed of two things -->reducer /action

console.log("Todoslice----",todoslice)


// Action creators are generated for each case reducer function
export const { addItems ,deleteItem} = todoslice.actions

export default todoslice.reducer