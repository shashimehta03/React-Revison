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
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Usememo from './usememo';

function Project(){
  return (
    <div className='App'>welcome to my project</div>
  );
}

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
              <Link to='/nine'>Nine</Link>
            </li>
            <li>
              <Link to='/ten'>Ten</Link>
            </li>
            <li>
              <Link to='/eleven'>Eleven</Link>
            </li>
            <li>
              <Link to='/twelve'>Twelve</Link>
            </li>
            <li>
              <Link to='/thirteen'>Thirteen</Link>
            </li>
            <li>
              <Link to='/fourteen'>Fourteen</Link>
            </li>
            
            <li>
              <Link to ='/usehook'>UseEffect</Link>
            </li>
            <li>
              <Link to='/usememo'>Use memo Hook</Link>
            </li>
            

        </ul>
    
    <Routes>
    <Route path='/' element={<Project/>}/>
    <Route path='/one' element={<One/>}/>
    <Route path='/two' element={<Two/>}/>
    <Route path='/three' element={<Three/>}/>
    <Route path='/four' element={<Four/>}/>
    <Route path ='/five' element={<Five/>}/>
    <Route path ='/six' element={<six/>}/> // this is not woking as router is implemented here
    <Route path='/seven' element={<Seven/>}/>
    <Route path='/eight' element={<Eight/>}/>
    <Route path='/nine' element={<Nine/>}/>
    <Route path='/usehook' element={<Use/>}/>
    <Route path='/ten' element={<Ten/>}/>
    <Route path ='/eleven' element={<Eleven/>}/>
    <Route path='/twelve' element={<Twelve/>}/>
    <Route path='/thirteen' element={<Thirteen/>}/>
    <Route path='/fourteen' element={<Fourteen/>}/>
    <Route path='/usememo' element={<Usememo/>}/>
    
    </Routes>
    
    </div>
   </Router>
  );
}

export default App;
