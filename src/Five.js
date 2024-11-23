import React, { useState } from "react"

const Five = (props) => {
    const [backgroundColor,SetbackgroundColor]=useState('white');
    const handleColor=()=>{
        const newColor = backgroundColor=='white' ? 'red':'blue';
        SetbackgroundColor(newColor);
    }
  return (
    <div style={{alignContent:'center'}}>
        <h1>change background when clicked</h1>
        <div onClick={handleColor} style={{backgroundColor,
            width:'200px ',
            height :'200px',
            cursor:'pointer'
        }} >
            click me to change color
        </div>
      
    </div>
  )
};

export default Five;
