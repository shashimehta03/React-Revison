import React from "react"
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { increment } from "./features/counter/counterSlice";
import { decrement } from "./features/counter/counterSlice";
import {reset} from "./features/counter/counterSlice";
import { incrementByAmount} from "./features/counter/counterSlice";

const Reduxcom = (props) => {
    const [amount, setAmount]=useState(0);
    const count=useSelector((state)=>state.counter.value); //this is the way to get the value from the store
    const dispatch=useDispatch();
    const handelIncrement = () => {
        dispatch(increment());
    }
    const handelDecrement = () => {
        dispatch(decrement());

    }
    const Handelreset = () => {
        dispatch(reset());
    }
    const HandelSumit =()=>{
        dispatch(incrementByAmount(amount));
    }
  return (
    <div>
       <h1>Redux toolkit hai bhaii</h1>
       <button onClick={handelIncrement}>Increment</button>
       <p>count:{count}</p>
         <button onClick={handelDecrement}>Decrement</button>
         <button onClick={Handelreset}>Reset</button>
       
     
         <br/>
         <br/>
         <input type='number' placeholder="Enter Amount" value={amount} 
         onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={HandelSumit}>Increment By Amount</button>

    </div>
  )
};

export default Reduxcom;
