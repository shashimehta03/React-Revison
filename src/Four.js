import React, { useState } from "react"


const Four = (props) => {
    const [Toggle, SetToggle]=useState(false);
    const handeltoggle=()=>{
        SetToggle(!Toggle);
    }
  return (
    <div style={{align:"center"}}>
      <div>
        <input type="checkbox" onChange={handeltoggle}></input>
      </div>
      <p>{Toggle ? "on" :"off"}</p>
    </div>
  )
};

export default Four;
