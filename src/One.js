import React from "react"
import { useState } from "react";

const One = () => {
    const [count ,SetCount]=useState(0);
    const increment=()=>{
        SetCount(count+1);
    }
  return (
    <div>
     <h1>helllo</h1>
     <button onClick={increment}>Button</button>
     <h3>number of incremnt:{count}</h3>
    </div>
  )
};

export default One;
