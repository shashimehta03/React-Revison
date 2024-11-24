import React, { useState } from "react"

const Eight = (props) => {
    const iteams=['apple','mango', 'apple green' , 'manog paka hua', 'mango kaacha' ,' apple manaki ka'];
    const [search ,setSearch]=useState('');
    const filteredItems=iteams.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <h1>filture impmented</h1>
      <input type="text" placeholder="search..." onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {filteredItems.map((item,index)=>(
                <li key={index}>{item}</li>
        ))
        }
      </ul>


    </div>
  )
};

export default Eight;
