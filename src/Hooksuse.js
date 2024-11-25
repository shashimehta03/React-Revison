import React from "react"
import { useEffect } from "react";
import { useState } from "react";

const Use = () => {
    const [count,setCount]=useState(0);
    const handelclick=()=>{
        setCount(count+1);
    }
    // useEffect(()=>{
    //     alert("render on each re-load")
    // });
    // useEffect(()=>{
    //     alert("render on each re-load only in first renser")
    // },[]);
    useEffect(()=>{
        alert("render on each re-load only in first renser")
    },[count]); //now it will only run when count is updated


  return (
    <div>
      <h1>using useEffect hooks</h1>
      <br/>
      <button onClick={handelclick}>Click me</button>
      <br/>
      <h3>the number of click is :{count}</h3>
    </div>
  )
};

export default Use;
