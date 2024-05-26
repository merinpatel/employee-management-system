// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './componnets/Navbar';
// import Home from './componnets/Home';
// import Signup from './componnets/Signup';
import Login from './componnets/Login';
import Employee from './componnets/Employee';
import Newemployee from './componnets/Newemployee';
// import About from './componnets/About';
// import Contact from './componnets/Contact';
import Update from './componnets/Update';
import Delete from './componnets/Delete';
import Mail from './componnets/Mail';
// import Loginmanager from './componnets/Loginmanager';
import Register from './componnets/Register';
import Navbaremployee from './componnets/Navbaremployee';
import Clockset from './componnets/Clockset';
import Reportcard from './componnets/Reportcard';
import Add from './componnets/Add';
// import { useRef } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       
      <Routes >
        <Route path="/" element={<Register/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        {/* <Route path="/loginup" element={<Login/>}/> */}
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/newemployee" element={<Newemployee/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/mail/:id" element={<Mail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/navbaremployee" element={<Navbaremployee/>}/>
        <Route path="/clockset" element={<Clockset/>}/>
        <Route path="/reportcard/:id" element={<Reportcard/>}/>
        <Route path="/add" element={<Add/>}/>
        
        
        {/* <Route path="/loginmanager" element={<Loginmanager/>}/> */}
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
      {/* <About/>
      <Contact/> */}
    </div>
  );
}

export default App;
