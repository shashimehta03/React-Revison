import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';

const Six = (props) => {
  return (
   
   <Router>
    <h1>Routing </h1>
    <div>
   
        <ul>
            <li>
               <Link to='/'>One</Link>
            </li>
            <li>
                <Link to='/two'>Two</Link>
            </li>
            <li>
                <Link to='/three'>Three</Link>
            </li>

        </ul>
    
    <Routes>
    <Route path='/' element={<One/>}/>
    <Route path='/two' element={<Two/>}/>
    <Route path='/three' element={<Three/>}/>

    </Routes>
    </div>
   </Router>
  )
};

export default Six;
