import React from 'react'
import {Link,useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom'


const Navbar = (props) => {
  let navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  let location = useLocation();
 
  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid">
         <Link className="navbar-brand" to="/">iNotebook</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/" ? "active": ""}` } aria-current="page" to="/">Home</Link>
             </li>
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/about" ? "active": ""}` }to="/about">About</Link>
            </li>
          </ul>
        <div className={`mx-3 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
             <input className="form-check-input d-none" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?(<><i className="fa-regular fa-lightbulb"></i> Dark</>):(<><i className="fa-regular fa-lightbulb"></i> Light</>)} Mode</label>
        </div>
          {!localStorage.getItem('token')? <form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup"  role="button">Signup</Link>
        </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
      </div>
       </div>
  </nav>
  )
}

export default Navbar