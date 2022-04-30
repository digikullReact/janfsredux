import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import {increment,decrement} from "./slices/counterSlice";


function App() {

  const dispatch=useDispatch();


  const incrementClick=()=>{

    //console.log("hi")

    dispatch(increment());

    // --->dispatch an action -->

    // what action we have to dispatch ??

    // useDispatch hook --->present react-redux liobrary

  }


  const decrementClick=()=>{

    //console.log("hi")

    dispatch(decrement());

    // --->dispatch an action -->

    // what action we have to dispatch ??

    // useDispatch hook --->present react-redux liobrary

  }
  return (
    <div className="App">
      <button onClick={incrementClick}>

        Increment


      </button>

      <button onClick={decrementClick}>


Decrement


</button>
      
    </div>
  )
}

export default App
