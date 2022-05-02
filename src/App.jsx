import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch ,useSelector } from 'react-redux'
import {increment,decrement,multipliyByAmounty,incrementByAmount} from "./slices/counterSlice";
import Todo from './components/Todo';


function App() {

  const dispatch=useDispatch();

  const state=useSelector(state=>state.counterSlice)


  const incrementClick=()=>{

    //console.log("hi")

    dispatch(incrementByAmount(22));

    // --->dispatch an action -->

    // what action we have to dispatch ??

    // useDispatch hook --->present react-redux liobrary

  }



  const multiplyclick=()=>{
    dispatch(multipliyByAmounty())

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
      {
        /**
         * 
         *  <h1>
      {
        state.value
      }
      </h1>
   
      <button onClick={incrementClick}>

        Increment


      </button>

      <button onClick={decrementClick}>


Decrement


</button>


<button onClick={multiplyclick}>


Multiply


</button>
         */
      }

      <Todo/>
     
      
    </div>
  )
}

export default App
