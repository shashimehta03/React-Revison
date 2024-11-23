import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';

function App() {
  return (
    <Router>
    <div>
        <ul>
            <li>
              <Link to='/'>Project</Link>
            </li>
            <li>
               <Link to='/one'>One</Link>
            </li>
            <li>
                <Link to='/two'>Two</Link>
            </li>
            <li>
                <Link to='/three'>Three</Link>
            </li>
            <li>
              <Link to='/four'>Four</Link>
            </li>
            <li>
              <Link to='/five'>Five</Link>
            </li>
            <li>
              <Link to='/six'>Six</Link>
            </li>

        </ul>
    
    <Routes>
    <Route path='/one' element={<One/>}/>
    <Route path='/two' element={<Two/>}/>
    <Route path='/three' element={<Three/>}/>
    <Route path='/four' element={<Four/>}/>
    <Route path ='/five' element={<Five/>}/>
    <Route Path ='/six' element={<six/>}/>
    </Routes>
    
    </div>
   </Router>
  );
}

export default App;
