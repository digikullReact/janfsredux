import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

// Here we have async actions

export const toDo=createAsyncThunk( 'todo/fetchTodo',



async () => {

    // Where you will write the logic for api call
    const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response.data;
    
  }
  )


  export const getTodo=createAsyncThunk( 'todo/getTodo',



async () => {

    debugger;

    // Where you will write the logic for api call
    const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response.data;
    
  }
  )

  