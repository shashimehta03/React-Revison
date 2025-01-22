import React from "react"
import ChildA from "./childA.js";

import { createContext } from "react";

const data= createContext();
const data1=createContext();

const Usecontext = (props) => {
    const name="shashi"
    const gender="male"
  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                 <ChildA/>
        </data1.Provider>
        </data.Provider>
      
    </div>
  )
};

export default Usecontext;
export {data,data1};
