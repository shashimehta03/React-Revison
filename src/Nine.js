import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react"

const Nine = (props) => {
  function reducer(state,action){
    switch(action.type){
      case 'INCREMENT':
        return {count:state.count+1};
      case 'DECREMENT':
        return {count:state.count-1};
      case 'RESET':
        return {count :state.count*0};
    }
  }
  const [state ,dispatch] =useReducer(reducer,{count:0});
  return (
    <div>
      <h1>counter app using use reducer</h1>
      <br/>
      <p1>count:{state.count} </p1>
      <br/>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+ </button>
      <br/>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
      <br/>
      <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
    </div>
  )
};

export default Nine;
