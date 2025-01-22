import React, { useContext } from "react";
import { data, data1 } from "./usecontext";

const ChildC = (props) => {
  const name = useContext(data);  // Accessing value from data context
  const gender = useContext(data1);  // Accessing value from data1 context

  return (
    <div>
        <h1> use Accessing value from data parent class </h1>
        <h1>Avoid Prop Drilling</h1>
      <h3>data from child C: {name}</h3>
      <h3>gender from child C: {gender}</h3>
    </div>
  );
};

export default ChildC;
