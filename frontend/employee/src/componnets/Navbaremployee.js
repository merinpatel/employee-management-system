import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbaremployee() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">NavbarEmployee</a>
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
          <Link className="nav-link active" aria-current="page" to="/clockset">clock set</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/reportcard">report card</Link>
        </li>
        
       
        
      </ul>
      
    </div>
  </div>
</nav>
<img src='https://www.morebusiness.com/wp-content/uploads/2021/04/time-clocks.jpg'  alt='image not load'
      style={{
        height:"800px",width:"100%",borderImage:"inherit",borderBlockStyle:"ridge black 5px",position:"revert-layer",display:"block"
      }}
      
      />
    </div>
  )
}
