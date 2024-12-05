import React, { useState } from "react"
import "./Twelve.css";

const Twelve = (props) => {
    const [mode ,setmode]=useState(false);
    const handelmode=()=>{
        setmode(!mode);
    };
  return (
    <div className={mode? "dark-theme" : "light-theme"}>
      <h1>Light Mode and Dark Mode</h1>
      <div>
        <h3>this shows the mode of area</h3>
        <input type="checkbox" onChange={handelmode} />
      </div>
      <p>{mode?"Dark":"Light"}</p>
    </div>
  )
};

export default Twelve;
