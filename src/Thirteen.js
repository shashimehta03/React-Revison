import React, { useState } from "react"

const Thirteen = (props) => {
    const [state,setState]=useState({
        count:0,
        text:"hello malik",
        active:true
    });
    const incrmentcnt=()=>{
        setState({...state,count:state.count+1});
    }
    const changetext=()=>{
        setState({...state,text:'updated text'})
    }
    const handelactive=()=>{
        setState({...state,active:!state.active})
    }
  return (

    <div>
      <h1>Multipe state in on State</h1>
      <p>Count:{state.count}</p>
      <p>Text:{state.text}</p>
      <p>active:{state.active ?"YES":"NO"}</p>

      <button onClick={incrmentcnt}>incremnt</button>
      <button onClick={changetext}>change text</button>
      <button onClick={handelactive}>active</button>
    </div>
  )
};

export default Thirteen;
