import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Use from './Hooksuse';

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
            <li>
              <Link to='/seven'>Seven</Link>
            </li>
            <li>
              <Link to='/eight'>Eight</Link>
            </li>
            <li>
              <Link to ='/usehook'>UseEffect</Link>
            </li>

        </ul>
    
    <Routes>
    <Route path='/one' element={<One/>}/>
    <Route path='/two' element={<Two/>}/>
    <Route path='/three' element={<Three/>}/>
    <Route path='/four' element={<Four/>}/>
    <Route path ='/five' element={<Five/>}/>
    <Route path ='/six' element={<six/>}/> // this is not woking as router is implemented here
    <Route path='/seven' element={<Seven/>}/>
    <Route path='/eight' element={<Eight/>}/>
    <Route path='/usehook' element={<Use/>}/>
    
    </Routes>
    
    </div>
   </Router>
  );
}

export default App;
