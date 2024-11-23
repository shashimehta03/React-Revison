import React from "react"
import { useState } from "react";
import { useEffect } from "react";
const Two = () => {
    const list = [{ name: 'apple' ,age:0}, { name: 'banana',age:3 }, { name: 'cherry',age:4 }];
    const listFil=[1,2,3,4,5,6,7,8,9,2];
    function isEven(x){
        return x%2==0;
      }
    function sum(x,add){
        return add +x;
    }
    return (
    <div>
      <h1>filter and map</h1>
      {
        list.map((item,index)=>(
            <h3 key={index}>{item.name} {item.age}</h3>
        ))
        
      }
      
      
      {
        listFil.filter(isEven)
        .map((item,index)=>(
            <h3 key={index}>{item}</h3>
        ))
        
      }

      {
        <h3>{listFil.reduce(sum,0)}</h3> 
      }
    
    


      
    </div>
  )
};

export default Two;  


