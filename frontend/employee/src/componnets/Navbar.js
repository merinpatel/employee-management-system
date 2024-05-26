import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/loginup">Login</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/employee">Employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/newemployee">Newemployee</Link>
        </li>
        
       
        
      </ul>
      
    </div>
  </div>
</nav>
<img src='https://tse3.mm.bing.net/th?id=OIP.stcMVhxqSxmCuTT0RIe5SAHaFD&pid=Api&P=0&h=180'  alt='image not load'
      style={{
        height:"800px",width:"100%",borderImage:"inherit",borderBlockStyle:"ridge black 5px",position:"revert-layer",display:"block"
      }}
      
      />

    </div>
  )
}
