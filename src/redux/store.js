import React from "react"
import { configureStore ,createSlice } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // Correct import

import { Provider } from "react-redux";

//this is for react redux toolkit
const Store =configureStore({
    reducer:{
        counter: counterReducer
        
    },
})

export default Store;
