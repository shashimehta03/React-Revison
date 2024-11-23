import React, { useState } from "react"
const Three = (props) => {
    const [data,SetData]=useState(null);
    const [error, SetError]=useState(null);
    const apifetch=()=>{
        const url=('https://jsonplaceholder.typicode.com/posts/1');
        fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw new Error("error hai brioo");
            }
            else{
                return response.json();
                
            }
        })
        .then((data)=>{
            console.log(data);
            SetData(data);
            SetError(null);
        })
        .catch((error) => {
            SetError(error.message);
            SetData(null);
            console.error("Caught error: ", error.message);
        });

    }
    
   
  return (
    <div>
    <h1 >featch data</h1>
      <button onClick={apifetch}>Fetch Data</button>
      {
        data?(
            <>
            <h2>data</h2>
            <pre>{JSON.stringify(data,null,2)}</pre>
            </>
        ):(
            // error && <h2>Error: {error}</h2> 
            error &&
            <h2>{error}</h2>
          

        )
      }
    </div>
  )
};

export default Three;
